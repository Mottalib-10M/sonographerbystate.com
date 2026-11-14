/**
 * The calculators of the site, rendered by components/calc/SpecTool.tsx (full tool) and MiniSim.tsx (mini-simulator).
 * Every answer comes from the engine (lib/engine/imaging.ts): the ASRT state table and the agency pages read on
 * November 13, 2026, the ARRT and ARDMS fee pages read the same day, and the IPEDS program files. `arg` overrides the
 * default of any field. This file ships to the browser.
 */
import type { ToolSpec, V, Input, ToolOut } from './tool-types';
import * as E from './engine/imaging';

const s = (v: V, k: string) => String(v[k]);
const n = (v: V, k: string) => Number(v[k]) || 0;
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
export const longDate = (iso: string) => `${MONTHS[Number(iso.slice(5, 7)) - 1]} ${Number(iso.slice(8, 10))}, ${iso.slice(0, 4)}`;

/** ONE example case for the whole site: Texas, a sonography associate degree. */
export const EX = { st: 'TX', cip: 'sono', years: 2 } as const;

const STATE = (def: string = EX.st, label = 'State where you will work', id = 'st'): Input => ({ kind: 'select', id, label, def, options: E.STATE_OPTIONS, help: id === 'st' ? 'The state rules apply where you take the images' : undefined });
const CIP: Input = { kind: 'choice', id: 'cip', label: 'Career', def: EX.cip, options: [{ value: 'sono', label: 'Sonographer (ultrasound)' }, { value: 'rad', label: 'Radiologic technologist (x-ray)' }] };
const cipOf = (v: V) => (s(v, 'cip') === 'rad' ? 'rad' : 'sono') as E.Cip;
const job = (c: E.Cip) => (c === 'sono' ? 'sonography' : 'radiography');
const ASRT = 'the state table of the American Society of Radiologic Technologists (ASRT, the national association of the profession)';
const read = (st: E.State) => (st.read === 'read'
  ? `Rule from ${ASRT}, checked against the page of ${st.agency} on ${longDate(E.READ)}.`
  : `Rule from ${ASRT}, read on ${longDate(E.READ)}. The site of ${st.agency} could not be opened by our software, so this answer comes from that table alone: ask the agency before you apply.`);
const tuition = (x: number | null) => (x === null ? 'No figure reported' : `${E.money(x)} a year`);
/** The tools below only ask for a state: no figure to change (naive testers 2026-11-14). */
const PICK = 'pick another state above to see its answer';
const PROGRAMS_LABEL = 'Schools with graduates in 2023-24 (IPEDS, the federal college database)';

type Arg = Record<string, number | string>;
function spec(inputs: Input[], arg: Arg, run: (v: V) => ToolOut): ToolSpec {
  return {
    inputs: inputs.map((i) => (arg[i.id] === undefined ? i : { ...i, def: (i.kind === 'choice' || i.kind === 'select') ? String(arg[i.id]) : Number(arg[i.id]) } as Input)),
    run,
  };
}

/** Everything about one state: the two careers, the limited permit, the agency, the programs. */
function stateAnswer(v: V): ToolOut {
  const st = E.byCode(s(v, 'st'));
  const mods = E.licensedMods(st).filter((k) => !['rad', 'sono', 'limited'].includes(k)).map(E.modName);
  return {
    label: `${st.name}: state license for an x-ray technologist`, value: E.radShort(st),
    sub: `${E.radAnswer(st)} · sonographer: ${E.sonoAnswer(st).toLowerCase()}`,
    rows: [
      ['X-ray technologist (radiologic technologist)', E.radAnswer(st)],
      ['Sonographer (ultrasound)', E.sonoAnswer(st)],
      ['Limited x-ray operator (a shorter x-ray permit)', E.limitedAnswer(st)],
      ['Other imaging jobs the state licenses', mods.length ? mods.join(', ') : 'None listed'],
      [E.radCredential(st) || E.sonoLicensed(st) ? 'Agency that issues it' : 'State radiation agency (no technologist license)', st.agency],
      ['State fee', E.feeLine(st)],
      [PROGRAMS_LABEL, `${E.programsOf(st.code, 'rad').length} x-ray (radiography), ${E.programsOf(st.code, 'sono').length} ultrasound (sonography)`],
    ],
    // ARRT and ARDMS spelled out here, once, right above the state page summary (ContentPage seeds them as seen).
    note: `${read(st)} Employers check the national credentials: ARRT (American Registry of Radiologic Technologists, the national x-ray certification board) and ARDMS (American Registry for Diagnostic Medical Sonography, the national ultrasound certification board).`,
    example: `Example: ${st.name}`, exampleAide: PICK,
  };
}

/** Programs of a state, with their awards and tuition. */
function programsAnswer(v: V): ToolOut {
  const st = E.byCode(s(v, 'st')), c = cipOf(v);
  const ps = E.programsOf(st.code, c);
  const med = E.medianTuition(st.code, c, 'public');
  return {
    label: `${st.name}: ${job(c)} programs with graduates in 2023-24`, value: String(ps.length),
    sub: `${E.awardsOf(st.code, c).toLocaleString('en-US')} graduates · public in-state tuition and fees, median: ${tuition(med)}`,
    rows: [['Programs', String(ps.length)], ['Graduates in 2023-24', E.awardsOf(st.code, c).toLocaleString('en-US')], ['Median public in-state tuition and fees (2023-24)', tuition(med)]],
    table: ps.length ? {
      caption: `${st.name}: ${job(c)} programs, largest first (IPEDS)`, headers: ['School', 'City', 'Graduates 2023-24', 'In-state tuition and fees 2023-24'],
      rows: ps.slice(0, 12).map((p) => [p.name, p.city, String(p.n), p.instate ? E.money(p.instate) : 'Not reported']), align: ['l', 'l', 'r', 'r'],
    } : undefined,
    note: `IPEDS files (the federal college database of NCES, the National Center for Education Statistics): completions July 2023 to June 2024 (C2024_A), tuition and required fees 2023-24 (IC2023_AY). Hospital programs that take no federal student aid do not report to IPEDS and are missing here.${ps.length > 12 ? ` The 12 largest of ${ps.length} are shown.` : ''}`,
    example: `Example: ${job(c)} in ${st.name}`,
  };
}

const SPECS: Record<string, (arg?: Arg) => ToolSpec> = {
  /** Home and state pages: the two careers in one state. */
  state: (arg = {}) => spec([STATE()], arg, stateAnswer),

  /** Sonographer license by state. */
  sono: (arg = {}) => spec([STATE()], arg, (v) => {
    const st = E.byCode(s(v, 'st'));
    const lic = E.sonoLicensed(st);
    return {
      label: `${st.name}: state license for a sonographer`, value: lic ? 'Yes' : 'No',
      sub: lic ? `${E.sonoAnswer(st)} from ${st.agency}` : 'Employers usually ask for a national credential instead: ARDMS or ARRT (the two national certification boards)',
      rows: [
        ['Sonography license', E.sonoAnswer(st)],
        ['States and DC that license sonographers', `${E.counts().sono}: ${E.STATES.filter(E.sonoLicensed).map((x) => x.name).join(', ')}`],
        ['ARDMS exams (the ultrasound physics exam, called SPI, + one specialty)', E.money(E.ardmsCost(1))],
        ['Sonography schools in the state (IPEDS, federal data)', String(E.programsOf(st.code, 'sono').length)],
      ],
      note: read(st),
      example: `Example: ${st.name}`, exampleAide: PICK,
    };
  }),

  /** Radiologic technologist license by state. */
  rad: (arg = {}) => spec([STATE()], arg, (v) => {
    const st = E.byCode(s(v, 'st'));
    const k = E.radKind(st);
    return {
      label: `${st.name}: state credential to take x-rays`, value: E.radShort(st),
      sub: E.radAnswer(st),
      rows: [
        ['What the state issues', E.radAnswer(st)],
        ['Issued by', st.agency],
        ['State fee', E.feeLine(st)],
        ['Limited x-ray operator', E.limitedAnswer(st)],
        ['ARRT exam (American Registry of Radiologic Technologists, first credential)', E.money(E.ARRT.primary)],
        ['What to do', k === 'L' || k === 'A' ? `Pass the exam the state accepts, then apply to ${st.agency}` : 'No state application: employers ask for ARRT certification'],
      ],
      note: read(st),
      example: `Example: ${st.name}`, exampleAide: PICK,
    };
  }),

  /** Limited scope x-ray operator by state. */
  limited: (arg = {}) => spec([STATE()], arg, (v) => {
    const st = E.byCode(s(v, 'st'));
    const w = E.limitedWord(st);
    return {
      label: `${st.name}: limited x-ray credential`, value: w ? 'Yes' : 'No',
      sub: w ? `A limited ${w}, issued by ${st.agency}` : 'The ASRT table lists no limited credential here',
      rows: [
        ['Limited x-ray operator', E.limitedAnswer(st)],
        ['Full radiographer', E.radAnswer(st)],
        ['States and DC with a limited credential', String(E.counts().limited)],
      ],
      note: read(st),
      example: `Example: ${st.name}`, exampleAide: PICK,
    };
  }),

  /** ARDMS exam fees. */
  ardms: (arg = {}) => spec([
    { id: 'sp', label: 'Specialty exams you will take', def: 1, max: 6, help: 'Abdomen, pregnancy and women’s health (OB/GYN), heart (adult echo), blood vessels (vascular)…' },
    { id: 'spi', label: 'Attempts at the SPI exam (the ultrasound physics exam)', short: 'SPI attempts', def: 1, max: 6, adv: true },
    { id: 're', label: 'Specialty exams taken again', short: 'specialty retakes', def: 0, max: 10, adv: true },
  ], arg, (v) => {
    const sp = Math.max(1, Math.round(n(v, 'sp'))), spi = Math.max(1, Math.round(n(v, 'spi'))), re = Math.max(0, Math.round(n(v, 're')));
    const total = E.ardmsCost(sp, spi, re);
    return {
      label: 'ARDMS exam fees in total', value: E.money(total),
      sub: `SPI ${E.money(E.ARDMS.spi)} × ${spi} + specialty ${E.money(E.ARDMS.specialty)} × ${sp + re}`,
      rows: [
        ['SPI exam (Sonography Principles and Instrumentation, the physics exam)', `${E.money(E.ARDMS.spi)} × ${spi}`],
        ['Specialty exams', `${E.money(E.ARDMS.specialty)} × ${sp + re}`],
        ['Time limit', `SPI and the specialty passed within ${E.ARDMS.windowYears} years of each other`],
        ['Then', `Annual renewal: ${E.ARDMS.renewal}`],
      ],
      note: `Exam fees read on the Inteleos exam pages (Inteleos runs the exams of ARDMS, the American Registry for Diagnostic Medical Sonography) on ${longDate(E.READ)}. The annual renewal amount is not shown: we could not read it on an official page.`,
      example: `Example: SPI once and ${sp} specialty exam${sp > 1 ? 's' : ''}`,
    };
  }),

  /** ARRT application fees. */
  arrt: (arg = {}) => spec([
    { kind: 'choice', id: 'pr', label: 'Is this your first ARRT certification? (x-ray, nuclear medicine, radiation therapy, MRI or ultrasound)', def: 'yes', options: [{ value: 'yes', label: 'Yes, my first one' }, { value: 'no', label: 'No, I already hold one' }] },
    { id: 'pp', label: 'Extra specialties added on top (CT scan, mammography, MRI, bone density…)', short: 'extra specialties', def: 0, max: 6 },
    { id: 'su', label: 'Extra specialties based on an ultrasound (ARDMS) or nuclear medicine (NMTCB) certification instead of ARRT', short: 'extra specialties via another board', def: 0, max: 4, adv: true },
  ], arg, (v) => {
    const pr = s(v, 'pr') === 'yes' ? 1 : 0, pp = Math.max(0, Math.round(n(v, 'pp'))), su = Math.max(0, Math.round(n(v, 'su')));
    const total = E.arrtCost(pr, pp, su);
    return {
      label: 'ARRT application fees in total', value: E.money(total),
      sub: `${pr ? `first certification ${E.money(E.ARRT.primary)}` : 'no first certification'} + ${pp} extra × ${E.money(E.ARRT.postprimary)}${su ? ` + ${su} extra based on ARDMS or NMTCB × ${E.money(E.ARRT.postprimarySupportArdms)}` : ''}`,
      rows: [
        ['First certification (ARRT calls it “primary”)', pr ? E.money(E.ARRT.primary) : '$0'],
        ['Extra specialties (ARRT calls them “postprimary”)', `${E.money(E.ARRT.postprimary)} × ${pp}`],
        ['Extra specialties based on ARDMS or NMTCB', `${E.money(E.ARRT.postprimarySupportArdms)} × ${su}`],
        ['Then', `Renewal ${E.ARRT.renewal}; continuing education ${E.ARRT.ce}`],
      ],
      note: `Fees read on the Application Fees page of ARRT (American Registry of Radiologic Technologists) on ${longDate(E.READ)}. NMTCB is the Nuclear Medicine Technology Certification Board. Reinstatement: ${E.money(E.ARRT.reinstateOnline)} online, ${E.money(E.ARRT.reinstateExam)} by re-examination. A state fee comes on top where your state licenses x-ray technologists: each state page gives it when the agency prints it, or says whom to ask.`,
      example: pr ? 'Example: a first ARRT credential' : 'Example: an added discipline',
    };
  }),

  /** Cost of the route: tuition at the state's public schools for the years of study, plus the exam fees. */
  route: (arg = {}) => spec([CIP, STATE(EX.st, 'State where you will study'), { id: 'yr', label: 'Years of study', def: EX.years, max: 6, decimals: 1, help: 'Associate degree: 2 years; bachelor’s: 4' }], arg, (v) => {
    const st = E.byCode(s(v, 'st')), c = cipOf(v), yr = Math.max(0.5, Math.min(6, n(v, 'yr') || EX.years));
    const med = E.medianTuition(st.code, c, 'public') ?? E.nationalMedianTuition(c);
    const local = E.medianTuition(st.code, c, 'public') !== null;
    const exam = c === 'sono' ? E.ardmsCost(1) : E.ARRT.primary;
    // State fee: added only when the state credentials this career AND its agency page prints the application fee.
    const needs = c === 'sono' ? E.sonoLicensed(st) : E.radCredential(st);
    const fee = needs ? E.appFee(st) : null;
    const total = (med ?? 0) * yr + exam + (fee?.amount ?? 0);
    return {
      label: `${job(c)[0].toUpperCase()}${job(c).slice(1)} in ${st.name}: tuition, exam${fee ? ' and state fee' : ''}`, value: E.money(total),
      sub: `${E.money(med ?? 0)} a year × ${yr} + ${c === 'sono' ? 'national ultrasound exams (ARDMS)' : 'national x-ray exam (ARRT)'} ${E.money(exam)}${fee ? ` + state ${fee.what} ${E.money(fee.amount)}` : ''}`,
      rows: [
        [local ? `Median public in-state tuition and fees in ${st.name}` : 'National median public in-state tuition and fees (no public program reported in the state)', `${E.money(med ?? 0)} a year (2023-24)`],
        ['Years of study', String(yr)],
        [c === 'sono' ? 'National ultrasound exams (ARDMS: physics + one specialty)' : 'National x-ray exam (ARRT, first certification)', E.money(exam)],
        ['State license', c === 'sono' ? E.sonoAnswer(st) : E.radAnswer(st)],
        ['State fee', !needs ? 'None: no state license for this career' : fee ? `${E.money(fee.amount)} (${fee.what}), added` : `${E.feeLine(st)}; not added`],
      ],
      note: 'Tuition and required fees only: books, uniforms, housing and travel to clinical sites are not included. The figure is the median 2023-24 in-state charge reported to IPEDS (the federal college database) by the public schools of the state that award this discipline; your school’s price governs.',
      example: `Example: ${job(c)}, ${yr} years in ${st.name}`,
    };
  }),

  /** Programs in a state. */
  programs: (arg = {}) => spec([CIP, STATE(EX.st, 'State')], arg, programsAnswer),

  /** Sonographer against radiologic technologist in one state. */
  compare: (arg = {}) => spec([STATE()], arg, (v) => {
    const st = E.byCode(s(v, 'st'));
    const mr = E.medianTuition(st.code, 'rad', 'public'), ms = E.medianTuition(st.code, 'sono', 'public');
    return {
      label: `${st.name}: which career needs a state license`, value: `${E.radShort(st)} / ${E.sonoLicensed(st) ? 'Yes' : 'No'}`,
      sub: 'X-ray technologist / sonographer',
      rows: [['Schools in the state', `${E.programsOf(st.code, 'rad').length} x-ray, ${E.programsOf(st.code, 'sono').length} ultrasound`]],
      table: { caption: `${st.name}: the two careers side by side`, headers: ['', 'Radiologic technologist', 'Sonographer'], rows: [
        ['State license', E.radAnswer(st), E.sonoAnswer(st)],
        ['National exam', `ARRT, ${E.money(E.ARRT.primary)}`, `ARDMS physics + specialty, ${E.money(E.ardmsCost(1))}`],
        ['Schools in the state (IPEDS, federal data)', String(E.programsOf(st.code, 'rad').length), String(E.programsOf(st.code, 'sono').length)],
        ['Graduates in 2023-24', E.awardsOf(st.code, 'rad').toLocaleString('en-US'), E.awardsOf(st.code, 'sono').toLocaleString('en-US')],
        ['Median public in-state tuition and fees', tuition(mr), tuition(ms)],
      ], align: ['l', 'l', 'l'] },
      note: read(st),
      example: `Example: ${st.name}`, exampleAide: PICK,
    };
  }),

  /** Moving: licensed in one state, working in another. */
  move: (arg = {}) => spec([STATE('OH', 'State you work in now', 'st'), STATE('TX', 'State you are moving to', 'to'), CIP], arg, (v) => {
    const a = E.byCode(s(v, 'st')), b = E.byCode(s(v, 'to')), c = cipOf(v);
    const need = c === 'sono' ? E.sonoLicensed(b) : ['L', 'A'].includes(E.radKind(b));
    return {
      label: `Moving from ${a.name} to ${b.name}: new state credential`, value: need ? 'Yes' : 'No',
      sub: need ? `Apply to ${b.agency}` : `${b.name} issues no ${c === 'sono' ? 'sonography' : 'radiography'} credential: your national credential travels with you`,
      rows: [
        [`${b.name}`, c === 'sono' ? E.sonoAnswer(b) : E.radAnswer(b)],
        [`${a.name}`, c === 'sono' ? E.sonoAnswer(a) : E.radAnswer(a)],
        ['National credential', c === 'sono' ? 'ARDMS, the national ultrasound board (or the sonography credential of ARRT, the x-ray board): valid in every state' : 'ARRT, the national x-ray board: valid in every state, renewed every year'],
        ['Agency to contact', b.agency],
      ],
      note: `A state credential does not transfer: each state issues its own. ${read(b)}`,
      example: `Example: ${c === 'sono' ? 'a sonographer' : 'an x-ray technologist'} moving from ${a.name} to ${b.name}`,
    };
  }),
};

export function getTool(kind: string, arg?: Arg): ToolSpec {
  const f = SPECS[kind];
  if (!f) throw new Error(`Unknown tool ${kind}`);
  return f(arg);
}
export const TOOL_KINDS = Object.keys(SPECS);
export const STATES = E.STATES;
