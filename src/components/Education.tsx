import { PokedexCard } from './PokedexCard';
import { Badge } from '@/components/ui/badge';
import { Calendar, GraduationCap } from 'lucide-react';
import educationPokemon from '@/assets/education-pokemon.png';

export const Education = () => {
  const education = {
    id: "100",
    degree: "B.S. in Computer Science",
    institution: "Universitas Brawijaya",
    period: "Sep 2013 - Dec 2017",
    type: "Bachelor's",
    subjects: ["Machine Learning", "Data Science", "Web Development", "Software Engineering"]
  };

  const publication = {
    title: "Sistem Pendukung Keputusan Penentuan Penerima Bantuan Pangan Non Tunai Menggunakan Metode Weighted Product",
    year: "2017",
    description: "A decision support system to determine recipients of non-cash food assistance in Sumberbendo Village, Saradan Sub-district, using the Weighted Product method. The system evaluates criteria such as income, dependents, housing conditions, and assets to rank eligible recipients, achieving a 95% accuracy rate in tests with 20 residents.",
    topics: ["Decision Support Systems", "Weighted Product Method", "Software Development", "Data Analysis", "System Evaluation"]
  };

  return (
    <div className="space-y-6">
      <div className="pokedex-nav">
        <img src={educationPokemon} alt="Education Pokemon" className="w-8 h-8" />
        <h2 className="text-2xl font-bold">Education & Research</h2>
      </div>

      {/* Education */}
      <PokedexCard className="relative">
        <div className="absolute top-4 right-4 w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
          <span className="text-lg font-bold text-secondary-foreground">#{education.id}</span>
        </div>
        
        <div className="flex items-start gap-4 mb-4">
          <div className="w-12 h-12 rounded-full bg-gradient-electric p-2 flex items-center justify-center">
            <GraduationCap size={24} className="text-secondary-foreground" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-foreground mb-1">{education.degree}</h3>
            <h4 className="text-lg text-primary font-semibold mb-2">{education.institution}</h4>
            
            <div className="flex flex-wrap items-center gap-4 mb-3">
              <div className="flex items-center gap-1 text-muted-foreground">
                <Calendar size={16} />
                <span className="text-sm">{education.period}</span>
              </div>
              <Badge variant="outline" className="border-accent text-accent-foreground">
                {education.type}
              </Badge>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <h5 className="font-semibold mb-2 text-foreground">Areas of Study:</h5>
          <div className="flex flex-wrap gap-2">
            {education.subjects.map((subject) => (
              <Badge 
                key={subject} 
                variant="secondary"
                className="bg-gradient-water text-accent-foreground text-xs"
              >
                {subject}
              </Badge>
            ))}
          </div>
        </div>
      </PokedexCard>

      {/* Publication */}
      <PokedexCard className="relative">
        <div className="absolute top-4 right-4 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
          <span className="text-lg font-bold text-primary">#{publication.year}</span>
        </div>
        
        <div className="mb-4">
          <h3 className="text-lg font-bold text-foreground mb-2">Publications and Presentations</h3>
          <h4 className="text-base text-primary font-semibold mb-3 leading-relaxed">
            {publication.title}
          </h4>
          
          <div className="flex items-center gap-2 mb-3">
            <Badge variant="outline" className="border-primary text-primary">
              Research Paper
            </Badge>
            <span className="text-sm text-muted-foreground">{publication.year}</span>
          </div>
        </div>

        <p className="text-muted-foreground mb-4 leading-relaxed">
          {publication.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {publication.topics.map((topic) => (
            <Badge 
              key={topic} 
              variant="secondary"
              className="bg-gradient-electric text-secondary-foreground text-xs"
            >
              {topic}
            </Badge>
          ))}
        </div>
      </PokedexCard>
    </div>
  );
};