export const portfolioData = {
  person: {
    name: 'Irsyad',
    role: 'Front-End Developer & UI Engineer',
    tagline: 'Membangun pengalaman web premium yang cepat, halus, dan berkesan.',
    intro:
      'Saya fokus pada React ecosystem, web performance, dan detail interaksi agar produk terasa modern sekaligus mudah digunakan.',
    availability: 'Open for freelance & remote collaboration',
    email: 'hello@example.com',
    location: 'Indonesia',
    cta: {
      primary: { label: 'Lihat Proyek', href: '#projects' },
      secondary: { label: 'Hubungi Saya', href: '#contact' },
    },
  },
  navItems: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ],
  skills: [
    { title: 'React Architecture', level: 'Advanced', description: 'Komponen reusable, state management, dan DX yang scalable.' },
    { title: 'UI Motion', level: 'Advanced', description: 'Micro-interactions yang bermakna dengan performa ringan.' },
    { title: 'Performance', level: 'Strong', description: 'Optimasi render, Core Web Vitals, dan lazy loading strategy.' },
    { title: 'Accessibility', level: 'Strong', description: 'Semantic HTML, keyboard flow, dan kontras yang tepat.' },
    { title: 'Design Systems', level: 'Strong', description: 'Membangun token, style guide, dan komponen konsisten.' },
    { title: 'Collaboration', level: 'Strong', description: 'Kolaborasi lintas tim dengan dokumentasi yang jelas.' },
  ],
  projects: [
    {
      title: 'Interactive Commerce Dashboard',
      description: 'Dashboard e-commerce real-time dengan visualisasi data, filter cepat, dan UX yang fokus pada aksi.',
      tags: ['React', 'Vite', 'Charts', 'Accessibility'],
      demoUrl: '#',
      sourceUrl: '#',
    },
    {
      title: 'Creator Portfolio Studio',
      description: 'Platform personal branding dengan editor konten modular dan tema visual yang dinamis.',
      tags: ['React', 'Design System', 'Animation'],
      demoUrl: '#',
      sourceUrl: '#',
    },
    {
      title: 'Smart Booking Experience',
      description: 'Alur booking cerdas dengan validasi real-time, loading states halus, dan onboarding intuitif.',
      tags: ['React', 'UX Writing', 'Form UX'],
      demoUrl: '#',
      sourceUrl: '#',
    },
  ],
  experiences: [
    {
      period: '2024 — Sekarang',
      role: 'Freelance Front-End Engineer',
      company: 'Independent',
      summary: 'Membantu startup dan UMKM membangun website modern dengan fokus conversion dan performa.',
    },
    {
      period: '2022 — 2024',
      role: 'UI Developer',
      company: 'Digital Product Team',
      summary: 'Mengerjakan komponen desain sistem dan fitur interaktif untuk produk SaaS.',
    },
    {
      period: '2020 — 2022',
      role: 'Web Developer',
      company: 'Agency Partner',
      summary: 'Mengembangkan landing page dan website company profile yang responsif lintas perangkat.',
    },
  ],
}
