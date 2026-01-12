# AccountMart frontend build

*Automatically synced with your [v0.app](https://v0.app) deployments*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/leowellbeing-1318s-projects/v0-account-mart-frontend-build)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-black?style=for-the-badge)](https://v0.app/chat/nWpwLolnxc7)

## Overview

AccountMart is an e-commerce application specializing in selling premium digital accounts such as Netflix, Canva, Cursor, Google Veo 3, and many other services. The application is built with Next.js 16 and React 19, providing a fast and automated shopping experience.

This repository will stay in sync with your deployed chats on [v0.app](https://v0.app).
Any changes you make to your deployed app will be automatically pushed to this repository from [v0.app](https://v0.app).

## 🛠️ Technology Stack

### Core Framework
- **[Next.js 16.0.10](https://nextjs.org/)** - React framework with App Router
- **[React 19.2.0](https://react.dev/)** - UI library
- **[TypeScript 5](https://www.typescriptlang.org/)** - Type-safe JavaScript

### Styling & UI
- **[Tailwind CSS 4.1.9](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - High-quality React components (New York style)
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible component primitives
  - Dialog, Dropdown, Select, Tabs, Toast, Tooltip and many other components
- **[Lucide React](https://lucide.dev/)** - Icon library
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Dark/Light mode support
- **[tailwindcss-animate](https://github.com/jamiebuilds/tailwindcss-animate)** - Animation utilities

### Form Management & Validation
- **[React Hook Form 7.60.0](https://react-hook-form.com/)** - Performant form library
- **[Zod 3.25.76](https://zod.dev/)** - TypeScript-first schema validation
- **[@hookform/resolvers](https://github.com/react-hook-form/resolvers)** - Validation resolvers

### UI Components & Libraries
- **[Sonner](https://sonner.emilkowal.ski/)** - Toast notifications
- **[Recharts 2.15.4](https://recharts.org/)** - Chart library
- **[Embla Carousel](https://www.embla-carousel.com/)** - Carousel component
- **[React Day Picker](https://react-day-picker.js.org/)** - Date picker
- **[CMDK](https://cmdk.paco.me/)** - Command menu component
- **[Vaul](https://vaul.emilkowal.ski/)** - Drawer component
- **[Input OTP](https://input-otp.vercel.app/)** - OTP input component
- **[React Resizable Panels](https://github.com/bvaughn/react-resizable-panels)** - Resizable panel layouts

### Utilities
- **[date-fns 4.1.0](https://date-fns.org/)** - Date utility library
- **[clsx](https://github.com/lukeed/clsx)** - Conditional className utility
- **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** - Merge Tailwind classes
- **[class-variance-authority](https://cva.style/)** - Variant management

### Analytics & Deployment
- **[Vercel Analytics](https://vercel.com/analytics)** - Web analytics
- **Deployed on Vercel** - Hosting platform

### Architecture
- **Atomic Design Pattern** - Component organization (atoms, molecules, organisms, templates)
- **App Router** - Next.js 13+ routing system
- **Server Components** - React Server Components support
- **i18n Support** - Vietnamese language support
- **Theme Provider** - Dark/Light mode switching
- **Context Providers** - Cart, Auth, Language providers

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **pnpm** - Package manager

## 📁 Project Structure

```
Account-mart/
├── app/                    # Next.js App Router pages
│   ├── cart/              # Shopping cart page
│   ├── checkout/          # Checkout page
│   ├── login/             # Authentication page
│   ├── my-services/       # User services page
│   ├── orders/            # Order management
│   ├── profile/           # User profile
│   └── wallet/            # Wallet/recharge page
├── components/            # React components
│   ├── atoms/             # Basic UI elements (badge, logo, price, status)
│   ├── molecules/         # Composite components
│   ├── organisms/         # Complex components
│   ├── templates/         # Page templates
│   ├── providers/         # Context providers (theme, cart, auth, language)
│   └── ui/                # shadcn/ui components
├── lib/                   # Utilities and helpers
│   ├── i18n/              # Internationalization translations
│   └── utils.ts           # Utility functions
├── public/                # Static assets
└── styles/                # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm/yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Account-mart
```

2. Install dependencies:
```bash
pnpm install
```

3. Run the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## ✨ Features

- 🛒 **Shopping Cart** - Add to cart and checkout functionality
- 👤 **User Authentication** - Login and profile management
- 📦 **Order Management** - Track and manage orders
- 💳 **Wallet System** - Recharge and payment management
- 🌐 **i18n Support** - Vietnamese language support
- 🌓 **Dark/Light Mode** - Theme switching
- 📱 **Responsive Design** - Mobile-first approach
- ⚡ **Performance Optimized** - Next.js App Router with Server Components

## Deployment

Your project is live at:

**[https://vercel.com/leowellbeing-1318s-projects/v0-account-mart-frontend-build](https://vercel.com/leowellbeing-1318s-projects/v0-account-mart-frontend-build)**

## Build your app

Continue building your app on:

**[https://v0.app/chat/nWpwLolnxc7](https://v0.app/chat/nWpwLolnxc7)**

## How It Works

1. Create and modify your project using [v0.app](https://v0.app)
2. Deploy your chats from the v0 interface
3. Changes are automatically pushed to this repository
4. Vercel deploys the latest version from this repository