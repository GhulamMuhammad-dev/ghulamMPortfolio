
import { Card, CardContent } from '@/components/ui/card';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Project 1",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
      url: "#"
    },
    {
      id: 2,
      title: "Project 2",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
      url: "#"
    },
    {
      id: 3,
      title: "Project 3",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      url: "#"
    },
    {
      id: 4,
      title: "Project 4",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      url: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-portfolio-dark">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My Work</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Selected projects showcasing my skills and experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <a 
              key={project.id} 
              href={project.url} 
              className="project-card group"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Card className="bg-transparent overflow-hidden border-0">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full aspect-video object-cover transform transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <h3 className="text-xl font-medium text-white">
                        {project.title}
                        <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          &#8594;
                        </span>
                      </h3>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-flex items-center text-portfolio-mint hover:underline"
          >
            Get more done
            <span className="ml-1">&#8594;</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
