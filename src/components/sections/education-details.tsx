import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { resumeData, type EducationInstance } from "@/constants/resume-data";
import { GraduationCap, Star } from "lucide-react";
import { SectionWrapper } from '@/components/ui/section-wrapper';

export function EducationDetails() {
  return (
    <SectionWrapper id="education" title="Education">
      <div className="grid md:grid-cols-2 gap-8">
        {resumeData.education.map((edu, index) => (
          <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-center mb-1">
                <GraduationCap className="h-8 w-8 text-accent mr-3" />
                <div>
                  <CardTitle className="font-headline text-xl text-primary">{edu.institution}</CardTitle>
                  <CardDescription className="text-md">{edu.degree}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{edu.duration}</p>
              {edu.gpa && (
                <p className="mt-2 text-sm text-primary font-medium flex items-center">
                  <Star className="h-4 w-4 mr-1 text-yellow-500 fill-yellow-500" /> GPA: {edu.gpa}
                </p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
