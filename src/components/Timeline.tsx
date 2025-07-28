import { PokedexCard } from './PokedexCard';
import { Badge } from '@/components/ui/badge';

export const Timeline = () => {
  const timelineEvents = [
    {
      year: "2013",
      title: "B.S. in Computer Science",
      type: "Education",
      description: "Started university studies"
    },
    {
      year: "2016",
      title: "Frontend Developer",
      type: "Career Start",
      description: "Began professional journey"
    },
    {
      year: "2019",
      title: "Frontend Developer",
      type: "Growth",
      description: "Advanced frontend skills"
    },
    {
      year: "2022",
      title: "Sr. Fullstack Developer",
      type: "Senior Level",
      description: "Reached senior position"
    },
    {
      year: "Present",
      title: "Software Developer",
      type: "Current",
      description: "Freelance work"
    }
  ];

  return (
    <PokedexCard>
      <h3 className="text-xl font-bold text-foreground mb-6 text-center">Career Timeline</h3>
      
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent"></div>
        
        <div className="space-y-6">
          {timelineEvents.map((event, index) => (
            <div key={event.year} className="relative flex items-start gap-4">
              {/* Timeline dot */}
              <div className="relative z-10 w-4 h-4 rounded-full bg-primary shadow-glow flex-shrink-0 mt-2"></div>
              
              {/* Content */}
              <div className="flex-1 pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-lg font-bold text-primary">{event.year}</span>
                  <Badge 
                    variant="outline" 
                    className="border-accent text-accent-foreground text-xs"
                  >
                    {event.type}
                  </Badge>
                </div>
                <h4 className="font-semibold text-foreground mb-1">{event.title}</h4>
                <p className="text-sm text-muted-foreground">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PokedexCard>
  );
};