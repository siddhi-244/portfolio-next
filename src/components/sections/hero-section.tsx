import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { resumeData } from '@/constants/resume-data';
import { Github, Linkedin, Mail, Download, ArrowRight, ArrowUp, ArrowUpDown, ArrowDown } from 'lucide-react';
import { SectionWrapper } from '@/components/ui/section-wrapper';

export function HeroSection() {
  return (
    <SectionWrapper id="hero" className="bg-gradient-to-br from-primary/5 via-background to-accent/5 min-h-[calc(100vh-4rem)] flex items-center !py-0">
      <div className="container mx-auto max-w-screen-lg px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              Hi, I'm <span className="text-primary">{resumeData.name}</span>
            </h1>
            <p className="font-headline text-xl sm:text-2xl text-primary/80">
              {resumeData.jobTitle}
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              {resumeData.introduction}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button asChild variant="outline" size="lg" className="shadow-lg hover:shadow-accent/30 transition-shadow">
                <Link href="https://drive.google.com/file/d/1hDerw6BLrwKZ2Ok2RXmuzgtRyQ4lka8p/view?usp=share_link" target='_blank'>
                  <ArrowDown className="ml-2 h-5 w-5" /> Resume
                </Link>
              </Button>
            </div>
            <div className="flex justify-center md:justify-start space-x-4 pt-4">
              <Link href={resumeData.contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                <Button variant="ghost" size="icon" className="text-accent hover:text-primary">
                  <Github className="h-7 w-7" />
                </Button>
              </Link>
              <Link href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                 <Button variant="ghost" size="icon" className="text-accent hover:text-primary">
                  <Linkedin className="h-7 w-7" />
                </Button>
              </Link>
              <Link href={`mailto:${resumeData.contact.email}`} aria-label="Email">
                 <Button variant="ghost" size="icon" className="text-accent hover:text-primary">
                  <Mail className="h-7 w-7" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative group flex justify-center">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-full blur-lg opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <Image
              src={resumeData.profilePicture}
              alt={resumeData.name}
              width={300}
              height={300}
              priority
              className="rounded-full object-cover shadow-2xl border-4 border-background relative"
              data-ai-hint={resumeData.profilePictureAiHint}
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
