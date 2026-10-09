// Edit this file to personalise the whole site.
export type CaseStudy = {
  slug: string; title: string; category: string; year: string; summary: string;
  colors: [string, string]; role: string; duration: string; team: string; overview: string;
  sections: { title: string; body: string; image: string }[];
  results: [string, string][];
};
export type Job = { role: string; company: string; period: string; points: string[] };
export type Project = { title: string; description: string; tags: string[]; url: string };

export const profile = {
  name: "Evans Oshoakpeme",
  role: "Product Designer",
  headline: "I design products that people find easy to use.",
  intro: "Product designer shaping fintech, health and marketplace products from first research interviews to shipped systems.",
  about: [
    "I turn messy problems into clear, usable products. My process starts with listening: user interviews, support tickets and analytics, before a single frame is drawn.",
    "I approach the design process with empathy and an equity-focused mindset, serving generally underserved audience",
    "I work closely with engineers and product managers, and I care about the details that make an interface feel calm: spacing, states, copy and accessibility.",
  ],
  skills: ["User research", "Interaction design", "Design systems", "Prototyping", "Usability testing", "Accessibility", "Figma", "HTML & CSS", "JavaScript & TypeScript"],
  location: "Africa, Lagos (WAT)",
  email: "ev.oshoakpeme@gmail.com",
  resume: "/resume.pdf",
  socials: {
    github: "https://github.com/evans-oshoakpeme",
    linkedin: "https://linkedin.com/in/evans-oshoakpeme",
    dribbble: "https://dribbble.com/your-username",
    x: "https://x.com/oshozair",
  },
  image: "/profile.jpg",
};

export const experience: Job[] = [
  { role: "Product Designer", company: "Mombee", period: "Present", points: ["I engineered a comprehensive component library in Figma using auto-layout and variants, optimizing  for  high-contrast  visibility.", "I designed an offline-first mobile architecture, mapping user flows that allow mothers to log health data, view prenatal tips, and track appointments offline."] },
  { role: "Visual Designer & Manual Tester", company: "Gilah Global Limited", period: "2021 - 2023", points: ["I  executed  targeted  user  research  and  designed  impactful  visual  assets,  directly contributing to a 10% increase in the product's conversion rate.", "I conducted usability tests for 2 products, gathering valuable feedback from users."] },
  /*{ role: "UI/UX Designer", company: "Kobo Studio", period: "2019 - 2021", points: ["Delivered web and mobile work for 12 clients across retail and logistics.", "Introduced a shared prototyping workflow with developers."] },*/
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "mombee-maternal-and-child-care-app", title: "Mombee maternal and child care app", category: "Healthcare, Mobile", year: "2026",
    summary: "Designed a mobile app that helps Nigerian women and their partners follow antenatal care, postnatal checks, childhood vaccinations, and developmental milestones from pregnancy through the child's first one to two years.",
    colors: ["#26619C", "#9C2661"], role: "UI/UX designer", duration: "6 months", team: "2 designers, 4 engineers, 1 PM",
    overview: "Nigeria had 2.1 million zero-dose children in 2024, the most of any country (WHO/UNICEF via BusinessDay, 2025). A zero-dose child has not received even the first dose of the DTP vaccine.",
    sections: [
      { title: "The problem", body: "Nigerian mothers and their partners need a way to follow one continuous, low-data care timeline from pregnancy through the child’s second year (antenatal visits, postnatal checks, vaccines and milestones) in a language they understand, because missed care early compounds into missed immunization later", image: "/mombee-problem.jpg" },
      { title: "Approach", body: " I defined the audience (Nigerian women), the time span (pregnancy through the baby's first one to two years), and who it serves (mothers first, partners as a secondary primary audience), " + 
        "then I reviewed national survey analyses, peer-reviewed studies, preprints, a trial registration, market reports, and competitor information, and sorted the findings into user behaviors, needs, motivations, and pain points, " +
        "then I stated the hypothesis so it could be tested: an offline-first app with a personalised timeline, local-language text and audio, reminders by push, SMS, or WhatsApp, and a consent-based partner view which allows mothers to share their care journey with partners, thereby increasing adherence to care and immunization schedules." +
        "I then created a low-fidelity prototype, tested it with 20 mothers and 10 partners, iterated on the design, and created a high-fidelity prototype for handoff to engineers.",
        image: "/mombee-approach.jpg"
      },
      { title: "Insights and Design decisions", body: "I found that mothers and partners wanted a single timeline that shows all care events, with clear explanations of what each event is, why it matters, and what to expect. They also wanted reminders and the ability to share their progress with partners. I designed a timeline view with color-coded events, plain-language descriptions, and optional audio explanations. I also added a consent-based partner view that allows mothers to share their care journey with partners.", image: "/mombee-insights.jpg" },
      { title: "Where I succeeded", body: "I created a unified care timeline that shows all events in one place, with clear explanations and reminders. I also designed a partner view that allows mothers to share their progress with partners, which was well-received in user testing.", image: "/mombee-success.jpg" },
      { title: "Where I could improve", body: "I could have conducted more user testing with a larger and more diverse group of mothers and partners, and I could have explored more options for offline functionality and data synchronization.", image: "/mombee-improvement.jpg" },
      { title: "Solution", body: "The solution is an offline-first mobile app that gives each mother one personalised care timeline built from her due date and, later, her baby's birth date. The app provides features for the following:\n\n• Antenatal visits, postnatal checks, and vaccinations, with reminders and an overdue status.\n• Exportable for a health worker and backed up so it survives a lost phone.\n• Works without internet, in local languages, and with reminders by push, SMS, or WhatsApp.\n• Short lessons with quizzes, a nearby clinic finder, and optional health logs and milestone tracking.\n• The mother invites a partner, chooses what is visible, and can revoke access at any time.\n • App lock, discreet notifications, and separate profiles.", image: "/mombee-solution.gif" },
    ],
    results: [["45 sec", "average time to complete onboarding"], ["9/10", "user satisfaction"], ["AA", "Accessibility Standards met"]]
  },
  /*{
    slug: "heliox-patient-onboarding", title: "Heliox patient onboarding", category: "Healthcare, Mobile", year: "2023",
    summary: "A calmer onboarding that helps patients book their first visit without calling the clinic.",
    colors: ["#619C26", "#26619C"], role: "Product designer", duration: "4 months", team: "1 designer, 4 engineers, 1 researcher",
    overview: "Nearly half of new patients dropped out before booking, often because the form asked for too much, too early.",
    sections: [
      { title: "The problem", body: "The original flow asked for insurance, history and ID in one go. Patients felt overwhelmed and many abandoned the app." },
      { title: "Approach", body: "We split the flow into small steps, moved optional questions after booking, and tested with 20 patients including older adults." },
      { title: "Solution", body: "A four-step flow with progress feedback, saved answers and larger touch targets that meet WCAG AA." },
    ],
    results: [["81%", "completion, up from 54%"], ["-60%", "calls to the clinic"], ["AA", "accessibility standard met"]],
  },
  {
    slug: "kobo-delivery-tracking", title: "Kobo delivery tracking", category: "Logistics, Mobile", year: "2021",
    summary: "Live tracking that tells customers when the rider will arrive, not just where they are.",
    colors: ["#9C2661", "#619C26"], role: "UI/UX designer", duration: "3 months", team: "2 designers, 3 engineers",
    overview: "Customers kept messaging riders for updates, which slowed down deliveries.",
    sections: [
      { title: "The problem", body: "A moving dot on a map did not answer the real question: how long until my package arrives?" },
      { title: "Approach", body: "I ran contextual interviews with riders and customers, then tested time-window messaging in a clickable prototype." },
      { title: "Solution", body: "Arrival windows, proactive delay alerts and a simple rider contact option." },
    ],
    results: [["-45%", "rider messages"], ["+18", "NPS points"], ["3 wks", "from prototype to launch"]],
  },*/
];

export const projects: Project[] = [
  { title: "Motivate Me", description: "A small web tool to generate motivational quotes using Gemini API.", tags: ["Google Gemini", "JavaScript"], url: "https://motivate-me-seven.vercel.app/" },
  /*{ title: "Spacing Scale", description: "A small web tool to generate consistent spacing and type scales.", tags: ["Next.js", "Tool"], url: "https://example.com/spacing-scale" },
  { title: "Kitchen Table", description: "Concept app for splitting household chores fairly.", tags: ["Concept", "Mobile"], url: "https://example.com/kitchen-table" },
  { title: "Field Notes UI", description: "A free UI kit for research note-taking and synthesis.", tags: ["UI kit", "Figma"], url: "https://example.com/field-notes" },*/
];
