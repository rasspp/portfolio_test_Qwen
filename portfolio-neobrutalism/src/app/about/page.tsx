import Hero from '@/components/Hero';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Hero
        title="About Me"
        subtitle="Passionate developer crafting digital experiences"
        backgroundImage="/images/hero-about.jpg"
        ctaText="Get In Touch"
        ctaLink="/contact"
      />
      
      {/* About Content */}
      <section className="bg-neo-white py-20 px-4 border-t-4 border-neo-black">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="neo-border bg-neo-purple p-8 shadow-neo">
              <div className="aspect-square bg-neo-yellow neo-border flex items-center justify-center">
                <span className="text-9xl">👨‍💻</span>
              </div>
            </div>
            
            <div>
              <h2 className="text-4xl font-black uppercase text-neo-black mb-6">
                My Story
              </h2>
              <p className="text-lg font-medium text-neo-black mb-4">
                I'm a passionate developer with expertise in modern web technologies. 
                I love creating bold, innovative solutions that make an impact.
              </p>
              <p className="text-lg font-medium text-neo-black mb-6">
                With experience in Next.js, React, Node.js, and various databases, 
                I bring ideas to life through clean code and creative design.
              </p>
              
              <div className="space-y-4">
                <div className="neo-border bg-neo-blue p-4 shadow-neo">
                  <h3 className="text-xl font-bold text-neo-white">Tech Stack</h3>
                  <p className="text-neo-white font-medium">Next.js, React, TypeScript, Node.js, PostgreSQL, Supabase</p>
                </div>
                
                <div className="neo-border bg-neo-pink p-4 shadow-neo">
                  <h3 className="text-xl font-bold text-neo-white">Location</h3>
                  <p className="text-neo-white font-medium">Available for remote work worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section className="bg-neo-yellow py-20 px-4 border-t-4 border-neo-black">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-4xl font-black uppercase text-center text-neo-black">
            Skills & Expertise
          </h2>
          
          <div className="grid gap-6 md:grid-cols-4">
            {['Frontend', 'Backend', 'Database', 'DevOps'].map((skill, index) => (
              <div 
                key={skill}
                className={`neo-border p-6 shadow-neo hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-neo-sm transition-all duration-200 ${
                  index % 4 === 0 ? 'bg-neo-green' :
                  index % 4 === 1 ? 'bg-neo-blue' :
                  index % 4 === 2 ? 'bg-neo-pink' : 'bg-neo-orange'
                }`}
              >
                <h3 className="text-2xl font-bold text-neo-black mb-2">{skill}</h3>
                <ul className="space-y-2 text-neo-black font-medium">
                  {index === 0 && <li>• React / Next.js</li>}
                  {index === 0 && <li>• TypeScript</li>}
                  {index === 0 && <li>• Tailwind CSS</li>}
                  {index === 1 && <li>• Node.js</li>}
                  {index === 1 && <li>• Express</li>}
                  {index === 1 && <li>• REST APIs</li>}
                  {index === 2 && <li>• PostgreSQL</li>}
                  {index === 2 && <li>• Prisma</li>}
                  {index === 2 && <li>• Supabase</li>}
                  {index === 3 && <li>• Docker</li>}
                  {index === 3 && <li>• CI/CD</li>}
                  {index === 3 && <li>• AWS</li>}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
