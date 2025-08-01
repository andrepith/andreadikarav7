import { PokedexCard } from "./PokedexCard";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";
import skillsPokemon from "@/assets/skills-pokemon.png";

export const SideProjects = () => {
  const project = [
    {
      id: "500",
      title: "Self Driving Project",
      year: "2018",
      type: "AI/ML Project",
      description:
        "This project focuses on developing a self-driving car using behavioral cloning. The core idea is to train a computer to mimic human driving behavior, specifically in determining steering angles.",
      details: [
        "Utilizes data collected from a simulator with images from three cameras (center, left, and right) along with corresponding steering angles, throttle, and brake values",
        "Preprocesses data by cropping irrelevant parts, converting to YUV color space, applying Gaussian blur, resizing to 200x66 pixels, and normalizing pixel values",
        "Employs image augmentation techniques including zooming, panning, brightness adjustment, and horizontal flipping to enhance training data and prevent overfitting",
        "Uses a Convolutional Neural Network (CNN) model based on NVIDIA's architecture with several convolutional layers followed by fully connected layers",
        "Trained using Adam optimizer with mean squared error (MSE) loss function for 10 epochs with validation monitoring",
      ],
      technologies: [
        "Python",
        "Keras",
        "TensorFlow",
        "Numpy",
        "Matplotlib",
        "OpenCV",
        "Pandas",
        "Scikit-learn",
        "Imgaug",
      ],
      githubUrl: "https://github.com/andrepith/self-driving-project",
    },
    {
      id: "501",
      title: "AI Image Enhancement Project",
      year: "2024",
      type: "AI/ML Project",
      description:
        "A powerful image enhancement tool that uses state-of-the-art AI models to upscale and restore old, low-quality photos. This project combines Real-ESRGAN for super-resolution and GFPGAN for face restoration to produce high-quality enhanced images.",
      details: [
        "Implements Real-ESRGAN models for 2x and 4x super-resolution upscaling with configurable tile processing and memory management",
        "Integrates GFPGAN face restoration technology to enhance facial features and skin texture in photographs",
        "Provides a combined enhancement pipeline that first applies super-resolution then face restoration for optimal results",
        "Features comprehensive image preprocessing utilities including loading, resizing, format conversion, and side-by-side comparison visualization",
        "Includes automated model download scripts for Real-ESRGAN x4plus, Real-ESRGAN x2plus, and GFPGAN v1.4 pre-trained models",
        "Implements progress tracking with tqdm progress bars for long-running enhancement operations",
        "Supports both individual enhancement methods and sequential processing workflows for different image types",
      ],
      technologies: [
        "Python",
        "PyTorch",
        "Real-ESRGAN",
        "GFPGAN",
        "BasicSR",
        "OpenCV",
        "PIL/Pillow",
        "NumPy",
        "Matplotlib",
        "tqdm",
        "Requests",
      ],
      githubUrl: "https://github.com/andrepith/image-enhancer",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="pokedex-nav">
        <img
          src={skillsPokemon}
          alt="Projects Pokemon"
          className="w-8 h-8 rounded-2xl"
        />
        <h2 className="text-2xl font-bold">Side Projects</h2>
      </div>

      {project.map((proj) => (
        <PokedexCard key={proj.id} className="relative">
          <div className="mb-4">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-xl font-bold text-foreground">
                {proj.title}
              </h3>
              <div className="flex gap-2">
                <a
                  href={proj.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                >
                  <Github size={16} className="text-primary" />
                </a>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 mb-3">
              <Badge variant="outline" className="border-accent">
                {proj.type}
              </Badge>
              <span className="text-sm text-muted-foreground">{proj.year}</span>
            </div>
          </div>

          <p className="text-muted-foreground mb-4 leading-relaxed">
            {proj.description}
          </p>

          <div className="mb-4">
            <h5 className="font-semibold mb-2 text-foreground">
              Project Highlights:
            </h5>
            <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
              {proj.details.map((detail, index) => (
                <li key={index} className="leading-relaxed">
                  {detail}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-4">
            <h5 className="font-semibold mb-2 text-foreground">
              Technologies Used:
            </h5>
            <div className="flex flex-wrap gap-2">
              {proj.technologies.map((tech) => (
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
        </PokedexCard>
      ))}
    </div>
  );
};
