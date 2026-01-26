export const heroBadges = ['Tier-III+ data centres', 'Instant OS templates', 'Enterprise AMD EPYC'];

export const dropdownRegions = [
  {
    label: 'VPS',
    items: [
      { label: 'San Jose, US', href: 'https://billing.salmoncloud.co.uk/store/vps-metered-sjc' },
      { label: 'Hong Kong, China', href: 'https://billing.salmoncloud.co.uk/store/vps-metered-hkg' }
    ]
  },
  {
    label: 'Bare Metal',
    items: [
      { label: 'San Jose, US', href: 'https://billing.salmoncloud.co.uk/store/sjc-bare-metal' },
      { label: 'Hong Kong, China', href: 'https://billing.salmoncloud.co.uk/store/hkg-bare-metal' }
    ]
  },
  {
    label: 'IP Transit',
    items: [
      { label: 'San Jose, US', href: 'https://billing.salmoncloud.co.uk/store/ip-transit-sjc' },
      { label: 'Hong Kong, China', href: 'https://billing.salmoncloud.co.uk/store/ip-transit-hkg' }
    ]
  }
];

export const serviceCards = [
  {
    title: 'VPS Cloud',
    tagline: 'Elastic compute that launches in seconds.',
    description:
      'AMD EPYC Milan cores, mirrored PCIe 4.0 NVMe, and premium transit keep APIs, games, and SaaS workloads smooth without babysitting hardware.',
    highlights: [
      { label: 'Deploy time', value: '~45 sec' },
      { label: 'Transfer', value: 'Up to 200TB' }
    ],
    note: 'Select a VPS region from the top navigation to compare plans.'
  },
  {
    title: 'Bare Metal',
    tagline: 'Dedicated hardware without the lead time.',
    description:
      'Latest-gen AMD and Intel platforms with IPMI, remote media, and configurable uplinks for databases, inference, and private clouds.',
    highlights: [
      { label: 'Uplinks', value: 'Up to 25Gbps' },
      { label: 'Access', value: 'Full OOB' }
    ],
    note: 'Use the Bare Metal dropdown in the navbar to view instant configurations.'
  },
  {
    title: 'Colocation',
    tagline: 'Bring your own gear, we handle the facility.',
    description:
      'Ship single servers or full racks into redundant power, rich carrier blend, and 24/7 smart hands with direct cloud on-ramps.',
    highlights: [
      { label: 'Datacenter', value: 'Tier3+' },
      { label: 'Smart hands', value: 'Respond promptly' }
    ],
    cta: { label: 'Contact sales', href: '/#contact', target: '_self' }
  }
];

export const metrics = [
  { label: 'Average deploy time', value: '45 sec', subtitle: 'From order to SSH-ready' },
  { label: 'Carrier blend', value: '5+ Tier-1&2', subtitle: 'Balanced low-latency paths' },
  { label: 'Global throughput', value: '100 Gbps+', subtitle: 'Committed multi-site capacity' },
  { label: 'Server load', value: '< 70%', subtitle: 'Ensuring consistent high performance' }
];

export const mapPins = [
  { id: 'sanjose', label: 'San Jose', top: '31%', left: '17%' },
  { id: 'hongkong', label: 'Hong Kong', top: '41.8%', left: '81%' }
];

export const osOptions = [
  { name: 'FreeBSD', logo: '/Logos/FreeBSD.webp' },
  { name: 'Arch Linux', logo: '/Logos/ArchLinux.png' },
  { name: 'Oracle Linux', logo: '/Logos/OracleLinux.svg.png' },
  { name: 'Debian', logo: '/Logos/Debian.png' },
  { name: 'Rocky Linux', logo: '/Logos/RockyLinux.svg.png' },
  { name: 'AlmaLinux', logo: '/Logos/AlmaLinux.png' },
  { name: 'Ubuntu', logo: '/Logos/Ubuntu.svg.png' },
  { name: 'Fedora', logo: '/Logos/Fedora.svg.png' },
  { name: 'openSUSE', logo: '/Logos/OpenSUSE.png' },
  { name: 'CentOS', logo: '/Logos/CentOS.svg.png' },
  { name: 'Windows', logo: '/Logos/Windows.webp' }
];

export const heroHighlights = [
  { label: 'Deploy any OS', value: '45 sec' },
  { label: 'Regions online', value: '2+' }
];

export const communityLinks = [
  {
    label: '中文社区 · Telegram',
    handle: 't.me/salmoncloud_official',
    href: 'https://t.me/salmoncloud_official',
    logo: '/Logos/Telegram.png',
    alt: 'Telegram logo'
  },
  {
    label: 'English Community · Discord',
    handle: 'discord.gg/4Vja6qKQ',
    href: 'https://discord.gg/4Vja6qKQ',
    logo: '/Logos/Discord.png',
    alt: 'Discord logo'
  }
];
