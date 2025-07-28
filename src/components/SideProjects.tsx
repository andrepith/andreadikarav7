import { PokedexCard } from './PokedexCard';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink } from 'lucide-react';
import skillsPokemon from '@/assets/skills-pokemon.png';

export const SideProjects = () => {
  const project = {
    id: "500",
    title: "Self Driving Project",
    year: "2018",
    type: "AI/ML Project",
    description: "This project focuses on developing a self-driving car using behavioral cloning. The core idea is to train a computer to mimic human driving behavior, specifically in determining steering angles.",
    details: [
      "Utilizes data collected from a simulator with images from three cameras (center, left, and right) along with corresponding steering angles, throttle, and brake values",
      "Preprocesses data by cropping irrelevant parts, converting to YUV color space, applying Gaussian blur, resizing to 200x66 pixels, and normalizing pixel values",
      "Employs image augmentation techniques including zooming, panning, brightness adjustment, and horizontal flipping to enhance training data and prevent overfitting",
      "Uses a Convolutional Neural Network (CNN) model based on NVIDIA's architecture with several convolutional layers followed by fully connected layers",
      "Trained using Adam optimizer with mean squared error (MSE) loss function for 10 epochs with validation monitoring"
    ],
    technologies: ["Python", "Keras", "TensorFlow", "Numpy", "Matplotlib", "OpenCV", "Pandas", "Scikit-learn", "Imgaug"],
    githubUrl: "https://github.com/andrepith/self-driving-project"
  };

  return (
    <div className="space-y-6">
      <div className="pokedex-nav">
        <img src={skillsPokemon} alt="Projects Pokemon" className="w-8 h-8" />
        <h2 className="text-2xl font-bold">Side Projects</h2>
      </div>

      <PokedexCard className="relative">
        <div className="absolute top-4 right-4 w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
          <span className="text-lg font-bold text-accent-foreground">#{project.id}</span>
        </div>
        
        <div className="mb-4">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
            <div className="flex gap-2">
              <a 
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
              >
                <Github size={16} className="text-primary" />
              </a>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center gap-4 mb-3">
            <Badge variant="outline" className="border-accent text-accent-foreground">
              {project.type}
            </Badge>
            <span className="text-sm text-muted-foreground">{project.year}</span>
          </div>
        </div>

        <p className="text-muted-foreground mb-4 leading-relaxed">
          {project.description}
        </p>

        <div className="mb-4">
          <h5 className="font-semibold mb-2 text-foreground">Project Highlights:</h5>
          <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
            {project.details.map((detail, index) => (
              <li key={index} className="leading-relaxed">{detail}</li>
            ))}
          </ul>
        </div>

        <div className="mb-4">
          <h5 className="font-semibold mb-2 text-foreground">Technologies Used:</h5>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge 
                key={tech} 
                variant="secondary"
                className="bg-gradient-water text-accent-foreground text-xs"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-border">
          <p className="text-sm text-muted-foreground italic">
            The project aims to demonstrate the feasibility of using behavioral cloning with a CNN to control a virtual car in a simulator.
          </p>
        </div>
      </PokedexCard>
    </div>
  );
};