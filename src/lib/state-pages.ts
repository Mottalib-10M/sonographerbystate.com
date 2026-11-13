/**
 * One page per state and DC. The rules come from src/data/states.json (ASRT table and the agency pages read on
 * 2026-11-13), the schools from src/data/programs.json (IPEDS); the prose is written by hand for each state in
 * src/content/states/*.ts (what is particular there), so no two pages read alike.
 */
import type { FAQ, PageDef } from './page-types';
import * as E from './engine/imaging';
import { licensedMods } from './engine/imaging';
import { NOTES_1 } from '../content/states/notes-1';
import { NOTES_2 } from '../content/states/notes-2';
import { NOTES_3 } from '../content/states/notes-3';

export interface StateNote {
  /** The particular answer for that state (what is distinctive there), one paragraph. */
  lead: string;
  /** How to apply there, in plain words (2 to 3 sentences). */
  how: string;
  /** Two questions proper to that state. */
  faqs: FAQ[];
}
export const NOTES: Record<string, StateNote> = { ...NOTES_1, ...NOTES_2, ...NOTES_3 };

/** First candidate whose length falls in [min, max] (RECETTE §11: titles 50-60, descriptions 150-160 characters). */
export function fit(cands: string[], min: number, max: number, what: string): string {
  const ok = cands.find((c) => c.length >= min && c.length <= max);
  if (!ok) throw new Error(`${what}: no candidate in [${min},${max}] (${cands.map((c) => c.length).join(', ')})`);
  return ok;
}

export function titleOf(st: E.State): string {
  const N = st.name;
  return fit([
    `${N} Rad Tech License 2026: Sonographer Rules, Schools`,
    `${N} Rad Tech License 2026: Sonographer Rules`,
    `${N} Rad Tech License 2026: Sonographers, Schools`,
    `${N} Rad Tech License 2026: Rules and Schools`,
    `${N} Rad Tech License 2026: Rules, Fees and Schools`,
    `${N} Rad Tech License 2026: Sonographer Rules and Schools`,
    `${N} Rad Tech License 2026: Sonographer and X-Ray Rules`,
    `${N} Rad Tech License 2026: Who Needs One, Schools`,
    `${N} Rad Tech License: Sonographer Rules`,
  ], 50, 60, `title ${st.code}`);
}

const radPhrase = (st: E.State) => ({ L: `needs a state ${E.radWord(st).replace(/^certified$/, 'certification')}`, A: `needs a state ${/register/i.test(st.mods.rad.std) ? 'registration' : 'accreditation'}`, S: 'needs no state license', N: 'needs no state license' })[E.radKind(st)];

export function descriptionOf(st: E.State): string {
  const N = st.name, r = E.programsOf(st.code, 'rad').length, s = E.programsOf(st.code, 'sono').length;
  const rad = `${N} rad tech license in 2026: an x-ray technologist ${radPhrase(st)}`;
  const sono = E.sonoLicensed(st) ? ', and so does a sonographer' : ', a sonographer needs none';
  const n = r + s;
  const tails = [`; the agency, the steps and ${n} programs with their tuition.`, `; the agency, the steps and ${n} programs with tuition.`, `; the agency, the steps and the ${n} programs.`, `; the agency, the steps and ${n} programs.`, `; agency, steps and ${n} programs with tuition.`, `; agency, steps, ${n} programs and tuition.`, `; agency, steps and ${n} schools.`, `; agency, steps, ${n} schools.`, '; the agency, the steps and the schools.', '; the agency, the steps, the schools.', '; agency, steps and schools.', '; agency, steps, schools.', ', with the schools.', ', with schools.', '.'];
  const mids = [sono, E.sonoLicensed(st) ? ', as does a sonographer' : ', a sonographer none', ''];
  const cands: string[] = [];
  for (const m of mids) for (const t of tails) cands.push(`${rad}${m}${t}`);
  return fit(cands, 150, 160, `description ${st.code}`);
}

/** Third question, from the IPEDS charges: what training costs in that state (named schools, so no two answers match). */
function costFaq(st: E.State): FAQ {
  const q = `How much does rad tech or sonography school cost in ${st.name}?`;
  const ps = [...E.programsOf(st.code, 'rad'), ...E.programsOf(st.code, 'sono')].filter((p) => p.instate);
  const exams = `On top come the national exam fees, the same in every state: ${E.money(E.ARRT.primary)} for the ARRT application, or ${E.money(E.ardmsCost(1))} for the ARDMS SPI and one specialty.`;
  if (!ps.length) return { q, a: `No ${st.name} school reported radiography or sonography graduates with a published price to IPEDS for 2023-24, so the cost depends on the state where you train, and on whether you pay its resident or its out-of-state rate. ${exams}` };
  const seen = new Set<string>();
  const inst = ps.sort((a, b) => (a.instate ?? 0) - (b.instate ?? 0)).filter((p) => (seen.has(p.name) ? false : (seen.add(p.name), true)));
  const more = inst.length > 5;
  inst.splice(5);
  const one = (p: E.Program) => `${p.name} in ${p.city}, ${E.money(p.instate ?? 0)}${p.outstate && p.outstate !== p.instate ? ` (${E.money(p.outstate)} for nonresidents)` : ''}`;
  let a = `Yearly tuition and required fees for residents in 2023-24, from the IPEDS charges file${more ? ', the five lowest' : ''}: ${inst.map(one).join('; ')}.`;
  const words = (t: string) => t.split(/\s+/).length;
  if (words(a) < 40) a += ' Multiply by the length of the program, one to four years depending on the award.';
  if (words(a) < 40) a += ` ${exams}`;
  return { q, a };
}

export function statePages(): PageDef[] {
  return E.STATES.map((st, i): PageDef => {
    const note = NOTES[st.code];
    if (!note) throw new Error(`No note for ${st.code}`);
    const kw = `${st.name} rad tech license`;
    const rad = E.programsOf(st.code, 'rad'), sono = E.programsOf(st.code, 'sono');
    const all = [...rad, ...sono].sort((a, b) => b.n - a.n).slice(0, 10);
    const medR = E.medianTuition(st.code, 'rad', 'public'), medS = E.medianTuition(st.code, 'sono', 'public');
    const credited = Object.entries(st.mods).filter(([, m]) => m.lic || m.std || m.eq);
    const feeRows = Object.entries(st.fees);
    const named = all.slice(0, 8).map((p) => `${p.name} in ${p.city} (${p.cip === 'rad' ? 'radiography' : 'sonography'}, ${p.n})`);
    const schools = all.length ? `By awards in 2023-24, the largest programs were ${named.length > 1 ? `${named.slice(0, -1).join(', ')} and ${named[named.length - 1]}` : named[0]}.` : `No school here reported radiography or sonography graduates to IPEDS for 2023-24.`;
    const others = licensedMods(st).filter((k) => !['rad', 'sono', 'limited'].includes(k)).map(E.modName);
    return {
      id: st.slug, group: 'states', order: 200 + i, slug: st.slug,
      nav: st.name,
      card: `X-ray: ${E.radAnswer(st).toLowerCase()} · sonography: ${E.sonoAnswer(st).toLowerCase()} · ${rad.length + sono.length} programs.`,
      title: titleOf(st), description: descriptionOf(st),
      h1: `${kw}: x-ray and sonographer rules`,
      intro: `${kw}: an x-ray technologist ${radPhrase(st)}, a sonographer ${E.sonoLicensed(st) ? 'too' : 'none'}; ${rad.length + sono.length} programs.`,
      resume: `${note.lead} ${st.say.join(' ')} ${schools}`.replace(/\s+/g, ' '),
      faqs: [...note.faqs, costFaq(st)],
      body: (h) => `
<h2>How to get the ${kw}</h2>
<p>${note.how}${others.length ? ` Also credentialed here: ${others.join(', ')}.` : ''}</p>
${credited.length ? h.table(['Modality', 'State credential'], credited.map(([k, m]) => [E.modName(k).replace(/^./, (c) => c.toUpperCase()), m.lic || (m.std ? `No license (${m.std.toLowerCase()})` : `No license (equipment rule: ${m.eq.toLowerCase()})`)]), `${st.name}: imaging modalities with a state rule (ASRT table, read November 13, 2026)`) : `<p>The ASRT table lists no state rule of any kind for imaging professionals in ${st.name}.</p>`}
${feeRows.length ? h.table(['Fee', 'Amount'], feeRows.map(([k, v]) => [k, E.money(v)]), `${st.name}: fees printed on the agency page, read November 13, 2026`) : ''}
<h2>${st.name} rad tech and sonography schools</h2>
${all.length ? h.table(['School', 'City', 'Program', 'Awards 2023-24', 'In-state tuition and fees'], all.map((p) => [p.name, p.city, p.cip === 'rad' ? 'Radiography' : 'Sonography', p.n, p.instate ? E.money(p.instate) : 'n/a']), `${st.name}: the largest of ${rad.length} radiography and ${sono.length} sonography programs; public in-state median ${medR ? E.money(medR) : 'n/a'} and ${medS ? E.money(medS) : 'n/a'} a year (IPEDS 2023-24)`, ['l', 'l', 'l', 'r', 'r']) : ''}
${h.mini('route', { t: `Tuition and exam: becoming a technologist in ${st.name}`, p: ['cip', 'yr'], d: { st: st.code } })}
`,
      tool: 'state', toolArg: { st: st.code },
      related: ['radiologic-technologist-license-by-state', 'sonographer-license-by-state', 'rad-tech-license-another-state', 'radiology-tech-schools'],
      sources: ['asrt', `st_${st.code}`, 'ipeds', 'ipeds_ay'],
    };
  });
}
