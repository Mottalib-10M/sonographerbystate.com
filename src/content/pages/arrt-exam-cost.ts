import { definePage } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';

const R = K.ARRT;

export default definePage({
  id: 'arrt-exam-cost', group: 'guides', order: 105, slug: 'arrt-exam-cost',
  nav: 'ARRT exam cost', card: `First x-ray certification ${K.money(R.primary)}, each extra specialty ${K.money(R.postprimary)}: your total, with the national registry’s fees.`,
  title: 'ARRT Exam Cost 2026: Application Fees and Renewal Rules',
  description: `ARRT exam cost in 2026: ${K.money(R.primary)} for a primary discipline, ${K.money(R.postprimary)} for each postprimary, ${K.money(R.postprimarySupportArdms)} through ARDMS or NMTCB; renewal and continuing education rules.`,
  h1: 'ARRT exam cost: first certification, extra specialties and renewal',
  intro: `The ARRT (American Registry of Radiologic Technologists) exam cost for a first credential is ${K.money(R.primary)}, whether radiography, nuclear medicine, radiation therapy, MRI, sonography or vascular sonography. Add extra specialties below.`,
  resume: `ARRT, the national board that certifies x-ray technologists, charges by application, not by exam attempt, according to its Application Fees page read on ${K.day(K.READ)}: ${K.money(R.primary)} for a primary discipline (radiography, nuclear medicine technology, radiation therapy, MRI, sonography, vascular sonography), ${K.money(R.postprimary)} for a postprimary discipline (an extra specialty added on top, such as CT, mammography, bone densitometry or interventional radiography), and ${K.money(R.postprimarySupportArdms)} for one earned on the basis of a certification from NMTCB (the Nuclear Medicine Technology Certification Board) or ARDMS (the American Registry for Diagnostic Medical Sonography) rather than ARRT. Reinstatement costs ${K.money(R.reinstateOnline)} online, or ${K.money(R.reinstateExam)} with re-examination. Once certified, a technologist renews ${R.renewal}, reports continuing education ${R.ce}, and completes the Continuing Qualifications Requirements (CQR) ${R.cqr}. A radiographer adding CT and mammography pays ${K.money(K.arrtCost(1, 2, 0))} in ARRT fees.`,
  faqs: [
    { q: 'How much is the ARRT radiography exam?', a: `${K.money(R.primary)}, the application fee for a primary discipline on the ARRT Application Fees page read on ${K.day(K.READ)}. ARRT accepts Visa, MasterCard, Discover and American Express. A state license, where your state requires one, is a separate application with its own fee.` },
    { q: 'Why does a postprimary cost more through ARDMS?', a: `Because ARRT charges ${K.money(R.postprimarySupportArdms)} instead of ${K.money(R.postprimary)} when the supporting credential is from ARDMS or NMTCB rather than ARRT. That applies to MR, vascular sonography or breast sonography through ARDMS, and to CT, MR, bone densitometry or vascular sonography through NMTCB.` },
    { q: 'How often do I renew ARRT certification?', a: `Every year, by the last day of your birth month, with continuing education reported every two years. Technologists certified since January 1, 2011 also complete Continuing Qualifications Requirements every 10 years. We could not read the annual renewal amount on an official ARRT page, so this site does not show it.` },
  ],
  body: (h) => `
<h2>ARRT exam cost by discipline</h2>
${h.table(['Application', 'Fee'], [
  ['Primary: radiography, nuclear medicine, radiation therapy, MRI, sonography, vascular sonography', K.money(R.primary)],
  ['Postprimary with an ARRT supporting credential', K.money(R.postprimary)],
  ['Postprimary through NMTCB (CT, MRI, bone density or vascular ultrasound)', K.money(R.postprimarySupportNmtcb)],
  ['Postprimary through ARDMS (MRI, vascular ultrasound or breast ultrasound)', K.money(R.postprimarySupportArdms)],
  ['Reinstatement online, no re-examination', K.money(R.reinstateOnline)],
  ['Reinstatement by re-examination', K.money(R.reinstateExam)],
], `ARRT application fees, read ${K.day(K.READ)}`)}
<p>Most states that license radiographers use the ARRT exam result; some ask ARRT to administer their own state exams (limited scope, bone densitometry equipment operator, fluoroscopy). The ${h.a('radiologic-technologist-license-by-state', 'license by state')} tool tells you what your state issues.</p>
${h.mini('rad', { t: 'And the state credential?', p: ['st'] })}
<h2>Keeping ARRT certification</h2>
<p>Annual renewal by the last day of the birth month; continuing education every two years, to be finished one month before the renewal deadline; CQR every ten years for those certified since 2011. A credential earned through a postprimary pathway requires keeping the supporting discipline active. Compare with the ${h.a('ardms-exam-cost', 'ARDMS fees')} for sonography.</p>
`,
  tool: 'arrt',
  related: ['how-to-become-a-radiology-tech', 'radiologic-technologist-license-by-state', 'ardms-exam-cost', 'limited-x-ray-license'],
  sources: ['arrt_fees', 'arrt_ongoing', 'arrt_state'],
});
