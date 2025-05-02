
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      skills: "HTML, CSS, JavaScript, React, Next.js, Node.js, TailwindCSS"
    },
    {
      title: "Design Tools",
      skills: "Figma, Adobe Illustrator, Photoshop"
    },
    {
      title: "UX/UI Expertise",
      skills: "Wireframing, Prototyping, User Research, Design Systems"
    }
  ];

  return (
    <section id="skills" className="py-24 bg-portfolio-light">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-dark mb-4">My Toolkit</h2>
          <p className="text-portfolio-gray text-lg max-w-2xl mx-auto">
            The technologies, tools, and methodologies I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-white shadow-lg border-none overflow-hidden">
              <CardHeader className="bg-portfolio-dark p-4">
                <CardTitle className="text-white text-lg">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-portfolio-dark text-center">{category.skills}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
