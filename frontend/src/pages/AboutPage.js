import { useEffect } from 'react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Target, Clock, Award, Users } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const ABOUT_HERO = 'https://images.unsplash.com/photo-1712179355181-cd9add37f76a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA3MDR8MHwxfHNlYXJjaHwxfHxhZXJvc3BhY2UlMjBtYW51ZmFjdHVyaW5nfGVufDB8fHx8MTc3NzE4NTIxOXww&ixlib=rb-4.1.0&q=85&w=1920';

const milestones = [
  { year: '2020', title: 'The Foundation', description: 'ADTS was established with a singular focus: to equip the domestic aerospace and defense sectors with world-class engineering solutions and precision-grade tooling.' },
  { year: '2022', title: 'Institutional Integration', description: 'Solidified our presence within the defense ecosystem through strategic partnerships, providing specialized assembly tools for major aerospace manufacturing projects.' },
  { year: '2023', title: 'Space Exploration Support', description: 'Expanded our technical footprint into the space sector, delivering critical components and highly specialized tooling for high-stakes mission architectures.' },
  { year: '2024', title: 'Advanced Defense Operations', description: 'Deepened our collaboration with premier research and development organizations, specializing in defense-grade tightening solutions and heavy-duty industrial tooling.' },
  { year: 'Now', title: 'Advanced Technology & Process Innovation', description: 'We are currently focused on integrating Advanced Industry 4.0 solutions into the production line. By implementing smart systems and automated tool controls, we are simplifying complex manufacturing processes — making high-precision assembly faster, more efficient, and future-ready for our Tier 1 clients.' },
];

const values = [
  { icon: Target, title: 'Precision-Driven Quality', description: 'Adhering to rigorous aerospace standards on every engagement. We operate with a zero-compromise approach to engineering tolerances and material integrity.' },
  { icon: Clock, title: 'Schedule Reliability', description: 'A steadfast commitment to project timelines. We treat delivery schedules as mission-critical, ensuring reliable execution without operational delays.' },
  { icon: Award, title: 'Operational Performance', description: 'Mechanical solutions engineered for peak durability and functionality, designed to thrive in the most demanding industrial and defense environments.' },
  { icon: Users, title: 'Excellence as Standard', description: 'For us, total client satisfaction is not a goal — it is the baseline. We build long-term trust through consistent, high-specification results.' },
];

const customers = ['HAL', 'ISRO', 'BEL', 'Tata Advanced Systems', 'Magellan Aerospace', 'Airbus Helicopters', 'Dynamatic Technologies', 'And Many More'];
const partners = ['FACOM', 'PROTO', 'Aero-Industrial', 'USATCO', 'Stanley', 'Black & Decker', 'e-tech', 'Elair Corporation'];

export default function AboutPage() {
  useEffect(() => {
    document.title = 'About Us | AeroDart Techno Solutions';
  }, []);

  return (
    <main>
      {/* ===== HERO ===== */}
      <section data-testid="about-hero" className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${ABOUT_HERO}')` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1B2A4A] via-[#1B2A4A]/70 to-[#1B2A4A]/30" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 w-full">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#4FC3F7] mb-3 font-body">About Us</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-white font-heading">
            Building Aerospace Excellence
          </h1>
        </div>
      </section>

      {/* ===== STORY + FOUNDER ===== */}
      <section data-testid="about-story" className="py-20 lg:py-28 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
            <ScrollReveal>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#4FC3F7] mb-4 font-body">Our Story</p>
              <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-[#1B2A4A] font-heading">
                Five Years of Aerospace Excellence
              </h2>
              <p className="text-[#64748B] mt-5 leading-relaxed font-body">
                Founded in 2020, AeroDart Techno Solutions (ADTS) has rapidly ascended as a cornerstone of precision engineering in India's aerospace and defense landscape. From our inception, we have remained steadfast in a single mission: delivering world-class, high-performance tooling and solutions that exceed the rigorous demands of modern aviation manufacturing.
              </p>
              <p className="text-[#64748B] mt-4 leading-relaxed font-body">
                Over the past half-decade, we have solidified our reputation by securing major contracts with Tier 1 clients and major aerospace manufacturers. Our unwavering commitment to quality, technical precision, and a 100% client satisfaction track record has established ADTS as a preferred partner for mission-critical defense and space programs.
              </p>
              <p className="text-[#64748B] mt-4 leading-relaxed font-body">
                Today, we are proud to serve as a strategic supplier for leading global light-utility helicopter platforms and a trusted technical partner to the industry's most prominent institutional and commercial leaders. Our journey is defined by innovation, and our future is built on the success of the high-stakes projects we support.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100} direction="right">
              <div className="bg-[#1B2A4A] p-8 lg:p-12 rounded-sm">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#4FC3F7] mb-5 font-body">Founded By</p>
                <h3 className="text-2xl font-bold text-white font-heading">Tejus Divakar</h3>
                <p className="text-[#4FC3F7] text-sm font-medium mt-1 font-body">Founder & Proprietor</p>
                <p className="text-white/60 mt-4 leading-relaxed text-sm font-body">
                  A Mechanical Engineer with over a decade of dedicated experience in the aerospace and defense sectors. Tejus founded ADTS with a clear, practical objective: to integrate world-class precision manufacturing standards with robust Indian engineering capabilities. His approach combines technical expertise with a deep understanding of complex tooling requirements, ensuring that every project meets the rigorous demands of major aerospace manufacturers and Tier 1 defense clients.
                </p>
                <Separator className="bg-white/10 my-6" />
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

      {/* ===== TIMELINE (horizontal cards) ===== */}
      <section data-testid="about-timeline" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-xl mx-auto mb-14">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#4FC3F7] mb-4 font-body">Our Journey</p>
              <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-[#1B2A4A] font-heading">Strategic Evolution</h2>
            </div>
          </ScrollReveal>

          {/* Horizontal timeline line + cards */}
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-[22px] left-0 right-0 h-px bg-[#E2E8F0]" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
              {milestones.map((ms, i) => (
                <ScrollReveal key={i} delay={i * 100}>
                  <div className="relative pt-10 lg:pt-12">
                    {/* Dot */}
                    <div className="hidden lg:block absolute top-[15px] left-1/2 -translate-x-1/2 w-[14px] h-[14px] rounded-full bg-[#4FC3F7] ring-4 ring-[#4FC3F7]/15 z-10" />
                    <div className="border border-[#E2E8F0] rounded-sm p-5 hover:border-[#4FC3F7]/30 hover:shadow-md transition-all duration-300 h-full">
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#4FC3F7] font-body">{ms.year}</span>
                      <h3 className="text-base font-semibold text-[#1B2A4A] mt-2 font-heading">{ms.title}</h3>
                      <p className="text-[#64748B] mt-2 text-sm leading-relaxed font-body">{ms.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== VALUES ===== */}
      <section data-testid="about-values" className="py-20 lg:py-28 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-xl mx-auto mb-14">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#4FC3F7] mb-4 font-body">What Drives Us</p>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#1B2A4A] font-heading">Our Values</h2>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, i) => {
              const Icon = val.icon;
              return (
                <ScrollReveal key={val.title} delay={i * 80}>
                  <div className="bg-white border border-[#E2E8F0] rounded-sm p-7 group transition-all duration-300 hover:border-[#4FC3F7]/30 hover:shadow-md h-full">
                    <div className="w-10 h-10 flex items-center justify-center border border-[#4FC3F7]/30 rounded-sm text-[#4FC3F7] group-hover:bg-[#4FC3F7] group-hover:text-white transition-colors duration-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-base font-semibold text-[#1B2A4A] mt-5 font-heading">{val.title}</h3>
                    <p className="text-[#64748B] mt-2 leading-relaxed text-sm font-body">{val.description}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== TRUSTED NETWORK (Customers + Partners combined) ===== */}
      <section data-testid="about-trusted" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-xl mx-auto mb-14">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#4FC3F7] mb-4 font-body">Trusted Network</p>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#1B2A4A] font-heading">
                Customers & Partners
              </h2>
              <p className="text-[#64748B] mt-4 leading-relaxed text-sm font-body">
                Serving India's premier aerospace organizations and partnered with global leaders in tooling and manufacturing.
              </p>
            </div>
          </ScrollReveal>

          {/* Customers */}
          <ScrollReveal>
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#1B2A4A]/40 mb-5 font-body">Our Customers</p>
          </ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-14">
            {customers.map((name, i) => (
              <ScrollReveal key={name} delay={i * 40}>
                <div className="flex items-center justify-center p-6 lg:p-8 border border-[#E2E8F0] rounded-sm hover:border-[#4FC3F7]/30 transition-colors duration-300">
                  <span className="font-bold text-sm lg:text-base uppercase tracking-[0.08em] text-slate-300 font-heading text-center select-none">
                    {name}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Partners */}
          <ScrollReveal>
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#1B2A4A]/40 mb-5 font-body">Our Partners</p>
          </ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {partners.map((name, i) => (
              <ScrollReveal key={name} delay={i * 40}>
                <div className="flex items-center justify-center p-6 lg:p-8 border border-[#E2E8F0] rounded-sm hover:border-[#4FC3F7]/30 transition-colors duration-300">
                  <span className="font-bold text-sm lg:text-base uppercase tracking-[0.08em] text-slate-300 font-heading text-center select-none">
                    {name}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
