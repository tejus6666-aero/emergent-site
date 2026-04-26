import { useEffect } from 'react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, Rocket, Users, Lightbulb, TrendingUp, Shield, Globe } from 'lucide-react';

const CAREERS_HERO = 'https://images.pexels.com/photos/586092/pexels-photo-586092.jpeg?auto=compress&cs=tinysrgb&w=1920';
const NAUKRI_URL = 'https://www.naukri.com/aerodart-techno-solutions-jobs-careers-124067110-90';

const reasons = [
  {
    icon: Rocket,
    title: 'Fast-Paced Environment',
    description: 'Work at the cutting edge of aerospace manufacturing with rapid project cycles and real-world impact.',
  },
  {
    icon: Lightbulb,
    title: 'Modern Problem Solving',
    description: 'Tackle complex engineering challenges for some of India\'s most prestigious defence and aerospace programs.',
  },
  {
    icon: TrendingUp,
    title: 'Rapid Growth',
    description: 'Join a company that has grown from startup to key defence supplier in just five years. Your career grows with us.',
  },
  {
    icon: Users,
    title: 'Collaborative Culture',
    description: 'A lean, expert team where every member makes a tangible difference. No bureaucracy — just results.',
  },
  {
    icon: Shield,
    title: 'Defence & Aerospace Impact',
    description: 'Your work directly supports national defence and space programs. Contribute to projects that matter.',
  },
  {
    icon: Globe,
    title: 'Global Standards',
    description: 'Work with world-class tooling partners and international aerospace standards from day one.',
  },
];

export default function CareersPage() {
  useEffect(() => {
    document.title = 'Careers | AeroDart Techno Solutions';
  }, []);

  return (
    <main>
      {/* ===== HERO ===== */}
      <section
        data-testid="careers-hero"
        className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${CAREERS_HERO}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1B2A4A] via-[#1B2A4A]/70 to-[#1B2A4A]/30" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 w-full">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#4FC3F7] mb-3 font-body">
            Careers
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-white font-heading">
            Shape the Future of Aerospace
          </h1>
          <p className="text-base text-white/60 mt-4 max-w-lg font-body leading-relaxed">
            Join a dynamic, fast-paced team solving real-world engineering challenges for India's premier aerospace and defence organizations.
          </p>
        </div>
      </section>

      {/* ===== WHY ADTS ===== */}
      <section data-testid="careers-why" className="py-24 lg:py-32 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#4FC3F7] mb-4 font-body">
              Why ADTS
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#1B2A4A] font-heading">
              Why Work With Us
            </h2>
            <p className="text-[#64748B] mt-4 max-w-xl leading-relaxed text-sm font-body">
              At AeroDart, you are not just filling a role — you are building aerospace excellence from the ground up.
            </p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-0 mt-16 border-t border-l border-[#E2E8F0]">
            {reasons.map((reason, i) => {
              const Icon = reason.icon;
              return (
                <ScrollReveal key={reason.title} delay={i * 80} className="border-b border-r border-[#E2E8F0] p-8 lg:p-10 group transition-all duration-300 hover:bg-white hover:shadow-lg">
                  <div className="w-10 h-10 flex items-center justify-center border border-[#4FC3F7]/30 rounded-sm text-[#4FC3F7] group-hover:bg-[#4FC3F7] group-hover:text-white transition-colors duration-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-semibold text-[#1B2A4A] mt-5 font-heading group-hover:text-[#4FC3F7] transition-colors duration-300">
                    {reason.title}
                  </h3>
                  <p className="text-[#64748B] mt-2 leading-relaxed text-sm font-body">
                    {reason.description}
                  </p>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section data-testid="careers-cta" className="bg-[#1B2A4A] py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <ScrollReveal>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#4FC3F7] mb-4 font-body">
              Open Positions
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-heading max-w-2xl mx-auto">
              Ready to Make an Impact?
            </h2>
            <p className="text-white/50 mt-6 max-w-lg mx-auto leading-relaxed text-sm font-body">
              We are always looking for talented engineers, project managers, and aerospace professionals who share our passion for precision and excellence.
            </p>
            <div className="mt-10">
              <a
                href={NAUKRI_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="careers-naukri-link"
              >
                <Button className="bg-[#4FC3F7] text-[#1B2A4A] hover:bg-[#4FC3F7]/85 font-semibold px-10 py-6 text-base rounded-sm transition-transform duration-200 hover:-translate-y-0.5">
                  View Open Positions on Naukri <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
            <p className="text-white/30 text-xs mt-6 font-body">
              You can also reach out to us directly at careers@aerodart.in
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== CULTURE ===== */}
      <section data-testid="careers-culture" className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
            <ScrollReveal>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#4FC3F7] mb-4 font-body">
                Our Culture
              </p>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#1B2A4A] font-heading">
                Enterprise-Grade Problems, Startup-Speed Solutions
              </h2>
              <p className="text-[#64748B] mt-6 leading-relaxed font-body">
                At ADTS, we combine the rigour of aerospace engineering with the agility of a modern startup. Our team works directly with India's top defence and space organizations, solving real problems with real impact.
              </p>
              <p className="text-[#64748B] mt-4 leading-relaxed font-body">
                We believe in flat hierarchies, hands-on leadership, and giving every team member ownership of their work. If you thrive in environments where your contribution is visible and valued — you will feel at home here.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100} direction="right">
              <div className="space-y-6">
                {[
                  { num: '01', title: 'Direct Impact', desc: 'Work on projects that serve national defence and space programs.' },
                  { num: '02', title: 'Rapid Learning', desc: 'Exposure to cutting-edge tooling, Industry 4.0, and global standards.' },
                  { num: '03', title: 'Growth Path', desc: 'A company doubling year-over-year means your career trajectory is accelerated.' },
                ].map((item) => (
                  <div key={item.num} className="flex gap-5 p-6 border border-[#E2E8F0] rounded-sm hover:border-[#4FC3F7]/30 transition-colors duration-300">
                    <span className="text-3xl font-bold text-[#4FC3F7]/20 font-heading flex-shrink-0">
                      {item.num}
                    </span>
                    <div>
                      <h3 className="font-semibold text-[#1B2A4A] font-heading">{item.title}</h3>
                      <p className="text-[#64748B] text-sm mt-1 font-body">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
}
