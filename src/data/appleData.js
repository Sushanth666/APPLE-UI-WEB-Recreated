// Apple iPhone Catalog Data (Apple-04 Recreation)

export const CHAPTER_NAV_ITEMS = [
  { id: '14pro', name: 'iPhone 14 Pro', tag: 'New', icon: 'iphone-14-pro' },
  { id: '14', name: 'iPhone 14', tag: 'New', icon: 'iphone-14' },
  { id: '13', name: 'iPhone 13', tag: '', icon: 'iphone-13' },
  { id: 'se', name: 'iPhone SE', tag: '', icon: 'iphone-se' },
  { id: '12', name: 'iPhone 12', tag: '', icon: 'iphone-12' },
  { id: 'compare', name: 'Compare', tag: '', icon: 'compare' },
  { id: 'airpods', name: 'AirPods', tag: '', icon: 'airpods' },
  { id: 'airtag', name: 'AirTag', tag: '', icon: 'airtag' },
  { id: 'accessories', name: 'Accessories', tag: '', icon: 'accessories' },
  { id: 'card', name: 'Apple Card', tag: '', icon: 'card' },
  { id: 'ios16', name: 'iOS 16', tag: '', icon: 'ios16' },
  { id: 'shop', name: 'Shop iPhone', tag: '', icon: 'shop' },
];

export const IPHONE_MODELS = [
  {
    id: '14pro',
    name: 'iPhone 14 Pro',
    tagline: 'The ultimate iPhone.',
    startingPrice: '$999',
    monthlyPrice: '$41.62/mo. for 24 mo.',
    badge: 'New',
    colors: [
      { name: 'Deep Purple', hex: '#594f63', img: '/images/compare/iphone-14-pro-deeppurple.png' },
      { name: 'Gold', hex: '#fae7cf', img: '/images/compare/iphone-14-pro-gold.png' },
      { name: 'Silver', hex: '#f1f2ed', img: '/images/compare/iphone-14-pro-silver.png' },
      { name: 'Space Black', hex: '#403e3d', img: '/images/compare/iphone-14-pro-spaceblack.png' },
    ],
    display: {
      size: '6.7″ or 6.1″',
      type: 'Super Retina XDR display',
      extra: 'ProMotion technology & Always-On display',
    },
    island: {
      hasIsland: true,
      label: 'Dynamic Island',
      desc: 'A magical new way to interact with iPhone',
    },
    safety: 'Emergency SOS via satellite & Crash Detection',
    camera: {
      title: 'Pro camera system',
      specs: '48MP Main | Ultra Wide | Telephoto',
      features: 'Photonic Engine, Action mode, 4K Cinematic mode',
    },
    battery: 'Up to 29 hours video playback',
    chip: {
      name: 'A16 Bionic chip',
      desc: '6-core CPU, 5-core GPU, 16-core Neural Engine',
    },
    auth: 'Face ID',
    connectivity: 'Superfast 5G cellular',
  },
  {
    id: '14',
    name: 'iPhone 14',
    tagline: 'A total powerhouse.',
    startingPrice: '$799',
    monthlyPrice: '$33.29/mo. for 24 mo.',
    badge: 'New',
    colors: [
      { name: 'Yellow', hex: '#fbe277', img: '/images/compare/iphone-14-yellow.png' },
      { name: 'Blue', hex: '#a0b4c7', img: '/images/compare/iphone-14-blue.png' },
      { name: 'Purple', hex: '#e3dbe7', img: '/images/compare/iphone-14-purple.png' },
      { name: 'Midnight', hex: '#222930', img: '/images/compare/iphone-14-midnight.png' },
      { name: 'Starlight', hex: '#faf7f2', img: '/images/compare/iphone-14-starlight.png' },
      { name: '(PRODUCT)RED', hex: '#fc3c44', img: '/images/compare/iphone-14-product-red.png' },
    ],
    display: {
      size: '6.7″ or 6.1″',
      type: 'Super Retina XDR display',
      extra: 'Exceptional brightness and OLED contrast',
    },
    island: {
      hasIsland: false,
      label: 'Classic Notch',
      desc: 'TrueDepth camera system',
    },
    safety: 'Emergency SOS via satellite & Crash Detection',
    camera: {
      title: 'Advanced dual-camera system',
      specs: '12MP Main | Ultra Wide',
      features: 'Photonic Engine, Action mode, 4K Cinematic mode',
    },
    battery: 'Up to 26 hours video playback',
    chip: {
      name: 'A15 Bionic chip',
      desc: 'With 5-core GPU for ultra-smooth gaming',
    },
    auth: 'Face ID',
    connectivity: 'Superfast 5G cellular',
  },
  {
    id: '13',
    name: 'iPhone 13',
    tagline: 'As amazing as ever.',
    startingPrice: '$599',
    monthlyPrice: '$24.95/mo. for 24 mo.',
    badge: '',
    colors: [
      { name: 'Green', hex: '#3b5240', img: '/images/compare/iphone-13-green.png' },
      { name: 'Pink', hex: '#fae0dc', img: '/images/compare/iphone-13-pink.png' },
      { name: 'Blue', hex: '#215e7d', img: '/images/compare/iphone-13-blue.png' },
      { name: 'Midnight', hex: '#232a31', img: '/images/compare/iphone-13-midnight.png' },
      { name: 'Starlight', hex: '#fbf7f4', img: '/images/compare/iphone-13-starlight.png' },
      { name: '(PRODUCT)RED', hex: '#bf0013', img: '/images/compare/iphone-13-product-red.png' },
    ],
    display: {
      size: '6.1″ or 5.4″',
      type: 'Super Retina XDR display',
      extra: 'Vibrant OLED display with Ceramic Shield',
    },
    island: {
      hasIsland: false,
      label: 'TrueDepth Notch',
      desc: 'Slim notch design',
    },
    safety: 'Emergency SOS',
    camera: {
      title: 'Dual-camera system',
      specs: '12MP Main | Ultra Wide',
      features: 'Sensor-shift OIS, Photographic Styles',
    },
    battery: 'Up to 19 hours video playback',
    chip: {
      name: 'A15 Bionic chip',
      desc: 'With 4-core GPU and 16-core Neural Engine',
    },
    auth: 'Face ID',
    connectivity: 'Superfast 5G cellular',
  },
  {
    id: 'se',
    name: 'iPhone SE',
    tagline: 'Serious power. Serious value.',
    startingPrice: '$429',
    monthlyPrice: '$17.87/mo. for 24 mo.',
    badge: '',
    colors: [
      { name: 'Midnight', hex: '#191f26', img: '/images/compare/iphone-se-midnight.png' },
      { name: 'Starlight', hex: '#f4f0eb', img: '/images/compare/iphone-se-starlight.png' },
      { name: '(PRODUCT)RED', hex: '#ba0c2f', img: '/images/compare/iphone-se-product-red.png' },
    ],
    display: {
      size: '4.7″',
      type: 'Retina HD display',
      extra: 'Widescreen LCD Multi-Touch display with IPS',
    },
    island: {
      hasIsland: false,
      label: 'Home Button Design',
      desc: 'Classic compact bezel profile',
    },
    safety: 'Emergency SOS',
    camera: {
      title: 'Advanced camera system',
      specs: '12MP Main',
      features: 'Smart HDR 4, Portrait mode with Depth Control',
    },
    battery: 'Up to 15 hours video playback',
    chip: {
      name: 'A15 Bionic chip',
      desc: 'Same lightning-fast chip as iPhone 13',
    },
    auth: 'Touch ID',
    connectivity: 'Fast 5G cellular',
  },
];

export const BENTO_PERKS = [
  {
    id: 'trade-in',
    title: 'Save up to $800 on iPhone 14 or iPhone 14 Pro with carrier deals.',
    subtitle: 'Or get $200–$650 in credit when you trade in your current iPhone directly with Apple.',
    badge: 'Apple Trade In',
    linkText: 'Find your trade-in value',
    action: 'tradeIn',
  },
  {
    id: 'apple-card',
    title: 'Pay 0% APR over 24 months with Apple Card.',
    subtitle: 'Choose Apple Card Monthly Installments at checkout and get 3% Daily Cash back up front.',
    badge: 'Apple Card',
    linkText: 'Learn more about financing',
    action: 'financing',
  },
  {
    id: 'delivery',
    title: 'Free delivery, or pickup in two hours.',
    subtitle: 'Get free next-day delivery on any in-stock iPhone, or pick it up at your local Apple Store in as little as 2 hours.',
    badge: 'Delivery & Pickup',
    linkText: 'Check availability',
    action: 'delivery',
  },
  {
    id: 'specialist',
    title: 'Shop one-on-one with a Specialist online.',
    subtitle: 'Connect with an Apple Specialist over chat or one-way video to find the ideal iPhone and plan for you.',
    badge: 'Personalized Help',
    linkText: 'Ask a Specialist',
    action: 'specialist',
  },
];

export const MAGSAFE_ITEMS = [
  {
    id: 'silicone',
    name: 'iPhone 14 Silicone Case with MagSafe',
    category: 'Case',
    price: '$49.00',
    colors: ['#efdb5e', '#7c8fa3', '#493751', '#2c333a', '#eb685b'],
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MPTX3?wid=532&hei=582&fmt=png-alpha',
  },
  {
    id: 'leather',
    name: 'iPhone 14 Pro Leather Case with MagSafe',
    category: 'Case',
    price: '$59.00',
    colors: ['#49392e', '#23303d', '#483c4f', '#252527'],
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MPPP3?wid=532&hei=582&fmt=png-alpha',
  },
  {
    id: 'wallet',
    name: 'iPhone Leather Wallet with MagSafe',
    category: 'Wallet',
    price: '$59.00',
    colors: ['#806a59', '#3e4b3c', '#2c2b2e', '#e77b4f'],
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MM0Q3?wid=532&hei=582&fmt=png-alpha',
  },
  {
    id: 'battery',
    name: 'MagSafe Battery Pack',
    category: 'Power',
    price: '$99.00',
    colors: ['#f2f2f4'],
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MJWY3?wid=532&hei=582&fmt=png-alpha',
  },
];

export const AUDIO_ITEMS = [
  {
    name: 'AirPods Pro (2nd generation)',
    price: '$249',
    tagline: 'Rebuilt from the sound up.',
    highlights: 'Active Noise Cancellation, Adaptive Transparency, Personalized Spatial Audio',
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQD83?wid=532&hei=582&fmt=png-alpha',
  },
  {
    name: 'AirPods (3rd generation)',
    price: '$169',
    tagline: 'It’s magic, remastered.',
    highlights: 'Spatial Audio with dynamic head tracking, Sweat & water resistant',
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MME73?wid=532&hei=582&fmt=png-alpha',
  },
  {
    name: 'AirPods Max',
    price: '$549',
    tagline: 'High-fidelity audio. Active Noise Cancellation.',
    highlights: 'Apple-designed dynamic driver, Computational audio, Digital Crown',
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-select-spacegray-202011?wid=532&hei=582&fmt=png-alpha',
  },
];

export const APPLE_SERVICES = [
  {
    id: 'tv',
    title: 'Apple TV+',
    subtitle: 'Stream award-winning Apple Originals.',
    shows: ['Ted Lasso', 'Severance', 'The Morning Show', 'Shrinking'],
    bg: '#111113',
    accent: '#2997ff',
  },
  {
    id: 'music',
    title: 'Apple Music',
    subtitle: 'Over 100 million songs and Spatial Audio.',
    shows: ['Spatial Audio', 'Lossless Audio', 'Live Radio'],
    bg: '#fa2d48',
    accent: '#ffffff',
  },
  {
    id: 'fitness',
    title: 'Apple Fitness+',
    subtitle: 'From HIIT to Meditation, powered by Apple Watch.',
    shows: ['HIIT', 'Yoga', 'Strength', 'Audio Guided Walks'],
    bg: '#c8ff3d',
    accent: '#000000',
  },
  {
    id: 'arcade',
    title: 'Apple Arcade',
    subtitle: '200+ incredibly fun games. Zero ads.',
    shows: ['Sneaky Sasquatch', 'NBA 2K23', 'Hello Kitty Island'],
    bg: '#f7405f',
    accent: '#ffffff',
  },
];

export const FOOTER_DIRECTORY = [
  {
    title: 'Shop and Learn',
    links: ['Store', 'Mac', 'iPad', 'iPhone', 'Watch', 'AirPods', 'TV & Home', 'AirTag', 'Accessories', 'Gift Cards'],
  },
  {
    title: 'Apple Wallet & Account',
    links: ['Wallet', 'Apple Card', 'Apple Pay', 'Apple Cash', 'Manage Your Apple ID', 'Apple Store Account', 'iCloud.com'],
  },
  {
    title: 'Entertainment',
    links: ['Apple One', 'Apple TV+', 'Apple Music', 'Apple Arcade', 'Apple Fitness+', 'Apple News+', 'Apple Podcasts', 'Apple Books', 'App Store'],
  },
  {
    title: 'Apple Store',
    links: ['Find a Store', 'Genius Bar', 'Today at Apple', 'Apple Camp', 'Apple Store App', 'Certified Refurbished', 'Apple Trade In', 'Financing', 'Order Status', 'Shopping Help'],
  },
  {
    title: 'About Apple',
    links: ['Newsroom', 'Apple Leadership', 'Career Opportunities', 'Investors', 'Ethics & Compliance', 'Events', 'Contact Apple', 'Environment', 'Privacy'],
  },
];
