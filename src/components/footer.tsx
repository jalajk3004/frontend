'use client';

import React from 'react';
import type { ComponentProps, ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
  FrameIcon,
} from 'lucide-react';

interface FooterLink {
  title: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface FooterSection {
  label: string;
  links: FooterLink[];
}

const footerLinks: FooterSection[] = [
  {
    label: 'Product',
    links: [
      { title: 'Features', href: '#features' },
      { title: 'Pricing', href: '#pricing' },
      { title: 'Testimonials', href: '#testimonials' },
      { title: 'Integrations', href: '#integrations' },
    ],
  },
  {
    label: 'Company',
    links: [
      { title: 'About', href: '/about' },
      { title: 'Careers', href: '/careers' },
      { title: 'Privacy Policy', href: '/privacy' },
      { title: 'Terms of Service', href: '/terms' },
    ],
  },
  {
    label: 'Resources',
    links: [
      { title: 'Blog', href: '/blog' },
      { title: 'Changelog', href: '/changelog' },
      { title: 'Help Center', href: '/help' },
      { title: 'Brand Kit', href: '/brand' },
    ],
  },
  {
    label: 'Social',
    links: [
      { title: 'Facebook', href: '#', icon: FacebookIcon },
      { title: 'Instagram', href: '#', icon: InstagramIcon },
      { title: 'YouTube', href: '#', icon: YoutubeIcon },
      { title: 'LinkedIn', href: '#', icon: LinkedinIcon },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative mx-auto w-full max-w-7xl rounded-t-3xl border-t border-white/10 bg-white/5 px-6 py-12 backdrop-blur-xl lg:py-16">
      {/* Top glow line */}
      <div className="absolute left-1/2 top-0 h-px w-1/3 -translate-x-1/2 bg-white/30 blur" />

      <div className="grid gap-10 xl:grid-cols-3">
        {/* Brand */}
        <AnimatedContainer className="space-y-4">
          <FrameIcon className="h-8 w-8 text-white" />
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} Raftra. All rights reserved.
          </p>
        </AnimatedContainer>

        {/* Links */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 xl:col-span-2">
          {footerLinks.map((section, index) => (
            <AnimatedContainer
              key={section.label}
              delay={0.15 + index * 0.1}
            >
              <div>
                <h3 className="text-xs font-medium uppercase tracking-wider text-white/80">
                  {section.label}
                </h3>

                <ul className="mt-4 space-y-2 text-sm text-white/60">
                  {section.links.map((link) => (
                    <li key={link.title}>
                      <a
                        href={link.href}
                        className="inline-flex items-center gap-1 transition-colors hover:text-white"
                      >
                        {link.icon && <link.icon className="h-4 w-4" />}
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedContainer>
          ))}
        </div>
      </div>
    </footer>
  );
}

type ViewAnimationProps = {
  delay?: number;
  className?: ComponentProps<typeof motion.div>['className'];
  children: ReactNode;
};

function AnimatedContainer({
  className,
  delay = 0.1,
  children,
}: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -8, filter: 'blur(4px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
