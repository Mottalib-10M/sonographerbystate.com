/**
 * Acronyms spelled out at their first appearance on each page (naive testers 2026-11-14: "ARRT", "ARDMS", "ASRT",
 * "IPEDS", "SPI" were never explained). `sigles` works on the text between tags only, skips headings, links, table
 * headers and buttons, and does nothing when the full name already stands next to it or a parenthesis follows.
 * One `seen` set per page, passed from the intro to the summary to the body, so each acronym is spelled out once.
 */
const FULL: Array<[string, string, RegExp]> = [
  ['ARRT', 'American Registry of Radiologic Technologists, the national x-ray certification board', /American Registry of Radiologic/i],
  ['ARDMS', 'American Registry for Diagnostic Medical Sonography, the national ultrasound certification board', /American Registry for Diagnostic/i],
  ['ASRT', 'American Society of Radiologic Technologists', /American Society of Radiologic/i],
  ['IPEDS', 'the federal college database', /federal college database/i],
  ['SPI', 'the ultrasound physics exam', /physics|Sonography Principles/i],
  ['NMTCB', 'Nuclear Medicine Technology Certification Board', /Nuclear Medicine Technology Certification/i],
  ['CQR', 'Continuing Qualifications Requirements', /Continuing Qualifications/i],
  ['RDMS', 'Registered Diagnostic Medical Sonographer', /Registered Diagnostic Medical/i],
  ['RDCS', 'Registered Diagnostic Cardiac Sonographer', /Registered Diagnostic Cardiac/i],
  ['RVT', 'Registered Vascular Technologist', /Registered Vascular/i],
  ['RMSKS', 'Registered in Musculoskeletal Sonography', /Musculoskeletal/i],
  ['NCES', 'National Center for Education Statistics', /National Center for Education/i],
  ['postprimary', 'an extra specialty added after the first certification', /extra specialt/i],
];
const SKIP = /^<(h[1-6]|a|th|button|option|summary|label|title)\b/i;

/** Plain text or HTML; returns the same with the first occurrence of each acronym not yet in `seen` spelled out. */
export function sigles(html: string, seen: Set<string>): string {
  const parts = html.split(/(<[^>]+>)/);
  let skip = 0;
  for (let i = 0; i < parts.length; i++) {
    const p = parts[i];
    if (p.startsWith('<')) {
      if (/^<\//.test(p) && SKIP.test(`<${p.slice(2)}`)) skip = Math.max(0, skip - 1);
      else if (SKIP.test(p) && !/\/>$/.test(p)) skip++;
      continue;
    }
    if (skip || !p.trim()) continue;
    let t = p;
    for (const [a, full, near] of FULL) {
      if (seen.has(a)) continue;
      const re = new RegExp(`\\b${a}\\b`);
      const m = re.exec(t);
      if (!m) continue;
      seen.add(a);
      const before = t.slice(Math.max(0, m.index - 140), m.index), after = t.slice(m.index + a.length, m.index + a.length + 140);
      if (near.test(before) || near.test(after) || /^\s*\(/.test(after)) continue;
      t = `${t.slice(0, m.index + a.length)} (${full})${t.slice(m.index + a.length)}`;
    }
    parts[i] = t;
  }
  return parts.join('');
}
