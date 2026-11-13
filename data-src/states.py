"""Builds src/data/states.json: one record per state and DC.

Usage (from the site folder): python3 -I data-src/states.py

Inputs, all read on 2026-11-13:
- data-src/asrt-states.json: the "States That Regulate" table of the American Society of Radiologic
  Technologists (asrt.org, individual-state-licensure page, fetched with curl, HTTP 200), parsed cell by cell:
  for each state and modality, the licensure word (License, Certification, Permit...), the "Standard" and
  "Equipment" columns, and the regulatory agency with its official website.
- READ: the HTTP status we got when fetching each agency website with a plain request (curl, browser user agent).
  "read" = page served and read; "blocked" = the site refused (403) or never answered; we did not work around it.
- FACTS: sentences written from what each official page says, with that page as source. Nothing here comes from
  memory: a fact not printed on a page we read is not written.
"""
import json, os, re

HERE = os.path.dirname(os.path.abspath(__file__))
A = json.load(open(os.path.join(HERE, 'raw', 'asrt-states.json')))

READ = {  # status of the agency page on 2026-11-13
    'AL': 'read', 'AK': 'blocked', 'AZ': 'read', 'AR': 'read', 'CA': 'read', 'CO': 'read', 'CT': 'read', 'DE': 'blocked',
    'FL': 'read', 'GA': 'read', 'HI': 'read', 'ID': 'read', 'IL': 'read', 'IN': 'read', 'IA': 'read', 'KS': 'blocked',
    'KY': 'blocked', 'LA': 'read', 'ME': 'read', 'MD': 'read', 'MA': 'blocked', 'MI': 'blocked', 'MN': 'read', 'MS': 'blocked',
    'MO': 'blocked', 'MT': 'read', 'NE': 'blocked', 'NV': 'read', 'NH': 'blocked', 'NJ': 'blocked', 'NM': 'read', 'NY': 'read',
    'NC': 'read', 'ND': 'read', 'OH': 'read', 'OK': 'read', 'OR': 'read', 'PA': 'read', 'RI': 'blocked', 'SC': 'read',
    'SD': 'read', 'TN': 'blocked', 'TX': 'read', 'UT': 'blocked', 'VT': 'read', 'VA': 'read', 'WA': 'read', 'DC': 'read',
    'WV': 'read', 'WI': 'read', 'WY': 'read',
}

# Agency pages replaced where the ASRT link is dead (Mississippi: the ASRT URL answers 404 on 2026-11-13; MSDH serves its
# licensure forms by profession at this address, rendered by JavaScript, so it stays classed as unread).
PAGE = {'MS': 'https://msdh.ms.gov/resources/public-health-forms/license-application-forms/by-profession'}

# Facts printed on the official page of the agency (the first agency URL of the ASRT table, or the URL given here).
# Fees in dollars as printed. Each entry: list of (key, value) pairs used by the pages, plus 'say': plain sentences.
FACTS = {
    'AL': {'say': ['The radiation control pages of the Alabama Department of Public Health that we read deal with x-ray compliance and the registration of equipment; they publish no license for the people who take the images.']},
    'AZ': {'say': ['The Arizona Department of Health Services files medical radiologic technologists under its Bureau of Special Licensing, through an individual licensing portal.']},
    'AR': {'say': ['The Arkansas Department of Health runs a Radiologic Technology Licensure Program, advised by a Medical Ionizing Radiation Licensure Committee (MIRLC), with online renewal payments.',
                   'Radiologist assistants are a separate matter for the Arkansas State Medical Board, whose public comment period on a proposed radiologist assistant rule ends on November 15, 2026.']},
    'CA': {'say': ['The California Department of Public Health, through its Radiologic Health Branch (RHB), certifies radiologic technologists and runs a state exam for limited permits.',
                   'The branch warns that, because of a software update, its pages are not updated from October 2 to November 13, 2026, while the certificate and permit search tool keeps working.']},
    'CO': {'say': ['The Colorado Department of Public Health and Environment answers plainly: Colorado is a non-licensure state, and a technologist certified and registered with ARRT or NMTCB needs no separate Colorado license or registration.',
                   'Limited scope operators register with the state for two years at a time and bone density operators for three years; a provisional mammographer registration lasts one year and may be renewed only once.'],
           },
    'CT': {'say': ['The Connecticut Department of Public Health licenses radiographers through its Practitioner Licensing and Investigations Section and offers a route for applicants licensed in another state for at least four years.'],
           'fees': {'Initial application': 200, 'Renewal': 105, 'Reinstatement': 200}},
    'DC': {'say': ['DC Health licenses radiography and sonography professionals through its Division of Radiation Control and Medical Devices, which has opened an online application portal for all its applications.']},
    'FL': {'say': ['The Florida Department of Health certifies the people who operate radiation machines or administer radioactive materials to patients, and publishes study materials for the Basic X-Ray Machine Operator.']},
    'GA': {'say': ['The page the ASRT points to for Georgia is the Healthcare Facility Regulation Division of the Department of Community Health, which licenses facilities and lists x-ray among its programs.']},
    'HI': {'say': ['Hawaii’s Radiologic Technology Board licenses radiographers, radiation therapists and nuclear medicine technologists; the Department of Health mails renewal forms about 45 days before a license expires, and a license defunct for less than a year can be re-applied for.']},
    'ID': {'say': ['The Idaho Radiation Control Program, in the Department of Health and Welfare, oversees x-ray and mammography licensure, registration and inspection of facilities and equipment; we found no license for the operator.']},
    'IL': {'say': ['The Illinois Emergency Management Agency accredits radiologic technologists rather than licensing them: accreditation costs $120 and is valid for two years, with renewal open up to 60 days before it expires.',
                   'Limited scope radiography needs a passed exam before accreditation, and a temporary accreditation holder must pass the ARRT boards within two years to renew.'],
           'fees': {'Accreditation (2 years)': 120}},
    'IN': {'say': ['The Indiana Department of Health, Division of Radiology, Weights and Measures, licenses radiologic technologists and issues permits; a paper application goes in with a $60 check or money order, and a name change costs $20.'],
           'fees': {'License application': 60, 'Name change': 20}},
    'LA': {'say': ['The Louisiana State Radiologic Technology Board of Examiners (LSRTBE) licenses technologists for two-year cycles (the current one is 2026-2028); a license not renewed by May 31, 2026 expired, and working with an expired license is illegal in Louisiana.',
                   'Since January 2026 the board issues Limited X-Ray Machine Operator (LXMO) permits: after an approved program and the ARRT limited scope exam for Louisiana, the holder gets a two-year permit and no longer needs direct supervision.']},
    'ME': {'say': ['Maine licenses radiologic technologists through the Radiologic Technology Board of Examiners in the Office of Professional and Occupational Regulation, which issues no paper license verifications.']},
    'MD': {'say': ['The Maryland Board of Physicians licenses radiographers among its allied health professions, alongside limited x-ray machine operators, nuclear medicine technologists and other technologists.']},
    'MN': {'say': ['Minnesota does not license full radiographers, but since August 1, 2020 a limited scope x-ray operator and a bone densitometry equipment operator must register with the Minnesota Department of Health after passing the exam modules (Minnesota Statute 144.121).']},
    'MT': {'say': ['The Montana board licenses radiologic technologists and limited permit holders: a license needs ARRT certification in radiography and a 24-month approved program, the application costs $100, and a temporary permit is possible before the ARRT exam.',
                   'Every license expires on February 1. Renewal costs $75 for a technologist and $60 for a limited permit holder, and the late fee equals the renewal fee. Limited permit holders need six hours of continuing education each year; technologists follow ARRT rules.'],
           'fees': {'Application': 100, 'Annual renewal (technologist)': 75, 'Annual renewal (limited permit)': 60}},
    'NV': {'say': ['Nevada’s Division of Public and Behavioral Health runs a technologist application program inside its Radiation Control program, advised by a Radiation Therapy and Radiologic Imaging Advisory Committee.']},
    'NM': {'say': ['The New Mexico Environment Department’s Medical Imaging and Radiation Therapy Program licenses radiography and sonography professionals; certificates arrive by mail in 15 to 20 business days, and a duplicate costs $15.',
                   'The program asks licensees to review its regulations every year, because they can change after the advisory council’s annual December meeting.'],
           'fees': {'Duplicate certificate': 15}},
    'NY': {'say': ['New York law requires radiologic technologists to be licensed and registered by the State Department of Health; its Bureau of Environmental Radiation Protection licenses radiography, radiation therapy and nuclear medicine, and unregistered technologists may not practice.',
                   'Technologists with the right training can also be certified to inject contrast media, and the public registration database is updated weekly.']},
    'ND': {'say': ['The North Dakota Medical Imaging and Radiation Therapy Board licenses imaging professionals, sonographers included, and offers conditional licenses for students (sonography, CIS and CES, MRI), temporary licenses, limited x-ray machine operator licenses and bone densitometry licenses.']},
    'OH': {'say': ['The Ohio Department of Health’s Radiologic Licensure program has licensed about 17,000 operators and approved 110 educational facilities and 180 continuing education courses.',
                   'A renewal filed more than 30 days after expiry needs a new application with a $65 fee ($45 after active military service), 24 continuing education credits and proof of the ARRT or NMTCB exam; general x-ray machine operators (GXMO) pass a state exam instead.'],
           'fees': {'Late renewal application': 65}},
    'OK': {'say': ['The Oklahoma page the ASRT points to is the Board of Medical Licensure and Supervision, which licenses radiologist assistants, advanced-level technologists, and charges $25 for a written license verification.']},
    'OR': {'say': ['The Oregon Board of Medical Imaging licenses imaging professionals, sonographers included, and issues limited permits; its mission covers everyone performing imaging studies for diagnosis and therapy.']},
    'PA': {'say': ['Pennsylvania’s Department of Environmental Protection asks every owner of a radiation-producing machine to register and renew each year, and lists refresher training for x-ray equipment operators.']},
    'SC': {'say': ['South Carolina certifies operators through the Radiation Quality Standards Association (SCRQSA): radiography, nuclear medicine (ARRT or SNMMI), radiation therapy, CT, limited practice radiographers and bone densitometry operators, with ARRT, NMTCB, RCIS, RCES or continuing education verification sent in with the application.']},
    'TX': {'say': ['The Texas Medical Board offers a general medical radiologic technologist certificate and limited and temporary permits, keeps a registry of non-certified radiologic technicians, grants hardship exemptions and runs a limited technologist exam.']},
    'VT': {'say': ['Vermont’s Office of Professional Regulation (Secretary of State) licenses radiologic technologists under its advisor model, with online application and renewal.']},
    'VA': {'say': ['The Virginia Board of Medicine licenses radiologic technologists and limited radiologic technologists. A license is renewed every two years, in the birth month of odd-numbered years, for $135.',
                   'A technologist employed by a hospital, a health system or an affiliated urgent care center needs no Board of Medicine license to work in those settings (board FAQ 2).'],
           'fees': {'Biennial renewal': 135}},
    'WA': {'say': ['The Washington State Department of Health credentials radiologic technologists and, separately, limited scope x-ray technicians and radiologist assistants, through its HELMS licensing system.']},
    'WV': {'say': ['The West Virginia Medical Imaging and Radiation Therapy Technology Board, under West Virginia Code §30-23-1, licenses radiography and also MRI, nuclear medicine and CT technologists, with apprentice licenses in MRI and nuclear medicine.']},
    'WI': {'say': ['Wisconsin’s Department of Safety and Professional Services licenses radiographers and limited x-ray machine operators. Active ARRT certification counts as passing the exam, and every radiographer needs 24 hours of ARRT-recognized continuing education per biennium.',
                   'A license lapsed for five years or more is not renewed: the applicant reapplies.']},
    'WY': {'say': ['Wyoming’s Board of Radiologic Technologist Examiners, created by the legislature in 1985, issues general, restricted, special and temporary licenses through the Professional Licensing Boards Office.']},
}

# Agency names: the ASRT label, completed with the state and corrected where the official page reads otherwise
# (Wisconsin: the radiographer license page is on dsps.wi.gov; Indiana: a typo in the ASRT label).
AGENCY = {
    'IA': 'Iowa Department of Health and Human Services',
    'AL': 'Alabama Department of Public Health, Radiation Control', 'AK': 'Alaska Radiological Health Program',
    'CA': 'California Department of Public Health, Radiologic Health Branch', 'DC': 'DC Health', 'GA': 'Georgia Department of Community Health',
    'FL': 'Florida Department of Health, Bureau of Radiation Control', 'ID': 'Idaho Radiation Control Program', 'IN': 'Indiana Department of Health',
    'ME': 'Maine Radiologic Technology Board of Examiners', 'MA': 'Massachusetts Radiation Control Program', 'MI': 'Michigan Radiation Safety Section',
    'MN': 'Minnesota Department of Health, Radiation Control', 'MO': 'Missouri Department of Health and Senior Services, Radiation Control Program',
    'NE': 'Nebraska Department of Health and Human Services', 'NV': 'Nevada Radiation Control Program', 'NH': 'New Hampshire Board of Medical Imaging and Radiation Therapy',
    'NM': 'New Mexico Medical Imaging and Radiation Therapy Program', 'NY': 'New York Bureau of Environmental Radiation Protection', 'NC': 'North Carolina Radiation Control',
    'PA': 'Pennsylvania Department of Environmental Protection, Radiation Control', 'RI': 'Rhode Island Department of Health',
    'SC': 'South Carolina Radiation Quality Standards Association', 'TN': 'Tennessee Board of Medical Examiners', 'VT': 'Vermont Office of Professional Regulation',
    'VA': 'Virginia Board of Medicine', 'WA': 'Washington State Department of Health', 'WV': 'West Virginia Medical Imaging and Radiation Therapy Technology Board',
    'WI': 'Wisconsin Department of Safety and Professional Services', 'WY': 'Wyoming Board of Radiologic Technologist Examiners',
    'MS': 'Mississippi State Department of Health, Professional Licensure', 'OH': 'Ohio Department of Health, Radiologic Licensure', 'SD': 'South Dakota Department of Health',
}

MOD = {'Radiography': 'rad', 'Limited Technologist': 'limited', 'Sonography': 'sono', 'Computed Tomography': 'ct', 'Magnetic Resonance': 'mr',
       'Nuclear Medicine': 'nm', 'Radiation Therapy': 'rt', 'Fluoroscopy': 'fluoro', 'Mammography': 'mammo', 'Bone Densitometry': 'bd',
       'Radiologist Assistant': 'ra', 'CI/VI': 'civi', 'Fusion Imaging': 'fusion'}

def slugify(name: str) -> str:
    n = 'district-of-columbia' if name.startswith('Washington, D') else re.sub(r'[^a-z]+', '-', name.lower()).strip('-')
    return f'{n}-rad-tech-license'

states = []
for code, v in A.items():
    name = 'District of Columbia' if v['name'].startswith('Washington, D') else v['name']
    mods = {}
    for k, r in v['rows'].items():
        key = MOD.get(k)
        if key: mods[key] = {'lic': r['lic'], 'std': r['std'], 'eq': r['eq']}
    ag = [a for a in v['agencies'] if a['url']]
    f = FACTS.get(code, {})
    states.append({
        'code': code, 'name': name, 'slug': slugify(v['name']),
        'agency': AGENCY.get(code) or (ag[0]['agency'] if ag else ''), 'page': PAGE.get(code) or (ag[0]['url'].strip() if ag else ''),
        'agencies': [{'agency': a['agency'], 'url': PAGE.get(code) if i == 0 and code in PAGE else a['url'].strip()} for i, a in enumerate(ag)],
        'read': READ[code], 'mods': mods,
        'say': f.get('say', []), 'fees': f.get('fees', {}),
    })
states.sort(key=lambda s: s['name'])
out = {'read': '2026-11-13', 'asrt': 'https://www.asrt.org/main/standards-and-regulations/legislation-regulations-and-advocacy/individual-state-licensure', 'states': states}
json.dump(out, open(os.path.join(HERE, '..', 'src', 'data', 'states.json'), 'w'), ensure_ascii=False, indent=1)
print(len(states), 'states;', sum(1 for s in states if s['read'] == 'read'), 'agency pages read;', sum(1 for s in states if s['say']), 'with facts')
