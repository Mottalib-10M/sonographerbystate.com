import { definePage } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';

const E = K.E;
const sonoStates = K.STATES.filter(E.sonoLicensed);
const aw = E.awardsByLevel('sono');
const medPub = E.nationalMedianTuition('sono');

export default definePage({
  id: 'sonographer', group: 'guides', order: 101, slug: 'sonographer',
  nav: 'Sonographer: the job and the route', card: 'What a sonographer does, the ARDMS route, the five places with a license, and what training costs by state.',
  title: 'Sonographer 2026: Training, ARDMS Exams and State License',
  description: `Sonographer in 2026: the training route, ARDMS exam fees (${K.money(K.ARDMS.spi)} SPI plus ${K.money(K.ARDMS.specialty)} per specialty), the five places with a license, and tuition in your state.`,
  h1: 'Sonographer: training, ARDMS exams and state license',
  intro: `A sonographer needs a state license in only ${K.C.sono} places; everywhere, employers ask for ARDMS or ARRT credentials, whose first two exams cost ${K.money(K.ardmsCost(1))}.`,
  resume: `A sonographer, also called a diagnostic medical sonographer or ultrasound technician, operates ultrasound equipment to produce the images a physician reads. The usual route is an accredited program, most often an associate degree, then the ARDMS exams: the Sonography Principles and Instrumentation (SPI) exam at ${K.money(K.ARDMS.spi)} and a specialty exam at ${K.money(K.ARDMS.specialty)}, passed within ${K.ARDMS.windowYears} years of each other, as the Inteleos exam pages read on ${K.day(K.READ)} state. Only ${sonoStates.map((s) => s.name).join(', ')} issue a sonography license, according to the state table of the American Society of Radiologic Technologists. In the federal IPEDS files, ${K.NATIONAL.sono.programs} sonography programs reported ${K.num(K.NATIONAL.sono.awards)} awards for 2023-24, of which ${K.num(aw.assoc ?? 0)} associate degrees, ${K.num(aw.cert ?? 0)} certificates and ${K.num(aw.bach ?? 0)} bachelor’s degrees.`,
  faqs: [
    { q: 'What is the difference between a sonographer and an ultrasound tech?', a: 'None in practice: “ultrasound technician” is the everyday name, “diagnostic medical sonographer” the professional one used by the federal program code (CIP 51.0910) and by ARDMS. Job postings use both. The training, the exams and the state rules on this site are the same whichever title an employer uses.' },
    { q: 'How long does it take to become a sonographer?', a: `As long as the program you choose. In the IPEDS files for 2023-24, most sonography awards were associate degrees (${K.num(aw.assoc ?? 0)}), which IPEDS defines as at least two but less than four years of full-time study, then certificates and bachelor’s degrees. Add the time to sit the SPI and specialty exams, which ARDMS lets you pass up to ${K.ARDMS.windowYears} years apart.` },
    { q: 'Is sonographer a licensed profession?', a: `In ${K.C.sono} places only: ${sonoStates.map((s) => s.name).join(', ')}. Elsewhere there is no state license, and the ARDMS or ARRT sonography credential plays that role for employers. The page on the sonographer license by state gives the agency of each licensing jurisdiction.` },
  ],
  body: (h) => `
<h2>The sonographer route, step by step</h2>
<p>First, an accredited program in diagnostic medical sonography, with supervised scanning in a clinic. Then the ARDMS exams: SPI once, plus one specialty for the credential you want (abdomen or obstetrics and gynecology for RDMS, adult echocardiography for RDCS, vascular technology for RVT). Then, in ${K.C.sono} places, a state license. The ${h.a('ardms-exam-cost', 'ARDMS exam cost calculator')} adds up the fees and retakes.</p>
<p>The calculator at the top estimates tuition and exam fees for your state and your years of study, from the median ${K.money(medPub ?? 0)} yearly in-state tuition and fees of public sonography schools nationwide (2023-24), or the median of your state when its public schools report one.</p>
<h2>Where sonographers need a license</h2>
${h.table(['Jurisdiction', 'Credential', 'Agency'], sonoStates.map((s) => [h.a(s.slug, s.name), s.mods.sono.lic, s.agency]), `The ${sonoStates.length} jurisdictions that license sonography (ASRT table, read ${K.day(K.READ)})`)}
<p>Everywhere else, the state does not license sonographers. See ${h.a('sonographer-license-by-state', 'the sonographer license by state')} for the full list, and ${h.a('ultrasound-tech-vs-radiology-tech', 'sonographer or x-ray technologist')} to compare the two careers.</p>
${h.mini('ardms', { t: 'Your ARDMS exam fees', p: ['sp'] })}
<h2>Sonographer programs and what they cost</h2>
<p>Public schools reported a median in-state tuition and fees of ${K.money(medPub ?? 0)} a year for 2023-24; private schools charge several times more. The ${h.a('how-to-become-an-ultrasound-tech', 'ultrasound tech guide')} lists the programs of each state. No salary figure is given on this site: pay depends on the employer and the region.</p>
`,
  tool: 'route', toolArg: { cip: 'sono' },
  related: ['how-to-become-an-ultrasound-tech', 'ardms-exam-cost', 'sonographer-license-by-state', 'ultrasound-tech-vs-radiology-tech'],
  sources: ['ardms_spi', 'ardms_ab', 'asrt', 'ipeds', 'ipeds_ay'],
});
