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
   - "18 months" (hero sub-line, About "Operator" beat) vs the
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
  role: 'Mechanical Engineer → Operations & Strategy',
  // Leads the hero: one plain statement first, keywords underneath.
  statement: 'I turn complex automotive and EV operations into measurable outcomes.',
  positioningLine:
    'Mechanical Engineer → Operations & Strategy | EV, Automotive & Mobility',
  // The one line that actually differentiates him. Surfaced in the hero and
  // closing the Arc - do not bury it further down the page again.
  thesisQuote:
    'Most people get into consulting and then learn an industry. I learned the industry first.',
  subPositioning:
    '30 months in EV compliance across IS 17017, IEC 61851 and EMC — then operations consulting with CEO-verified results.',
  // TODO(shantanu): replace with your real availability once known (e.g.
  // "Summer 2027 internship - full-time from <month year>"). Written
  // generically for now rather than guessing a date.
  availability: 'Open to summer internship and full-time roles in operations & strategy consulting.',
  thesis:
    'An engineer with EV compliance and operations consulting experience, building toward strategy work in automotive, EV and mobility.',
  metaDescription:
    'Shantanu Patil - mechanical engineer moving into operations and strategy consulting, anchored in EV, automotive and mobility. Quantified pro-bono turnaround, international motorsport results, PGP in Technology & Business Management at Masters’ Union.',
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
  statement: site.statement,
  positioning: site.positioningLine,
  thesisQuote: site.thesisQuote,
  sub: site.subPositioning,
  availability: site.availability,
  ctas: [
    { label: 'Download Resume', href: site.resume, kind: 'primary' as const, download: true },
    { label: 'Email Me', href: `mailto:${site.email}`, kind: 'ghost' as const },
    { label: 'LinkedIn', href: site.linkedin, kind: 'ghost' as const, external: true },
  ],
  // Proof strip: business-impact numbers only, all straight from the resume.
  // The ₹8 Cr is the annual revenue of the EV-charger vertical he co-ran as one
  // of two engineers - NOT revenue he personally generated; the label says so.
  quickStats: [
    { value: '₹8 Cr', label: 'annual revenue of the EV-charger vertical, co-run as 1 of 2 engineers' },
    { value: '500+', label: 'compliance programs, zero client escalations' },
    { value: '+14.4%', label: 'monthly profit at Prodmax (₹4.5L → ₹5.15L)' },
    { value: '₹3.76L', label: 'sponsorship raised, 42% of team budget' },
  ],
}

/** The one fact a reader should be able to repeat after fifteen seconds. */
export const signature = 'Enabled Tesla’s first V4 Supercharger launch in India.'

/* -------------------------------------------------- Method */
// Diagnose -> Structure -> Decide -> Implement -> Measure, shown on three very
// different problems. Every cell is the resume's own wording; no invented insight.

export const method = {
  lede: 'The same five moves on three different problems: EV compliance at ARAI, manufacturing at Prodmax and motorsport at BAJA SAE.',
  columns: [
    { name: 'ARAI', context: 'EV compliance' },
    { name: 'Prodmax', context: 'Manufacturing' },
    { name: 'BAJA SAE', context: 'Motorsport leadership' },
  ],
  rows: [
    {
      verb: 'Diagnose',
      cells: [
        'Advised 15+ OEM engineering teams on certification strategy',
        'Process mapping, capacity analysis and shopfloor observation',
        'TAM-SAM-SOM market sizing, break-even and pricing for a 4,000 units/yr investment case',
      ],
    },
    {
      verb: 'Structure',
      cells: [
        'Synthesised global standards into a compliance roadmap',
        'Linear-programming optimiser across 12 SKUs',
        'Led a 25-member team across design, manufacturing and marketing',
      ],
    },
    {
      verb: 'Decide',
      cells: [
        'Standardised scheduling across the client portfolio',
        'Scheduling shifted from volume-based to margin-based',
        'Design trade-offs across 3 sub-teams',
      ],
    },
    {
      verb: 'Implement',
      cells: [
        'Real-time KPI dashboard across 3 departments; India’s first EV charger certification capability in 10 months',
        'Trained 20+ operators and supervisors in 5S and Kanban',
        'Race-day operations across 5 sub-teams, 20+ pit interventions',
      ],
    },
    {
      verb: 'Measure',
      cells: [
        '+20% throughput, -15% turnaround, zero client escalations over 30 months',
        '+14.4% monthly profit, 70 → 91% utilisation, -17% lead time',
        '-5.35% vehicle weight, ₹3.76L raised, AIR 1 at eBAJA 2023',
      ],
    },
  ],
}

/* -------------------------------------------------- Personalised links */
// /?for=<key> shows "Prepared for <name>" and one relevance line. Allowlist
// only: unknown keys do nothing, so a crafted link can't put text on the page.
// Add an entry only with a relevance line the resume backs.

export type Audience = { name: string; relevance: string }

export const audiences: Record<string, Audience> = {
  'tata-motors': { name: 'Tata Motors', relevance: 'Delivered compliance programs for Tata Motors at ARAI.' },
  vinfast: { name: 'VinFast', relevance: 'Delivered compliance programs for VinFast at ARAI.' },
  tesla: { name: 'Tesla', relevance: 'Enabled Tesla’s first V4 Supercharger launch in India.' },
  'hero-motocorp': {
    name: 'Hero MotoCorp',
    relevance: 'Pitched Hero MotoCorp’s executives for Team Predators Racing’s sponsorship.',
  },
  'spark-minda': {
    name: 'Spark Minda',
    relevance: 'Pitched Spark Minda’s executives for Team Predators Racing’s sponsorship.',
  },
}

/* -------------------------------------------------- About / The Arc */

export type ArcImage = {
  src: string
  alt: string
  width: number
  height: number
  caption?: string
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
  // Short human story, closes the Arc (the thesis line lives in the hero).
  story: [
    'I started in mechanical engineering, led a student team that built and raced an off-road vehicle, moved into automotive compliance and manufacturing operations, and eventually into business transformation. Across each experience, I’ve worked at the intersection of technical complexity, people and operational performance.',
    'Today, I’m pursuing Technology & Business Management at Masters’ Union, building toward a career focused on solving complex operational and business problems.',
  ],
}

/* -------------------------------------------------- Career timeline */
// Time-scaled strip in the Arc. Dates are the resume's. The 'verb' marks the
// four chapters (Build, Test, Improve, Scale); Study bars have none.

export type MediaImage = {
  src: string
  alt: string
  width: number
  height: number
  caption?: string
}

/** A titled set of photos or figures shown inside an expanded case study. */
export type MediaGroup = {
  title: string
  note?: string
  layout?: 'photos' | 'artifact'
  items: MediaImage[]
}

export type TimelineItem = {
  id: string
  lane: 'study' | 'work' | 'alongside'
  verb?: string
  name: string
  start: string // YYYY-MM
  end: string | null // null = present
  note: string
  image?: MediaImage
}

export const timeline = {
  axisStart: 2017,
  axisEnd: 2028,
  items: [
    { id: 'diploma', lane: 'study', name: 'Diploma, Mechanical Eng.', start: '2017-07', end: '2020-11', note: 'Latthe Polytechnic, Sangli · 91.59%, Rank 2 of 178' },
    { id: 'be', lane: 'study', name: 'B.E. Mechanical Eng.', start: '2020-12', end: '2023-04', note: 'D.Y. Patil, Pune · 8.35 CGPA (top 20%)' },
    { id: 'baja', lane: 'alongside', verb: 'Build', name: 'BAJA SAE', start: '2021-07', end: '2023-04', note: 'Team Leader of 25 · AIR 1 · World Rank 4 of 88',
      image: { src: 'images/baja-overall-winner.webp', width: 720, height: 512, alt: 'Team Predators Racing with the E4 car and the Overall Winner board' } },
    { id: 'arai', lane: 'work', verb: 'Test', name: 'ARAI', start: '2023-07', end: '2026-06', note: 'EV compliance · 500+ programs, zero client escalations',
      image: { src: 'images/arai-keysight-session.webp', width: 1400, height: 1050, alt: 'ARAI and Keysight session on charging infrastructure technology requirements and interoperability' } },
    { id: 'prodmax', lane: 'alongside', verb: 'Improve', name: 'Prodmax', start: '2023-10', end: '2025-08', note: 'Pro bono · +14.4% profit, 70 → 91% utilisation',
      image: { src: 'images/shopfloor.webp', width: 720, height: 720, alt: 'A manufacturing shopfloor with fabrication stations and marked walkways' } },
    { id: 'mu', lane: 'study', verb: 'Scale', name: 'Masters’ Union', start: '2026-06', end: null, note: 'PGP in Technology & Business Management',
      image: { src: 'images/masters-union-group.webp', width: 1600, height: 900, alt: 'A group of Masters’ Union students in a classroom in Gurugram' } },
  ] as TimelineItem[],
}

/* -------------------------------------------------- Experience timeline */

export type ExperienceEntry = {
  org: string
  title: string
  dates: string
  note?: string
  image?: MediaImage
  /** Up to three headline numbers, shown above the bullets. */
  tiles?: { value: string; label: string }[]
  bullets: { text: string; flag?: string }[]
}

export const experience: ExperienceEntry[] = [
  {
    org: 'ARAI - Automotive Research Association of India',
    title: 'Research Engineer, EV Compliance & Client Operations',
    dates: 'Jul 2023 – Jun 2026',
    note: 'Progressed from Trainee Engineer to Research Engineer.',
    tiles: [
      { value: '500+', label: 'compliance programs for Tesla, VinFast and Tata Motors, zero client escalations over 30 months' },
      { value: '+20% / -15%', label: 'testing throughput / turnaround time, from standardised scheduling' },
      { value: '3', label: 'departments on one real-time KPI dashboard, client wait times eliminated' },
    ],
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
          'Ran the EV-charger testing vertical as one of two engineers, coordinating seven contract staff; the vertical generated ~₹8 crore in FY25 revenue - ~7% of the ~₹110 crore Automotive Electronics division.',
        flag:
          'Deliberately "coordinating", not "directing" - no formal team-lead title. The resume PDF still says "directing a 7-member contract team" and "Delivered ₹8 Cr annual revenue"; align it so the two documents do not disagree.',
      },
    ],
  },
  {
    org: 'Prodmax Global',
    title: 'Independent Operations Consultant (pro bono)',
    dates: 'Oct 2023 – Aug 2025',
    tiles: [
      { value: '+14.4%', label: 'monthly profit, ₹4.5L → ₹5.15L' },
      { value: '70 → 91%', label: 'resource utilisation in 12 weeks' },
      { value: '-17%', label: 'lead time, with material waste -13.4% and quarterly revenue +7.12%' },
    ],
    bullets: [
      {
        text:
          'Six Sigma DMAIC: built a linear-programming optimiser (Excel Solver) across 12 SKUs to move scheduling from volume-based to margin-based. CEO-verified in writing.',
      },
      {
        text:
          'Lean transformation (CPM, 5S, Kanban, SMED), then trained 20+ shop-floor operators and supervisors to sustain adoption.',
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
    image: { src: 'images/masters-union-group.webp', width: 1600, height: 900, alt: 'A group of Masters’ Union students in a classroom in Gurugram', caption: 'Masters’ Union, Gurugram.' },
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
  // Moved out of the ARAI bullets. No recipient-count claim: the resume's
  // "top 0.167% of 600+" is self-calculated, not HR-confirmed.
  { value: 'Best Contract Executive', label: 'ARAI, 2025 · HTC-AED department' },
  { value: 'NABL & ISO', label: 'accreditation secured across 2 ARAI audit cycles (2023, 2025)' },
]

/* -------------------------------------------------- Case studies */

export type CaseStudy = {
  id: string
  index: string
  group: 'professional' | 'academic'
  title: string
  frameLabel: string
  // Either the classic three fields...
  situation?: string
  approach?: string
  result?: string
  // ...or an explicit chain of labelled steps (Problem / Diagnosis / Decision
  // / Impact). Used where the resume gives a real reasoning chain.
  steps?: { label: string; text: string }[]
  headlineStat: { value: string; label: string }
  // Max 3 - if you have a 4th number worth showing, fold it into the prose
  // instead. Keeps every exhibit's stat row visually equal weight.
  metrics: { value: string; label: string }[]
  /** A single highlighted credibility point, shown under the steps. */
  callout?: { label: string; text: string }
  link?: { href: string; label: string }
  /** Photos and figures shown under the steps. */
  media?: MediaGroup[]
  /** Rendered full-width directly below the last step. */
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
    title: 'Optimising manufacturing performance at Prodmax Global',
    frameLabel: 'Operations consulting, delivered',
    steps: [
      {
        label: 'Problem',
        text: 'A manufacturing SME operating below capacity, with no formal process discipline and competing priorities across capacity, lead time and profitability.',
      },
      {
        label: 'Diagnosis',
        text: 'Used process mapping, capacity analysis and shopfloor observation to diagnose bottlenecks and identify operational constraints before redesigning any workflow.',
      },
      {
        label: 'Decision',
        text: 'Built a linear-programming optimiser (Excel Solver) across 12 SKUs and shifted scheduling from volume-based to margin-based, sequencing implementation by the trade-offs across capacity, lead time and profitability. A lean pass (5S, Kanban) followed in Phase 2, with 20+ operators and supervisors trained to sustain it.',
      },
      {
        label: 'Impact',
        text: 'Monthly profit +14.4% (₹4.5L → ₹5.15L) and resource utilisation 70% → 91% in 12 weeks. Lead time -17%, material waste -13.4%, quarterly revenue +7.12%. CEO-verified in writing.',
      },
    ],
    headlineStat: { value: '+14.4%', label: 'monthly profit, ₹4.5L → ₹5.15L' },
    metrics: [
      { value: '70 → 91%', label: 'resource utilisation, 12 weeks' },
      { value: '-17%', label: 'lead time' },
      { value: '-13.4%', label: 'material waste' },
    ],
    media: [
      {
        title: 'Where the work happened',
        items: [
          { src: 'images/shopfloor.webp', width: 720, height: 720, alt: 'A manufacturing shopfloor with fabrication stations and marked walkways', caption: 'Manufacturing shopfloor.' },
        ],
      },
    ],
  },
  {
    id: 'arai',
    index: '02',
    group: 'professional',
    title: 'Scaling EV compliance operations at ARAI',
    frameLabel: 'EV compliance operations',
    steps: [
      { label: 'Scale', text: '500+ compliance programs over 30 months, with zero client escalations.' },
      {
        label: 'Complexity',
        text: 'Programs for Tesla, VinFast and Tata Motors, advising 15+ OEM engineering teams on certification strategy.',
      },
      {
        label: 'Operating model',
        text: 'One of two engineers running the EV-charger vertical, coordinating a 7-member contract team.',
      },
      {
        label: 'Transformation',
        text: 'Standardised scheduling across the client portfolio, deployed a real-time KPI dashboard across 3 departments, and built India’s first DC EMC test setup for EV charger certification in 10 months.',
      },
    ],
    callout: {
      label: 'Tesla V4 Supercharger',
      text: 'Prepared ARAI’s compliance roadmap for the Tesla V4 Supercharger: certified the 250 kW CCS2 charger against IS 17017; compliance statement issued July 2025.',
    },
    headlineStat: { value: '500+', label: 'compliance programs, zero client escalations' },
    metrics: [
      { value: '₹8 Cr', label: 'annual revenue of the vertical (co-run as 1 of 2 engineers)' },
      { value: '+20%', label: 'testing throughput' },
      { value: '-15%', label: 'turnaround time' },
    ],
    media: [
      {
        title: 'The standards behind the work',
        items: [
          { src: 'images/arai-keysight-session.webp', width: 1400, height: 1050, alt: 'ARAI and Keysight session on charging infrastructure technology requirements and interoperability', caption: 'ARAI and Keysight session on charging infrastructure requirements and interoperability. The slide maps Indian standards (IS 17017) to their IEC counterparts.' },
        ],
      },
    ],
  },  {
    id: 'baja',
    index: '03',
    group: 'academic',
    title: 'Team Predators Racing - BAJA SAE',
    frameLabel: 'Leadership under competition constraints',
    situation:
      'BAJA SAE is a design-build-race competition for an off-road vehicle, judged on the engineering and on the business case (a costed report and a live sales presentation). The team needed a car that performs and a funded, commercially defensible case for building it.',
    approach:
      'As Team Leader and Marketing & Manufacturing Lead, ran a 25-member cross-functional team across design, manufacturing and marketing. Owned the funding: pitched 35+ executives, including CEOs at Datatech Labs, Hero MotoCorp and Spark Minda. Built the end-to-end investment case to mass-produce the ATV at a mandated 4,000 units/yr (TAM-SAM-SOM market sizing, break-even, pricing) and defended it live before international investor-judges at BAJA SAE USA. Cut vehicle weight 5.35% by driving design tradeoffs across 3 sub-teams.',
    result:
      'Raised ₹3.76L (42% of budget). First team to win both national titles in consecutive years: mBAJA 2022 (1 of 138) and eBAJA 2023 (1 of 81, AIR 1). World Rank 4 of 88 in the BAJA SAE USA sales presentation. 17+ individual event awards.',
    headlineStat: { value: 'AIR 1', label: 'eBAJA 2023 · 1 of 81 teams' },
    metrics: [
      { value: '5.35%', label: 'vehicle weight reduction' },
      { value: '₹3.76L', label: 'raised · 42% of team budget' },
      { value: '25', label: 'team members led across design, manufacturing and marketing' },
    ],
    media: [
      {
        title: 'Build and funding',
        items: [
          { src: 'images/baja-build.webp', width: 900, height: 1200, alt: 'A buggy chassis being assembled in a workshop', caption: 'Vehicle build in the workshop.' },
          { src: 'images/baja-sponsor-shirts.webp', width: 1400, height: 1050, alt: 'The eBAJA car at the event with team members in sponsor-branded shirts', caption: 'eBAJA car at the event; team shirts carry sponsor logos, including Datatech Labs.' },
        ],
      },
      {
        title: 'Race',
        items: [
          { src: 'images/baja-flag-off.webp', width: 945, height: 506, alt: 'Car 10 at the start line as the chequered flag drops', caption: 'Flag-off, car 10.' },
          { src: 'images/baja-on-course.webp', width: 925, height: 487, alt: 'Buggies including car 10 on a dusty off-road course', caption: 'Car 10 on course among other teams.' },
          { src: 'images/baja-paddock.webp', width: 1400, height: 1050, alt: 'Rows of BAJA buggies lined up in the paddock', caption: 'BAJA SAE India: cars lined up in the paddock.' },
        ],
      },
      {
        title: 'Result',
        items: [
          { src: 'images/baja-overall-winner.webp', width: 720, height: 512, alt: 'Team Predators Racing with the E4 car and the Overall Winner board', caption: 'Team Predators Racing with car E4 and the Overall Winner board.' },
          { src: 'images/baja-team-flag.webp', width: 720, height: 512, alt: 'Team Predators Racing with the Indian flag behind their car', caption: 'Team Predators Racing with the India flag.' },
        ],
      },
      {
        title: 'Engineering documentation',
        note: 'From the team’s 39-page Brakes & Axles documentation (car E04, 2022-23). The brake system is sized to lock all four wheels: 1.02 g deceleration and a 6.14 m stopping distance in calculation. Last year’s brass-connector leaks were designed out by integrating the master-cylinder outlet ports into the body.',
        layout: 'artifact',
        items: [
          { src: 'images/wheel-assembly-exploded.png', width: 1300, height: 731, alt: 'Exploded view of the front wheel assembly: bearings, knuckle, brake disc and caliper, hub, rim and tyre', caption: 'Front wheel assembly, exploded view.' },
          { src: 'images/hub-stress-analysis.webp', width: 807, height: 694, alt: 'Finite-element stress plot of the front wheel hub, maximum 255 megapascals', caption: 'Front hub stress analysis: 255 MPa maximum, factor of safety 1.56.' },
        ],
      },
    ],
  },
  {
    id: 'voltedge',
    index: '04',
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
    index: '05',
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
    index: '06',
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
    index: '07',
    group: 'academic',
    title: 'Treasure Box Club - D2C venture, performance marketing',
    frameLabel: 'Masters’ Union dropshipping challenge',
    situation:
      'A team-run Delhi NCR gifting / home-decor D2C brand, built for a Masters’ Union dropshipping challenge with a ₹10L bank-reconcilable transaction target.',
    approach:
      'Owned paid advertising (Meta / Instagram) within a six-person, department-structured team (Product & Sourcing, Brand & Store, Content & Social, Performance Marketing, Operations & CX, Finance & Data). Ran physical pop-up stalls (DLF CyberHub, M3M IFC) alongside the Shopify storefront. Tracked weekly unit economics across 30+ SKUs.',
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

// Compact education strip (Masters' Union sits in the Experience timeline above).
export const education: { title: string; detail: string }[] = [
  {
    title: 'D.Y. Patil College of Engineering, Pune',
    detail: 'B.E. Mechanical Engineering · 8.35 CGPA (top 20%)',
  },
  {
    title: 'Latthe Education Society’s Polytechnic, Sangli',
    detail: 'Diploma, Mechanical Engineering · 91.59%, Rank 2 of 178',
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
