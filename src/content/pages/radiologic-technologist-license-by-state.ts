import { definePage } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';

const E = K.E;
const groups = { L: K.STATES.filter((s) => E.radKind(s) === 'L'), A: K.STATES.filter((s) => E.radKind(s) === 'A'), S: K.STATES.filter((s) => E.radKind(s) === 'S'), N: K.STATES.filter((s) => E.radKind(s) === 'N') };
const names = (a: typeof K.STATES) => a.map((s) => s.name).join(', ');

export default definePage({
  id: 'radiologic-technologist-license-by-state', group: 'guides', order: 107, slug: 'radiologic-technologist-license-by-state',
  nav: 'Rad tech license by state', card: `${groups.L.length + groups.A.length} jurisdictions issue a credential to radiographers; the word each uses, and the ${groups.N.length + groups.S.length} that do not.`,
  title: 'Radiologic Technologist License by State 2026: All 51',
  description: `Radiologic technologist license by state in 2026: ${groups.L.length + groups.A.length} of the 50 states and DC issue a license, certificate, permit or registration; each agency and the rest.`,
  h1: 'Radiologic technologist license by state: who issues what',
  intro: `A radiologic technologist license, certificate or permit is required in ${groups.L.length} jurisdictions, and an accreditation or registration in ${groups.A.length} more. Check yours.`,
  resume: `Read on ${K.day(K.READ)}, the state table of the American Society of Radiologic Technologists sorts the 50 states and DC into four groups for radiography. ${groups.L.length} issue a state credential, under different names: a license in most, a certification in states such as California, Florida, Arizona and Texas, a certificate in Delaware and Tennessee, a permit in Iowa. ${groups.A.length} use another form: ${names(groups.A)} (an accreditation in Illinois, a registration in Mississippi). ${groups.S.length} have no license but a training standard: ${names(groups.S)}. ${groups.N.length} have no rule for the profession: ${names(groups.N)}. ARRT itself writes that more than 75% of states have licensing laws covering radiologic technology. Where a state credential exists, the ARRT exam is usually the way in, but you apply to the state separately.`,
  faqs: [
    { q: 'Which states do not require a license for radiologic technologists?', a: `${names([...groups.S, ...groups.N])}, according to the ASRT table we read. In ${names(groups.S)}, a training standard still applies; Colorado, for example, says plainly that it is a non-licensure state for ARRT-certified technologists.` },
    { q: 'Is a state certification the same as a license?', a: 'For the job, yes: you cannot take x-rays in that state without it. The name changes with the state: license, certification, certificate, permit, accreditation or registration. The ASRT table treats them all as licensure, “any form of permission granted by state to practice”.' },
    { q: 'Do I need both ARRT and a state license?', a: 'In the states that issue a credential, usually yes: the state grants its license on the strength of the ARRT exam, and many employers also want ARRT registration kept current. In states without a credential, ARRT certification is what employers check.' },
  ],
  body: (h) => `
<h2>Radiologic technologist license by state, in four groups</h2>
${h.table(['Group', 'States', 'What it means'], [
  ['State license, certificate or permit', String(groups.L.length), 'Apply to the state agency, usually with the ARRT result'],
  ['State accreditation or registration', `${groups.A.length}: ${names(groups.A)}`, 'Same in practice: a state credential to hold'],
  ['Training standard, no license', `${groups.S.length}: ${names(groups.S)}`, 'Education or national credentials expected; nothing to file'],
  ['No state rule', `${groups.N.length}: ${names(groups.N)}`, 'Employers hire on ARRT'],
], 'Radiography in the 50 states and DC (ASRT table, read November 13, 2026)')}
${h.mini('limited', { t: 'Limited x-ray operator: is there a permit in your state?', p: ['st'] })}
<h2>All 51 jurisdictions</h2>
${h.table(['State', 'Radiography', 'Limited operator', 'Agency'], K.STATES.map((s) => [h.a(s.slug, s.name), E.radAnswer(s), E.limitedWord(s) || 'None', s.agency]), 'State credentials for radiography and limited x-ray (ASRT table)')}
<p>Moving? The ${h.a('rad-tech-license-another-state', 'moving checker')} compares two states. The ${h.a('arrt-exam-cost', 'ARRT fees')} come before any state fee.</p>
`,
  tool: 'rad',
  related: ['how-to-become-a-radiology-tech', 'limited-x-ray-license', 'rad-tech-license-another-state', 'arrt-exam-cost'],
  sources: ['asrt', 'arrt_state', 'st_CO', 'st_NY', 'st_TX', 'st_CA'],
});
