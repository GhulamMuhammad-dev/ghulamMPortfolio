
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured online shopping experience with cart, payment processing, and inventory management.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
      url: "#",
      featured: true,
      color: "from-[#9b87f5]/20 to-[#7EFFC0]/20"
    },
    {
      id: 2,
      title: "Finance Dashboard",
      description: "Interactive analytics dashboard for tracking investments and financial metrics.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
      url: "#",
      featured: false,
      color: "from-[#F97316]/20 to-[#D946EF]/20"
    },
    {
      id: 3,
      title: "Social Media App",
      description: "Connect with friends through posts, photos, and real-time messaging.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      url: "#",
      featured: false,
      color: "from-[#0EA5E9]/20 to-[#8B5CF6]/20"
    },
    {
      id: 4,
      title: "Productivity Tool",
      description: "Task management application with calendar integration and reminder system.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      url: "#",
      featured: false,
      color: "from-[#22C55E]/20 to-[#0EA5E9]/20"
    },
    {
      id: 5,
      title: "AI Assistant",
      description: "Smart virtual assistant using natural language processing to help with daily tasks.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3543&q=80",
      url: "https://github.com/GhulamMuhammad-dev/MonterKill",
      featured: true,
      color: "from-[#D946EF]/20 to-[#F97316]/20"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="projects" className="py-24 bg-portfolio-dark relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-40 left-20 w-72 h-72 rounded-full bg-[#9b87f5]/10 blur-[100px]"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-[#7EFFC0]/5 blur-[120px]"></div>
      
      <div className="section-container">
        <div className="text-center mb-16">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-white to-portfolio-mint/70 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Explore my recent work showcasing creative solutions and technical expertise
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-6 gap-5 auto-rows-[180px]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              variants={itemVariants}
              className={`project-card group relative overflow-hidden ${
                project.featured ? "md:col-span-3 md:row-span-2" : "md:col-span-3"
              } rounded-xl`}
            >
              <a 
                href={project.url}
                target="_blank" 
                rel="noopener noreferrer"
                className="block h-full w-full"
              >
                <Card className="h-full w-full backdrop-blur-sm bg-black/30 border-portfolio-mint/10 overflow-hidden hover:border-portfolio-mint/50 transition-all duration-300">
                  <CardContent className="p-0 h-full">
                    <div className="relative h-full w-full overflow-hidden">
                      {/* Gradient overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-30`}></div>
                      
                      {/* Image with zoom effect */}
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                      />
                      
                      {/* Content overlay */}
                      <div className="absolute inset-0 p-6 flex flex-col justify-between bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                        <div className="self-end">
                          <span className="bg-portfolio-mint/20 backdrop-blur-md text-portfolio-mint text-xs px-2 py-1 rounded-full border border-portfolio-mint/30">
                            {project.featured ? 'Featured' : 'Project'}
                          </span>
                        </div>
                        
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-portfolio-mint transition-colors duration-300">
                            {project.title}
                          </h3>
                          {project.featured && (
                            <p className="text-gray-300 text-sm line-clamp-2 mb-3">
                              {project.description}
                            </p>
                          )}
                          <div className="flex items-center gap-1 text-portfolio-mint/70 group-hover:text-portfolio-mint transition-colors duration-300 text-sm font-medium">
                            View Project <ExternalLink className="ml-1 w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </a>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <motion.a 
            href="#" 
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-portfolio-mint/20 to-[#9b87f5]/20 backdrop-blur-sm border border-portfolio-mint/30 text-portfolio-mint hover:bg-portfolio-mint/30 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            View All Projects
            <span className="ml-2">&#8594;</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
