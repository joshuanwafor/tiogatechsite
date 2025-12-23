# TioGaTech - Business Website

A modern, professional business website built with Next.js 16, React 19, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean, professional UI with dark mode support
- **Responsive Layout**: Fully responsive design that works on all devices
- **Performance Optimized**: Built with Next.js for optimal performance and SEO
- **Type Safe**: Full TypeScript support for type safety
- **Accessible**: Built with accessibility best practices

## Project Structure

```
app/
├── components/          # Reusable components
│   ├── Header.tsx      # Navigation header
│   ├── Footer.tsx      # Site footer
│   ├── Button.tsx      # Button component
│   └── sections/       # Page sections
│       ├── Hero.tsx
│       ├── Features.tsx
│       ├── About.tsx
│       └── Contact.tsx
├── about/              # About page
├── services/           # Services page
├── contact/            # Contact page
├── layout.tsx          # Root layout with metadata
├── page.tsx            # Homepage
└── globals.css         # Global styles
```

## Getting Started

First, install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Pages

- **Home** (`/`) - Landing page with hero, services, about, and contact sections
- **About** (`/about`) - Company information and values
- **Services** (`/services`) - Detailed service offerings
- **Contact** (`/contact`) - Contact form and information

## Customization

### Updating Company Information

1. **Company Name**: Update "TioGaTech" throughout the codebase
2. **Metadata**: Edit `app/layout.tsx` for SEO metadata
3. **Content**: Update sections in `app/components/sections/`
4. **Contact Information**: Update footer and contact page

### Styling

The project uses Tailwind CSS v4. Modify styles by:
- Editing component classes
- Updating `app/globals.css` for global styles
- Customizing Tailwind theme in `tailwind.config` (if needed)

## Build

Build the production version:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Deploy

The easiest way to deploy is using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/tiogatech)

## Tech Stack

- **Framework**: Next.js 16
- **React**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Fonts**: Geist Sans & Geist Mono (via Next.js)

## License

This project is private and proprietary.
