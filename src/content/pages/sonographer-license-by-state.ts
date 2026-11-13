import { definePage } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';

const E = K.E;
const lic = K.STATES.filter(E.sonoLicensed);

export default definePage({
  id: 'sonographer-license-by-state', group: 'guides', order: 106, slug: 'sonographer-license-by-state',
  nav: 'Sonographer license by state', card: `Only ${lic.length} places license sonographers; the agency of each, and what the other states ask instead.`,
  title: 'Sonographer License by State 2026: The 5 That Require One',
  description: `Sonographer license by state in 2026: only ${lic.length} of the 50 states and DC require one, Oregon and New Mexico among them; your state, its agency, the ARDMS exams.`,
  h1: 'Sonographer license by state: which states require one',
  intro: `A sonographer license is required in ${lic.length} of the 50 states and DC. Pick your state: the answer, the agency and its sonography programs.`,
  resume: `The American Society of Radiologic Technologists keeps a state-by-state table of imaging regulation; read on ${K.day(K.READ)}, it lists a state credential for sonography in only ${lic.length} jurisdictions: ${lic.map((s) => `${s.name} (${s.mods.sono.lic.toLowerCase()}, ${s.agency})`).join('; ')}. Everywhere else, no state license exists for sonographers, and employers rely on the national credentials: ARDMS (RDMS, RDCS, RVT) or ARRT sonography. Those five are also among the states that license nearly every imaging modality, from radiography to MRI. Some claims seen online, such as “all states require ultrasound techs to have a license”, do not match the table; others name four states and forget the District of Columbia.`,
  faqs: [
    { q: 'Which states require a sonography license?', a: `${lic.map((s) => s.name).join(', ')}, according to the ASRT state table read on ${K.day(K.READ)}. In those five jurisdictions a sonographer applies to the state agency with an ARDMS or ARRT credential; in the 46 others there is no sonography license.` },
    { q: 'Do I need a license to work as a sonographer in Texas or California?', a: 'No. Neither Texas nor California issues a sonography license, according to the ASRT table. Both credential radiologic technologists, but a sonographer works there on the ARDMS or ARRT credential that employers ask for. Check the job posting for the exact credential it names.' },
    { q: 'Does a sonography license transfer between states?', a: 'No: each of the five licensing jurisdictions issues its own license on its own application. The national ARDMS or ARRT credential, on the other hand, is valid everywhere. The moving guide checks what changes between two states. Apply to the new jurisdiction before your first shift there.' },
  ],
  body: (h) => `
<h2>Sonographer license by state: the five jurisdictions</h2>
${h.table(['Jurisdiction', 'Sonography credential', 'Agency', 'Our reading of its page'], lic.map((s) => [h.a(s.slug, s.name), s.mods.sono.lic, s.agency, s.read === 'read' ? 'Read November 13, 2026' : 'Refused our reader']), 'Jurisdictions with a state sonography credential (ASRT table)')}
<p>New Mexico and North Dakota say more on their own pages: New Mexico’s Medical Imaging and Radiation Therapy Program mails certificates in 15 to 20 business days, and North Dakota offers a conditional license to sonography students.</p>
${h.mini('ardms', { t: 'The national exams first: your ARDMS fees', p: ['sp'] })}
<h2>States without a sonographer license</h2>
<p>In the other ${K.C.total - lic.length} states, there is nothing to file with the state. Some of them license radiographers (see ${h.a('radiologic-technologist-license-by-state', 'the rad tech license by state')}); that license does not cover ultrasound. Each state page of this site gives both answers, and the ${h.a('ultrasound-tech-vs-radiology-tech', 'comparison of the two careers')} puts them side by side.</p>
`,
  tool: 'sono',
  related: ['sonographer', 'ardms-exam-cost', 'rad-tech-license-another-state', 'ultrasound-tech-vs-radiology-tech'],
  sources: ['asrt', 'st_NH', 'st_NM', 'st_ND', 'st_OR', 'st_DC', 'ardms_spi'],
});
