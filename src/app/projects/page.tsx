import Hero from '@/components/Hero';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with Next.js and Supabase',
    image: '/images/project-1.jpg',
    tags: ['Next.js', 'Supabase', 'Stripe'],
    link: '#',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Collaborative task management with real-time updates',
    image: '/images/project-2.jpg',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    link: '#',
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'Creative portfolio with animations and modern design',
    image: '/images/project-3.jpg',
    tags: ['Next.js', 'Framer Motion', 'Tailwind'],
    link: '#',
  },
  {
    id: 4,
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for social media metrics',
    image: '/images/project-4.jpg',
    tags: ['TypeScript', 'Prisma', 'Chart.js'],
    link: '#',
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <Hero
        title="My Projects"
        subtitle="Showcasing my latest work and creative endeavors"
        backgroundImage="/images/hero-projects.jpg"
        ctaText="Start a Project"
        ctaLink="/contact"
      />
      
      {/* Projects Grid */}
      <section className="bg-neo-white py-20 px-4 border-t-4 border-neo-black">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project.id}
                className="neo-border bg-neo-purple shadow-neo hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-neo-sm transition-all duration-200 overflow-hidden"
              >
                <div className="aspect-video bg-neo-yellow neo-border-b-4 border-neo-black flex items-center justify-center">
                  <span className="text-6xl">🚀</span>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-neo-white mb-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-neo-white font-medium mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-neo-blue px-3 py-1 text-sm font-bold text-neo-white border-2 border-neo-black"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <a
                    href={project.link}
                    className="neo-button bg-neo-yellow inline-block"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-neo-green py-20 px-4 border-t-4 border-neo-black">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-black uppercase text-neo-black mb-6">
            Want to work together?
          </h2>
          <p className="text-xl font-bold text-neo-black mb-8">
            Let's create something amazing!
          </p>
          <a
            href="/contact"
            className="neo-button bg-neo-pink text-neo-white text-xl inline-block"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </div>
  );
}
