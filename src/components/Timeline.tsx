import { PokedexCard } from './PokedexCard';
import { Badge } from '@/components/ui/badge';

export const Timeline = () => {
  const timelineEvents = [
    {
      year: "2019",
      title: "Frontend Developer",
      type: "Career Start",
      description: "Started at Spacestock, building web applications and mobile apps"
    },
    {
      year: "2021",
      title: "Frontend Developer",
      type: "Finance",
      description: "Joined Jenius, worked on Remittance Feature"
    },
    {
      year: "2022",
      title: "Sr. Fullstack Developer",
      type: "Senior Level",
      description: "Led development at Codedegree, creating learning platform"
    },
    {
      year: "2022",
      title: "Freelance Software Developer",
      type: "Current",
      description: "Self-employed, developing custom software solutions"
    }
  ];

  return (
    <PokedexCard>
      <h3 className="text-xl font-bold text-foreground mb-8 text-center">Career Timeline</h3>
      
      <div className="relative max-w-3xl mx-auto">
        {/* Timeline line */}
        <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/30"></div>
        
        <div className="space-y-8">
          {timelineEvents.map((event, index) => (
            <div key={event.year} className="relative flex items-start gap-6">
              {/* Timeline dot */}
              <div className="relative z-10 w-3 h-3 rounded-full bg-primary ring-4 ring-primary/20 flex-shrink-0 mt-3 shadow-glow"></div>
              
              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="text-xl font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">{event.year}</span>
                  <Badge 
                    variant="outline" 
                    className="border-accent/50 text-accent bg-accent/10"
                  >
                    {event.type}
                  </Badge>
                </div>
                <h4 className="font-bold text-lg text-foreground mb-2">{event.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PokedexCard>
  );
};