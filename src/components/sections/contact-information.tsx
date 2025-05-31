import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { resumeData } from '@/constants/resume-data';
import { Github, Linkedin, Mail, Phone, Download } from "lucide-react";
import { SectionWrapper } from '@/components/ui/section-wrapper';

const iconMap: { [key: string]: React.ElementType } = {
  Github,
  Linkedin,
  Mail,
  Phone,
};

export function ContactInformation() {
  return (
    <SectionWrapper id="contact" title="Get In Touch" className="bg-gradient-to-br from-accent/5 via-background to-primary/5">
      <div className="max-w-2xl mx-auto text-center">
        <p className="mb-8 text-lg text-foreground/80">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of something amazing. Feel free to reach out!
        </p>
        
        <Card className="shadow-xl p-6 md:p-8 bg-card">
          <CardHeader className="p-0 mb-6">
            <CardTitle className="font-headline text-2xl md:text-3xl text-primary">Siddhi Bhanushali</CardTitle>
            <CardDescription className="text-md md:text-lg">{resumeData.jobTitle}</CardDescription>
          </CardHeader>
          <CardContent className="p-0 space-y-6">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button asChild size="lg" className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg">
                <Link href={`mailto:${resumeData.contact.email}`}>
                  <Mail className="mr-2 h-5 w-5" /> Email Me
                </Link>
              </Button>
            </div>
            
            <div className="flex justify-center space-x-4 pt-4">
              <Link href={resumeData.contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                <Button variant="ghost" size="icon" className="text-primary hover:text-accent rounded-full w-12 h-12">
                  <Github className="h-6 w-6" />
                </Button>
              </Link>
              <Link href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                 <Button variant="ghost" size="icon" className="text-primary hover:text-accent rounded-full w-12 h-12">
                  <Linkedin className="h-6 w-6" />
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
}
