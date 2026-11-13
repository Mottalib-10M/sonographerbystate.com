/** Handwritten notes, North Carolina to Wyoming. Facts from src/data/states.json (ASRT table and agency pages read on
 *  2026-11-13) and src/data/programs.json (IPEDS). */
import type { StateNote } from '../../lib/state-pages';

export const NOTES_3: Record<string, StateNote> = {
  NC: {
    lead: `North Carolina has no state license for radiographers, limited operators or sonographers: the ASRT table lists no rule of any kind for the profession there. Its radiation protection section regulates the equipment. The state compensates with a dense network of community colleges: Wake Technical Community College reported the largest radiography class in 2023-24, and many smaller colleges train sonographers.`,
    how: `Nothing to file with the state. Complete an accredited program, pass the ARRT or ARDMS exams and keep the credential current; North Carolina hospitals hire on those national credentials.`,
    faqs: [
      { q: `Do radiology techs need a license in North Carolina?`, a: `No. The ASRT table we read on November 13, 2026 lists no license, standard or equipment rule for radiographers in North Carolina. Employers ask for ARRT certification and registration, and the state regulates the x-ray equipment itself. Nothing goes to the state.` },
      { q: `Where can I study radiography in North Carolina?`, a: `Wake Technical Community College reported the most radiography awards in North Carolina for 2023-24, followed by Carolinas College of Health Sciences. South Piedmont and Johnston community colleges led in sonography. The table on this page lists them all. Compare their resident prices before you apply.` },
    ],
  },
  ND: {
    lead: `North Dakota licenses sonographers, one of five places to do so, through its Medical Imaging and Radiation Therapy Board, which also licenses radiography, limited operators, MRI, nuclear medicine, interventional work, radiation therapy, bone densitometry and radiologist assistants. The board runs everything online, including conditional licenses for students. North Dakota State University reported the largest radiography class.`,
    how: `Create an account on the board’s portal and file the initial or endorsement application for your modality. A sonography, CIS, CES or MRI student can apply for a conditional license; there are separate applications for limited x-ray machine operators and bone densitometry.`,
    faqs: [
      { q: `Does North Dakota license sonographers?`, a: `Yes. North Dakota is one of five jurisdictions in the ASRT table with a sonography license, issued by the North Dakota Medical Imaging and Radiation Therapy Board. The board also publishes license requirements for RCIS and RCES credential holders. Apply before you start.` },
      { q: `Can a sonography student work in North Dakota before graduating?`, a: `The North Dakota Medical Imaging and Radiation Therapy Board offers a conditional license application for sonography, CIS, CES and MRI students, filed on its online portal. Read its conditional licensure procedure for the conditions before you apply. Ask the board about its limits.` },
    ],
  },
  OH: {
    lead: `Ohio licenses radiographers and general x-ray machine operators through the Radiologic Licensure program of the Department of Health, which has licensed about 17,000 operators and approved 110 educational facilities and 180 continuing education courses. Sonography is not licensed. Cuyahoga Community College reported the largest radiography class in 2023-24, and ATA College in Cincinnati the largest sonography class.`,
    how: `Apply through the Ohio Department of Health licensure website, signing in with OHID, with your ARRT or NMTCB card; a general x-ray machine operator (GXMO) passes the state exam. Renew on time: more than 30 days late means a new application.`,
    faqs: [
      { q: `What happens if my Ohio radiologic license lapses?`, a: `If your renewal reaches the Ohio Department of Health more than 30 days after expiry, you must file a new application with a $65 fee ($45 if active military service caused the delay), 24 continuing education credits, proof of education and your ARRT or NMTCB card.` },
      { q: `What is a GXMO in Ohio?`, a: `A general x-ray machine operator, a limited Ohio license for people who take x-rays without being full radiographers. Unlike radiographers, who show an ARRT or NMTCB card, GXMO applicants must show they passed the state examination. Ask the department which exam applies.` },
    ],
  },
  OK: {
    lead: `Oklahoma does not license radiographers, limited operators or sonographers: the ASRT table lists a state credential only for radiologist assistants, the advanced-level technologists licensed by the Board of Medical Licensure and Supervision. Tulsa Community College reported the largest radiography class in 2023-24, and ATA College the largest sonography class.`,
    how: `A radiographer or sonographer files nothing with the state and works on the ARRT or ARDMS credential. A radiologist assistant applies online to the Board of Medical Licensure and Supervision.`,
    faqs: [
      { q: `Is there an x-ray tech license in Oklahoma?`, a: `No. The ASRT table lists no state credential for radiographers in Oklahoma, only for radiologist assistants, who are licensed by the Oklahoma State Board of Medical Licensure and Supervision. Employers ask radiographers for ARRT certification. No state card is needed for them.` },
      { q: `How do I verify an Oklahoma radiologist assistant license?`, a: `Through the board’s online verification, or by a written request with a $25 fee, according to the Oklahoma State Board of Medical Licensure and Supervision page we read. Verifications sent with the right fee are processed and mailed daily. Online is the faster route.` },
    ],
  },
  OR: {
    lead: `Oregon licenses sonographers, one of five places to do so, and its Board of Medical Imaging covers radiography, MRI, nuclear medicine, radiation therapy, bone densitometry and radiologist assistants too, with limited permits for x-ray operators. Oregon Institute of Technology dominates training: it reported nearly all of the state’s sonography awards and the largest radiography class in 2023-24.`,
    how: `Apply to the Oregon Board of Medical Imaging for a license (or a limited permit), with your ARRT, ARDMS or other accepted credential. The board lists disciplinary actions publicly and renews licenses and permits online.`,
    faqs: [
      { q: `Do sonographers need a license in Oregon?`, a: `Yes. Oregon is one of five jurisdictions in the ASRT table that license sonography, with DC, New Hampshire, New Mexico and North Dakota. The Oregon Board of Medical Imaging issues the license and also handles radiography and MRI. Apply before your first shift.` },
      { q: `Where do Oregon sonographers train?`, a: `Mostly at Oregon Institute of Technology, which reported the overwhelming majority of Oregon’s sonography awards to IPEDS for 2023-24. Concorde Career College in Portland also reported a small class. Both are in the table on this page. Compare their resident prices before you apply.` },
    ],
  },
  PA: {
    lead: `Pennsylvania has no state license for radiographers or sonographers. The ASRT table records a training standard instead, and the Department of Environmental Protection, which the ASRT points to, registers x-ray machines every year and lists refresher training for equipment operators. The Community College of Allegheny County reported the largest radiography and sonography classes in 2023-24.`,
    how: `No state license to apply for. Finish an accredited program and pass the ARRT or ARDMS exams; your employer registers its machines with the Department of Environmental Protection and applies its operator training rules.`,
    faqs: [
      { q: `Is Pennsylvania a licensure state for radiology techs?`, a: `No. Pennsylvania issues no license to radiographers. The ASRT table shows a training standard, and the Department of Environmental Protection page it points to deals with registering x-ray machines each year and with refresher training for operators. Employers ask for ARRT.` },
      { q: `Which Pennsylvania schools train sonographers?`, a: `The Community College of Allegheny County reported the most sonography awards in Pennsylvania for 2023-24, followed by South Hills School of Business and Technology. Pennsylvania has many programs in both disciplines, all listed on this page. Compare their resident prices before you apply.` },
    ],
  },
  RI: {
    lead: `Rhode Island licenses radiographers, CT, nuclear medicine and radiation therapy technologists and radiologist assistants through its Department of Health, according to the ASRT table. Sonography and limited x-ray work are not licensed. The department’s page refused our reader. Rhode Island College and the Community College of Rhode Island share the state’s training: the college teaches both disciplines as bachelor’s degrees, the community college as associate degrees, at about half the resident price ($5,326 against $10,986 a year in tuition and fees).`,
    how: `Apply to the Rhode Island Department of Health for the license of your modality, with your national exam result. We could not read its fee or renewal cycle: check them on the department’s licensing page.`,
    faqs: [
      { q: `Does Rhode Island license radiographers?`, a: `Yes. The ASRT table lists a Rhode Island license for radiography, plus CT, nuclear medicine, radiation therapy and radiologist assistants, all from the Department of Health. Its licensing page refused our reader on November 13, 2026. Ask the department for current requirements before applying.` },
      { q: `Can I train in Rhode Island?`, a: `Yes. Rhode Island College and the Community College of Rhode Island both reported radiography and sonography awards to IPEDS for 2023-24. Their in-state tuition and fees appear in the table on this page. The community college charges residents about half as much as the college.` },
    ],
  },
  SC: {
    lead: `South Carolina certifies operators through an unusual body, the South Carolina Radiation Quality Standards Association, which covers radiography, nuclear medicine, radiation therapy, CT, limited practice radiographers and bone densitometry operators. Sonography is not certified. Few South Carolina schools reported radiography awards for 2023-24, while Southeastern College and Horry-Georgetown Technical College train sonographers.`,
    how: `Fill out the SCRQSA application or recertification paperwork, send your ARRT, NMTCB, RCIS, RCES or continuing education verification, pay by card online or by check, and mail, e-mail or fax the documents.`,
    faqs: [
      { q: `Who certifies x-ray techs in South Carolina?`, a: `The South Carolina Radiation Quality Standards Association (SCRQSA). It certifies radiography, nuclear medicine (through ARRT or SNMMI), radiation therapy, CT, limited practice radiographers and bone densitometry operators, and publishes its 2026 board meetings. Its page lists each credential by type.` },
      { q: `What is a limited practice radiographer in South Carolina?`, a: `A limited credential certified by SCRQSA for operators who take a restricted range of x-rays without full radiographer certification. The ASRT table lists it as a South Carolina certification for limited technologists. Ask SCRQSA which exam it requires and which procedures the credential covers.` },
    ],
  },
  SD: {
    lead: `South Dakota has no state license for radiographers, limited operators or sonographers. The ASRT table records only an equipment regulation, and the Department of Health handles x-ray facilities. Training is small and technical: Mitchell Technical College reported the largest radiography class in 2023-24 and Southeast Technical College the only sonography awards. Sanford Medical Center in Sioux Falls trains radiographers in a hospital certificate program, and Mount Marty University in Yankton offers the only bachelor’s degree in radiography that reported graduates. Out-of-state students pay the resident rate at both technical colleges.`,
    how: `No personal state application. Complete an accredited program and pass the ARRT or ARDMS exams; the facility answers to the Department of Health for its equipment.`,
    faqs: [
      { q: `Do I need a license to be an x-ray tech in South Dakota?`, a: `No. The ASRT table lists no individual license for South Dakota, only an equipment regulation. Employers ask for ARRT certification and registration, and the Department of Health regulates the equipment and the facility. Nothing goes to the state in your own name.` },
      { q: `Where can I study sonography in South Dakota?`, a: `Southeast Technical College is the only South Dakota school that reported sonography awards to IPEDS for 2023-24. Radiography is taught at Mitchell Technical College, Sanford Medical Center and others listed on this page. Out-of-state students pay the resident rate there.` },
    ],
  },
  TN: {
    lead: `Tennessee issues a certificate to radiographers through its Board of Medical Examiners, according to the ASRT table, and lists a credential for radiologist assistants. Sonography and limited x-ray work have no Tennessee credential in the table. The state’s page did not answer our request. South College reported the largest radiography and sonography classes in 2023-24.`,
    how: `Apply to the Tennessee Board of Medical Examiners for the x-ray certificate, with your national exam result. Check the board’s current fee and form directly: we could not read them.`,
    faqs: [
      { q: `Does Tennessee require a certificate for radiographers?`, a: `Yes. The ASRT table lists a Tennessee certificate for radiography, issued under the Board of Medical Examiners. The state’s x-ray licensing page did not respond to our request on November 13, 2026, so confirm with the board before you apply.` },
      { q: `Which Tennessee schools train sonographers?`, a: `South College reported by far the most sonography awards in Tennessee for 2023-24, ahead of Volunteer State Community College. East Tennessee State University is second in radiography. The table on this page lists all of them. Compare their resident prices before you apply.` },
    ],
  },
  TX: {
    lead: `Texas has the largest radiography training market in the country, and it credentials through the Texas Medical Board: a general medical radiologic technologist certificate, limited and temporary permits, a registry for non-certified radiologic technicians and hardship exemptions. Sonography has no Texas credential. Career schools such as The College of Health Care Professions train the most radiographers.`,
    how: `Apply to the Texas Medical Board for the general certificate with your ARRT result, or for a limited permit after the board’s limited technologist exam. Renew online through the board.`,
    faqs: [
      { q: `What is a non-certified radiologic technician in Texas?`, a: `Someone listed on a Texas Medical Board registry who performs radiologic procedures without holding the general or limited certificate, under the conditions the board sets. The board also grants hardship exemptions; both appear on its medical radiologic technologist page. Read the conditions there before you apply.` },
      { q: `Is there a sonographer license in Texas?`, a: `No. The ASRT table lists no Texas credential for sonography. Texas schools reported sonography awards to IPEDS for 2023-24, led by Austin Community College and Pima Medical Institute in Houston, and employers rely on ARDMS or ARRT credentials. Compare their prices.` },
    ],
  },
  UT: {
    lead: `Utah licenses radiographers and limited operators, plus nuclear medicine, radiation therapy and radiologist assistants, through its Division of Professional Licensing (DOPL), according to the ASRT table. The division’s site refused our reader. Weber State University stands out: it reported one of the largest radiography classes of any school in the country for 2023-24, with awards from certificates to a master’s degree. Salt Lake Community College and Mountainland Technical College in Lehi come next in radiography, and Utah Tech University trains radiographers in Saint George, in the south of the state.`,
    how: `Apply to the Utah Division of Professional Licensing for the radiologic technology license of your category, with your national exam result. We could not read its fee schedule.`,
    faqs: [
      { q: `Who licenses radiologic technologists in Utah?`, a: `The Utah Division of Professional Licensing, known as DOPL, according to the ASRT table we read on November 13, 2026. It licenses radiography and limited operators. Its own page refused our automated reader, so confirm the current requirements there. Ask the division directly before you apply.` },
      { q: `Which school trains most Utah radiographers?`, a: `Weber State University, by far: it reported more radiography awards to IPEDS for 2023-24 than any other Utah school, ahead of Salt Lake Community College, and it is also Utah’s only school reporting sonography awards. Its campus is in Ogden.` },
    ],
  },
  VT: {
    lead: `Vermont licenses radiographers through the Office of Professional Regulation of the Secretary of State, and the ASRT table adds CT, nuclear medicine, interventional work, radiation therapy, mammography, bone densitometry and radiologist assistants. Sonography is not licensed. Vermont State University is the only Vermont school reporting radiography awards, and no Vermont school reported sonography awards for 2023-24. The Randolph program charged $11,400 a year in tuition and fees to residents and $21,408 to others. Of Vermont’s neighbors, New Hampshire licenses radiographers and sonographers alike, New York and Massachusetts radiographers only.`,
    how: `Apply and renew online with the Office of Professional Regulation, which governs this profession under an advisor model, and look up licensees or download the roster on the same site.`,
    faqs: [
      { q: `How is the radiologic technology profession regulated in Vermont?`, a: `By the Office of Professional Regulation of the Vermont Secretary of State, under its advisor model. Applications, renewals and verifications are online, and the office warns of phishing scams that impersonate it by e-mail and phone. Use only its official site to apply.` },
      { q: `Can I study sonography in Vermont?`, a: `No Vermont school reported sonography awards in the IPEDS file for 2023-24. Vermont State University reported radiography awards. Vermont students often look at programs in New Hampshire or New York, listed on those state pages. Compare their out-of-state prices there.` },
    ],
  },
  VA: {
    lead: `Virginia licenses radiologic technologists and limited radiologic technologists through the Board of Medicine, renews every two years in the birth month of odd-numbered years for $135, and makes one large exception: a technologist employed by a hospital, a health system or an affiliated urgent care center needs no board license to work there. ECPI University reported the largest radiography and sonography classes.`,
    how: `Apply to the Virginia Board of Medicine for the radiologic technologist or limited radiologic technologist license. Once licensed, renew in your birth month of each odd-numbered year; the board mails the new card within ten working days of payment.`,
    faqs: [
      { q: `Do I need a Virginia license if I work in a hospital?`, a: `No. The Virginia Board of Medicine says that anyone employed or engaged by a hospital, a health care system, or an urgent care center affiliated with one, acting within that job as a radiologic technologist, is not required to hold a board license in those settings.` },
      { q: `How much is a Virginia rad tech renewal?`, a: `$135, every two years, in your birth month of each odd-numbered year, according to the Board of Medicine’s FAQ we read on November 13, 2026. The current license is printed and mailed within ten working days of payment. Renew online to save time.` },
    ],
  },
  WA: {
    lead: `Washington certifies radiologic technologists through the Department of Health, which also credentials limited scope x-ray technicians and radiologist assistants separately; the ASRT table adds MRI, nuclear medicine, interventional work and radiation therapy. Sonography is not credentialed. Pima Medical Institute in Seattle reported the largest radiography class and Bellevue College the largest sonography class in 2023-24.`,
    how: `Apply through the Department of Health’s HELMS licensing system for the radiologic technologist certification, or for the limited scope x-ray technician credential. Keep your contact details current to receive renewal notices.`,
    faqs: [
      { q: `What credential do Washington radiologic technologists need?`, a: `A certification from the Washington State Department of Health, applied for and renewed in its HELMS system. Limited scope x-ray technicians and radiologist assistants have their own separate credentials listed on the same page. Apply in HELMS before your first shift in Washington.` },
      { q: `Where can I study sonography in Washington?`, a: `Bellevue College and Spokane Community College reported the two largest sonography classes in Washington to IPEDS for 2023-24. Tacoma Community College and Pima Medical Institute in Seattle train radiographers; all are listed on this page. Compare their resident prices before you apply.` },
    ],
  },
  WV: {
    lead: `West Virginia has a dedicated board, the Medical Imaging and Radiation Therapy Technology Board, created under West Virginia Code §30-23-1. It licenses radiography and also MRI, nuclear medicine and CT, with apprentice licenses in MRI and nuclear medicine and permits for limited operators. Sonography is not licensed. Marshall University reported the largest radiography class in 2023-24.`,
    how: `Apply through the board’s Certemy license management system for the license of your modality, with your national credential. The board no longer issues temporary licenses, and in-person visits need an appointment.`,
    faqs: [
      { q: `Does West Virginia have apprentice imaging licenses?`, a: `Yes. The West Virginia Medical Imaging and Radiation Therapy Technology Board lists apprentice licenses in MRI and in nuclear medicine, besides full licenses. It also issues nuclear medicine and CT licenses, with diagnostic and non-diagnostic CT versions. Ask the board which applies.` },
      { q: `Can I get a temporary rad tech license in West Virginia?`, a: `No longer: the board posts an administrative order eliminating temporary licenses. Applications go through its Certemy system, and in-person appointments must be scheduled in advance by e-mail at the address on its site. Plan for the full license from the start.` },
    ],
  },
  WI: {
    lead: `Wisconsin licenses radiographers and limited x-ray machine operators through the Department of Safety and Professional Services. Active ARRT certification counts as passing the exam, and every radiographer needs 24 hours of ARRT-recognized continuing education per biennium, except the first one. Sonography is not licensed. Bellin College reported the largest radiography and sonography classes in 2023-24.`,
    how: `Register on the department’s LicensE portal as an individual and apply for the radiographer or limited x-ray machine operator license, with your ARRT certification. A license lapsed for five years or more means applying again rather than renewing.`,
    faqs: [
      { q: `How many CE hours do Wisconsin radiographers need?`, a: `24 hours of continuing education, from providers recognized by ARRT, each biennium. The rule does not apply to the biennium in which the license was first issued, according to the Department of Safety and Professional Services page we read on November 13, 2026.` },
      { q: `Does ARRT certification count in Wisconsin?`, a: `Yes. The Department of Safety and Professional Services accepts active ARRT certification as proof that the applicant passed the examination requirement for a radiographer license. Limited x-ray machine operators have their own license. Keep your ARRT certification active to renew without trouble.` },
    ],
  },
  WY: {
    lead: `Wyoming created its Board of Radiologic Technologist Examiners in 1985 to regulate radiologic technologists and technicians. The board issues general, restricted, special and temporary licenses through the Professional Licensing Boards Office, and the ASRT table lists licenses for limited operators, nuclear medicine, radiation therapy and radiologist assistants. Laramie County Community College trains most of the state’s imaging graduates, Casper College the rest; both kept resident tuition and fees under $5,000 a year.`,
    how: `Pick the right application on the board’s site (general, restricted, special or temporary license) and send it with your national credential. Ask for a license verification there if another state needs one.`,
    faqs: [
      { q: `What license types does Wyoming offer rad techs?`, a: `The Wyoming Board of Radiologic Technologist Examiners lists four applications: general license, restricted license, special license and temporary license. Limited operators also hold a Wyoming license in the ASRT table; ask the board which application fits your work. Each has its own form.` },
      { q: `Where can I study sonography in Wyoming?`, a: `Laramie County Community College is the only Wyoming school that reported sonography awards to IPEDS for 2023-24. It also reported the largest radiography class, ahead of Casper College; both appear in the table on this page. Both kept resident prices under $5,000 a year.` },
    ],
  },
};
