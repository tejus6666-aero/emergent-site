# AeroDart Techno Solutions (ADTS) - Landing Page PRD

## Original Problem Statement
Build a professional landing page for AeroDart Techno Solutions (aerodart.in) - an aerospace company. Multi-page site with landing page (hero, 6 solutions, contact form), About Us page (customers, partners, timeline, founder), and Careers page (Naukri link).

## Architecture
- **Frontend**: React 19 + Tailwind CSS + Shadcn/UI components
- **Backend**: FastAPI + MongoDB (contact form storage)
- **Routing**: React Router (/, /about, /careers)
- **Animations**: Custom IntersectionObserver-based ScrollReveal
- **Design**: Light theme, Navy (#1B2A4A) + Sky Blue (#4FC3F7), Cabinet Grotesk + Satoshi fonts

## User Personas
- **Prospective clients**: Defence/aerospace orgs looking for tooling & assembly solutions
- **Job seekers**: Engineers/professionals exploring careers at ADTS
- **Partners**: Tooling manufacturers evaluating partnership

## Core Requirements (Static)
- Professional aerospace landing page with scroll animations
- 6 solution sections in Tetris-style grid
- Contact form for lead collection (stored in MongoDB)
- About Us with customers, partners, timeline, founder
- Careers page with Naukri job listings link

## What's Been Implemented (Dec 2025)
- [x] Hero section with background image, tagline, CTA
- [x] Solutions grid (6 cards) with border-style Tetris layout
- [x] Contact form (Name, Email, Phone, Message) with backend API
- [x] Stats section (animated counters)
- [x] About page: story, founder, values, timeline, customers, partners
- [x] Careers page: hero, reasons to join, Naukri CTA, culture section
- [x] Glass navbar with mobile hamburger menu
- [x] Dark navy footer
- [x] Scroll reveal animations
- [x] Backend API: POST /api/contact, GET /api/contacts

## Prioritized Backlog
### P0 (Critical) - DONE
- All pages implemented and tested

### P1 (Important)
- Admin dashboard to view/manage contact submissions
- SEO meta tags and Open Graph images
- Google Analytics integration

### P2 (Nice to Have)
- Blog/News section
- Individual solution detail pages
- Testimonials section
- Live chat widget
- Multi-language support (Hindi)

## Next Tasks
1. Add admin panel for contact form submissions
2. SEO optimization (meta tags, sitemap, robots.txt)
3. Performance optimization (image lazy loading, compression)
4. Add individual solution detail pages with more content
