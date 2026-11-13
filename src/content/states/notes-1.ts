/** Handwritten notes, Alabama to Iowa. Facts from src/data/states.json (ASRT table and agency pages read on 2026-11-13)
 *  and src/data/programs.json (IPEDS). Figures that change are written by the page from the data, not here. */
import type { StateNote } from '../../lib/state-pages';

export const NOTES_1: Record<string, StateNote> = {
  AL: {
    lead: `Alabama is one of the few states where neither an x-ray technologist nor a sonographer needs a state license: the ASRT table shows no credential for any imaging modality there. That does not make the job unregulated in practice. Hospitals and imaging centers hire on the national credential, ARRT for radiography and ARDMS or ARRT for sonography, and the state’s community colleges, Wallace State in Hanceville first among them, train most of the graduates.`,
    how: `There is no state application to file. Finish an accredited radiography or sonography program, pass the ARRT or ARDMS exams, and keep that credential active: it is what an Alabama employer checks.`,
    faqs: [
      { q: `Do I need a license to be a radiology tech in Alabama?`, a: `No state license exists for radiographers in Alabama, according to the ASRT table we read on November 13, 2026. Employers still ask for ARRT certification and registration in nearly every posting, and the radiation rules of the Department of Public Health apply to the equipment and the facility, not to a personal license.` },
      { q: `Where can I study sonography in Alabama?`, a: `Alabama community colleges and universities reported sonography graduates to the federal IPEDS survey for 2023-24; the table on this page lists them with their in-state tuition. Wallace State Community College in Hanceville reported the largest imaging class in the state that year.` },
    ],
  },
  AK: {
    lead: `Alaska sets no state license for radiographers, limited operators or sonographers in the ASRT table, and the page of its Radiological Health Program refused our reader, so this page leans on the ASRT classification alone. Training is thin on the ground: the University of Alaska Anchorage is the main school reporting imaging graduates, and the University of Alaska Southeast reported a radiography certificate. At Anchorage, tuition and required fees came to $7,566 a year for Alaska residents in 2023-24 and $21,693 for students from other states, a gap worth weighing if you plan to move north before you enroll.`,
    how: `Without a state license, the national credential is the passport: ARRT certification in radiography, or an ARDMS or ARRT sonography credential. Ask the employer whether it also wants a state radiation safety course for its equipment.`,
    faqs: [
      { q: `Does Alaska license x-ray technologists?`, a: `Not according to the ASRT state table we read on November 13, 2026, which lists no licensure, standard or equipment rule for radiographers in Alaska. The state program’s own page refused automated reading, so confirm with the Alaska Radiological Health Program before relying on it for a job offer.` },
      { q: `Can I train as a sonographer in Alaska?`, a: `Yes, but options are few. In the IPEDS files for 2023-24, the University of Alaska Anchorage is the only Alaska school that reported sonography graduates. It also reported radiography graduates, and its in-state tuition appears in the table on this page.` },
    ],
  },
  AZ: {
    lead: `Arizona certifies rather than licenses: the ASRT table lists a state certification for radiography, limited technologists, CT, nuclear medicine, radiation therapy, mammography, bone densitometry and radiologist assistants, but nothing for sonography. Pima Medical Institute’s Tucson campus reported the largest radiography class in the state in 2023-24, ahead of the public community colleges, whose in-state tuition is among the lowest in this table.`,
    how: `Apply for certification through the Arizona Department of Health Services, Bureau of Special Licensing, on its individual licensing portal, with proof of the exam it accepts for your category. A sonographer needs no Arizona certificate.`,
    faqs: [
      { q: `What credential does an x-ray tech need in Arizona?`, a: `A state certification issued by the Arizona Department of Health Services. The ASRT table also lists certifications for limited technologists, CT, mammography and bone densitometry, so a technologist working in several modalities may need more than one Arizona certificate. Renew each one on its own schedule.` },
      { q: `Is there a sonography license in Arizona?`, a: `No. The ASRT table lists no state credential for sonography in Arizona. Employers rely on the national ARDMS or ARRT sonography credentials, and Arizona schools reported sonography graduates to IPEDS for 2023-24, listed lower on this page. Pima Medical Institute appears among them.` },
    ],
  },
  AR: {
    lead: `Arkansas licenses radiography, limited operators, nuclear medicine, cardiac and vascular interventional work, radiation therapy, fusion imaging and radiologist assistants, according to the ASRT table. Two bodies are involved: the Department of Health licenses technologists, while the State Medical Board handles radiologist assistants. The University of Arkansas at Fort Smith reported the largest imaging class in 2023-24.`,
    how: `Send the application of the Radiologic Technology Licensure Program of the Department of Health, with your ARRT or other accepted exam result; renewals are paid online. Questions go to the program at 501-661-2301, the number printed on its page.`,
    faqs: [
      { q: `Who issues a radiologic technologist license in Arkansas?`, a: `The Arkansas Department of Health, through its Radiologic Technology Licensure Program, advised by the Medical Ionizing Radiation Licensure Committee. Radiologist assistants deal with the Arkansas State Medical Board instead, which had a proposed rule for them open to public comment until November 15, 2026.` },
      { q: `Do sonographers need an Arkansas license?`, a: `No. Sonography is not on the list of licensed modalities in the ASRT table for Arkansas. A sonographer works on the national ARDMS or ARRT credential, which Arkansas employers check instead of a state card. The radiography license, by contrast, is required to take x-rays there.` },
    ],
  },
  CA: {
    lead: `California runs the largest imaging training system in this table, with more sonography graduates in 2023-24 than any other state and dozens of radiography programs. The state certifies radiologic technologists and issues limited permits through the Radiologic Health Branch of the Department of Public Health; sonography has no state credential. For residents, the in-state tuition of its public colleges is among the lowest reported to IPEDS.`,
    how: `Apply to the Radiologic Health Branch for a certificate (full technologist) or a limited permit (limited scope), after the ARRT exam or the state’s limited permit exam. Use the branch’s certificate and permit search to check the status of yours.`,
    faqs: [
      { q: `Do I need a California license to be a radiology tech?`, a: `Yes. California requires a state certificate for radiologic technologists and a limited permit for limited scope operators, both from the Radiologic Health Branch. Note that the branch said its web pages would not be updated between October 2 and November 13, 2026, during a software change.` },
      { q: `Is sonography licensed in California?`, a: `No state license or certificate exists for sonographers in California, according to the ASRT table we read. Employers ask for ARDMS or ARRT sonography credentials. California schools reported the largest number of sonography awards of any state to IPEDS for 2023-24.` },
    ],
  },
  CO: {
    lead: `Colorado answers the question in one word on its own official page: no. It is a non-licensure state for radiographers who hold ARRT or NMTCB certification, so a nationally certified technologist needs no Colorado license or registration. The state does register the operators it does not trust to national credentials: limited scope operators, bone density operators and provisional mammographers.`,
    how: `A certified technologist simply keeps ARRT or NMTCB certification current. A limited scope or bone density operator registers with the Department of Public Health and Environment, renews at least 30 days before expiry with continuing education and the fee, and pays by check or through the state portal.`,
    faqs: [
      { q: `Is Colorado a non-licensure state for x-ray techs?`, a: `Yes. The Colorado Department of Public Health and Environment says it plainly: separate licensure or registration is not required for technologists certified and registered with ARRT or NMTCB. CT and mammography still require the matching ARRT or NMTCB certification, but no Colorado registration.` },
      { q: `How long does a Colorado limited scope registration last?`, a: `Two years, after which it must be renewed with evidence of continuing education and the fee, at least 30 days before expiry. A bone density operator registration lasts three years, and a provisional mammographer registration one year, renewable only once.` },
    ],
  },
  CT: {
    lead: `Connecticut licenses radiographers, radiation therapists and radiologist assistants, and prints its fees plainly: $200 to apply, $105 to renew, $200 to reinstate a lapsed license. Sonography and limited x-ray work have no Connecticut license in the ASRT table. The University of Hartford reported the largest imaging class in the state for 2023-24, alongside community college programs.`,
    how: `Apply to the Practitioner Licensing and Investigations Section of the Department of Public Health with your ARRT result. If you have held a license in another state for at least four years, the department has a separate route for you.`,
    faqs: [
      { q: `How much is a Connecticut radiographer license?`, a: `The Department of Public Health charges $200 for the initial application and $105 for each renewal; reinstating a lapsed license costs $200. These are the fees printed on its radiographer licensure page, read on November 13, 2026. ARRT fees are separate.` },
      { q: `I am licensed in another state. Is it faster in Connecticut?`, a: `Connecticut has a dedicated route for applicants licensed in another state for at least four years, listed on its radiographer licensure page. The requirements differ from a first license, so pick that route when you apply instead of the standard application.` },
    ],
  },
  DE: {
    lead: `Delaware issues certificates rather than licenses, and for an unusually long list of modalities: radiography, limited operators, CT, nuclear medicine, cardiac and vascular interventional work, radiation therapy, bone densitometry and radiologist assistants, according to the ASRT table. Sonography is not on it. The state’s page refused our reader. Delaware Technical Community College is the one school reporting imaging graduates: its Dover campus awarded associate degrees in both radiography and sonography, at $4,965 a year in tuition and fees for Delaware residents and $11,828 for others. Of Delaware’s neighbors, Maryland and New Jersey also license radiographers; Pennsylvania does not.`,
    how: `Apply to the Delaware Authority on Radiation Protection, through the Office of Radiation Control, for the certificate of each modality you will perform, with the national exam it accepts. Ask the office for the current fee, which we could not read.`,
    faqs: [
      { q: `What does Delaware require from a radiologic technologist?`, a: `A state certificate for radiography, according to the ASRT table we read, with separate certificates for limited operators, CT, nuclear medicine, radiation therapy and other modalities. The agency’s site refused our reader, so confirm the details with the Office of Radiation Control.` },
      { q: `Where can I study radiography in Delaware?`, a: `In the IPEDS files for 2023-24, Delaware Technical Community College is the only Delaware school reporting radiography and sonography graduates. Its in-state tuition is shown in the table on this page; nearby programs in other states are an option too.` },
    ],
  },
  DC: {
    lead: `The District of Columbia is one of only five places in the country that license sonographers, and it also licenses radiography, CT, MRI, nuclear medicine, interventional work, radiation therapy, mammography and radiologist assistants. DC Health runs it through its Division of Radiation Control and Medical Devices. No school in the District reported imaging graduates to IPEDS for 2023-24, so every applicant trained somewhere else; at the public colleges of Maryland and Virginia, a District resident usually pays the out-of-state rate. A sonographer who also works in Maryland or Virginia needs the license for the District side only: neither neighbor licenses sonography.`,
    how: `Create an account on the online application portal of the Division of Radiation Control and Medical Devices and apply for the license of your modality, with your national credential. The same portal handles renewals.`,
    faqs: [
      { q: `Do sonographers need a license in Washington, DC?`, a: `Yes. The District of Columbia is one of five jurisdictions in the ASRT table that license sonography, with New Hampshire, New Mexico, North Dakota and Oregon. The license is issued by DC Health, through the Division of Radiation Control and Medical Devices.` },
      { q: `Are there radiography schools in DC?`, a: `No District school reported radiography or sonography graduates in the IPEDS completions file for 2023-24. Programs in Maryland and Virginia are the closest; this site’s pages for those two states list them with their tuition. Expect out-of-state tuition at most of those public colleges.` },
    ],
  },
  FL: {
    lead: `Florida certifies radiologic technologists and basic x-ray machine operators through the Department of Health, and the ASRT table adds CT, MRI, nuclear medicine, radiation therapy, fusion imaging, mammography and radiologist assistants. There is no sonography certificate. Florida has one of the largest training markets in the country, led by private colleges such as Keiser University and by public state colleges.`,
    how: `Apply for certification to the Florida Department of Health with your ARRT result, or take the state route for basic x-ray machine operator, for which the department publishes study materials. Renewal is handled online.`,
    faqs: [
      { q: `What is a basic x-ray machine operator in Florida?`, a: `It is a limited Florida certification for people who take basic x-rays without being full radiologic technologists. The Florida Department of Health publishes study materials for its exam on the page we read, alongside the general radiologic technology certification. It suits clinics and offices.` },
      { q: `Do Florida sonographers need a state certificate?`, a: `No. The ASRT table lists no state credential for sonography in Florida. Employers ask for ARDMS or ARRT sonography credentials, and Florida schools, public and private, reported a large number of sonography awards to IPEDS for 2023-24. The table on this page lists the largest.` },
    ],
  },
  GA: {
    lead: `Georgia does not license radiographers; the ASRT table shows a training standard instead, meaning the regulator expects education and usually a national credential, and lists a credential only for radiologist assistants. The page it points to is the Healthcare Facility Regulation Division, which licenses facilities. Georgia’s technical colleges, such as Wiregrass Georgia Technical College, train a large share of the state’s technologists.`,
    how: `No state application exists for a radiographer or sonographer. Complete an accredited program and pass the ARRT or ARDMS exams; the facility that hires you answers to the Department of Community Health for its x-ray equipment.`,
    faqs: [
      { q: `Is there a radiology tech license in Georgia?`, a: `No individual license. The ASRT table shows a “standard” for Georgia radiography: education and usually national certification are expected, but the state issues no license. Radiologist assistants are the exception, with a state credential listed in the table. Employers decide which credential they require.` },
      { q: `What do Georgia employers look for?`, a: `ARRT certification and registration for radiographers, and ARDMS or ARRT credentials for sonographers. Georgia technical colleges and universities reported many radiography and sonography graduates to IPEDS for 2023-24, listed in the table on this page. Ask each employer which credential it requires.` },
    ],
  },
  HI: {
    lead: `Hawaii licenses radiographers, radiation therapists and nuclear medicine technologists through its Radiologic Technology Board, with forms published by the Department of Health. No Hawaii school reported radiography or sonography graduates in the IPEDS completions file for 2023-24, so most new technologists arrive with a license or a degree from the mainland. Sonography has no state license. Three modalities in all carry a Hawaii certification in the ASRT table; CT, MRI, mammography and limited x-ray work carry none.`,
    how: `Download the board’s license application and guide from the Department of Health’s radiation forms page and mail them with your national credential. The department mails renewal forms about 45 days before your license expires.`,
    faqs: [
      { q: `Do I need a Hawaii license to work as an x-ray tech?`, a: `Yes. Hawaii’s Radiologic Technology Board licenses radiographers, radiation therapists and nuclear medicine technologists. The application, the guide and the renewal form are on the Department of Health’s radiation forms page, which we read on November 13, 2026. Applicants from the mainland start there.` },
      { q: `What if my Hawaii license expired?`, a: `If it lapsed less than a year ago, the board has a re-application form and guide for recently defunct licensees. After that, you would apply again as a new licensee. Renewal forms are mailed about 45 days before expiry, so keep your address current.` },
    ],
  },
  ID: {
    lead: `In the ASRT table, Idaho credentials none of the people who take x-rays or scan with ultrasound, full radiographers and limited operators alike. What the state licenses is the equipment: its Radiation Control Program oversees x-ray and mammography licensure, registration and inspection. Boise State University reported the largest radiography class in the state in 2023-24, ahead of Lewis-Clark State College.`,
    how: `Idaho asks for nothing in your own name. Radiographers train in Boise, Lewiston and Twin Falls, sonographers in Lewiston and Pocatello, then take the ARRT or ARDMS exams; hospitals and clinics hire on that national certificate, while the facility itself holds the x-ray license from the Radiation Control Program.`,
    faqs: [
      { q: `Does Idaho license radiologic technologists?`, a: `No. The ASRT table lists no individual credential for any imaging modality in Idaho. The Idaho Radiation Control Program, in the Department of Health and Welfare, licenses and inspects x-ray and mammography equipment and facilities, not the people who operate them.` },
      { q: `Which Idaho schools train sonographers?`, a: `Two Idaho institutions reported sonography graduates in the IPEDS file for 2023-24. They are listed lower on this page with their awards and in-state tuition, next to the radiography programs led by Boise State University. Those are Lewis-Clark State College and Idaho State University.` },
    ],
  },
  IL: {
    lead: `Illinois calls its credential an accreditation, issued by the Illinois Emergency Management Agency rather than a health board. It costs $120 and lasts two years, renewable up to 60 days before it expires. Limited scope radiography has its own exam, taken before accreditation. Sonography has no Illinois credential. Southwestern Illinois College reported the largest radiography class in 2023-24.`,
    how: `Complete the Initial Accreditation in Medical Radiation Technology application with the name on your state ID, pay the $120 fee (a 2.25% convenience fee applies to cards), and send your ARRT result. Limited scope applicants book the state exam first.`,
    faqs: [
      { q: `How much does Illinois accreditation cost for a rad tech?`, a: `$120 for two years, plus a 2.25% convenience fee when you pay by credit card, according to the Illinois Emergency Management Agency page we read on November 13, 2026. You can renew up to 60 days before the accreditation expires.` },
      { q: `Can I work in Illinois on a temporary accreditation?`, a: `Yes, for a limited time: the agency says a temporary accreditation holder must pass the ARRT boards within two years to be eligible to renew. Limited scope radiography works differently, with a state exam required before the accreditation is granted.` },
    ],
  },
  IN: {
    lead: `Indiana licenses radiologic technologists and issues permits through the Department of Health’s Division of Radiology, Weights and Measures, an unusual home for an imaging license. The ASRT table lists licenses for radiography, limited operators, nuclear medicine, interventional work and radiation therapy. The paper application costs $60. Sonography has no Indiana license.`,
    how: `Mail the license application with a $60 check or money order, after your education, clinical training under a permit and exam. Indiana accepts ARRT results for supported programs. A name change on the license costs $20.`,
    faqs: [
      { q: `How do I get a radiologic technologist license in Indiana?`, a: `Finish an approved program, complete clinical training under an Indiana permit, pass the exam, then mail the license application with a $60 check or money order to the Indiana Department of Health. The program director or supervising practitioner signs the training documentation.` },
      { q: `Does Indiana license sonographers?`, a: `No. Sonography is not among the licensed modalities in the ASRT table for Indiana. Indiana schools reported sonography graduates to IPEDS for 2023-24; they are listed on this page, and employers check the ARDMS or ARRT credential. No Indiana card is needed for ultrasound work.` },
    ],
  },
  IA: {
    lead: `Iowa issues permits rather than licenses, for radiography, limited operators, nuclear medicine, radiation therapy, radiologist assistants and fusion imaging, according to the ASRT table. The University of Iowa reported the largest imaging class in the state for 2023-24, with a bachelor’s degree; most other radiography graduates earned an associate degree, the majority at community colleges from Ottumwa to Sheldon, and two hospital schools, in Cedar Rapids and Des Moines, still award certificates. Sonographers need no Iowa permit.`,
    how: `Apply to the Iowa Department of Health and Human Services for the permit of your modality, with the national exam it accepts. The department’s page we read is a general list of its permits to operate, so ask it for the current fee and form.`,
    faqs: [
      { q: `Is an Iowa permit the same as a license?`, a: `In practice it plays the same role: you need it to perform radiography in Iowa. The ASRT table records Iowa’s credential as a permit for radiography and for limited operators, issued by the state health department rather than by a separate imaging board.` },
      { q: `Do Iowa sonographers need a permit?`, a: `No state credential exists for sonography in Iowa in the ASRT table. Iowa schools reported sonography graduates to IPEDS for 2023-24, and Iowa employers ask for ARDMS or ARRT sonography credentials. Mercy College of Health Sciences in Des Moines reported the largest class.` },
    ],
  },
};
