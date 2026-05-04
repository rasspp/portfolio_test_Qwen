import Hero from '@/components/Hero';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero
        title="Creative Developer"
        subtitle="Building bold digital experiences with modern technologies"
        backgroundImage="/bg.png"
        ctaText="View My Work"
        ctaLink="/projects"
      />
      
      {/* Features Section */}
      <section className="bg-neo-white py-20 px-4 border-t-4 border-neo-black">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-4xl font-black uppercase text-center text-neo-black">
            What I Do
          </h2>
          
          <div className="grid gap-8 md:grid-cols-3">
            <div className="neo-border bg-neo-blue p-8 shadow-neo hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-neo-sm transition-all duration-200">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-2xl font-bold text-neo-white mb-4">UI/UX Design</h3>
              <p className="text-neo-white font-medium">Creating intuitive and visually stunning interfaces</p>
            </div>
            
            <div className="neo-border bg-neo-pink p-8 shadow-neo hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-neo-sm transition-all duration-200">
              <div className="text-5xl mb-4">💻</div>
              <h3 className="text-2xl font-bold text-neo-white mb-4">Web Development</h3>
              <p className="text-neo-white font-medium">Building responsive and performant web applications</p>
            </div>
            
            <div className="neo-border bg-neo-green p-8 shadow-neo hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-neo-sm transition-all duration-200">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-neo-black mb-4">Full Stack</h3>
              <p className="text-neo-black font-medium">End-to-end solutions from database to deployment</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
