export const navItems = [
  { id: 'home', label: 'Home', num: '01' },
  { id: 'about', label: 'About', num: '02' },
  { id: 'skills', label: 'Skills', num: '03' },
  { id: 'projects', label: 'Projects', num: '04' },
  { id: 'contact', label: 'Contact', num: '05' },
]

export const skills = [
  { name: 'HTML', tag: 'Structure', icon: 'html', text: 'Semantic, accessible markup as the foundation of every page I build.' },
  { name: 'JavaScript', tag: 'Behavior', icon: 'js', text: 'Interactivity and logic that make a page respond to the people using it.' },
  { name: 'React', tag: 'Interface', icon: 'react', text: 'Reusable components and state-driven interfaces for larger front ends.' },
  { name: 'Node.js', tag: 'Server', icon: 'node', text: 'Server-side JavaScript for APIs and the back end behind the interface.' },
]

export const projects = [
  {
    num: '01',
    kind: 'Final-year project',
    title: 'Phishing URL Detection',
    text: 'A Random Forest classifier that learns from URL features to tell phishing links from legitimate ones.',
    tags: ['Machine learning', 'Random Forest'],
    art: 'tree',
    link: 'https://github.com/',
  },
  {
    num: '02',
    kind: 'Web application',
    title: 'Data Vending Website',
    text: 'A data vending site with user verification and authentication, including Face ID login on the login page.',
    tags: ['Authentication', 'Verification', 'Face ID'],
    art: 'face',
    link: 'https://github.com/',
  },
  {
    num: '03',
    kind: 'Personal site',
    title: 'This Portfolio',
    text: "The site you're on: a personal portfolio to show my skills and projects, with animation throughout.",
    tags: ['React', 'Web design', 'Animation'],
    art: 'site',
    link: 'https://github.com/',
  },
]

export const contacts = [
  { icon: 'mail', label: 'Email', value: 'murtalabagudu627@gmail.com', href: 'Murtalabagudu627@gmail.com'},
  { icon: 'github', label: 'GitHub', value: 'https://github.com/muneer700', href: 'https://github.com/muneer700' },
  { icon: 'linkedin', label: 'LinkedIn', value: '[YOUR LINKEDIN]', href: 'https://www.linkedin.com/' },
]
