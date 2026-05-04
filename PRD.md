# Product Requirements Document (PRD)
## Neo-Brutalism Portfolio Website

---

### 1. Overview

#### 1.1 Product Name
Neo-Brutalism Portfolio

#### 1.2 Product Description
A bold and modern portfolio website featuring a neo-brutalism design style, built with Next.js 14, Tailwind CSS, Supabase, Prisma, and Framer Motion. The website showcases projects, about information, and provides a contact form for potential clients or employers.

#### 1.3 Goals
- Create a visually striking portfolio that stands out with neo-brutalism aesthetics
- Provide a smooth user experience with fast loading times and responsive design
- Enable easy content management through database integration
- Showcase technical skills through modern web technologies

#### 1.4 Target Audience
- Potential employers
- Clients seeking web development services
- Fellow developers and designers
- Recruiters

---

### 2. Features

#### 2.1 Core Features

##### 2.1.1 Home Page
- **Hero Section**: Bold introduction with background image and animated text
- **Featured Projects**: Display 3-6 highlighted projects with thumbnails
- **Quick Links**: Navigation to About, Projects, and Contact sections
- **Call-to-Action**: Prominent buttons to view work or contact

##### 2.1.2 About Page
- **Personal Introduction**: Bio and professional summary
- **Skills Section**: Technical skills displayed in a visually appealing way
- **Experience Timeline**: Work history and education
- **Download Resume**: Option to download CV/Resume as PDF
- **Personal Interests**: Hobbies and interests section

##### 2.1.3 Projects Page
- **Project Grid**: Display all projects in a grid layout
- **Project Cards**: Each card shows thumbnail, title, description, and tags
- **Filter System**: Filter projects by category/technology
- **Project Details Modal/Page**: Click to view full project details
- **Live Demo & Source Links**: Links to live site and GitHub repository

##### 2.1.4 Contact Page
- **Contact Form**: Name, email, subject, and message fields
- **Form Validation**: Client-side validation before submission
- **Database Storage**: Save submissions to Supabase database
- **Social Media Links**: Links to GitHub, LinkedIn, Twitter, etc.
- **Email Address**: Display contact email
- **Location**: Optional location/city display

##### 2.1.5 Navigation
- **Sticky Navbar**: Persistent navigation across all pages
- **Responsive Menu**: Hamburger menu for mobile devices
- **Active State**: Highlight current page in navigation
- **Smooth Scrolling**: Smooth scroll to sections on same page

##### 2.1.6 Footer
- **Copyright Information**
- **Social Media Icons**
- **Quick Links**
- **Back to Top Button**

#### 2.2 Technical Features

##### 2.2.1 Performance
- Server-side rendering with Next.js
- Image optimization
- Code splitting
- Lazy loading for images and components

##### 2.2.2 SEO
- Meta tags for each page
- Open Graph tags for social sharing
- Sitemap generation
- robots.txt configuration

##### 2.2.3 Accessibility
- WCAG 2.1 AA compliance
- Keyboard navigation support
- Screen reader compatibility
- Proper heading hierarchy
- Alt text for images

##### 2.2.4 Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly interactions
- Adaptive layouts

---

### 3. Design Requirements

#### 3.1 Visual Style
- **Neo-Brutalism Aesthetic**: 
  - Bold, vibrant colors (yellow, blue, pink, green, purple, orange)
  - Thick black borders (2-4px)
  - Hard shadows (no blur)
  - Geometric shapes
  - Raw, unpolished look
  
#### 3.2 Color Palette
```
Primary Colors:
- Neo Yellow: #FFE66D
- Neo Blue: #4CC9F0
- Neo Pink: #F72585
- Neo Green: #70E000
- Neo Purple: #7209B7
- Neo Orange: #FF9E00

Neutral Colors:
- White: #FFFFFF
- Black: #000000
- Light Gray: #F8F9FA
- Dark Gray: #212529
```

#### 3.3 Typography
- **Headings**: Bold, uppercase fonts (e.g., Archivo, Syne)
- **Body**: Clean, readable sans-serif (e.g., Inter, DM Sans)
- **Font Sizes**: 
  - H1: 3-4rem
  - H2: 2-2.5rem
  - H3: 1.5-1.75rem
  - Body: 1rem

#### 3.4 Animations
- Built with Framer Motion
- Hover effects on buttons and cards
- Page transition animations
- Scroll-triggered animations
- Loading states and skeletons

---

### 4. Technical Specifications

#### 4.1 Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL (Supabase)
- **ORM**: Prisma
- **Backend Services**: Supabase
- **Animations**: Framer Motion
- **Deployment**: Vercel

#### 4.2 Database Schema

##### Project Model
```prisma
model Project {
  id          String   @id @default(uuid())
  title       String
  description String
  imageUrl    String
  liveUrl     String?
  githubUrl   String?
  tags        String[]
  featured    Boolean  @default(false)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}
```

##### Contact Model
```prisma
model Contact {
  id        String   @id @default(uuid())
  name      String
  email     String
  subject   String
  message   String
  createdAt DateTime @default(now())
}
```

#### 4.3 Environment Variables
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
DATABASE_URL=your_database_url
```

#### 4.4 File Structure
```
portfolio-neobrutalism/
├── prisma/
│   └── schema.prisma
├── public/
│   ├── images/
│   │   ├── hero-home.jpg
│   │   ├── hero-about.jpg
│   │   ├── hero-projects.jpg
│   │   └── hero-contact.jpg
│   └── resume.pdf
├── src/
│   ├── app/
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── projects/
│   │   │   └── page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   └── Input.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   └── ProjectCard.tsx
│   └── lib/
│       ├── prisma.ts
│       └── supabase.ts
├── .env.example
├── next.config.js
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

---

### 5. User Stories

#### 5.1 As a Visitor
- I want to see an impressive homepage that immediately captures my attention
- I want to easily navigate between different sections of the portfolio
- I want to view detailed information about completed projects
- I want to filter projects by technology or category
- I want to contact the portfolio owner easily
- I want to access the site from any device (mobile, tablet, desktop)

#### 5.2 As the Portfolio Owner
- I want to easily update my project information through a database
- I want to receive and store contact form submissions
- I want to showcase my technical skills effectively
- I want the site to load quickly for better user experience
- I want the site to be SEO-friendly for better visibility

---

### 6. Success Metrics

#### 6.1 Performance Metrics
- Page load time: < 3 seconds
- First Contentful Paint (FCP): < 1.5 seconds
- Time to Interactive (TTI): < 3.5 seconds
- Lighthouse score: > 90

#### 6.2 User Engagement Metrics
- Bounce rate: < 40%
- Average session duration: > 2 minutes
- Pages per session: > 3
- Contact form submission rate: > 5%

#### 6.3 Technical Metrics
- 100% mobile responsiveness
- WCAG 2.1 AA accessibility compliance
- Zero critical bugs
- 99.9% uptime

---

### 7. Timeline & Milestones

#### Phase 1: Setup & Foundation (Week 1)
- [ ] Project initialization
- [ ] Environment setup
- [ ] Database schema design
- [ ] Basic component structure
- [ ] Tailwind configuration

#### Phase 2: Core Development (Week 2-3)
- [ ] Home page implementation
- [ ] About page implementation
- [ ] Projects page implementation
- [ ] Contact page implementation
- [ ] Navigation and footer

#### Phase 3: Polish & Testing (Week 4)
- [ ] Animations and transitions
- [ ] Responsive design testing
- [ ] Performance optimization
- [ ] Accessibility testing
- [ ] Bug fixes

#### Phase 4: Deployment (Week 5)
- [ ] Production build
- [ ] Deployment to Vercel
- [ ] Domain configuration
- [ ] Final testing
- [ ] Launch

---

### 8. Risks & Mitigation

| Risk | Impact | Probability | Mitigation |
|------|--------|-------------|------------|
| Database connection issues | High | Low | Use environment variables, implement error handling |
| Performance degradation | Medium | Medium | Regular performance testing, optimize images |
| Browser compatibility | Medium | Low | Test on multiple browsers, use polyfills if needed |
| Content updates | Low | High | Design flexible components, document update process |

---

### 9. Future Enhancements

#### Phase 2 Features
- Blog section for articles and tutorials
- Dark/Light mode toggle
- Multi-language support
- Analytics dashboard
- Admin panel for content management
- Project case studies with detailed write-ups
- Testimonials section
- Integration with GitHub API for automatic project updates

---

### 10. Approval

| Role | Name | Date | Status |
|------|------|------|--------|
| Product Owner | [Name] | [Date] | Pending |
| Lead Developer | [Name] | [Date] | Pending |
| Designer | [Name] | [Date] | Pending |

---

**Document Version**: 1.0  
**Last Updated**: [Current Date]  
**Status**: Draft
