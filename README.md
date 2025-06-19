# Ayesh's Tech Marketing Agency Website - Next.js & Tailwind CSS

![Project Screenshot](/public/screenshot.png)

## Overview

A beautiful, responsive marketing agency website built with:

- ⚛️ Next.js 14 (App Router)
- 🎨 Tailwind CSS for styling
- ✨ Framer Motion for animations
- 📱 Fully responsive design
- 🏗️ Component-based architecture
- 🛠️ TypeScript for type safety

## Features

### 🎨 Design Elements
- Elegant color scheme with indigo, teal, and rose accents
- Animated transitions between sections
- Interactive hover effects
- Smooth scrolling navigation

### 🚀 Functionality
- Responsive navigation with mobile menu
- Animated client logos section
- Interactive testimonial carousel
- Contact form with validation
- Social media integration

### 🛠️ Technical Highlights
- Optimized performance with Next.js Image
- Lazy-loaded components
- Clean, modular component structure
- TypeScript type safety throughout
- Accessibility best practices

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/AyeshaNasirWebDeveloper/Marketing-Web.git
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
marketing-agency/
├── app/
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── common/
│   │   ├── Button.tsx
│   │   ├── Container.tsx
│   │   └── SectionTitle.tsx
│   ├── layout/
│   │   ├── Footer.tsx
│   │   └── Header.tsx
│   └── sections/
│       ├── Clients.tsx
│       ├── CTA.tsx
│       ├── Hero.tsx
│       ├── Services.tsx
│       ├── Stats.tsx
│       └── Testimonials.tsx
├── public/
│   └── image.png
├── styles/
│   └── globals.css
└── types/
    └── index.ts
```

## Customization

1. **Update Content**:
   - Modify text content in the respective component files
   - Update images in `/public`

2. **Change Colors**:
   - Edit the color palette in `tailwind.config.js`

3. **Add Sections**:
   - Create new components in `/components/sections`
   - Import and add to `page.tsx`

## Deployment

Deploy to Vercel (recommended):

[![Check Live ](https://marketing-web-alpha.vercel.app)]

Or deploy to other platforms:

```bash
npm run build
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

---

**Connect with me**:
- [Portfolio](https://portfolio-ayeshanasirwebdevelopers-projects.vercel.app)
- [LinkedIn](https://www.linkedin.com/in/ayeshanasirwin)
- [Twitter](https://x.com/AyeshaNasir170)