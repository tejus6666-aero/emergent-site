import { useEffect } from 'react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Target, Clock, Award, Users, ArrowRight } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const ABOUT_HERO = 'https://images.unsplash.com/photo-1712179355181-cd9add37f76a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA3MDR8MHwxfHNlYXJjaHwxfHxhZXJvc3BhY2UlMjBtYW51ZmFjdHVyaW5nfGVufDB8fHx8MTc3NzE4NTIxOXww&ixlib=rb-4.1.0&q=85&w=1920';

const milestones = [
  {
    year: '2020',
    title: 'Company Founded',
    description: 'AeroDart Techno Solutions established by Tejus Divakar to serve the Indian aerospace and defence industry with world-class solutions.',
  },
  {
    year: '2022',
    title: 'HAL Partnership',
    description: 'Secured strategic partnership with Hindustan Aeronautics Limited for advanced tooling and structural assembly solutions.',
  },
  {
    year: '2023',
    title: 'ISRO Collaboration',
    description: 'Began supplying critical aerospace components and specialized tooling solutions to the Indian Space Research Organisation.',
  },
  {
    year: '2024',
    title: 'DRDO Partnership',
    description: 'Expanded operations with the Defence Research and Development Organisation for defence-grade tooling and tightening solutions.',
  },
  {
    year: 'Present',
    title: 'H125 Key Supplier',
    description: 'Established as key supplier for the H125 helicopter program, delivering mission-critical tooling and assembly solutions.',
  },
];

const values = [
  {
    icon: Target,
    title: 'Timely Quality',
    description: 'Delivering aerospace-grade quality on every project, every time. Zero-compromise on precision and standards.',
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description: 'Commitment to project timelines with reliable delivery schedules. Your operations depend on us.',
  },
  {
    icon: Award,
    title: 'Performance',
    description: 'Solutions engineered for peak performance in the most demanding aerospace and defence environments.',
  },
  {
    icon: Users,
    title: '100% Satisfaction',
    description: 'Client satisfaction is not a target — it is our standard. Every partnership is built on trust and results.',
  },
];

const customers = ['HAL', 'DRDO', 'ISRO', 'BEL', 'Boeing', 'Tata Advanced Systems', 'Magellan Aerospace'];
const partners = ['FACOM', 'PROTO', 'Aero-Industrial', 'USATCO', 'Stanley', 'Black & Decker', 'e-tech', 'Elair Corporation'];

export default function AboutPage() {
  useEffect(() => {
    document.title = 'About Us | AeroDart Techno Solutions';
  }, []);

  return (
    <main>
      {/* ===== HERO ===== */}
      <section
        data-testid="about-hero"
        className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${ABOUT_HERO}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1B2A4A] via-[#1B2A4A]/70 to-[#1B2A4A]/30" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 w-full">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#4FC3F7] mb-3 font-body">
            About Us
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-white font-heading">
            Building Aerospace Excellence
          </h1>
        </div>
      </section>

      {/* ===== COMPANY STORY ===== */}
      <section data-testid="about-story" className="py-24 lg:py-32 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
            <ScrollReveal>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#4FC3F7] mb-4 font-body">
                Our Story
              </p>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#1B2A4A] font-heading">
                Five Years of Aerospace Innovation
              </h2>
              <p className="text-[#64748B] mt-6 leading-relaxed font-body">
                Founded in 2020, AeroDart Techno Solutions has rapidly grown into a trusted name in India's aerospace and defence sector. From our inception, we set out with a clear mission: to provide world-class, precision-engineered solutions that meet the exacting standards of aerospace manufacturing.
              </p>
              <p className="text-[#64748B] mt-4 leading-relaxed font-body">
                Over the last five years, we have secured major contracts with India's premier defence and aerospace organisations. Our commitment to timely quality, performance, and 100% client satisfaction has made us a preferred partner for mission-critical projects across the industry.
              </p>
              <p className="text-[#64748B] mt-4 leading-relaxed font-body">
                Today, we are proud to be key suppliers for the H125 helicopter program and trusted partners of HAL, ISRO, DRDO, Boeing, and more.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100} direction="right">
              <div className="bg-[#1B2A4A] p-10 lg:p-14 rounded-sm">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#4FC3F7] mb-6 font-body">
                  Founded by
                </p>
                <h3 className="text-2xl font-bold text-white font-heading">
                  Tejus Divakar
                </h3>
                <p className="text-white/60 mt-4 leading-relaxed text-sm font-body">
                  An aerospace industry professional with over a decade of experience in precision manufacturing, tooling, and defence-sector operations. His vision for ADTS was to bridge the gap between global aerospace standards and Indian manufacturing capabilities.
                </p>
                <Separator className="bg-white/10 my-8" />
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-2xl font-bold text-white font-heading">10+</div>
                    <div className="text-xs text-[#4FC3F7] uppercase tracking-widest mt-1 font-body">Years in Aerospace</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white font-heading">2020</div>
                    <div className="text-xs text-[#4FC3F7] uppercase tracking-widest mt-1 font-body">ADTS Founded</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== VALUES ===== */}
      <section data-testid="about-values" className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#4FC3F7] mb-4 font-body">
              What Drives Us
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#1B2A4A] font-heading">
              Our Values
            </h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 mt-16 border-t border-l border-[#E2E8F0]">
            {values.map((val, i) => {
              const Icon = val.icon;
              return (
                <ScrollReveal key={val.title} delay={i * 80} className="border-b border-r border-[#E2E8F0] p-8 group transition-all duration-300 hover:bg-[#F8FAFC]">
                  <div className="w-10 h-10 flex items-center justify-center border border-[#4FC3F7]/30 rounded-sm text-[#4FC3F7]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-semibold text-[#1B2A4A] mt-5 font-heading">{val.title}</h3>
                  <p className="text-[#64748B] mt-2 leading-relaxed text-sm font-body">{val.description}</p>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== TIMELINE ===== */}
      <section data-testid="about-timeline" className="py-24 lg:py-32 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#4FC3F7] mb-4 font-body">
              Our Journey
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#1B2A4A] font-heading">
              Key Milestones
            </h2>
          </ScrollReveal>

          <div className="relative mt-16 max-w-2xl">
            {/* Vertical line */}
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-[#E2E8F0]" />

            {milestones.map((ms, i) => (
              <ScrollReveal key={i} delay={i * 100} className="relative pl-10 pb-12 last:pb-0">
                {/* Dot */}
                <div className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full bg-[#4FC3F7] ring-4 ring-[#4FC3F7]/15" />
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#4FC3F7] font-body">
                  {ms.year}
                </div>
                <h3 className="text-lg font-semibold text-[#1B2A4A] mt-1.5 font-heading">
                  {ms.title}
                </h3>
                <p className="text-[#64748B] mt-2 leading-relaxed text-sm font-body">
                  {ms.description}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CUSTOMERS ===== */}
      <section data-testid="about-customers" className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#4FC3F7] mb-4 font-body">
              Trusted By
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#1B2A4A] font-heading">
              Our Customers
            </h2>
            <p className="text-[#64748B] mt-4 max-w-xl leading-relaxed text-sm font-body">
              Serving India's premier aerospace and defence organizations with precision-engineered solutions.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-0 mt-12 border-t border-l border-[#E2E8F0]">
            {customers.map((name, i) => (
              <ScrollReveal key={name} delay={i * 60} className="border-b border-r border-[#E2E8F0] flex items-center justify-center p-8 lg:p-10">
                <span className="font-bold text-lg md:text-xl uppercase tracking-[0.15em] text-slate-300 font-heading text-center select-none">
                  {name}
                </span>
              </ScrollReveal>
            ))}
            {/* Fill remaining cell for even grid */}
            <div className="border-b border-r border-[#E2E8F0] hidden lg:block" />
          </div>
        </div>
      </section>

      {/* ===== PARTNERS ===== */}
      <section data-testid="about-partners" className="py-24 lg:py-32 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#4FC3F7] mb-4 font-body">
              Our Partners
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#1B2A4A] font-heading">
              World-Class Partnerships
            </h2>
            <p className="text-[#64748B] mt-4 max-w-xl leading-relaxed text-sm font-body">
              Partnered with global leaders in aerospace tooling and manufacturing to deliver best-in-class solutions.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-0 mt-12 border-t border-l border-[#E2E8F0]">
            {partners.map((name, i) => (
              <ScrollReveal key={name} delay={i * 60} className="border-b border-r border-[#E2E8F0] flex items-center justify-center p-8 lg:p-10">
                <span className="font-bold text-lg md:text-xl uppercase tracking-[0.15em] text-slate-300 font-heading text-center select-none">
                  {name}
                </span>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
