import { definePage } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';

const E = K.E;
const lim = K.STATES.filter((s) => E.limitedWord(s));
const by = (w: string) => lim.filter((s) => E.limitedWord(s) === w).map((s) => s.name);

export default definePage({
  id: 'limited-x-ray-license', group: 'guides', order: 108, slug: 'limited-x-ray-license',
  nav: 'Limited x-ray license', card: `${lim.length} jurisdictions credential limited x-ray operators; the name each uses and the rules we read.`,
  title: 'Limited X-Ray License 2026: Permits and Rules by State',
  description: `Limited x-ray license in 2026: ${lim.length} states credential limited scope operators with a license, permit or certification; the rules read in Ohio and Montana.`,
  h1: 'Limited x-ray license: limited scope operators by state',
  intro: `A limited x-ray license or permit exists in ${lim.length} of the 50 states and DC. Pick a state to see whether it has one and what a full radiographer needs there.`,
  resume: `A limited x-ray machine operator, also called a limited scope radiographer or basic x-ray machine operator, takes a restricted range of x-ray images, often in smaller health care settings, after a shorter training than a radiographer. Read on ${K.day(K.READ)}, the ASRT table lists a state credential for limited technologists in ${lim.length} jurisdictions: a license in ${by('license').length}, a permit in ${by('permit').length} (${by('permit').join(', ')}), a certification or certificate in the others. State pages add detail: Louisiana issues two-year Limited X-Ray Machine Operator permits since January 2026 after the ARRT limited scope exam for Louisiana; Montana charges $60 a year to renew a limited permit and asks six hours of continuing education; Colorado registers limited scope operators for two years; Minnesota has required registration since August 1, 2020; Ohio’s general x-ray machine operators pass a state exam. ARRT develops and administers a Limited Scope of Practice in Radiography exam for state licensing.`,
  faqs: [
    { q: 'What is a limited scope x-ray license?', a: 'A state credential that allows someone who is not a full radiographer to take certain x-rays, within a scope the state defines. Each state sets the scope, the training and the exam; ARRT administers a limited scope exam that many of them use.' },
    { q: 'Can a limited x-ray operator become a radiologic technologist?', a: 'Not with the limited credential alone: a full radiographer license requires an accredited radiography program and the ARRT radiography exam. Some limited operators go on to such a program; check whether your clinical hours count with the school. The program alone decides what prior experience it accepts.' },
    { q: 'Is the Louisiana LXMO permit new?', a: 'Yes. The Louisiana State Radiologic Technology Board of Examiners began issuing Limited X-Ray Machine Operator permits in January 2026. After an approved program, a clinical competency log and the ARRT limited scope exam for Louisiana, the permit lasts two years and needs no direct supervision.' },
  ],
  body: (h) => `
<h2>Limited x-ray license: the states that issue one</h2>
${h.table(['State', 'Limited credential', 'Full radiographer'], lim.map((s) => [h.a(s.slug, s.name), E.limitedWord(s), E.radAnswer(s)]), 'Limited technologist credentials (ASRT table, read November 13, 2026)')}
<p>Two states without a limited credential in the table still name the role on their own pages: Maryland’s Board of Physicians lists a Limited X-Ray Machine Operator, and Washington’s Department of Health lists an X-ray technician with limited scope. The state pages of this site cite those pages.</p>
${h.mini('rad', { t: 'And for a full radiographer in your state?', p: ['st'] })}
<h2>Exams for limited operators</h2>
<p>ARRT writes that it developed and administers three exams specifically for state licensing: Limited Scope of Practice in Radiography, Bone Densitometry Equipment Operator and Fluoroscopy. California runs its own limited permit exam, Illinois requires its exam before accreditation, and Texas has a limited technologist exam. For the full route, see ${h.a('how-to-become-a-radiology-tech', 'how to become a radiology tech')}.</p>
`,
  tool: 'limited',
  related: ['radiologic-technologist-license-by-state', 'how-to-become-a-radiology-tech', 'arrt-exam-cost', 'rad-tech-license-another-state'],
  sources: ['asrt', 'arrt_state', 'st_LA', 'st_MT', 'st_CO', 'st_MN', 'st_OH'],
});
