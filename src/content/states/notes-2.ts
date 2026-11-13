/** Handwritten notes, Kansas to New York. Facts from src/data/states.json (ASRT table and agency pages read on
 *  2026-11-13) and src/data/programs.json (IPEDS). */
import type { StateNote } from '../../lib/state-pages';

export const NOTES_2: Record<string, StateNote> = {
  KS: {
    lead: `Kansas licenses radiographers, nuclear medicine technologists and radiation therapists through the State Board of Healing Arts. There is no Kansas limited license and no sonography license in the ASRT table. The board’s site refused our reader. Kansas trains more sonographers than its size suggests: Fort Hays State and Washburn each reported sizable sonography classes in 2023-24.`,
    how: `Apply to the Kansas State Board of Healing Arts with your ARRT result and keep the license current. We could not read the board’s fees, so check them on its site before you send the application.`,
    faqs: [
      { q: `Who licenses x-ray techs in Kansas?`, a: `The Kansas State Board of Healing Arts, according to the ASRT table we read on November 13, 2026. It licenses radiography, nuclear medicine and radiation therapy. Its own site refused our automated reader, so confirm the requirements with the board directly.` },
      { q: `Where can I study sonography in Kansas?`, a: `Fort Hays State University and Washburn University reported the two largest sonography classes in Kansas to IPEDS for 2023-24. Other Kansas schools are listed on this page with their in-state tuition and the number of awards. Both are public universities.` },
    ],
  },
  KY: {
    lead: `Kentucky has a board devoted to imaging, the Board of Medical Imaging and Radiation Therapy, which licenses radiography, limited operators, CT, nuclear medicine, radiation therapy, fusion imaging and radiologist assistants in the ASRT table. Sonography is not licensed. Sullivan University in Louisville reported the largest radiography class in 2023-24. The board’s site refused our reader.`,
    how: `Apply to the Kentucky Board of Medical Imaging and Radiation Therapy for the license of each modality you will perform, with your ARRT or other accepted exam result. Ask the board for its fee schedule, which we could not read.`,
    faqs: [
      { q: `Does Kentucky license limited x-ray operators?`, a: `Yes. The ASRT table lists a Kentucky license for limited technologists as well as for full radiographers, both issued by the Board of Medical Imaging and Radiation Therapy. The board’s site refused our reader on November 13, 2026, so check the current rules there.` },
      { q: `Do Kentucky sonographers need a license?`, a: `No state license exists for sonography in Kentucky according to the ASRT table. Kentucky schools such as MedQuest College reported sonography graduates to IPEDS for 2023-24, and employers rely on ARDMS or ARRT credentials. The imaging board licenses only the other modalities.` },
    ],
  },
  LA: {
    lead: `Louisiana licenses radiographers through its own board, the LSRTBE, on two-year cycles: the 2026-2028 cycle opened this year, and a license not renewed by May 31, 2026 has expired. The law applies to technologists working in hospitals and hospital-owned facilities. Since January 2026 the board also issues Limited X-Ray Machine Operator permits, aimed at smaller settings short of full technologists.`,
    how: `Renew or apply online with the LSRTBE (the board recommends Chrome), with the signed ARRT or NMTCB authorization form in PDF. An LXMO candidate enrolls in a board-approved program, logs clinical competencies and passes the ARRT limited scope exam for Louisiana.`,
    faqs: [
      { q: `What is a Louisiana LXMO permit?`, a: `A Limited X-Ray Machine Operator permit, issued by the Louisiana State Radiologic Technology Board of Examiners since January 2026. After an approved program, a clinical competency log and the ARRT limited scope exam for Louisiana, the holder receives a two-year permit and no longer needs direct supervision.` },
      { q: `When do Louisiana rad tech licenses expire?`, a: `The board works on two-year cycles. Licenses that carried a May 31, 2026 expiration date and were not renewed are expired, and working with an expired license is illegal in Louisiana. The current cycle is 2026-2028. Renew before the end of the cycle.` },
    ],
  },
  ME: {
    lead: `Maine licenses radiographers, limited operators, nuclear medicine technologists, radiation therapists and fusion imaging technologists through its Radiologic Technology Board of Examiners, part of the Office of Professional and Occupational Regulation. Sonography has no Maine license. Training is concentrated at the Maine College of Health Professions, which reported the largest radiography class in the state for 2023-24 and its only sonography awards.`,
    how: `Apply online through the Office of Professional and Occupational Regulation, which hosts the board, with your national credential. The office issues no paper license verifications: employers check your status online.`,
    faqs: [
      { q: `Do I need a license to take x-rays in Maine?`, a: `Yes. Maine licenses both full radiographers and limited operators, according to the ASRT table, through the Radiologic Technology Board of Examiners. Its page lists continuing education, examinations and forms for each license type. Pick the form that matches the license you need.` },
      { q: `Can I study sonography in Maine?`, a: `Barely: in the IPEDS file for 2023-24, the Maine College of Health Professions is the only school that reported sonography awards, and only a handful. Radiography programs are more numerous; both are listed on this page. Residents may also look at New Hampshire.` },
    ],
  },
  MD: {
    lead: `Maryland licenses radiographers through the Board of Physicians, which keeps a roster of allied health professions that also includes limited x-ray machine operators, nuclear medicine technologists and radiation therapists. Sonography is not licensed. Maryland reported few radiography programs to IPEDS for 2023-24, but Montgomery College and Howard Community College both train sonographers. Fortis College in Landover, a for-profit school, reported the largest radiography class, at $15,537 a year in tuition and fees, well above the public colleges of the state ($6,918 to $10,398 for residents).`,
    how: `Apply to the Maryland Board of Physicians, allied health section, for the license or limited operator credential you need, with your national exam result. Ask the board about its fees and renewal cycle, which the page we read does not list.`,
    faqs: [
      { q: `Which board licenses radiographers in Maryland?`, a: `The Maryland Board of Physicians, through its allied health licensing. Its page lists radiographers next to limited x-ray machine operators, nuclear medicine technologists and other technologists, each with its own license. Sonographers are not on that list, since Maryland does not license sonography.` },
      { q: `Does Maryland have limited x-ray machine operators?`, a: `Yes. The Maryland Board of Physicians lists Limited X-Ray Machine Operator among its allied health professions. The ASRT table does not show a limited credential for Maryland, so treat the board’s own list as the reference. Ask the board before you start.` },
    ],
  },
  MA: {
    lead: `Massachusetts licenses radiographers and the ASRT table adds CT, nuclear medicine, radiation therapy, mammography and radiologist assistants, all under the Radiation Control Program of the Department of Public Health. Sonography is not licensed. The state’s pages refused our reader. MCPHS University reported the largest sonography class in the state for 2023-24.`,
    how: `Apply and renew through the Radiation Control Program of the Massachusetts Department of Public Health, with your national credential. Its renewal page refused our reader, so check its current fee and continuing education rule there before you renew.`,
    faqs: [
      { q: `Do I need a Massachusetts license as an x-ray tech?`, a: `Yes. The ASRT table lists a state license for radiography in Massachusetts, issued by the Radiation Control Program of the Department of Public Health. The program’s pages refused our automated reader on November 13, 2026, so confirm the details there.` },
      { q: `Where can I study sonography in Massachusetts?`, a: `MCPHS University reported the most sonography awards in Massachusetts to IPEDS for 2023-24, ahead of Bunker Hill Community College. The full list is on this page, with in-state tuition and required fees: at Massachusetts community colleges the fees are much larger than the tuition itself.` },
    ],
  },
  MI: {
    lead: `Michigan does not license radiographers or sonographers. The ASRT table records only an equipment standard: its radiation safety rules, run within MIOSHA, set requirements for who operates x-ray machines, without a personal state license. The state’s page refused our reader. Grand Valley State University reported the largest sonography class in Michigan for 2023-24.`,
    how: `No personal state license to apply for. Employers hire on ARRT or ARDMS credentials and answer for their x-ray equipment to the Radiation Safety Section, which sets operator requirements.`,
    faqs: [
      { q: `Is Michigan a licensure state for radiologic technologists?`, a: `No. The ASRT table shows no license for radiographers in Michigan, only an equipment regulation that sets operator requirements. The Radiation Safety Section’s page refused our reader, so ask your employer which operator standard it applies. Most ask for ARRT.` },
      { q: `Which Michigan schools train sonographers?`, a: `Grand Valley State University reported the most sonography awards in Michigan for 2023-24, followed by Lansing Community College. Henry Ford College led radiography. All are listed on this page with their in-state tuition from IPEDS. Compare the resident prices of each before you apply.` },
    ],
  },
  MN: {
    lead: `Minnesota does not license full radiographers; it expects national credentials. But since August 1, 2020, under Minnesota Statute 144.121, the Department of Health requires limited scope x-ray operators and bone densitometry operators to register after passing their exam modules. The Mayo Clinic College of Medicine and Science reported the largest imaging classes in the state for 2023-24.`,
    how: `A certified radiographer files nothing with the state. A limited scope operator registers with the Minnesota Department of Health after passing the exam modules, following its information notice on the registration requirement.`,
    faqs: [
      { q: `Do limited scope x-ray operators register in Minnesota?`, a: `Yes. Since August 1, 2020, Minnesota Statute 144.121 requires limited scope x-ray operators and bone densitometry equipment operators to register with the Minnesota Department of Health for the exam modules they passed. Full radiographers have no state license. Registration is per module.` },
      { q: `Where can I train in Minnesota?`, a: `The Mayo Clinic College of Medicine and Science reported the largest radiography and sonography classes in Minnesota to IPEDS for 2023-24. Riverland Community College and St Catherine University follow; the table on this page lists all of them. Compare their resident prices before you apply.` },
    ],
  },
  MS: {
    lead: `Mississippi registers radiographers rather than licensing them, according to the ASRT table, and issues permits to limited operators; radiologist assistants have their own credential. The Department of Health’s licensure page showed no readable text to our reader (its old address now answers 404), so this page relies on the ASRT classification. The University of Mississippi reported the largest radiography class in 2023-24.`,
    how: `Register with the professional licensure section of the Mississippi State Department of Health, with your ARRT result; limited operators apply for a permit. We could not read the department’s fees.`,
    faqs: [
      { q: `Do Mississippi x-ray techs need a license?`, a: `They need a state registration: the ASRT table records a registration standard for radiography in Mississippi and a permit for limited operators, both through the State Department of Health. The department’s page showed no readable text to our reader, so check the requirements with it directly.` },
      { q: `Does Mississippi license sonographers?`, a: `No. The ASRT table lists no state credential for sonography in Mississippi. Hinds and Itawamba community colleges reported sonography graduates to IPEDS for 2023-24, and Mississippi employers ask for ARDMS or ARRT credentials. No state card is needed for ultrasound work there.` },
    ],
  },
  MO: {
    lead: `Missouri has no state license for radiographers, limited operators or sonographers in the ASRT table, which lists no rule of any kind for the profession. The Department of Health and Senior Services handles radiation control for equipment; its page refused our reader. St. Louis Community College reported the largest radiography and sonography classes in the state for 2023-24.`,
    how: `There is no Missouri application. Your ARRT certificate (or your ARDMS credential for ultrasound) is what a hospital in Kansas City or St. Louis checks before it hires you; the x-ray machines, not the people, are what the state registers.`,
    faqs: [
      { q: `Is there a radiology tech license in Missouri?`, a: `No. The ASRT table we read on November 13, 2026 lists no licensure, standard or equipment rule for radiographers in Missouri. Employers rely on ARRT certification. The state radiation control page refused our reader, so confirm with your employer. Nothing goes to the state.` },
      { q: `Which Missouri schools train imaging technologists?`, a: `St. Louis Community College reported the most radiography and sonography awards in Missouri for 2023-24, followed by Cox College in radiography and Concorde Career College in Kansas City in sonography. All appear in the table on this page. Compare resident prices.` },
    ],
  },
  MT: {
    lead: `Montana licenses radiologic technologists and limited permit holders, and its board page is one of the clearest in the country. A license needs ARRT certification in radiography after a 24-month approved program; the application costs $100; every license expires on February 1. Renewal costs $75 for a technologist and $60 for a limited permit holder, and paying late doubles it.`,
    how: `Apply online to the Montana Board of Radiologic Technologists with your ARRT certification. If you finished school but have not taken the ARRT exam yet, ask for a temporary permit. Renew in the 60 days before February 1.`,
    faqs: [
      { q: `How much is a Montana radiologic technologist license?`, a: `The application costs $100. Every license expires on February 1, and renewal costs $75 for a technologist and $60 for a limited permit holder. A late renewal adds a late fee equal to the renewal fee, so $150 in total for a technologist.` },
      { q: `What continuing education does Montana require?`, a: `Limited permit holders need six hours of continuing education each license year. Licensed radiologic technologists follow the ARRT continuing education requirements. The board audits licensees at random, so keep your certificates. An audit asks for proof of the hours you report.` },
    ],
  },
  NE: {
    lead: `Nebraska licenses radiographers, limited operators, CT and nuclear medicine technologists through the Department of Health and Human Services, according to the ASRT table. Its page did not answer our request, so this page relies on the ASRT classification. The University of Nebraska Medical Center and Nebraska Methodist College train most of the state’s imaging graduates.`,
    how: `Apply to the licensure unit of the Nebraska Department of Health and Human Services for the license of your modality, with your national exam result. Check its fees directly: we could not read them.`,
    faqs: [
      { q: `Does Nebraska license limited radiographers?`, a: `Yes. The ASRT table lists a Nebraska license for limited technologists as well as for full radiographers, both issued by the Department of Health and Human Services. The department’s page did not respond to our request on November 13, 2026.` },
      { q: `Where can I study radiography in Nebraska?`, a: `The University of Nebraska Medical Center reported the largest radiography class in Nebraska to IPEDS for 2023-24, followed by Nebraska Methodist College, which also led in sonography. Both are listed on this page with their tuition. Compare their resident tuition and fees before you apply.` },
    ],
  },
  NV: {
    lead: `Nevada licenses radiographers, limited operators, nuclear medicine technologists, radiation therapists and radiologist assistants, according to the ASRT table, through the Radiation Control program of the Division of Public and Behavioral Health. A Radiation Therapy and Radiologic Imaging Advisory Committee advises it. Pima Medical Institute in Las Vegas reported the largest radiography class in 2023-24.`,
    how: `Apply through the technologist application program of Nevada’s Division of Public and Behavioral Health, Radiation Control, with your national credential. Sonographers have nothing to file.`,
    faqs: [
      { q: `Who licenses radiologic technologists in Nevada?`, a: `The Nevada Division of Public and Behavioral Health, through its Radiation Control program, which runs a technologist application program. A Radiation Therapy and Radiologic Imaging Advisory Committee advises it on rules and meets in public. Its meeting notices appear on the same site.` },
      { q: `Do Nevada sonographers need a state license?`, a: `No. Sonography is not licensed in Nevada according to the ASRT table. The College of Southern Nevada and Great Basin College reported sonography graduates to IPEDS for 2023-24, and Nevada employers ask for ARDMS or ARRT credentials. No Nevada card is needed.` },
    ],
  },
  NH: {
    lead: `New Hampshire is one of the five places that license sonographers, and it licenses nearly every imaging modality besides: radiography, limited operators, CT, MRI, nuclear medicine, interventional work, radiation therapy and radiologist assistants. Its board sits in the Office of Professional Licensure and Certification, whose site refused our reader. NHTI in Concord trains most of the state’s graduates and awards sonography as a certificate rather than a degree; River Valley Community College in Claremont is the second radiography program. Both charge about $7,000 a year to residents and about $15,000 to others.`,
    how: `Apply to the Board of Medical Imaging and Radiation Therapy through the Office of Professional Licensure and Certification, with your ARRT or ARDMS credential. Ask the office for the fees and renewal cycle, which we could not read.`,
    faqs: [
      { q: `Do sonographers need a license in New Hampshire?`, a: `Yes. New Hampshire is one of five jurisdictions in the ASRT table that license sonography, with DC, New Mexico, North Dakota and Oregon. The license comes from the Board of Medical Imaging and Radiation Therapy, whose site refused our reader on November 13, 2026.` },
      { q: `Where can I study sonography in New Hampshire?`, a: `NHTI, Concord’s Community College, is the only New Hampshire school that reported sonography awards to IPEDS for 2023-24. It also reported the largest radiography class, ahead of River Valley Community College. NHTI awards sonography as a certificate, on top of a prior education.` },
    ],
  },
  NJ: {
    lead: `New Jersey licenses radiographers, limited operators, nuclear medicine technologists, radiation therapists, fusion imaging and radiologist assistants, and does it through its Department of Environmental Protection, not a health department. Sonography is not licensed. The department’s page refused our reader. New Jersey trains more sonographers than radiographers, mostly in private career schools.`,
    how: `Apply to the New Jersey Department of Environmental Protection, which runs the technologist program, with your national exam result. Its fees were not readable for us.`,
    faqs: [
      { q: `Which agency licenses x-ray techs in New Jersey?`, a: `The New Jersey Department of Environmental Protection, an unusual home for an imaging license. The ASRT table lists New Jersey licenses for radiography, limited operators, nuclear medicine, radiation therapy, fusion imaging and radiologist assistants. Its page refused our reader on November 13, 2026.` },
      { q: `Is sonography licensed in New Jersey?`, a: `No. Sonography has no New Jersey license in the ASRT table. New Jersey schools reported more sonography programs than radiography programs to IPEDS for 2023-24, led by MCI Institute and Eastern International College. Many of them are private career schools; compare their prices.` },
    ],
  },
  NM: {
    lead: `New Mexico licenses nearly the whole imaging field, sonography included, through the Medical Imaging and Radiation Therapy Program of the Environment Department. It moved licensees to a new online portal; certificates arrive by mail in 15 to 20 business days, and the portal’s verification serves in the meantime. Pima Medical Institute in Albuquerque reported the largest radiography class in 2023-24.`,
    how: `Register on the program’s application portal (existing licensees reset their password at first login) and apply with your national credential. Read the regulations each year: they can change after the advisory council’s December meeting.`,
    faqs: [
      { q: `Does New Mexico license sonographers?`, a: `Yes. New Mexico is one of five jurisdictions in the ASRT table with a state credential for sonography. The Medical Imaging and Radiation Therapy Program of the New Mexico Environment Department issues it, along with radiography, CT, MRI and other modalities.` },
      { q: `How long does a New Mexico license certificate take?`, a: `The program says to expect 15 to 20 business days for the certificate to arrive by mail, and that a delayed certificate should not stop you from working: the portal’s verification shows your active status. A duplicate costs $15, sent by FedEx on a prepaid label.` },
    ],
  },
  NY: {
    lead: `New York requires radiologic technologists to be licensed and registered by the State Department of Health, and unregistered technologists may not practice. The Bureau of Environmental Radiation Protection licenses radiography, radiation therapy and nuclear medicine, and certifies trained technologists to inject contrast media. Sonography is not licensed, yet New York trains a large number of sonographers in career schools.`,
    how: `Apply to the Bureau of Environmental Radiation Protection with the radiologic technologist license application and your national exam result, then keep your registration active: the bureau’s public database, updated weekly, shows whether it has expired.`,
    faqs: [
      { q: `Is a license required for radiologic technologists in New York?`, a: `Yes. New York law requires a license and an active registration from the State Department of Health; the bureau’s page links to Article 35 of the law and Part 89 of the regulations on the practice of radiologic technology. The Bureau of Environmental Radiation Protection says unregistered technologists are prohibited from practicing.` },
      { q: `Can New York technologists inject contrast?`, a: `Only with a separate certification: technologists with the proper training can apply to the Bureau of Environmental Radiation Protection for certification to inject contrast media, by e-mail or by phone at 518-402-7580, the contact printed on its page. Ask before you start.` },
    ],
  },
};
