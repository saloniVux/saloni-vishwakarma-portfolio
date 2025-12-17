import { PortfolioData } from './types';

export const PORTFOLIO_DATA: PortfolioData = {
  name: "Saloni Vishwakarma",
  title: "UX/UI Designer",
  bio: "I craft intuitive digital experiences grounded in user research and refined by a detailed eye. My focus is on making technology feel natural and accessible.",
  email: "salonivishwakarma115@gmail.com",
  location: "Available Worldwide (Remote)",
  socials: {
    github: "https://behance.net", // Placeholder for Behance/Portfolio link
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com"
  },
  journey: {
    title: "The Art Teacher",
    description: "I spent several years as a part-time primary school art teacher, guiding young minds to observe the world closely. Teaching children to mix colors and understand perspective taught me how to break down complex visual concepts into simple, understandable steps — a skill that is now the foundation of my design process. I also created and personally gifted hand-drawn portrait sketches to respected public figures. These moments helped me showcase my artistic skills and build confidence as an artist.",
    learnings: [
      { title: "Observation", desc: "Learning to see not just look. Understanding light, shadow, and form." },
      { title: "Communication", desc: "Explaining abstract ideas in concrete, relatable ways." }
    ]
  },
  skills: [
    { name: "Figma / Wireframing", level: 95, category: 'design' },
    { name: "User Research", level: 90, category: 'design' },
    { name: "Prototyping", level: 88, category: 'design' },
    { name: "Interaction Design", level: 85, category: 'design' },
    { name: "Fine Art (Charcoal/Oil)", level: 98, category: 'art' },
    { name: "Visual Communication", level: 92, category: 'soft' },
  ],
  experience: [
    {
      role: "UX/UI Design Student",
      company: "Seeking Internship",
      period: "Present (3rd Year)",
      description: "Currently a 3rd-year student passionate about creating intuitive digital experiences. Actively seeking an internship opportunity to apply my skills in user research, interface design, and prototyping."
    },
    {
      role: "Assistant Teacher",
      company: "Adarsh English Medium School",
      period: "Nov 2022 - Apr 2023",
      description: "Taught art to primary school students. Learned how to communicate creative ideas simply and effectively to young minds.",
      certificateUrl: "./experience-certificate.jpg",
      awardUrl: "./teacher-award.jpg"
    },
    {
      role: "Portrait Artist",
      company: "Freelance Commissions",
      period: "2019 - 2025",
      description: "Developed a strong foundation in visual composition, detailed observation, and lighting—skills that now inform the visual fidelity of my digital interface designs. I created and personally gifted hand-drawn portrait sketches to respected public figures, including Mahesh Dada and Sujata tai, showcasing my artistic skills and building confidence.",
      giftUrl: "./gifting-moments.jpg"
    }
  ],
  education: [
    {
      degree: "Bachelor of Design",
      institution: "MIT Academy of Engineering",
      period: "2023 - 2027",
      score: "CGPA: 7.48"
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Maharashtra State Board (Commerce)",
      period: "2021"
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Maharashtra State Board",
      period: "2019"
    }
  ],
  projects: [
    {
      id: "1",
      title: "Local Tailor & Size Guide",
      description: "Service Design addressing online clothing size issues by connecting users with local tailors for better fit and accessibility.",
      tags: ["Service Design", "Accessibility", "Research"],
      imageUrl: "https://picsum.photos/seed/tailor/800/600",
      link: "#",
      github: "#"
    },
    {
      id: "2",
      title: "Vending Machine Interface",
      description: "Designing a user-friendly vending machine interface for MITAOE College to improve accessibility and ease of use.",
      tags: ["UX Design", "Interface", "Case Study"],
      imageUrl: "https://picsum.photos/seed/vending/800/600",
      link: "#",
      github: "#"
    },
    {
      id: "3",
      title: "Cognitive Impairment in Seniors",
      description: "A research-driven project focused on designing digital solutions for seniors facing cognitive impairment.",
      tags: ["Healthcare", "Research", "Accessibility"],
      imageUrl: "https://picsum.photos/seed/seniors/800/600",
      link: "#",
      github: "#"
    },
    {
      id: "4",
      title: "Mood & Focus Dashboard",
      description: "Psychology-based data analysis and visualization dashboard for tracking mood and focus patterns.",
      tags: ["Data Viz", "Psychology", "Dashboard"],
      imageUrl: "https://picsum.photos/seed/dashboard/800/600",
      link: "#",
      github: "#"
    },
    {
      id: "5",
      title: "Big Bazaar App Redesign",
      description: "A complete interface redesign for the Big Bazaar mobile application, focusing on improving user flow and visual clarity.",
      tags: ["UI Design", "Redesign", "Mobile"],
      imageUrl: "https://picsum.photos/seed/bigbazaar/800/600",
      link: "#",
      github: "#"
    },
    {
      id: "6",
      title: "Decoding Gen-Z & Money",
      description: "Research-driven exploration into financial literacy gaps in Indian youth and how design can empower healthier financial habits.",
      tags: ["Research", "FinTech", "Gen-Z"],
      color: "bg-purple-800", // Deep purple for high contrast
      link: "#",
      github: "#"
    }
  ],
  sketches: [
    {
      id: "s1",
      title: "Detailed Eye Study",
      category: "sketch",
      imageUrl: "https://images.unsplash.com/photo-1594904578656-74f07a165b63?auto=format&fit=crop&q=80&w=800" // Placeholder for eye sketch
    },
    {
      id: "s2",
      title: "Charcoal Gaze",
      category: "sketch",
      imageUrl: "https://images.unsplash.com/photo-1628151016027-4632db2c9183?auto=format&fit=crop&q=80&w=800" // Placeholder for close up eye
    },
    {
      id: "s3",
      title: "Solitude",
      category: "sketch",
      imageUrl: "https://images.unsplash.com/photo-1544967082-d9d25d867d66?auto=format&fit=crop&q=80&w=800" // Placeholder for girl headphones/back
    },
    {
      id: "s4",
      title: "Blue Ink Portrait",
      category: "ink",
      imageUrl: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80&w=800" // Placeholder for blue pen sketch
    },
    {
      id: "s5",
      title: "Hidden Perspectives",
      category: "sketch",
      imageUrl: "https://images.unsplash.com/photo-1512413914633-b5043f4041ea?auto=format&fit=crop&q=80&w=800" // Placeholder for eye through texture
    },
    {
      id: "s6",
      title: "Divine Bond",
      category: "painting",
      imageUrl: "https://images.unsplash.com/photo-1582234033108-c8de84074229?auto=format&fit=crop&q=80&w=800" // Placeholder for Deity painting
    },
    {
      id: "s7",
      title: "Krishna",
      category: "painting",
      imageUrl: "https://images.unsplash.com/photo-1583098670355-2d4e73dbd636?auto=format&fit=crop&q=80&w=800" // Placeholder for colorful painting
    },
    {
      id: "s8",
      title: "Graphite Portrait",
      category: "sketch",
      imageUrl: "https://images.unsplash.com/photo-1598556889428-1c4b779cb8e9?auto=format&fit=crop&q=80&w=800" // Placeholder for face sketch
    },
    {
      id: "s9",
      title: "Thoughtful",
      category: "sketch",
      imageUrl: "https://images.unsplash.com/photo-1580130712280-9271c6d3df39?auto=format&fit=crop&q=80&w=800" // Placeholder for hand on mouth
    },
    {
      id: "s10",
      title: "Peacock & Grace",
      category: "painting",
      imageUrl: "https://images.unsplash.com/photo-1578301978018-77fa28ef4d6b?auto=format&fit=crop&q=80&w=800" // Placeholder for vibrant painting
    },
    {
      id: "s11",
      title: "Hyper-realism Eye",
      category: "sketch",
      imageUrl: "https://images.unsplash.com/photo-1618331835717-801e976710b2?auto=format&fit=crop&q=80&w=800" // Placeholder for detailed eye
    },
    {
      id: "s12",
      title: "Floral Mind",
      category: "ink",
      imageUrl: "https://images.unsplash.com/photo-1580196924252-85f0c08ec259?auto=format&fit=crop&q=80&w=800" // Placeholder for flower face
    }
  ]
};