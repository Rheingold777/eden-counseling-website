export type AuthorityPageKind = "area" | "therapy" | "faq";

export type AuthorityPage = {
  kind: AuthorityPageKind;
  slug: string;
  title: string;
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  intent: string;
  audience: string;
  localSignals?: string[];
  sections: {
    heading: string;
    body: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
};

const sharedTelehealthNote =
  "Eden Counseling and Wellness is telehealth-first. Counseling is available when the client is physically located in Texas at the time of the session.";

export const areaPages: AuthorityPage[] = [
  {
    kind: "area",
    slug: "buda-tx",
    title: "Christian Counseling for Buda, TX",
    shortTitle: "Buda",
    metaTitle: "Christian Counseling for Buda, TX",
    metaDescription:
      "Faith-informed telehealth counseling for Buda, TX adults, teens, and couples. Support for anxiety, stress, faith, relationships, and life transitions.",
    primaryKeyword: "Christian counseling Buda TX",
    secondaryKeywords: ["Buda therapist", "counseling near Buda TX", "faith-based therapy Buda"],
    intent: "Local counseling search for Buda residents who want Christian-informed support.",
    audience: "Adults, teens, couples, and families in Buda and nearby Hays County.",
    localSignals: ["Downtown Buda", "Historic Stagecoach Park", "Main Street", "I-35 corridor"],
    sections: [
      {
        heading: "Counseling support for Buda residents",
        body:
          "Buda families often want counseling that feels grounded, practical, and personal without adding another long drive into Austin. Eden offers telehealth counseling for clients in Buda who want space to work through anxiety, relationship stress, grief, faith questions, or a difficult season of life.",
      },
      {
        heading: "Local context without pretending to be an office",
        body:
          "This page is written for people searching near Downtown Buda, Main Street, Historic Stagecoach Park, and the I-35 corridor. Eden is not claiming a walk-in office in Buda. Sessions are online for clients who are physically located in Texas.",
      },
      {
        heading: "Faith can be part of the work",
        body:
          "For clients who want Christian counseling, sessions can make room for Scripture, prayer, spiritual formation, and honest questions about suffering and hope. Faith integration is always client-directed and is not forced into every session.",
      },
    ],
    faqs: [
      {
        question: "Does Eden Counseling have an office in Buda?",
        answer:
          "No. Eden is telehealth-first and does not represent this as a Buda walk-in office. Buda residents can meet online when physically located in Texas.",
      },
      {
        question: "Can Buda teens use telehealth counseling?",
        answer:
          "Yes, teen counseling may be available for adolescents ages 13 and up when appropriate and with parent or guardian involvement.",
      },
    ],
  },
  {
    kind: "area",
    slug: "kyle-tx",
    title: "Counseling for Kyle, TX",
    shortTitle: "Kyle",
    metaTitle: "Counseling for Kyle, TX | Telehealth Therapy",
    metaDescription:
      "Online counseling for Kyle, TX clients seeking support for anxiety, stress, relationships, grief, faith, and life transitions.",
    primaryKeyword: "counseling Kyle TX",
    secondaryKeywords: ["Kyle TX therapist", "Christian counseling Kyle TX", "online therapy Kyle TX"],
    intent: "Local search for counseling near Kyle with telehealth availability.",
    audience: "Kyle residents, parents, teens, couples, and working adults.",
    localSignals: ["Downtown Kyle", "Center Street", "Lake Kyle", "Bunton Creek Park"],
    sections: [
      {
        heading: "Counseling for life in a growing community",
        body:
          "Kyle is growing quickly, and many families are carrying the pressure that comes with work, school, parenting, commuting, and changing relationships. Eden provides a calm telehealth space for clients who want thoughtful counseling without adding another errand to the week.",
      },
      {
        heading: "Support for common concerns",
        body:
          "Sessions may focus on anxiety, depression, burnout, communication problems, grief, faith questions, or a transition that has become harder than expected. The goal is not quick advice; it is steady work toward clarity, coping skills, and healthier patterns.",
      },
      {
        heading: "Faith-informed when requested",
        body:
          "Christian counseling can help clients connect emotional health with their relationship with God. Eden can include faith as part of care when the client wants that approach.",
      },
    ],
    faqs: [
      {
        question: "Can I see Eden online if I live in Kyle?",
        answer: sharedTelehealthNote,
      },
      {
        question: "Is Christian counseling required?",
        answer:
          "No. Faith-based integration is optional and client-directed. Clients can request a clinical approach without explicit faith integration.",
      },
    ],
  },
  {
    kind: "area",
    slug: "south-austin",
    title: "Christian Counseling in South Austin",
    shortTitle: "South Austin",
    metaTitle: "Christian Counseling in South Austin | Telehealth Therapy",
    metaDescription:
      "Faith-informed online counseling for South Austin clients near South Lamar, Menchaca, Slaughter Lane, Circle C, and nearby communities.",
    primaryKeyword: "Christian counseling South Austin",
    secondaryKeywords: ["South Austin therapist", "telehealth therapy South Austin", "faith-based counseling Austin"],
    intent: "South Austin local search for Christian and telehealth counseling.",
    audience: "South Austin adults, teens, couples, and families.",
    localSignals: ["South Lamar", "Menchaca Road", "Slaughter Lane", "Mary Moore Searight Park"],
    sections: [
      {
        heading: "Counseling for South Austin routines",
        body:
          "South Austin life can feel full before the day even starts. Eden offers telehealth counseling for people navigating anxiety, relationship strain, parenting pressure, work stress, grief, or spiritual discouragement while living around the South Austin area.",
      },
      {
        heading: "Designed around privacy and access",
        body:
          "Telehealth gives clients a private way to meet from home, work, or another confidential space. This can be especially helpful for busy South Austin families who do not want to add traffic, parking, or waiting rooms to the process.",
      },
      {
        heading: "A Christian lens when it helps",
        body:
          "When requested, counseling can include faith, Scripture, prayer, and spiritual reflection alongside evidence-informed therapy skills. Eden does not use faith to minimize pain; it makes room for honest healing.",
      },
    ],
    faqs: [
      {
        question: "Do I need to drive to an office in South Austin?",
        answer:
          "No. Eden currently offers telehealth counseling for clients physically located in Texas during the session.",
      },
      {
        question: "What South Austin areas does this page speak to?",
        answer:
          "This page is written for clients near South Lamar, Menchaca, Circle C, Slaughter Lane, Onion Creek, and nearby South Austin communities.",
      },
    ],
  },
  {
    kind: "area",
    slug: "manchaca",
    title: "Counseling for Manchaca, TX",
    shortTitle: "Manchaca",
    metaTitle: "Counseling for Manchaca, TX | Christian Telehealth Therapy",
    metaDescription:
      "Telehealth counseling for Manchaca clients seeking Christian-informed support for anxiety, stress, relationships, grief, and family life.",
    primaryKeyword: "counseling Manchaca TX",
    secondaryKeywords: ["Manchaca therapist", "Christian counseling Manchaca", "online therapy Manchaca"],
    intent: "Local therapy search for Manchaca and southwest Travis County.",
    audience: "Adults, teens, and couples near Manchaca and South Austin.",
    localSignals: ["Manchaca Road", "FM 1626", "South Austin", "Buda"],
    sections: [
      {
        heading: "Therapy near Manchaca without the commute",
        body:
          "People searching for counseling near Manchaca often want care that is close in spirit and easy to access. Eden offers telehealth sessions for clients in Texas, making therapy possible without driving across Austin.",
      },
      {
        heading: "A steady place to sort through pressure",
        body:
          "Sessions can help with anxiety, relationship conflict, parenting stress, grief, life transitions, or questions about identity and faith. The work is paced, collaborative, and respectful of where the client is starting.",
      },
      {
        heading: "Christian counseling if desired",
        body:
          "Faith integration can be included for clients who want to process life through a Christian lens. That can mean prayer, Scripture, spiritual reflection, or simply honoring faith as part of the client's story.",
      },
    ],
    faqs: [
      {
        question: "Can Manchaca clients book online counseling?",
        answer: sharedTelehealthNote,
      },
      {
        question: "Does telehealth work for couples near Manchaca?",
        answer:
          "Couples counseling may be available on a case-by-case basis through secure video sessions when both clients are physically located in Texas.",
      },
    ],
  },
  {
    kind: "area",
    slug: "circle-c-ranch",
    title: "Counseling for Circle C Ranch",
    shortTitle: "Circle C Ranch",
    metaTitle: "Counseling for Circle C Ranch | South Austin Telehealth",
    metaDescription:
      "Online counseling for Circle C Ranch and southwest Austin clients navigating anxiety, parenting stress, burnout, faith, and relationships.",
    primaryKeyword: "counseling Circle C Ranch",
    secondaryKeywords: ["Circle C therapist", "Southwest Austin counseling", "Christian therapist Circle C"],
    intent: "Neighborhood-level therapy search around Circle C and southwest Austin.",
    audience: "Adults, parents, teens, and couples in Circle C Ranch.",
    localSignals: ["Circle C Ranch", "La Crosse Avenue", "Lady Bird Johnson Wildflower Center", "Southwest Austin"],
    sections: [
      {
        heading: "Counseling for busy Southwest Austin families",
        body:
          "Circle C families often balance school, work, activities, caregiving, and a full calendar. Eden offers telehealth counseling for clients who need a confidential place to slow down, process, and build healthier coping patterns.",
      },
      {
        heading: "Support that respects family and faith",
        body:
          "Counseling can address anxiety, emotional exhaustion, marital strain, teen stress, grief, and life transitions. For clients who request it, faith can be integrated in a way that is thoughtful and clinically appropriate.",
      },
      {
        heading: "Local relevance without office claims",
        body:
          "This page is relevant for people near Circle C Ranch, La Crosse Avenue, and the Lady Bird Johnson Wildflower Center area. Eden offers online care and does not claim a physical Circle C office.",
      },
    ],
    faqs: [
      {
        question: "Is Eden located in Circle C Ranch?",
        answer:
          "No. Eden provides telehealth counseling for Texas clients and is not claiming a physical Circle C Ranch office.",
      },
      {
        question: "Can parents seek counseling for themselves?",
        answer:
          "Yes. Many parents use counseling to process stress, boundaries, marriage strain, grief, or their own emotional health.",
      },
    ],
  },
  {
    kind: "area",
    slug: "slaughter-lane",
    title: "Counseling Near Slaughter Lane",
    shortTitle: "Slaughter Lane",
    metaTitle: "Counseling Near Slaughter Lane | South Austin Therapy",
    metaDescription:
      "Telehealth counseling for clients near Slaughter Lane, Southpark Meadows, Menchaca, and South Austin.",
    primaryKeyword: "counseling near Slaughter Lane",
    secondaryKeywords: ["Slaughter Lane therapist", "South Austin counseling", "online therapy Slaughter Lane"],
    intent: "Hyperlocal search for therapy around Slaughter Lane.",
    audience: "South Austin clients near Slaughter Lane and nearby neighborhoods.",
    localSignals: ["Slaughter Lane", "Southpark Meadows", "Menchaca Road", "I-35"],
    sections: [
      {
        heading: "A practical option for clients near Slaughter Lane",
        body:
          "If you live or work around Slaughter Lane, telehealth can make counseling easier to fit into a normal week. Eden offers online sessions for Texas clients who want support for stress, anxiety, grief, faith questions, or relationship strain.",
      },
      {
        heading: "Care for common South Austin pressures",
        body:
          "Sessions may focus on emotional regulation, communication, burnout, parenting stress, depression, or feeling stuck. Eden's approach is compassionate and structured without being rushed.",
      },
      {
        heading: "Faith can be included",
        body:
          "Christian counseling is available for clients who want their faith to be part of the healing conversation. Faith integration is optional and guided by the client.",
      },
    ],
    faqs: [
      {
        question: "Can I use telehealth if I am near Slaughter Lane?",
        answer: sharedTelehealthNote,
      },
      {
        question: "Is this page for Southpark Meadows too?",
        answer:
          "Yes. This page is relevant for clients near Slaughter Lane, Southpark Meadows, Menchaca Road, and the South Austin I-35 corridor.",
      },
    ],
  },
  {
    kind: "area",
    slug: "onion-creek",
    title: "Counseling for Onion Creek",
    shortTitle: "Onion Creek",
    metaTitle: "Counseling for Onion Creek | South Austin Telehealth",
    metaDescription:
      "Faith-informed online counseling for Onion Creek and South Austin clients seeking support for anxiety, grief, stress, and relationships.",
    primaryKeyword: "counseling Onion Creek Austin",
    secondaryKeywords: ["Onion Creek therapist", "Christian counseling Onion Creek", "South Austin online therapy"],
    intent: "Neighborhood-level counseling search in southeast South Austin.",
    audience: "Adults, couples, and families near Onion Creek.",
    localSignals: ["Onion Creek", "I-35", "South Austin", "Buda"],
    sections: [
      {
        heading: "Online counseling for Onion Creek residents",
        body:
          "Eden supports clients near Onion Creek who want a private counseling option without commuting. Telehealth sessions can help create room for reflection, emotional care, and practical next steps.",
      },
      {
        heading: "When stress starts affecting home life",
        body:
          "Counseling can help when anxiety, grief, depression, conflict, or burnout begins shaping the way you show up at home, work, church, or school. Eden works collaboratively and at a sustainable pace.",
      },
      {
        heading: "Faith-informed care",
        body:
          "For clients who want Christian integration, counseling can include spiritual reflection and hope without ignoring the complexity of mental health concerns.",
      },
    ],
    faqs: [
      {
        question: "Does Eden provide in-person therapy in Onion Creek?",
        answer:
          "No. Eden currently provides telehealth sessions for clients physically located in Texas.",
      },
      {
        question: "Can counseling include faith and practical coping skills?",
        answer:
          "Yes. Faith-informed care can be paired with practical skills for anxiety, communication, boundaries, emotional regulation, and coping.",
      },
    ],
  },
  {
    kind: "area",
    slug: "southpark-meadows",
    title: "Counseling Near Southpark Meadows",
    shortTitle: "Southpark Meadows",
    metaTitle: "Counseling Near Southpark Meadows | South Austin Online Therapy",
    metaDescription:
      "Online counseling for clients near Southpark Meadows, Slaughter Lane, I-35, and South Austin.",
    primaryKeyword: "counseling Southpark Meadows",
    secondaryKeywords: ["therapist near Southpark Meadows", "South Austin therapist", "Christian counseling Southpark Meadows"],
    intent: "Hyperlocal South Austin therapy search near Southpark Meadows.",
    audience: "Clients who live, work, or shop near Southpark Meadows.",
    localSignals: ["Southpark Meadows", "Slaughter Lane", "I-35", "South Austin"],
    sections: [
      {
        heading: "A counseling option near your South Austin routine",
        body:
          "For people near Southpark Meadows, telehealth can make counseling easier to access between work, errands, school pickup, and family responsibilities. Eden provides online counseling for Texas clients who want steady support.",
      },
      {
        heading: "Support for anxiety, stress, and relationships",
        body:
          "Many clients begin counseling because they feel anxious, disconnected, overwhelmed, or unsure how to move forward. Sessions create space to identify patterns and practice healthier responses.",
      },
      {
        heading: "Christian counseling when requested",
        body:
          "Clients who want faith to be part of care can include Christian reflection, Scripture, prayer, and spiritual questions in session.",
      },
    ],
    faqs: [
      {
        question: "Is this an in-person Southpark Meadows office?",
        answer:
          "No. Eden is telehealth-first and does not claim an office at Southpark Meadows.",
      },
      {
        question: "Can I schedule around work or school?",
        answer:
          "Availability depends on the current schedule, but telehealth removes commute time and can make sessions easier to fit into the week.",
      },
    ],
  },
  {
    kind: "area",
    slug: "sunset-valley",
    title: "Counseling for Sunset Valley",
    shortTitle: "Sunset Valley",
    metaTitle: "Counseling for Sunset Valley | Christian Telehealth Therapy",
    metaDescription:
      "Telehealth counseling for Sunset Valley and South Austin clients seeking faith-informed support for stress, anxiety, relationships, and life transitions.",
    primaryKeyword: "counseling Sunset Valley TX",
    secondaryKeywords: ["Sunset Valley therapist", "Christian counseling Sunset Valley", "South Austin therapy"],
    intent: "Local therapy search near Sunset Valley.",
    audience: "Adults, couples, and families in Sunset Valley and nearby South Austin.",
    localSignals: ["Sunset Valley", "West Gate", "South Lamar", "Ben White Boulevard"],
    sections: [
      {
        heading: "Counseling for clients near Sunset Valley",
        body:
          "Eden offers online counseling for clients around Sunset Valley and South Austin who want emotional support that fits real life. Sessions are private, relational, and focused on the concerns that matter most to the client.",
      },
      {
        heading: "When the outside looks fine but the inside feels heavy",
        body:
          "Counseling can help clients who are high-functioning on the outside while carrying anxiety, burnout, grief, disconnection, or a sense that something needs to change.",
      },
      {
        heading: "Faith and clinical care together",
        body:
          "Christian counseling can include prayer, Scripture, and spiritual reflection when desired, while still using evidence-informed counseling skills.",
      },
    ],
    faqs: [
      {
        question: "Can Sunset Valley clients use Eden online?",
        answer: sharedTelehealthNote,
      },
      {
        question: "Is counseling private?",
        answer:
          "Yes. Counseling is confidential within the legal and ethical limits explained during intake, including safety-related exceptions.",
      },
    ],
  },
  {
    kind: "area",
    slug: "oak-hill",
    title: "Counseling for Oak Hill",
    shortTitle: "Oak Hill",
    metaTitle: "Counseling for Oak Hill | Southwest Austin Telehealth",
    metaDescription:
      "Faith-informed telehealth counseling for Oak Hill and southwest Austin clients working through anxiety, stress, grief, and relationship concerns.",
    primaryKeyword: "counseling Oak Hill Austin",
    secondaryKeywords: ["Oak Hill therapist", "Christian counseling Oak Hill", "Southwest Austin therapy"],
    intent: "Neighborhood-level therapy search near Oak Hill.",
    audience: "Adults, couples, parents, and teens in Oak Hill and southwest Austin.",
    localSignals: ["Oak Hill", "Highway 290", "Southwest Austin", "Circle C"],
    sections: [
      {
        heading: "Counseling for Oak Hill and Southwest Austin",
        body:
          "Eden provides telehealth counseling for Oak Hill clients who want supportive care without navigating an extra commute. Sessions can help clients sort through emotional strain, relationship patterns, and faith questions at a human pace.",
      },
      {
        heading: "Support for transitions and pressure",
        body:
          "Common counseling concerns include anxiety, depression, burnout, parenting stress, grief, communication problems, and major life changes that have become hard to carry alone.",
      },
      {
        heading: "A respectful Christian option",
        body:
          "For clients who want faith-based counseling, Eden can integrate Christian reflection in a respectful and client-led way.",
      },
    ],
    faqs: [
      {
        question: "Does Eden see clients from Oak Hill?",
        answer: sharedTelehealthNote,
      },
      {
        question: "Can counseling help with life transitions?",
        answer:
          "Yes. Counseling can help clients process change, identify needs, strengthen coping skills, and make decisions with more clarity.",
      },
    ],
  },
  {
    kind: "area",
    slug: "shady-hollow",
    title: "Counseling for Shady Hollow",
    shortTitle: "Shady Hollow",
    metaTitle: "Counseling for Shady Hollow | South Austin Online Therapy",
    metaDescription:
      "Online counseling for Shady Hollow clients seeking support for anxiety, burnout, faith, family stress, teen concerns, and relationships.",
    primaryKeyword: "counseling Shady Hollow",
    secondaryKeywords: ["Shady Hollow therapist", "Christian counseling Shady Hollow", "South Austin telehealth therapy"],
    intent: "Local counseling search near Shady Hollow and South Austin.",
    audience: "Families, teens, adults, and couples near Shady Hollow.",
    localSignals: ["Shady Hollow", "Brodie Lane", "Slaughter Lane", "South Austin"],
    sections: [
      {
        heading: "A telehealth option for Shady Hollow families",
        body:
          "Shady Hollow clients may be looking for counseling that is accessible, relational, and respectful of family and faith. Eden offers online sessions for clients physically located in Texas.",
      },
      {
        heading: "Support for teens and adults",
        body:
          "Counseling may help with anxiety, school stress, self-esteem, emotional regulation, burnout, parenting concerns, grief, and relational strain.",
      },
      {
        heading: "Faith integration stays optional",
        body:
          "Clients who want Christian counseling can include faith in the work. Clients who do not want explicit faith integration can receive counseling that respects that preference.",
      },
    ],
    faqs: [
      {
        question: "Can Shady Hollow teens work with Eden?",
        answer:
          "Teen counseling may be available for adolescents ages 13 and up when appropriate and with parent or guardian involvement.",
      },
      {
        question: "Can parents attend part of teen counseling?",
        answer:
          "Parent involvement is handled carefully and ethically. The exact structure depends on the teen's age, goals, safety needs, and confidentiality requirements.",
      },
    ],
  },
  {
    kind: "area",
    slug: "driftwood",
    title: "Counseling for Driftwood, TX",
    shortTitle: "Driftwood",
    metaTitle: "Counseling for Driftwood, TX | Faith-Based Telehealth",
    metaDescription:
      "Online counseling for Driftwood clients seeking Christian-informed support for stress, anxiety, grief, relationships, and life transitions.",
    primaryKeyword: "counseling Driftwood TX",
    secondaryKeywords: ["Driftwood therapist", "Christian counseling Driftwood", "telehealth therapy Driftwood TX"],
    intent: "Local therapy search for Driftwood and nearby Hays County.",
    audience: "Adults, couples, parents, and teens near Driftwood.",
    localSignals: ["Driftwood", "Hays County", "Buda", "Dripping Springs"],
    sections: [
      {
        heading: "Counseling for Driftwood clients",
        body:
          "Eden offers online counseling for clients in Driftwood and nearby Hays County communities. Telehealth can be a good fit for clients who value privacy and want care without a long drive.",
      },
      {
        heading: "Care for pressure, loss, and relational pain",
        body:
          "Sessions can address anxiety, grief, burnout, marriage strain, parenting stress, teen concerns, or the sense that life has become harder to manage than it used to be.",
      },
      {
        heading: "Christian counseling that is not simplistic",
        body:
          "Faith-based counseling can make room for God, Scripture, doubt, lament, and hope while still taking emotional pain seriously.",
      },
    ],
    faqs: [
      {
        question: "Can Driftwood clients book Eden online?",
        answer: sharedTelehealthNote,
      },
      {
        question: "Is faith-based counseling only for church members?",
        answer:
          "No. Clients do not need to belong to a specific church to request faith-informed counseling.",
      },
    ],
  },
  {
    kind: "area",
    slug: "pflugerville",
    title: "Christian Counseling for Pflugerville, TX",
    shortTitle: "Pflugerville",
    metaTitle: "Christian Counseling for Pflugerville, TX | Telehealth Therapy",
    metaDescription:
      "Faith-informed telehealth counseling for Pflugerville, TX adults, teens, and couples. Anxiety, depression, marriage, faith, and life transition support.",
    primaryKeyword: "Christian counseling Pflugerville TX",
    secondaryKeywords: ["Pflugerville therapist", "counseling Pflugerville", "faith-based therapy Pflugerville"],
    intent: "Local counseling search for Pflugerville residents who want Christian-informed support.",
    audience: "Pflugerville adults, teens, couples, and families across northeast Travis County.",
    localSignals: ["Downtown Pflugerville", "Stone Hill Town Center", "Lake Pflugerville", "Heatherwilde", "FM 1825"],
    sections: [
      {
        heading: "Counseling for Pflugerville families",
        body:
          "Pflugerville has grown into a busy bedroom community with families balancing tech industry jobs, school schedules, and a long commute. Eden offers telehealth counseling so clients can meet with a licensed therapist from home without adding another drive to the day.",
      },
      {
        heading: "Support for the seasons of life",
        body:
          "Sessions can focus on anxiety, depression, burnout, parenting strain, marriage communication, grief, or a faith question that has become difficult to carry alone. The work is collaborative and paced to where you are starting from.",
      },
      {
        heading: "Faith integration when it helps",
        body:
          "Christian counseling can include Scripture, prayer, and spiritual reflection when the client wants that approach. Eden does not use faith to bypass real pain; it makes space for honest healing alongside a relationship with God.",
      },
    ],
    faqs: [
      {
        question: "Does Eden Counseling have an office in Pflugerville?",
        answer:
          "No. Eden is telehealth-first. Pflugerville residents can meet online when physically located in Texas during the session.",
      },
      {
        question: "Can Pflugerville teens use counseling?",
        answer:
          "Yes, teen counseling may be available for adolescents ages 13 and up when appropriate and with parent or guardian involvement.",
      },
    ],
  },
  {
    kind: "area",
    slug: "round-rock",
    title: "Christian Counseling for Round Rock, TX",
    shortTitle: "Round Rock",
    metaTitle: "Christian Counseling for Round Rock, TX | Telehealth Therapy",
    metaDescription:
      "Faith-based telehealth counseling for Round Rock, TX clients. Support for anxiety, depression, marriage, parenting, faith, and life transitions.",
    primaryKeyword: "Christian counseling Round Rock TX",
    secondaryKeywords: ["Round Rock therapist", "counseling Round Rock", "faith-based therapy Round Rock"],
    intent: "Local therapy search for Round Rock residents looking for Christian counseling.",
    audience: "Round Rock adults, teens, couples, parents, and working professionals.",
    localSignals: ["Downtown Round Rock", "La Frontera", "Old Settlers Park", "Brushy Creek", "I-35 corridor"],
    sections: [
      {
        heading: "Counseling that fits Round Rock life",
        body:
          "Round Rock families often juggle dual incomes, kids' activities, school pressure, and the steady pace of life along the I-35 corridor. Eden offers telehealth counseling so clients can find space to process anxiety, relationship strain, faith questions, or grief without the added burden of a commute.",
      },
      {
        heading: "Common reasons clients reach out",
        body:
          "Sessions can support anxiety, depression, burnout, marital conflict, parenting overwhelm, loss, life transitions, or the sense that something has changed and you cannot quite name it. Counseling is a place to slow down, get clarity, and build healthier patterns.",
      },
      {
        heading: "Christian counseling, client-directed",
        body:
          "Faith can be part of the work for clients who want it. Eden integrates Scripture, prayer, and spiritual reflection when the client requests, and offers clinical-only sessions when faith is not the focus.",
      },
    ],
    faqs: [
      {
        question: "Is Eden a Round Rock office I can walk into?",
        answer:
          "No. Eden is telehealth-first. Round Rock residents can attend sessions online while physically located in Texas.",
      },
      {
        question: "Does Eden see couples in Round Rock?",
        answer:
          "Marriage and couples counseling may be available on a case-by-case basis when both clients are in Texas.",
      },
    ],
  },
  {
    kind: "area",
    slug: "cedar-park",
    title: "Christian Counseling for Cedar Park, TX",
    shortTitle: "Cedar Park",
    metaTitle: "Christian Counseling for Cedar Park, TX | Telehealth Therapy",
    metaDescription:
      "Faith-informed online counseling for Cedar Park, TX. Support for anxiety, depression, faith, relationships, parenting, and life transitions.",
    primaryKeyword: "Christian counseling Cedar Park TX",
    secondaryKeywords: ["Cedar Park therapist", "counseling Cedar Park", "faith-based therapy Cedar Park"],
    intent: "Local counseling search for Cedar Park residents looking for Christian therapy.",
    audience: "Cedar Park adults, teens, parents, couples, and growing families.",
    localSignals: ["Cedar Park", "Lakeline Mall", "Brushy Creek Lake Park", "1890 Ranch", "183A toll"],
    sections: [
      {
        heading: "Counseling for Cedar Park families",
        body:
          "Cedar Park is full of young families, busy professionals, and people who moved here for the schools or the proximity to tech work. Eden offers telehealth counseling for clients who want a thoughtful, faith-informed space to work through anxiety, marriage stress, parenting questions, or seasons of grief.",
      },
      {
        heading: "Common reasons clients reach out",
        body:
          "Sessions can support anxiety, burnout, depression, communication problems, faith questions, parenting overwhelm, or the quiet sense that life has shifted and needs attention. The goal is steady, honest work toward clarity and healthier patterns.",
      },
      {
        heading: "Faith as part of healing",
        body:
          "Clients who want Christian counseling can request integration of Scripture, prayer, and spiritual reflection. Faith is held with care alongside evidence-informed therapy practices.",
      },
    ],
    faqs: [
      {
        question: "Can Cedar Park clients meet online?",
        answer: sharedTelehealthNote,
      },
      {
        question: "Is Christian counseling required?",
        answer:
          "No. Faith integration is optional and client-directed. Clients can request a clinical approach without explicit faith integration.",
      },
    ],
  },
  {
    kind: "area",
    slug: "leander",
    title: "Christian Counseling for Leander, TX",
    shortTitle: "Leander",
    metaTitle: "Christian Counseling for Leander, TX | Telehealth Therapy",
    metaDescription:
      "Telehealth Christian counseling for Leander, TX adults, teens, and couples. Anxiety, faith, parenting, marriage, and life transitions.",
    primaryKeyword: "Christian counseling Leander TX",
    secondaryKeywords: ["Leander therapist", "counseling Leander", "faith-based therapy Leander"],
    intent: "Local counseling search for Leander residents who want Christian therapy.",
    audience: "Leander adults, teens, parents, and couples across northwest Williamson County.",
    localSignals: ["Leander", "Crystal Falls", "Travisso", "183A corridor", "Cedar Park line"],
    sections: [
      {
        heading: "Therapy that fits Leander's growth and pace",
        body:
          "Leander has grown quickly with new neighborhoods, longer commutes, and families settling in from across the country. Eden offers telehealth counseling so Leander clients can meet from home, take a real break in the middle of a busy week, and work on what is actually weighing on them.",
      },
      {
        heading: "Support for stress, faith, and family life",
        body:
          "Sessions can address anxiety, depression, communication problems, parenting stress, grief, faith confusion, or a difficult life transition. The work is honest and paced; not rushed.",
      },
      {
        heading: "Christian-informed when it helps",
        body:
          "Faith integration is available for clients who want Scripture, prayer, and spiritual reflection as part of care. Eden does not use faith to minimize struggle; it walks alongside it.",
      },
    ],
    faqs: [
      {
        question: "Does Eden have an office in Leander?",
        answer:
          "No. Eden is telehealth-first. Leander residents can attend sessions online while physically located in Texas.",
      },
      {
        question: "How do Leander teens access counseling?",
        answer:
          "Teen counseling may be available for ages 13 and up with parent or guardian involvement.",
      },
    ],
  },
  {
    kind: "area",
    slug: "georgetown",
    title: "Christian Counseling for Georgetown, TX",
    shortTitle: "Georgetown",
    metaTitle: "Christian Counseling for Georgetown, TX | Telehealth Therapy",
    metaDescription:
      "Faith-based telehealth counseling for Georgetown, TX residents. Support for anxiety, faith, relationships, grief, and life transitions.",
    primaryKeyword: "Christian counseling Georgetown TX",
    secondaryKeywords: ["Georgetown therapist", "counseling Georgetown TX", "faith-based therapy Georgetown"],
    intent: "Local search for Christian counseling near Georgetown.",
    audience: "Georgetown adults, retirees, parents, teens, couples, and Southwestern community.",
    localSignals: ["Historic Georgetown Square", "Sun City", "Southwestern University", "Lake Georgetown", "Wolf Ranch"],
    sections: [
      {
        heading: "Counseling for a community rooted in faith",
        body:
          "Georgetown has a strong faith community, a growing population of retirees, and many families settling in for the long term. Eden offers telehealth counseling for clients who want care that respects faith while taking real emotional and relational struggles seriously.",
      },
      {
        heading: "Support across life stages",
        body:
          "Sessions can support anxiety, depression, grief, marriage stress, parenting, life transitions, and questions about purpose or faith. The goal is steady, paced work; not a checklist.",
      },
      {
        heading: "Faith and clinical care together",
        body:
          "Christian counseling can integrate Scripture, prayer, and spiritual practices when the client wants. Eden also offers clinical-only sessions for clients who do not want faith content woven into therapy.",
      },
    ],
    faqs: [
      {
        question: "Is counseling available for Sun City Georgetown residents?",
        answer:
          "Yes, Sun City and other Georgetown residents can meet online while physically located in Texas during the session.",
      },
      {
        question: "Is Eden a walk-in office in Georgetown?",
        answer:
          "No. Eden is telehealth-first; sessions are video-based.",
      },
    ],
  },
  {
    kind: "area",
    slug: "lakeway",
    title: "Christian Counseling for Lakeway, TX",
    shortTitle: "Lakeway",
    metaTitle: "Christian Counseling for Lakeway, TX | Telehealth Therapy",
    metaDescription:
      "Telehealth Christian counseling for Lakeway, Bee Cave, and Westlake clients. Anxiety, depression, marriage, faith, and life transitions.",
    primaryKeyword: "Christian counseling Lakeway TX",
    secondaryKeywords: ["Lakeway therapist", "counseling Bee Cave", "faith-based therapy Westlake"],
    intent: "Local counseling search for Lakeway, Bee Cave, and Westlake-area residents.",
    audience: "Lakeway, Bee Cave, Westlake, and Hill Country West Austin residents.",
    localSignals: ["Lakeway", "Bee Cave", "Lake Travis", "Hill Country Galleria", "Westlake Hills"],
    sections: [
      {
        heading: "Counseling for Hill Country West Austin life",
        body:
          "Lakeway, Bee Cave, and Westlake are full of families balancing demanding careers, school choices, and the privacy that comes with the area. Eden offers telehealth counseling so clients can attend sessions from home or another private space without crossing town.",
      },
      {
        heading: "Common reasons clients reach out",
        body:
          "Sessions may focus on anxiety, depression, burnout, communication and marriage strain, grief, faith questions, or life transitions. Counseling is a place to slow down, get clarity, and rebuild healthier patterns.",
      },
      {
        heading: "Faith integration on request",
        body:
          "Christian counseling can include Scripture, prayer, and spiritual reflection when desired. Faith is integrated with care, not used to bypass real emotional work.",
      },
    ],
    faqs: [
      {
        question: "Do you offer in-person counseling in Lakeway or Bee Cave?",
        answer:
          "No. Eden is telehealth-first. Clients meet online while physically located in Texas.",
      },
      {
        question: "Can Westlake clients use Eden Counseling?",
        answer:
          "Yes. Westlake, Lakeway, Bee Cave, and other Hill Country West Austin clients can meet via secure video sessions.",
      },
    ],
  },
  {
    kind: "area",
    slug: "dripping-springs",
    title: "Christian Counseling for Dripping Springs, TX",
    shortTitle: "Dripping Springs",
    metaTitle: "Christian Counseling for Dripping Springs, TX | Telehealth Therapy",
    metaDescription:
      "Faith-based telehealth counseling for Dripping Springs, TX clients. Support for anxiety, faith, marriage, parenting, and life transitions.",
    primaryKeyword: "Christian counseling Dripping Springs TX",
    secondaryKeywords: ["Dripping Springs therapist", "counseling Dripping Springs", "faith-based therapy Dripping Springs"],
    intent: "Local search for Christian counseling near Dripping Springs.",
    audience: "Dripping Springs adults, teens, parents, and couples across Hill Country.",
    localSignals: ["Dripping Springs", "Hill Country", "Hamilton Pool Road", "Highway 290", "Wimberley"],
    sections: [
      {
        heading: "Counseling for Hill Country residents",
        body:
          "Dripping Springs has grown into a Hill Country community with families, ranchers, professionals, and a strong sense of faith. Eden offers telehealth counseling for clients who want thoughtful Christian-informed therapy without driving into Austin for every session.",
      },
      {
        heading: "Support for what is actually heavy",
        body:
          "Sessions can address anxiety, marriage strain, parenting overwhelm, grief, faith confusion, burnout, or a transition that has been harder than expected. The work is steady, honest, and respectful of where you are starting.",
      },
      {
        heading: "Christian counseling that holds tension",
        body:
          "Faith integration is available when the client wants it. Counseling can hold both genuine spiritual depth and the realities of emotional pain without flattening either.",
      },
    ],
    faqs: [
      {
        question: "Do you have an office in Dripping Springs?",
        answer:
          "No. Eden is telehealth-first. Dripping Springs residents can attend sessions online while physically located in Texas.",
      },
      {
        question: "Are sessions just for church members?",
        answer:
          "No. You do not need to be part of a specific church to request faith-informed counseling. Eden also offers clinical-only sessions when preferred.",
      },
    ],
  },
];

export const therapyPages: AuthorityPage[] = [
  {
    kind: "therapy",
    slug: "christian-counseling",
    title: "Christian Counseling in Austin, Buda, and Texas",
    shortTitle: "Christian Counseling",
    metaTitle: "Christian Counseling in Austin, Buda, and Texas",
    metaDescription:
      "Christian counseling through secure telehealth for Texas clients who want faith-informed support for anxiety, grief, relationships, and life transitions.",
    primaryKeyword: "Christian counseling Austin TX",
    secondaryKeywords: ["Christian counseling Buda TX", "faith-based counseling Texas", "Christian therapist Austin"],
    intent: "Service search for faith-integrated counseling.",
    audience: "Clients who want counseling that can include Christian faith.",
    sections: [
      {
        heading: "Counseling that makes room for faith",
        body:
          "Christian counseling at Eden is for clients who want their emotional health and faith to be held together. Sessions can include Scripture, prayer, spiritual reflection, and honest questions while still using evidence-informed counseling skills.",
      },
      {
        heading: "Faith is not used to bypass pain",
        body:
          "Faith-based counseling should not minimize grief, anxiety, trauma, depression, or relational pain. Eden's approach takes suffering seriously and works toward practical, compassionate care.",
      },
      {
        heading: "Available by telehealth across Texas",
        body: sharedTelehealthNote,
      },
    ],
    faqs: [
      {
        question: "Do I have to be a Christian to work with Eden?",
        answer:
          "No. Eden can provide counseling that respects your preferences. Faith integration is available when requested but is not forced.",
      },
      {
        question: "Can Christian counseling include clinical tools?",
        answer:
          "Yes. Christian counseling can include evidence-informed tools for coping, communication, boundaries, emotional regulation, and reflection.",
      },
    ],
  },
  {
    kind: "therapy",
    slug: "faith-based-therapy",
    title: "Faith-Based Therapy",
    shortTitle: "Faith-Based Therapy",
    metaTitle: "Faith-Based Therapy in Texas | Eden Counseling",
    metaDescription:
      "Faith-based therapy for Texas clients who want Christian reflection integrated with practical counseling support.",
    primaryKeyword: "faith-based therapy Texas",
    secondaryKeywords: ["Christian therapy Texas", "faith-based therapist Austin", "biblical counseling and therapy"],
    intent: "Service search for explicitly faith-integrated therapy.",
    audience: "Clients who want therapy that honors Christian belief.",
    sections: [
      {
        heading: "What faith-based therapy means at Eden",
        body:
          "Faith-based therapy means Christian faith can be part of the conversation when the client wants it. It may include prayer, Scripture, spiritual themes, or reflection on how beliefs shape choices, relationships, grief, and hope.",
      },
      {
        heading: "Client-led integration",
        body:
          "The client determines how much faith is included. Some clients want direct Christian reflection in most sessions. Others simply want a counselor who understands and respects faith as part of their life.",
      },
      {
        heading: "Therapy for real life",
        body:
          "Faith-based therapy can support clients working through anxiety, relationship strain, loss, depression, family stress, life transitions, or seasons of spiritual discouragement.",
      },
    ],
    faqs: [
      {
        question: "Is faith-based therapy the same as pastoral counseling?",
        answer:
          "Not exactly. Eden provides counseling from an LPC-Associate under supervision, and faith can be integrated when requested. Pastoral counseling is typically provided through a church or ministry setting.",
      },
      {
        question: "Will Scripture be used in every session?",
        answer:
          "Only if that fits the client's goals and preferences. Faith integration is discussed and adjusted as counseling progresses.",
      },
    ],
  },
  {
    kind: "therapy",
    slug: "anxiety-counseling",
    title: "Anxiety Counseling",
    shortTitle: "Anxiety",
    metaTitle: "Anxiety Counseling in Austin, Buda, and Texas",
    metaDescription:
      "Telehealth anxiety counseling for Texas clients who feel overwhelmed by worry, stress, panic, overthinking, or fear.",
    primaryKeyword: "anxiety counseling Austin TX",
    secondaryKeywords: ["anxiety therapy Buda TX", "Christian anxiety counseling", "online anxiety therapy Texas"],
    intent: "Condition-specific counseling search.",
    audience: "Adults and teens experiencing worry, stress, fear, panic, or overthinking.",
    sections: [
      {
        heading: "When worry takes over",
        body:
          "Anxiety can show up as racing thoughts, tension, irritability, avoidance, sleep problems, panic, perfectionism, or constant scanning for what might go wrong. Counseling helps clients notice patterns and practice healthier responses.",
      },
      {
        heading: "A practical and compassionate approach",
        body:
          "Anxiety counseling may include grounding skills, thought work, values-based choices, emotional regulation, boundary work, and gradual steps toward what the client has been avoiding.",
      },
      {
        heading: "Faith and anxiety",
        body:
          "For Christian clients, anxiety can also bring guilt or spiritual confusion. Faith-informed counseling can address worry without shaming the client for feeling afraid.",
      },
    ],
    faqs: [
      {
        question: "Can counseling help if my anxiety is not severe?",
        answer:
          "Yes. Counseling can be helpful before anxiety becomes a crisis, especially when worry is affecting sleep, relationships, work, school, or faith.",
      },
      {
        question: "Can teens receive anxiety counseling?",
        answer:
          "Teen counseling may be available for adolescents ages 13 and up when appropriate and with parent or guardian involvement.",
      },
    ],
  },
  {
    kind: "therapy",
    slug: "depression-counseling",
    title: "Depression Counseling",
    shortTitle: "Depression",
    metaTitle: "Depression Counseling in Austin, Buda, and Texas",
    metaDescription:
      "Online depression counseling for Texas clients experiencing sadness, numbness, low motivation, isolation, or hopelessness.",
    primaryKeyword: "depression counseling Austin TX",
    secondaryKeywords: ["depression therapy Buda TX", "Christian depression counseling", "online depression counseling Texas"],
    intent: "Condition-specific counseling search.",
    audience: "Adults and teens dealing with low mood, numbness, isolation, or loss of motivation.",
    sections: [
      {
        heading: "When life feels heavy",
        body:
          "Depression can feel like sadness, numbness, exhaustion, isolation, shame, or a loss of interest in things that used to matter. Counseling gives clients a steady place to speak honestly and begin taking small steps toward care.",
      },
      {
        heading: "Moving at a sustainable pace",
        body:
          "Depression counseling may include emotional support, routines, thought patterns, relational support, grief work, values, and next steps that match the client's capacity.",
      },
      {
        heading: "Faith without shame",
        body:
          "Christian clients sometimes feel pressure to appear joyful or spiritually strong. Faith-informed counseling can hold lament and hope together without minimizing pain.",
      },
    ],
    faqs: [
      {
        question: "Is depression counseling a replacement for emergency help?",
        answer:
          "No. If you are in crisis or immediate danger, call 988, text HOME to 741741, or call 911.",
      },
      {
        question: "Can depression counseling be online?",
        answer: sharedTelehealthNote,
      },
    ],
  },
  {
    kind: "therapy",
    slug: "trauma-informed-counseling",
    title: "Trauma-Informed Counseling",
    shortTitle: "Trauma-Informed",
    metaTitle: "Trauma-Informed Counseling in Austin, Buda, and Texas",
    metaDescription:
      "Trauma-informed telehealth counseling for Texas clients who want a careful, compassionate space to process painful experiences.",
    primaryKeyword: "trauma-informed counseling Austin TX",
    secondaryKeywords: ["trauma therapy Buda TX", "Christian trauma counseling", "online trauma counseling Texas"],
    intent: "Trauma-informed counseling search.",
    audience: "Clients processing painful experiences, stress responses, or relational wounds.",
    sections: [
      {
        heading: "A careful pace for painful stories",
        body:
          "Trauma-informed counseling prioritizes safety, choice, collaboration, and stabilization. The goal is not to force a client to revisit everything quickly; it is to build enough support for healing work to be possible.",
      },
      {
        heading: "How trauma can show up",
        body:
          "Trauma responses may include anxiety, numbness, irritability, avoidance, shame, sleep disruption, relationship difficulties, or feeling disconnected from yourself, others, or God.",
      },
      {
        heading: "Faith-sensitive trauma care",
        body:
          "For clients who want it, faith can be part of trauma-informed care in a gentle way that avoids simplistic answers and honors the client's story.",
      },
    ],
    faqs: [
      {
        question: "Will I have to talk about everything right away?",
        answer:
          "No. Trauma-informed counseling moves carefully and focuses on safety, trust, coping skills, and consent throughout the process.",
      },
      {
        question: "Can trauma counseling include Christian faith?",
        answer:
          "Yes, when requested. Faith integration should be gentle, client-led, and never used to pressure a client past their capacity.",
      },
    ],
  },
  {
    kind: "therapy",
    slug: "teen-counseling",
    title: "Teen Counseling",
    shortTitle: "Teen Counseling",
    metaTitle: "Teen Counseling in Austin, Buda, and Texas",
    metaDescription:
      "Telehealth counseling for teens ages 13 and up in Texas, with support for anxiety, stress, self-esteem, family dynamics, and faith.",
    primaryKeyword: "teen counseling Austin TX",
    secondaryKeywords: ["adolescent counseling Buda TX", "Christian teen counseling", "online teen therapy Texas"],
    intent: "Parent and teen search for adolescent counseling.",
    audience: "Teens ages 13 and up and their parents or guardians.",
    sections: [
      {
        heading: "Support for teens in a high-pressure season",
        body:
          "Teen counseling can help adolescents process anxiety, school stress, self-esteem, friendships, family conflict, grief, and questions about identity or faith.",
      },
      {
        heading: "Parent involvement with respect for privacy",
        body:
          "Teen counseling works best when parents are appropriately involved while the teen also has space for honest conversation. Confidentiality and safety limits are explained clearly during intake.",
      },
      {
        heading: "Faith integration when appropriate",
        body:
          "For families who want Christian counseling, sessions can respectfully include faith themes while still meeting the teen with compassion and developmental care.",
      },
    ],
    faqs: [
      {
        question: "What ages does Eden see for teen counseling?",
        answer:
          "Eden notes adolescent counseling for ages 13 and up, depending on fit, needs, and parent or guardian involvement.",
      },
      {
        question: "Can parents know what is discussed?",
        answer:
          "Counseling balances teen privacy with parent involvement and safety obligations. The structure is discussed before care begins.",
      },
    ],
  },
  {
    kind: "therapy",
    slug: "marriage-counseling",
    title: "Marriage Counseling",
    shortTitle: "Marriage",
    metaTitle: "Marriage Counseling in Austin, Buda, and Texas",
    metaDescription:
      "Online marriage counseling for Texas couples who want help with communication, trust, disconnection, conflict, and faith.",
    primaryKeyword: "marriage counseling Austin TX",
    secondaryKeywords: ["marriage counseling Buda TX", "Christian marriage counseling", "online couples counseling Texas"],
    intent: "Couples search for marriage counseling.",
    audience: "Married couples and premarital couples seeking support.",
    sections: [
      {
        heading: "When marriage feels stuck",
        body:
          "Marriage counseling gives couples a structured place to talk about conflict, communication, trust, emotional disconnection, expectations, and life transitions.",
      },
      {
        heading: "A space for both people",
        body:
          "The goal is not to assign blame. The goal is to understand patterns, clarify needs, practice different conversations, and decide what repair requires.",
      },
      {
        heading: "Christian marriage counseling",
        body:
          "For couples who request it, faith can be included through Scripture, prayer, forgiveness work, covenant language, and reflection on how each spouse wants to love well.",
      },
    ],
    faqs: [
      {
        question: "Is marriage counseling available online?",
        answer:
          "Marriage counseling may be available through telehealth on a case-by-case basis when both clients are physically located in Texas.",
      },
      {
        question: "Do both spouses need to participate?",
        answer:
          "Couples work generally requires both partners to participate. Individual counseling may be a separate option for personal concerns.",
      },
    ],
  },
  {
    kind: "therapy",
    slug: "couples-communication",
    title: "Couples Communication Counseling",
    shortTitle: "Couples Communication",
    metaTitle: "Couples Communication Counseling | Austin and Buda Telehealth",
    metaDescription:
      "Online counseling for Texas couples who want healthier communication, less conflict, clearer repair, and stronger connection.",
    primaryKeyword: "couples communication counseling",
    secondaryKeywords: ["couples counseling Austin TX", "communication counseling Buda", "Christian couples counseling"],
    intent: "Specific couples issue search.",
    audience: "Couples who feel caught in repeating conflict or disconnection.",
    sections: [
      {
        heading: "When every conversation turns into conflict",
        body:
          "Couples communication counseling helps partners notice the cycle they get stuck in. Sessions focus on slowing down, naming needs, listening more clearly, and practicing repair.",
      },
      {
        heading: "Practical work between sessions",
        body:
          "Couples often need more than insight. Counseling may include communication tools, boundary conversations, conflict pauses, repair attempts, and ways to rebuild emotional connection.",
      },
      {
        heading: "Faith and communication",
        body:
          "Christian couples can include faith as part of the work, including humility, confession, forgiveness, and wisdom about how to love each other well.",
      },
    ],
    faqs: [
      {
        question: "Can counseling help if we argue about the same thing repeatedly?",
        answer:
          "Yes. Repeating arguments often point to a pattern that can be identified, slowed down, and approached differently.",
      },
      {
        question: "Is this the same as marriage counseling?",
        answer:
          "It can be part of marriage counseling, but this page focuses specifically on communication patterns and conflict repair.",
      },
    ],
  },
  {
    kind: "therapy",
    slug: "life-transitions",
    title: "Life Transitions Counseling",
    shortTitle: "Life Transitions",
    metaTitle: "Life Transitions Counseling in Austin, Buda, and Texas",
    metaDescription:
      "Telehealth counseling for Texas clients navigating moves, career changes, marriage, parenting, grief, faith shifts, or major life transitions.",
    primaryKeyword: "life transitions counseling Austin TX",
    secondaryKeywords: ["life change therapy Buda", "Christian counseling life transitions", "online counseling Texas"],
    intent: "Issue-specific search for support during change.",
    audience: "Adults and teens navigating major decisions or changes.",
    sections: [
      {
        heading: "When change unsettles everything",
        body:
          "Even good changes can bring anxiety, grief, conflict, and identity questions. Life transitions counseling helps clients process what is changing and what they need in order to move forward.",
      },
      {
        heading: "Common transitions",
        body:
          "Clients may seek counseling during moves, career shifts, marriage, parenting, divorce, caregiving, graduation, faith changes, loss, or a season where the old way of coping no longer works.",
      },
      {
        heading: "Discernment and faith",
        body:
          "For Christian clients, transition often raises questions about calling, surrender, wisdom, grief, and hope. Counseling can create space to discern without rushing.",
      },
    ],
    faqs: [
      {
        question: "Do I need a diagnosis to get help with a life transition?",
        answer:
          "No. Counseling can be useful when a transition is affecting your emotional health, relationships, decisions, or sense of stability.",
      },
      {
        question: "Can counseling help with decision-making?",
        answer:
          "Counseling does not make decisions for you, but it can help you clarify values, fears, patterns, and next steps.",
      },
    ],
  },
  {
    kind: "therapy",
    slug: "grief-counseling",
    title: "Grief Counseling",
    shortTitle: "Grief",
    metaTitle: "Grief Counseling in Austin, Buda, and Texas",
    metaDescription:
      "Online grief counseling for Texas clients processing loss, sorrow, life changes, complicated emotions, and faith questions.",
    primaryKeyword: "grief counseling Austin TX",
    secondaryKeywords: ["grief counseling Buda TX", "Christian grief counseling", "online grief therapy Texas"],
    intent: "Issue-specific grief counseling search.",
    audience: "Clients processing death, relationship loss, transition, or layered grief.",
    sections: [
      {
        heading: "A place for grief to be named",
        body:
          "Grief can come after death, divorce, estrangement, infertility, health changes, moving, lost dreams, or a season that ended before you were ready. Counseling gives grief room to be acknowledged instead of rushed.",
      },
      {
        heading: "Grief does not follow a neat timeline",
        body:
          "Counseling may help clients process sadness, anger, guilt, numbness, memories, family dynamics, and the practical realities of living after loss.",
      },
      {
        heading: "Faith, lament, and hope",
        body:
          "Christian grief counseling can include lament, prayer, Scripture, and hope while still honoring the reality of sorrow.",
      },
    ],
    faqs: [
      {
        question: "Is grief counseling only for death loss?",
        answer:
          "No. Grief can follow many kinds of loss, including relationship loss, health changes, transition, and lost expectations.",
      },
      {
        question: "Can faith questions be part of grief counseling?",
        answer:
          "Yes, when requested. Grief often raises spiritual questions, and counseling can make room for them.",
      },
    ],
  },
  {
    kind: "therapy",
    slug: "stress-burnout",
    title: "Stress and Burnout Counseling",
    shortTitle: "Stress and Burnout",
    metaTitle: "Stress and Burnout Counseling in Austin, Buda, and Texas",
    metaDescription:
      "Telehealth counseling for Texas clients dealing with stress, burnout, overwhelm, emotional exhaustion, and pressure.",
    primaryKeyword: "burnout counseling Austin TX",
    secondaryKeywords: ["stress counseling Buda TX", "Christian burnout counseling", "online therapy for burnout Texas"],
    intent: "Issue-specific search for stress and burnout support.",
    audience: "Adults, parents, helpers, students, and working professionals.",
    sections: [
      {
        heading: "When you are tired of being tired",
        body:
          "Burnout can look like exhaustion, irritability, numbness, resentment, loss of motivation, or feeling like you are always behind. Counseling can help clients understand what is draining them and what needs to change.",
      },
      {
        heading: "More than time management",
        body:
          "Stress counseling can include boundaries, emotional regulation, values, rest, relational expectations, perfectionism, and practical ways to stop living in constant survival mode.",
      },
      {
        heading: "A faith-informed view of limits",
        body:
          "Christian clients may need permission to see limits as human rather than failure. Counseling can explore rest, stewardship, service, and wisdom without spiritual pressure.",
      },
    ],
    faqs: [
      {
        question: "How do I know if I am burned out?",
        answer:
          "Common signs include exhaustion, cynicism, irritability, difficulty caring, reduced effectiveness, and feeling emotionally depleted.",
      },
      {
        question: "Can counseling help if my stress is caused by work?",
        answer:
          "Yes. Counseling can help clients understand patterns, boundaries, coping skills, and decisions related to work stress.",
      },
    ],
  },
  {
    kind: "therapy",
    slug: "telehealth-counseling-texas",
    title: "Telehealth Counseling in Texas",
    shortTitle: "Telehealth Texas",
    metaTitle: "Telehealth Counseling in Texas | Eden Counseling",
    metaDescription:
      "Secure online counseling for clients physically located in Texas, including Austin, Buda, Kyle, South Austin, and nearby communities.",
    primaryKeyword: "telehealth counseling Texas",
    secondaryKeywords: ["online therapy Texas", "virtual counseling Austin", "telehealth therapy Buda"],
    intent: "Telehealth counseling search across Texas.",
    audience: "Clients who want online counseling from a private space.",
    sections: [
      {
        heading: "Counseling from a private place",
        body:
          "Telehealth counseling lets clients meet from home, work, or another confidential space. For many people, it removes the barriers of commuting, waiting rooms, childcare logistics, or travel time.",
      },
      {
        heading: "Texas location requirement",
        body: sharedTelehealthNote,
      },
      {
        heading: "A good fit for many concerns",
        body:
          "Online counseling can support anxiety, depression, stress, grief, life transitions, teen concerns, faith questions, and relationship patterns. Crisis situations require immediate crisis support rather than routine telehealth counseling.",
      },
    ],
    faqs: [
      {
        question: "Do I have to live in Austin or Buda?",
        answer:
          "No. You can be elsewhere in Texas, but you must be physically located in Texas during the session.",
      },
      {
        question: "What do I need for telehealth?",
        answer:
          "You need a private space, reliable internet, and a device with camera and microphone access.",
      },
    ],
  },
];

export const faqPages: AuthorityPage[] = [
  {
    kind: "faq",
    slug: "cost-of-counseling",
    title: "How Much Does Counseling Cost?",
    shortTitle: "Cost",
    metaTitle: "How Much Does Counseling Cost? | Eden Counseling FAQ",
    metaDescription:
      "Learn Eden Counseling session rates, private-pay expectations, and what to ask before starting counseling.",
    primaryKeyword: "how much does counseling cost Austin TX",
    secondaryKeywords: ["therapy cost Austin", "private pay counseling Texas", "counseling rates Buda TX"],
    intent: "Cost and private-pay decision search.",
    audience: "Prospective clients comparing counseling cost and fit.",
    sections: [
      {
        heading: "Current session rates",
        body:
          "The site currently lists individual counseling at $75 for a 50-minute session, marriage counseling at $100 for a 50-minute session, and adolescent counseling at $60 for a 45-minute session. Confirm current rates before scheduling.",
      },
      {
        heading: "Private pay can be simpler",
        body:
          "Private-pay counseling can reduce insurance paperwork and give clients more privacy around what is documented for reimbursement. It also means the client should plan for the out-of-pocket cost.",
      },
      {
        heading: "Questions to ask",
        body:
          "Before beginning counseling, ask about session length, cancellation policy, payment method, telehealth setup, and whether the counselor is a fit for your concerns.",
      },
    ],
    faqs: [
      {
        question: "Does Eden take insurance?",
        answer:
          "Current project notes say Eden is private pay and no insurance. Confirm directly before scheduling in case policies change.",
      },
      {
        question: "Are rates guaranteed?",
        answer:
          "Rates should always be confirmed during scheduling because website content may lag behind practice updates.",
      },
    ],
  },
  {
    kind: "faq",
    slug: "first-session",
    title: "What Happens in the First Counseling Session?",
    shortTitle: "First Session",
    metaTitle: "What Happens in the First Counseling Session? | Eden Counseling FAQ",
    metaDescription:
      "A simple guide to what new clients can expect in the first telehealth counseling session.",
    primaryKeyword: "what happens in first counseling session",
    secondaryKeywords: ["first therapy session Austin", "first counseling appointment", "telehealth first session"],
    intent: "First-session anxiety and expectations search.",
    audience: "New clients who feel nervous about beginning counseling.",
    sections: [
      {
        heading: "The first session is about understanding the story",
        body:
          "A first counseling session usually includes intake questions, your main concerns, goals, relevant history, privacy and consent information, and what you hope will be different through counseling.",
      },
      {
        heading: "You do not have to know exactly what to say",
        body:
          "Many clients start counseling unsure how to explain what is wrong. That is normal. A counselor can help organize the conversation and ask questions that make the process easier.",
      },
      {
        heading: "Telehealth setup",
        body:
          "For online counseling, choose a private space, test your device, and make sure you have enough time before and after the session to settle in.",
      },
    ],
    faqs: [
      {
        question: "Do I have to share everything in the first session?",
        answer:
          "No. The first session starts the relationship and gathers enough information to begin. Deeper topics can unfold at a careful pace.",
      },
      {
        question: "Can faith be discussed in the first session?",
        answer:
          "Yes, if you want faith to be part of counseling. You can also ask for faith integration to be limited or left out.",
      },
    ],
  },
  {
    kind: "faq",
    slug: "what-is-an-lpc-associate",
    title: "What Is an LPC-Associate?",
    shortTitle: "LPC-Associate",
    metaTitle: "What Is an LPC-Associate? | Eden Counseling FAQ",
    metaDescription:
      "Learn what LPC-Associate means in Texas and why supervision matters for counseling clients.",
    primaryKeyword: "what is an LPC Associate Texas",
    secondaryKeywords: ["LPC Associate supervised by LPC-S", "Texas counseling supervision", "LPC Associate counselor"],
    intent: "Credential explanation and trust-building search.",
    audience: "Clients wanting to understand Marissa's credential wording.",
    sections: [
      {
        heading: "What the title means",
        body:
          "In Texas, an LPC-Associate is a counselor who has met education and application requirements and is completing supervised experience toward independent licensure. Eden's confirmed credential wording is Marissa Cooney, LPC-Associate, supervised by Dr. Jennifer McCurrach, LPC-S.",
      },
      {
        heading: "Why supervision matters",
        body:
          "Supervision adds accountability and professional oversight. It is also required by Texas rules before an LPC-Associate can practice independently.",
      },
      {
        heading: "How this should appear on the site",
        body:
          "The website should keep the supervision language visible and accurate anywhere Marissa's credential appears. That builds trust and avoids overclaiming independent licensure.",
      },
    ],
    faqs: [
      {
        question: "Is an LPC-Associate independently licensed?",
        answer:
          "No. Texas states that an LPC-Associate may only provide counseling under supervision and may not practice independently.",
      },
      {
        question: "Who supervises Marissa?",
        answer:
          "The project notes list Marissa Cooney, LPC-Associate, supervised by Dr. Jennifer McCurrach, LPC-S.",
      },
    ],
  },
  {
    kind: "faq",
    slug: "telehealth-privacy",
    title: "Is Telehealth Counseling Private?",
    shortTitle: "Telehealth Privacy",
    metaTitle: "Is Telehealth Counseling Private? | Eden Counseling FAQ",
    metaDescription:
      "Learn how privacy works in telehealth counseling and what clients can do to prepare a confidential space.",
    primaryKeyword: "is telehealth counseling private",
    secondaryKeywords: ["telehealth therapy privacy", "online counseling confidentiality", "private online therapy Texas"],
    intent: "Telehealth privacy objection search.",
    audience: "Prospective clients concerned about privacy.",
    sections: [
      {
        heading: "Privacy starts with the platform and the setting",
        body:
          "Telehealth counseling should use a secure platform and a private setting. Clients should choose a quiet space where they are unlikely to be overheard or interrupted.",
      },
      {
        heading: "Confidentiality still has limits",
        body:
          "Counseling is confidential within legal and ethical limits, including safety-related exceptions. Those limits should be reviewed during intake.",
      },
      {
        heading: "Client-side privacy matters",
        body:
          "Use headphones if possible, close other apps, avoid public Wi-Fi when you can, and schedule sessions at a time when privacy is realistic.",
      },
    ],
    faqs: [
      {
        question: "Can I do telehealth from my car?",
        answer:
          "Sometimes clients use a parked car for privacy, but it must be safe, private, and stationary. Do not attend therapy while driving.",
      },
      {
        question: "Can other people be in the room?",
        answer:
          "Usually no, unless they are part of the session and all parties agree. Privacy should be discussed before the session begins.",
      },
    ],
  },
  {
    kind: "faq",
    slug: "insurance-and-private-pay",
    title: "Does Eden Take Insurance?",
    shortTitle: "Insurance",
    metaTitle: "Does Eden Take Insurance? | Eden Counseling FAQ",
    metaDescription:
      "Learn the current private-pay posture for Eden Counseling and what clients should ask about payment.",
    primaryKeyword: "does Eden Counseling take insurance",
    secondaryKeywords: ["private pay therapy Austin", "counseling no insurance Texas", "therapy payment options"],
    intent: "Payment and insurance decision search.",
    audience: "Prospective clients checking payment fit.",
    sections: [
      {
        heading: "Current project posture",
        body:
          "Current project notes say Eden is private pay and does not take insurance. That should be confirmed directly before scheduling because payment policies can change.",
      },
      {
        heading: "Why clients choose private pay",
        body:
          "Private pay can provide clearer pricing, fewer insurance constraints, and more privacy around diagnosis and claims. The tradeoff is that the client pays directly.",
      },
      {
        heading: "What to ask before booking",
        body:
          "Ask about current rates, accepted payment methods, cancellation policy, superbills if applicable, and whether any reduced-fee options exist.",
      },
    ],
    faqs: [
      {
        question: "Can I submit my own claim to insurance?",
        answer:
          "Ask Eden directly whether superbills or out-of-network documentation are available. Do not assume this is offered.",
      },
      {
        question: "Is private pay always better?",
        answer:
          "Not always. It depends on your budget, privacy preferences, insurance benefits, and clinical needs.",
      },
    ],
  },
  {
    kind: "faq",
    slug: "is-christian-counseling-required",
    title: "Is Christian Counseling Required?",
    shortTitle: "Faith Optional",
    metaTitle: "Is Christian Counseling Required? | Eden Counseling FAQ",
    metaDescription:
      "Learn how Eden handles faith integration and what clients can request if they prefer more or less Christian counseling content.",
    primaryKeyword: "is Christian counseling required",
    secondaryKeywords: ["faith optional counseling", "Christian therapist faith integration", "therapy without faith integration"],
    intent: "Fit and approach concern.",
    audience: "Clients unsure how much faith they want in counseling.",
    sections: [
      {
        heading: "Faith integration is client-directed",
        body:
          "Eden offers faith-based counseling for clients who want it, but Christian integration should be discussed and adjusted based on the client's goals and comfort.",
      },
      {
        heading: "What clients can request",
        body:
          "Clients can ask to include prayer, Scripture, spiritual reflection, or faith questions. Clients can also ask to keep counseling focused on clinical and practical concerns.",
      },
      {
        heading: "Respect matters",
        body:
          "Good counseling respects the client as a person. Faith should never be used to shame, pressure, or simplify pain.",
      },
    ],
    faqs: [
      {
        question: "Will Eden pray in session?",
        answer:
          "Prayer may be included if the client requests it and it fits the counseling relationship.",
      },
      {
        question: "Can I work with Eden if I am unsure about faith?",
        answer:
          "Yes. Clients can bring questions, doubts, uncertainty, or a preference not to discuss faith directly.",
      },
    ],
  },
  {
    kind: "faq",
    slug: "teen-counseling-parent-faq",
    title: "Parent FAQ for Teen Counseling",
    shortTitle: "Teen Parent FAQ",
    metaTitle: "Parent FAQ for Teen Counseling | Eden Counseling",
    metaDescription:
      "Answers for parents considering counseling for a teen age 13 or older, including privacy, involvement, and telehealth fit.",
    primaryKeyword: "teen counseling parent questions",
    secondaryKeywords: ["adolescent therapy parent FAQ", "teen counseling confidentiality", "online teen counseling Texas"],
    intent: "Parent decision search before booking teen counseling.",
    audience: "Parents and guardians of teens ages 13 and up.",
    sections: [
      {
        heading: "Parents are part of the process",
        body:
          "Teen counseling usually includes parent or guardian involvement, especially around consent, goals, safety, scheduling, and practical support at home.",
      },
      {
        heading: "Teens also need privacy",
        body:
          "Counseling works best when teens have enough privacy to be honest, while parents understand the safety limits and the general direction of care.",
      },
      {
        heading: "Telehealth fit",
        body:
          "Telehealth can work well for some teens when they have privacy, a stable device, and enough maturity to engage online. Fit should be discussed during intake.",
      },
    ],
    faqs: [
      {
        question: "Will I know everything my teen says?",
        answer:
          "Not necessarily. Confidentiality and parent involvement are discussed at the beginning, including safety exceptions.",
      },
      {
        question: "What if my teen does not want counseling?",
        answer:
          "Teen willingness matters. A first conversation can explore concerns, but ongoing counseling needs enough engagement to be useful.",
      },
    ],
  },
  {
    kind: "faq",
    slug: "crisis-support",
    title: "What If I Am in Crisis?",
    shortTitle: "Crisis Support",
    metaTitle: "What If I Am in Crisis? | Eden Counseling FAQ",
    metaDescription:
      "Clear crisis guidance for clients who need urgent support beyond routine counseling.",
    primaryKeyword: "what if I am in crisis counseling",
    secondaryKeywords: ["therapy crisis support", "988 suicide crisis lifeline", "mental health emergency Texas"],
    intent: "Safety and crisis information.",
    audience: "Clients or family members who may need urgent support.",
    sections: [
      {
        heading: "Routine counseling is not emergency care",
        body:
          "If you are in immediate danger or experiencing a mental health emergency, do not wait for a routine counseling appointment.",
      },
      {
        heading: "What to do now",
        body:
          "Call or text 988 for the Suicide and Crisis Lifeline, text HOME to 741741 for the Crisis Text Line, or call 911 if there is immediate danger.",
      },
      {
        heading: "After the immediate crisis",
        body:
          "Counseling may be part of ongoing support after immediate safety needs are addressed, but crisis care comes first.",
      },
    ],
    faqs: [
      {
        question: "Can I use the contact form in a crisis?",
        answer:
          "No. Website forms and email are not appropriate for urgent crisis support. Use 988, 741741, 911, or local emergency resources.",
      },
      {
        question: "Can counseling help after a crisis?",
        answer:
          "Often yes, once immediate safety is addressed. Ongoing counseling can support stabilization, processing, and next steps.",
      },
    ],
  },
  {
    kind: "faq",
    slug: "how-to-choose-a-therapist",
    title: "How Do I Choose a Therapist?",
    shortTitle: "Choose a Therapist",
    metaTitle: "How Do I Choose a Therapist? | Eden Counseling FAQ",
    metaDescription:
      "Questions to ask when choosing a therapist for Christian counseling, telehealth, anxiety, teen counseling, or couples work.",
    primaryKeyword: "how to choose a therapist Austin",
    secondaryKeywords: ["choose Christian counselor", "find therapist Buda TX", "what to ask a therapist"],
    intent: "Evaluation and comparison search.",
    audience: "Prospective clients comparing options.",
    sections: [
      {
        heading: "Fit matters",
        body:
          "A good therapist fit includes credential clarity, experience with your concerns, a style that feels respectful, clear policies, and an approach that matches what you want from counseling.",
      },
      {
        heading: "Questions to ask",
        body:
          "Ask about telehealth, rates, faith integration, supervision, experience with your concern, privacy, crisis policy, and what the first few sessions usually involve.",
      },
      {
        heading: "Listen to your response",
        body:
          "You may not feel comfortable immediately, but you should feel respected, heard, and able to ask questions.",
      },
    ],
    faqs: [
      {
        question: "Should I choose a therapist based only on location?",
        answer:
          "No. Location matters, but fit, credentials, approach, availability, privacy, and your goals matter too.",
      },
      {
        question: "What if the first therapist is not the right fit?",
        answer:
          "That can happen. It is appropriate to ask questions, discuss fit, or seek another provider if needed.",
      },
    ],
  },
  {
    kind: "faq",
    slug: "texas-telehealth-rules",
    title: "Who Can Use Telehealth Counseling in Texas?",
    shortTitle: "Texas Telehealth",
    metaTitle: "Who Can Use Telehealth Counseling in Texas? | Eden Counseling FAQ",
    metaDescription:
      "Learn the basic Texas location rule for telehealth counseling and what clients need for online sessions.",
    primaryKeyword: "who can use telehealth counseling Texas",
    secondaryKeywords: ["online therapy Texas rules", "telehealth counseling location Texas", "virtual therapy Texas"],
    intent: "Telehealth eligibility search.",
    audience: "Clients asking if online counseling is available to them.",
    sections: [
      {
        heading: "The key rule is physical location",
        body:
          "For telehealth counseling with Eden, the client must be physically located in Texas at the time of the session. This matters even if the client normally lives somewhere else.",
      },
      {
        heading: "Telehealth is not limited to Austin",
        body:
          "Clients may be in Buda, Kyle, South Austin, or elsewhere in Texas, as long as the session happens while the client is physically in Texas.",
      },
      {
        heading: "Prepare for the session",
        body:
          "Choose a private space, use a reliable connection, and make sure your device is charged and ready before the appointment.",
      },
    ],
    faqs: [
      {
        question: "Can I attend from another state while traveling?",
        answer:
          "No. The client must be physically located in Texas at the time of the session.",
      },
      {
        question: "Can I attend while sitting in my office?",
        answer:
          "Yes, if your office is private and you are physically located in Texas.",
      },
    ],
  },
  {
    kind: "faq",
    slug: "how-to-schedule",
    title: "How Do I Schedule a Session?",
    shortTitle: "Schedule",
    metaTitle: "How Do I Schedule a Session? | Eden Counseling FAQ",
    metaDescription:
      "Learn how to begin scheduling with Eden Counseling and what information to have ready.",
    primaryKeyword: "how to schedule counseling session",
    secondaryKeywords: ["book counseling Austin", "schedule therapy Buda TX", "Eden Counseling appointment"],
    intent: "Booking and conversion search.",
    audience: "Prospective clients ready to contact Eden.",
    sections: [
      {
        heading: "Start with the booking path",
        body:
          "The current primary booking path is Psychology Today. Clients can also use the website phone number or contact form to ask about fit and availability.",
      },
      {
        heading: "What to have ready",
        body:
          "Be ready to share your general concern, whether you want individual, teen, or couples counseling, your availability, and whether faith integration matters to you.",
      },
      {
        heading: "What happens next",
        body:
          "If Eden is a fit and has availability, you will receive next steps for intake, consent, payment, and telehealth setup.",
      },
    ],
    faqs: [
      {
        question: "Should I call or use Psychology Today?",
        answer:
          "The current site uses Psychology Today as the primary booking path. Phone and contact form options are also available for questions.",
      },
      {
        question: "Can I ask questions before booking?",
        answer:
          "Yes. It is appropriate to ask about fit, rates, telehealth, faith integration, and availability before beginning.",
      },
    ],
  },
  {
    kind: "faq",
    slug: "faith-and-anxiety",
    title: "Does Anxiety Mean My Faith Is Weak?",
    shortTitle: "Faith and Anxiety",
    metaTitle: "Does Anxiety Mean My Faith Is Weak? | Eden Counseling FAQ",
    metaDescription:
      "A faith-sensitive answer for Christians wondering whether anxiety means they are failing spiritually.",
    primaryKeyword: "does anxiety mean my faith is weak",
    secondaryKeywords: ["Christian anxiety help", "faith and anxiety counseling", "Bible and anxiety therapy"],
    intent: "Faith-sensitive anxiety question.",
    audience: "Christian clients feeling shame about anxiety.",
    sections: [
      {
        heading: "Anxiety is not a simple measure of faith",
        body:
          "Many faithful people experience anxiety. Anxiety can involve the body, thoughts, history, stress, relationships, and circumstances. Counseling can help without shaming the client.",
      },
      {
        heading: "Faith can support care",
        body:
          "Christian counseling can include prayer, Scripture, honesty about fear, and practical skills for calming the body and responding to anxious thoughts.",
      },
      {
        heading: "Help is not failure",
        body:
          "Seeking counseling can be a wise step toward stewardship, support, and healing. It does not mean a person has failed spiritually.",
      },
    ],
    faqs: [
      {
        question: "Will counseling tell me to just pray more?",
        answer:
          "No. Prayer may be included if requested, but counseling should also take emotional, relational, and practical concerns seriously.",
      },
      {
        question: "Can anxiety and faith be discussed together?",
        answer:
          "Yes. Many clients want space to process both their symptoms and their spiritual questions.",
      },
    ],
  },
];

export const authorityPages = [...areaPages, ...therapyPages, ...faqPages];

export function getAuthorityPage(kind: AuthorityPageKind, slug: string) {
  return authorityPages.find((page) => page.kind === kind && page.slug === slug);
}

export function getAuthorityPagesByKind(kind: AuthorityPageKind) {
  return authorityPages.filter((page) => page.kind === kind);
}

export function getAuthorityPath(page: AuthorityPage) {
  if (page.kind === "area") return `/areas/${page.slug}`;
  if (page.kind === "therapy") return `/therapy/${page.slug}`;
  return `/faqs/${page.slug}`;
}

export const keywordClusters = [
  {
    cluster: "Buda and South Austin local counseling",
    pages: areaPages.map((page) => page.primaryKeyword),
  },
  {
    cluster: "Service and condition pages",
    pages: therapyPages.map((page) => page.primaryKeyword),
  },
  {
    cluster: "FAQ and conversion support",
    pages: faqPages.map((page) => page.primaryKeyword),
  },
];
