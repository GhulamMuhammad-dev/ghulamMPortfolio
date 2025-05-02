
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <section id="about" className="py-20 bg-black/30">
      <div className="section-container">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="col-span-1">
            <div className="rounded-xl border-2 border-portfolio-mint p-1 w-full max-w-md mx-auto">
              <div className="bg-gray-800 rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/781aa5eb-6aad-4c7b-90ed-06bd18bab4bc.png" 
                  alt="Profile" 
                  className="w-full aspect-square object-cover object-center"
                />
              </div>
            </div>
          </div>
          
          <div className="col-span-2 space-y-6">
            <div className="inline-block bg-portfolio-mint/10 rounded-full px-4 py-2 text-portfolio-mint">
              <p className="text-sm">
                "I prefer to turn vague concepts into clear experiences – our work needs to look good from a user's perspective, but also function well"
              </p>
            </div>
            
            <div className="space-y-5">
              <h2 className="text-2xl md:text-3xl font-bold">
                I'm a multidisciplinary creative with a passion for turning ideas into interactive, intuitive digital products. With a background in both frontend development and UX/UI design, I bridge the gap between design vision and functional reality
              </h2>
              
              <div className="flex flex-wrap gap-3">
                <Button size="sm" className="bg-portfolio-mint text-portfolio-dark hover:bg-portfolio-mint/90">Full-stack Development</Button>
                <Button size="sm" className="bg-gray-700 text-white hover:bg-gray-600">UX/UI Design</Button>
                <Button size="sm" className="bg-gray-700 text-white hover:bg-gray-600">Design-to-Code</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
