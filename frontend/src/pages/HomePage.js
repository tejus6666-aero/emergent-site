import { useState, useEffect, useRef } from 'react';
import { Layers, Wrench, Cpu, Settings2, Cable, PackageCheck, ArrowRight, Check, Send, ChevronDown } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/ScrollReveal';
import { toast } from 'sonner';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const FORMSPREE_ID = 'manpzalb';

const solutions = [
  {
    title: 'Structural Assembly Solutions',
    description: 'Providing high-precision riveting, controlled torque, and specialized Aerospace Structural Assembly Solutions. We deliver the critical accuracy and reliability required for fastener integrity, joint fatigue resistance, and structural load path consistency to meet the most stringent aerospace tolerances and global certification standards.',
    icon: Layers,
    span: 'md:col-span-2',
  },
  {
    title: 'Tooling Solutions',
    description: 'Comprehensive hand, power, and specialized aerospace tooling sourced from world-leading manufacturers for maximum reliability.',
    icon: Wrench,
    span: '',
  },
  {
    title: 'Industry 4.0',
    description: 'Advancing aerospace manufacturing through Wireless Torque Integration and real-time Automated Tool Tracking. We provide the digital infrastructure necessary to eliminate FOD (Foreign Object Debris) risks while ensuring 100% fastener traceability in structural assembly.',
    icon: Cpu,
    span: '',
  },
  {
    title: 'Critical Tightening Applications',
    description: 'Torque-controlled fastening systems — calibrated, traceable, and fully compliant with international aerospace standards.',
    icon: Settings2,
    span: 'md:col-span-2',
  },
  {
    title: 'Crimping Solutions & Tools',
    description: 'High-precision crimping for aerospace-grade wiring and cable assemblies, certified for critical avionics and electrical systems.',
    icon: Cable,
    span: 'md:col-span-2',
  },
  {
    title: 'Specialized Tool Storage',
    description: 'Industry 4.0-compliant tool management with FOD-prevention control, shadow boards, and smart inventory tracking.',
    icon: PackageCheck,
    span: '',
  },
];

const stats = [
  { value: 5, suffix: '+', label: 'Years of Excellence' },
  { value: 50, suffix: '+', label: 'Projects Delivered' },
  { value: 7, suffix: '+', label: 'Strategic Partners' },
  { value: 100, suffix: '%', label: 'Client Satisfaction' },
];

function CountUp({ target, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let current = 0;
          const increment = target / 50;
          const interval = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(interval);
            } else {
              setCount(Math.floor(current));
            }
          }, 30);
        }
      },
      { threshold: 0.5 }
    );
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function HomePage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    document.title = 'AeroDart Techno Solutions | Aerospace Solutions';
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error('Please fill in all required fields');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      toast.error('Please enter a valid email address');
      return;
    }
    setSubmitting(true);
    try {
      if (BACKEND_URL) {
        const axios = (await import('axios')).default;
        await axios.post(`${BACKEND_URL}/api/contact`, form);
      } else if (FORMSPREE_ID) {
        const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify(form),
        });
        if (!res.ok) throw new Error('Submission failed');
      } else {
        throw new Error('No form endpoint configured');
      }
      toast.success("Message sent successfully! We'll be in touch.");
      setForm({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      toast.error('Something went wrong. Please try again.');
    }
    setSubmitting(false);
  };

  const scrollToSolutions = () => {
    document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' });
  };

  const updateField = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  return (
    <main>
      {/* ===== HERO ===== */}
      <section
        data-testid="hero-section"
        className="relative min-h-screen flex items-center overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/13316850/pexels-photo-13316850.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1B2A4A]/95 via-[#1B2A4A]/75 to-[#1B2A4A]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1B2A4A]/60 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 lg:py-40">
          <div className="max-w-2xl">
            <p className="text-sm sm:text-base font-bold uppercase tracking-[0.3em] text-[#4FC3F7] mb-6 font-body">
              AeroDart Techno Solutions
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-white leading-[0.95] font-heading">
              Where Precision Meets Performance — Aerospace Solutions That Deliver
            </h1>
            <p className="text-base lg:text-lg text-white/65 mt-8 leading-relaxed max-w-lg font-body">
              Aerospace-grade tooling, precision assembly systems, and Industry 4.0 solutions — trusted by India's premier defence and aerospace organizations.
            </p>
            <div className="flex flex-wrap gap-4 mt-10">
              <Button
                data-testid="hero-explore-btn"
                onClick={scrollToSolutions}
                className="bg-[#4FC3F7] text-[#1B2A4A] hover:bg-[#4FC3F7]/85 font-semibold px-8 py-6 text-sm rounded-sm transition-transform duration-200 hover:-translate-y-0.5"
              >
                Explore Solutions <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToSolutions}
          className="absolute bottom-16 left-1/2 -translate-x-1/2 z-10 animate-bounce"
          aria-label="Scroll down"
        >
          <ChevronDown className="h-6 w-6 text-white/40" />
        </button>

        {/* Angled divider for smooth transition */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg viewBox="0 0 1920 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block" preserveAspectRatio="none">
            <path d="M0 100V40C320 10 640 0 960 5C1280 10 1600 30 1920 50V100H0Z" fill="#F8FAFC"/>
          </svg>
        </div>
      </section>

      {/* ===== SOLUTIONS GRID ===== */}
      <section id="solutions" data-testid="solutions-section" className="py-24 lg:py-32 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#4FC3F7] mb-4 font-body">
              What We Do
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#1B2A4A] font-heading">
              Our Solutions
            </h2>
            <p className="text-[#64748B] mt-4 max-w-xl leading-relaxed text-sm font-body">
              Comprehensive aerospace solutions spanning precision assembly, advanced tooling, and smart digital manufacturing capabilities.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 mt-16 border-t border-l border-[#E2E8F0]">
            {solutions.map((sol, i) => {
              const Icon = sol.icon;
              return (
                <ScrollReveal
                  key={sol.title}
                  delay={i * 80}
                  className={`${sol.span} border-b border-r border-[#E2E8F0] p-8 lg:p-12 group transition-all duration-300 hover:bg-white hover:shadow-lg`}
                >
                  <div
                    data-testid={`solution-card-${i}`}
                    className="h-full"
                  >
                    <div className="w-11 h-11 flex items-center justify-center border border-[#4FC3F7]/30 rounded-sm text-[#4FC3F7] group-hover:bg-[#4FC3F7] group-hover:text-white transition-colors duration-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#1B2A4A] mt-6 font-heading group-hover:text-[#4FC3F7] transition-colors duration-300">
                      {sol.title}
                    </h3>
                    <p className="text-[#64748B] mt-3 leading-relaxed text-sm font-body">
                      {sol.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section data-testid="stats-section" className="bg-[#1B2A4A] py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-white font-heading">
                <CountUp target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-[#4FC3F7] text-xs font-bold uppercase tracking-[0.2em] mt-3 font-body">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CONTACT FORM ===== */}
      <section id="contact" data-testid="contact-section" className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
            <ScrollReveal>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#4FC3F7] mb-4 font-body">
                Get In Touch
              </p>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#1B2A4A] font-heading">
                Let's Discuss Your Requirements
              </h2>
              <p className="text-[#64748B] mt-4 leading-relaxed text-sm font-body">
                Ready to explore aerospace-grade solutions for your project? Fill out the form and our team will get back to you within 24 hours.
              </p>

              <div className="tracing-border mt-8">
                <div className="tracing-border-inner p-6 sm:p-8">
                  <form onSubmit={handleSubmit} data-testid="contact-form" className="space-y-5">
                    <div>
                      <Label htmlFor="name" className="text-[#1B2A4A] text-sm font-medium">
                        Name *
                      </Label>
                      <Input
                        id="name"
                        data-testid="contact-name-input"
                        value={form.name}
                        onChange={updateField('name')}
                        placeholder="Your full name"
                        className="mt-1.5 border-[#E2E8F0] focus:border-[#4FC3F7] rounded-sm"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-[#1B2A4A] text-sm font-medium">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        data-testid="contact-email-input"
                        value={form.email}
                        onChange={updateField('email')}
                        placeholder="your@email.com"
                        className="mt-1.5 border-[#E2E8F0] focus:border-[#4FC3F7] rounded-sm"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-[#1B2A4A] text-sm font-medium">
                        Phone{' '}
                        <span className="text-[#64748B] font-normal">(Optional)</span>
                      </Label>
                      <Input
                        id="phone"
                        data-testid="contact-phone-input"
                        value={form.phone}
                        onChange={updateField('phone')}
                        placeholder="+91 98765 43210"
                        className="mt-1.5 border-[#E2E8F0] focus:border-[#4FC3F7] rounded-sm"
                      />
                    </div>
                    <div>
                      <Label htmlFor="message" className="text-[#1B2A4A] text-sm font-medium">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        data-testid="contact-message-input"
                        value={form.message}
                        onChange={updateField('message')}
                        placeholder="Tell us about your requirements..."
                        rows={4}
                        className="mt-1.5 border-[#E2E8F0] focus:border-[#4FC3F7] rounded-sm resize-none"
                      />
                    </div>
                    <Button
                      type="submit"
                      data-testid="contact-submit-btn"
                      disabled={submitting}
                      className="bg-[#4FC3F7] text-[#1B2A4A] hover:bg-[#4FC3F7]/85 font-semibold px-8 py-5 rounded-sm w-full sm:w-auto transition-transform duration-200 hover:-translate-y-0.5"
                    >
                      {submitting ? 'Sending...' : 'Send Message'}{' '}
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150} className="flex flex-col justify-center">
              <h3 className="text-xl font-semibold text-[#1B2A4A] font-heading">
                Why Partner With ADTS?
              </h3>
              <ul className="mt-6 space-y-4">
                {[
                  'Aerospace-certified solutions & tooling',
                  'Trusted by HAL, ISRO, DRDO & Boeing',
                  '100% client satisfaction track record',
                  'End-to-end project support & delivery',
                  'Industry 4.0 compliant systems',
                  'Key supplier for H125 helicopters',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#4FC3F7]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-3 w-3 text-[#4FC3F7]" />
                    </div>
                    <span className="text-[#64748B] text-sm leading-relaxed font-body">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 pt-8 border-t border-[#E2E8F0]">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#4FC3F7] mb-4 font-body">
                  Reach Us Directly
                </p>
                <p className="text-[#64748B] text-sm font-body">sales@aerodart.in</p>
                <p className="text-[#64748B] text-sm mt-1 font-body">+91 7411174797</p>
                <p className="text-[#64748B] text-sm mt-1 font-body">Bangalore, India</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
}
