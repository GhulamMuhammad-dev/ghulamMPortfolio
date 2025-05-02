
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Progress } from '@/components/ui/progress';
import { Code, Paintbrush, Globe } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      skills: [
        { name: "HTML/CSS", level: 95, color: "bg-[#F97316]" },
        { name: "JavaScript/React", level: 90, color: "bg-[#0EA5E9]" },
        { name: "Node.js", level: 85, color: "bg-[#22C55E]" },
        { name: "TailwindCSS", level: 92, color: "bg-[#8B5CF6]" }
      ],
      icon: <Code className="h-5 w-5" />,
      delay: 0.1
    },
    {
      title: "Design Tools",
      skills: [
        { name: "Figma", level: 88, color: "bg-[#D946EF]" },
        { name: "Adobe Illustrator", level: 80, color: "bg-[#F97316]" },
        { name: "Photoshop", level: 75, color: "bg-[#0EA5E9]" }
      ],
      icon: <Paintbrush className="h-5 w-5" />,
      delay: 0.3
    },
    {
      title: "UX/UI Expertise",
      skills: [
        { name: "Wireframing", level: 90, color: "bg-[#8B5CF6]" },
        { name: "Prototyping", level: 85, color: "bg-[#22C55E]" },
        { name: "User Research", level: 80, color: "bg-[#D946EF]" },
        { name: "Design Systems", level: 92, color: "bg-[#F97316]" }
      ],
      icon: <Globe className="h-5 w-5" />,
      delay: 0.5
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-portfolio-dark to-black/90 z-0"></div>
      
      {/* Glass orbs for visual interest */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#9b87f5]/10 blur-[80px]"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-[#7EFFC0]/5 blur-[100px]"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My Toolkit</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              The technologies, tools, and methodologies I use to bring ideas to life
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="grid md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: category.delay }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="h-full"
            >
              <Card className="bg-white/5 backdrop-blur-lg border-white/10 shadow-lg border overflow-hidden h-full hover:border-portfolio-mint/40 transition-all duration-300">
                <CardHeader className="bg-black/30 flex flex-row items-center gap-2 p-4 border-b border-white/5">
                  <div className="bg-portfolio-mint/10 p-2 rounded-md">
                    {category.icon}
                  </div>
                  <CardTitle className="text-white text-lg">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between">
                        <p className="text-gray-200">{skill.name}</p>
                        <p className="text-portfolio-mint">{skill.level}%</p>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2 bg-gray-700"
                        style={{
                          '--progress-background': skill.color
                        } as React.CSSProperties}
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
