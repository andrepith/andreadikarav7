import { PokedexHeader } from '@/components/PokedexHeader';
import { WorkExperience } from '@/components/WorkExperience';
import { Education } from '@/components/Education';
import { SideProjects } from '@/components/SideProjects';
import { Timeline } from '@/components/Timeline';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Briefcase, GraduationCap, Code, Clock, User } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-background">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header Section */}
        <div className="mb-8">
          <PokedexHeader />
        </div>

        {/* Navigation Tabs */}
        <Tabs defaultValue="about" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8 bg-card/50 backdrop-blur-sm">
            <TabsTrigger value="about" className="flex items-center gap-2">
              <User size={16} />
              <span className="hidden sm:inline">About</span>
            </TabsTrigger>
            <TabsTrigger value="experience" className="flex items-center gap-2">
              <Briefcase size={16} />
              <span className="hidden sm:inline">Experience</span>
            </TabsTrigger>
            <TabsTrigger value="education" className="flex items-center gap-2">
              <GraduationCap size={16} />
              <span className="hidden sm:inline">Education</span>
            </TabsTrigger>
            <TabsTrigger value="projects" className="flex items-center gap-2">
              <Code size={16} />
              <span className="hidden sm:inline">Projects</span>
            </TabsTrigger>
            <TabsTrigger value="timeline" className="flex items-center gap-2">
              <Clock size={16} />
              <span className="hidden sm:inline">Timeline</span>
            </TabsTrigger>
          </TabsList>

          {/* Tab Content */}
          <TabsContent value="about" className="space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">About Andre</h2>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Andre is a passionate Software Engineer with 7 years of professional experience, 
                specializing in creating elegant and user-centered applications. Based in Indonesia, 
                he has worked with various technologies and frameworks, from frontend development 
                with React and React Native to backend systems with Node.js and databases.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="experience">
            <WorkExperience />
          </TabsContent>

          <TabsContent value="education">
            <Education />
          </TabsContent>

          <TabsContent value="projects">
            <SideProjects />
          </TabsContent>

          <TabsContent value="timeline">
            <Timeline />
          </TabsContent>
        </Tabs>

        {/* Footer */}
        <footer className="mt-16 text-center py-8 border-t border-border">
          <p className="text-muted-foreground">
            Built with React, TypeScript, and Tailwind CSS • Pokemon Pokedex Theme
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Contact: <a href="mailto:andrepith@yahoo.co.uk" className="text-primary hover:underline">andrepith@yahoo.co.uk</a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
