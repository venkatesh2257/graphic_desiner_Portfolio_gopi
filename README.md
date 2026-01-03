# Gopi's Portfolio Website

A modern, static portfolio website for a graphic designer built with Next.js, Tailwind CSS, and Framer Motion.

## Features

- ✨ Static site generation for optimal performance
- 🎨 Transparent header with smooth animations
- 🎭 Beautiful transitions and micro-interactions
- 📱 Fully responsive design
- 🚀 Optimized for production

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
```

This will generate a static export in the `out` directory.

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/
│   ├── Header.tsx      # Transparent header with logo and menu
│   └── Hero.tsx        # Hero section with "I am Gopi"
└── public/             # Static assets (add your images here)
```

## Adding Assets

1. **Logo**: Replace the placeholder logo in `components/Header.tsx`
2. **Background Asset**: Add your background image to `public/` and update the path in `components/Hero.tsx`
3. **3D Character**: Add your character asset to `public/` and replace the placeholder in `components/Hero.tsx`

## Customization

- Colors: Edit `tailwind.config.ts` to customize the color scheme
- Animations: Adjust Framer Motion props in components for different animation styles
- Typography: Modify font sizes and weights in component files




