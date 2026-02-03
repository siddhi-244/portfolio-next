import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { resumeData } from "@/constants/resume-data";
import { FlaskConical, MapPin, ExternalLink, Users } from "lucide-react";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Button } from "@/components/ui/button";

export function ResearchSection() {
  if (!resumeData.research || resumeData.research.length === 0) {
    return null;
  }

  return (
    <SectionWrapper id="research" title="Research & Volunteering">
      <div className="space-y-6">
        {resumeData.research.map((research, index) => (
          <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <div className="space-y-1">
                  <CardTitle className="font-headline text-xl text-primary flex items-center gap-2">
                    <FlaskConical className="h-5 w-5 text-accent" />
                    {research.role}
                  </CardTitle>
                  <CardDescription className="text-lg font-medium">{research.lab}</CardDescription>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>Supervisor: {research.supervisor}</span>
                  </div>
                </div>
                <Badge variant="secondary" className="whitespace-nowrap self-start">
                  {research.duration}
                </Badge>
              </div>
              <div className="text-sm text-muted-foreground flex items-center pt-1">
                <MapPin className="mr-1 h-4 w-4" /> {research.location}
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80 leading-relaxed">{research.description}</p>
              {research.labLink && (
                <div className="mt-4">
                  <Button asChild variant="outline" size="sm">
                    <Link href={research.labLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Visit Lab Website
                    </Link>
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
