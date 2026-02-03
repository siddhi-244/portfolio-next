import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from "@/components/ui/card";
import { resumeData } from '@/constants/resume-data';
import { Github, Linkedin, Mail, Twitter, MapPin, Send } from "lucide-react";
import { SectionWrapper } from '@/components/ui/section-wrapper';

const socialLinks = [
  { name: "GitHub", href: resumeData.contact.github, icon: Github, color: "hover:bg-gray-800 hover:text-white" },
  { name: "LinkedIn", href: resumeData.contact.linkedin, icon: Linkedin, color: "hover:bg-blue-600 hover:text-white" },
  { name: "Twitter", href: resumeData.contact.twitter, icon: Twitter, color: "hover:bg-sky-500 hover:text-white" },
];

export function ContactInformation() {
  return (
    <SectionWrapper id="contact" title="Get In Touch" className="bg-gradient-to-br from-accent/5 via-background to-primary/5">
      <div className="max-w-4xl mx-auto">
        <p className="text-center mb-10 text-lg text-foreground/80 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of something amazing. Feel free to reach out!
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Contact Card */}
          <Card className="shadow-xl bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20 overflow-hidden">
            <CardContent className="p-8 flex flex-col justify-center h-full">
              <div className="space-y-4">
                <h3 className="font-headline text-2xl font-bold text-primary">Let's Connect</h3>
                <p className="text-foreground/70">
                  Whether you have a question, want to collaborate, or just want to say hi — my inbox is always open!
                </p>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>Boston, MA</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Card */}
          <Card className="shadow-xl bg-card">
            <CardContent className="p-8 space-y-6">
              <div className="space-y-2 text-center">
                <h3 className="font-headline text-xl font-semibold text-primary">{resumeData.name}</h3>
                <p className="text-muted-foreground">{resumeData.jobTitle}</p>
              </div>

              <Button asChild size="lg" className="w-full bg-primary hover:bg-primary/90 shadow-lg group">
                <Link href={`mailto:${resumeData.contact.email}`}>
                  <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" /> 
                  Send an Email
                </Link>
              </Button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-border" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground">Or connect via</span>
                </div>
              </div>

              <div className="flex justify-center gap-3">
                {socialLinks.map((social) => (
                  <Link 
                    key={social.name} 
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label={`${social.name} Profile`}
                  >
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className={`rounded-full w-12 h-12 transition-all duration-300 ${social.color}`}
                    >
                      <social.icon className="h-5 w-5" />
                    </Button>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </SectionWrapper>
  );
}
