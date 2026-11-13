/** llms.txt (RECETTE §21), generated from the page registry. */
import { PAGES } from '../lib/pages';
import { SITE_URL, LAST_UPDATED, SITE_NAMES } from '../data/site-config';
import { route } from '../i18n/routes';
import { GROUPS } from '../i18n/nav';
export function GET() {
  const lines = [
    `# ${SITE_NAMES.en}`, '',
    `> Licensing rules for radiologic technologists (x-ray) and sonographers (ultrasound) in the 50 US states and the District of Columbia: which states issue a license, certificate, permit or registration, which agency issues it, limited x-ray operator credentials, ARRT and ARDMS exam fees, and the radiography and sonography programs of each state with their 2023-24 awards and in-state tuition and fees. Sources: ASRT state table and state agency pages, ARRT and Inteleos fee pages, IPEDS files of NCES, all read on November 13, 2026. No salary and no medical content. Independent site published by Radif Partners, not a government site. Last updated ${LAST_UPDATED}.`, '',
    ...GROUPS.flatMap((g) => [`## ${g.label}`, ...PAGES.filter((p) => p.group === g.id).map((p) => `- [${p.nav}](${SITE_URL}${route(p.id, 'en')}): ${p.card}`), '']),
    '## About', `- [How the rules were read](${SITE_URL}${route('method', 'en')})`, `- [About](${SITE_URL}${route('about', 'en')})`,
  ];
  return new Response(lines.join('\n') + '\n', { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
