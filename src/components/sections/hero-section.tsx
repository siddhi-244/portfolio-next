import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { resumeData } from '@/constants/resume-data';
import { Github, Linkedin, Mail, Download, ArrowRight, ArrowUp, ArrowUpDown, ArrowDown, Twitter } from 'lucide-react';
import { SectionWrapper } from '@/components/ui/section-wrapper';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="lg" className="shadow-lg hover:shadow-accent/30 transition-shadow">
                    <ArrowDown className="mr-2 h-5 w-5" /> Download Resume
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  {resumeData.resumes.map((resume, index) => (
                    <DropdownMenuItem key={index} asChild>
                      <Link href={resume.url} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                        <Download className="mr-2 h-4 w-4" />
                        <div className="flex flex-col">
                          <span className="font-medium">{resume.name}</span>
                          <span className="text-xs text-muted-foreground">{resume.description}</span>
                        </div>
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
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
              <Link href={resumeData.contact.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter Profile">
                 <Button variant="ghost" size="icon" className="text-accent hover:text-primary">
                  <Twitter className="h-7 w-7" />
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
