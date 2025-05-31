"use client";

import React, { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface SectionWrapperProps {
  id: string;
  className?: string;
  children: React.ReactNode;
  title?: string;
}

export function SectionWrapper({ id, className, children, title }: SectionWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={cn(
        'py-16 md:py-24',
        'transition-opacity duration-1000 ease-out transform',
        isVisible ? 'opacity-100 translate-y-0 animate-fade-in' : 'opacity-0 translate-y-10',
        className
      )}
    >
      <div className="container mx-auto max-w-screen-lg px-4 md:px-6">
        {title && (
          <h2 className="mb-10 md:mb-12 text-center font-headline text-3xl md:text-4xl font-semibold text-primary">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
}
