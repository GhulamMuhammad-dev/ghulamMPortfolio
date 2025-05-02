
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion'; 
import { Code, Globe, Paintbrush } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black/50 to-black/30">
      <div className="section-container border-t border-portfolio-mint/20 pt-10 md:pt-20">
        <div className="grid md:grid-cols-3 gap-8 items-center bg-portfolio-dark rounded-lg p-20 border-4 border-portfolio-mint ">
          <div className="col-span-1">
            <div className="rounded-xl border-2 border-portfolio-mint p-1 w-full max-w-md mx-auto shadow-[0_0_25px_rgba(126,255,192,0.15)]">
              <div className="bg-gray-800 rounded-lg overflow-hidden">
                <img 
                  src="/images/profileimg.png" 
                  alt="Profile" 
                  className="w-full aspect-square object-cover object-center hover:scale-105 transition-all duration-500"
                />
              </div>
            </div>
          </div>
          
          <div className="col-span-2 space-y-6">
            <div className="inline-block bg-portfolio-mint/10 rounded-full px-4 py-2 text-portfolio-mint border border-portfolio-mint/20">
              <p className="text-sm italic">
                "I prefer to turn vague concepts into clear experiences – our work needs to look good from a user's perspective, but also function well"
              </p>
            </div>
            
            <div className="space-y-5">
              <h2 className="text-2xl md:text-3xl font-bold leading-relaxed">
                I'm a multidisciplinary creative with a passion for turning ideas into interactive, intuitive digital products. With a background in both frontend development and UX/UI design, I bridge the gap between design vision and functional reality
              </h2>
              
              <div className="space-y-4">
                <h3 className="text-lg text-portfolio-mint/80">Areas of expertise</h3>
                <div className="flex flex-wrap gap-3">
                  <Button size="sm" className="bg-portfolio-mint text-portfolio-dark hover:bg-portfolio-mint/90 group gap-2">
                    <Code size={16} className="group-hover:rotate-12 transition-transform" />
                    Full-stack Development
                  </Button>
                  <Button size="sm" className="bg-gray-700 text-white hover:bg-gray-600 group gap-2">
                    <Paintbrush size={16} className="group-hover:rotate-12 transition-transform" />
                    UX/UI Design
                  </Button>
                  <Button size="sm" className="bg-gray-700 text-white hover:bg-gray-600 group gap-2">
                    <Globe size={16} className="group-hover:rotate-12 transition-transform" />
                    Design-to-Code
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
