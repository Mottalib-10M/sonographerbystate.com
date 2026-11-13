/** Every page id the site is meant to have. Content tests accept links to these ids while pages are being written. */
import D from '../data/states.json';
export const PLANNED_GUIDES = [
  'sonographer', 'how-to-become-an-ultrasound-tech', 'how-to-become-a-radiology-tech', 'ardms-exam-cost', 'arrt-exam-cost',
  'sonographer-license-by-state', 'radiologic-technologist-license-by-state', 'limited-x-ray-license', 'radiology-tech-schools',
  'ultrasound-tech-vs-radiology-tech', 'rad-tech-license-another-state',
];
export const PLANNED_IDS = new Set<string>([...PLANNED_GUIDES, ...(D as { states: Array<{ slug: string }> }).states.map((s) => s.slug)]);
