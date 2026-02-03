import { Card, CardContent } from "@/components/ui/card";
import { resumeData } from "@/constants/resume-data";
import { Award, Trophy, Star, Medal, Sparkles, Zap } from "lucide-react";
import { SectionWrapper } from '@/components/ui/section-wrapper';

const achievementIcons = [Trophy, Award, Star, Medal, Sparkles, Zap];

export function AchievementsSection() {
  if (!resumeData.achievements || resumeData.achievements.length === 0) {
    return null;
  }

  return (
    <SectionWrapper id="achievements" title="Notable Accomplishments">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {resumeData.achievements.map((achievement, index) => {
          const Icon = achievementIcons[index % achievementIcons.length];
          return (
            <Card 
              key={index} 
              className="group shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-background to-primary/5 border-primary/10"
            >
              <CardContent className="p-5 flex items-start gap-4">
                <div className="flex-shrink-0 p-2.5 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <p className="text-foreground/80 leading-relaxed text-sm">{achievement}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
