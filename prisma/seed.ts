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

    // ── LAWS ──────────────────────────────────────────────────────────────────

    {
      slug: 'right-to-information-act-2005',
      title: 'Right to Information Act, 2005',
      category: ArticleCategory.LAW,
      summary: 'Empowers every Indian citizen to request information from any public authority, mandating timely responses and establishing Information Commissions for appeals.',
      body: `## Overview\n\nThe Right to Information Act, 2005 (RTI Act) is one of the most transformative pieces of legislation in independent India. It establishes a legal framework under which any citizen can request documents, data, or information held by public authorities.\n\n## Key Provisions\n\n- Any citizen can file an RTI application with the Public Information Officer (PIO) of any Central or State government body\n- Response must be provided within **30 days** (48 hours in cases involving life or liberty)\n- Application fee: ₹10 for Central government (varies by state)\n- Penalty for non-compliance: ₹250/day, up to ₹25,000\n- First appeal lies with a senior officer; second appeal with the Information Commission\n\n## Exemptions (Section 8)\n\nCertain categories are exempt: national security, Cabinet papers, trade secrets, personal privacy, and information that would impede investigation. However, even exempt information can be disclosed if public interest outweighs harm.\n\n## How to File\n\n1. Write a plain-language application addressed to the PIO\n2. Pay ₹10 via postal order, DD, or online\n3. Submit by post, in person, or through the RTI Online Portal (rtionline.gov.in)\n4. If unsatisfied, file a first appeal within 30 days of the response`,
      impactAnalysis: 'Over 6 million RTI applications are filed annually in India. Studies demonstrate measurable reductions in corruption at local government levels. The Act has been instrumental in exposing irregularities in the Public Distribution System, MGNREGA payments, and municipal functioning.',
      tags: ['transparency', 'governance', 'fundamental-rights', 'accountability'],
      publishedAt: new Date(),
    },

    {
      slug: 'protection-of-children-sexual-offences-act-2012',
      title: 'Protection of Children from Sexual Offences Act (POCSO), 2012',
      category: ArticleCategory.LAW,
      summary: 'POCSO defines and criminalises all forms of sexual abuse against minors below 18 years, with child-friendly procedures for reporting, investigation, and trial.',
      body: `## Overview\n\nThe Protection of Children from Sexual Offences (POCSO) Act, 2012 is a comprehensive law dealing with sexual offences against children. It defines a "child" as any person below the age of 18 years.\n\n## Offences Covered\n\n- Penetrative sexual assault (minimum 7 years, extendable to life)\n- Aggravated penetrative sexual assault (minimum 10 years)\n- Sexual assault and aggravated sexual assault\n- Sexual harassment and use of a child for pornography\n\n## Child-Friendly Procedures\n\n- Child's statement recorded at home or a comfortable place of their choice\n- Cases must be tried in Special Courts within 1 year\n- Identity of the child must not be disclosed\n- No cross-examination without prior permission\n\n## 2019 Amendment\n\nThe Criminal Law (Amendment) Act 2019 introduced the death penalty for penetrative sexual assault on children below 12 years.`,
      impactAnalysis: 'POCSO has significantly increased reporting of child sexual abuse. NCRB data shows registered cases rose from 8,904 in 2014 to over 53,000 in 2022. However, conviction rates remain low at around 30% due to delays and evidentiary challenges.',
      tags: ['child-safety', 'criminal-law', 'protection', 'justice'],
      publishedAt: new Date(),
    },

    {
      slug: 'aadhaar-act-2016',
      title: 'Aadhaar (Targeted Delivery of Financial Subsidies) Act, 2016',
      category: ArticleCategory.LAW,
      summary: "Provides statutory backing for India's biometric identity system managed by UIDAI, enabling targeted delivery of government subsidies and services.",
      body: `## Overview\n\nThe Aadhaar Act, 2016 gives legal standing to the Unique Identification Authority of India (UIDAI) and the Aadhaar number — a 12-digit biometric identifier issued to every resident of India.\n\n## What Aadhaar Contains\n\n- 10 fingerprints\n- 2 iris scans\n- Facial photograph\n- Demographic data (name, date of birth, address)\n\n## Key Sections\n\n- **Section 7**: Aadhaar mandatory for receiving government subsidies and benefits\n- **Section 29**: Prohibits sharing or publishing Aadhaar data\n- **Section 33**: Allows disclosure in national security interests on court order\n\n## Supreme Court Judgment (2018)\n\nIn *K.S. Puttaswamy v. Union of India*, a 5-judge bench upheld Aadhaar for government welfare but struck down its mandatory use by private companies and for mobile SIM verification.`,
      impactAnalysis: 'Over 1.38 billion Aadhaar numbers have been issued. The government claims direct benefit transfer (DBT) has saved over ₹2.73 lakh crore by eliminating ghost beneficiaries. Critics highlight exclusion errors and privacy concerns around data centralisation.',
      tags: ['identity', 'biometrics', 'privacy', 'welfare', 'technology'],
      publishedAt: new Date(),
    },

    {
      slug: 'forest-rights-act-2006',
      title: 'Scheduled Tribes and Other Traditional Forest Dwellers (Recognition of Forest Rights) Act, 2006',
      category: ArticleCategory.LAW,
      summary: 'Recognises and vests forest rights in scheduled tribes and other traditional forest dwellers who have been occupying forest land for generations.',
      body: `## Overview\n\nThe Forest Rights Act (FRA), 2006 recognises the rights of forest-dwelling communities who were historically denied ownership over land they had cultivated for generations due to the colonial-era forest classification system.\n\n## Rights Conferred\n\n- **Individual rights**: Right to live on and cultivate land up to 4 hectares\n- **Community rights**: Access to minor forest produce (tendu leaves, bamboo, etc.)\n- **Habitat rights**: Rights of particularly vulnerable tribal groups over their habitat\n\n## Gram Sabha Role\n\nThe Gram Sabha (village assembly) is the primary authority for receiving, verifying, and approving forest rights claims — a significant decentralisation of power.\n\n## Implementation Status\n\nAs of 2023, over 22 lakh titles have been distributed covering approximately 68 lakh acres. Rejection rates remain high — over 40% of claims have been rejected, many without giving claimants a hearing.`,
      impactAnalysis: 'The FRA has empowered millions of adivasi households with legal land security. However, implementation has been deeply uneven across states. Odisha and Chhattisgarh have distributed the most titles, while states like Gujarat have high rejection rates.',
      tags: ['tribal-rights', 'forest', 'land-rights', 'adivasi', 'environment'],
      publishedAt: new Date(),
      stateId: states['MH'],
    },

    // ── AMENDMENTS ────────────────────────────────────────────────────────────

    {
      slug: '103rd-constitutional-amendment-ews-reservation',
      title: '103rd Constitutional Amendment — EWS Reservation, 2019',
      category: ArticleCategory.AMENDMENT,
      summary: 'Introduced 10% reservation for Economically Weaker Sections in government jobs and educational institutions, extending beyond existing SC/ST/OBC quotas.',
      body: `## Overview\n\nThe Constitution (One Hundred and Third Amendment) Act, 2019 inserted **Articles 15(6)** and **16(6)**, enabling the state to make special provisions — including reservation up to 10% — for Economically Weaker Sections (EWS) of citizens.\n\n## Who Qualifies?\n\nPersons with annual family income below **₹8 lakh** who do not belong to SC, ST, or OBC (non-creamy layer) categories. Additional criteria include agricultural land below 5 acres and residential property below 1,000 sq ft.\n\n## Supreme Court Verdict (November 2022)\n\nIn *Janhit Abhiyan v. Union of India*, a 5-judge Constitution Bench upheld the amendment's validity by a **3:2 majority**. The dissenting judges argued it violated the basic structure of the Constitution by breaching the 50% ceiling on reservations.`,
      impactAnalysis: 'The amendment pushed total reservation in Central government jobs to 59.5%, exceeding the 50% cap upheld in Indra Sawhney. Critics argue the eligibility threshold is arbitrary. Proponents argue it addresses economic deprivation among groups that lacked any affirmative action benefit.',
      tags: ['constitution', 'reservation', 'EWS', 'amendment', 'supreme-court'],
      publishedAt: new Date(),
    },

    {
      slug: 'citizenship-amendment-act-2019',
      title: 'Citizenship Amendment Act, 2019',
      category: ArticleCategory.AMENDMENT,
      summary: 'Provides expedited citizenship to Hindu, Sikh, Buddhist, Jain, Parsi, and Christian migrants from Pakistan, Bangladesh, and Afghanistan who entered India before December 2014.',
      body: `## Overview\n\nThe Citizenship (Amendment) Act, 2019 (CAA) amends the Citizenship Act of 1955 to provide a pathway to Indian citizenship for six religious minority communities from three neighbouring countries: Pakistan, Bangladesh, and Afghanistan.\n\n## Key Changes\n\n- Reduces the residency requirement from **11 years to 5 years** for eligible groups\n- Covers only those who entered India **on or before December 31, 2014**\n- Muslims from these three countries are explicitly **not included**\n- Does **not** apply to tribal areas of Assam, Meghalaya, Mizoram, and Tripura\n\n## Controversy\n\nThe Act was widely criticised for being the first Indian citizenship law to make religion an explicit criterion. Critics argued it violates **Article 14** (right to equality). Large-scale protests erupted across India in late 2019 and early 2020.\n\n## Rules Notified (March 2024)\n\nThe CAA Rules were notified on March 11, 2024 — over four years after the Act's passage — enabling the citizenship application process through an online portal.`,
      impactAnalysis: 'The CAA triggered some of the largest protests since Independence. In the Northeast, protests focused on demographic concerns. As of mid-2024, over 14,000 applications have been submitted through the portal.',
      tags: ['citizenship', 'religion', 'minority', 'amendment', 'northeast'],
      publishedAt: new Date(),
    },

    // ── POLICIES ──────────────────────────────────────────────────────────────

    {
      slug: 'national-education-policy-2020',
      title: 'National Education Policy, 2020',
      category: ArticleCategory.POLICY,
      summary: 'Comprehensive overhaul of the Indian education system from early childhood to higher education, emphasising mother tongue instruction, multidisciplinary learning, and vocational integration.',
      body: `## Overview\n\nThe National Education Policy 2020 (NEP 2020) replaces the 34-year-old NPE 1986. It is the most sweeping reform of India's education architecture since Independence.\n\n## New Curricular Structure\n\nOld: **10+2** → New: **5+3+3+4**\n\n- Foundational stage (ages 3–8): Pre-school to Grade 2\n- Preparatory stage (ages 8–11): Grades 3–5\n- Middle stage (ages 11–14): Grades 6–8\n- Secondary stage (ages 14–18): Grades 9–12\n\n## Key Reforms\n\n- Mother tongue as medium of instruction up to at least Grade 5\n- Vocational education integrated from Grade 6\n- Multiple entry/exit options in higher education with Academic Bank of Credits (ABC)\n- GER target: 50% by 2035`,
      impactAnalysis: 'NEP 2020 affects over 250 million students and 15 million teachers. Its mother tongue instruction policy has been praised by linguists but faces infrastructure challenges. Full implementation is expected to take until 2040.',
      tags: ['education', 'policy', 'higher-education', 'reform', 'language'],
      publishedAt: new Date(),
    },

    {
      slug: 'mgnrega-2005',
      title: 'Mahatma Gandhi National Rural Employment Guarantee Act (MGNREGA), 2005',
      category: ArticleCategory.POLICY,
      summary: 'Guarantees 100 days of wage employment per year to every rural household whose adult members volunteer to do unskilled manual work.',
      body: `## Overview\n\nMGNREGA is one of the world's largest public works programmes. Enacted in 2005 and implemented nationwide by 2008, it guarantees a legal right to work for rural households.\n\n## Core Entitlement\n\n- **100 days** of guaranteed wage employment per household per year\n- Work must be provided within **15 days** of application; otherwise an unemployment allowance is paid\n- At least **one-third** of beneficiaries must be women\n- Work sites must be within **5 km** of the applicant's village\n\n## Wages\n\nWages are set by state governments and indexed to CPI. As of 2024, they range from ₹221/day (Chhattisgarh) to ₹357/day (Haryana).\n\n## Transparency\n\n- Social audits mandatory every 6 months\n- Payments directly to Jan Dhan/Aadhaar-linked bank accounts`,
      impactAnalysis: "MGNREGA has provided employment to over 150 million households since inception. It has demonstrably reduced rural-urban migration and improved women's labour force participation. Budget allocation was ₹73,000 crore in 2024-25.",
      tags: ['employment', 'rural', 'poverty', 'welfare', 'labour'],
      publishedAt: new Date(),
    },

    {
      slug: 'pm-jan-dhan-yojana',
      title: 'Pradhan Mantri Jan Dhan Yojana (PMJDY)',
      category: ArticleCategory.POLICY,
      summary: 'National financial inclusion mission launched in 2014 to provide universal access to banking, insurance, and pension services to the unbanked population.',
      body: `## Overview\n\nLaunched on August 28, 2014, PMJDY is the world's largest financial inclusion initiative, aimed at bringing every unbanked Indian household into the formal banking system.\n\n## What the Account Offers\n\n- **Zero balance** bank account\n- **RuPay debit card** with ₹2 lakh accident insurance cover\n- **₹10,000 overdraft facility** for accounts older than 6 months\n- Direct benefit transfers from government schemes credited directly\n\n## Progress (April 2024)\n\n- **53 crore** accounts opened\n- **₹2.31 lakh crore** balance in PMJDY accounts\n- **55.6%** of accounts held by women\n- **67%** of accounts in rural/semi-urban areas`,
      impactAnalysis: 'PMJDY achieved universal bank account coverage faster than any programme in history. During COVID-19, ₹500/month was transferred to 20 crore women Jan Dhan account holders within days. The scheme is credited with formalising over ₹14 lakh crore in savings.',
      tags: ['financial-inclusion', 'banking', 'welfare', 'JAM', 'poverty'],
      publishedAt: new Date(),
    },

    // ── HISTORY ───────────────────────────────────────────────────────────────

    {
      slug: 'partition-of-india-1947',
      title: 'Partition of India, 1947',
      category: ArticleCategory.HISTORY,
      summary: "The division of British India into the independent nations of India and Pakistan on August 14–15, 1947, accompanied by one of history's largest forced migrations and communal violence.",
      body: `## Background\n\nThe Partition of British India into two independent dominions — India and Pakistan — on August 14–15, 1947 was the culmination of decades of communal tension, the two-nation theory championed by Muhammad Ali Jinnah, and the accelerating British withdrawal following World War II.\n\n## The Mountbatten Plan\n\nLord Mountbatten announced the partition plan on June 3, 1947. Sir Cyril Radcliffe, a British lawyer who had never visited India, drew the boundary lines — the Radcliffe Line — in just five weeks.\n\n## The Human Cost\n\n- **10–20 million** people displaced in the largest forced migration in history\n- **200,000–2 million** deaths from communal violence\n- Punjab and Bengal were divided, splitting communities, families, and farmland\n\n## Aftermath\n\nThe trauma of Partition shaped both nations' foundational identities, foreign policies, and domestic politics for generations.`,
      impactAnalysis: "Partition remains the defining trauma of South Asian modernity. It produced two nuclear-armed states in a state of permanent rivalry over Kashmir and shaped the internal politics of both nations around communal identities.",
      tags: ['partition', 'independence', '1947', 'communal-violence', 'pakistan'],
      publishedAt: new Date(),
    },

    {
      slug: 'the-emergency-1975-1977',
      title: 'The Emergency, 1975–1977',
      category: ArticleCategory.HISTORY,
      summary: 'A 21-month period when Prime Minister Indira Gandhi suspended civil liberties, censored the press, and ruled by decree after the Allahabad High Court invalidated her election.',
      body: `## What Happened\n\nOn June 25, 1975, President Fakhruddin Ali Ahmed proclaimed a state of Emergency under Article 352 of the Constitution on the advice of Prime Minister Indira Gandhi. It lasted until March 21, 1977 — 21 months.\n\n## Trigger\n\nThe Allahabad High Court on June 12, 1975 found Indira Gandhi guilty of corrupt electoral practices and barred her from holding office for six years. Rather than resign, she declared Emergency.\n\n## What It Meant\n\n- Fundamental rights suspended\n- Press censorship — newspapers published blank editorial columns in protest\n- Over **1,10,000 people** detained without trial\n- Opposition leaders arrested: JP Narayan, Morarji Desai, Atal Bihari Vajpayee\n- Forced sterilisation programme under Sanjay Gandhi\n\n## Aftermath\n\nIndira Gandhi called elections in January 1977 and lost decisively to the Janata Party — the first non-Congress government in India.`,
      impactAnalysis: "The Emergency is considered the darkest chapter of Indian democracy. Its legacy shaped the judiciary's subsequent assertiveness, the rise of the BJP from the JP Movement, and a deep public wariness of authoritarian governance.",
      tags: ['emergency', 'indira-gandhi', 'democracy', 'civil-liberties', '1975'],
      publishedAt: new Date(),
    },

    // ── CULTURE ───────────────────────────────────────────────────────────────

    {
      slug: 'classical-dance-forms-of-india',
      title: 'Classical Dance Forms of India',
      category: ArticleCategory.CULTURE,
      summary: 'India has eight Sangeet Natak Akademi-recognised classical dance forms, each rooted in distinct regional traditions, texts, and devotional practices.',
      body: `## Overview\n\nIndia's classical dance forms are among the world's oldest performance traditions. The Sangeet Natak Akademi recognises **eight classical dance forms**, each anchored in the Natyashastra — Bharata Muni's 2,000-year-old treatise on performing arts.\n\n## The Eight Forms\n\n| Dance Form | Origin | Key Feature |\n|---|---|---|\n| **Bharatanatyam** | Tamil Nadu | Geometric postures, Nritta-Nritya-Natya triangle |\n| **Kathak** | North India | Footwork (tatkar), pirouettes (chakkar), Mughal influence |\n| **Odissi** | Odisha | Tribhangi (three-body bend), lyrical and sculptural |\n| **Kuchipudi** | Andhra Pradesh | Dance-drama; originally all-male Brahmin performers |\n| **Manipuri** | Manipur | Soft, circular movements; Vaishnavite devotion |\n| **Mohiniyattam** | Kerala | Graceful, swaying movements; performed by women |\n| **Kathakali** | Kerala | Elaborate costume and makeup; all-night dance-drama |\n| **Sattriya** | Assam | Rooted in Vaishnavite monasteries (Sattras) |\n\n## The Nine Rasas\n\nAll classical forms draw on the nine emotions (navarasas): shringara (love), hasya (humour), karuna (sorrow), raudra (fury), vira (heroism), bhayanaka (terror), bibhatsa (disgust), adbhuta (wonder), and shanta (peace).`,
      impactAnalysis: 'Classical dance forms face declining patronage and competition from contemporary dance. Government funding through Sangeet Natak Akademi and ICCR supports these traditions. The rise of digital platforms has both widened audiences and commodified performance.',
      tags: ['dance', 'classical-arts', 'culture', 'natyashastra', 'heritage'],
      publishedAt: new Date(),
    },

    // ── DIVERSITY ─────────────────────────────────────────────────────────────

    {
      slug: 'linguistic-diversity-of-india',
      title: 'Linguistic Diversity of India',
      category: ArticleCategory.DIVERSITY,
      summary: 'India is home to 121 languages spoken by more than 10,000 people, belonging to four major language families, with 22 languages recognised in the Eighth Schedule of the Constitution.',
      body: `## Scale of Diversity\n\nThe 2011 Census recorded **19,500 distinct mother tongues**. Of these, 121 languages are spoken by 10,000 or more people. India has no single national language — Hindi is the official language of the Union, with English as an associate official language.\n\n## Language Families\n\n| Family | Major Languages |\n|---|---|\n| **Indo-Aryan** (78% of speakers) | Hindi, Bengali, Marathi, Gujarati, Punjabi, Odia, Urdu |\n| **Dravidian** (19.6%) | Tamil, Telugu, Kannada, Malayalam |\n| **Austroasiatic** (1.2%) | Santali, Mundari, Ho |\n| **Sino-Tibetan** (0.97%) | Bodo, Manipuri, Mizo |\n\n## The Eighth Schedule\n\nThe Eighth Schedule lists **22 scheduled languages** entitled to representation on the Official Languages Commission. There are ongoing demands to include languages like Tulu, Rajasthani, and Bhojpuri.\n\n## Endangered Languages\n\nUNESCO's Atlas of the World's Languages in Danger lists over **197 Indian languages** as vulnerable or endangered.`,
      impactAnalysis: "Linguistic diversity is both India's cultural wealth and a governance challenge. Digital technology poses both a threat (as English dominates online) and an opportunity — Indian language internet users now outnumber English users.",
      tags: ['language', 'diversity', 'constitution', 'culture', 'eighth-schedule'],
      publishedAt: new Date(),
    },

    // ── STATE INSIGHTS ────────────────────────────────────────────────────────

    {
      slug: 'kerala-development-model',
      title: 'The Kerala Development Model',
      category: ArticleCategory.STATE_INSIGHT,
      summary: "Kerala's high human development indicators — literacy, life expectancy, low infant mortality — at a relatively low per-capita income have made it a globally studied model for social development.",
      body: `## What Is the Kerala Model?\n\nThe "Kerala Model" refers to the state's achievement of human development outcomes comparable to developed nations despite a per-capita income well below the national average.\n\n## Key Indicators (2023)\n\n| Indicator | Kerala | India Average |\n|---|---|---|\n| Literacy rate | 96.2% | 77.7% |\n| Infant mortality rate | 6/1,000 | 28/1,000 |\n| Life expectancy | 75 years | 70 years |\n| Sex ratio | 1,084/1,000 | 943/1,000 |\n\n## Historical Roots\n\n1. Early social reform movements (19th century)\n2. Progressive princely states — Travancore and Cochin invested in public education and health\n3. Land reform (1969) — abolished landlordism\n4. Strong left political tradition prioritising public services\n\n## Kudumbashree\n\nThe Kudumbashree Mission (1998) is one of the world's largest self-help group networks, with 45 lakh women members running microenterprises.`,
      impactAnalysis: 'The Kerala Model has proven that social development does not require high income. However, Kerala faces new challenges: an ageing population, high youth unemployment, and fiscal stress from high public expenditure commitments.',
      tags: ['kerala', 'development', 'human-development', 'education', 'health'],
      publishedAt: new Date(),
      stateId: states['KL'],
    },

    {
      slug: 'delhi-air-pollution-crisis',
      title: "Delhi's Air Pollution Crisis",
      category: ArticleCategory.STATE_INSIGHT,
      summary: "Delhi regularly records among the world's worst air quality, driven by vehicle emissions, industrial pollution, stubble burning in Punjab and Haryana, and seasonal weather patterns.",
      body: `## The Scale of the Problem\n\nDelhi has ranked as the world's most polluted capital city for several consecutive years. The average annual PM2.5 level is **89 µg/m³** — nearly 18 times the WHO guideline of 5 µg/m³.\n\n## Sources of Pollution\n\n| Source | Contribution to PM2.5 |\n|---|---|\n| Vehicles | 28–40% |\n| Industry and power plants | 20–30% |\n| Stubble burning (Oct–Nov) | 15–40% (seasonal) |\n| Construction dust | 8–14% |\n\n## Policy Responses\n\n- **Odd-Even scheme**: Alternate-day vehicle rationing during emergencies\n- **GRAP**: Four-tier response system based on AQI levels\n- **BS-VI fuel standards**: Leapfrogged from BS-IV in 2020\n- **National Clean Air Programme (NCAP)**: Targets 40% reduction in PM2.5 by 2026\n- **Electric bus fleet**: Delhi now has 1,900+ electric buses`,
      impactAnalysis: "Air pollution costs Delhi an estimated 5,000–10,000 premature deaths annually. Children in Delhi have 10% lower lung capacity than peers in less polluted cities. The Lancet estimates air pollution costs India 1.36% of GDP annually.",
      tags: ['delhi', 'pollution', 'environment', 'health', 'climate'],
      publishedAt: new Date(),
      stateId: states['DL'],
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
