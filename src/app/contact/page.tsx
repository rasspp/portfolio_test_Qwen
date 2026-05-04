'use client';

import Hero from '@/components/Hero';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would integrate with Supabase to save the contact form
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen">
      <Hero
        title="Get In Touch"
        subtitle="Let's discuss your next project"
        backgroundImage="/images/hero-contact.jpg"
        ctaText="Send Message"
        ctaLink="#contact-form"
      />
      
      {/* Contact Form Section */}
      <section id="contact-form" className="bg-neo-white py-20 px-4 border-t-4 border-neo-black">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-12 md:grid-cols-2">
            {/* Contact Info */}
            <div>
              <h2 className="text-4xl font-black uppercase text-neo-black mb-6">
                Contact Info
              </h2>
              
              <div className="space-y-6">
                <div className="neo-border bg-neo-blue p-6 shadow-neo">
                  <h3 className="text-xl font-bold text-neo-white mb-2">📧 Email</h3>
                  <p className="text-neo-white font-medium">hello@example.com</p>
                </div>
                
                <div className="neo-border bg-neo-pink p-6 shadow-neo">
                  <h3 className="text-xl font-bold text-neo-white mb-2">📱 Phone</h3>
                  <p className="text-neo-white font-medium">+1 (555) 123-4567</p>
                </div>
                
                <div className="neo-border bg-neo-green p-6 shadow-neo">
                  <h3 className="text-xl font-bold text-neo-black mb-2">📍 Location</h3>
                  <p className="text-neo-black font-medium">Available Remote Worldwide</p>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              onSubmit={handleSubmit}
              className="neo-border bg-neo-yellow p-8 shadow-neo"
            >
              <h2 className="text-3xl font-black uppercase text-neo-black mb-6">
                Send Message
              </h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-lg font-bold text-neo-black mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full border-4 border-neo-black px-4 py-3 font-medium focus:outline-none focus:shadow-neo bg-neo-white"
                    placeholder="Your Name"
                  />
                </div>
                
                <div>
                  <label className="block text-lg font-bold text-neo-black mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full border-4 border-neo-black px-4 py-3 font-medium focus:outline-none focus:shadow-neo bg-neo-white"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-lg font-bold text-neo-black mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full border-4 border-neo-black px-4 py-3 font-medium focus:outline-none focus:shadow-neo bg-neo-white resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="neo-button bg-neo-purple text-neo-white w-full text-lg"
                >
                  Send Message →
                </button>
              </div>
            </motion.form>
          </div>
        </div>
      </section>
      
      {/* Social Links */}
      <section className="bg-neo-orange py-20 px-4 border-t-4 border-neo-black">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-black uppercase text-neo-black mb-8">
            Follow Me
          </h2>
          
          <div className="flex justify-center gap-6 flex-wrap">
            <a
              href="#"
              className="neo-button bg-neo-blue text-neo-white text-xl"
            >
              GitHub
            </a>
            <a
              href="#"
              className="neo-button bg-neo-pink text-neo-white text-xl"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="neo-button bg-neo-green text-neo-black text-xl"
            >
              Twitter
            </a>
            <a
              href="#"
              className="neo-button bg-neo-purple text-neo-white text-xl"
            >
              Dribbble
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
