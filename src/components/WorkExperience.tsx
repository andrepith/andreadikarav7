import { PokedexCard } from './PokedexCard';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin } from 'lucide-react';
import workPokemon from '@/assets/work-pokemon.png';

export const WorkExperience = () => {
  const experiences = [
    {
      id: "004",
      title: "Software Developer",
      company: "Freelance",
      period: "Jun 2022 - Present",
      type: "Current Role",
      description: "Developing custom software solutions for various clients",
      skills: []
    },
    {
      id: "003",
      title: "Sr. Fullstack Developer",
      company: "Codedegree",
      period: "Apr 2022 - Mar 2023",
      type: "Senior Level",
      description: "Create a Code Learning platform called CodeDegree.com",
      skills: ["ReactJS", "React Native", "GraphQL"]
    },
    {
      id: "002",
      title: "Frontend Developer",
      company: "Jenius",
      period: "May 2021 - Nov 2021",
      type: "Finance",
      description: "Worked on Remittance Feature to send money to other countries",
      skills: ["React Native", "ReactJS", "GraphQL"]
    },
    {
      id: "001",
      title: "Frontend Developer",
      company: "Spacestock",
      period: "Jan 2019 - Apr 2021",
      type: "Startup",
      description: "Built multiple systems including web applications, CRM, and mobile apps",
      skills: ["JavaScript", "PHP", "Laravel", "ReactJS", "Redux", "Storybook", "React Native"],
      achievements: [
        "Finishing SpaceStock's Web beta version with Laravel",
        "Built and setup MVP web for SpaceStock 2.0 with React, Redux and Storybook",
        "Built Inquiry Management System with React and Redux",
        "Built Progressive Web Apps CRM for Inquiry Management",
        "Built Agent App with React Native"
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <div className="pokedex-nav">
        <img src={workPokemon} alt="Work Pokemon" className="w-8 h-8" />
        <h2 className="text-2xl font-bold">Work Experience</h2>
      </div>

      {experiences.map((exp) => (
        <PokedexCard key={exp.id} className="relative">
          <div className="absolute top-4 right-4 w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
            <span className="text-lg font-bold text-secondary-foreground">#{exp.id}</span>
          </div>
          
          <div className="mb-4">
            <h3 className="text-xl font-bold text-foreground mb-1">{exp.title}</h3>
            <h4 className="text-lg text-primary font-semibold mb-2">{exp.company}</h4>
            
            <div className="flex flex-wrap items-center gap-4 mb-3">
              <div className="flex items-center gap-1 text-muted-foreground">
                <Calendar size={16} />
                <span className="text-sm">{exp.period}</span>
              </div>
              <Badge variant="outline" className="border-accent text-accent-foreground">
                {exp.type}
              </Badge>
            </div>
          </div>

          <p className="text-muted-foreground mb-4">{exp.description}</p>

          {exp.achievements && (
            <div className="mb-4">
              <h5 className="font-semibold mb-2 text-foreground">Key Achievements:</h5>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                {exp.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>
          )}

          {exp.skills.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {exp.skills.map((skill) => (
                <Badge 
                  key={skill} 
                  variant="secondary"
                  className="bg-gradient-water text-accent-foreground text-xs"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          )}
        </PokedexCard>
      ))}
    </div>
  );
};