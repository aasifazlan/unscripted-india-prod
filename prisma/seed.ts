import { PrismaClient, ArticleCategory } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding states...')

  const stateData = [
    { name: 'Maharashtra', code: 'MH' },
    { name: 'Delhi', code: 'DL' },
    { name: 'Tamil Nadu', code: 'TN' },
    { name: 'Kerala', code: 'KL' },
    { name: 'Karnataka', code: 'KA' },
    { name: 'West Bengal', code: 'WB' },
    { name: 'Rajasthan', code: 'RJ' },
    { name: 'Uttar Pradesh', code: 'UP' },
    { name: 'Gujarat', code: 'GJ' },
    { name: 'Punjab', code: 'PB' },
    { name: 'Odisha', code: 'OD' },
    { name: 'Telangana', code: 'TG' },
    { name: 'Assam', code: 'AS' },
    { name: 'Bihar', code: 'BR' },
    { name: 'Jharkhand', code: 'JH' },
  ]

  const states: Record<string, string> = {}
  for (const s of stateData) {
    const state = await prisma.state.upsert({
      where: { code: s.code },
      update: {},
      create: s,
    })
    states[s.code] = state.id
  }

  console.log('🌱 Seeding articles...')

  const articles: any[] = [

    // ─── LAWS ────────────────────────────────────────────────────────────────

    {
      slug: 'right-to-information-act-2005',
      title: 'Right to Information Act, 2005',
      category: ArticleCategory.LAW,
      summary: 'Empowers every Indian citizen to request information from any public authority, mandating timely responses within 30 days and establishing Central and State Information Commissions to adjudicate appeals.',
      body: `<b>Overview</b>

The Right to Information Act, 2005 (RTI Act) is among the most consequential pieces of legislation enacted in independent India. It creates a statutory framework under which any citizen may request documents, data, or records held by any public authority — Central, State, or local — and receive a response within a defined time period.

<b>Scope and Application</b>

The Act applies to all constitutional authorities, bodies owned or substantially financed by government, and organisations that are substantially funded by government. Private bodies are not directly covered, but information held by public authorities about private entities may be sought. The Act does not apply to intelligence and security organisations listed in the Second Schedule, though even these bodies must disclose information related to allegations of human rights violations or corruption.

<b>Filing a Request</b>

Any citizen may file an application in writing or through the RTI Online Portal (rtionline.gov.in) addressed to the designated Public Information Officer (PIO). The application fee for Central government bodies is ₹10, payable via postal order, demand draft, or online payment. Below-poverty-line applicants are exempt from fees. The PIO must respond within 30 days, or within 48 hours if the information concerns the life or liberty of a person.

<b>First and Second Appeals</b>

If the PIO fails to respond, provides incomplete information, or charges excessive fees, the applicant may file a First Appeal with the senior officer designated within the same public authority within 30 days. If unsatisfied, a Second Appeal may be filed before the Central Information Commission (CIC) or the relevant State Information Commission (SIC) within 90 days.

<b>Penalties and Compensation</b>

The Information Commission may impose a penalty of ₹250 per day of default on the PIO, subject to a maximum of ₹25,000. The Commission may also recommend disciplinary action and award compensation to the applicant for any loss or detriment suffered.

<b>Exemptions under Section 8</b>

Certain categories of information are exempt from disclosure: matters affecting national security and sovereignty, Cabinet deliberations, information that would impede the prosecution of offenders, trade secrets, fiduciary relationships, and personal information with no nexus to public activity. However, Section 8(2) provides that even exempt information must be disclosed if the public interest in disclosure outweighs the harm caused.

<b>2019 Amendment — Controversy</b>

The RTI (Amendment) Act, 2019 changed the tenure and salary conditions of the CIC and SICs, making them subject to Central Government determination rather than statutory prescription. Critics, including former Chief Information Commissioners, argued this undermined the functional independence of the appellate bodies. The amendment was challenged in court but upheld.`,
      impactAnalysis: 'Over 6 million RTI applications are filed annually across India. The Act has been instrumental in exposing irregularities in the Public Distribution System, MGNREGA wage payments, and municipal works. However, pendency at Information Commissions exceeds 3.5 lakh applications nationwide, with average disposal times stretching to over 2 years in some states. The 2019 amendment to commissioner tenure conditions has renewed concerns about institutional independence.',
      tags: ['transparency', 'governance', 'accountability', 'fundamental-rights', 'information'],
      publishedAt: new Date(),
    },

    {
      slug: 'protection-of-children-sexual-offences-act-2012',
      title: 'Protection of Children from Sexual Offences Act (POCSO), 2012',
      category: ArticleCategory.LAW,
      summary: 'POCSO defines and criminalises all forms of sexual abuse and exploitation against persons below 18 years of age, with child-friendly procedures for reporting, police investigation, medical examination, and Special Court trials.',
      body: `<b>Overview</b>

The Protection of Children from Sexual Offences Act, 2012 (POCSO) is a comprehensive statute that addresses the sexual abuse and exploitation of children in India. Before POCSO, child sexual abuse was addressed only through the Indian Penal Code provisions on rape and outraging modesty, which were gender-specific and inadequate. POCSO is gender-neutral with respect to the victim and covers a wide spectrum of offences.

<b>Definition of a Child</b>

The Act defines a "child" as any person below the age of 18 years. This is absolute — there is no exception for consensual sexual activity between adolescents, an aspect that has been debated by courts and policymakers. In 2023, the Supreme Court recommended legislative consideration of a "close-in-age" or "Romeo and Juliet" exception to avoid criminalising consensual adolescent relationships, though no amendment has been enacted as of 2025.

<b>Offences and Penalties</b>

Penetrative sexual assault is punishable with a minimum of 7 years' imprisonment, extendable to life. Aggravated penetrative sexual assault — which includes offences by police officers, public servants, relatives, or in gang situations — carries a minimum of 10 years, extendable to life. The Criminal Law (Amendment) Act, 2019 introduced the death penalty where the victim is below 12 years of age. Sexual harassment and use of a child for pornographic purposes carry shorter sentences but remain cognisable and non-bailable.

<b>Child-Friendly Procedures</b>

The Act mandates that the child's statement be recorded at a place of their choice, preferably their residence. A police officer recording the statement must not be in uniform. Medical examination must be conducted in the presence of a parent or trusted adult. Cases must be tried in Special Courts designated by the State Government, and the identity of the child must never be disclosed publicly. Cross-examination is permitted only in writing through the judge, to prevent intimidation.

<b>Mandatory Reporting</b>

Section 19 imposes an obligation on any person with knowledge or apprehension that an offence has been or is about to be committed to report it to the Special Juvenile Police Unit or local police. Failure to report by a person-in-charge of an institution where an offence has occurred is itself an offence punishable with six months' imprisonment.

<b>Digital and Online Offences</b>

The 2019 Amendment to POCSO expanded the definition of child pornography and strengthened provisions relating to storage and distribution of child sexual abuse material (CSAM). It mandates intermediaries — social media platforms, messaging apps — to report CSAM to the National Cybercrime Reporting Portal upon detection.`,
      impactAnalysis: 'Registered cases under POCSO rose from 8,904 in 2014 to over 53,874 in 2022 according to NCRB data, reflecting both a genuine increase in reporting and persistent underreporting due to social stigma. Conviction rates remain around 32%, with backlogs in Special Courts a major challenge. The Pocso e-Box online complaint portal has improved accessibility for children in urban areas. Debates continue about the age of consent and its intersection with adolescent sexual autonomy.',
      tags: ['child-safety', 'criminal-law', 'protection', 'special-courts', 'POCSO'],
      publishedAt: new Date(),
    },

    {
      slug: 'digital-personal-data-protection-act-2023',
      title: 'Digital Personal Data Protection Act, 2023',
      category: ArticleCategory.LAW,
      summary: "India's first comprehensive data protection law, governing the processing of digital personal data, establishing rights of data principals, obligations of data fiduciaries, and creating the Data Protection Board of India.",
      body: `<b>Overview</b>

The Digital Personal Data Protection Act, 2023 (DPDPA) received Presidential assent on August 11, 2023, and marks India's first comprehensive statutory framework for the protection of personal data. The Act applies to the processing of digital personal data within India, as well as processing outside India if it involves offering goods or services to data principals in India.

<b>Key Definitions</b>

A "data principal" is the individual whose personal data is being processed. A "data fiduciary" is any person or entity — company, government body, or individual — that determines the purpose and means of processing personal data. A "significant data fiduciary" is one notified by the Central Government on the basis of volume of data processed, sensitivity of data, or risk to electoral democracy and national security.

<b>Grounds for Processing</b>

Personal data may be processed only for a lawful purpose. The primary ground is consent, which must be free, specific, informed, unconditional, and unambiguous. Consent must be sought through a "consent notice" in clear and plain language, available in all 22 scheduled languages. The Act also provides for "deemed consent" in situations where processing is necessary for the performance of a function under law, for compliance with a court order, for responding to a medical emergency, or for employment purposes.

<b>Rights of Data Principals</b>

Data principals have the right to obtain information about their personal data being processed, to correction and erasure of inaccurate or incomplete data, to grievance redressal, and to nominate another individual to exercise their rights in the event of death or incapacity. Critically, the right to data portability and the right to be forgotten — present in the 2022 Bill — were dropped from the final Act.

<b>Obligations of Data Fiduciaries</b>

Fiduciaries must maintain the accuracy and completeness of personal data, implement appropriate technical and organisational security measures, report data breaches to the Data Protection Board and affected principals, and delete personal data when the purpose of processing is complete or consent is withdrawn.

<b>Data Protection Board of India</b>

The Board is an adjudicatory body empowered to investigate complaints, conduct inquiries, and impose penalties for violations. Penalties range from ₹50 crore for failure to implement security safeguards to ₹250 crore for breaches involving children's data. The Board is constituted by the Central Government and its members serve at the pleasure of the Government, a provision criticised for compromising independence.

<b>Children's Data</b>

The Act prohibits processing personal data of children (below 18 years) without verifiable parental consent and prohibits targeted advertising directed at children or tracking their online behaviour.

<b>Exemptions</b>

The Central Government may exempt any of its agencies from the provisions of the Act in the interests of sovereignty, security of the state, friendly relations with foreign states, or public order. This broad exemption has been criticised as potentially creating a surveillance state loophole.`,
      impactAnalysis: 'The DPDPA rules were under consultation in 2024–25, with implementation deferred pending finalisation of the Data Protection Board structure. Technology companies, civil society organisations, and foreign investors have raised concerns about the governmental exemptions, the adequacy of independence of the Board, and the absence of a right to data portability. India seeks an adequacy decision from the EU under GDPR, which may require amendments to align with European standards.',
      tags: ['data-protection', 'privacy', 'technology', 'digital', 'DPDPA'],
      publishedAt: new Date(),
    },

    {
      slug: 'forest-rights-act-2006',
      title: 'Scheduled Tribes and Other Traditional Forest Dwellers (Recognition of Forest Rights) Act, 2006',
      category: ArticleCategory.LAW,
      summary: 'Recognises and vests forest rights — individual and community — in scheduled tribes and other traditional forest dwellers who have occupied forest land for generations, and empowers Gram Sabhas as the primary authority for claims.',
      body: `<b>Overview</b>

The Forest Rights Act (FRA), 2006 is a landmark piece of restorative legislation that acknowledges the historical injustice inflicted on forest-dwelling communities by the colonial-era reservation of forests without recognising the pre-existing rights of the people who had lived in and managed those forests for centuries. The Act covers Scheduled Tribes and Other Traditional Forest Dwellers (OTFDs) — non-tribal communities that have lived in forests for at least three generations prior to December 13, 2005.

<b>Categories of Rights Recognised</b>

Individual forest rights include the right to reside on and cultivate forest land not exceeding 4 hectares, the right to use minor forest produce (MFP) such as tendu leaves, bamboo, honey, and medicinal plants, and the right to convert existing pattas or leases. Community forest rights include the right to manage community forest resources — known as Community Forest Resource (CFR) rights — and to protect, regenerate, conserve, and manage community forest lands. Habitat and habitation rights are available to Particularly Vulnerable Tribal Groups (PVTGs).

<b>Role of the Gram Sabha</b>

The Gram Sabha — the general body of adult members of a village — is the foundational institution under the FRA. It receives applications for rights, verifies them through a sub-committee, and passes resolutions recommending recognition. Decisions are then processed upward through Sub-Divisional Level Committees and District Level Committees. This bottom-up structure was a deliberate departure from earlier forest governance which was exclusively top-down.

<b>Implementation Gaps</b>

As of 2024, approximately 22.6 lakh individual titles and 67,000 community titles have been distributed. Rejection rates remain high — over 42% of claims across India have been rejected, frequently without reasons being communicated to claimants. The Supreme Court in its 2019 order initially directed eviction of rejected claimants, sparking a national outcry, before modifying the order to require states to review rejections.

<b>CFR Rights and Conservation</b>

Community Forest Resource rights, when fully exercised, vest entire forest landscapes in Gram Sabhas for management. Studies from Maharashtra, Odisha, and Chhattisgarh show that CFR-holding communities have achieved better conservation outcomes than forest department management in several cases. However, states have been reluctant to cede control, and the forest bureaucracy has resisted full implementation.`,
      impactAnalysis: 'The FRA has transformed land security for millions of adivasi households. Odisha, Chhattisgarh, and Madhya Pradesh account for the highest number of titles distributed. However, implementation is deeply uneven — Rajasthan, Gujarat, and Himachal Pradesh have distributed very few titles relative to eligible populations. The convergence of FRA implementation with linear infrastructure and mining projects remains a flashpoint for conflict between tribal communities and the state.',
      tags: ['tribal-rights', 'forest', 'land-rights', 'adivasi', 'environment', 'gram-sabha'],
      publishedAt: new Date(),
    },

    {
      slug: 'aadhaar-act-2016',
      title: 'Aadhaar (Targeted Delivery of Financial and Other Subsidies, Benefits and Services) Act, 2016',
      category: ArticleCategory.LAW,
      summary: "Provides the statutory framework for India's biometric identity system managed by UIDAI, enabling targeted delivery of government subsidies through Aadhaar-based authentication while establishing data protection and grievance mechanisms.",
      body: `<b>Overview</b>

The Aadhaar Act, 2016 confers legal standing on the Unique Identification Authority of India (UIDAI) and the Aadhaar number — a 12-digit biometric-linked identifier issued to every resident of India. The Act was passed as a Money Bill, a characterisation that was challenged and upheld by the Supreme Court in 2018, though a dissenting judgment argued it did not satisfy the constitutional definition of a Money Bill.

<b>What Aadhaar Contains</b>

The Aadhaar database holds demographic information (name, date of birth, gender, address), biometric data (10 fingerprints, two iris scans, and a photograph), and the unique 12-digit number. UIDAI maintains this in the Central Identities Data Repository (CIDR). The Act prohibits sharing biometric data under any circumstances — it is considered irrevocable.

<b>Authentication Architecture</b>

The Act provides for Yes/No authentication (confirming identity without revealing data), demographic authentication, and one-time password-based authentication. Biometric authentication uses fingerprint or iris matching. Authentication logs are retained for a period specified by UIDAI regulations.

<b>Supreme Court Judgment — K.S. Puttaswamy (2018)</b>

A five-judge Constitution Bench upheld the validity of the Aadhaar Act in the context of government welfare delivery. However, it struck down Section 57, which allowed private companies to use Aadhaar for authentication — finding it disproportionate and violative of the right to privacy. The Court also read down the provision allowing courts to compel disclosure of identity, requiring a High Court or Supreme Court order rather than a District Court order. Use of Aadhaar for SIM card verification and school admissions was invalidated.

<b>Voluntary Use and Offline KYC</b>

Post the 2019 amendments, voluntary use of Aadhaar for KYC (Know Your Customer) was permitted through a telco-requested amendment. The Aadhaar (Offline Verification) Regulations enable offline verification using a QR code or an XML file downloaded from the UIDAI portal, limiting exposure of the full Aadhaar number.

<b>Grievance Redressal</b>

The Act establishes an Adjudicating Officer and an Appellate Tribunal — the Telecom Disputes Settlement and Appellate Tribunal (TDSAT) — for disputes arising under the Act.`,
      impactAnalysis: 'Over 1.39 billion Aadhaar numbers have been issued as of 2025. Direct Benefit Transfer (DBT) through the JAM (Jan Dhan-Aadhaar-Mobile) trinity has reportedly eliminated duplicate and ghost beneficiaries, with cumulative savings cited by the government exceeding ₹3.48 lakh crore. Critics and civil society organisations continue to raise concerns about exclusion errors — bonafide beneficiaries denied services due to authentication failures — and the risks of data centralisation.',
      tags: ['identity', 'biometrics', 'privacy', 'welfare', 'UIDAI', 'DBT'],
      publishedAt: new Date(),
    },

    {
      slug: 'bharatiya-nyaya-sanhita-2023',
      title: 'Bharatiya Nyaya Sanhita, 2023',
      category: ArticleCategory.LAW,
      summary: 'Replaces the Indian Penal Code, 1860, with a modernised criminal code restructuring over 500 offences, introducing community service as a punishment, and redefining provisions on sedition, terrorism, and organised crime.',
      body: `<b>Overview</b>

The Bharatiya Nyaya Sanhita, 2023 (BNS) replaced the Indian Penal Code, 1860 (IPC) with effect from July 1, 2024, along with the Bharatiya Nagarik Suraksha Sanhita (replacing the Code of Criminal Procedure) and the Bharatiya Sakshya Adhiniyam (replacing the Indian Evidence Act). The three laws together constitute the most comprehensive overhaul of India's criminal justice system since the colonial era.

<b>Structure and Offences</b>

The BNS consolidates offences into 358 sections compared to the IPC's 511 sections, eliminating duplications and incorporating offences previously scattered across special legislations. The order of chapters has been reorganised to place offences against the human body before offences against property — a reversal of the IPC structure that placed state interests first.

<b>Sedition — Replaced by Section 152</b>

The controversial Section 124A of the IPC (sedition) has been omitted. In its place, Section 152 of the BNS criminalises acts endangering sovereignty, unity, and integrity of India — including armed rebellion, subversive activities, and separatism. Critics argue this broadens rather than narrows the scope, and that the absence of the word "sedition" does not meaningfully curtail executive overreach.

<b>Organised Crime and Terrorism</b>

For the first time, organised crime — including gangs, extortion rackets, and contract killing — is incorporated in the main criminal code under Section 111. Terrorism is defined under Section 113 and covers acts intended to threaten unity, integrity, sovereignty, or security of India, or to strike terror in the people.

<b>Community Service</b>

For the first time in Indian criminal law, community service is introduced as a punishment for minor offences such as theft below ₹5,000, attempt to commit suicide to compel a public servant, and public intoxication.

<b>Technology and Electronic Evidence</b>

The BNS and the companion Bharatiya Sakshya Adhiniyam give statutory recognition to electronic evidence, including messages on encrypted platforms, digital documents, and electronic signatures. Audio-video recording of statements by the investigating officer is mandated in certain serious offences.

<b>Organised Sexual Violence</b>

Gang rape now attracts 20 years to life imprisonment or death. Sexual assault on a woman below 18 years by a member of a gang carries a mandatory minimum of life imprisonment. The BNS also introduces stricter provisions against sexual intercourse on false promise of marriage — commonly called the "deceptive marriage" offence.`,
      impactAnalysis: 'The BNS came into force on July 1, 2024. While the government presented it as decolonising Indian law, legal practitioners, bar councils, and civil liberty organisations noted that much of the substance of the IPC was retained verbatim. The renaming and reorganisation impose significant transition costs — all precedents, citations, and institutional knowledge are indexed to IPC section numbers. The new sedition-equivalent provision has already been invoked in several cases, raising concerns that the substantive concern about sedition law being misused has not been addressed.',
      tags: ['criminal-law', 'BNS', 'IPC-replacement', 'sedition', 'justice-reform'],
      publishedAt: new Date(),
    },

    // ─── AMENDMENTS ──────────────────────────────────────────────────────────

    {
      slug: '103rd-constitutional-amendment-ews-reservation',
      title: '103rd Constitutional Amendment — EWS Reservation, 2019',
      category: ArticleCategory.AMENDMENT,
      summary: 'Inserted Articles 15(6) and 16(6) into the Constitution to provide up to 10% reservation for Economically Weaker Sections in government jobs and educational institutions, beyond the existing SC/ST/OBC quota framework.',
      body: `<b>Overview</b>

The Constitution (One Hundred and Third Amendment) Act, 2019 was enacted to provide a constitutional basis for reservation in favour of Economically Weaker Sections (EWS) of citizens who do not belong to the Scheduled Castes, Scheduled Tribes, or Other Backward Classes (Non-Creamy Layer). It inserted Article 15(6) — enabling special provisions in educational institutions — and Article 16(6) — enabling reservation in government employment — each with a ceiling of 10%.

<b>Eligibility Criteria</b>

Persons with an annual family income below ₹8 lakh who are not covered under the SC/ST/OBC reservation framework qualify as EWS. Additional exclusionary criteria include ownership of more than 5 acres of agricultural land, a residential house of more than 1,000 sq ft in a municipal area, or a residential plot exceeding 200 sq yards in a notified municipal area. These criteria have been criticised as arbitrary since ₹8 lakh is the exact threshold used to define the OBC creamy layer.

<b>Supreme Court Judgment — Janhit Abhiyan (November 2022)</b>

A five-judge Constitution Bench upheld the amendment's validity by a 3:2 majority. The majority held that economic criteria alone can form a valid basis for classification and that the exclusion of SC/ST/OBC communities from EWS quota was not discriminatory since they already benefit from existing reservations. The two dissenting justices — Justice S. Ravindra Bhat and then Chief Justice U.U. Lalit — found that the amendment violated the basic structure of the Constitution by breaching the 50% ceiling established in Indra Sawhney (1992) and by excluding the poorest members of SC/ST/OBC communities based solely on their caste identity.

<b>Implementation</b>

The Central government implemented 10% EWS reservation in Central government jobs and Central educational institutions from the 2019–20 academic year. States may independently implement EWS reservation in their own services and state educational institutions. Most states have adopted the Central criteria, though some states have set different income thresholds.

<b>Constitutional Ceiling Debate</b>

The total reservation in Central government employment now stands at approximately 59.5% — 15% (SC) + 7.5% (ST) + 27% (OBC) + 10% (EWS) — exceeding the 50% ceiling imposed by the Supreme Court in Indra Sawhney. The majority judgment in Janhit Abhiyan addressed this by holding that EWS reservation operates in a separate column and does not breach the ceiling applicable to socially and educationally backward classes.`,
      impactAnalysis: 'The EWS reservation has been widely utilised in Central services and Central universities. However, data on actual beneficiary socioeconomic profiles shows that a large proportion of EWS certificate holders come from the upper rungs of the eligibility bracket, suggesting that the scheme primarily benefits the aspiring middle class rather than the destitute. The 50% ceiling debate remains unresolved as other states and the Supreme Court are likely to revisit the question in future cases.',
      tags: ['constitution', 'reservation', 'EWS', 'amendment', 'supreme-court', 'affirmative-action'],
      publishedAt: new Date(),
    },

    {
      slug: 'citizenship-amendment-act-2019',
      title: 'Citizenship Amendment Act, 2019',
      category: ArticleCategory.AMENDMENT,
      summary: 'Provides expedited Indian citizenship to Hindu, Sikh, Buddhist, Jain, Parsi, and Christian migrants from Pakistan, Bangladesh, and Afghanistan who entered India on or before December 31, 2014, reducing the residency requirement from 11 years to 5 years.',
      body: `<b>Overview</b>

The Citizenship (Amendment) Act, 2019 (CAA) amends the Citizenship Act, 1955 to create a fast-track route to Indian citizenship for members of six specified religious communities — Hindu, Sikh, Buddhist, Jain, Parsi, and Christian — who migrated from Pakistan, Bangladesh, or Afghanistan and entered India on or before December 31, 2014. The Act reduces the aggregate period of residency required from the standard 11 years to 5 years for these applicants.

<b>Who Is Covered and Who Is Excluded</b>

The Act explicitly excludes Muslims from its coverage — making it the first citizenship legislation in India to make religion a basis for differential treatment. It also does not apply to migrants from other neighbouring countries such as Myanmar, Sri Lanka, or China. The Act exempts tribal areas of Assam, Meghalaya, Mizoram, and Tripura protected under the Sixth Schedule, as well as areas governed by the Inner Line Permit system.

<b>Constitutional Challenge — Article 14</b>

Critics argue the Act violates Article 14 (right to equality) by creating an unreasonable religious classification. The government defended the Act on the ground that the three countries are Muslim-majority nations where Muslims cannot be considered persecuted minorities and therefore do not require protection of this kind. Over 240 petitions were filed before the Supreme Court. As of mid-2025, the Supreme Court has not pronounced a final verdict on the constitutional challenge.

<b>The Rules and Implementation</b>

The CAA Rules were notified on March 11, 2024 — over four years after the Act's passage — enabling the online application process through a dedicated portal. Applicants must furnish documents establishing entry into India before December 31, 2014, membership of the specified community, country of origin, and proof of nationality of the origin country. District-level empowered committees process applications.

<b>Protests and Political Context</b>

The Act triggered the largest sustained protests since Independence, running from December 2019 to March 2020. The protests crystallised around fears that the CAA, in combination with a proposed National Register of Citizens (NRC), could be used to render Muslim citizens stateless. In the Northeast, protests centred on distinct demographic concerns about large-scale naturalisation of migrants. The Shaheen Bagh sit-in became a globally noted symbol of the protest movement.`,
      impactAnalysis: 'As of mid-2025, over 14,000 applications have been submitted through the CAA portal. The constitutional challenge before the Supreme Court remains pending. The Act has become a defining political fault line, influencing electoral outcomes in Assam, Bengal, and the 2024 general elections. The government has maintained that the NRC is a separate initiative and no national NRC has been announced, but the political linkage between CAA and NRC continues to shape public discourse.',
      tags: ['citizenship', 'religion', 'minority', 'amendment', 'northeast', 'CAA'],
      publishedAt: new Date(),
    },

    {
      slug: '106th-constitutional-amendment-womens-reservation',
      title: '106th Constitutional Amendment — Women\'s Reservation, 2023',
      category: ArticleCategory.AMENDMENT,
      summary: "Inserts Articles 330A and 332A into the Constitution to reserve one-third of seats in the Lok Sabha and State Legislative Assemblies for women, including within the SC and ST reservation quota, to take effect after the next delimitation exercise.",
      body: `<b>Overview</b>

The Constitution (One Hundred and Sixth Amendment) Act, 2023 — commonly known as the Nari Shakti Vandan Adhiniyam — was passed in September 2023 in a special session of Parliament held in the new Parliament building. It inserts Articles 330A and 332A, providing for reservation of not less than one-third of seats in the House of the People (Lok Sabha), State Legislative Assemblies, and the Legislative Assembly of the National Capital Territory of Delhi for women, including within the seats reserved for Scheduled Castes and Scheduled Tribes.

<b>Deferred Commencement</b>

The amendment contains a critical deferral clause — the reservation will come into force only after the next census has been conducted and delimitation of constituencies has been completed based on that census data. Since the census that was due in 2021 has not yet been conducted (as of 2025), and delimitation is expected to be a lengthy process, the actual implementation of reservation is likely to be delayed until at least 2029 or even 2034.

<b>Historical Background</b>

Women's reservation legislation has been pending since 1996, when the Women's Reservation Bill was first introduced. It lapsed in successive Lok Sabhas due to disagreements over whether a sub-quota for OBC women should be carved within the women's reservation. The 2023 Act does not include an OBC sub-quota, a position contested by several opposition parties and OBC community organisations.

<b>Rotation of Constituencies</b>

Reserved constituencies will be determined by rotation, to be specified by Parliament through law. The reservation will sunset after 15 years from the date of commencement — meaning it is designed as a time-bound measure unless renewed by Parliament.

<b>Current Representation Context</b>

Women currently constitute 15.2% of Lok Sabha members (82 out of 543) and 13.9% of State Legislature members — both figures below the global average of 26.7%. India ranks 148th globally on women's legislative representation according to IPU data (2024).`,
      impactAnalysis: "The amendment has been praised as a historic step toward gender parity in legislative representation. However, the deferred commencement — contingent on census and delimitation — has drawn criticism from opposition parties and women's rights organisations who argue it is an exercise in political optics rather than genuine reform. The absence of an OBC sub-quota remains a point of contention. If and when implemented, the amendment would add approximately 180 women to the Lok Sabha.",
      tags: ['constitution', 'womens-rights', 'reservation', 'gender', 'parliament', 'amendment'],
      publishedAt: new Date(),
    },

    // ─── POLICIES ────────────────────────────────────────────────────────────

    {
      slug: 'national-education-policy-2020',
      title: 'National Education Policy, 2020',
      category: ArticleCategory.POLICY,
      summary: "Comprehensive overhaul of India's education architecture from early childhood to higher education, introducing the 5+3+3+4 curricular structure, mandating mother tongue instruction through at least Grade 5, integrating vocational education, and targeting a Gross Enrolment Ratio of 50% in higher education by 2035.",
      body: `<b>Overview</b>

The National Education Policy 2020 (NEP 2020) was approved by the Union Cabinet in July 2020, replacing the National Policy on Education, 1986 — making it the most comprehensive reform of India's educational framework since independence. NEP 2020 was developed following a nationwide consultation process spanning over three years and was anchored by a committee chaired by eminent scientist Dr K. Kasturirangan.

<b>New Curricular Structure</b>

The longstanding 10+2 structure is replaced by a 5+3+3+4 design. The Foundational Stage (ages 3–8, covering pre-school through Grade 2) focuses on play-based learning. The Preparatory Stage (ages 8–11, Grades 3–5) introduces structured learning. The Middle Stage (ages 11–14, Grades 6–8) introduces subject specialisation. The Secondary Stage (ages 14–18, Grades 9–12) offers multidisciplinary options, including both vocational and academic streams.

<b>Language Policy</b>

Mother tongue or home language is to be the medium of instruction up to at least Grade 5, preferably through Grade 8. The Three Language Formula is retained, but Sanskrit is given an optional but actively promoted role. Classical languages including Tamil, Telugu, Kannada, Malayalam, Odia, and Sanskrit are to be made widely available in schools.

<b>Higher Education Reforms</b>

The policy proposes a single multi-mission National Research Foundation (NRF), established through legislation in 2023, to fund research across disciplines. Higher Education Institutions are to transition into large multidisciplinary universities or autonomous degree-granting colleges over 15 years. Affiliated college structures are to be phased out. The Academic Bank of Credits (ABC) enables students to accumulate credits across institutions and exit with a certificate (1 year), diploma (2 years), or degree (3–4 years), with the possibility of re-entry.

<b>Vocational Integration</b>

Vocational education is to be integrated from Grade 6, with students exposed to at least one vocational skill through activity-based "bagless" days and internships. The target is for 50% of students to have vocational exposure by 2025.

<b>Teacher Training</b>

The four-year integrated B.Ed programme becomes the standard teacher preparation qualification by 2030. All current teachers without such qualifications are to be certified through in-service programmes. The National Professional Standards for Teachers (NPST) have been developed and are being operationalised.`,
      impactAnalysis: 'NEP 2020 is being implemented in phased form across states. Tamil Nadu has objected to aspects of the Three Language Formula as an imposition of Hindi. The Academic Bank of Credits has been operationalised by UGC, with over 1.2 crore students registered by 2024. The National Research Foundation was established in 2023 with a proposed outlay of ₹50,000 crore over 5 years. Full implementation is projected to take until 2040, and significant gaps in infrastructure, teacher training capacity, and language material development remain.',
      tags: ['education', 'policy', 'NEP', 'higher-education', 'language', 'vocational'],
      publishedAt: new Date(),
    },

    {
      slug: 'mgnrega-2005',
      title: 'Mahatma Gandhi National Rural Employment Guarantee Act (MGNREGA), 2005',
      category: ArticleCategory.POLICY,
      summary: 'Guarantees 100 days of wage employment per financial year to every rural household whose adult members volunteer to do unskilled manual work, with provisions for social audits, gender parity, and unemployment allowance.',
      body: `<b>Overview</b>

The Mahatma Gandhi National Rural Employment Guarantee Act, 2005 (MGNREGA) is one of the world's largest public employment programmes by scale and budget. Notified in February 2006 and rolled out nationwide by 2008, the Act guarantees a legal right to employment — not merely an aspirational entitlement — to rural households. It covers all rural districts of India.

<b>Core Entitlements</b>

Every rural household is entitled to 100 days of wage employment per financial year. Work must be provided within 15 days of application — if the state fails to do so, the worker is entitled to an unemployment allowance paid from the state's fund. Work sites must generally be within 5 kilometres of the worker's habitation; if beyond, a 10% transport allowance is payable. At least one-third of all beneficiaries must be women.

<b>Wage Rates and Payment</b>

Wages are notified by the Central Government and are state-specific, linked to the Consumer Price Index for Agricultural Labourers (CPI-AL). As of 2024–25, wages range from ₹234/day in Chhattisgarh to ₹374/day in Haryana. Since 2015, wages are paid directly into bank accounts linked to Aadhaar, reducing leakage and enabling real-time tracking through the NREGASoft Management Information System.

<b>Permissible Works</b>

Works that can be executed under MGNREGA are defined in Schedule I and include water conservation and water harvesting structures, drought-proofing, flood control, land development, rural connectivity (roads and paths), and housing under Pradhan Mantri Awas Yojana (Gramin). Since 2020, works on individual beneficiary land (for SC, ST, below-poverty-line households) have been given priority.

<b>Social Audit</b>

A mandatory social audit must be conducted every 6 months in every Gram Panchayat by an independent Social Audit Unit constituted under the state government. The social audit process involves public reading of all muster rolls, measurement books, and payment records, enabling community scrutiny of works undertaken and wages paid.

<b>COVID-19 and Recent Performance</b>

During the COVID-19 pandemic in 2020–21, MGNREGA demand surged with 11.2 crore households seeking work — the highest since the Act's inception. Budget allocation in 2024–25 stands at ₹86,000 crore, the highest ever. However, effective demand remains suppressed by payment delays averaging 21 days against the mandated 15-day limit.`,
      impactAnalysis: "MGNREGA has generated over 400 crore person-days of employment cumulatively. It has demonstrably reduced rural-urban distress migration and improved women's asset ownership through individual beneficiary works. However, persistent challenges include delays in wage payments, measurement fraud, capture by local elites in some states, and inadequate work quality in certain asset categories. Economists debate its net productivity impact, but welfare benefits for the poorest rural households are widely acknowledged.",
      tags: ['employment', 'rural', 'poverty', 'welfare', 'labour', 'social-audit'],
      publishedAt: new Date(),
    },

    {
      slug: 'pm-jan-dhan-yojana',
      title: 'Pradhan Mantri Jan Dhan Yojana (PMJDY)',
      category: ArticleCategory.POLICY,
      summary: 'National financial inclusion mission launched in 2014 to extend universal banking, insurance, and credit access to the unbanked population, anchored by zero-balance accounts with RuPay debit cards, overdraft facilities, and direct benefit transfer linkages.',
      body: `<b>Overview</b>

Pradhan Mantri Jan Dhan Yojana (PMJDY) was launched on August 28, 2014, as a Mission for Financial Inclusion. It is designed to provide universal access to banking facilities, credit, insurance, and pension services to every unbanked household in India, particularly in rural and semi-urban areas. It forms the "J" in the JAM (Jan Dhan-Aadhaar-Mobile) trinity that underpins India's direct benefit transfer architecture.

<b>Account Features</b>

PMJDY accounts are zero-balance Basic Savings Bank Deposit Accounts (BSBDAs). Each account comes with a RuPay debit card carrying an in-built accidental death insurance cover of ₹2 lakh (for new account openers after August 28, 2018). After six months of satisfactory account operation, account holders become eligible for an overdraft facility of up to ₹10,000.

<b>Progress as of 2025</b>

As of March 2025, over 53.13 crore PMJDY accounts have been opened across public sector banks, regional rural banks, and cooperative banks. Total deposits in these accounts stand at approximately ₹2.31 lakh crore. Women hold 55.6% of all PMJDY accounts. Over 67% of accounts are in rural and semi-urban areas. The average deposit per account has grown from ₹1,065 in 2015 to over ₹4,352 in 2025, indicating genuine savings mobilisation.

<b>Integration with Government Schemes</b>

PMJDY accounts serve as conduits for Direct Benefit Transfer (DBT) across over 300 Central government schemes, including LPG subsidies, scholarship disbursements, pension payments, and MGNREGA wages. During the COVID-19 lockdown, the PM Garib Kalyan Yojana transferred ₹500 per month to 20 crore women PMJDY account holders within days of announcement, demonstrating the architecture's real-time capability.

<b>Micro-Insurance and Pension Linkages</b>

PMJDY is linked with Pradhan Mantri Suraksha Bima Yojana (PMSBY) — providing ₹2 lakh accident cover at ₹20/year — and Pradhan Mantri Jeevan Jyoti Bima Yojana (PMJJBY) — providing ₹2 lakh life insurance at ₹436/year. Account holders are also enrolled in Atal Pension Yojana through the account infrastructure.`,
      impactAnalysis: 'PMJDY achieved universal bank account coverage faster than any comparable programme globally, as verified by the World Bank. The scheme is widely credited with substantially reducing leakage in welfare delivery through DBT. However, critics note that account dormancy rates, though declining, remain significant — approximately 8% of accounts showed zero balance as of 2024. The scheme has also spurred predatory financial product mis-selling in some states, as banks face targets for insurance and pension enrolments.',
      tags: ['financial-inclusion', 'banking', 'welfare', 'JAM', 'DBT', 'poverty'],
      publishedAt: new Date(),
    },

    {
      slug: 'production-linked-incentive-scheme',
      title: 'Production Linked Incentive (PLI) Scheme',
      category: ArticleCategory.POLICY,
      summary: "A ₹1.97 lakh crore incentive framework covering 14 manufacturing sectors, designed to make India's domestic manufacturing globally competitive by providing 4–6% incentives on incremental sales over a base year for qualifying companies.",
      body: `<b>Overview</b>

The Production Linked Incentive (PLI) Scheme was first introduced in 2020 for mobile phones and electronic components, and subsequently extended to 13 additional sectors in 2020–21. The scheme offers financial incentives to companies on incremental sales — above a base year — manufactured in India, with the objective of attracting both foreign and domestic investment, achieving economies of scale, and integrating India into global supply chains.

<b>Sectors Covered</b>

PLI schemes have been announced for mobile phones and electronic components, pharmaceuticals (bulk drugs and medical devices), automobiles and auto components, advanced chemistry cell batteries, textile products (man-made fibres and technical textiles), food processing, telecom and networking products, white goods (air conditioners and LED lights), specialty steel, solar photovoltaic modules, and drones. Incentive rates vary by sector — typically 4–6% of incremental sales for 5 years.

<b>Key Performance Highlights (2024–25)</b>

The government reports cumulative investment of over ₹1.12 lakh crore under PLI schemes, production and sales exceeding ₹11 lakh crore, and exports of ₹4 lakh crore as of FY2024–25. In mobile phones, Apple's contract manufacturers (Foxconn, Pegatron, Wistron/Tata) and Samsung have established significant production bases. India's mobile phone exports crossed ₹1.28 lakh crore in FY2024–25, with Apple products accounting for the majority.

<b>Pharmaceuticals and Bulk Drugs</b>

The bulk drug PLI targets reduction of import dependence on APIs (Active Pharmaceutical Ingredients) from China. Dedicated Bulk Drug Parks are being established in Himachal Pradesh, Gujarat, and Andhra Pradesh with Central financial assistance.

<b>Challenges and Criticism</b>

Several companies in sectors like specialty steel, food processing, and textiles have not met investment thresholds, leading to slow disbursement. Industry bodies have pointed to logistics costs, power tariffs, and land acquisition challenges as barriers. The scheme has been criticised for benefiting large incumbents over MSMEs, and for weak linkages with domestic supplier development.`,
      impactAnalysis: 'The PLI scheme has been particularly transformative in the electronics sector. India became the second-largest mobile phone manufacturer globally by volume in 2023. However, the depth of domestic value addition remains shallow — India assembles but does not yet manufacture most components. The semiconductor fab PLI announced in 2021 has seen a consortium of players including Vedanta-Foxconn (subsequently reconstituted) and Micron Technology announce investment commitments, though actual production is several years away.',
      tags: ['manufacturing', 'industrial-policy', 'PLI', 'exports', 'investment', 'Make-in-India'],
      publishedAt: new Date(),
    },

    {
      slug: 'national-health-mission',
      title: 'National Health Mission (NHM)',
      category: ArticleCategory.POLICY,
      summary: 'The umbrella health policy framework combining the National Rural Health Mission and National Urban Health Mission to strengthen public health infrastructure, improve maternal and child health outcomes, and ensure universal access to essential health services.',
      body: `<b>Overview</b>

The National Health Mission (NHM) was launched in 2013, subsuming the National Rural Health Mission (NRHM, launched 2005) and the National Urban Health Mission (NUHM, launched 2013). NHM is the primary vehicle through which the Central Government funds and monitors health system strengthening across all states and union territories, with a focus on reproductive and child health, communicable diseases, non-communicable diseases, and infrastructure development.

<b>Institutional Architecture</b>

The NHM operates through a three-tier system: Sub-Health Centres (SHCs) at the village level, Primary Health Centres (PHCs) serving a population of 30,000 in plains or 20,000 in hilly and tribal areas, and Community Health Centres (CHCs) acting as first referral units with specialist services. An Accredited Social Health Activist (ASHA) — a trained community health volunteer — operates at every village level, forming the frontline of the health system.

<b>Ayushman Bharat — Health and Wellness Centres</b>

Under Ayushman Bharat, 1.6 lakh existing SHCs and PHCs are being upgraded to Health and Wellness Centres (HWCs) — renamed Ayushman Arogya Mandirs in 2023 — offering comprehensive primary care including management of non-communicable diseases, mental health, oral health, and eye care. As of 2025, over 1.73 lakh HWCs are operational.

<b>Ayushman Bharat PM-JAY</b>

Pradhan Mantri Jan Arogya Yojana (PM-JAY), launched 2018, provides health insurance cover of ₹5 lakh per family per year to over 55 crore beneficiaries covering hospitalisation costs across over 29,000 empanelled hospitals. As of March 2025, over 7.37 crore hospital admissions have been authorised under PM-JAY. The scheme was expanded in 2024 to cover all citizens above 70 years of age, regardless of income.

<b>Key Health Indicators Progress</b>

India's Maternal Mortality Ratio (MMR) declined from 254 per lakh live births in 2004–06 to 97 per lakh in 2018–20, approaching the Sustainable Development Goal target of below 70 by 2030. The Under-5 Mortality Rate fell from 74 per 1,000 live births in 2007 to 32 in 2020. Full immunisation coverage has reached 76.4% according to NFHS-5.`,
      impactAnalysis: 'NHM has substantially improved access to institutional delivery, immunisation, and reproductive health services. ASHAs have been pivotal in reducing out-of-pocket expenditure on childbirth. However, public health expenditure remains at approximately 1.9% of GDP, significantly below the 2.5% target set in the National Health Policy 2017. Urban health infrastructure, mental health services, and non-communicable disease management remain underfunded relative to need. The COVID-19 pandemic exposed critical infrastructure gaps in ventilator capacity, oxygen supply chains, and cold chain logistics.',
      tags: ['health', 'NHM', 'ASHA', 'PM-JAY', 'maternal-health', 'insurance'],
      publishedAt: new Date(),
    },

    // ─── HISTORY ─────────────────────────────────────────────────────────────

    {
      slug: 'partition-of-india-1947',
      title: 'Partition of India, 1947',
      category: ArticleCategory.HISTORY,
      summary: "The division of British India into the Dominions of India and Pakistan on August 14–15, 1947, accompanied by one of history's largest forced migrations, widespread communal violence, and the reshaping of South Asian geopolitics for generations.",
      body: `<b>Background and Causes</b>

The partition of British India was the outcome of a convergence of forces: the two-nation theory propounded by the All-India Muslim League under Muhammad Ali Jinnah, which held that Hindus and Muslims constituted two distinct nations requiring separate states; the accelerated British withdrawal following the fiscal and political exhaustion of World War II; the failure of the Cabinet Mission Plan of 1946 to agree on a united federal structure; and communal riots in Calcutta in August 1946 and Bihar in October 1946 that set off a spiral of retaliatory violence.

<b>The Mountbatten Plan</b>

Lord Louis Mountbatten, appointed Viceroy in March 1947, announced the partition plan on June 3, 1947, moving the original transfer of power date from June 1948 to August 14–15, 1947 — a fateful acceleration. Sir Cyril Radcliffe, a British lawyer who had never visited India, was appointed to head two Boundary Commissions — one for Punjab and one for Bengal. He drew the Radcliffe Lines in approximately five weeks, with the boundaries not published until after Independence Day to avoid disrupting the transfer of power ceremonies.

<b>The Human Catastrophe</b>

The division of Punjab and Bengal produced catastrophic communal violence. Between 200,000 and 2 million people were killed — estimates vary widely — in massacres, arson, abductions, and mob attacks involving Hindus, Muslims, and Sikhs. Between 10 and 20 million people were displaced in the largest forced migration in recorded history. Approximately 75,000 to 100,000 women were abducted and subjected to sexual violence by men of the other community. Mass graves were documented in Rawalpindi, Amritsar, Lahore, and Multan districts.

<b>The Question of Kashmir</b>

The princely state of Jammu and Kashmir, with a Muslim majority but ruled by Hindu Maharaja Hari Singh, remained undecided at Independence. Following a Pakistani-backed tribal invasion in October 1947, Maharaja Hari Singh signed the Instrument of Accession to India on October 26, 1947. India's military intervention, and the subsequent ceasefire line — the Line of Control — divided the state between India and Pakistan and established the enduring Kashmir dispute.

<b>Partition's Legacy in Literature and Memory</b>

Partition literature — Saadat Hasan Manto's short stories, Ismat Chughtai's work, Bhisham Sahni's "Tamas," and Amrita Pritam's poetry — constitute a defining archive of the human experience of partition. The 1947 Partition Archive has collected over 10,000 oral testimonies from survivors as of 2024.`,
      impactAnalysis: 'Partition remains the foundational trauma of South Asian modernity and continues to shape the foreign policy, domestic politics, and communal tensions of both India and Pakistan. It produced two nuclear-armed states in a state of recurring crisis. The historiography of partition — disputed across nationalist and communal lines — has become a site of contest over national identity on both sides of the border. August 14 is now observed as Partition Horrors Remembrance Day in India.',
      tags: ['partition', 'independence', '1947', 'communal-violence', 'kashmir', 'colonialism'],
      publishedAt: new Date(),
    },

    {
      slug: 'emergency-1975-1977',
      title: 'The Emergency, 1975–1977',
      category: ArticleCategory.HISTORY,
      summary: 'A 21-month constitutional crisis during which Prime Minister Indira Gandhi suspended civil liberties, censored the press, arrested political opponents, and ruled by decree — ending when she called elections and lost to the Janata Party coalition.',
      body: `<b>Background and Trigger</b>

On June 12, 1975, the Allahabad High Court found Prime Minister Indira Gandhi guilty of two counts of corrupt electoral practice in connection with the 1971 Lok Sabha election: misuse of government machinery and obtaining the services of a government servant for election work. Justice Jagmohanlal Sinha set aside her election and barred her from holding elected office for six years. Rather than resign — as many within Congress expected — Gandhi chose to challenge the verdict in the Supreme Court and simultaneously advised President Fakhruddin Ali Ahmed to proclaim a national Emergency under Article 352.

<b>The Proclamation and What It Meant</b>

President Ahmed proclaimed the Emergency on the grounds of "internal disturbance" — a term now deleted from Article 352 by the 44th Amendment. On June 25, 1975, police began arresting opposition leaders across the country in pre-dawn raids, before the order was published. Those arrested included Jayaprakash Narayan, Morarji Desai, Atal Bihari Vajpayee, L.K. Advani, George Fernandes, and Chandra Shekhar. Over 1,10,000 persons were eventually detained without trial under the Maintenance of Internal Security Act (MISA) and the Defence of India Rules.

<b>Press Censorship</b>

All major newspapers were subjected to pre-censorship. The Indian Express and Statesman left editorial columns blank in protest. All India Radio — the sole national broadcast channel — became a propaganda organ. The Associated Press correspondent was expelled, and several foreign journalists were denied visas.

<b>The Sanjay Gandhi Factor</b>

Prime Minister Gandhi's younger son Sanjay Gandhi, who held no official position, exercised enormous extra-constitutional influence during the Emergency. His programme included a forced sterilisation drive — with state governments setting targets for vasectomies that led to coercion of the poor, minorities, and government workers — and slum demolition in Delhi's Turkman Gate area, which resulted in violent clashes and deaths.

<b>The 42nd Amendment</b>

Parliament passed the Constitution (Forty-Second Amendment) Act, 1976 — described as a "mini-constitution" — which significantly curtailed judicial review, made Directive Principles take precedence over Fundamental Rights, and extended the term of Lok Sabha to six years. Several of these amendments were reversed by the 43rd and 44th Amendments after the Emergency ended.

<b>End and Aftermath</b>

In January 1977, Gandhi announced elections — widely believed to be a miscalculation. The Janata Party coalition, formed from disparate opposition groups, won a decisive majority. Morarji Desai became Prime Minister. The Janata government established the Shah Commission of Inquiry, which documented Emergency-era abuses. The 44th Amendment in 1978 tightened the conditions for future Emergency proclamations.`,
      impactAnalysis: 'The Emergency is the most contested episode in Indian democratic history. Its legacy includes a more assertive judiciary (particularly in developing the basic structure doctrine), the consolidation of the Hindu nationalist movement within the Janata coalition (setting the stage for the BJP), and a deep and sustained public wariness of authoritarian governance that has shaped every subsequent political crisis. The forced sterilisation programme produced lasting distrust of family planning programmes among poorer communities, with demographic consequences that are debated by scholars.',
      tags: ['emergency', 'indira-gandhi', 'democracy', 'civil-liberties', '1975', 'censorship'],
      publishedAt: new Date(),
    },

    {
      slug: 'liberalisation-1991',
      title: 'Economic Liberalisation of 1991',
      category: ArticleCategory.HISTORY,
      summary: "India's 1991 balance of payments crisis forced a structural adjustment that dismantled the License Raj, opened the economy to foreign investment, devalued the rupee, and set India on the path to sustained high-growth integration with the global economy.",
      body: `<b>The Crisis of 1991</b>

By mid-1991, India faced a severe balance of payments crisis. Foreign exchange reserves had fallen to approximately $1.2 billion — barely enough for three weeks of imports. India was on the verge of defaulting on its international debt obligations for the first time since Independence. The crisis was precipitated by a combination of factors: the collapse of the Soviet Union (India's largest trading partner), rising oil prices following the Gulf War, a fiscal deficit running at over 8% of GDP, and political instability following two changes of government in quick succession.

<b>Emergency Measures</b>

The Chandra Shekhar government, under the caretaker arrangement, physically airlifted 47 tonnes of gold from the Reserve Bank of India's vaults to the Bank of England and Bank of Japan as collateral to secure emergency loans. This was kept secret during the operation but leaked and became a moment of national humiliation that galvanised political will for reform.

<b>The 1991 Reforms — P.V. Narasimha Rao and Manmohan Singh</b>

Finance Minister Dr Manmohan Singh's July 1991 budget, under Prime Minister P.V. Narasimha Rao, launched structural reforms with the support of an IMF stabilisation programme. The rupee was devalued by 19% over two days (July 1–3, 1991). Industrial licensing was abolished for most sectors. The "Monopolies and Restrictive Trade Practices" Act restrictions on large firms were removed. The maximum foreign equity stake in joint ventures was raised from 40% to 51%.

<b>Subsequent Reforms</b>

The 1991 reforms were followed by progressive liberalisation: a new trade policy reducing import licensing, reduction of peak customs tariffs, liberalisation of capital markets, dismantling of the Controller of Capital Issues, establishment of SEBI as the capital market regulator, and opening of the insurance and banking sectors to private and foreign players.

<b>Long-Term Outcomes</b>

GDP growth accelerated from the "Hindu rate of growth" of approximately 3.5% annually to average over 6.5–7% for the following two decades. Exports grew from $17.9 billion in 1991 to over $775 billion in merchandise and services by 2024. IT services, enabled by liberalised telecom and removal of software export restrictions, emerged as a globally dominant industry.`,
      impactAnalysis: 'The 1991 reforms are the single most consequential policy inflection point in post-independence Indian economic history. They created the conditions for the emergence of India as a major global economy. However, the reforms were incomplete — land, labour, agriculture, and education remained relatively unreformed. The gains of liberalisation were also unevenly distributed, contributing to regional divergence and growing income inequality. The political economy of reform — requiring a crisis to overcome vested interests — became a template for subsequent incremental liberalisation.',
      tags: ['liberalisation', 'economy', '1991', 'reforms', 'Manmohan-Singh', 'balance-of-payments'],
      publishedAt: new Date(),
    },

    // ─── CULTURE ─────────────────────────────────────────────────────────────

    {
      slug: 'classical-dance-forms-of-india',
      title: 'Classical Dance Forms of India',
      category: ArticleCategory.CULTURE,
      summary: 'India has eight Sangeet Natak Akademi-recognised classical dance forms — Bharatanatyam, Kathak, Odissi, Kuchipudi, Manipuri, Mohiniyattam, Kathakali, and Sattriya — each rooted in distinct regional traditions, devotional practices, and the Natyashastra aesthetic framework.',
      body: `<b>Overview</b>

India's classical dance forms are among the world's oldest continuous performance traditions. The Sangeet Natak Akademi (India's National Academy of Music, Dance, and Drama) recognises eight classical dance forms, each of which draws — directly or through regional interpretive traditions — on the Natyashastra, the ancient Sanskrit treatise on performing arts attributed to sage Bharata Muni and composed between 200 BCE and 200 CE. The Natyashastra provides a comprehensive framework encompassing abhinaya (expressive acting), nritta (pure movement), nritya (expressive dance), and natya (dance-drama).

<b>Bharatanatyam</b>

Originating in Tamil Nadu, Bharatanatyam was historically performed by Devadasi dancers in temples. The 20th century saw it reconstructed and presented in concert settings by practitioners such as Rukmini Devi Arundale and E. Krishna Iyer. The form is characterised by geometric postures, stamping footwork, and a balance between abstract (nritta) and interpretive (abhinaya) elements.

<b>Kathak</b>

Kathak developed in the courts of northern India — particularly Lucknow and Jaipur — and absorbed both Hindu devotional narratives (Krishna leela) and Mughal aesthetic influences including the ghazal, thumri, and tabla. It is distinctive for its intricate footwork (tatkar), rapid spins (chakkar), and dramatic abhinaya.

<b>Odissi</b>

Odissi from Odisha is characterised by the tribhangi — a three-point bend at the neck, torso, and knees — and lyrical, sculptural quality derived from the devadasi tradition of the Jagannath temple at Puri. Pioneering scholars like Guru Kelucharan Mohapatra reconstructed the form from temple friezes and manuscripts in the 1950s.

<b>Kuchipudi</b>

Kuchipudi from Andhra Pradesh is a dance-drama tradition originating in the village of Kuchipudi. It was historically performed exclusively by Brahmin men who played both male and female roles. The form is known for its dramatic narrative structure, fast-paced footwork, and the iconic tarangam — dancing on the rim of a brass plate.

<b>Manipuri, Mohiniyattam, Kathakali, and Sattriya</b>

Manipuri from northeastern India is rooted in Vaishnavite devotion to Radha-Krishna and is distinguished by its softly circular, undulating movements and the use of the pung (barrel drum). Mohiniyattam from Kerala is a graceful, feminine form characterised by gentle swaying (lasya). Kathakali is Kerala's elaborate dance-drama — performed with extraordinary facial makeup, towering headdresses, and all-night narrative performances of epic stories. Sattriya from Assam was codified by the saint-reformer Srimanta Shankaradeva in the 15th century within the Vaishnavite monastery (satra) tradition and was recognised as a classical form only in 2000.

<b>The Nine Rasas</b>

All classical forms operate within the rasa framework of the Natyashastra — nine emotional states (navarasas) that the performer evokes in the audience: shringara (love), hasya (humour), karuna (compassion), raudra (fury), vira (heroism), bhayanaka (terror), bibhatsa (disgust), adbhuta (wonder), and shanta (peace). Karuna and shringara are considered the foundational rasas in most traditions.`,
      impactAnalysis: 'Classical dance faces a paradox of expanding global visibility and declining traditional patronage. Streaming platforms, the Indian diaspora, and international festivals have created new audiences. Government funding through Sangeet Natak Akademi, ICCR cultural diplomacy, and state akademis provides institutional support. However, the transition from temple and court patronage to concert-hall and classroom teaching has transformed the economics of practice. The commercialisation of classical forms for wedding and film contexts is a recurring source of debate among practitioners.',
      tags: ['dance', 'classical-arts', 'culture', 'natyashastra', 'heritage', 'Bharatanatyam'],
      publishedAt: new Date(),
    },

    {
      slug: 'indian-cinema-parallel-and-new-wave',
      title: 'Indian Parallel Cinema and the New Wave Movement',
      category: ArticleCategory.CULTURE,
      summary: "The parallel cinema movement, beginning with Satyajit Ray's 'Pather Panchali' in 1955 and flourishing through the 1970s–80s under directors like Shyam Benegal, Mrinal Sen, Adoor Gopalakrishnan, and Girish Karnad, created a cinematic tradition distinct from mainstream commercial film.",
      body: `<b>Origins and Context</b>

Indian parallel cinema emerged in opposition to the dominant song-and-dance formula of Bollywood. Its roots lie in the Italian neorealist movement and the influence of Jean Renoir, who visited India and mentored young filmmakers. The movement received institutional support from the Film Finance Corporation (FFC, later NFDC — National Film Development Corporation) established in 1960, which provided low-interest loans to filmmakers working outside the commercial mainstream.

<b>Satyajit Ray and the Apu Trilogy</b>

Satyajit Ray's debut, "Pather Panchali" (1955), is considered the founding text of Indian parallel cinema. Shot on minimal budget with untrained actors and natural lighting, the film — and the two sequels that followed, "Aparajito" and "Apur Sansar" — established a language of understated realism for Indian cinema. Ray won an honorary Oscar in 1992, shortly before his death, for his life's work.

<b>The New Wave of the 1970s</b>

The 1970s produced the most concentrated flowering of Indian new wave cinema, coinciding with — and partly responding to — the political turbulence of the Emergency. Shyam Benegal's films ("Ankur," "Nishant," "Manthan") examined caste oppression, feudal landlordism, and rural power. Mrinal Sen explored urban alienation and class politics. Adoor Gopalakrishnan in Kerala and G. Aravindan created a distinctive Malayalam new wave. Girish Karnad brought Kannada folk mythology into a modern cinematic idiom.

<b>Regional Cinema Traditions</b>

The new wave was never only a Hindi cinema movement. Ritwik Ghatak's Bengali films — raw, melodramatic, and intensely political — were rediscovered after his death and are now considered equal to Ray's. Tamil cinema had its own parallel tradition through K. Balachander and Mani Ratnam's early work. Marathi cinema, through figures like Jabbar Patel and later Nagraj Manjule, developed a vigorous social realist tradition.

<b>Legacy and Contemporary Relevance</b>

The new wave tradition continues in contemporary Indian cinema through directors like Anurag Kashyap, Neeraj Ghaywan, Pan Nalin, Payal Kapadia, and Rima Das. Payal Kapadia's "All We Imagine as Light" (2024) won the Grand Prix at Cannes — the highest honour given to an Indian film since Mira Nair's win in 1988 — reinserting Indian independent cinema into global critical discourse.`,
      impactAnalysis: 'The parallel cinema movement permanently expanded the vocabulary of Indian filmmaking and trained generations of actors, cinematographers, and writers who moved between independent and commercial projects. NFDC continues to co-produce and distribute art-house films. OTT platforms have created new distribution windows for Indian independent cinema, enabling works that would not have received theatrical release to find large audiences. The commercial success of "regional" film industries — particularly Tamil, Telugu, and Malayalam — in recent years has blurred the boundary between commercial and art cinema.',
      tags: ['cinema', 'culture', 'parallel-cinema', 'Satyajit-Ray', 'NFDC', 'Bollywood'],
      publishedAt: new Date(),
    },

    // ─── DIVERSITY ────────────────────────────────────────────────────────────

    {
      slug: 'linguistic-diversity-of-india',
      title: 'Linguistic Diversity of India',
      category: ArticleCategory.DIVERSITY,
      summary: 'India is home to over 19,500 distinct mother tongues recorded in the 2011 Census, belonging to four major language families, with 22 languages recognised in the Eighth Schedule and over 197 languages classified as vulnerable or endangered by UNESCO.',
      body: `<b>Scale of Diversity</b>

The 2011 Census recorded 19,569 distinct mother tongues across India. Of these, 121 languages are spoken by more than 10,000 people. India has no single national language — Hindi (in the Devanagari script) is the official language of the Union, with English serving as the associate official language for specified purposes. The States' Reorganisation Act of 1956 drew state boundaries along linguistic lines, giving each major language a territorial home while creating a federal mosaic of official languages.

<b>Language Families</b>

Indo-Aryan languages — a branch of the Indo-European family — account for approximately 78% of India's population and include Hindi, Bengali, Marathi, Gujarati, Punjabi, Odia, Assamese, Maithili, and Urdu. Dravidian languages — spoken primarily in southern India — account for 19.6% of speakers and include Tamil, Telugu, Kannada, and Malayalam. Austroasiatic languages — including Santali, Mundari, and Ho — are spoken by approximately 1.2% of the population, primarily in central-eastern India. Sino-Tibetan languages account for 0.97% and include Bodo, Manipuri (Meitei), and the many languages of the northeastern states.

<b>The Eighth Schedule</b>

The Eighth Schedule to the Constitution originally listed 14 languages entitled to representation on the Official Languages Commission and for use in official communications at the Central level. Through successive amendments, this has grown to 22 scheduled languages: Assamese, Bengali, Bodo, Dogri, Gujarati, Hindi, Kannada, Kashmiri, Konkani, Maithili, Malayalam, Manipuri, Marathi, Nepali, Odia, Punjabi, Sanskrit, Santali, Sindhi, Tamil, Telugu, and Urdu.

<b>Demands for Inclusion</b>

Active demands for Eighth Schedule inclusion persist for Tulu, Rajasthani, Bhojpuri, Gondi, Kodava, and several others. The Official Language Parliamentary Committee has recommended inclusion of certain languages, but formal constitutional amendment has not occurred. Recognition confers access to Central government funds, use in competitive examinations, and institutional legitimacy for the language community.

<b>Endangered Languages</b>

UNESCO's Atlas of the World's Languages in Danger classifies over 197 Indian languages as vulnerable, definitely endangered, severely endangered, critically endangered, or extinct. Languages with fewer than 10,000 speakers — particularly tribal languages of Andaman, Arunachal Pradesh, and Jharkhand — face extinction within a generation as children shift to dominant regional and national languages.`,
      impactAnalysis: "Linguistic diversity is simultaneously India's cultural wealth and a governance complexity. Language politics — the demand for linguistic statehood, disputes over medium of instruction in schools, and the three-language formula — continue to shape electoral contests and identity movements. Digital technology presents both threat (English and Hindi dominate internet content) and opportunity — Indian language internet users now outnumber English users, and large language model development in Indian languages has accelerated significantly since 2022.",
      tags: ['language', 'diversity', 'constitution', 'culture', 'eighth-schedule', 'endangered-languages'],
      publishedAt: new Date(),
    },

    {
      slug: 'tribal-diversity-india',
      title: 'Tribal Communities and Diversity in India',
      category: ArticleCategory.DIVERSITY,
      summary: 'India is home to over 700 Scheduled Tribe communities comprising 8.6% of the national population, with extraordinary diversity in language, religion, governance traditions, and ecological habitats — concentrated in central India, the Northeast, and island territories.',
      body: `<b>Scale and Distribution</b>

The 2011 Census enumerated 10.45 crore persons belonging to Scheduled Tribes, constituting 8.6% of India's population. Over 700 communities are recognised as Scheduled Tribes across different states, though the national list varies by state notification — a tribe recognised as ST in one state may not be recognised in another. The largest tribal populations are in Madhya Pradesh, Maharashtra, Odisha, Rajasthan, Jharkhand, and Gujarat. The Northeast — particularly Nagaland, Mizoram, and Meghalaya — has tribal-majority states.

<b>Ecological Habitats and Livelihoods</b>

Tribal communities are broadly classified by their ecological habitats: forest-dwelling communities (including the Gond, Bhil, Santhal, Oraon, and Munda — the largest by population), hill communities of the Northeast (Naga, Mizo, Kuki, Bodo), coastal and island communities (Nicobarese, Onge, Jarawa, Sentinelese), and nomadic and semi-nomadic pastoral communities. Forest-based livelihoods — collection of minor forest produce, shifting cultivation (jhum), and forest food systems — remain central to the economy and food sovereignty of many communities.

<b>Particularly Vulnerable Tribal Groups (PVTGs)</b>

75 communities across 18 states and one union territory are designated as Particularly Vulnerable Tribal Groups on account of pre-agricultural technology level, stagnant or declining population, extremely low literacy, and subsistence-level economy. These include the Birhor, Chenchu, Jarawa, Onge, Sentinelese, Sahariya, and Kolam. The PM-JANMAN scheme launched in 2023 provides a targeted package for PVTGs covering housing, drinking water, roads, mobile medical units, and Anganwadi services.

<b>Governance Under the Fifth and Sixth Schedules</b>

The Fifth Schedule to the Constitution provides a special governance framework for tribal areas of 10 states in central and peninsular India, establishing Tribes Advisory Councils with advisory functions to the Governor. The Sixth Schedule provides self-governance provisions for tribal-majority areas of Assam, Meghalaya, Tripura, and Mizoram through Autonomous District Councils with legislative, executive, and judicial powers.

<b>The Pesa Act, 1996</b>

The Panchayats (Extension to Scheduled Areas) Act, 1996 (PESA) extends the Panchayati Raj framework to Fifth Schedule areas with modifications that recognise the primacy of the Gram Sabha — the village assembly — in matters of natural resource management, minor forest produce, land acquisition, and social regulation.`,
      impactAnalysis: "Tribal communities in India face a profound paradox: many of the country's richest mineral, forest, and water resources lie in the Fifth Schedule areas, yet tribal districts consistently rank at the bottom of human development indices. Displacement for infrastructure — dams, mines, industrial corridors — has disproportionately affected tribal populations, with NCRB data showing tribal persons account for 40% of persons displaced by development projects while constituting only 8.6% of the population. The implementation of PESA and FRA remains the most significant institutional mechanism for reversing this structural exclusion.",
      tags: ['tribal', 'diversity', 'adivasi', 'PVTG', 'fifth-schedule', 'PESA', 'FRA'],
      publishedAt: new Date(),
    },

    // ─── STATE INSIGHTS ───────────────────────────────────────────────────────

    {
      slug: 'kerala-development-model',
      title: 'The Kerala Development Model',
      category: ArticleCategory.STATE_INSIGHT,
      summary: "Kerala's achievement of human development outcomes — literacy, life expectancy, and infant mortality — comparable to upper-middle-income countries at a relatively modest per-capita income has made it a globally studied model for social development through investment in public services.",
      body: `<b>The Kerala Model Defined</b>

The "Kerala Model" refers to the anomaly — first identified by development economists in the 1970s and rigorously studied since — of a state achieving human development outcomes comparable to much wealthier nations at a per-capita income below the Indian average. The model challenges the assumption that economic growth must precede social development, and has informed development policy debates globally, including in the formulation of the UN Human Development Index.

<b>Key Indicators (2024)</b>

Kerala's literacy rate of 96.2% is the highest in India and comparable to European nations. Its infant mortality rate of 6 per 1,000 live births is lower than China and Brazil. Life expectancy stands at 75 years against the national average of 70. The sex ratio of 1,084 women per 1,000 men is the highest in India and one of the few above 1,000 nationally. Total fertility rate has been at replacement level (2.1) since the 1980s — the first Indian state to achieve this.

<b>Historical Roots of the Model</b>

Four structural factors underpin Kerala's outcomes. First, early social reform movements in the 19th and early 20th centuries — particularly the Ezhava social reform movement led by Sri Narayana Guru and the Nair social reform movement — dismantled rigid caste hierarchies and promoted education. Second, the progressive princely states of Travancore and Cochin made substantial investments in public education and health infrastructure from the 1810s. Third, land reform under the Kerala Land Reforms Act, 1969 abolished absentee landlordism and redistributed land, reducing rural inequality. Fourth, a strong left political tradition — the Communist Party of India (Marxist) has governed the state for much of its post-independence history — has prioritised public services over growth metrics.

<b>Kudumbashree</b>

The Kudumbashree Community Development Society, established in 1998, is one of the world's largest women's self-help group networks, with 45 lakh members across 2.82 lakh Neighbourhood Groups managing micro-enterprises, collective farming, urban housing societies, and community kitchens. It is the delivery mechanism for multiple state welfare schemes.

<b>Challenges</b>

Kerala faces mounting structural challenges: a rapidly ageing population (the highest proportion of elderly in any Indian state), high youth unemployment driven by high aspirations and emigration, fiscal stress from committed public expenditure on health, education, and pensions, and the demographic vulnerability exposed by the 2018 floods and the COVID-19 pandemic (during which Kerala's response was globally lauded).`,
      impactAnalysis: 'Kerala continues to be a reference case in development literature. Its investment in remittance-driven household prosperity (from Gulf migration) has complemented public investment, but also created structural dependence. The state spends approximately 6.5% of GSDP on health and education combined, nearly three times the national average. The Palliative Care model developed in Kerala has been adopted as a national programme. Fiscal consolidation without compromising social expenditure remains the state\'s foremost governance challenge.',
      tags: ['kerala', 'development', 'human-development', 'education', 'health', 'kudumbashree'],
      publishedAt: new Date(),
      stateId: states['KL'],
    },

    {
      slug: 'delhi-air-pollution-crisis',
      title: "Delhi's Air Pollution Crisis",
      category: ArticleCategory.STATE_INSIGHT,
      summary: "Delhi regularly records among the world's worst air quality indices, driven by vehicle emissions, industrial activity, stubble burning in Punjab and Haryana, construction dust, and adverse winter meteorological conditions — with severe public health consequences.",
      body: `<b>The Scale of the Problem</b>

Delhi has ranked as the world's most polluted capital city for five consecutive years in IQAir's global air quality rankings (2018–2023). The annual average PM2.5 concentration — fine particulate matter below 2.5 microns — is approximately 89 micrograms per cubic metre against the WHO safe guideline of 5 µg/m³. On peak pollution days in November, concentrations routinely exceed 500 µg/m³ — levels at which the Air Quality Index is classified as "Severe Plus" or "Emergency." Children born in Delhi are estimated to have approximately 10% lower lung capacity than peers in less polluted Indian cities.

<b>Sources of PM2.5 Pollution</b>

Seasonal and annual source apportionment studies by TERI, IIT Delhi, and SAFAR (System of Air Quality Forecasting and Research) attribute PM2.5 to multiple sources with varying seasonal contributions. On an annual basis, vehicles contribute 28–40%, industrial units and power plants 20–30%, dust (road, soil, construction) 15–25%, and residential biomass burning approximately 10%. During October–November, when farmers in Punjab and Haryana burn paddy stubble before the wheat sowing window, stubble smoke contributes 15–40% of Delhi's PM2.5 on peak days.

<b>Regulatory and Policy Architecture</b>

The Graded Response Action Plan (GRAP) is a four-tier emergency response system triggered at different AQI thresholds, ranging from GRAP-I (reducing brick kiln and hot-mix plant emissions) to GRAP-IV (banning construction, entry of trucks except essentials, and odd-even vehicle rationing). The Supreme Court-mandated Commission for Air Quality Management (CAQM) in the NCR and Adjoining Areas, constituted in 2021, coordinates between Delhi, Haryana, Punjab, Uttar Pradesh, and Rajasthan on cross-boundary pollution sources.

<b>Stubble Burning</b>

The Supreme Court has repeatedly expressed frustration with the continuation of stubble burning despite repeated bans. Farmers cite the narrow 15–20-day window between paddy harvest and wheat sowing as the constraint — in-situ management requires machinery (Happy Seeder, Super SMS) that small farmers cannot afford without subsidy. Punjab and Haryana have scaled up subsidy programmes for in-situ management machines, reducing but not eliminating fires.

<b>Electric Mobility and Clean Energy</b>

Delhi has one of the largest electric bus fleets in India at over 1,900 electric buses and has mandated that new autorickshaws and taxis be electric or CNG. The EV policy targets 25% EV share of new vehicle registrations by 2024. The switch to Bharat Stage VI (BS-VI) fuel standards — equivalent to Euro VI — in April 2020 significantly reduced sulphur emissions from vehicles.`,
      impactAnalysis: "Air pollution costs Delhi an estimated 5,000–10,000 premature deaths annually. The economic cost — through healthcare, lost productivity, and school closures — is estimated at 1.36% of GDP by The Lancet Countdown on Health and Climate Change India. The problem is inherently a collective action and federal coordination challenge: no single state or authority controls all pollution sources. The Supreme Court's involvement, through the CAQM framework, represents an unusual instance of judicial governance of an environmental policy domain.",
      tags: ['delhi', 'pollution', 'environment', 'health', 'CAQM', 'stubble-burning'],
      publishedAt: new Date(),
      stateId: states['DL'],
    },

    {
      slug: 'maharashtra-water-crisis',
      title: 'Maharashtra\'s Water Crisis and the Marathwada Drought Belt',
      category: ArticleCategory.STATE_INSIGHT,
      summary: "Marathwada in Maharashtra has faced recurrent acute drought conditions for over a decade, driven by erratic monsoons, over-reliance on water-intensive sugarcane cultivation, groundwater depletion, and governance failures in water distribution.",
      body: `<b>The Geography of the Crisis</b>

Marathwada, the eight-district region of central Maharashtra comprising Aurangabad (Chhatrapati Sambhajinagar), Jalna, Beed, Osmanabad, Latur, Nanded, Hingoli, and Parbhani, receives an average rainfall of 650–750 mm annually but is highly variable. The region has experienced acute drought in 2012, 2014, 2015, 2016, 2019, and again in 2023, with groundwater levels in several talukas declining by 1–2 metres annually. Latur district experienced one of the worst droughts in recorded Indian history in 2016, requiring water to be supplied by train from Miraj.

<b>Agricultural Pattern and the Sugar Trap</b>

Despite being a water-scarce region, Marathwada devotes approximately 40% of its irrigated area to sugarcane — one of India's most water-intensive crops, requiring 1,500–2,500 litres of water per kilogram of sugar. This is driven by assured government procurement prices, the political power of sugar cooperative owners, and the lack of viable market alternatives for farmers. The Maharashtra State Sugar Federation and 195 cooperative sugar mills form a political economy that has historically captured irrigation infrastructure in favour of sugarcane.

<b>Groundwater Depletion</b>

The Central Groundwater Board classifies 28 of 351 talukas in Maharashtra as "over-exploited" — meaning extraction exceeds recharge — with many Marathwada talukas in this category. Borewells have deepened from 30–50 feet in the 1990s to 300–500 feet today, with water becoming unaffordable for small farmers who lack capital for deeper borewells.

<b>Jalyukt Shivar Abhiyan</b>

The BJP government under Devendra Fadnavis launched the Jalyukt Shivar Abhiyan in 2015 — a state-wide watershed development programme aimed at making 5,000 villages water-independent by 2019. The programme executed thousands of water conservation structures. However, a performance audit by the Comptroller and Auditor General found significant quality deficiencies and geographic mismatch in implementation.

<b>Migration and Social Impact</b>

Drought in Marathwada drives seasonal migration of over 4–5 lakh agricultural workers and their families to sugarcane harvesting belts and urban construction sites each year. Children accompanying migrant families miss school, perpetuating educational disadvantage. The region also has the highest concentration of farmer suicides in Maharashtra.`,
      impactAnalysis: 'The Marathwada water crisis is a complex intersection of hydrology, agricultural policy, political economy, and climate change. State-level interventions — watershed development, water user associations, conjunctive use of surface and groundwater — have shown results in isolated clusters but lack the institutional scale to transform the region. The long-proposed Marathwada water grid, which would bring Krishna basin water to the drought belt, remains politically contested between riparian regions. Climate projections show increasing rainfall variability in the Deccan Plateau, suggesting the crisis will intensify without structural reform of water governance.',
      tags: ['maharashtra', 'water', 'drought', 'marathwada', 'agriculture', 'groundwater'],
      publishedAt: new Date(),
      stateId: states['MH'],
    },

    {
      slug: 'karnataka-startup-ecosystem',
      title: "Karnataka's Technology and Startup Ecosystem",
      category: ArticleCategory.STATE_INSIGHT,
      summary: "Bengaluru (Bangalore) is India's technology capital, home to over 12,000 startups, the largest IT services industry cluster in the country, a world-class research and defence science base, and a maturing deep-tech and biotech ecosystem.",
      body: `<b>Bengaluru's Emergence as a Tech Capital</b>

Bengaluru's emergence as India's technology capital was the product of deliberate policy — the establishment of defence research laboratories (ISRO, HAL, NAL, DRDO labs) in the 1950s and 1960s under Nehru's vision of science-led development, followed by the establishment of Hindustan Aeronautics Limited and Electronics Corporation of India. The liberal Rajiv Gandhi government's decision in the 1980s to allow IBM clones and personal computers catalysed the growth of software companies in the city. Texas Instruments established its first India R&D centre in Bengaluru in 1985 — the first multinational to do so.

<b>IT Services Industry</b>

Bengaluru accounts for approximately 38% of India's total software and IT-enabled services exports, with companies including Infosys, Wipro, HCL Technologies, TCS (which has large operations here), and hundreds of multinational R&D and global capability centres. The Electronic City industrial area — Asia's largest tech park — houses over 200 companies employing 150,000 persons.

<b>The Startup Ecosystem</b>

Karnataka, with Bengaluru at its centre, is home to over 12,000 active startups, including over 40 unicorns (privately held startups valued above $1 billion) as of 2024. Notable unicorns include Flipkart, Swiggy, Razorpay, Meesho, Cred, and Byju's. The state government's Karnataka Startup Policy 2022–27 provides seed funding, mentorship infrastructure, sector-specific incubators (Biotech, Aerospace, Defence), and a startup corridor connecting Bengaluru to Mysuru and Mangaluru.

<b>Biotech and Life Sciences</b>

Bengaluru hosts over 300 biotech companies, including Biocon (India's largest biotech firm), Strides Pharma, and the headquarters of numerous CROs and CDMOs. The Biotech cluster at Electronics City and Helix Biotech Park at Hoskote supports both established companies and early-stage ventures. The Institute of Bioinformatics and Applied Biotechnology (IBAB) and Jawaharlal Nehru Centre for Advanced Scientific Research (JNCASR) anchor the research base.

<b>Infrastructure Challenges</b>

Bengaluru's growth has far outpaced its infrastructure. The city faces chronic traffic congestion — average peak-hour speeds below 18 km/h — a water supply crisis as the Cauvery allocation is stretched, and an urban heat island effect driven by the replacement of the city's historic tank system with concrete. The Bruhat Bengaluru Mahanagara Palike (BBMP) faces governance challenges in delivering services to a city that has grown five-fold since 1980.`,
      impactAnalysis: "Karnataka contributes approximately ₹6.5 lakh crore to India's software and services exports annually and is the largest single contributor to central income tax collections from the private sector. However, the concentration of high-skill, high-wage employment in Bengaluru has widened Karnataka's internal inequality — northern Karnataka districts including Kalburgi, Yadgir, and Raichur rank among India's most backward by HDI despite the state's overall prosperity. Decentralising the tech economy through new campuses in Mysuru, Hubballi-Dharwad, and Mangaluru is a stated policy priority.",
      tags: ['karnataka', 'technology', 'startups', 'Bengaluru', 'IT-industry', 'unicorns'],
      publishedAt: new Date(),
      stateId: states['KA'],
    },

    {
      slug: 'west-bengal-jute-industry',
      title: 'West Bengal Jute Industry: Decline, Revival Attempts, and Policy Challenges',
      category: ArticleCategory.STATE_INSIGHT,
      summary: "West Bengal's jute industry — once the backbone of the colonial and post-independence Bengal economy — has declined significantly due to synthetic fibre competition, but government mandatory packaging norms and global sustainability demand offer a potential revival path.",
      body: `<b>Historical Significance</b>

Jute — the "golden fibre" — was the primary industrial driver of Bengal for over a century. The first modern jute mill was established at Rishra, near Kolkata, in 1855. By 1947, the Bengal delta had approximately 111 mills employing over 3 lakh workers along the Hooghly River. Jute exports accounted for over 30% of India's total export earnings at independence. However, the partition of 1947 placed the major jute growing regions in East Pakistan (now Bangladesh), creating a structural crisis as Indian mills lost access to raw material.

<b>Decline</b>

The jute industry's decline from the 1970s was driven by the proliferation of synthetic substitutes — polyethylene and polypropylene — in packaging, sacking, and carpet backing. The cost advantage of petrochemical fibres, combined with cheap labour in Bangladesh, drove many Bengal mills to closure. Employment in organised jute manufacturing fell from over 2.7 lakh in 1990 to approximately 2.3 lakh in 2023, with significant informal employment in the handloom jute sector.

<b>Mandatory Jute Packaging Norms</b>

The Jute Packaging Materials (Compulsory Use in Packing Commodities) Act, 1987 mandates that a proportion of food grains, sugar, and fertiliser bags procured by government agencies must be in jute packaging. The National Jute Board has periodically sought to increase mandatory reservations to protect mill employment. The textile industry and packaging industry have resisted, citing cost disadvantages.

<b>Sustainability Opportunity</b>

Global regulatory and consumer pressure to reduce single-use plastics has created a significant demand opportunity for jute as a biodegradable, carbon-negative packaging fibre. The European Union Single-Use Plastics Directive, implemented from 2021, has increased European demand for natural fibre packaging. India's own ban on single-use plastics has renewed domestic interest. The Jute Corporation of India has launched branded jute bags under the "Eco Jute" initiative for export markets.

<b>Worker Welfare Issues</b>

Jute mill workers — many of them second and third-generation employees of the same mills — face irregular wage payment and prolonged mill closures. The West Bengal government has intervened in several mill closures to prevent worker displacement, including the takeover of the Northbrook Jute Mill for conversion to a government enterprise.`,
      impactAnalysis: "Jute remains economically vital to approximately 40 lakh farm families in West Bengal, Assam, Odisha, and Bihar who grow jute as their primary cash crop. The industry's long-term viability requires a transition from commodity packaging to high-value diversified products — geotextiles, composite materials, nonwoven fabrics, and fashion — that are already manufactured in small quantities. Several Design Schools and NID Ahmedabad have collaborated on product diversification. Investment in mill modernisation and worker reskilling is identified as the critical gap.",
      tags: ['west-bengal', 'jute', 'textile', 'industry', 'sustainability', 'workers'],
      publishedAt: new Date(),
      stateId: states['WB'],
    },

    {
      slug: 'rajasthan-solar-energy-leadership',
      title: 'Rajasthan\'s Solar Energy Leadership',
      category: ArticleCategory.STATE_INSIGHT,
      summary: "Rajasthan is India's largest solar energy state, with the highest installed solar capacity, most advanced ultra-mega solar park infrastructure, and a policy environment attracting billions in renewable energy investment.",
      body: `<b>Solar Resource and National Context</b>

Rajasthan receives the highest annual global horizontal irradiance (GHI) in India — averaging 5.5–6.0 kWh/m²/day — due to its arid climate, low cloud cover, and vast flat desert terrain in the Thar region. The National Solar Mission, launched in 2010 as part of India's National Action Plan on Climate Change, identified Rajasthan as the primary solar energy geography for achieving India's renewable energy targets.

<b>Installed Capacity</b>

As of March 2025, Rajasthan has an installed solar capacity of over 23,000 MW — the largest of any Indian state and approximately 18% of India's total solar installed capacity of 84,000 MW. The state's total renewable energy capacity (solar + wind + biomass) exceeds 27,000 MW.

<b>Ultra-Mega Solar Parks</b>

The Bhadla Solar Park in Jodhpur district, spanning 5,700 hectares, is the world's largest solar park by installed capacity at 2,245 MW. It houses installations by Adani Solar, Mahindra Renewables, SECI, and other developers. The Bikaner Solar Park (2,000 MW in development), the Nokh Solar Park (925 MW), and the proposed Fatehgarh Ultra Mega Solar Park form part of the Rajasthan Renewable Energy Corridor.

<b>Policy Framework</b>

The Rajasthan Solar Energy Policy 2019 offers single-window clearances, exemption from electricity duty for captive solar consumption, and facilitated land allocation in desert areas. The state's Rajasthan Renewable Energy Corporation (RRECL) acts as a nodal agency for project facilitation. The state has also enacted a Rajasthan Renewable Energy Aggregation and Power Procurement Policy to facilitate green power for industries.

<b>Grid Integration Challenges</b>

Integrating large volumes of variable solar power into Rajasthan's grid — and evacuating it to demand centres in northern and western India — requires significant transmission infrastructure. The Green Energy Corridor Phase II project, funded by KfW and the Asian Development Bank, is constructing 8,000 circuit-km of new transmission lines to connect solar and wind-rich states including Rajasthan to the national grid.`,
      impactAnalysis: "Rajasthan's solar leadership positions the state as central to India's target of 500 GW of non-fossil energy by 2030, as committed at COP26. The state has attracted over ₹2 lakh crore in renewable energy investment, creating construction and O&M employment. However, land use conflicts — between solar parks and traditional pastoral commons (Orans) used by the Raika community — and the displacement of migratory birds (the Great Indian Bustard's last habitat) by solar installations have created ecological and social tensions that require careful spatial planning.",
      tags: ['rajasthan', 'solar', 'renewable-energy', 'Bhadla', 'climate', 'energy-transition'],
      publishedAt: new Date(),
      stateId: states['RJ'],
    },

    {
      slug: 'punjab-drug-crisis',
      title: 'Punjab\'s Drug Crisis',
      category: ArticleCategory.STATE_INSIGHT,
      summary: "Punjab faces a severe narcotics crisis driven by heroin and synthetic drug trafficking across its international border with Pakistan, with consequences for youth health, agricultural labour productivity, family structures, and criminal economy development.",
      body: `<b>Scale of the Problem</b>

Punjab's drug problem is the most acute in India by epidemiological measures. The 2015 AIIMS study commissioned by the Punjab government found that approximately 23.6% of Punjab's male population had a substance use disorder, with heroin the most prevalent substance. Annual state consumption of heroin is estimated by enforcement agencies at 7–10 tonnes. NCRB data consistently shows Punjab among the top states in drug seizures and drug-related deaths. A 2022 Vidhan Sabha report cited 3,000 drug-related deaths annually in the state.

<b>Geography and Smuggling Routes</b>

Punjab shares a 553-km international border with Pakistan. The Golden Crescent — Afghanistan, Iran, and Pakistan — remains the world's largest heroin-producing region. Smuggling routes exploit the agricultural landscape, drainage channels, and network of kuchcha roads along the border. Since 2019, drone-based smuggling has emerged as a significant challenge — Punjab Police reported over 600 drone seizures by mid-2024. Attari-Wagah also remains a known transit corridor for contraband concealed in goods vehicles.

<b>Social and Economic Impact</b>

The drug crisis has devastated the labour force in agricultural Punjab. Farmers report inability to hire reliable agricultural labour due to addiction. Women-headed households have increased in villages as men are incapacitated or imprisoned. Debt cycles — associated with funding addiction — have driven several cases of farm distress. The crisis has intersected with the broader Punjab agrarian crisis of depleting groundwater, declining terms of trade for wheat and paddy, and high input costs.

<b>State Government Responses</b>

The Aam Aadmi Party government that came to power in 2022 launched a major anti-drug campaign — "Tangent" — focusing on supply-side interdiction. It established a Punjab Drug Prevention and Control Bureau and appointed a Special Task Force. Over 1.3 lakh drug cases were registered in 2023. The Outpatient Opioid Assisted Treatment (OOAT) programme, operating through 618 centres across Punjab, provides buprenorphine maintenance treatment to over 1.3 lakh patients — the largest OOAT programme in India.

<b>NDPS Act Framework</b>

The Narcotic Drugs and Psychotropic Substances Act, 1985 provides the legislative framework for drug enforcement. Its harsh mandatory minimum sentences — 10 years for commercial quantities — have resulted in significant prison overcrowding, with drug offenders constituting over 40% of Punjab's prison population.`,
      impactAnalysis: "Punjab's drug crisis is a function of supply-side geography, demand-side socioeconomic distress, and enforcement gaps — including alleged complicity of some police personnel in drug networks, documented in multiple judicial and legislative inquiries. The OOAT programme represents a significant shift toward a public health rather than purely enforcement approach. Long-term resolution requires both sustained border management and addressing the underlying agrarian and youth employment crisis that creates vulnerability to addiction.",
      tags: ['punjab', 'drugs', 'narcotics', 'border', 'health', 'enforcement'],
      publishedAt: new Date(),
      stateId: states['PB'],
    },

    {
      slug: 'odisha-disaster-management-model',
      title: "Odisha's Disaster Management Model",
      category: ArticleCategory.STATE_INSIGHT,
      summary: "Odisha transformed from one of India's most cyclone-vulnerable states with catastrophic human losses to a globally recognised model of disaster preparedness, early warning systems, and community-based evacuation, demonstrating near-zero mortality in major cyclones since 2013.",
      body: `<b>The Before: Cyclone Tragedy of 1999</b>

On October 29, 1999, a super cyclone making landfall near Paradip killed approximately 10,000 people, destroyed 1.5 million homes, and devastated agricultural crops across 12 districts. It remains one of the deadliest cyclones in Indian history. The state's disaster response infrastructure was wholly inadequate — there were no proper cyclone shelters along the coast, early warning communication was fragmented, and evacuation was ad-hoc.

<b>Institutional Transformation Post-1999</b>

The 1999 catastrophe catalysed a complete institutional overhaul. The Odisha State Disaster Management Authority (OSDMA) was established as the first state disaster management authority in India. A network of 879 multipurpose cyclone shelters — designed to withstand wind speeds of 220 km/h and accommodate 40–50 persons per shelter — was constructed along the coast with funding from the World Bank and Asian Development Bank.

<b>Early Warning and Communication System</b>

The India Meteorological Department's cyclone warning track has steadily improved to provide 120-hour advance warning with decreasing error cones. Odisha developed a Last Mile Connectivity system — using All-India Radio, electronic sirens in coastal villages, SMS alerts to mobile phones, and a dedicated Emergency Operations Centre — to translate IMD warnings into community action. District Collectors exercise mandatory evacuation authority once a Cyclone Alert is issued.

<b>The Phailin and Fani Benchmarks</b>

Cyclone Phailin (2013), a Very Severe Cyclonic Storm with wind speeds of 220 km/h, prompted the evacuation of nearly 9 lakh people in 48 hours — resulting in only 45 deaths compared to the 1999 death toll of 10,000. Cyclone Fani (2019), the most powerful cyclone to hit India in 20 years with wind speeds of 250 km/h, prompted the evacuation of 12 lakh people and resulted in 64 deaths — an outcome praised by the UNDRR (United Nations Office for Disaster Risk Reduction) as a global benchmark in disaster preparedness.

<b>National Disaster Management Authority (NDMA)</b>

Odisha's model directly influenced the design of the National Disaster Management Authority, established by the Disaster Management Act, 2005. The National Cyclone Risk Mitigation Project — which extends the shelter and communication infrastructure to all cyclone-prone coastal states — is modelled on the Odisha framework.`,
      impactAnalysis: "Odisha's transformation is a global case study in how institutional investment and political will can dramatically reduce disaster mortality. The state now exports expertise — Odisha officials have trained disaster management authorities in Bangladesh, Sri Lanka, and several African countries. However, preparedness for riverine and flash flooding inland remains less advanced than coastal cyclone management. The interaction between climate change and increasing cyclone intensity — Fani's rapid intensification was a climate-change-consistent event — requires continuous investment in preparedness infrastructure.",
      tags: ['odisha', 'disaster-management', 'cyclone', 'OSDMA', 'preparedness', 'Fani'],
      publishedAt: new Date(),
      stateId: states['OD'],
    },

    {
      slug: 'telangana-rhythu-bandhu',
      title: "Telangana's Rythu Bandhu Scheme",
      category: ArticleCategory.STATE_INSIGHT,
      summary: "Telangana's Rythu Bandhu (Farmers' Investment Support Scheme) provides direct income support of ₹10,000 per acre per season to all farmers regardless of landholding size, making it India's first universal farm investment support scheme and a model studied internationally.",
      body: `<b>Overview</b>

Rythu Bandhu (meaning "Friend of Farmers") was launched by the Telangana government in May 2018, becoming India's first universal farm investment support programme. Unlike targeted schemes, Rythu Bandhu provides ₹5,000 per acre per season (₹10,000 per acre annually) to all farmers holding patta land, regardless of whether they are large or small holders, and regardless of the crop they choose to grow.

<b>Mechanics of Implementation</b>

The scheme is implemented using Telangana's Dharani — an integrated land records management system — to identify beneficiaries. Cheques or direct bank transfers are made to registered landowners before each sowing season (Kharif and Rabi). The state's investment in digitising land records enabled rapid, near-universal coverage. As of 2024, over 58 lakh farmer families have received benefits under Rythu Bandhu.

<b>Financial Scale</b>

The annual budget for Rythu Bandhu is approximately ₹15,000–17,000 crore, constituting the single largest line item in the Telangana state budget. The cumulative disbursement since 2018 exceeds ₹70,000 crore.

<b>Impact on Agrarian Distress</b>

Supporters argue that Rythu Bandhu has significantly reduced farmer indebtedness to money lenders and input retailers by providing upfront investment capital. Agricultural growth in Telangana has accelerated, and the state has shown a marked increase in irrigated area under the Kaleshwaram Lift Irrigation Project. Studies by the International Food Policy Research Institute (IFPRI) found significant improvements in farmer welfare metrics in Rythu Bandhu districts compared to control districts.

<b>Criticisms and Exclusions</b>

The scheme's universality — covering large landowners equally with small farmers — has been criticised as regressive, with the majority of benefits accruing to the upper strata of the farming community. Tenant farmers — who constitute a significant proportion of cultivators but do not hold patta land — are entirely excluded. The PM-KISAN scheme at the Central level (₹6,000/year) was explicitly modelled on Rythu Bandhu but limited to small and marginal farmers.

<b>Change of Government</b>

The Bharat Rashtra Samithi (BRS) government under K. Chandrashekar Rao that launched the scheme lost power in December 2023. The incoming Congress government reviewed the scheme but maintained it with modifications — renaming it "Rayitu Bharosa" and increasing the benefit to ₹12,000 per acre per annum.`,
      impactAnalysis: 'Rythu Bandhu/Rayitu Bharosa has become a reference point in debates about universal basic income for farmers versus targeted support. Andhra Pradesh, Karnataka, and several other states have adopted similar investment support schemes. The Central PM-KISAN scheme drew heavily on the model. The debate on universality versus targeting — productivity-neutral support versus coverage of the most vulnerable — remains unresolved in agricultural policy.',
      tags: ['telangana', 'agriculture', 'Rythu-Bandhu', 'farmer-welfare', 'land-records', 'PM-KISAN'],
      publishedAt: new Date(),
      stateId: states['TG'],
    },

  ]

  let created = 0
  let skipped = 0

  for (const a of articles) {
    const { stateId, ...rest } = a
    try {
      await prisma.article.upsert({
        where: { slug: a.slug },
        update: {},
        create: {
          ...rest,
          ...(stateId ? { stateId } : {}),
        },
      })
      console.log(`  ✓ ${a.title}`)
      created++
    } catch (e: any) {
      console.error(`  ✗ Failed: ${a.slug} — ${e.message}`)
      skipped++
    }
  }

  console.log(`\n✅ Seed complete!`)
  console.log(`   States:   ${Object.keys(states).length}`)
  console.log(`   Articles: ${created} created, ${skipped} skipped`)
  console.log(`\n   Open http://localhost:3000 to see the results`)
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())