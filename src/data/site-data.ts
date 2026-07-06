// PRO MEDIA (بروميديا) — centralized site content
// Sourced from company profile 2025 & Youssef Shaheen portfolio 2025

export interface BilingualText {
  ar: string;
  en: string;
}

export interface CompanyInfo {
  name: BilingualText;
  tagline: BilingualText;
  description: BilingualText;
  about: BilingualText;
  contact: {
    address: BilingualText;
    phone: string;
    email: string;
    website: string;
  };
}

export interface MissionVision {
  mission: BilingualText;
  vision: BilingualText;
}

export interface Service {
  id: string;
  title: BilingualText;
  description: BilingualText;
  icon?: string;
}

export interface WorkflowStep {
  id: string;
  step: number;
  title: BilingualText;
  description: BilingualText;
}

export interface Statistic {
  id: string;
  value: string;
  label: BilingualText;
  description?: BilingualText;
}

export type ProjectCategory =
  | "documentary"
  | "tv-series"
  | "talk-show"
  | "government"
  | "health"
  | "music-video"
  | "event-coverage";

export interface Project {
  slug: string;
  title: BilingualText;
  category: ProjectCategory;
  year: number | string;
  yearEnd?: number;
  client: BilingualText;
  episodes?: number;
  seasons?: number;
  episodeDuration?: BilingualText;
  broadcastChannel?: BilingualText;
  description: BilingualText;
  youtubeLinks?: string[];
  videoLinks?: string[];
  featured?: boolean;
  producedBy?: BilingualText;
}

export interface EquipmentCategory {
  id: string;
  title: BilingualText;
  description?: BilingualText;
  items: EquipmentItem[];
}

export interface EquipmentItem {
  name: string;
  quantity?: string;
  specs?: string;
  image?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: BilingualText;
  featured?: boolean;
  image?: string;
  nationality?: BilingualText;
  qualification?: BilingualText;
  phone?: string;
  social?: {
    instagram?: string[];
    linkedin?: string;
  };
  bio?: BilingualText;
  experience?: BilingualText[];
}

export interface Client {
  id: string;
  name: BilingualText;
  category: "government" | "semi-government" | "event";
  note?: BilingualText;
  logo?: string;
}

export interface Certificate {
  id: string;
  title: BilingualText;
  issuer: BilingualText;
  year?: number;
  image?: string;
  featured?: boolean;
}

export interface TimelineEntry {
  id: string;
  year: number;
  title: BilingualText;
  description: BilingualText;
  projectSlug?: string;
}

export interface WhyChooseUsItem {
  id: string;
  title: BilingualText;
  description: BilingualText;
}

// ─── Company ────────────────────────────────────────────────────────────────

export const companyInfo: CompanyInfo = {
  name: {
    ar: "بروميديا للإنتاج الإعلامي والسوشيال ميديا",
    en: "PRO MEDIA for Media Production & Social Media",
  },
  tagline: {
    ar: "شركة رائدة في مجال الإنتاج الإعلامي والسوشيال ميديا في دولة الإمارات العربية المتحدة",
    en: "A leading media production and social media company in the United Arab Emirates",
  },
  description: {
    ar: "شركة بروميديا للإنتاج التلفزيوني — منظومة إعلامية متكاملة تنتج الأعمال الفنية والبرامج المرئية بإحترافية باستخدام أحدث تكنولوجيا الإعلام.",
    en: "PRO MEDIA TV Production — a full integrated media organization producing artistic works and visual programs professionally using the latest media technology.",
  },
  about: {
    ar: "في بروميديا، نساعد عملائنا على تحديد أهدافهم، ومن ثم نتولى مسؤولية توفير الطرق المختلفة لتحقيق هذه الأهداف. يتميز فريقنا بخبرة واسعة في مجال الإنتاج التلفزيوني، حيث نسعى دائماً إلى تحقيق أعلى مستويات الجودة والابتكار في كل عمل نقوم به.",
    en: "At PRO MEDIA, we help our clients define their goals and take responsibility for providing the different paths to achieve them. Our team has extensive experience in TV production, always striving for the highest levels of quality and innovation in every project.",
  },
  contact: {
    address: {
      ar: "دبي، الإمارات العربية المتحدة",
      en: "Dubai, UAE",
    },
    phone: "+971556267779",
    email: "info@promediagcc.com",
    website: "www.promediagcc.com",
  },
};

export const missionVision: MissionVision = {
  mission: {
    ar: "العمل على تقديم خدمات متميزة وعالية الجودة تفوق توقعات عملائنا في مجال الإنتاج التلفزيوني، وذلك بحلول إبداعية ومبتكرة وفق أفضل الممارسات العالمية، من خلال فريق عمل يتميز بالاحترافية العالية.",
    en: "Deliver premium high-quality services exceeding client expectations in TV production with creative innovative solutions per international best practices through a highly professional team.",
  },
  vision: {
    ar: "التركيز على المبادرات الإعلامية التي تمس التراث الإماراتي والحداثة المعرفة. تقديم أفضل الخدمات والحلول الذكية والمتكاملة، من خلال الشراكات مع المؤسسات الوطنية والعالمية ذات الاختصاص في العمل الفني.",
    en: "Focus on media initiatives touching Emirati heritage and modern knowledge. Best services and smart integrated solutions through partnerships with national and international specialized institutions.",
  },
};

// ─── Services ───────────────────────────────────────────────────────────────

export const services: Service[] = [
  {
    id: "tv-documentary",
    title: {
      ar: "الإنتاج البرامجي التلفزيوني والوثائقي",
      en: "TV & Documentary Production",
    },
    description: {
      ar: "تعمل شركة بروميديا على إنتاج البرامج التلفزيونية مع طواقم تصوير متعددة لتنفيذ مشاريع مختلفة في آن واحد في أي مكان بدولة الإمارات، مع كتابة سيناريو لكل حلقة وتصوير بأعلى جودة وإخراج في استوديوهات الشركة.",
      en: "Full TV and documentary production with multiple shooting crews, professional scripting per episode, high-quality cinematography, and post-production in company studios.",
    },
  },
  {
    id: "drama-cinema",
    title: {
      ar: "إنتاج وتوزيع الأعمال الدرامية والسينمائية",
      en: "Drama & Cinema Production & Distribution",
    },
    description: {
      ar: "إنتاج وتوزيع الأعمال الدرامية والسينمائية بمعايير احترافية عالمية.",
      en: "Production and distribution of drama and cinema works to professional international standards.",
    },
  },
  {
    id: "commercial-ads",
    title: {
      ar: "إنتاج الإعلانات التجارية",
      en: "Commercial Advertising Production",
    },
    description: {
      ar: "إنتاج أكثر من 1000 فيديو ترويجي للسوشيال ميديا والإعلانات والدعايات.",
      en: "Over 1000 promotional videos produced for social media, advertisements, and campaigns.",
    },
  },
  {
    id: "social-media",
    title: {
      ar: "تخطيط وتنفيذ البرامج المرئية لليوتيوب ووسائل التواصل",
      en: "YouTube & Social Media Video Planning",
    },
    description: {
      ar: "قسم خاص لإنتاج الفيديوهات على اليوتيوب ونشرها على السوشيال ميديا، مع تغطية مستمرة للفعاليات ومواد مصورة فورية على مواقع التواصل.",
      en: "Dedicated social media division for YouTube production, instant event coverage, and real-time content across social platforms.",
    },
  },
  {
    id: "events-festivals",
    title: {
      ar: "تصوير وتغطية الفعاليات والمهرجانات والمناسبات الوطنية",
      en: "Event, Festival & National Occasion Coverage",
    },
    description: {
      ar: "تغطية إعلامية للعديد من الجهات والمؤسسات والهيئات الحكومية والشبه حكومية والفعاليات الوطنية.",
      en: "Media coverage for government entities, semi-government institutions, festivals, and national occasions across the UAE.",
    },
  },
  {
    id: "awareness-videos",
    title: {
      ar: "إنتاج الفيديوهات التوعوية",
      en: "Awareness Video Production",
    },
    description: {
      ar: "إنتاج محتوى توعوي يعمل على تصوير الأهداف والرسائل الخاصة بكل الأحداث بطريقة سهلة تتيح للمتلقي فهم الرسالة بوضوح.",
      en: "Awareness content that communicates goals and messages clearly and effectively for campaigns and initiatives.",
    },
  },
  {
    id: "graphic-production",
    title: {
      ar: "الإنتاج الجرافيكي",
      en: "Graphic Production",
    },
    description: {
      ar: "تصميم لوجو وإنترo وأوترو مناسب للبرنامج بأحدث أساليب وتقنيات الجرافيك.",
      en: "Logo, intro, and outro design using the latest graphic techniques and technologies.",
    },
  },
];

// ─── Workflow ───────────────────────────────────────────────────────────────

export const workflowSteps: WorkflowStep[] = [
  {
    id: "consultation",
    step: 1,
    title: {
      ar: "الاستشارة والتخطيط",
      en: "Client Consultation & Planning",
    },
    description: {
      ar: "استقبال العميل والاستماع إلى احتياجاته وأهدافه، ووضع خطة عمل متخصصة تلبي متطلبات العميل وتحقق أهدافه.",
      en: "Receive the client, understand their needs and goals, and develop a specialized action plan aligned with their objectives.",
    },
  },
  {
    id: "implementation",
    step: 2,
    title: {
      ar: "التنفيذ",
      en: "Implementation",
    },
    description: {
      ar: "تنفيذ الخطة المتفق عليها بدقة واحترافية، باستخدام أحدث التقنيات والمعدات لضمان الجودة العالية.",
      en: "Execute the agreed plan with precision and professionalism using the latest technology and equipment.",
    },
  },
  {
    id: "review",
    step: 3,
    title: {
      ar: "المراجعة والتعديل",
      en: "Review & Revision",
    },
    description: {
      ar: "مراجعة العمل مع العميل وجمع التغذية الراجعة، وإدخال التعديلات اللازمة لضمان رضا العميل الكامل.",
      en: "Review work with the client, gather feedback, and apply revisions to ensure complete satisfaction.",
    },
  },
];

// ─── Statistics ─────────────────────────────────────────────────────────────

export const statistics: Statistic[] = [
  {
    id: "promotional-videos",
    value: "1000+",
    label: {
      ar: "فيديو ترويجي",
      en: "Promotional Videos",
    },
    description: {
      ar: "فيديوهات للسوشيال ميديا والإعلانات والدعايات",
      en: "Social media, advertising, and promotional videos",
    },
  },
  {
    id: "tv-episodes",
    value: "500+",
    label: {
      ar: "حلقة تلفزيونية",
      en: "TV Episodes",
    },
    description: {
      ar: "حلقات تلفزيونية داخل دولة الإمارات عبر برامج مختلفة",
      en: "TV episodes produced across various UAE programs",
    },
  },
  {
    id: "ministry-videos",
    value: "100+",
    label: {
      ar: "فيديو قصير",
      en: "Short Social Videos",
    },
    description: {
      ar: "فيديوهات قصيرة لمواقع التواصل — وزارة شؤون مجلس الوزراء",
      en: "Short videos for social media — Ministry of Cabinet Affairs",
    },
  },
  {
    id: "al-emaratiya",
    value: "33",
    label: {
      ar: "حلقة — المسلسل الإماراتي",
      en: "Episodes — Al Emaratiya Series",
    },
    description: {
      ar: "إخراج وتصوير المسلسل الإماراتي مع يدوه — 2017",
      en: "Directed and filmed Al Emaratiya series with Yidooh — 2017",
    },
  },
  {
    id: "smart-government",
    value: "100+",
    label: {
      ar: "حلقة — حكومة ذكية / رقمية",
      en: "Episodes — Smart / Digital Government",
    },
    description: {
      ar: "برامج حكومة ذكية ورقمية على جميع القنوات الإماراتية",
      en: "Smart and Digital Government programs on all Emirati channels",
    },
  },
  {
    id: "team-members",
    value: "16+",
    label: {
      ar: "عضو فريق محترف",
      en: "Professional Team Members",
    },
    description: {
      ar: "محترفون موهوبون بمهارات استثنائية وخبرة واسعة",
      en: "Talented professionals with exceptional skills and extensive experience",
    },
  },
];

// ─── Featured Team Member ───────────────────────────────────────────────────

export const featuredTeamMember: TeamMember = {
  id: "yousef-shaheen",
  name: "Yousef M K Shaheen",
  role: {
    ar: "منتج تنفيذي — مخرج تلفزيوني — مدير تصوير",
    en: "Executive Producer — TV Director — Director of Photography",
  },
  featured: true,
  image: "/images/team/yousef-shaheen.webp",
  nationality: {
    ar: "فلسطيني",
    en: "Palestinian",
  },
  qualification: {
    ar: "دبلوم إدارة أعمال",
    en: "Business Administration Diploma",
  },
  phone: "+971 55 626 7779",
  social: {
    instagram: ["@yousefsh1", "@yousefshaheen"],
    linkedin: "@yousefsh1",
  },
  bio: {
    ar: "شارك في أكثر من 500 حلقة تلفزيونية داخل دولة الإمارات، وأنتج أكثر من 1000 فيديو ترويجي. عمل في وزارة شؤون مجلس الوزراء من سبتمبر 2022 حتى 2024.",
    en: "Contributed to 500+ TV episodes across the UAE and produced 1000+ promotional videos. Served at the Ministry of Cabinet Affairs from September 2022 to 2024.",
  },
  experience: [
    {
      ar: "تغطية فعاليات: منتدى دبي للمستقبل، نوابغ العرب، منتدى دبي للإعلام، القمة العالمية للحكومات",
      en: "Event coverage: Dubai Future Forum, Arab Geniuses, Dubai Media Forum, World Government Summit",
    },
    {
      ar: "مونتاج أكثر من مئة فيديو قصير لمواقع التواصل الاجتماعي — وزارة شؤون مجلس الوزراء",
      en: "Edited 100+ short social media videos for the Ministry of Cabinet Affairs",
    },
    {
      ar: "المشاركة في صناعة فيديوهات عن متحف دبي المستقبل، القمة العالمية للحكومات، مسبار الأمل، مدينة دبي للإنترنت، مؤسسة دبي للمستقبل",
      en: "Produced videos for Museum of the Future, World Government Summit, Hope Probe, Dubai Internet City, Dubai Future Foundation",
    },
  ],
};

export const youssefMinistryPeriod = {
  period: { ar: "سبتمبر 2022 — 2024", en: "September 2022 — 2024" },
  organization: {
    ar: "وزارة شؤون مجلس الوزراء",
    en: "Ministry of Cabinet Affairs",
  },
  duties: [
    {
      ar: "تغطية فعاليات تصوير ومونتاج: منتدى دبي للمستقبل، نوابغ العرب، منتدى دبي للإعلام، القمة العالمية للحكومات",
      en: "Event filming & editing: Dubai Future Forum, Arab Geniuses, Dubai Media Forum, World Government Summit",
    },
    {
      ar: "جلسات حوارية ومؤتمرات ومواقع التواصل الاجتماعي",
      en: "Dialogue sessions, conferences, and social media platforms",
    },
    {
      ar: "مونتاج أكثر من مئة فيديو قصير نُشر على مواقع التواصل الاجتماعي",
      en: "Edited 100+ short videos published on social media",
    },
  ] as BilingualText[],
};

export const youssefVideoProductions: BilingualText[] = [
  {
    ar: "مراحل تأسيس وبناء متحف دبي المستقبل",
    en: "Museum of the Future founding and construction phases",
  },
  {
    ar: "القمة العالمية للحكومات والجلسات الوزارية",
    en: "World Government Summit and ministerial sessions",
  },
  {
    ar: "إطلاق مسبار الأمل والأقمار الصناعية",
    en: "Hope Probe launch and satellites",
  },
  {
    ar: "مدينة دبي للإنترنت ومدينة دبي للإعلام ودبي القابضة",
    en: "Dubai Internet City, Dubai Media City, and Dubai Holding",
  },
  {
    ar: "مؤسسة دبي للمستقبل وغيرها من الإنجازات",
    en: "Dubai Future Foundation and other major achievements",
  },
];

export const youssefIntro = {
  ar: "شاركت في أكثر من 500 حلقة تلفزيونية داخل دولة الإمارات من خلال برامج مختلفة، كما قمت بإنتاج أكثر من 1000 فيديو ترويجي للسوشيال ميديا والإعلانات والدعايات.",
  en: "Contributed to 500+ TV episodes across the UAE through various programs, and produced 1000+ promotional videos for social media, advertising, and campaigns.",
};

export const youssefLatestHighlights = [
  {
    year: 2025,
    title: {
      ar: "سفاري الشارقة، عساكم على القوة، أعماق البحر",
      en: "Sharjah Safari, May You Stay Strong, Depths of the Sea",
    },
    description: {
      ar: "ثلاثة برامج جديدة — 15 إلى 17 حلقة لإذاعة الشارقة، إنتاج بروميديا.",
      en: "Three new programs — 15 to 17 episodes for Sharjah Broadcasting, PRO MEDIA production.",
    },
  },
  {
    year: 2024,
    title: {
      ar: "أرض الخير، حنين الشواطئ، رحلتي، خيرات الوسطى",
      en: "Land of Goodness, Nostalgia of Shores, Rehleti, Central Treasures",
    },
    description: {
      ar: "توسع إنتاجات بروميديا في دبي والمنطقة الشرقية والوسطى — برامج وثائقية وتلفزيونية.",
      en: "PRO MEDIA production expansion across Dubai, Eastern, and Central regions.",
    },
  },
  {
    year: 2023,
    title: { ar: "رحلتي ومآذن الشارقة", en: "Rehleti & Minarets of Sharjah" },
    description: {
      ar: "30 حلقة رحلتي في أكثر من 30 دولة، و65 حلقة مآذن الشارقة على 4 مواسم.",
      en: "30-episode Rehleti filmed in 30+ countries, and 65-episode Minarets of Sharjah across 4 seasons.",
    },
  },
] as const;

export const youssefCertificates: Certificate[] = [
  {
    id: "national-media-office",
    featured: true,
    title: {
      ar: "رسالة شكر وتقدير — المكتب الوطني للإعلام",
      en: "Letter of Thanks & Appreciation — National Media Office",
    },
    issuer: {
      ar: "المكتب الوطني للإعلام — دولة الإمارات العربية المتحدة",
      en: "National Media Office — United Arab Emirates",
    },
    image: "/images/certificates/national-media-office.webp",
  },
  {
    id: "canon-lighting",
    title: {
      ar: "دورة تدريبية في عناصر الإضاءة في البورتريه من خلال شركة كانون",
      en: "Canon Portrait Lighting Course",
    },
    issuer: {
      ar: "مؤسسة محمد بن راشد لتنمية المشاريع الصغيرة والمتوسطة — Secreto de Vida",
      en: "Mohammed bin Rashid Foundation for SME Development — Secreto de Vida",
    },
    year: 2021,
    image: "/images/certificates/canon-lighting.webp",
  },
  {
    id: "humanitarian-forum",
    title: {
      ar: "شهادة تقدير لمشاركتي في إنجاح ملتقى المبادرات الإنسانية في دبي",
      en: "Certificate of Appreciation — Humanitarian Initiatives Forum Dubai",
    },
    issuer: {
      ar: "اتحاد المنتجين العرب والهيئة العربية للبث المشترك",
      en: "Arab Producers Union & Arab States Broadcasting Union",
    },
    year: 2019,
    image: "/images/certificates/humanitarian-forum.webp",
  },
];

export const proMediaCertificates: Certificate[] = [
  {
    id: "andiyat-wasat-s1",
    title: { ar: "أندية الوسطى — الموسم الأول", en: "Central Region Clubs — Season 1" },
    issuer: { ar: "هيئة الشارقة للإذاعة والتلفزيون", en: "Sharjah Broadcasting Authority" },
    image: "/images/promedia-certificates/cert-01.webp",
  },
  {
    id: "andiyat-wasat-s2",
    title: { ar: "أندية الوسطى — الموسم الثاني", en: "Central Region Clubs — Season 2" },
    issuer: { ar: "هيئة الشارقة للإذاعة والتلفزيون", en: "Sharjah Broadcasting Authority" },
    image: "/images/promedia-certificates/cert-02.webp",
  },
  {
    id: "andiyat-wasat-s3",
    title: { ar: "أندية الوسطى — الموسم الثالث", en: "Central Region Clubs — Season 3" },
    issuer: { ar: "هيئة الشارقة للإذاعة والتلفزيون", en: "Sharjah Broadcasting Authority" },
    image: "/images/promedia-certificates/cert-03.webp",
  },
  {
    id: "khairat-wasat-s1",
    title: { ar: "خيرات الوسطى — الموسم الأول", en: "Central Region Treasures — Season 1" },
    issuer: { ar: "هيئة الشارقة للإذاعة والتلفزيون", en: "Sharjah Broadcasting Authority" },
    image: "/images/promedia-certificates/cert-04.webp",
  },
  {
    id: "khairat-wasat-s2",
    title: { ar: "خيرات الوسطى — الموسم الثاني", en: "Central Region Treasures — Season 2" },
    issuer: { ar: "هيئة الشارقة للإذاعة والتلفزيون", en: "Sharjah Broadcasting Authority" },
    image: "/images/promedia-certificates/cert-05.webp",
  },
  {
    id: "iktashif-s1",
    title: { ar: "فواصل اكتشف — الموسم الأول", en: "Discover Segments — Season 1" },
    issuer: { ar: "بروميديا", en: "PRO MEDIA" },
    image: "/images/promedia-certificates/cert-06.webp",
  },
  {
    id: "iktashif-s2",
    title: { ar: "فواصل اكتشف — الموسم الثاني", en: "Discover Segments — Season 2" },
    issuer: { ar: "بروميديا", en: "PRO MEDIA" },
    image: "/images/promedia-certificates/cert-07.webp",
  },
  {
    id: "seer-s1",
    title: { ar: "فواصل سير — الموسم الأول", en: "Seer Segments — Season 1" },
    issuer: { ar: "بروميديا", en: "PRO MEDIA" },
    image: "/images/promedia-certificates/cert-08.webp",
  },
  {
    id: "seer-s2",
    title: { ar: "فواصل سير — الموسم الثاني", en: "Seer Segments — Season 2" },
    issuer: { ar: "بروميديا", en: "PRO MEDIA" },
    image: "/images/promedia-certificates/cert-09.webp",
  },
  {
    id: "safari-sharjah",
    title: { ar: "سفاري الشارقة", en: "Sharjah Safari" },
    issuer: { ar: "هيئة الشارقة للإذاعة والتلفزيون", en: "Sharjah Broadcasting Authority" },
    image: "/images/promedia-certificates/cert-10.webp",
  },
  {
    id: "asakum-ala-al-quwa",
    title: { ar: "عساكم على القوة", en: "May You Stay Strong" },
    issuer: { ar: "هيئة الشارقة للإذاعة والتلفزيون", en: "Sharjah Broadcasting Authority" },
    image: "/images/promedia-certificates/cert-11.webp",
  },
  {
    id: "hanin-al-shawati",
    title: { ar: "حنين الشواطئ", en: "Nostalgia of the Shores" },
    issuer: { ar: "هيئة الشارقة للإذاعة والتلفزيون", en: "Sharjah Broadcasting Authority" },
    image: "/images/promedia-certificates/cert-12.webp",
  },
  {
    id: "maghasat-al-sharqiya",
    title: { ar: "مغاصات الشرقية", en: "Eastern Region Diving Sites" },
    issuer: { ar: "هيئة الشارقة للإذاعة والتلفزيون", en: "Sharjah Broadcasting Authority" },
    image: "/images/promedia-certificates/cert-13.webp",
  },
  {
    id: "aamaq-al-sharqiya",
    title: { ar: "أعماق الشرقية", en: "Depths of the East" },
    issuer: { ar: "هيئة الشارقة للإذاعة والتلفزيون", en: "Sharjah Broadcasting Authority" },
    image: "/images/promedia-certificates/cert-14.webp",
  },
  {
    id: "ard-al-khair-2024",
    title: { ar: "أرض الخير — 2024", en: "Land of Goodness — 2024" },
    issuer: { ar: "هيئة الشارقة للإذاعة والتلفزيون", en: "Sharjah Broadcasting Authority" },
    year: 2024,
    image: "/images/promedia-certificates/cert-15.webp",
  },
];

// ─── Projects ───────────────────────────────────────────────────────────────

export const projects: Project[] = [
  {
    slug: "rehleti",
    title: { ar: "رحلتي", en: "Rehleti (My Journey)" },
    category: "documentary",
    year: 2023,
    yearEnd: 2024,
    client: {
      ar: "هيئة الشارقة للإذاعة والتلفزيون",
      en: "Sharjah Broadcasting Authority",
    },
    episodes: 30,
    seasons: 2,
    episodeDuration: { ar: "15 دقيقة", en: "15 minutes" },
    broadcastChannel: { ar: "تلفزيون الشارقة", en: "Sharjah TV" },
    description: {
      ar: "برنامج وثائقي فريد تم تصويره في أكثر من 30 دولة حول العالم. حقق نجاحاً واسعاً كأحد أكثر البرامج تنوعاً وجذباً بشرياً في إنتاجات الشركة.",
      en: "A unique documentary filmed in over 30 countries worldwide. Achieved wide success as one of the company's most diverse and engaging programs.",
    },
    featured: true,
    producedBy: { ar: "شركة بروميديا", en: "PRO MEDIA" },
  },
  {
    slug: "sunea-fi-sharjah",
    title: { ar: "صُنع في الشارقة", en: "Made in Sharjah" },
    category: "tv-series",
    year: 2022,
    client: {
      ar: "هيئة الشارقة للإذاعة والتلفزيون",
      en: "Sharjah Broadcasting Authority",
    },
    episodes: 15,
    episodeDuration: { ar: "نصف ساعة", en: "30 minutes" },
    broadcastChannel: { ar: "تلفزيون الشارقة", en: "Sharjah TV" },
    description: {
      ar: "عمل إعلامي متميز ضمن سلسلة تلفزيونية. نُفذ بكفاءة عالية من خلال طاقم بروميديا ومعداتها الاحترافية.",
      en: "An outstanding media work within a TV series. Executed efficiently by PRO MEDIA's professional team and equipment.",
    },
    featured: true,
    producedBy: { ar: "شركة بروميديا", en: "PRO MEDIA" },
  },
  {
    slug: "jehoudu-khafiya",
    title: { ar: "جهود خفية", en: "Hidden Efforts" },
    category: "tv-series",
    year: 2022,
    client: {
      ar: "هيئة الشارقة للإذاعة والتلفزيون",
      en: "Sharjah Broadcasting Authority",
    },
    episodes: 15,
    episodeDuration: { ar: "نصف ساعة", en: "30 minutes" },
    broadcastChannel: { ar: "تلفزيون الشارقة", en: "Sharjah TV" },
    description: {
      ar: "برنامج تلفزيوني يتكون من 15 حلقة. نُفذ بالكامل من خلال فريق ومعدات شركة بروميديا بجودة عالية تعبر عن الاحترافية.",
      en: "A 15-episode TV program fully executed by PRO MEDIA's team and equipment with high production quality.",
    },
    featured: true,
    producedBy: { ar: "شركة بروميديا", en: "PRO MEDIA" },
  },
  {
    slug: "maazen-al-sharjah",
    title: { ar: "مآذن الشارقة", en: "Minarets of Sharjah" },
    category: "documentary",
    year: 2023,
    yearEnd: 2025,
    client: {
      ar: "هيئة الشارقة للإذاعة والتلفزيون",
      en: "Sharjah Broadcasting Authority",
    },
    episodes: 65,
    seasons: 4,
    episodeDuration: { ar: "نصف ساعة", en: "30 minutes" },
    broadcastChannel: { ar: "تلفزيون الشارقة", en: "Sharjah TV" },
    description: {
      ar: "برنامج يُعد من الأعمال المؤثرة التي تبرز الهوية الدينية والعمرانية لإمارة الشارقة. وُثّق بدقة واحتراف من خلال التصوير والإخراج والمونتاج.",
      en: "An impactful program highlighting Sharjah's religious and architectural identity, documented with precision through filming, directing, and editing.",
    },
    featured: true,
    producedBy: { ar: "شركة بروميديا", en: "PRO MEDIA" },
  },
  {
    slug: "min-al-bahr",
    title: { ar: "من البحر", en: "From the Sea" },
    category: "documentary",
    year: 2024,
    yearEnd: 2025,
    client: {
      ar: "هيئة الشارقة للإذاعة والتلفزيون",
      en: "Sharjah Broadcasting Authority",
    },
    episodes: 15,
    episodeDuration: { ar: "نصف ساعة", en: "30 minutes" },
    broadcastChannel: { ar: "تلفزيون الشارقة", en: "Sharjah TV" },
    description: {
      ar: "برنامج بقالب بشري وثائقي متميز يبرز العلاقة العريقة بين أهل الإمارات والبحر.",
      en: "A distinguished human documentary highlighting the deep relationship between Emiratis and the sea.",
    },
    featured: true,
    producedBy: { ar: "شركة بروميديا", en: "PRO MEDIA" },
  },
  {
    slug: "aamaq-al-bahr",
    title: { ar: "أعماق البحر", en: "Depths of the Sea" },
    category: "documentary",
    year: 2025,
    client: {
      ar: "هيئة الشارقة للإذاعة والتلفزيون",
      en: "Sharjah Broadcasting Authority",
    },
    episodes: 15,
    episodeDuration: { ar: "نصف ساعة", en: "30 minutes" },
    broadcastChannel: {
      ar: "قناة الشرقية من كلباء",
      en: "Al Sharqiya Channel — Kalba",
    },
    description: {
      ar: "برنامج غاص في تفاصيل البيئة البحرية والكائنات التي تعيش في أعماق البحر. أُنتج بجهود بروميديا ومعداتها الاحترافية.",
      en: "A program exploring marine environments and deep-sea creatures, produced with PRO MEDIA's professional equipment.",
    },
    featured: true,
    producedBy: { ar: "شركة بروميديا", en: "PRO MEDIA" },
  },
  {
    slug: "andiyat-al-wasat",
    title: { ar: "أندية الوسطى", en: "Central Region Clubs" },
    category: "documentary",
    year: 2023,
    yearEnd: 2025,
    client: {
      ar: "هيئة الشارقة للإذاعة والتلفزيون",
      en: "Sharjah Broadcasting Authority",
    },
    episodes: 50,
    seasons: 3,
    episodeDuration: { ar: "نصف ساعة", en: "30 minutes" },
    broadcastChannel: {
      ar: "قناة الوسطى من الذيد",
      en: "Al Wasat Channel — Al Dhaid",
    },
    description: {
      ar: "يبرز دور الأندية الثقافية والرياضية في المنطقة الوسطى بأسلوب تصويري توثيقي يعكس روح المجتمع المحلي والأنشطة الشبابية.",
      en: "Highlights cultural and sports clubs in the Central Region through documentary-style filming reflecting community spirit and youth activities.",
    },
    featured: true,
    producedBy: { ar: "شركة بروميديا", en: "PRO MEDIA" },
  },
  {
    slug: "khairat-al-wasat",
    title: { ar: "خيرات الوسطى", en: "Central Region Treasures" },
    category: "documentary",
    year: 2024,
    client: {
      ar: "هيئة الشارقة للإذاعة والتلفزيون",
      en: "Sharjah Broadcasting Authority",
    },
    episodes: 38,
    seasons: 2,
    episodeDuration: { ar: "نصف ساعة", en: "30 minutes" },
    broadcastChannel: {
      ar: "قناة الوسطى من الذيد",
      en: "Al Wasat Channel — Al Dhaid",
    },
    description: {
      ar: "برنامج يسلط الضوء على المنتجات الزراعية والحيوانية في المنطقة الوسطى.",
      en: "A program spotlighting agricultural and animal products in the Central Region.",
    },
    featured: true,
    producedBy: { ar: "شركة بروميديا", en: "PRO MEDIA" },
  },
  {
    slug: "safari-al-sharjah",
    title: { ar: "سفاري الشارقة", en: "Sharjah Safari" },
    category: "documentary",
    year: 2025,
    client: {
      ar: "هيئة الشارقة للإذاعة والتلفزيون",
      en: "Sharjah Broadcasting Authority",
    },
    episodes: 17,
    episodeDuration: { ar: "نصف ساعة", en: "30 minutes" },
    broadcastChannel: {
      ar: "قناة الوسطى من الذيد",
      en: "Al Wasat Channel — Al Dhaid",
    },
    description: {
      ar: "صُور في مواقع الحياة البرية في سفاري الشارقة، برؤية إخراجية تعبر عن الجمال الطبيعي والحفاظ على البيئة.",
      en: "Filmed at Sharjah Safari wildlife locations with a directorial vision expressing natural beauty and environmental conservation.",
    },
    featured: true,
    producedBy: { ar: "شركة بروميديا", en: "PRO MEDIA" },
  },
  {
    slug: "asakum-ala-al-quwa",
    title: { ar: "عساكم على القوة", en: "May You Stay Strong" },
    category: "documentary",
    year: 2025,
    client: {
      ar: "هيئة الشارقة للإذاعة والتلفزيون",
      en: "Sharjah Broadcasting Authority",
    },
    episodes: 17,
    episodeDuration: { ar: "نصف ساعة", en: "30 minutes" },
    broadcastChannel: {
      ar: "قناة الوسطى من الذيد",
      en: "Al Wasat Channel — Al Dhaid",
    },
    description: {
      ar: "يسلط الضوء على الكوادر الحكومية الميدانية في المنطقة الوسطى. نُفذ بالكامل من خلال شركة بروميديا.",
      en: "Spotlights field government personnel in the Central Region, fully executed by PRO MEDIA.",
    },
    featured: true,
    producedBy: { ar: "شركة بروميديا", en: "PRO MEDIA" },
  },
  {
    slug: "hanin-al-shawati",
    title: { ar: "حنين الشواطئ", en: "Nostalgia of the Shores" },
    category: "documentary",
    year: 2024,
    client: {
      ar: "هيئة الشارقة للإذاعة والتلفزيون",
      en: "Sharjah Broadcasting Authority",
    },
    episodes: 17,
    episodeDuration: { ar: "نصف ساعة", en: "30 minutes" },
    broadcastChannel: {
      ar: "قناة الشرقية من كلباء",
      en: "Al Sharqiya Channel — Kalba",
    },
    description: {
      ar: "يتناول العلاقة العاطفية والإنسانية لأهل الساحل مع البحر، في قالب بشري شاعري.",
      en: "Explores the emotional human relationship between coastal communities and the sea in a poetic human format.",
    },
    featured: true,
    producedBy: { ar: "شركة بروميديا", en: "PRO MEDIA" },
  },
  {
    slug: "muhafazat-al-sharqiya",
    title: { ar: "محافظات الشرقية", en: "Eastern Region Governorates" },
    category: "documentary",
    year: 2024,
    client: {
      ar: "هيئة الشارقة للإذاعة والتلفزيون",
      en: "Sharjah Broadcasting Authority",
    },
    episodes: 17,
    episodeDuration: { ar: "نصف ساعة", en: "30 minutes" },
    broadcastChannel: {
      ar: "قناة الشرقية من كلباء",
      en: "Al Sharqiya Channel — Kalba",
    },
    description: {
      ar: "برنامج تلفزيوني عن محافظات المنطقة الشرقية. نُفذ بكامل طاقم بروميديا.",
      en: "A TV program about the Eastern Region governorates, fully executed by PRO MEDIA.",
    },
    featured: true,
    producedBy: { ar: "شركة بروميديا", en: "PRO MEDIA" },
  },
  {
    slug: "ard-al-khair",
    title: { ar: "أرض الخير", en: "Land of Goodness" },
    category: "documentary",
    year: 2024,
    client: {
      ar: "دبي للإعلام",
      en: "Dubai Media",
    },
    episodes: 13,
    episodeDuration: { ar: "نصف ساعة", en: "30 minutes" },
    broadcastChannel: { ar: "قناة سما دبي", en: "Sama Dubai" },
    description: {
      ar: "سلط الضوء على المزارع والجهود الزراعية في دبي. نُفذ بالكامل من خلال شركة بروميديا وفريقها الفني.",
      en: "Spotlights farms and agricultural efforts in Dubai, fully executed by PRO MEDIA and its technical team.",
    },
    featured: true,
    producedBy: { ar: "شركة بروميديا", en: "PRO MEDIA" },
  },
  {
    slug: "al-emaratiya",
    title: { ar: "المسلسل الإماراتي", en: "Al Emaratiya Series" },
    category: "tv-series",
    year: 2017,
    client: {
      ar: "هيئة الشارقة للإذاعة والتلفزيون — مع يدوه",
      en: "Sharjah Broadcasting Authority — with Yidooh",
    },
    episodes: 33,
    description: {
      ar: "إخراج وتصوير المسلسل الإماراتي. تنفيذ شركة رويال للإنتاج والتوزيع الإعلامي.",
      en: "Directed and filmed the Al Emaratiya series. Produced by Royal Media Production & Distribution.",
    },
    producedBy: {
      ar: "شركة رويال للإنتاج والتوزيع الإعلامي",
      en: "Royal Media Production & Distribution",
    },
    youtubeLinks: [
      "https://youtu.be/W1UXvnAEdDc",
      "https://youtu.be/-WD4dQIEnwE",
      "https://youtu.be/e4gWR6V9ObQ",
      "https://youtu.be/MF9kjOcqfq0",
    ],
  },
  {
    slug: "farij-al-badu",
    title: { ar: "فريج البدو", en: "Farij Al Badu" },
    category: "talk-show",
    year: 2017,
    client: {
      ar: "هيئة الشارقة للإذاعة والتلفزيون",
      en: "Sharjah Broadcasting Authority",
    },
    episodes: 31,
    description: {
      ar: "مونتاج البرنامج الحواري فريج البدو. تنفيذ شركة رويال للإنتاج والتوزيع الإعلامي.",
      en: "Edited the Farij Al Badu talk show. Produced by Royal Media Production & Distribution.",
    },
    producedBy: {
      ar: "شركة رويال للإنتاج والتوزيع الإعلامي",
      en: "Royal Media Production & Distribution",
    },
    youtubeLinks: [
      "https://youtu.be/W1UXvnAEdDc",
      "https://youtu.be/_8oZzWDO1tE",
      "https://youtu.be/f66ZdaMlDgo",
    ],
  },
  {
    slug: "mazaraena",
    title: { ar: "مزارعنا", en: "Mazaraena (Our Farms)" },
    category: "documentary",
    year: 2018,
    client: {
      ar: "هيئة الشارقة للإذاعة والتلفزيون",
      en: "Sharjah Broadcasting Authority",
    },
    episodes: 15,
    description: {
      ar: "تصوير ومونتاج البرنامج الوثائقي مزارعنا.",
      en: "Filmed and edited the Mazaraena documentary program.",
    },
    producedBy: {
      ar: "شركة رويال للإنتاج والتوزيع الإعلامي",
      en: "Royal Media Production & Distribution",
    },
    youtubeLinks: ["https://youtu.be/AAKBme3Pypw"],
  },
  {
    slug: "athar-al-sharqiya",
    title: { ar: "آثار الشرقية", en: "Athar Al Sharqiya" },
    category: "documentary",
    year: 2019,
    client: {
      ar: "هيئة الشارقة للإذاعة والتلفزيون",
      en: "Sharjah Broadcasting Authority",
    },
    episodes: 13,
    description: {
      ar: "مونتاج البرنامج الوثائقي آثار الشرقية.",
      en: "Edited the Athar Al Sharqiya documentary program.",
    },
    producedBy: {
      ar: "شركة رويال للإنتاج والتوزيع الإعلامي",
      en: "Royal Media Production & Distribution",
    },
    youtubeLinks: [
      "https://youtu.be/S9Lz2dBewlA",
      "https://youtu.be/kN_qEcg6LJ4",
      "https://youtu.be/bOmngTPLpCM",
    ],
  },
  {
    slug: "kunooz-min-al-wasat",
    title: { ar: "كنوز من الوسطى", en: "Kunooz Min Al Wasat" },
    category: "documentary",
    year: 2019,
    client: {
      ar: "هيئة الشارقة للإذاعة والتلفزيون",
      en: "Sharjah Broadcasting Authority",
    },
    episodes: 13,
    description: {
      ar: "برنامج خاص بالاكتشافات الأثرية والتنقيب. تصوير ومونتاج البرنامج الوثائقي.",
      en: "A program dedicated to archaeological discoveries and excavations. Filmed and edited by Youssef Shaheen.",
    },
    producedBy: {
      ar: "شركة رويال للإنتاج والتوزيع الإعلامي",
      en: "Royal Media Production & Distribution",
    },
    youtubeLinks: [
      "https://youtu.be/_aDlW8SBWz4",
      "https://youtu.be/ydqcL8Q5aZg",
      "https://youtu.be/Dw4in_mPY8I",
    ],
  },
  {
    slug: "smart-digital-government",
    title: {
      ar: "حكومة ذكية / حكومة رقمية",
      en: "Smart Government / Digital Government",
    },
    category: "government",
    year: 2019,
    yearEnd: 2022,
    client: {
      ar: "جميع القنوات الإماراتية",
      en: "All Emirati TV Channels",
    },
    episodes: 100,
    description: {
      ar: "إخراج وتصوير برنامج حكومة ذكية (2019–2022) ثم برنامج حكومة رقمية (من 2021 حتى الآن). أُنتج أكثر من مئة حلقة.",
      en: "Directed and filmed Smart Government (2019–2022) then Digital Government (from 2021 to present). Over 100 episodes produced.",
    },
    youtubeLinks: [
      "https://youtu.be/mmTvxvarQgY",
      "https://youtu.be/9m1LAjw8tlQ",
      "https://youtu.be/WodGYutt6m4",
    ],
  },
  {
    slug: "let-us-unite-corona",
    title: { ar: "لنتحدى كورونا", en: "Let Us Unite — Corona" },
    category: "tv-series",
    year: 2020,
    client: {
      ar: "31 قناة عربية وإماراتية",
      en: "31 Arabic & Emirati Channels",
    },
    episodes: 46,
    description: {
      ar: "إخراج وتصوير البرنامج التلفزيوني. صُورت حلقاته في دبي وبُثت أسبوعياً من أبريل حتى ديسمبر 2020.",
      en: "Directed and filmed the TV program. Episodes filmed in Dubai and broadcast weekly from April to December 2020.",
    },
    youtubeLinks: [
      "https://youtu.be/Zd_mgEdjH2E",
      "https://youtu.be/R35POEgUfTw",
      "https://youtu.be/D9FDguYCPok",
      "https://youtu.be/boljeR2ns08",
    ],
  },
  {
    slug: "awael",
    title: { ar: "أوائل", en: "Awael (Pioneers)" },
    category: "documentary",
    year: 2019,
    client: {
      ar: "هيئة الشارقة للإذاعة والتلفزيون",
      en: "Sharjah Broadcasting Authority",
    },
    episodes: 36,
    description: {
      ar: "إخراج وتصوير البرنامج الوثائقي أوائل.",
      en: "Directed and filmed the Awael documentary program.",
    },
    youtubeLinks: [
      "https://youtu.be/SEvha3-eOw8",
      "https://youtu.be/eNbBbhAgv8g",
      "https://youtu.be/0A5hSUj5NUA",
      "https://youtu.be/AeE0m-xywRc",
    ],
  },
  {
    slug: "joy-health",
    title: { ar: "جوي — للصحة", en: "Joy — Health Program" },
    category: "health",
    year: 2020,
    client: {
      ar: "مؤسسة أبوظبي للإعلام",
      en: "Abu Dhabi Media Foundation",
    },
    episodes: 15,
    broadcastChannel: { ar: "قناة أبو ظبي", en: "Abu Dhabi TV" },
    description: {
      ar: "مونتاج وتصوير البرنامج التوعوي والصحي جوي للصحة.",
      en: "Filmed and edited the Joy health awareness program.",
    },
    videoLinks: [
      "https://adtv.ae/video/27739242",
      "https://adtv.ae/video/27844965",
      "https://adtv.ae/video/27724847",
    ],
  },
  {
    slug: "here-we-are",
    title: { ar: "HERE WE ARE", en: "HERE WE ARE" },
    category: "music-video",
    year: 2020,
    client: {
      ar: "الفيديو كليب العربي",
      en: "Arabic Video Clip",
    },
    description: {
      ar: "تصوير ميكنج أوف وتصوير جوي للفيديو كليب مع النجوم العرب أحمد شوقي ورنا سماحة وماريتا حيلاني.",
      en: "Making-of and Joy filming for the video clip featuring Ahmed Shokry, Rana Samaha, and Marita Hilani.",
    },
    youtubeLinks: ["https://youtu.be/Ukl9S_DVmq4"],
  },
];

// ─── Equipment ──────────────────────────────────────────────────────────────

export const equipmentCategories: EquipmentCategory[] = [
  {
    id: "cinema-cameras",
    title: { ar: "كاميرات سينمائية", en: "Cinema Cameras" },
    description: {
      ar: "نولي اهتماماً كبيراً لاستخدام أحدث الأجهزة والمعدات في عمليات الإنتاج التلفزيوني لضمان تقديم أعلى مستويات الجودة والابتكار.",
      en: "We prioritize the latest cameras and equipment in TV production to ensure the highest quality and innovation.",
    },
    items: [
      {
        name: "RED KOMODO 6K Cinema Camera",
        specs:
          "Latest breakthrough product in RED's long line of innovative image capture technology.",
      },
      {
        name: "Sony FX6 Full-Frame Cinema Camera",
        quantity: "×4",
        specs: "4K Full-Frame 10.2MP CMOS Exmor R Sensor, DCI 4K60p, 15+ Stops Dynamic Range",
      },
      {
        name: "Sony ILME-FX3 Full-frame Cinema Line Camera",
        quantity: "×3",
        specs: "Full-frame performance with high sensitivity and wide dynamic range",
      },
    ],
  },
  {
    id: "lenses",
    title: { ar: "عدسات", en: "Lenses" },
    items: [
      {
        name: "DZOFilm VESPID 6-Lens Kit A (PL & EF Mounts)",
        specs: "25, 35, 50, 75, 100, and 125mm — full-frame, lightweight for handheld and gimbal",
      },
      { name: "Sony SEL-70-200 Lens F2.8 GM OSS II", quantity: "×2" },
      { name: "Sony SEL2470GM FE 24-70mm F2.8 GM Lens" },
      { name: "Sony FE 50mm F1.2" },
      {
        name: "Venus Optics Laowa 24mm f/14 Probe Lens for Sony E",
        specs: "Full-Frame Format, Aperture f/14 to f/40",
      },
    ],
  },
  {
    id: "stabilizers-rigs",
    title: { ar: "مثبتات وتجهيزات", en: "Stabilizers & Rigs" },
    items: [
      { name: "DJI RS3 Combo Gimbal Stabilizer", quantity: "×4" },
      { name: "DJI Ronin MX Professional Combo" },
      { name: "SmallRig Sony FX6 Shoulder Kit" },
      { name: "Slider PLUS Manual Long" },
      { name: "Tilta Camera Cage for Sony FX3/FX30 V2 Pro Kit" },
      { name: "Manfrotto Tripod" },
    ],
  },
  {
    id: "lighting",
    title: { ar: "الإضاءة والاستوديو", en: "Lighting & Studio" },
    description: {
      ar: "نحرص على استخدام معدات الإضاءة المتطورة لضمان إضاءة مثالية في كل مشهد.",
      en: "We use advanced lighting equipment to ensure optimal illumination in every scene.",
    },
    items: [
      { name: "Nanlite Forza 200 Daylight LED Monolight", quantity: "×3" },
      {
        name: "Aputure LS 600d Pro Light Storm Daylight LED Light (V-Mount)",
        quantity: "×3",
      },
      { name: "Nanlite PavoTube II 6C 10in RGBWW LED Tube", quantity: "×4" },
      {
        name: "Nanlite Pavotube II 30X 2KIT RGB Tubelight",
        quantity: "×2",
      },
      { name: "Eurolite LED PLL-480 CW/WW Panel" },
      { name: "PL-S150D 150W RGB-color Studio SMD LED Light" },
      { name: "Aputure Light Dome 150 Softbox", quantity: "×3" },
      { name: "Manfrotto EzyFrame Background 2 × 2.3m Black" },
      { name: "Glide Gear Butterfly" },
      { name: "C-stand With Heavy Duty" },
      { name: "LIGHT Combo Stand", quantity: "×6" },
    ],
  },
  {
    id: "drones",
    title: { ar: "الطائرات بدون طيار", en: "Drones" },
    description: {
      ar: "نحرص على الاستثمار في التكنولوجيا الحديثة والمعدات الاحترافية لتلبية احتياجات عملائنا.",
      en: "We invest in modern technology and professional equipment to meet client needs.",
    },
    items: [
      { name: "DJI FPV Drone" },
      { name: "DJI Mavic 3 Pro Drone" },
      { name: "DJI Mini 4 Pro" },
      {
        name: "Insta360 X3 Waterproof 360 Action Camera",
      },
    ],
  },
  {
    id: "audio",
    title: { ar: "أجهزة الصوت الاحترافية", en: "Professional Audio" },
    description: {
      ar: "تعد أجهزة الصوت الاحترافية من العناصر الأساسية التي تسهم في إضفاء جو مناسب وجودة عالية على المحتوى الإعلامي.",
      en: "Professional audio equipment is essential for high-quality media content.",
    },
    items: [
      {
        name: "Zoom F8n Pro",
        specs: "Records 8 Inputs & Stereo Mix",
      },
      { name: "BOOM MIC" },
      { name: "Sennheiser Wireless Microphone", quantity: "×17" },
      { name: "DJI Mic Digital Wireless Microphone", quantity: "×2" },
    ],
  },
  {
    id: "post-production",
    title: { ar: "أجهزة ما بعد الإنتاج", en: "Post Production" },
    description: {
      ar: "نقوم بتحويل المواد المصورة إلى منتجات نهائية متكاملة وجاهزة للبث بأحدث الأجهزة والتقنيات.",
      en: "We transform footage into broadcast-ready final products using the latest post-production technology.",
    },
    items: [
      { name: "Apple Mac Studio — M2 Ultra", quantity: "×4" },
      { name: "Master Simulator PC" },
      { name: "Graphic & Animation Workstations" },
      { name: "Curved Screen Editing Monitors" },
    ],
  },
];

// ─── Team ─────────────────────────────────────────────────────────────────────

export const teamMembers: TeamMember[] = [
  {
    id: "muhammad-abu-shqir",
    name: "Muhammad Abu Shqir",
    role: { ar: "مدير الإنتاج", en: "Production Manager" },
  },
  featuredTeamMember,
  {
    id: "faisal-abu-jarad",
    name: "Faisal Abu Jarad",
    role: {
      ar: "إدارة الإنتاج التلفزيوني",
      en: "TV Production Management",
    },
  },
  {
    id: "wael-al-lahham",
    name: "Wael Al-Lahham",
    role: { ar: "كاتب / كاتب سيناريو", en: "Writer / Screenwriter" },
  },
  {
    id: "ghazal-mohammad",
    name: "Ghazal Mohammad",
    role: { ar: "منتج", en: "Producer" },
  },
  {
    id: "firas-ahmed",
    name: "Firas Ahmed",
    role: { ar: "مهندس صوت", en: "Sound Engineer" },
  },
  {
    id: "tamer-abu-daqen",
    name: "Tamer Abu Daqen",
    role: { ar: "محاسب مالي", en: "Financial Accountant" },
  },
  {
    id: "mohammed-al-dous",
    name: "Mohammed Al-Dous",
    role: {
      ar: "مصمم جرافيك أول",
      en: "Senior Graphic Designer",
    },
  },
  {
    id: "abdalaziz-salama",
    name: "Abdalaziz Salama",
    role: {
      ar: "مونتير / مشغل كاميرا",
      en: "Editor / Camera Operator",
    },
  },
  {
    id: "jomaa-al-farra",
    name: "Jomaa Al-Farra",
    role: { ar: "مونتير", en: "Editor" },
  },
  {
    id: "nehad-abusharia",
    name: "Nehad AbuSharia",
    role: {
      ar: "مونتير / مشغل كاميرا",
      en: "Editor / Camera Operator",
    },
  },
  {
    id: "moamen-alm-eldein",
    name: "Moamen Alm Eldein",
    role: { ar: "مخرج / مدير تصوير", en: "Director / DOP" },
  },
  {
    id: "abdul-rahman-al-zoubi",
    name: "Abdul Rahman Al-Zoubi",
    role: { ar: "مشغل كاميرا", en: "Camera Operator" },
  },
  {
    id: "omar-shaheen",
    name: "Omar Shaheen",
    role: { ar: "مشغل كاميرا", en: "Camera Operator" },
  },
  {
    id: "suhel-azooz",
    name: "Suhel Azooz",
    role: { ar: "مشغل كاميرا", en: "Camera Operator" },
  },
];

// ─── Clients ────────────────────────────────────────────────────────────────

export const clients: Client[] = [
  {
    id: "federal-authority-identity",
    name: {
      ar: "الهيئة الاتحادية للجوازات والجنسية",
      en: "Federal Authority for Identity & Citizenship",
    },
    category: "government",
    logo: "/images/clients/logo-03.webp",
  },
  {
    id: "dubai-police",
    name: { ar: "شرطة دبي", en: "Dubai Police" },
    category: "government",
    logo: "/images/clients/logo-04.webp",
  },
  {
    id: "sharjah-municipality",
    name: { ar: "بلدية الشارقة", en: "Sharjah Municipality" },
    category: "government",
    logo: "/images/clients/logo-05.webp",
  },
  {
    id: "dubai-municipality",
    name: { ar: "بلدية دبي", en: "Dubai Municipality" },
    category: "government",
    logo: "/images/clients/logo-06.webp",
  },
  {
    id: "tadweer",
    name: { ar: "تدوير", en: "Tadweer" },
    category: "government",
    logo: "/images/clients/logo-07.webp",
  },
  {
    id: "expo-2020",
    name: { ar: "إكسبو 2020", en: "Expo 2020" },
    category: "event",
    logo: "/images/clients/logo-08.webp",
  },
  {
    id: "global-village",
    name: { ar: "القرية العالمية", en: "Global Village" },
    category: "event",
    logo: "/images/clients/logo-09.webp",
  },
  {
    id: "sharjah-book-fair",
    name: {
      ar: "معرض الشارقة للكتاب",
      en: "Sharjah Book Fair",
    },
    category: "event",
    note: { ar: "4 سنوات", en: "4 years" },
    logo: "/images/clients/logo-10.webp",
  },
  {
    id: "abu-dhabi-book-fair",
    name: {
      ar: "معرض أبوظبي للكتاب",
      en: "Abu Dhabi Book Fair",
    },
    category: "event",
    note: { ar: "سنتين", en: "2 years" },
    logo: "/images/clients/logo-11.webp",
  },
  {
    id: "sharouq-investment",
    name: {
      ar: "هيئة التطوير والاستثمار — شروق",
      en: "Sharouq Development & Investment Authority",
    },
    category: "semi-government",
    logo: "/images/clients/logo-12.webp",
  },
  {
    id: "dubai-health-city",
    name: { ar: "مدينة دبي الطبية", en: "Dubai Health City" },
    category: "semi-government",
    logo: "/images/clients/logo-13.webp",
  },
  {
    id: "university-city-sharjah",
    name: {
      ar: "المدينة الجامعية — الشارقة",
      en: "University City — Sharjah",
    },
    category: "semi-government",
    logo: "/images/clients/logo-14.webp",
  },
  {
    id: "al-majaz-theatre",
    name: { ar: "مسرح المجاز", en: "Al Majaz Theatre" },
    category: "semi-government",
  },
  {
    id: "ajman-chamber",
    name: {
      ar: "غرفة وصناعة عجمان",
      en: "Ajman Chamber of Commerce & Industry",
    },
    category: "semi-government",
  },
  {
    id: "ajman-ports",
    name: { ar: "موانئ عجمان", en: "Ajman Ports" },
    category: "semi-government",
  },
  {
    id: "watani-foundation",
    name: {
      ar: "مؤسسة وطني الإمارات",
      en: "Watani Emirati Foundation",
    },
    category: "semi-government",
  },
  {
    id: "sharjah-heritage-institute",
    name: {
      ar: "معهد الشارقة للتراث",
      en: "Sharjah Institute for Heritage",
    },
    category: "semi-government",
    note: { ar: "4 سنوات", en: "4 years" },
  },
  {
    id: "gitex",
    name: { ar: "معرض جايتكس", en: "GITEX Exhibition" },
    category: "event",
    note: { ar: "5 سنوات", en: "5 years" },
  },
  {
    id: "ministry-education",
    name: {
      ar: "وزارة التربية والتعليم",
      en: "Ministry of Education",
    },
    category: "government",
  },
  {
    id: "ministry-finance-abu-dhabi",
    name: {
      ar: "وزارة المالية — أبوظبي",
      en: "Ministry of Finance — Abu Dhabi",
    },
    category: "government",
  },
  {
    id: "ministry-awqaf",
    name: { ar: "وزارة الأوقاف", en: "Ministry of Awqaf" },
    category: "government",
  },
  {
    id: "etihad-museum",
    name: { ar: "متحف الاتحاد دبي", en: "Etihad Museum Dubai" },
    category: "government",
  },
  {
    id: "louvre-abu-dhabi",
    name: {
      ar: "متحف اللوفر أبوظبي",
      en: "Louvre Abu Dhabi",
    },
    category: "government",
  },
  {
    id: "qasr-al-watan",
    name: { ar: "قصر الوطن", en: "Qasr Al Watan" },
    category: "government",
  },
  {
    id: "beeah",
    name: { ar: "بيئة", en: "Bee'ah" },
    category: "semi-government",
  },
  {
    id: "martyrs-day",
    name: { ar: "يوم الشهيد", en: "Martyrs' Day" },
    category: "event",
    note: { ar: "3 سنوات", en: "3 years" },
  },
  {
    id: "flag-day",
    name: { ar: "يوم العلم", en: "Flag Day" },
    category: "event",
    note: { ar: "5 سنوات", en: "5 years" },
  },
  {
    id: "national-day",
    name: {
      ar: "اليوم الوطني الإماراتي",
      en: "UAE National Day",
    },
    category: "event",
    note: { ar: "5 سنوات", en: "5 years" },
  },
  {
    id: "new-year",
    name: {
      ar: "احتفالات رأس السنة",
      en: "New Year Celebrations",
    },
    category: "event",
    note: { ar: "5 سنوات", en: "5 years" },
  },
  {
    id: "sultan-bin-zayed-festival",
    name: {
      ar: "مهرجان الشيخ سلطان بن زايد آل نهيان — سويحان",
      en: "Sheikh Sultan bin Zayed Festival — Suwaihan",
    },
    category: "event",
    note: { ar: "تراثي — سنتين", en: "Heritage — 2 years" },
  },
  {
    id: "camel-race-dhaid",
    name: {
      ar: "مهرجان الشيخ محمد بن زايد لسباق الهجن — الذيد",
      en: "Sheikh Mohammed bin Zayed Camel Race Festival — Al Dhaid",
    },
    category: "event",
  },
  {
    id: "camel-race-al-dhaid",
    name: {
      ar: "مهرجان الذيد لسباق الهجن",
      en: "Al Dhaid Camel Race Festival",
    },
    category: "event",
  },
  {
    id: "operetta-hamsa",
    name: {
      ar: "أوبريت همسة مصرية في حب الإمارات",
      en: "Operetta: An Egyptian Whisper in Love with the Emirates",
    },
    category: "event",
  },
  {
    id: "zayed-mass-wedding",
    name: {
      ar: "عرس زايد الجماعي",
      en: "Zayed Mass Wedding",
    },
    category: "event",
  },
];

// ─── Timeline ───────────────────────────────────────────────────────────────

export const timeline: TimelineEntry[] = [
  {
    id: "2017-al-emaratiya",
    year: 2017,
    title: {
      ar: "المسلسل الإماراتي مع يدوه",
      en: "Al Emaratiya Series with Yidooh",
    },
    description: {
      ar: "إخراج وتصوير 33 حلقة من المسلسل الإماراتي.",
      en: "Directed and filmed 33 episodes of Al Emaratiya series.",
    },
    projectSlug: "al-emaratiya",
  },
  {
    id: "2017-farij-al-badu",
    year: 2017,
    title: { ar: "فريج البدو", en: "Farij Al Badu" },
    description: {
      ar: "مونتاج 31 حلقة من البرنامج الحواري.",
      en: "Edited 31 episodes of the talk show.",
    },
    projectSlug: "farij-al-badu",
  },
  {
    id: "2018-mazaraena",
    year: 2018,
    title: { ar: "مزارعنا", en: "Mazaraena" },
    description: {
      ar: "تصوير ومونتاج 15 حلقة وثائقية.",
      en: "Filmed and edited 15 documentary episodes.",
    },
    projectSlug: "mazaraena",
  },
  {
    id: "2019-documentaries",
    year: 2019,
    title: {
      ar: "آثار الشرقية، كنوز من الوسطى، أوائل",
      en: "Athar Al Sharqiya, Kunooz, Awael",
    },
    description: {
      ar: "سلسلة برامج وثائقية لإذاعة الشارقة.",
      en: "Documentary series for Sharjah Broadcasting.",
    },
  },
  {
    id: "2019-smart-government",
    year: 2019,
    title: { ar: "برنامج حكومة ذكية", en: "Smart Government Program" },
    description: {
      ar: "إخراج وتصوير برنامج يبث على جميع القنوات الإماراتية.",
      en: "Directed Smart Government program on all Emirati channels.",
    },
    projectSlug: "smart-digital-government",
  },
  {
    id: "2020-corona",
    year: 2020,
    title: { ar: "لنتحدى كورونا", en: "Let Us Unite — Corona" },
    description: {
      ar: "46 حلقة بُثت أسبوعياً على 31 قناة.",
      en: "46 episodes broadcast weekly on 31 channels.",
    },
    projectSlug: "let-us-unite-corona",
  },
  {
    id: "2020-joy",
    year: 2020,
    title: { ar: "جوي للصحة", en: "Joy Health Program" },
    description: {
      ar: "15 حلقة توعوية على قناة أبو ظبي.",
      en: "15 awareness episodes on Abu Dhabi TV.",
    },
    projectSlug: "joy-health",
  },
  {
    id: "2022-ministry",
    year: 2022,
    title: {
      ar: "وزارة شؤون مجلس الوزراء",
      en: "Ministry of Cabinet Affairs",
    },
    description: {
      ar: "انضمام يوسف شاهين — أكثر من 100 فيديو قصير وتغطية فعاليات رئيسية.",
      en: "Youssef Shaheen joins ministry — 100+ short social videos and major event coverage.",
    },
  },
  {
    id: "2022-sharjah-series",
    year: 2022,
    title: {
      ar: "صُنع في الشارقة وجهود خفية",
      en: "Made in Sharjah & Hidden Efforts",
    },
    description: {
      ar: "برنامجان من 15 حلقة لإذاعة الشارقة — إنتاج بروميديا.",
      en: "Two 15-episode programs for Sharjah TV — PRO MEDIA production.",
    },
  },
  {
    id: "2023-rehleti-maazen",
    year: 2023,
    title: {
      ar: "رحلتي ومآذن الشارقة",
      en: "Rehleti & Minarets of Sharjah",
    },
    description: {
      ar: "انطلاق برنامجين رئيسيين — 30 حلقة رحلتي وموسم مآذن الشارقة.",
      en: "Launch of Rehleti (30 episodes) and Minarets of Sharjah season.",
    },
  },
  {
    id: "2024-expansion",
    year: 2024,
    title: {
      ar: "أرض الخير، حنين الشواطئ، خيرات الوسطى",
      en: "Land of Goodness, Nostalgia of Shores, Central Treasures",
    },
    description: {
      ar: "توسع إنتاجات بروميديا في دبي والمنطقة الشرقية والوسطى.",
      en: "PRO MEDIA expands production across Dubai, Eastern, and Central regions.",
    },
  },
  {
    id: "2025-latest",
    year: 2025,
    title: {
      ar: "سفاري الشارقة، عساكم على القوة، أعماق البحر",
      en: "Sharjah Safari, May You Stay Strong, Depths of the Sea",
    },
    description: {
      ar: "ثلاثة برامج جديدة — 17–15 حلقة لإذاعة الشارقة.",
      en: "Three new programs — 15–17 episodes for Sharjah Broadcasting.",
    },
  },
];

// ─── Why Choose Us ────────────────────────────────────────────────────────────

export const whyChooseUs: WhyChooseUsItem[] = [
  {
    id: "workflow",
    title: {
      ar: "آلية عمل متكاملة",
      en: "Integrated Workflow",
    },
    description: {
      ar: "استشارة وتخطيط → تنفيذ بأحدث التقنيات → مراجعة وتعديل لضمان رضا العميل الكامل.",
      en: "Client consultation → planning → implementation with latest tech → review & revision for complete satisfaction.",
    },
  },
  {
    id: "equipment",
    title: {
      ar: "معدات احترافية حديثة",
      en: "State-of-the-Art Equipment",
    },
    description: {
      ar: "RED KOMODO 6K، Sony FX6/FX3، عدسات DZOFilm، إضاءة Nanlite/Aputure، طائرات DJI، واستوديوهات Mac Studio M2 Ultra.",
      en: "RED KOMODO 6K, Sony FX6/FX3, DZOFilm lenses, Nanlite/Aputure lighting, DJI drones, and Mac Studio M2 Ultra post-production.",
    },
  },
  {
    id: "government-trust",
    title: {
      ar: "ثقة الجهات الحكومية",
      en: "Government Trust",
    },
    description: {
      ar: "شراكات مع شرطة دبي، بلديات دبي والشارقة، إكسبو 2020، القرية العالمية، وزارات اتحادية، وهيئات شبه حكومية.",
      en: "Partnerships with Dubai Police, Dubai & Sharjah municipalities, Expo 2020, Global Village, federal ministries, and semi-government entities.",
    },
  },
  {
    id: "team-expertise",
    title: {
      ar: "فريق خبراء محترف",
      en: "Expert Professional Team",
    },
    description: {
      ar: "16+ محترفاً بمهارات استثنائية — مخرجون، مصورون، مونتيرون، مهندسو صوت، ومصممو جرافيك.",
      en: "16+ talented professionals — directors, DOPs, editors, sound engineers, and graphic designers.",
    },
  },
  {
    id: "proven-track-record",
    title: {
      ar: "سجل إنجازات مثبت",
      en: "Proven Track Record",
    },
    description: {
      ar: "1000+ فيديو ترويجي، 500+ حلقة تلفزيونية، و65+ حلقة مآذن الشارقة عبر 4 مواسم.",
      en: "1000+ promotional videos, 500+ TV episodes, and 65+ Minarets of Sharjah episodes across 4 seasons.",
    },
  },
  {
    id: "heritage-focus",
    title: {
      ar: "محتوى يلامس الهوية الإماراتية",
      en: "Emirati Heritage Focus",
    },
    description: {
      ar: "برامج تبرز التراث الإماراتي والحداثة المعرفة — من رحلتي إلى مآذن الشارقة ومن البحر.",
      en: "Programs highlighting Emirati heritage and modern knowledge — from Rehleti to Minarets of Sharjah and From the Sea.",
    },
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByCategory(category: ProjectCategory): Project[] {
  return projects.filter((p) => p.category === category);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getFeaturedTeamMember(): TeamMember {
  return featuredTeamMember;
}

export const siteData = {
  companyInfo,
  missionVision,
  services,
  workflowSteps,
  statistics,
  featuredTeamMember,
  youssefCertificates,
  projects,
  equipmentCategories,
  teamMembers,
  clients,
  timeline,
  whyChooseUs,
} as const;

export type SiteData = typeof siteData;
