import { definePage } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';

export default definePage({
  id: 'rad-tech-license-another-state', group: 'guides', order: 111, slug: 'rad-tech-license-another-state',
  nav: 'Moving to another state', card: 'Licensed in one state, moving to another: whether you need a new state credential, and where to apply.',
  title: 'Rad Tech License in Another State 2026: Moving, Transfer',
  description: 'Rad tech license in another state: a state license does not transfer. Pick the state you leave and the one you move to; see if you need a new credential.',
  h1: 'Rad tech license in another state: what changes when you move',
  intro: `A rad tech license from another state does not transfer: in ${K.C.radL + K.C.radA} jurisdictions you apply again. Pick your two states to see what changes.`,
  resume: `No interstate compact covers radiologic technologists or sonographers in the sources we read on ${K.day(K.READ)}: each state issues its own credential, on its own application. What travels is the national credential. ARRT certification and registration is valid in every state and renewed ${K.ARRT.renewal}; ARDMS credentials renew ${K.ARDMS.renewal}. Some states ease the move: Connecticut, for example, has a route for applicants licensed in another state for at least four years. Moving from a state without a license, such as North Carolina, to one with a license, such as Virginia, means applying for the first time; moving the other way means nothing to file.`,
  faqs: [
    { q: 'Can I transfer my x-ray license to another state?', a: `No: a state credential belongs to the state that issued it. In the ${K.C.radL + K.C.radA} jurisdictions that credential radiographers, you apply as a new licensee, usually showing your ARRT certification. Some, such as Connecticut, have a separate route for applicants already licensed elsewhere.` },
    { q: 'Do I need a new license if I move to a state without one?', a: 'No state application is needed in a state without a radiography credential, such as Colorado for ARRT-certified technologists, or Alabama and North Carolina. Keep your ARRT certification active: it is what employers check there. The page of your destination state confirms its current rule.' },
    { q: 'Is there a compact for radiologic technologists?', a: 'None appears in the sources we read on November 13, 2026, unlike the Interstate Medical Licensure Compact for physicians mentioned on the Arkansas medical board page. Each state credential is applied for separately. Plan for one application and one fee in each state where you work.' },
  ],
  body: (h) => `
<h2>Rad tech license in another state: the steps</h2>
<p><strong>1.</strong> Check the destination state in the tool above, or on its state page. <strong>2.</strong> Keep your ARRT or ARDMS credential active during the move. <strong>3.</strong> Apply to the destination agency before you start work there; most ask for verification of your current license, which agencies such as Virginia’s Board of Medicine and North Dakota’s board send on request. <strong>4.</strong> Let the old license lapse or keep it if you may return.</p>
${h.mini('state', { t: 'The rules of your new state', p: ['st'] })}
<h2>Sonographers who move</h2>
<p>Only ${K.C.sono} jurisdictions license sonography, so a sonographer moving between two other states files nothing. Moving into one of the five means a first application there: see ${h.a('sonographer-license-by-state', 'the sonographer license by state')}. For radiographers, the full list is in ${h.a('radiologic-technologist-license-by-state', 'the rad tech license by state')}.</p>
`,
  tool: 'move',
  related: ['radiologic-technologist-license-by-state', 'sonographer-license-by-state', 'arrt-exam-cost', 'limited-x-ray-license'],
  sources: ['asrt', 'arrt_ongoing', 'ardms_renew', 'st_CT', 'st_VA'],
});
