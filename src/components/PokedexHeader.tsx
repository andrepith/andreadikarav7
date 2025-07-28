import { MapPin, Star, Mail, Phone, Github, Linkedin, Globe } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import programmerPokemon from '@/assets/programmer-pokemon.png';

export const PokedexHeader = () => {
  const skills = [
    'JavaScript', 'Node', 'ReactJS', 'React Native', 
    'Python', 'MongoDB', 'PostgreSQL', 'GraphQL'
  ];

  return (
    <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-3xl p-6 shadow-2xl border-4 border-red-700 max-w-4xl mx-auto">
      {/* Pokedex Console Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Left Side - Main Screen */}
        <div className="bg-black rounded-2xl p-4 border-4 border-gray-800 relative">
          {/* Screen Header Lights */}
          <div className="flex gap-2 mb-4">
            <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
          </div>
          
          {/* Screen Content */}
          <div className="bg-green-300 rounded-lg p-4 min-h-[300px] text-black border-2 border-green-600">
            {/* Profile Image */}
            <div className="text-center mb-4">
              <div className="relative inline-block">
                <div className="w-24 h-24 mx-auto bg-white rounded-lg p-2 border-2 border-black">
                  <img 
                    src={programmerPokemon} 
                    alt="Andre Adikara Pokemon Avatar" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center border-2 border-white">
                  <span className="text-xs font-bold text-white">001</span>
                </div>
              </div>
            </div>
            
            {/* Screen Info */}
            <div className="text-center space-y-2">
              <h1 className="text-xl font-bold">ANDRE ADIKARA</h1>
              <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold inline-block">
                SOFTWARE DEVELOPER
              </div>
              <div className="text-sm">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <MapPin size={14} />
                  <span>INDONESIA</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Star size={14} />
                  <span>7 YEARS EXP</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Control Panel */}
        <div className="space-y-4">
          {/* Top Controls */}
          <div className="bg-red-400 rounded-lg p-4 border-2 border-red-700">
            <h3 className="text-white font-bold mb-3">TRAINER INFO</h3>
            <div className="text-sm text-white space-y-2">
              <p>Software Engineer based in Indonesia with passion to making complexed things simple for users.</p>
              <p>I love creating elegant and smart user-centered applications which solve complex problems.</p>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="bg-blue-500 rounded-lg p-4 border-2 border-blue-700">
            <h3 className="text-white font-bold mb-3">SKILLS</h3>
            <div className="grid grid-cols-2 gap-2">
              {skills.map((skill) => (
                <div 
                  key={skill} 
                  className="bg-white text-blue-800 px-2 py-1 rounded text-xs font-bold text-center"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Buttons */}
          <div className="grid grid-cols-2 gap-2">
            <a 
              href="mailto:andrepith@yahoo.co.uk" 
              className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-3 px-4 rounded-lg border-2 border-yellow-600 transition-colors flex items-center justify-center gap-2"
            >
              <Mail size={16} />
              <span className="hidden sm:inline">EMAIL</span>
            </a>
            <a 
              href="tel:+6282331578427" 
              className="bg-green-400 hover:bg-green-300 text-black font-bold py-3 px-4 rounded-lg border-2 border-green-600 transition-colors flex items-center justify-center gap-2"
            >
              <Phone size={16} />
              <span className="hidden sm:inline">CALL</span>
            </a>
            <a 
              href="https://andreadikara.vercel.app/" 
              className="bg-purple-400 hover:bg-purple-300 text-black font-bold py-3 px-4 rounded-lg border-2 border-purple-600 transition-colors flex items-center justify-center gap-2"
            >
              <Globe size={16} />
              <span className="hidden sm:inline">WEB</span>
            </a>
            <a 
              href="https://github.com/andrepith" 
              className="bg-gray-400 hover:bg-gray-300 text-black font-bold py-3 px-4 rounded-lg border-2 border-gray-600 transition-colors flex items-center justify-center gap-2"
            >
              <Github size={16} />
              <span className="hidden sm:inline">CODE</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};