

export const profile = {
  name: 'Sereena Ahamad',
  initials: 'SA',
  title: 'Front-End Developer & Designer',
  badge: 'Available for remote work',
  headlineTop: 'Building Beautiful',
  headlineGradient: 'Digital Experiences',
  intro:
    'I build responsive websites and web applications with React, and create visually engaging designs that help brands communicate, connect and grow online.',
  resumeUrl: '/sereenaCV.pdf',
  socials: [
    { label: 'LinkedIn', icon: 'Linkedin', url: 'https://linkedin.com/in/sereena-ahamed-a10308a7/' },
    { label: 'GitHub', icon: 'Github', url: 'https://github.com/sereenaahamad' },
    { label: 'Email', icon: 'Mail', url: 'mailto:serenaahamed@gmail.com' },
  ],
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export const stats = [
  { icon: 'Rocket', value: '6+', label: 'Years of Experience' },
  { icon: 'Briefcase', value: '20+', label: 'Projects Completed' },
  { icon: 'Code2', value: '100%', label: 'Client Satisfaction' },
  { icon: 'Star', value: 'Frontend + Design', label: 'Unique Skill Combination' },
]

// Section 1 - engineering-led work: apps and interfaces built and coded.
export const frontendProjects = [
  
  {
    title: 'Fire Safety Dashboard',
    description:
      'Fire safety monitoring dashboard with analytics, inspections and real-time alerts.',
    tags: ['React', 'Dashboard', 'Charts'],
    icon: 'LayoutDashboard',
    featured: true,
    thumbnail: '/thumbnail/dashboard.jpg',
    url: 'https://fire-safety-dashboard-gules.vercel.app/'
  },
  {
    title: 'Ecommerce App',
    description: 'Responsive ecommerce platform with product browsing and cart.',
    tags: ['React', 'Redux', 'UI/UX'],
    thumbnail: '/thumbnail/ecommerce.jpg',
    url: 'https://voguex-jet.vercel.app/'
  },
  {
    title: 'AuraSpace',
    description: 'Mood tracking web app that helps users improve mental well-being.',
    tags: ['React', 'Tailwind CSS', 'Vite'],
    thumbnail: '/thumbnail/auraspace.jpg',
    url: 'https://auraspace-gray.vercel.app/'
  },
  {
    title: 'Alego Fire Systems',
    description:
      'Modern corporate front end for a fire safety brand with clear service presentation and strong visual hierarchy.',
    tags: ['Bootstrap', 'Responsive', 'Corporate Website'],
    thumbnail: '/thumbnail/alego.jpg',
    url: 'https://alego.in/'
    
  },
  {
    title: 'Elomech MEP',
    description:
      'Responsive front-end website for an engineering services company focused on readability and trust.',
    tags: ['Bootstrap', 'UI/UX', 'Service Website'],
    thumbnail: '/thumbnail/elomech.jpg',
    url: 'https://elomechmep.com/'
  },
]

const logoGallery = [
  '/designs/logos/logo1.jpg',
  '/designs/logos/logo2.jpg',
  '/designs/logos/logo3.jpg',
  '/designs/logos/logo4.jpg',
]

const brochureGallery = [
  '/designs/brochure/brochure2.jpg',
  '/designs/brochure/brochure4.jpg',
  '/designs/brochure/brochure1.jpg',
  '/designs/brochure/brochure3.jpg',
]
const posterGallery = [
  '/designs/posters/poster1.jpg',
  '/designs/posters/poster2.jpg',
  '/designs/posters/poster3.jpg',
  '/designs/posters/poster5.jpg',
  '/designs/posters/poster4.jpg',
  '/designs/posters/poster6.jpg',
]
const visitingcardGallery = [
  '/designs/visiting-cards/vc1.jpg',
  '/designs/visiting-cards/vc2.jpg',
]
const pptGallery = [
  '/designs/ppt/ppt1.jpg',
  '/designs/ppt/ppt2.jpg',
]
const expandGallery = (images, minCount = 2) => {
  if (!images.length) return []

  const gallery = [...images]
  let index = 0

  while (gallery.length < minCount) {
    gallery.push(images[index % images.length])
    index += 1
  }

  return gallery
}

// Section 2 - design-led work: grouped into separate creative categories.
export const creativeDesignSections = [
  {
    title: 'Creative Designs',
    subtitle: 'Logo design, brand marks and visiting card layouts.',
    accent: 'indigo',
    projects: [
      {
        title: 'Logo Concepts',
        description: 'Clean, memorable logo ideas built around brand direction and identity.',
        tags: ['Logo Design', 'Branding', 'Identity'],
        icon: 'Palette',
        thumbnail: '/designs/logos/logo1.jpg',
        galleryImages: expandGallery(logoGallery),
      },
      {
        title: 'Visiting Card',
        description: 'Professional business card layouts with polished typography and balance.',
        tags: ['Visiting Card', 'Print', 'Branding'],
        icon: 'CreditCard',
        thumbnail: '/designs/visiting-cards/vc2.jpg',
        galleryImages: expandGallery(visitingcardGallery),
      },
       {
        title: 'Brochure',
        description: 'Brochure layouts that present services and information in a clean format.',
        tags: ['Brochure', 'Layout', 'Print'],
        icon: 'BookOpen',
        thumbnail: '/designs/brochure/brochure2.jpg',
        galleryImages: expandGallery(brochureGallery),
      },
      {
        title: 'Posters',
        description: 'Eye-catching posters created for campaigns, announcements and events.',
        tags: ['Poster', 'Creative', 'Marketing'],
        icon: 'Megaphone',
        thumbnail: '/designs/posters/poster1.jpg',
        galleryImages: expandGallery(posterGallery),
      },
      {
        title: 'PPT Presentation',
        description: 'Clean presentation slides designed for clarity, flow and visual impact.',
        tags: ['PPT', 'Presentation', 'Slides'],
        icon: 'Monitor',
        thumbnail: '/designs/ppt/ppt1.jpg',
        galleryImages: expandGallery(pptGallery),
      },
    ],
  },
 
]

export const skillGroups = [
  {
    label: 'Development',
    skills: [
      { name: 'React', icon: 'Atom' },
      { name: 'JavaScript', icon: 'FileCode' },
      { name: 'HTML5', icon: 'Code2' },
      { name: 'CSS3', icon: 'Paintbrush' },
      { name: 'Tailwind CSS', icon: 'Wind' },
      { name: 'Bootstrap', icon: 'Boxes' },
      { name: 'Git', icon: 'GitBranch' },
      { name: 'GitHub', icon: 'Github' },
    ],
  },
  {
    label: 'Design',
    skills: [
      { name: 'Figma', icon: 'Figma' },
      { name: 'Photoshop', icon: 'Image' },
      { name: 'Illustrator', icon: 'PenTool' },
      { name: 'Canva', icon: 'Palette' },
      { name: 'Responsive Design', icon: 'Smartphone' },
      { name: 'UI/UX', icon: 'LayoutGrid' },
      { name: 'Web Design', icon: 'Monitor' },
    ],
  },
]

export const experience = [
  {
    role: 'Front-End Developer & Digital Designer',
    company: 'Alego Fire Systems',
    period: 'Jan 2023 - Present',
    points: [
      'Built responsive React-based websites with improved speed and usability.',
      'Designed UI/UX for better engagement and lower bounce rates.',
      'Created digital marketing assets, brochures, presentations and social creatives.',
      'Maintained website content and ensured optimal user experience.',
    ],
  },
  {
    role: 'Front-End Developer & Digital Designer',
    company: 'AYJ Soft',
    period: 'Nov 2021 - Jan 2023',
    points: [
      'Converted Figma mockups into pixel-perfect responsive interfaces.',
      'Integrated REST APIs and improved usability with feedback-driven updates.',
      'Developed reusable React components and maintained brand assets.',
    ],
  },
  {
    role: 'Front-End Developer & Digital Designer',
    company: 'Phosphoruz Technologies',
    period: 'Oct 2017 - Mar 2019',
    points: [
      'Developed interactive frontend components for multiple web applications.',
      'Created digital and promotional visuals for clients.',
      'Ensured design consistency across devices and screen sizes.',
    ],
  },
]

export const about = {
  heading: 'Passionate about creating',
  headingAccent: 'meaningful experiences.',
  body:
    "I'm a Front-End Developer and Creative Designer with over 6 years of experience building responsive web applications and stunning visual designs. I love turning ideas into beautiful, functional, and user-friendly digital experiences.",
}
