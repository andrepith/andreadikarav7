import { MapPin, Star, Mail, Phone, Github, Linkedin, Globe } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import programmerPokemon from '@/assets/programmer-pokemon.png';

export const PokedexHeader = () => {
  const skills = [
    'JavaScript', 'Node', 'ReactJS', 'React Native', 
    'Python', 'MongoDB', 'PostgreSQL', 'GraphQL'
  ];

  return (
    <div className="pokedex-card text-center">
      {/* Profile Image */}
      <div className="relative mb-6">
        <div className="w-32 h-32 mx-auto rounded-full bg-gradient-pokedex p-2 shadow-glow">
          <img 
            src={programmerPokemon} 
            alt="Andre Adikara Pokemon Avatar" 
            className="w-full h-full object-contain rounded-full"
          />
        </div>
        <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center shadow-electric">
          <span className="text-sm font-bold">001</span>
        </div>
      </div>

      {/* Name and Title */}
      <h1 className="text-4xl font-bold text-foreground mb-2">Andre Adikara</h1>
      <div className="type-badge mb-4">Software Developer</div>
      
      {/* Description */}
      <p className="text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
        Software Engineer based in Indonesia with passion to making complexed things simple for users. 
        I love creating elegant and smart user-centered applications which solve complex problems. 
        I am also very passionate about simplicity and the psychology behind the design.
      </p>

      {/* Skills as Pokemon Types */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {skills.map((skill) => (
          <Badge 
            key={skill} 
            variant="secondary" 
            className="bg-gradient-water text-accent-foreground hover:shadow-electric transition-all duration-200"
          >
            {skill}
          </Badge>
        ))}
      </div>

      {/* Contact Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
        <div className="flex items-center justify-center gap-2">
          <MapPin size={16} className="text-primary" />
          <span>Indonesia</span>
          <Star size={16} className="text-secondary ml-2" />
          <span>7 years experience</span>
        </div>
        
        <div className="flex items-center justify-center gap-4">
          <a href="mailto:andrepith@yahoo.co.uk" className="flex items-center gap-1 hover:text-primary transition-colors">
            <Mail size={16} />
            <span className="hidden sm:inline">andrepith@yahoo.co.uk</span>
          </a>
          <a href="tel:+6282331578427" className="flex items-center gap-1 hover:text-primary transition-colors">
            <Phone size={16} />
            <span className="hidden sm:inline">+6282331578427</span>
          </a>
        </div>
        
        <div className="md:col-span-2 flex items-center justify-center gap-4">
          <a href="https://andreadikara.vercel.app/" className="flex items-center gap-1 hover:text-primary transition-colors">
            <Globe size={16} />
            <span>Website</span>
          </a>
          <a href="https://www.linkedin.com/in/andreadikara/" className="flex items-center gap-1 hover:text-primary transition-colors">
            <Linkedin size={16} />
            <span>LinkedIn</span>
          </a>
          <a href="https://github.com/andrepith" className="flex items-center gap-1 hover:text-primary transition-colors">
            <Github size={16} />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
};