import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "F & T Media",
  lastName: "",
  get name() {
    return this.firstName;
  },
  role: "Building Digital Presence That Stands Out",
  avatar: "/images/LOGO.png",

  // 🔴 IMPORTANT: keep these separate
  location: "Global",        // Display only
  timeZone: "UTC",           // Used in Header.tsx (fixes your error)

  languages: [],
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.name}'s Newsletter</>,
  description: (
    <>
      We share insights on digital portfolios, branding strategies, and building a powerful online presence.
    </>
  ),
};

const social = [
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/", // 🔁 UPDATE
  },
  // Add more later
  // {
  //   name: "Instagram",
  //   icon: "instagram",
  //   link: "",
  // },
  // {
  //   name: "Email",
  //   icon: "email",
  //   link: "",
  // },
];

const home = {
  label: "Home",
  title: `${person.name}`,
  description: `Building Digital Presence That Stands Out`,
  headline: <>Build Your Digital Identity with F & T Media</>,
  subline: (
    <>
      We specialize in creating impactful <InlineCode>Digital Portfolio</InlineCode> for individuals, brands, and businesses.
      <br />
      From personal branding to company showcases, we design modern, high-performing websites that reflect your identity and value.
      <br />
      Stand out, build credibility, and grow your presence online with us.
    </>
  ),
};

const about = {
  label: "About",
  title: "About us",
  description: `Meet ${person.name}, ${person.role}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/", // 🔁 UPDATE
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        At F & T Media, we help individuals and brands build strong digital identities through modern portfolio experiences.
        <br />
        Our focus is on crafting visually compelling, strategically structured websites that communicate your story effectively.
        <br />
        We aim to empower you with a digital presence that builds trust, attracts opportunities, and drives growth.
      </>
    ),
  },

  servicesWeOffer: {
    display: true,
    title: "Services We Offer",
    experiences: [
      {
        company: "Personal Portfolio Development",
        timeframe: "",
        role: "",
        achievements: [
          <>Custom-designed portfolios for professionals, creators, and freelancers.</>,
        ],
        images: [],
      },
      {
        company: "Brand Identity & Digital Presence",
        timeframe: "",
        role: "",
        achievements: [
          <>Building cohesive and impactful digital identities for brands and businesses.</>,
        ],
        images: [],
      },
      {
        company: "Website Design & Development",
        timeframe: "",
        role: "",
        achievements: [
          <>Modern, responsive websites optimized for performance and storytelling.</>,
        ],
        images: [],
      },
      {
        company: "Content & Visual Strategy",
        timeframe: "",
        role: "",
        achievements: [
          <>Strategic content and design planning to maximize engagement and clarity.</>,
        ],
        images: [],
      },
    ],
  },

  studies: {
    display: false, // Hidden (not relevant)
    title: "Studies",
    institutions: [],
  },

  technical: {
    display: true,
    title: "Capabilities",
    skills: [
      {
        title: "UI/UX Design",
        description: <>Designing clean, intuitive, and visually engaging user experiences.</>,
        images: [],
      },
      {
        title: "Web Development",
        description: <>Building fast and scalable websites using modern frameworks.</>,
        images: [],
      },
      {
        title: "Brand Strategy",
        description: <>Helping brands define and communicate their identity clearly.</>,
        images: [],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Insights on Digital Presence & Branding",
  description: `Thoughts and ideas from ${person.name}`,
};

const servicesWeOffer = {
  label: "Work",
  title: "Our Projects",
  description: `Portfolio and client work by ${person.name}`,
};

const gallery = {
  label: "Gallery",
  title: "Our Work Showcase",
  description: `A collection of projects by ${person.name}`,
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "project",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "project",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "project",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "project",
      orientation: "horizontal",
    },
  ],
};

const login = {
  label: "Contact",
  title: "Get in Touch",
  description: `Connect with ${person.name}`,
  tableOfContent: {
    display: false,
    subItems: false,
  },
  avatar: {
    display: false,
  },
  calendar: {
    display: true,
    link: "https://cal.com/", // 🔁 UPDATE
  },
  intro: {
    display: true,
    title: "Let's Work Together",
    description: (
      <>
        Ready to build your digital presence?
        <br />
        Schedule a call and let’s create something impactful together.
      </>
    ),
  },
};

export {
  person,
  social,
  newsletter,
  home,
  about,
  blog,
  servicesWeOffer,
  gallery,
  login,
};