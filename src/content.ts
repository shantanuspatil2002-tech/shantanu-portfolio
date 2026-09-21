/* ============================================================================
   content.ts - all copy for the portfolio lives here.
   Edit this file to update text; layout components never hard-code copy.

   Rules that were baked into this content (keep them if you edit):
   - Every claim is backed by a specific number, named client, competition, or
     deliverable. No hype adjectives.
   - Facts marked with `flag` in the code below use deliberately safe phrasing.
     Do not strengthen them without confirming the underlying fact first.
   - Do NOT add "top X%" / "1 of N" framing to the ARAI award.
   - Do NOT use "p<0.01" anywhere.
   - Case studies do not carry a closing "why this card matters" note to the
     reader - that reasoning is for editing, not for the page. The
     Situation/Approach/Result block does the work on its own.
   - No section explains its own significance back to the reader (no "this
     shows I can..." framing anywhere). State the fact; let it land.

   Open items from reconciling this file against the resume (2026-09-15) -
   flagged rather than guessed at:
   - "18 months" (hero stat, quickStats, About "Operator" beat) vs the
     Prodmax Experience dates (Oct 2023 - Aug 2025 per resume, ~22 months).
     Left both as-is pending confirmation of which is the intended figure.
   - Treasure Box Club: resume says "Founder & Sole Operator"; this file's
     Case Study says a six-person, department-structured team with him
     owning paid ads. These are materially different claims about scope -
     do not silently pick one. Left as the (more detailed) existing version.
   - ARAI "Best Contract Executive" recipient-count: see the flag on that
     bullet below - a number now exists on the resume but is self-reported,
     not HR-confirmed. Do not add it to the site on the resume's say-so alone.
   ========================================================================== */

export const site = {
  name: 'Shantanu Patil',
  role: 'Mechanical Engineer → Operations & Strategy Consultant',
  positioningLine:
    'Mechanical Engineer → Operations & Strategy Consultant | EV, Automotive & Mobility',
  // The one line that actually differentiates him. Surfaced in the hero and
  // closing the Arc - do not bury it further down the page again.
  thesisQuote:
    'Most people get into consulting and then learn an industry. I learned the industry first.',
  subPositioning:
    '3 years certifying EV chargers for Tesla and VinFast. 18 months of operations consulting with CEO-verified results.',
  // TODO(shantanu): replace with your real availability once known (e.g.
  // "Summer 2027 internship - full-time from <month year>"). Written
  // generically for now rather than guessing a date.
  availability: 'Open to summer internship and full-time roles in operations & strategy consulting.',
  thesis:
    'An engineer who has already done operations consulting, moving into strategy consulting, anchored in automotive, EV and mobility.',
  metaDescription:
    'Shantanu Patil - mechanical engineer moving into operations and strategy consulting, anchored in EV, automotive and mobility. Quantified pro-bono turnaround, international motorsport results, MBA-equivalent at Masters’ Union.',
  email: 'shantanuspatil2002@gmail.com',
  linkedin: 'https://www.linkedin.com/in/shantanuspatil1/',
  // Relative (no leading slash) so it resolves under the GitHub Pages base
  // path (/shantanu-portfolio/) as well as at the Vercel root.
  resume: 'resume-shantanu-patil.pdf',
  ogImage: 'og-image.png',
} as const

export type NavItem = { id: string; label: string }

// Kept to five on purpose - Achievements folded into Experience, Motorsport
// folded into About, Insights removed (see below).
export const nav: NavItem[] = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'work', label: 'Case Studies' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

/* -------------------------------------------------- Hero */

export const hero = {
  kicker: 'Portfolio · Blueprint to Boardroom',
  heading: 'Shantanu Patil',
  positioning: site.positioningLine,
  thesisQuote: site.thesisQuote,
  sub: site.subPositioning,
  availability: site.availability,
  ctas: [
    { label: 'Download Resume', href: site.resume, kind: 'primary' as const, download: true },
    { label: 'Email Me', href: `mailto:${site.email}`, kind: 'ghost' as const },
    { label: 'LinkedIn', href: site.linkedin, kind: 'ghost' as const, external: true },
  ],
  quickStats: [
    { value: '3 yrs', label: 'EV charger compliance at ARAI' },
    { value: '18 mo', label: 'operations consulting, CEO-verified' },
    { value: '337/340', label: 'GRE' },
    { value: 'AIR 1', label: 'BAJA SAE India eBAJA 2023' },
  ],
}

/* -------------------------------------------------- About / The Arc */

export type ArcImage = {
  src: string
  alt: string
  width: number
  height: number
  caption?: string
}

export type ArcBeat = {
  tag: string
  title: string
  body: string
  stats?: { value: string; label: string }[]
  image?: ArcImage
}

export const about = {
  heading: 'The Arc',
  lede:
    'Diploma → mechanical engineering → international motorsport team leadership → EV compliance engineer at a national automotive R&D body → operations consultant with quantified results → MBA, in strategy consulting, same domain.',
  // 4:5 crop, 800x1000. Relative path (no leading slash), same reason as site.resume above - so
  // it resolves under the GitHub Pages /shantanu-portfolio/ subpath too.
  headshot: {
    src: 'images/headshot.jpg',
    alt: 'Shantanu Patil',
    width: 800,
    height: 1000,
  } satisfies ArcImage,
  beats: [
    {
      tag: 'Foundation',
      title: 'Engineer, from the shop floor up',
      body:
        'Diploma in Mechanical Engineering from Latthe Education Society’s Polytechnic, Sangli (91.59%, Rank 2 of 178), then B.E. in Mechanical Engineering from D.Y. Patil College of Engineering, Pune (8.35 CGPA, top 20%) - hands-on manufacturing exposure most peers entering engineering degrees directly did not have.',
    },
    {
      tag: 'Proving ground',
      title: 'Team Leader, BAJA SAE - Team Predators Racing',
      body:
        'Team Leader and Marketing & Manufacturing Lead for a 25-member cross-functional team across BAJA SAE India and BAJA SAE International (New York). Raised ₹3.76L (42% of budget) across 35+ sponsor pitches, then represented Team India at BAJA SAE USA, presenting the commercial case live before international judges. First team in the club’s history to win both the mBAJA and eBAJA national titles in consecutive years.',
      stats: [
        { value: 'AIR 1', label: 'eBAJA 2023 · 1 of 81 teams' },
        { value: '4 / 88', label: 'World Rank, Intl Sales Presentation' },
        { value: '₹3.76L', label: 'raised · 42% of team budget' },
      ],
      // Pre-cropped 3:1, 1600x533, framed on the car and the lift.
      image: {
        src: 'images/baja-team.jpg',
        alt: 'Team Predators Racing lifting their BAJA SAE car after the event',
        width: 1600,
        height: 533,
        caption: 'Team Predators Racing, BAJA SAE India.',
      },
    },
    {
      tag: 'Engineer',
      title: 'EV charger compliance at ARAI',
      body:
        'Around 3 years as a Research Engineer at the Automotive Research Association of India (ARAI), India’s apex automotive homologation and certification body - specialising in EV charger compliance testing (IEC 61851, IS 17017, AIS, CMVR) for OEM clients including Tesla, VinFast and Tata Motors / Tata AutoComp.',
    },
    {
      tag: 'Operator',
      title: 'Operations consulting, pro bono',
      body:
        'In parallel, ran an 18-month pro-bono engagement (Prodmax Global) applying lean and Six Sigma methods to a real manufacturing business - not a case study, an actual P&L impact, CEO-verified in writing.',
    },
    {
      tag: 'Strategist',
      title: 'MBA, in strategy',
      body:
        'Now a PGP-TBM (MBA-equivalent) student at Masters’ Union, Gurugram, domain-locked into Consulting and Supply Chain & Operations - targeting tier-1 / tier-2 roles in automotive, EV and mobility, with the domain expertise as the wedge.',
    },
  ] satisfies ArcBeat[],
  close: site.thesisQuote,
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
    org: 'ARAI - Automotive Research Association of India',
    title: 'Research Engineer, EV Compliance & Client Operations',
    dates: 'Jul 2023 – Jun 2026',
    note: 'Progressed from Trainee Engineer to Research Engineer.',
    bullets: [
      {
        text:
          'Certified the Tesla V4 Supercharger (250 kW, CCS2) against India’s IS 17017 series - prepared ARAI’s compliance statement end-to-end, not just individual test runs. Issued July 2025.',
      },
      {
        text:
          'Built India’s first DC EMC test setup for EV charger certification in 10 months, establishing a certification capability that did not previously exist in the country.',
      },
      {
        text:
          'Directed a two-engineer core team overseeing seven contract staff within an EV-charger testing vertical generating ~₹8 crore in FY25 revenue - ~7% of the ~₹110 crore Automotive Electronics division.',
      },
      {
        text:
          'Delivered 500+ compliance programs for Tesla, VinFast and Tata Motors with zero client escalations over 30 months.',
      },
      {
        text:
          'Secured NABL and ISO accreditation across two audit cycles (2023, 2025) by leading lab-wide audit readiness.',
      },
      {
        text:
          'Increased testing throughput 20% and cut turnaround time 15% by standardising scheduling across the client portfolio; eliminated client wait times with a real-time KPI dashboard adopted across 3 departments.',
      },
      {
        text: 'Recognised as ARAI’s Best Contract Executive, 2025 (HTC-AED department).',
        flag:
          'Do not add a "top X%" or "1 of N" framing unless confirmed with ARAI HR - the certificate does not state a recipient count. Note: the resume states "top 0.167% of 600+ employees" - that is a self-calculated figure on a resume, not an HR confirmation. Do not pull it onto the site without that confirmation.',
      },
    ],
  },
  {
    org: 'Prodmax Global',
    title: 'Independent Operations Consultant (pro bono)',
    dates: 'Oct 2023 – Aug 2025',
    bullets: [
      {
        text:
          'Phase 1 - Six Sigma DMAIC: grew monthly profit 14.4%, from ₹4.5L to ₹5.15L, and raised resource utilisation from 70% to 91% in 12 weeks, building a linear-programming optimiser (Excel Solver) across 12 SKUs. CEO-verified in writing.',
      },
      {
        text:
          'Phase 2 - Lean transformation: cut lead time 17%, grew quarterly revenue 7.12%, and reduced material waste 13.4%, using CPM, 5S, Kanban and SMED; trained 20+ shop-floor operators and supervisors to sustain adoption.',
        flag:
          'The 7.12% and 13.4% figures (and the 17% lead-time cut) are resume-sourced but still relative, with no absolute baseline stated (revenue off what starting figure, waste and lead time off what). Add the baselines if you can share them.',
      },
    ],
  },
  {
    org: 'Masters’ Union, Gurugram',
    title: 'PGP-TBM (Technology & Business Management), Cohort 7',
    dates: 'Jun 2026 – present',
    // TODO(shantanu): once you have a graduation date, e.g.
    //   note: 'Expected completion: <month year>.',
    note: undefined,
    bullets: [
      { text: 'One of 5 scholarship recipients across a 470-member batch.' },
      { text: 'Domain-locked into Consulting (primary) and Supply Chain & Operations (secondary).' },
      {
        text:
          'Active across multiple case competitions and the Masters’ Union Consulting Club (MUCC) - see Case Studies.',
      },
    ],
  },
]

// Folded in under Experience as a compact strip rather than a standalone
// section - everything else that used to live in "Achievements" either
// duplicated an Experience/Arc bullet (ARAI award, BAJA results, scholarship)
// or is dropped (AWA score - see note).
export type Recognition = { value: string; label: string }

export const recognition: Recognition[] = [
  // AWA 3.5 intentionally dropped: 337 (V167/Q170) is the number worth
  // showing; a below-average writing sub-score attached to a consulting
  // application undercuts it for nothing.
  { value: '337 / 340', label: 'GRE · Verbal 167, Quant 170 (perfect score)' },
  { value: 'Green Belt', label: 'Six Sigma, Kennesaw State University' },
  { value: 'Operations Analytics', label: 'Wharton, University of Pennsylvania' },
  { value: 'Business Foundations', label: 'Specialization, Wharton' },
]

/* -------------------------------------------------- Case studies */

export type CaseStudy = {
  id: string
  index: string
  group: 'professional' | 'academic'
  title: string
  frameLabel: string
  situation: string
  approach: string
  result: string
  headlineStat: { value: string; label: string }
  // Max 3 - if you have a 4th number worth showing, fold it into `result`
  // prose instead. Keeps every exhibit's stat row visually equal weight.
  metrics: { value: string; label: string }[]
  link?: { href: string; label: string }
  /** Rendered full-width directly below the Result row. */
  image?: {
    src: string
    alt: string
    width: number
    height: number
    caption?: string
  }
}

export const caseStudyGroups: Record<CaseStudy['group'], string> = {
  professional: 'Professional engagements',
  academic: 'Academic and competition work',
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'dmaic',
    index: '01',
    group: 'professional',
    title: 'Six Sigma DMAIC turnaround at Prodmax Global',
    frameLabel: 'Operations consulting, delivered',
    situation: 'A manufacturing SME operating below capacity, with no formal process discipline.',
    approach:
      'Applied Six Sigma DMAIC first: built a linear-programming resourcing model in Excel Solver across 12 SKUs to locate the utilisation bottleneck. A lean / 5S / Kanban / SMED pass followed in Phase 2 to compound the gains.',
    result:
      'Resource utilisation up from 70% to 91% in 12 weeks. Monthly profit up 14.4%, from ₹4.5L to ₹5.15L. CEO-verified in writing.',
    headlineStat: { value: '70 → 91%', label: 'resource utilisation' },
    metrics: [
      { value: '₹4.5L → ₹5.15L', label: 'monthly profit, +14.4%' },
      { value: '12 weeks', label: 'to 91% utilisation' },
      { value: 'CEO', label: 'verified in writing' },
    ],
  },
  {
    id: 'tesla-v4',
    index: '02',
    group: 'professional',
    title: 'Tesla V4 Supercharger certification (ARAI)',
    frameLabel: 'Automotive homologation',
    situation:
      'A new-generation 250 kW CCS2 charger needed certification against India’s IS 17017 series before market entry.',
    approach:
      'Owned the compliance statement end-to-end - test protocol design, execution, documentation - not a single test in isolation.',
    result:
      'Certification issued July 2025. Separately, built India’s first DC EMC test setup, closing a gap in the national testing infrastructure.',
    headlineStat: { value: '250 kW', label: 'CCS2, certified to IS 17017' },
    metrics: [
      { value: 'Jul 2025', label: 'certification issued' },
      { value: '1st', label: 'DC EMC setup in India' },
      { value: 'End-to-end', label: 'compliance statement ownership' },
    ],
  },
  {
    id: 'voltedge',
    index: '03',
    group: 'academic',
    title: 'VoltEdge Mobility - market-entry case design (MUCC)',
    frameLabel: 'Case design, Masters’ Union Consulting Club',
    situation:
      'As a core member of the Masters’ Union Consulting Club, designed a market-entry case for an internal competition ("Consulting Roulette") built around a fictional European premium electric motorcycle maker (€420M revenue) evaluating India entry.',
    approach:
      'Built the full case pack - market sizing, competitive landscape, customer segmentation, value chain / capability analysis, forecast financials, and four market-entry options (greenfield, contract manufacturing, JV, acquisition) - plus a standardised judging rubric and live "curveball" scenario elements for ~20–25 competing teams.',
    result:
      'Ran the competition end-to-end as designer and organiser. Now scaling the same model into a pan-India, multi-campus case competition (target Oct 2026, hybrid format, finals on the Masters’ Union campus), with active sponsorship outreach to consulting firms and corporates.',
    headlineStat: { value: '20–25', label: 'teams competing on the case' },
    metrics: [
      { value: '€420M', label: 'fictional client revenue' },
      { value: '4', label: 'market-entry options modelled' },
      { value: 'Oct 2026', label: 'pan-India scale-up target' },
    ],
  },
  {
    id: 'governance',
    index: '04',
    group: 'academic',
    title: 'The Maharashtra Urban Adoption Compact',
    frameLabel: 'The Governance Challenge 2026',
    situation:
      'The Governance Challenge 2026, run by Samagra with the Government of Maharashtra, assigned the campus team the Urban Development sector - asking how Maharashtra becomes an urban-innovation hub by 2035.',
    approach:
      'As Team Sankalp - with teammates from Pune and Thane; I’m from Sangli, used deliberately as cross-regional grounding - I built a policy proposal titled "The Maharashtra Urban Adoption Compact". Core thesis: "The constraint is not capital. It is the missing pathway from a validated solution to a first government order." I drew on the ARAI certification background to design the VALIDATE lever - a vehicle-certification-style approval pathway for urban innovation adoption.',
    result:
      'Proposed a five-lever framework (Discover, Validate, Approve, Buy, Scale) grounded in existing Maharashtra regulatory instruments (UDCPR, MMC Act), with a three-phase 2026–2035 roadmap and four specific regulatory asks. Submitted as a 2-page concept note plus a 3-minute pitch video. The team did not advance past the campus round.',
    headlineStat: { value: '5 levers', label: 'Discover · Validate · Approve · Buy · Scale' },
    metrics: [
      { value: '2026–35', label: 'three-phase roadmap' },
      { value: '4', label: 'specific regulatory asks' },
    ],
  },
  {
    id: 'factoryflow',
    index: '05',
    group: 'academic',
    title: 'FactoryFlow AI - independent product build',
    frameLabel: 'Independent build',
    situation:
      'Identified a gap in Indian SME manufacturing software - existing ERP tools are built for large enterprises, not the job-work / GST / cash reality of Indian SMEs.',
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
    image: {
      src: 'images/factoryflow-dashboard.png',
      alt: 'FactoryFlow AI manufacturing control dashboard showing OEE, production trend and machine performance',
      width: 1600,
      height: 765,
      caption: 'FactoryFlow AI - shop-floor control view. Demo data.',
    },
  },
  {
    id: 'treasurebox',
    index: '06',
    group: 'academic',
    title: 'Treasure Box Club - D2C venture, performance marketing',
    frameLabel: 'Masters’ Union dropshipping challenge',
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
  },
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
      'SQL',
      'Python',
      'Power BI',
      'Excel Solver / LP modelling (Power Query)',
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
/* No longer a top-level nav section - sits between Skills and Contact,
   reachable by scroll, kept short. */

export type LeadershipEntry = {
  title: string
  body: string
  image?: {
    src: string
    alt: string
    width: number
    height: number
    caption?: string
    href: string
  }
}

export const leadership: LeadershipEntry[] = [
  {
    title: 'Masters’ Union Consulting Club (MUCC) - core member',
    body:
      'Built a 10-sector industry primer deck and an Industry Compendium (Issue 01: Indian Aviation). Now organising a pan-India, multi-campus case competition (target Oct 2026).',
    // JPG rather than PNG: the paper-grain texture makes a PNG ~1MB.
    image: {
      src: 'images/compendium-aviation.jpg',
      alt: 'Info Compendium issue on Indian aviation, designed as a boarding pass',
      width: 1024,
      height: 1536,
      caption: 'MUCC Info Compendium, Issue 01: Indian Aviation. Designed in Figma.',
      href: 'images/compendium-aviation.jpg',
    },
  },
  {
    title: 'Teach for India - volunteer',
    body: 'Mentored 8 underserved students, 20+ hrs/month in foundational math and English.',
  },
  {
    title: 'DYPCOE - alum volunteer',
    body: 'Coached 30+ students annually through mock interviews and placement prep.',
  },
  {
    title: 'MESA (Mechanical Engineering Students’ Association) - Vice President',
    body:
      'Grew member engagement 30% YoY by launching the institute’s first new competition in its history (78 participants).',
  },
  {
    title: 'Ganesh Chaturthi 2026, Masters’ Union - organising team',
    body: 'Hostel VP team for the campus celebration.',
  },
]

/* -------------------------------------------------- Contact */

export const contact = {
  heading: 'Let’s talk',
  line: site.positioningLine,
  sub: site.availability,
}
