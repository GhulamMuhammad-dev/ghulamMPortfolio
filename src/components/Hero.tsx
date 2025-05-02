
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="section-container">
        <div className="flex flex-col gap-8 md:w-4/5">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Building <span className="text-portfolio-mint">Digital Experiences</span> That Work — and Wow.
          </h1>
          
          <p className="text-lg text-gray-300 max-w-2xl">
            I'm a Developer and UX/UI Designer who crafts seamless, user-first web solutions with clean code and intentional design. Let's create something extraordinary.
          </p>
          
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
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
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
