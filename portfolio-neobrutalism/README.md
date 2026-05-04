# Neo-Brutalism Portfolio

A bold and modern portfolio website built with Next.js, Tailwind CSS, Supabase, Prisma, and Framer Motion featuring a neo-brutalism design style.

## Features

- 🎨 **Neo-Brutalism Design**: Bold colors, thick borders, and dramatic shadows
- 🚀 **Next.js 14**: App Router, Server Components, and optimal performance
- 💅 **Tailwind CSS**: Custom neo-brutalism theme with vibrant colors
- 🗄️ **Supabase & Prisma**: Database integration for projects and contact forms
- ✨ **Framer Motion**: Smooth animations and transitions
- 📱 **Responsive**: Works on all device sizes
- 🎯 **Hero Sections**: Each page has a unique hero with background images

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL (via Supabase)
- **ORM**: Prisma
- **Backend**: Supabase
- **Animations**: Framer Motion
- **Language**: TypeScript

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account
- PostgreSQL database

### Installation

1. Clone the repository:
```bash
cd portfolio-neobrutalism
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Edit `.env.local` with your credentials:
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
DATABASE_URL=your_database_url
```

4. Set up the database:
```bash
npx prisma generate
npx prisma db push
```

5. Add your hero images to `/public/images/`:
- `hero-home.jpg`
- `hero-about.jpg`
- `hero-projects.jpg`
- `hero-contact.jpg`

6. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your portfolio!

## Project Structure

```
portfolio-neobrutalism/
├── prisma/
│   └── schema.prisma          # Database schema
├── public/
│   └── images/                # Hero and project images
├── src/
│   ├── app/
│   │   ├── about/
│   │   │   └── page.tsx       # About page
│   │   ├── contact/
│   │   │   └── page.tsx       # Contact page
│   │   ├── projects/
│   │   │   └── page.tsx       # Projects page
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Home page
│   ├── components/
│   │   ├── Footer.tsx         # Footer component
│   │   ├── Hero.tsx           # Hero component
│   │   └── Navbar.tsx         # Navigation component
│   └── lib/
│       ├── prisma.ts          # Prisma client
│       └── supabase.ts        # Supabase client
├── tailwind.config.js         # Tailwind configuration
└── tsconfig.json             # TypeScript configuration
```

## Customization

### Colors
Edit `tailwind.config.js` to customize the neo-brutalism color palette:
- neo-yellow, neo-blue, neo-pink, neo-green, neo-purple, neo-orange

### Content
- Update personal information in each page component
- Add your projects in `src/app/projects/page.tsx`
- Configure social media links in Footer and Contact pages

### Database Models
The Prisma schema includes:
- **Project**: Store your portfolio projects
- **Contact**: Save contact form submissions

## Deployment

### Build for Production
```bash
npm run build
npm start
```

### Deploy to Vercel
1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables
4. Deploy!

## License

This project is open source and available under the MIT License.

## Contributing

Feel free to submit issues and enhancement requests!
