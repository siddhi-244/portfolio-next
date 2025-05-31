"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { resumeData, type SkillCategory } from "@/constants/resume-data";
import { SectionWrapper } from '@/components/ui/section-wrapper';

export function SkillsSection() {

  return (
    <SectionWrapper id="skills" title="Technical Skills">
      <div className="space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resumeData.skills.map((category: SkillCategory) => (
            <Card key={category.title} className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="font-headline text-lg text-primary">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill.name} variant="outline" className="text-sm bg-accent/10 text-accent border-accent/30">
                      {/* {skill.icon && typeof skill.icon === 'function' && <skill.icon className="mr-1 h-3 w-3" />} */}
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
