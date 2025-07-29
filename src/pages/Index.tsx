import { PokedexHeader } from '@/components/PokedexHeader';
import { WorkExperience } from '@/components/WorkExperience';
import { Education } from '@/components/Education';
import { SideProjects } from '@/components/SideProjects';
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
        <Tabs defaultValue="experience" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-card/50 backdrop-blur-sm">
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
            {/* <TabsTrigger value="timeline" className="flex items-center gap-2">
              <Clock size={16} />
              <span className="hidden sm:inline">Timeline</span>
            </TabsTrigger> */}
          </TabsList>

          <TabsContent value="experience">
            <WorkExperience />
          </TabsContent>

          <TabsContent value="education">
            <Education />
          </TabsContent>

          <TabsContent value="projects">
            <SideProjects />
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
