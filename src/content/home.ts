/** Text of the home page (the pillar). Every figure comes from the kit (states.json, programs.json, params-2026.json). */
import { KIT as K } from '../lib/kit';
import type { FAQ, Helpers } from '../lib/page-types';

const E = K.E;
const C = K.C;
const ST = K.STATES;
const sonoStates = ST.filter(E.sonoLicensed);
const names = (a: typeof ST) => a.map((s) => s.name).join(', ');
const none = ST.filter((s) => E.radKind(s) === 'N');
const ex = K.S(K.EX.st);
const exSono = K.programsOf(ex.code, 'sono').length, exRad = K.programsOf(ex.code, 'rad').length;

/** The value sentence (RECETTE §2.4), shown on the home page, the About page and the method page. */
export const VALUE = `Search results for a sonographer or rad tech license send you to school directories that ask for your phone number, or to pages that say “all states require a license” or name four states without a source. This site reads the state table of the American Society of Radiologic Technologists and the page of each state agency, the fee pages of ARRT and ARDMS (the national x-ray and ultrasound certification boards) and IPEDS, the federal college database, and answers for your state: license or not, which agency, what the exams cost, and which schools train there. It sells nothing and passes on no contact details.`;

export const HOME = {
  title: 'Sonographer and Rad Tech License by State 2026: All 51',
  description: `Sonographer and rad tech license by state in 2026: ${C.radL + C.radA} jurisdictions credential x-ray techs, ${C.sono} license sonographers; agency, ARRT and ARDMS exam fees, schools.`,
  h1: 'Sonographer and rad tech license by state: the rules in all 50 states and DC',
  /** The answer in one sentence, one figure. */
  answer: `A sonographer needs a state license in only ${C.sono} places; an x-ray technologist needs a state credential in ${C.radL + C.radA} of the 50 states and DC.`,
  intro: `Pick your state. The example is ${ex.name}.`,
  resume: `Licensing in medical imaging depends on the modality and on the state. Read on ${K.day(K.READ)}, the state table of the American Society of Radiologic Technologists shows ${C.radL + C.radA} jurisdictions with a state credential for radiographers: ${C.radL} issue a license, certificate or permit and ${C.radA} an accreditation or registration (Illinois, Mississippi). ${C.radS} rely on a training standard without a license, and ${C.radN} have no rule for the profession (${names(none)}). Sonography is licensed in only ${C.sono} jurisdictions: ${names(sonoStates)}. Limited x-ray operators have a state credential in ${C.limited}. The national credentials sit on top: an ARRT primary application costs ${K.money(K.ARRT.primary)}; ARDMS charges ${K.money(K.ARDMS.spi)} for the SPI exam (ultrasound physics) and ${K.money(K.ARDMS.specialty)} for each specialty. In IPEDS, the federal college database, ${K.NATIONAL.rad.programs} radiography and ${K.NATIONAL.sono.programs} sonography programs reported graduates for 2023-24. In ${ex.name}, the example, a radiographer needs ${E.radAnswer(ex).toLowerCase().replace(/^yes, /, '')}, a sonographer ${E.sonoLicensed(ex) ? 'a license too' : 'no license'}, and ${exRad + exSono} programs reported graduates.`,
  faqs: [
    { q: 'Do sonographers need a license in every state?', a: `No. Only ${names(sonoStates)} issue a sonography license, according to the ASRT table read on ${K.day(K.READ)}. Elsewhere there is nothing to file with the state, and employers ask for an ARDMS or ARRT sonography credential instead.` },
    { q: 'Is this an official licensing site?', a: 'No. Sonographer By State is an independent site published by Radif Partners. It is not a state board, not ARRT, not ARDMS and not the ASRT. It reads their pages and links to each one, so you can check the source before you apply.' },
    { q: 'Why does a state page say its agency site “could not be opened”?', a: `Because the agency site of that state, ${C.blocked} of ${C.total} in all, answered our software with a refusal or not at all. We did not work around it. For those states, the answer comes from the ASRT table alone; contact the agency before you rely on it for a job.` },
    { q: 'How much do the national exams cost?', a: `ARRT charges ${K.money(K.ARRT.primary)} for a primary discipline application, ${K.money(K.ARRT.postprimary)} for a postprimary one. ARDMS charges ${K.money(K.ARDMS.spi)} for the SPI exam and ${K.money(K.ARDMS.specialty)} for each specialty exam, so ${K.money(K.ardmsCost(1))} for a first credential. State fees come on top where a state license exists.` },
    { q: 'Does this site show salaries?', a: 'No. Pay depends on the employer, the region and the shift, and the pages that list it are built for other purposes. This site covers what a state and the credentialing bodies require, what that costs, and where to train.' },
    { q: 'How current are the school figures?', a: 'The programs and awards come from the IPEDS completions file for July 2023 to June 2024, and the tuition and fees from the 2023-24 charges file, both downloaded from NCES on November 13, 2026. They are the latest complete files published; a school’s current price may differ.' },
  ] as FAQ[],
  /** Right under the calculator: how to read the answer. */
  start: (h: Helpers) => `
<h2>Reading the answer for your state</h2>
<p>The large word answers the most asked question: does an x-ray technologist need a state credential there? Under it, the same answer for sonographers and for limited x-ray operators, the other imaging jobs the state licenses (CT, MRI, nuclear medicine, radiation therapy…), the agency, and the number of radiography and sonography programs that reported graduates. Each state page adds the steps to apply, the state fee (the amount where the agency prints it online, ${C.fees} states so far; otherwise whom to ask), and the largest schools with their tuition. The ${h.a('method', 'method page')} explains each source.</p>
`,
  /** Open sections. */
  guide: (h: Helpers) => `
<h2>Sonographer and rad tech license by state: four kinds of states</h2>
<p><strong>States with a radiography license.</strong> ${C.radL} jurisdictions issue a license, a certification, a certificate or a permit. The word changes, the rule does not: you cannot take x-rays there without it. Most grant it on the strength of the ARRT exam. See the ${h.a('radiologic-technologist-license-by-state', 'rad tech license by state')}.</p>
<p><strong>Accreditation or registration.</strong> Illinois accredits technologists through its Emergency Management Agency ($120 for two years); Mississippi registers them. Same effect, different name.</p>
<p><strong>A standard without a license.</strong> ${names(ST.filter((s) => E.radKind(s) === 'S'))} expect education or national credentials but issue no license. Colorado says it plainly: it is a non-licensure state for ARRT-certified technologists.</p>
<p><strong>No rule.</strong> ${names(none)}: nothing to file with the state, and employers hire on ARRT.</p>
${h.mini('sono', { t: 'Sonographers: does your state license them?', p: ['st'] })}
<h2>Sonographers: five licensing jurisdictions</h2>
<p>${names(sonoStates)} license sonography; ${C.total - C.sono} do not. Everywhere, the ARDMS exams (SPI and a specialty, within ${K.ARDMS.windowYears} years) or the ARRT sonography discipline are what employers look for. Read the ${h.a('sonographer', 'sonographer guide')} and ${h.a('sonographer-license-by-state', 'the sonographer license by state')}.</p>
<h2>Exams, schools and moving</h2>
<p>The ${h.a('ardms-exam-cost', 'ARDMS cost calculator')} and the ${h.a('arrt-exam-cost', 'ARRT fee calculator')} add up the national fees. ${h.a('how-to-become-an-ultrasound-tech', 'How to become an ultrasound tech')} and ${h.a('radiology-tech-schools', 'radiology tech schools')} list the programs of each state. ${h.a('limited-x-ray-license', 'Limited x-ray licenses')} cover the shorter route, and ${h.a('rad-tech-license-another-state', 'moving to another state')} what changes when you cross a state line.</p>
<h2>All 50 states and DC at a glance</h2>
<p>Tap a state name to open its full page.</p>
${h.table(['State', 'X-ray technologist', 'Sonographer', 'Limited x-ray', 'Schools (2023-24)'], ST.map((s) => [`${h.a(s.slug, `${s.name} →`)}`, E.radCredential(s) ? E.radAnswer(s) : 'No state license', E.sonoAnswer(s), E.limitedWord(s) ? `Yes, a limited ${E.limitedWord(s)}` : 'No state license', `${K.programsOf(s.code, 'rad').length} x-ray · ${K.programsOf(s.code, 'sono').length} ultrasound`]), `State credentials (state table of the ASRT, read ${K.day(K.READ)}) and schools with graduates (IPEDS 2023-24)`, ['l', 'l', 'l', 'l', 'r'])}
`,
  /** Folded sections (<details>, content kept in the HTML). */
  folds: [
    { id: 'national', title: 'ARRT and ARDMS: the national credentials', html: (h: Helpers) => `
<p>ARRT certifies and registers radiologic technologists in radiography and in other disciplines, sonography among them. Its application fees, read on ${h.src('arrt_fees', 'its Application Fees page')}: ${K.money(K.ARRT.primary)} for a primary discipline, ${K.money(K.ARRT.postprimary)} for a postprimary one, ${K.money(K.ARRT.postprimarySupportArdms)} for a postprimary discipline earned through an ARDMS or NMTCB credential. Certification is renewed ${K.ARRT.renewal}, with continuing education ${K.ARRT.ce} and Continuing Qualifications Requirements ${K.ARRT.cqr} (${h.src('arrt_ongoing', 'ARRT ongoing requirements')}). ARRT also administers state licensing exams for many states, and developed three exams specifically for them: limited scope radiography, bone densitometry equipment operator and fluoroscopy (${h.src('arrt_state', 'ARRT state licensing')}).</p>
<p>ARDMS, run by Inteleos, credentials sonographers: RDMS (abdomen, obstetrics and gynecology and other specialties), RDCS (echocardiography) and RVT (vascular technology). Each needs the SPI exam (${h.src('ardms_spi', `${K.money(K.ARDMS.spi)}`)}) and a specialty exam (${h.src('ardms_ab', `${K.money(K.ARDMS.specialty)}`)}), passed within ${K.ARDMS.windowYears} years of each other. Renewal is ${K.ARDMS.renewal} (${h.src('ardms_renew', 'Inteleos renewal page')}).</p>
` },
    { id: 'schools', title: 'Where the programs are', html: (h: Helpers) => {
      const rank = [...ST].map((s) => ({ s, a: K.awardsOf(s.code, 'rad') + K.awardsOf(s.code, 'sono') })).sort((a, b) => b.a - a.a);
      return `
<p>The IPEDS completions file counts, for every college that takes federal student aid, the awards of each program. For July 2023 to June 2024, ${K.NATIONAL.rad.programs} radiography programs reported ${K.num(K.NATIONAL.rad.awards)} awards and ${K.NATIONAL.sono.programs} sonography programs ${K.num(K.NATIONAL.sono.awards)} (${h.src('ipeds', 'IPEDS C2024_A')}). The states that trained the most imaging graduates were ${rank.slice(0, 5).map((x) => `${h.a(x.s.slug, x.s.name)} (${K.num(x.a)})`).join(', ')}. ${names(rank.filter((x) => x.a === 0).map((x) => x.s))} reported none. Median in-state tuition and fees at public schools were ${K.money(E.nationalMedianTuition('rad') ?? 0)} a year in radiography and ${K.money(E.nationalMedianTuition('sono') ?? 0)} in sonography (${h.src('ipeds_ay', 'IPEDS IC2023_AY')}).</p>
`; } },
    { id: 'gaps', title: 'What this site does not know', html: (h: Helpers) => `
<p>${C.blocked} agency sites refused our software or did not answer; their states rely on the ASRT table alone, and each of those pages says so. The site does not show license fees that a state page did not print, the annual renewal amounts of ARRT and ARDMS (not on a page we could read), salaries, or anything medical. Hospital programs outside federal student aid are missing from the school counts. Read more on the ${h.a('method', 'method page')}.</p>
` },
  ],
  sources: ['asrt', 'arrt_fees', 'arrt_state', 'ardms_spi', 'ipeds', 'st_NY', 'st_CO', 'st_MT', 'st_VA'],
};
