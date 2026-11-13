import { definePage } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';

const A = K.ARDMS;

export default definePage({
  id: 'ardms-exam-cost', group: 'guides', order: 104, slug: 'ardms-exam-cost',
  nav: 'ARDMS exam cost', card: `SPI ${K.money(A.spi)}, each specialty ${K.money(A.specialty)}: the total for your credential and retakes.`,
  title: 'ARDMS Exam Cost 2026: SPI and Specialty Fees, Retakes',
  description: `ARDMS exam cost in 2026: ${K.money(A.spi)} for the SPI exam and ${K.money(A.specialty)} for each specialty exam, passed within ${A.windowYears} years; the total for RDMS, RDCS or RVT with any retakes.`,
  h1: 'ARDMS exam cost: SPI, specialties and retakes',
  intro: `The ARDMS exam cost for one credential is ${K.money(K.ardmsCost(1))}: the SPI exam (${K.money(A.spi)}) plus one specialty (${K.money(A.specialty)}). Add specialties or retakes below.`,
  resume: `ARDMS credentials, run by Inteleos, take two exams: the Sonography Principles and Instrumentation (SPI) exam, required for every ARDMS certification track, at ${K.money(A.spi)}, and a specialty exam at ${K.money(A.specialty)}, such as abdomen or obstetrics and gynecology for the RDMS, adult echocardiography for the RDCS or vascular technology for the RVT. Both must be passed within ${A.windowYears} years of each other, in any order. These fees were read on the Inteleos exam pages on ${K.day(K.READ)}; each exam is offered year-round. A sonographer seeking two RDMS specialties pays ${K.money(K.ardmsCost(2))} in exam fees; one who takes the SPI twice and one specialty pays ${K.money(K.ardmsCost(1, 2))}. After certification, renewal is ${A.renewal}; we could not read the renewal amount on an official page, so it is not shown.`,
  faqs: [
    { q: 'How much is the ARDMS SPI exam?', a: `${K.money(A.spi)}, according to the Inteleos page of the Sonography Principles and Instrumentation exam read on ${K.day(K.READ)}. The SPI is required for every ARDMS credential (RDMS, RDCS, RVT, RMSKS) and is paired with a specialty exam passed within ${A.windowYears} years.` },
    { q: 'What is the ARDMS five-year rule?', a: `You must pass the SPI exam and the specialty exam of your credential within ${A.windowYears} years of each other, in any order. If the gap grows longer, the first exam no longer counts toward the credential and has to be taken again, with its fee.` },
    { q: 'Does an ARDMS credential replace a state license?', a: `In most states there is no sonography license, so the ARDMS credential is what employers check. In the ${K.C.sono} places that license sonography (${K.STATES.filter(K.E.sonoLicensed).map((s) => s.name).join(', ')}), you also apply to the state. Each of them sets its own application form and fee.` },
  ],
  body: (h) => `
<h2>ARDMS exam cost by credential</h2>
${h.table(['Credential', 'Exams', 'Exam fees'], [
  ['RDMS (abdomen)', 'SPI + Abdomen', K.money(K.ardmsCost(1))],
  ['RDMS (OB/GYN)', 'SPI + Obstetrics and Gynecology', K.money(K.ardmsCost(1))],
  ['RDMS, two specialties', 'SPI + Abdomen + OB/GYN', K.money(K.ardmsCost(2))],
  ['RDCS (adult echo)', 'SPI + Adult Echocardiography', K.money(K.ardmsCost(1))],
  ['RVT', 'SPI + Vascular Technology', K.money(K.ardmsCost(1))],
], `ARDMS exam fees read on the Inteleos exam pages, ${K.day(K.READ)}`)}
<p>The calculator counts each retake at the listed fee of that exam; check the Inteleos page before you book. The ARRT also offers sonography and vascular sonography as primary disciplines (${K.money(K.ARRT.primary)}); see the ${h.a('arrt-exam-cost', 'ARRT fee calculator')}.</p>
<h2>After the exams</h2>
<p>ARDMS renewal runs on the calendar year: the renewal period opens in September and fees are due by December 31; failing to renew revokes the certification. Continuing medical education is part of the renewal. If you will work in a state that licenses sonography, add its fee: ${h.a('sonographer-license-by-state', 'see the sonographer license by state')}.</p>
${h.mini('sono', { t: 'Does your state also license sonographers?', p: ['st'] })}
`,
  tool: 'ardms',
  related: ['sonographer', 'sonographer-license-by-state', 'arrt-exam-cost', 'how-to-become-an-ultrasound-tech'],
  sources: ['ardms_spi', 'ardms_ab', 'ardms_obgyn', 'ardms_ae', 'ardms_vt', 'ardms_renew'],
});
