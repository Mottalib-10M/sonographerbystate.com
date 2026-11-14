import { definePage } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';

const E = K.E;
const aw = E.awardsByLevel('rad');
const top = [...E.PROGRAMS].filter((p) => p.cip === 'rad').sort((a, b) => b.n - a.n).slice(0, 10);
const medPub = E.nationalMedianTuition('rad');
const medPriv = E.median(E.PROGRAMS.filter((p) => p.cip === 'rad' && p.control !== 'public').map((p) => p.instate ?? 0));

export default definePage({
  id: 'radiology-tech-schools', group: 'guides', order: 109, slug: 'radiology-tech-schools',
  nav: 'Radiology tech schools', card: `${K.NATIONAL.rad.programs} radiography programs with graduates in 2023-24: find those of your state with tuition and fees.`,
  title: 'Radiology Tech Schools 2026: Programs by State, Tuition',
  description: `Radiology tech schools by state: ${K.NATIONAL.rad.programs} radiography programs reported graduates in 2023-24 (IPEDS), with their awards and in-state tuition and fees, largest first.`,
  h1: 'Radiology tech schools by state: programs, awards and tuition',
  intro: `${K.NATIONAL.rad.programs} radiology tech schools and programs reported graduates in 2023-24. Pick a state: the finder lists them with their tuition and fees.`,
  resume: `The federal IPEDS survey, filed by every college that takes federal student aid, counts the awards of each program by its CIP code: 51.0911 for radiologic technology and radiography. For July 2023 to June 2024, ${K.NATIONAL.rad.programs} programs in the 50 states and DC reported ${K.num(K.NATIONAL.rad.awards)} radiography awards: ${K.num(aw.assoc ?? 0)} associate degrees, ${K.num(aw.cert ?? 0)} certificates, ${K.num(aw.bach ?? 0)} bachelor’s degrees and ${K.num(aw.master ?? 0)} master’s degrees. The three largest programs were ${top.slice(0, 3).map((p) => `${p.name} in ${p.city}, ${E.byCode(p.st).name} (${p.n})`).join(', ')}. The median yearly in-state tuition and required fees for 2023-24 was ${K.money(medPub ?? 0)} at public schools and ${K.money(medPriv ?? 0)} at private ones. Hospital-based programs that take no federal aid do not report to IPEDS, so a few accredited programs are missing; the accrediting body’s own list is the reference for accreditation, which IPEDS does not record.`,
  faqs: [
    { q: 'How many radiology tech schools are there?', a: `${K.NATIONAL.rad.programs} programs reported radiography graduates to IPEDS for July 2023 to June 2024, in the 50 states and DC. Programs without graduates that year, and hospital programs outside federal student aid, are not counted. The state pages list the largest programs of each state, with their price.` },
    { q: 'Are community colleges cheaper for radiography?', a: `Usually, for residents: the median in-state tuition and fees of public schools awarding radiography was ${K.money(medPub ?? 0)} a year in 2023-24, against ${K.money(medPriv ?? 0)} at private schools. Out-of-state students pay more at public schools; the IPEDS file reports that rate too. Books, uniforms and housing come on top of these amounts.` },
    { q: 'Does IPEDS tell me whether a program is accredited?', a: 'No. IPEDS records awards and charges, not programmatic accreditation. ARRT lists the accreditation agencies it recognizes; check that your program is accredited by one of them before you enroll, because the ARRT exam depends on it. Status can change, so check it in the year you apply.' },
  ],
  body: (h) => `
<h2>Radiology tech schools with the most graduates</h2>
${h.table(['School', 'State', 'Graduates 2023-24', 'In-state tuition and fees'], top.map((p) => [p.name, h.a(K.S(p.st).slug, K.S(p.st).name), p.n, p.instate ? K.money(p.instate) : 'Not reported']), 'The 10 largest radiography programs (IPEDS completions July 2023 to June 2024)', ['l', 'l', 'r', 'r'])}
<p>Private career-school campuses and a few public colleges lead the count. Each state page lists its ten largest imaging programs, radiography and sonography together.</p>
${h.mini('route', { t: 'Tuition and national x-ray exam fee (ARRT) for your years of study', p: ['st', 'yr'], d: { cip: 'rad' } })}
<h2>Choosing among radiology tech schools</h2>
<p>Compare the award (certificate, associate or bachelor’s), the total cost over the program, the clinical sites and whether the program qualifies you for the ARRT exam. Then check the ${h.a('radiologic-technologist-license-by-state', 'state license')} where you will work. For ultrasound programs, see ${h.a('how-to-become-an-ultrasound-tech', 'how to become an ultrasound tech')}.</p>
`,
  tool: 'programs', toolArg: { cip: 'rad' },
  related: ['how-to-become-a-radiology-tech', 'how-to-become-an-ultrasound-tech', 'radiologic-technologist-license-by-state', 'arrt-exam-cost'],
  sources: ['ipeds', 'ipeds_hd', 'ipeds_ay', 'arrt_state'],
});
