/* ============================================================================
   content.ts — all copy for the portfolio lives here.
   Edit this file to update text; layout components never hard-code copy.

   Rules that were baked into this content (keep them if you edit):
   - Every claim is backed by a specific number, named client, competition, or
     deliverable. No hype adjectives.
   - Facts marked with `flag` in the code below use deliberately safe phrasing.
     Do not strengthen them without confirming the underlying fact first.
   - Do NOT add "top X%" / "1 of N" framing to the ARAI award.
   - Do NOT use "p<0.01" anywhere.
   ========================================================================== */

export const site = {
  name: 'Shantanu Patil',
  role: 'Mechanical Engineer → Operations & Strategy Consultant',
  positioningLine:
    'Mechanical Engineer → Operations & Strategy Consultant | EV, Automotive & Mobility',
  subPositioning:
    '3 years certifying EV chargers for Tesla and VinFast. 18 months delivering quantified operations turnarounds pro bono. Now building the strategy-consulting case to match.',
  thesis:
    'An engineer who has already done operations consulting, moving into strategy consulting, anchored in automotive, EV and mobility.',
  metaDescription:
    'Shantanu Patil — mechanical engineer and EV charger compliance specialist (ARAI) moving into operations and strategy consulting. Quantified pro-bono turnarounds, international motorsport results, MBA-equivalent at Masters’ Union.',
  email: 'shantanuspatil2002@gmail.com',
  // TODO(shantanu): replace with your real LinkedIn URL before publishing.
  linkedin: 'https://www.linkedin.com/in/CHANGE-ME',
  // TODO(shantanu): add this file to /public before publishing.
  resume: '/resume-shantanu-patil.pdf',
  ogImage: '/og-image.png',
} as const

export type NavItem = { id: string; label: string }

export const nav: NavItem[] = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'work', label: 'Case Studies' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'insights', label: 'Insights' },
  { id: 'skills', label: 'Skills' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'contact', label: 'Contact' },
]

/* -------------------------------------------------- Hero */

export const hero = {
  kicker: 'Portfolio · Blueprint to Boardroom',
  heading: 'Shantanu Patil',
  positioning: site.positioningLine,
  sub: site.subPositioning,
  ctas: [
    { label: 'Download Resume', href: site.resume, kind: 'primary' as const, download: true },
    { label: 'Email Me', href: `mailto:${site.email}`, kind: 'ghost' as const },
    { label: 'LinkedIn', href: site.linkedin, kind: 'ghost' as const, external: true },
  ],
  quickStats: [
    { value: '3 yrs', label: 'EV charger compliance at ARAI' },
    { value: '18 mo', label: 'pro-bono operations consulting' },
    { value: '337/340', label: 'GRE' },
    { value: 'AIR 1', label: 'BAJA SAE India eBAJA 2023' },
  ],
}

/* -------------------------------------------------- About / The Arc */

export const about = {
  heading: 'The Arc',
  lede:
    'Diploma → mechanical engineering → EV compliance engineer at a national automotive R&D body → pro-bono operations consultant with quantified results → international motorsport team leadership → MBA, pivoting into strategy consulting in the same domain.',
  beats: [
    {
      tag: 'Foundation',
      title: 'Engineer, from the shop floor up',
      body:
        'B.E. in Mechanical Engineering from D.Y. Patil College of Engineering, Pune (8.35 CGPA), entered from a diploma background rather than a straight-through degree path — hands-on manufacturing exposure most peers entering engineering degrees directly did not have.',
    },
    {
      tag: 'Engineer',
      title: 'EV charger compliance at ARAI',
      body:
        'Around 3 years as a Research Engineer at the Automotive Research Association of India (ARAI), India’s apex automotive homologation and certification body — specialising in EV charger compliance testing (IEC 61851, IS 17017, AIS, CMVR) for OEM clients including Tesla, VinFast and Tata Motors / Tata AutoComp.',
    },
    {
      tag: 'Operator',
      title: 'Operations consulting, pro bono',
      body:
        'In parallel, ran an 18-month pro-bono engagement (Prodmax Global) applying lean and Six Sigma methods to a real manufacturing business — not a case study, an actual P&L impact, CEO-verified in writing.',
    },
    {
      tag: 'Strategist-in-progress',
      title: 'MBA, pivoting into strategy',
      body:
        'Now a PGP-TBM (MBA-equivalent) student at Masters’ Union, Gurugram, targeting tier-1 / tier-2 operations and strategy consulting roles in automotive, EV and mobility — treating the domain expertise as a wedge, not a constraint.',
    },
  ],
  close: 'Most people get into consulting and then learn an industry. I learned the industry first.',
}

/* -------------------------------------------------- Experience timeline */

export type ExperienceEntry = {
  org: string
  title: string
  dates: string
  note?: string
  bullets: { text: string; flag?: string }[]
}

export const experience: ExperienceEntry[] = [
  {
    org: 'ARAI — Automotive Research Association of India',
    title: 'Research Engineer, EV Charger Compliance',
    dates: 'Jul 2023 – Jun 2026',
    note: 'Progressed from Trainee Engineer to Research Engineer.',
    bullets: [
      {
        text:
          'Certified the Tesla V4 Supercharger (250 kW, CCS2) against India’s IS 17017 series — prepared ARAI’s compliance statement end-to-end, not just individual test runs. Issued July 2025.',
      },
      {
        text:
          'Built India’s first DC EMC test setup for EV charger certification, opening a testing capability that did not previously exist in the country.',
      },
      {
        text:
          'Directed a two-engineer core team overseeing seven contract staff within an EV-charger testing vertical generating ~₹8 crore in FY25 revenue, inside a ~₹110 crore division.',
      },
      {
        text: 'Recognised as ARAI’s Best Contract Executive, 2025 (HTC-AED department).',
        flag:
          'Do not add a "top X%" or "1 of N" framing unless confirmed with ARAI HR — the certificate does not state a recipient count.',
      },
      {
        text:
          'Ran a separate optimisation-modelling project, independent of the Prodmax engagement, delivering ~14% profit improvement.',
      },
    ],
  },
  {
    org: 'Prodmax Global',
    title: 'Independent Operations Consultant (pro bono)',
    dates: 'Oct 2023 – Nov 2025',
    bullets: [
      {
        text:
          'Phase 1 — Lean transformation: 7.12% quarterly revenue increase, 13.4% waste reduction, and lead time cut by 2 min 35 sec, using CPM, 5S, Kanban and SMED.',
      },
      {
        text:
          'Phase 2 — Six Sigma DMAIC: raised resource utilisation from 70% to 91% and delivered a 14.4% monthly profit improvement, using a linear-programming optimiser (Excel Solver) to validate the resourcing model. CEO-verified in writing.',
      },
    ],
  },
  {
    org: 'Masters’ Union, Gurugram',
    title: 'PGP-TBM (Technology & Business Management), Cohort 7',
    dates: 'Jun 2026 – present',
    note: 'Expected completion: TODO(shantanu) — add graduation date.',
    bullets: [
      { text: 'One of 5 scholarship recipients across a 470-member batch.' },
      { text: 'Domain-locked into Consulting (primary) and Supply Chain & Operations (secondary).' },
      {
        text:
          'Active across multiple case competitions and the Masters’ Union Consulting Club (MUCC) — see Case Studies.',
      },
    ],
  },
]

/* -------------------------------------------------- Case studies */

export type CaseStudy = {
  id: string
  index: string
  title: string
  frameLabel: string
  situation: string
  approach: string
  result: string
  headlineStat: { value: string; label: string }
  metrics: { value: string; label: string }[]
  link?: { href: string; label: string }
  frameNote: string
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'dmaic',
    index: '01',
    title: 'Six Sigma DMAIC turnaround at Prodmax Global',
    frameLabel: 'Proof: operations consulting, delivered',
    situation: 'A manufacturing SME operating below capacity, with no formal process discipline.',
    approach:
      'Applied Six Sigma DMAIC. Built a linear-programming resourcing model in Excel Solver to locate the utilisation bottleneck. Ran a prior lean / 5S / Kanban / SMED pass first to clear the easy waste.',
    result:
      'Resource utilisation up from 70% to 91%. 14.4% monthly profit improvement. CEO-verified in writing.',
    headlineStat: { value: '70 → 91%', label: 'resource utilisation' },
    metrics: [
      { value: '+14.4%', label: 'monthly profit' },
      { value: 'CEO', label: 'verified in writing' },
      { value: 'DMAIC', label: 'method' },
    ],
    frameNote:
      'The single strongest "I can do operations consulting work, not just talk about it" proof point on this site.',
  },
  {
    id: 'tesla-v4',
    index: '02',
    title: 'Tesla V4 Supercharger certification (ARAI)',
    frameLabel: 'Deep technical credibility',
    situation:
      'A new-generation 250 kW CCS2 charger needed certification against India’s IS 17017 series before market entry.',
    approach:
      'Owned the compliance statement end-to-end — test protocol design, execution, documentation — not a single test in isolation.',
    result:
      'Certification issued July 2025. Separately, built India’s first DC EMC test setup, closing a gap in the national testing infrastructure.',
    headlineStat: { value: '250 kW', label: 'CCS2, certified to IS 17017' },
    metrics: [
      { value: 'Jul 2025', label: 'certification issued' },
      { value: '1st', label: 'DC EMC setup in India' },
      { value: 'End-to-end', label: 'compliance statement ownership' },
    ],
    frameNote:
      'EV and automotive expertise that is operator-grade, not MBA-case-study-grade.',
  },
  {
    id: 'baja',
    index: '03',
    title: 'Team Predators Racing — BAJA SAE',
    frameLabel: 'Commercial leadership under pressure',
    situation:
      'Competing in BAJA SAE India (eBAJA and mBAJA) and BAJA SAE International (New York) — an all-terrain vehicle design-build-race competition judged on engineering and on the business case (cost report, sales presentation).',
    approach:
      'Led sponsorship strategy, team strategy and the sales presentation at the international round — raised sponsorship, built the commercial case, and presented it.',
    result:
      'AIR 1 nationally at eBAJA 2023 (1 of 81 teams). Competed at mBAJA 2022 (1 of 138 teams). World Rank 4 of 88 teams at the BAJA SAE International Sales Presentation, New York.',
    headlineStat: { value: 'AIR 1', label: 'eBAJA 2023 · 1 of 81 teams' },
    metrics: [
      { value: '4 / 88', label: 'World Rank, Intl Sales Presentation' },
      { value: '1 / 138', label: 'mBAJA 2022 field' },
      { value: 'New York', label: 'international round' },
    ],
    frameNote:
      'The "I can sell and lead, not just engineer" card — commercial presentation skill under competitive pressure.',
  },
  {
    id: 'voltedge',
    index: '04',
    title: 'VoltEdge Mobility — market-entry case design (MUCC)',
    frameLabel: 'Building the case, not just solving it',
    situation:
      'As a core member of the Masters’ Union Consulting Club, designed a market-entry case for an internal competition ("Consulting Roulette") built around a fictional European premium electric motorcycle maker (€420M revenue) evaluating India entry.',
    approach:
      'Built the full case pack — market sizing, competitive landscape, customer segmentation, value chain / capability analysis, forecast financials, and four market-entry options (greenfield, contract manufacturing, JV, acquisition) — plus a standardised judging rubric and live "curveball" scenario elements for ~20–25 competing teams.',
    result:
      'Ran the competition end-to-end as designer and organiser. Now scaling the same model into a pan-India, multi-campus case competition (target Oct 2026, hybrid format, finals on the Masters’ Union campus), with active sponsorship outreach to consulting firms and corporates.',
    headlineStat: { value: '20–25', label: 'teams competing on the case' },
    metrics: [
      { value: '€420M', label: 'fictional client revenue' },
      { value: '4', label: 'market-entry options modelled' },
      { value: 'Oct 2026', label: 'pan-India scale-up target' },
    ],
    frameNote:
      'The "I think like the people grading the case, not just the people solving it" card — a distinct skill from competing.',
  },
  {
    id: 'governance',
    index: '05',
    title: 'The Maharashtra Urban Adoption Compact',
    frameLabel: 'Domain expertise transfers beyond automotive',
    situation:
      'The Governance Challenge 2026, run by Samagra with the Government of Maharashtra, assigned the campus team the Urban Development sector — asking how Maharashtra becomes an urban-innovation hub by 2035.',
    approach:
      'As Team Sankalp (teammates from Pune and Thane, himself from Sangli — used deliberately as cross-regional grounding), built a policy proposal titled "The Maharashtra Urban Adoption Compact". Core thesis: "The constraint is not capital. It is the missing pathway from a validated solution to a first government order." Drew on the ARAI certification background to design the VALIDATE lever — a vehicle-certification-style approval pathway for urban innovation adoption.',
    result:
      'Proposed a five-lever framework (Discover, Validate, Approve, Buy, Scale) grounded in existing Maharashtra regulatory instruments (UDCPR, MMC Act), with a three-phase 2026–2035 roadmap and four specific regulatory asks. Submitted as a 2-page concept note plus a 3-minute pitch video. The team did not advance past the campus round.',
    headlineStat: { value: '5 levers', label: 'Discover · Validate · Approve · Buy · Scale' },
    metrics: [
      { value: '2026–35', label: 'three-phase roadmap' },
      { value: '4', label: 'specific regulatory asks' },
      { value: 'Campus round', label: 'did not advance past' },
    ],
    frameNote:
      'Applies the same certification-pathway thinking to an unrelated policy domain — pattern transfer across industries, a genuine strategy-consulting skill. A policy-design case study, not a "we won" claim.',
  },
  {
    id: 'factoryflow',
    index: '06',
    title: 'FactoryFlow AI — independent product build',
    frameLabel: 'Ship against an operational gap, don’t just analyse it',
    situation:
      'Identified a gap in Indian SME manufacturing software — existing ERP tools are built for large enterprises, not the job-work / GST / cash reality of Indian SMEs.',
    approach:
      'Designed and built a working prototype ("SAP for Indian SMEs") covering shop-floor modules (MES-style plant dashboard) and India-specific SME operational reality: job-work and Rule 55 / ITC-04 compliance, cash and receivables tracking, GST compliance, heat-number traceability, and customer scheduling.',
    result: 'Live, functioning prototype. Submitted as a course artefact at Masters’ Union.',
    headlineStat: { value: 'Live', label: 'working prototype' },
    metrics: [
      { value: 'MES', label: 'style plant dashboard' },
      { value: 'ITC-04', label: 'job-work compliance built in' },
      { value: 'GST', label: 'India-specific SME reality' },
    ],
    link: { href: 'https://factoryflow-ai-os.lovable.app', label: 'Open the live prototype' },
    frameNote:
      'The "I can identify a real operational gap and ship a product against it" card.',
  },
  {
    id: 'treasurebox',
    index: '07',
    title: 'Treasure Box Club — D2C venture, performance marketing',
    frameLabel: 'Real unit economics, not a deck about them',
    situation:
      'A team-run Delhi NCR gifting / home-decor D2C brand, built for a Masters’ Union dropshipping challenge with a ₹10L bank-reconcilable transaction target.',
    approach:
      'Owned paid advertising (Meta / Instagram) within a six-person, department-structured team (Product & Sourcing, Brand & Store, Content & Social, Performance Marketing, Operations & CX, Finance & Data). Ran physical pop-up stalls (DLF CyberHub, M3M IFC) alongside the Shopify storefront.',
    result:
      '1.1M reach. ₹12.3K total ad spend. 17K+ landing page views. 54% blended gross margin. ₹0.72 blended cost-per-view.',
    headlineStat: { value: '1.1M', label: 'reach on ₹12.3K spend' },
    metrics: [
      { value: '54%', label: 'blended gross margin' },
      { value: '₹0.72', label: 'blended cost-per-view' },
      { value: '17K+', label: 'landing page views' },
    ],
    frameNote:
      'Paid performance marketing with real unit economics. (EBITDA / margin figure omitted — tagged stale pending confirmation.)',
  },
]

/* -------------------------------------------------- Achievements */

export type Achievement = { value: string; label: string; flag?: string }

export const achievements: Achievement[] = [
  {
    value: 'Best Contract Executive',
    label: 'ARAI, 2025 (HTC-AED department)',
    flag: 'No recipient-count claim — see Experience note.',
  },
  { value: 'AIR 1', label: 'BAJA SAE India eBAJA 2023 · 1 of 81 teams' },
  { value: 'World Rank 4 / 88', label: 'BAJA SAE International Sales Presentation, New York' },
  { value: '1 of 5', label: 'Masters’ Union Merit Scholarship · 470-member batch' },
  { value: '337 / 340', label: 'GRE · Verbal 167, Quant 170, AWA 3.5' },
  { value: 'Green Belt', label: 'Six Sigma certification' },
  { value: 'Operations Analytics', label: 'Wharton certification' },
]

/* -------------------------------------------------- Insights / writing */

export type Insight = {
  title: string
  readTime: string
  excerpt: string
  href?: string
  body?: string[]
}

// Populate with ONE real piece before launch, or leave empty for the honest
// "more essays coming soon" state. Do not fabricate articles.
export const insights: Insight[] = []

export const insightPrompts = [
  'What certifying EV chargers for Tesla and VinFast taught me about India’s charging infrastructure gap.',
  'Why operations experience is underrated in strategy-consulting recruiting.',
]

/* -------------------------------------------------- Skills */

export const skills: { heading: string; items: string[] }[] = [
  {
    heading: 'Business / Strategy',
    items: [
      'Market-entry strategy',
      'Case structuring',
      'DMAIC problem-solving',
      'Lean operations (5S, Kanban, SMED, CPM)',
      'Linear programming / resource optimisation',
      'Go-to-market strategy',
      'Segmentation → Targeting → Positioning → Marketing Mix',
    ],
  },
  {
    heading: 'Technical / Domain',
    items: [
      'EV charger compliance (IEC 61851, IS 17017, AIS, CMVR)',
      'Automotive homologation',
      'Six Sigma DMAIC',
      'SQL (in progress)',
      'Excel Solver / LP modelling',
    ],
  },
  {
    heading: 'Tools',
    items: [
      'Figma',
      'PowerPoint / Figma design workflows',
      'Lovable (no-code product build)',
      'Shopify',
      'Meta Ads Manager',
    ],
  },
]

/* -------------------------------------------------- Leadership & community */

export const leadership: { title: string; body: string }[] = [
  {
    title: 'Masters’ Union Consulting Club (MUCC) — core member',
    body:
      'Built a 10-sector industry primer deck and an Industry Compendium (Figma-based sector-intelligence series, Issue 01: Indian Aviation). Organising a pan-India, multi-campus case competition (target Oct 2026).',
  },
  {
    title: 'Teach for India — volunteer teacher',
    body: '6th-grade English.',
  },
  {
    title: 'Ganesh Chaturthi 2026, Masters’ Union — organising team',
    body: 'Hostel VP team for the campus celebration.',
  },
]

/* -------------------------------------------------- Contact */

export const contact = {
  heading: 'Let’s talk',
  line: site.positioningLine,
  sub: 'Open to operations and strategy consulting roles in automotive, EV and mobility.',
}
