import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { resumeData, type ProjectEntry } from "@/constants/resume-data";
import { Github, ExternalLink } from "lucide-react";
import { SectionWrapper } from '@/components/ui/section-wrapper';

export function ProjectShowcase() {
  return (
    <SectionWrapper id="projects" title="Projects">
      <div className="grid md:grid-cols-2 gap-8">
        {resumeData.projects.map((project, index) => (
          <Card key={index} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="font-headline text-xl text-primary">{project.name}</CardTitle>
              <div className="flex flex-wrap gap-2 pt-1">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary border-primary/20">{tech}</Badge>
                ))}
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="list-disc list-outside space-y-1 pl-5 text-foreground/80">
                {project.descriptionPoints.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="flex gap-4">
              {project.githubLink && (
                <Button asChild variant="outline" className="text-accent border-accent hover:bg-accent/10">
                  <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> GitHub
                  </Link>
                </Button>
              )}
              {project.liveLink && (
                <Button asChild className="bg-accent hover:bg-accent/90">
                  <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                  </Link>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
