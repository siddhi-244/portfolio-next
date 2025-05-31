import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { resumeData } from "@/constants/resume-data";
import { Award } from "lucide-react";
import { SectionWrapper } from '@/components/ui/section-wrapper';

export function AchievementsSection() {
  if (!resumeData.achievements || resumeData.achievements.length === 0) {
    return null;
  }

  return (
    <SectionWrapper id="achievements" title="Key Achievements">
      <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-primary/5">
        <CardHeader>
          <CardTitle className="font-headline text-xl text-primary flex items-center">
            <Award className="mr-2 h-6 w-6 text-accent" />
            Notable Accomplishments
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-outside space-y-3 pl-5 text-foreground/80">
            {resumeData.achievements.map((achievement, index) => (
              <li key={index} className="leading-relaxed">{achievement}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </SectionWrapper>
  );
}
