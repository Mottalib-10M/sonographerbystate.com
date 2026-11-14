import { definePage } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';

const E = K.E;
const byState = [...K.STATES].map((s) => ({ s, n: K.programsOf(s.code, 'sono').length, a: K.awardsOf(s.code, 'sono') })).sort((a, b) => b.a - a.a);
const none = byState.filter((x) => x.n === 0).map((x) => x.s.name);
const ex = K.S(K.EX.st);

export default definePage({
  id: 'how-to-become-an-ultrasound-tech', group: 'guides', order: 102, slug: 'how-to-become-an-ultrasound-tech',
  nav: 'How to become an ultrasound tech', card: 'The four steps, the programs of your state with their tuition, and the exams to plan for.',
  title: 'Become an Ultrasound Tech 2026: Steps, Exams and Schools',
  description: `How to become an ultrasound tech in 2026: a program, clinical scanning, the ARDMS exams (${K.money(K.ardmsCost(1))} for the first two) and the sonography schools of each state.`,
  h1: 'How to become an ultrasound tech: steps, exams and schools by state',
  intro: `To become an ultrasound tech, pick a program in your state: ${K.NATIONAL.sono.programs} sonography programs reported graduates in 2023-24. The finder lists them, ${ex.name} first.`,
  resume: `Becoming an ultrasound tech takes four steps: an accredited sonography program, the clinical scanning it includes, the ARDMS exams (SPI at ${K.money(K.ARDMS.spi)} plus a specialty at ${K.money(K.ARDMS.specialty)}, read on the Inteleos exam pages on ${K.day(K.READ)}), and a state license in the ${K.C.sono} places that require one. Programs are spread unevenly: ${byState.slice(0, 3).map((x) => `${x.s.name} (${x.n} programs, ${K.num(x.a)} awards)`).join(', ')} trained the most sonographers in 2023-24 according to the IPEDS completions file, while ${none.length ? `${none.join(', ')} reported none` : 'every state reported at least one'}. Of the ${K.num(K.NATIONAL.sono.awards)} sonography awards, ${K.num(E.awardsByLevel('sono').assoc ?? 0)} were associate degrees, ${K.num(E.awardsByLevel('sono').cert ?? 0)} certificates and ${K.num(E.awardsByLevel('sono').bach ?? 0)} bachelor’s degrees. Hospital-based programs that take no federal student aid do not report to IPEDS and are missing from these counts.`,
  faqs: [
    { q: 'Can I become an ultrasound tech without a degree?', a: 'Many programs award a certificate rather than a degree, often to students who already hold a degree or a health credential. In the IPEDS files for 2023-24, certificates made up about one in five sonography awards. ARDMS sets its own prerequisites for each exam route, so check that your program qualifies you before you enroll.' },
    { q: 'Which states have the most ultrasound tech schools?', a: `By awards reported to IPEDS for 2023-24: ${byState.slice(0, 5).map((x) => x.s.name).join(', ')}. The finder at the top of this page lists the programs of any state, with their awards and in-state tuition and fees, largest first. Hospital programs that take no federal student aid are not in these counts.` },
    { q: 'Do I need a license after the ARDMS exams?', a: `Only in ${K.STATES.filter(E.sonoLicensed).map((s) => s.name).join(', ')}. In every other state, the ARDMS credential is what employers check, and no state application is needed. A license from one of those five places does not transfer to another: each issues its own.` },
  ],
  body: (h) => `
<h2>How to become an ultrasound tech in four steps</h2>
<p><strong>1. Choose a program.</strong> Associate degrees are the most common award, then certificates and bachelor’s degrees. The finder above lists each state’s programs with the number of graduates in 2023-24 and the in-state tuition and fees.</p>
<p><strong>2. Scan under supervision.</strong> Clinical rotations are part of every accredited program; ask where they take place, since travel to clinical sites adds to the cost.</p>
<p><strong>3. Pass the ARDMS exams.</strong> SPI plus one specialty, within ${K.ARDMS.windowYears} years of each other. The ${h.a('ardms-exam-cost', 'ARDMS cost calculator')} adds retakes.</p>
<p><strong>4. Get licensed if your state requires it.</strong> See the ${h.a('sonographer-license-by-state', 'sonographer license by state')}.</p>
${h.mini('route', { t: 'Tuition and exams for your route', p: ['st', 'yr'], d: { cip: 'sono' } })}
<h2>Ultrasound tech programs by state</h2>
${h.table(['State', 'Programs', 'Graduates 2023-24', 'Public in-state tuition and fees (median)'], byState.filter((x) => x.n > 0).slice(0, 15).map((x) => [h.a(x.s.slug, x.s.name), x.n, x.a, (() => { const m = K.medianTuition(x.s.code, 'sono', 'public'); return m ? K.money(m) : 'no public program'; })()]), 'The 15 states with the most sonography awards (IPEDS completions July 2023 to June 2024)', ['l', 'r', 'r', 'r'])}
<p>Every state page of this site lists its own programs. To compare with x-ray training, read ${h.a('how-to-become-a-radiology-tech', 'how to become a radiology tech')}.</p>
`,
  tool: 'programs', toolArg: { cip: 'sono' },
  related: ['sonographer', 'ardms-exam-cost', 'sonographer-license-by-state', 'radiology-tech-schools'],
  sources: ['ipeds', 'ipeds_hd', 'ipeds_ay', 'ardms_spi', 'asrt'],
});
