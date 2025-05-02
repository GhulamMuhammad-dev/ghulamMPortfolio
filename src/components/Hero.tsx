
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Gradient background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-portfolio-dark via-[#102030] to-black/90 animate-gradient z-0"></div>
      
      {/* Glass orbs/shapes for visual interest */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-portfolio-mint/5 blur-[80px] animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-portfolio-mint/10 blur-[100px] animate-pulse" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/4 left-1/3 w-64 h-64 rounded-full bg-white/5 blur-[60px]" style={{animationDelay: '1s'}}></div>
      
      <div className="section-container relative z-10">
        <motion.div 
          className="flex flex-col gap-8 md:w-4/5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Building <span className="text-portfolio-mint">Digital Experiences</span> That Work — and Wow.
          </h1>
          
          <p className="text-lg text-gray-300 max-w-2xl">
            I'm a Developer and UX/UI Designer who crafts seamless, user-first web solutions with clean code and intentional design. Let's create something extraordinary.
          </p>
          
          {/* Glassmorphic card */}
          <motion.div 
            className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl p-6 shadow-xl max-w-xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="flex flex-wrap gap-4">
              <Button 
                className="bg-white text-portfolio-dark hover:bg-gray-200 transition-colors"
              >
                Contact
              </Button>
              <Button 
                variant="outline" 
                className="border-portfolio-mint text-portfolio-mint hover:bg-portfolio-mint/10 transition-colors"
              >
                Work
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <a href="#about" className="text-white opacity-60 hover:opacity-100 transition-opacity">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
