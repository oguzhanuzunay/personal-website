const navLinks = [
  {
    name: 'Work',
    link: '#work',
  },
  {
    name: 'Experience',
    link: '#experience',
  },
  {
    name: 'Skills',
    link: '#skills',
  },
  {
    name: 'Testimonials',
    link: '#testimonials',
  },
];

const getWords = (t) => [
  { text: t('words.ideas'), imgPath: '/images/ideas.svg' },
  { text: t('words.concepts'), imgPath: '/images/concepts.svg' },
  { text: t('words.designs'), imgPath: '/images/designs.svg' },
  { text: t('words.code'), imgPath: '/images/code.svg' },
  { text: t('words.ideas'), imgPath: '/images/ideas.svg' },
  { text: t('words.concepts'), imgPath: '/images/concepts.svg' },
  { text: t('words.designs'), imgPath: '/images/designs.svg' },
  { text: t('words.code'), imgPath: '/images/code.svg' },
];

const counterItems = [
  { value: 5, suffix: '+', label: 'Years of Experience' },
  { value: 20, suffix: '+', label: 'Satisfied Clients' },
  { value: 35, suffix: '+', label: 'Completed Projects' },
  { value: 95, suffix: '%', label: 'Client Retention Rate' },
];

const logoIconsList = [
  {
    imgPath: '/images/logos/company-logo-1.png',
  },
  {
    imgPath: '/images/logos/company-logo-2.png',
  },
  {
    imgPath: '/images/logos/company-logo-3.png',
  },
  {
    imgPath: '/images/logos/company-logo-4.png',
  },
  {
    imgPath: '/images/logos/company-logo-5.png',
  },
  {
    imgPath: '/images/logos/company-logo-6.png',
  },
  {
    imgPath: '/images/logos/company-logo-7.png',
  },
  {
    imgPath: '/images/logos/company-logo-8.png',
  },
  {
    imgPath: '/images/logos/company-logo-9.png',
  },
  {
    imgPath: '/images/logos/company-logo-10.png',
  },
  {
    imgPath: '/images/logos/company-logo-11.png',
  },
];

const abilities = [
  {
    imgPath: '/images/seo.png',
    title: 'Quality Focus',
    desc: 'Delivering high-quality results while maintaining attention to every detail.',
  },
  {
    imgPath: '/images/chat.png',
    title: 'Reliable Communication',
    desc: 'Keeping you updated at every step to ensure transparency and clarity.',
  },
  {
    imgPath: '/images/time.png',
    title: 'On-Time Delivery',
    desc: 'Making sure projects are completed on schedule, with quality & attention to detail.',
  },
];

const techStackImgs = [
  {
    name: 'React Developer',
    imgPath: '/images/logos/react.png',
  },
  {
    name: 'Python Developer',
    imgPath: '/images/logos/python.svg',
  },
  {
    name: 'Backend Developer',
    imgPath: '/images/logos/node.png',
  },
  {
    name: 'Interactive Developer',
    imgPath: '/images/logos/three.png',
  },
  {
    name: 'Project Manager',
    imgPath: '/images/logos/git.svg',
  },
];

const techStackIcons = [
  {
    name: 'Nextjs Developer',
    modelPath: '/models/next-transformed.glb',
    scale: 1.5,
    rotation: [1.2, -Math.PI / 10, 0],
  },
  {
    name: 'React Developer',
    modelPath: '/models/react_logo-transformed.glb',
    scale: 1,
    rotation: [0, 0.3, 0],
  },
  {
    name: 'Backend Developer',
    modelPath: '/models/node-transformed.glb',
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: 'Interactive Developer',
    modelPath: '/models/three.js-transformed.glb',
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: 'Ai Agent Developer',
    modelPath: '/models/n8n-transformed.glb',
    scale: 1,
    rotation: [0, -Math.PI / 3, 5],
  },
];

const expCards = [
  {
    imgPath: '/images/exp1.png',
    logoPath: '/images/logo1.png',
    company: 'Dizayn Group',
  },
  {
    imgPath: '/images/exp2.png',
    logoPath: '/images/logo2.png',
    company: 'Red Queen',
  },
  {
    imgPath: '/images/exp3.png',
    logoPath: '/images/logo3.png',
    company: 'Insider',
  },
  {
    imgPath: '/images/exp4.png',
    logoPath: '/images/logo4.png',
    company: 'Arcelik',
  },
];

const expLogos = [
  {
    name: 'logo1',
    imgPath: '/images/logo1.png',
  },
  {
    name: 'logo2',
    imgPath: '/images/logo2.png',
  },
  {
    name: 'logo3',
    imgPath: '/images/logo3.png',
  },
];

const testimonials = [
  {
    name: 'Ahmet Yılmaz',
    mentions: '@ahmetyilmaz',
    reviewKey: 'review1',
    imgPath: '/images/client1.png',
  },
  {
    name: 'Wade Warren',
    mentions: '@wadewarren',
    reviewKey: 'review2',
    imgPath: '/images/client3.png',
  },
  {
    name: 'Burak Özdemir',
    mentions: '@burakozdemir',
    reviewKey: 'review3',
    imgPath: '/images/client2.png',
  },
  {
    name: 'Mehmet Demir',
    mentions: '@mehmetdemir',
    reviewKey: 'review4',
    imgPath: '/images/client5.png',
  },
  {
    name: 'Floyd Miles',
    mentions: '@floydmiles',
    reviewKey: 'review5',
    imgPath: '/images/client4.png',
  },
  {
    name: 'Murat Aydın',
    mentions: '@murataydin',
    reviewKey: 'review6',
    imgPath: '/images/client6.png',
  },
];

const socialImgs = [
  {
    name: 'insta',
    imgPath: '/images/insta.png',
  },
  {
    name: 'fb',
    imgPath: '/images/fb.png',
  },
  {
    name: 'x',
    imgPath: '/images/x.png',
  },
  {
    name: 'linkedin',
    imgPath: '/images/linkedin.png',
  },
];

export {
  abilities,
  counterItems,
  expCards,
  expLogos,
  getWords,
  logoIconsList,
  navLinks,
  socialImgs,
  techStackIcons,
  techStackImgs,
  testimonials,
};
