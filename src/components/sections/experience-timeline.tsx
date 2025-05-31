import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { resumeData, type ExperienceEntry } from "@/constants/resume-data";
import { Briefcase, MapPin, CalendarDays } from "lucide-react";
import { SectionWrapper } from "@/components/ui/section-wrapper";

export function ExperienceTimeline() {
  return (
    <SectionWrapper id="experience" title="Work Experience">
      <div className="relative space-y-12">
        {/* Vertical line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-primary/20 transform -translate-x-1/2 hidden md:block"></div>

        {resumeData.experience.map((exp, index) => (
          <div key={index} className="relative md:flex md:items-start group">
            {/* Dot on the timeline */}
            <div className="hidden md:block absolute left-1/2 top-4 w-4 h-4 bg-primary rounded-full border-4 border-background transform -translate-x-1/2 group-hover:scale-125 transition-transform"></div>
            
            <Card className={`w-full shadow-lg hover:shadow-xl transition-shadow duration-300 ${index % 2 === 0 ? 'md:ml-auto md:mr-8' : 'md:mr-auto md:ml-8'} md:w-[calc(50%-2rem)]`}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="font-headline text-xl text-primary flex items-center">
                      <Briefcase className="mr-2 h-5 w-5 text-accent" />
                      {exp.role}
                    </CardTitle>
                    <CardDescription className="text-lg">{exp.company}</CardDescription>
                  </div>
                  <Badge variant="secondary" className="whitespace-nowrap">{exp.duration}</Badge>
                </div>
                <div className="text-sm text-muted-foreground flex items-center pt-1">
                  <MapPin className="mr-1 h-4 w-4" /> {exp.location}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-outside space-y-2 pl-5 text-foreground/80">
                  {exp.achievements.map((ach, i) => (
                    <li key={i}>{ach}</li>
                  ))}
                </ul>
                {exp.skillsUsed && exp.skillsUsed.length > 0 && (
                  <div className="mt-4">
                    <h4 className="font-semibold text-sm mb-2 text-primary">Skills Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skillsUsed.map(skill => (
                        <Badge key={skill} variant="outline" className="bg-accent/10 text-accent border-accent/30">{skill}</Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
