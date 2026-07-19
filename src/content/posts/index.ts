export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  category: string;
  targetKeyword: string;
  secondaryKeywords: string[];
  image: string;
  imageAlt: string;
  date: string; // ISO date string
  readTime: string;
}

export const posts: BlogPost[] = [
  {
    slug: "david-and-saul-mental-wellness",
    title: "David and Saul: What the Bible Teaches Us About Mental Wellness",
    metaTitle: "David & Saul: Bible Lessons on Mental Wellness",
    metaDescription:
      "What does the story of David and Saul teach about anxiety, boundaries, and mental health? A faith-based counselor in Texas explores the lesson.",
    excerpt:
      "The story of David and Saul teaches us powerful lessons about emotional health, boundaries, and trusting God through difficult seasons.",
    category: "Faith & Wellness",
    targetKeyword: "faith-based therapy",
    secondaryKeywords: ["biblical counseling Austin", "David and Saul mental health"],
    image: "/images/blog/david-and-saul.jpg",
    imageAlt: "David and Saul biblical scene representing mental wellness and faith-based therapy",
    date: "2026-03-25",
    readTime: "7 min read",
  },
  {
    slug: "is-faith-based-therapy-right-for-you",
    title: "Is Faith-Based Therapy Right for You? Benefits, Methods, and What to Expect",
    metaTitle: "Is Faith-Based Therapy Right for You? Benefits Guide",
    metaDescription:
      "Does faith-based therapy work? See how Christian counseling integrates scripture and clinical methods to support real healing. From an LPC in Texas.",
    excerpt:
      "What does faith-based counseling actually look like in practice? How can integrating your beliefs into therapy support real healing?",
    category: "Faith & Wellness",
    targetKeyword: "faith-based therapy benefits",
    secondaryKeywords: ["Christian therapy Texas", "does faith-based counseling work"],
    image: "/images/blog/faith-based-therapy.jpg",
    imageAlt: "Peaceful setting representing faith-based therapy and Christian counseling",
    date: "2026-04-01",
    readTime: "6 min read",
  },
  {
    slug: "church-and-mental-health",
    title: "The Church and Mental Health: Bridging Faith and Therapy",
    metaTitle: "Church and Mental Health: Faith Meets Therapy",
    metaDescription:
      "Why does mental health stigma persist in churches? A Christian counselor on how faith and therapy can work together — not against each other.",
    excerpt:
      "Why faith communities and professional counseling are not at odds — and how they can work together to support whole-person wellness.",
    category: "Faith & Wellness",
    targetKeyword: "church and mental health",
    secondaryKeywords: ["mental health stigma in church", "Christian mental health"],
    image: "/images/blog/church-and-mental-health.jpg",
    imageAlt: "Church community supporting mental health and wellness",
    date: "2026-04-08",
    readTime: "8 min read",
  },
  {
    slug: "physical-health-mental-wellness",
    title: "Bodily Exercise Profits Little, But It Still Profits: Physical Health and Mental Wellness",
    metaTitle: "Physical Health & Mental Wellness: A Christian View",
    metaDescription:
      "What does 1 Timothy 4:8 mean for your mental health? A Christian counselor on the link between physical wellness, emotional health, and faith.",
    excerpt:
      "A look at the connection between physical health and mental wellness, and why taking care of your body matters for your whole self.",
    category: "Wellness",
    targetKeyword: "physical health and mental health connection",
    secondaryKeywords: ["holistic wellness Christian", "exercise and mental health Bible"],
    image: "/images/blog/physical-wellbeing.jpg",
    imageAlt: "Physical wellness and mental health connection with nature setting",
    date: "2026-04-15",
    readTime: "6 min read",
  },
  {
    slug: "how-can-counseling-help-me",
    title: "How Can Counseling Help Me? What Therapy Actually Does (and Doesn't Do)",
    metaTitle: "How Can Counseling Help Me? What Therapy Does",
    metaDescription:
      "How can counseling help you? Learn what therapy looks like, what it can (and can't) do, and how to know if it's right for you. Telehealth in Texas.",
    excerpt:
      "You don't have to be in crisis to benefit from counseling. Here's how therapy can help you grow, heal, and move forward — wherever you are.",
    category: "Mental Health",
    targetKeyword: "how can counseling help me",
    secondaryKeywords: ["benefits of counseling", "what does therapy do", "counseling near me Texas"],
    image: "/images/blog/how-counseling-helps.jpg",
    imageAlt: "Comforting counseling scene representing how therapy helps",
    date: "2026-04-22",
    readTime: "7 min read",
  },
  {
    slug: "what-to-expect-first-therapy-session",
    title: "What to Expect in Your First Counseling Session: A Step-by-Step Guide",
    metaTitle: "What to Expect in Your First Counseling Session",
    metaDescription:
      "Nervous about your first therapy session? Here's what happens, what to bring, and what your counselor is thinking. Telehealth in Texas.",
    excerpt:
      "If you've never been to counseling before, it's normal to feel a mix of hope and nerves. Here's a simple guide to help you know what to expect.",
    category: "Getting Started",
    targetKeyword: "what to expect first therapy session",
    secondaryKeywords: ["first counseling appointment", "first time therapy Texas"],
    image: "/images/blog/first-session.jpg",
    imageAlt: "Cozy home office setup for a telehealth therapy session",
    date: "2026-04-29",
    readTime: "6 min read",
  },
  {
    slug: "anxiety-and-faith",
    title: "Anxiety and Faith: Finding Peace When Worry Takes Over",
    metaTitle: "Anxiety and Faith: Finding Peace When Worry Takes Over",
    metaDescription:
      "Anxiety doesn’t mean your faith is weak. Learn how faith and professional counseling can work together to help you find peace. Faith-based therapy in Texas.",
    excerpt:
      "Anxiety doesn’t mean your faith is weak. Here’s how faith and professional counseling can work together to help you find peace.",
    category: "Faith & Wellness",
    targetKeyword: "anxiety and faith",
    secondaryKeywords: ["Christian anxiety help", "faith-based anxiety counseling Texas", "Bible verses for anxiety"],
    image: "/images/blog/anxiety-and-faith.jpg",
    imageAlt: "Serene mountain lake at dawn representing finding peace through faith during anxiety",
    date: "2026-05-06",
    readTime: "7 min read",
  },
  {
    slug: "telehealth-therapy-texas",
    title: "Telehealth Therapy in Texas: Everything You Need to Know",
    metaTitle: "Telehealth Therapy in Texas: Everything You Need to Know",
    metaDescription:
      "Curious about online therapy? Learn how telehealth counseling works in Texas, why it’s effective, and how to get started with a licensed therapist.",
    excerpt:
      "Curious about online therapy? Here’s how telehealth counseling works in Texas, why it’s effective, and how to get started.",
    category: "Getting Started",
    targetKeyword: "telehealth therapy Texas",
    secondaryKeywords: ["online counseling Texas", "virtual therapy Austin", "telehealth counseling benefits"],
    image: "/images/blog/telehealth-therapy.jpg",
    imageAlt: "Cozy home therapy nook for telehealth counseling session in Texas",
    date: "2026-05-13",
    readTime: "6 min read",
  },
  {
    slug: "signs-you-could-benefit-from-counseling",
    title: "5 Signs You Might Benefit from Counseling (Even If You Think You’re Fine)",
    metaTitle: "5 Signs You Might Benefit from Counseling",
    metaDescription:
      "You don’t have to be in crisis to benefit from therapy. Here are five signs that counseling could help — even when everything looks fine on the outside.",
    excerpt:
      "You don’t have to be in crisis to benefit from therapy. Here are five signs that counseling could help — even when everything looks fine on the outside.",
    category: "Mental Health",
    targetKeyword: "signs you need counseling",
    secondaryKeywords: ["do I need therapy", "should I go to counseling", "when to see a therapist"],
    image: "/images/blog/signs-counseling.jpg",
    imageAlt: "Garden path with bench and wildflowers representing reflection on counseling",
    date: "2026-05-20",
    readTime: "6 min read",
  },
  {
    slug: "bible-verses-for-anxiety",
    title: "Bible Verses for Anxiety: Scripture for an Anxious Heart",
    metaTitle: "Bible Verses for Anxiety: Scripture for Worry & Fear",
    metaDescription:
      "Bible verses for anxiety, fear, and sleepless nights, with reflections from a faith-based Texas counselor on how Scripture and clinical care work together.",
    excerpt:
      "The Bible speaks directly to fear and worry. Here are comforting verses for anxious moments — plus how Scripture and counseling can work together.",
    category: "Faith & Wellness",
    targetKeyword: "bible verses for anxiety",
    secondaryKeywords: ["scripture for anxiety", "prayer for anxiety", "Christian help for anxiety"],
    image: "/images/blog/anxiety-and-faith.jpg",
    imageAlt: "Open Bible with soft light representing comfort and Scripture for anxiety",
    date: "2026-06-05",
    readTime: "7 min read",
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return posts.map((p) => p.slug);
}
