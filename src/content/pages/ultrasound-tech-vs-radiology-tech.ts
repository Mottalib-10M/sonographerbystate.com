import { definePage } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';

const E = K.E;
const ar = E.awardsByLevel('rad'), as = E.awardsByLevel('sono');

export default definePage({
  id: 'ultrasound-tech-vs-radiology-tech', group: 'guides', order: 110, slug: 'ultrasound-tech-vs-radiology-tech',
  nav: 'Ultrasound tech vs radiology tech', card: 'The two careers side by side in your state: license, exam, programs, graduates and tuition.',
  title: 'Ultrasound Tech vs Radiology Tech 2026: License, Exams, Cost',
  description: `Ultrasound tech vs radiology tech in 2026: state licenses (${K.C.sono} against ${K.C.radL + K.C.radA} jurisdictions), ARDMS against ARRT fees, programs and in-state tuition in your state.`,
  h1: 'Ultrasound tech vs radiology tech: license, exams and schools',
  intro: `Ultrasound tech vs radiology tech, on paper: a state license in ${K.C.sono} places against ${K.C.radL + K.C.radA}, and ${K.money(K.ardmsCost(1))} of ARDMS exams against ${K.money(K.ARRT.primary)} at ARRT.`,
  resume: `The two careers share a hospital floor but not their rules. A radiologic technologist uses ionizing radiation, which is why ${K.C.radL + K.C.radA} of the 50 states and DC issue a state credential for radiography, according to the ASRT table read on ${K.day(K.READ)}. A sonographer uses ultrasound, and only ${K.C.sono} jurisdictions license sonography. The national exams differ as well: ARRT charges ${K.money(K.ARRT.primary)} for a primary discipline application (radiography or sonography among them), while ARDMS charges ${K.money(K.ARDMS.spi)} for the SPI and ${K.money(K.ARDMS.specialty)} for each specialty. Training is larger in radiography: ${K.NATIONAL.rad.programs} programs and ${K.num(K.NATIONAL.rad.awards)} awards in 2023-24 against ${K.NATIONAL.sono.programs} programs and ${K.num(K.NATIONAL.sono.awards)} awards in sonography, both mostly associate degrees. This site gives no pay comparison: pay figures depend on the employer and the region.`,
  faqs: [
    { q: 'Which is easier to get licensed, ultrasound or x-ray?', a: `Ultrasound, on the state side: only ${K.C.sono} jurisdictions license sonographers, against ${K.C.radL + K.C.radA} that credential radiographers. Both careers still need a national credential in practice, ARDMS or ARRT, and an accredited program. Programs in both fields include supervised clinical hours before graduation, and the national exams follow.` },
    { q: 'Can a radiologic technologist become a sonographer?', a: 'Yes, through a sonography program, often a certificate for people who already hold a health degree, then the ARDMS exams or the ARRT sonography discipline. ARRT also lists sonography among its primary disciplines, at the same application fee as radiography.' },
    { q: 'Which career has more programs?', a: `Radiography: ${K.NATIONAL.rad.programs} programs reported ${K.num(K.NATIONAL.rad.awards)} awards in 2023-24, against ${K.NATIONAL.sono.programs} sonography programs with ${K.num(K.NATIONAL.sono.awards)} awards, in the IPEDS completions file. The comparison tool shows the numbers for your state. Some colleges teach both, so one campus visit can cover the two programs.` },
  ],
  body: (h) => `
<h2>Ultrasound tech vs radiology tech, nationally</h2>
${h.table(['', 'Radiologic technologist', 'Sonographer'], [
  ['Program code (CIP)', '51.0911', '51.0910'],
  ['Programs with graduates, 2023-24', K.NATIONAL.rad.programs, K.NATIONAL.sono.programs],
  ['Awards, 2023-24', K.num(K.NATIONAL.rad.awards), K.num(K.NATIONAL.sono.awards)],
  ['of which associate degrees', K.num(ar.assoc ?? 0), K.num(as.assoc ?? 0)],
  ['of which certificates', K.num(ar.cert ?? 0), K.num(as.cert ?? 0)],
  ['States and DC with a state credential', String(K.C.radL + K.C.radA), String(K.C.sono)],
  ['National exam fees', `ARRT ${K.money(K.ARRT.primary)}`, `ARDMS ${K.money(K.ardmsCost(1))}`],
], 'Radiography and sonography compared (IPEDS 2023-24, ASRT table, ARRT and Inteleos fees read November 13, 2026)')}
${h.mini('route', { t: 'Cost of either route in your state', p: ['cip', 'st'] })}
<h2>How the choice plays out by state</h2>
<p>In a state without any imaging license, such as Alabama or North Carolina, both careers depend on national credentials alone. In Oregon, New Mexico, North Dakota, New Hampshire and DC, both need a state license. Everywhere else, only the x-ray side does. Read ${h.a('sonographer', 'the sonographer route')} and ${h.a('how-to-become-a-radiology-tech', 'the radiology tech route')}.</p>
`,
  tool: 'compare',
  related: ['sonographer', 'how-to-become-a-radiology-tech', 'sonographer-license-by-state', 'radiologic-technologist-license-by-state'],
  sources: ['asrt', 'arrt_fees', 'ardms_spi', 'ipeds'],
});
