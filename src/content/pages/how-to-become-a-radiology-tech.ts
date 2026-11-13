import { definePage } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';

const aw = K.E.awardsByLevel('rad');
const lic = K.C.radL + K.C.radA;
const medPub = K.E.nationalMedianTuition('rad');

export default definePage({
  id: 'how-to-become-a-radiology-tech', group: 'guides', order: 103, slug: 'how-to-become-a-radiology-tech',
  nav: 'How to become a radiology tech', card: 'Program, ARRT exam, state license: the route, its cost in your state and the states that license.',
  title: 'Become a Radiology Tech 2026: Steps, Cost and State License',
  description: `How to become a radiology tech in 2026: an accredited program, the ARRT exam (${K.money(K.ARRT.primary)}), then a state credential in ${lic} of 51 jurisdictions; tuition by state.`,
  h1: 'How to become a radiology tech: program, ARRT exam and state license',
  intro: `To become a radiology tech, plan for a program, the ${K.money(K.ARRT.primary)} ARRT exam and, in ${lic} of the 50 states and DC, a state credential. Estimate yours below.`,
  resume: `A radiologic technologist, or radiology tech, takes diagnostic x-ray images. The route is an accredited radiography program, mostly an associate degree, then the ARRT radiography exam, whose primary application costs ${K.money(K.ARRT.primary)} on the ARRT Application Fees page read on ${K.day(K.READ)}, then a state credential where one exists. ARRT itself says that more than 75% of states have licensing laws; on the ASRT state table, ${K.C.radL} jurisdictions issue a license, certificate or permit for radiography and ${K.C.radA} more an accreditation or registration. In the IPEDS files for 2023-24, ${K.NATIONAL.rad.programs} radiography programs reported ${K.num(K.NATIONAL.rad.awards)} awards: ${K.num(aw.assoc ?? 0)} associate degrees, ${K.num(aw.cert ?? 0)} certificates and ${K.num(aw.bach ?? 0)} bachelor’s degrees. ARRT certification is then renewed ${K.ARRT.renewal}, with continuing education ${K.ARRT.ce}.`,
  faqs: [
    { q: 'How long does it take to become a radiology tech?', a: `Most graduates earn an associate degree, which IPEDS defines as at least two but less than four years of full-time study: ${K.num(aw.assoc ?? 0)} of the ${K.num(K.NATIONAL.rad.awards)} radiography awards of 2023-24. Certificates and bachelor’s degrees make up the rest. Then comes the ARRT exam and, in most states, a state application.` },
    { q: 'Is the ARRT exam the same as the state license?', a: 'No. ARRT certification and registration is national and private; a state license is issued by a state agency. Many states use the ARRT exam result to grant their license, and ARRT also administers some state licensing exams (limited scope, bone densitometry, fluoroscopy), but you apply to each separately.' },
    { q: 'What does it cost to become an x-ray tech?', a: `The calculator multiplies the median in-state tuition and fees of the public radiography schools of your state (2023-24) by your years of study and adds the ${K.money(K.ARRT.primary)} ARRT fee. Nationally, that median is ${K.money(medPub ?? 0)} a year. Books, uniforms and state license fees come on top.` },
  ],
  body: (h) => `
<h2>How to become a radiology tech, from program to license</h2>
<p><strong>Program.</strong> An accredited radiography program; ARRT recognizes programs accredited by the agencies it lists. Schools are listed on each state page and in the ${h.a('radiology-tech-schools', 'radiology tech schools finder')}.</p>
<p><strong>ARRT exam.</strong> ${K.money(K.ARRT.primary)} for the primary radiography application. The ${h.a('arrt-exam-cost', 'ARRT fee calculator')} adds postprimary disciplines such as CT or mammography.</p>
<p><strong>State credential.</strong> In ${K.C.radL} jurisdictions a license, certificate or permit; in ${K.C.radA} an accreditation or registration; in ${K.C.radS} a training standard without a license; in ${K.C.radN} nothing. Check yours in the ${h.a('radiologic-technologist-license-by-state', 'rad tech license by state')} tool.</p>
${h.mini('rad', { t: 'Does your state license x-ray techs?', p: ['st'] })}
<h2>Cheaper routes: limited x-ray permits</h2>
<p>${K.C.limited} jurisdictions issue a limited credential for operators who take a restricted range of x-rays, often in clinics. It is a shorter route, not a full radiographer license; see ${h.a('limited-x-ray-license', 'the limited x-ray license by state')}.</p>
`,
  tool: 'route', toolArg: { cip: 'rad' },
  related: ['arrt-exam-cost', 'radiologic-technologist-license-by-state', 'radiology-tech-schools', 'limited-x-ray-license'],
  sources: ['arrt_fees', 'arrt_ongoing', 'arrt_state', 'asrt', 'ipeds', 'ipeds_ay'],
});
