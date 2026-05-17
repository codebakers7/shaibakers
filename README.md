# Crumb & Co. Bakery

Artisan bakery website built with Next.js 16, React 19, and Tailwind CSS. Features a responsive design showcasing menu items and enquiry form with Supabase backend integration.

## Project Structure

```
bakery/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with Navbar, metadata, Geist font
│   │   ├── page.tsx            # Homepage composing Hero → Menu → About → Enquiry → Footer
│   │   ├── globals.css         # Global styles with Tailwind
│   │   └── favicon.ico          # Site favicon
│   ├── components/
│   │   ├── Navbar.tsx          # Navigation bar with mobile menu toggle
│   │   ├── Hero.tsx            # Hero section with bakery tagline
│   │   ├── Menu.tsx            # Menu items display with badges
│   │   ├── About.tsx           # About section with values
│   │   ├── EnquirySection.tsx  # Enquiry form container
│   │   ├── EnquiryForm.tsx     # Form with Supabase integration
│   │   ├── Footer.tsx          # Site footer with contact info
│   │   └── ui/
│   │       ├── button.tsx      # Reusable button component (cva variants)
│   │       ├── card.tsx        # Card component library
│   │       ├── badge.tsx       # Badge component with variants
│   │       ├── input.tsx       # Styled input field
│   │       └── textarea.tsx    # Styled textarea field
│   └── lib/
│       ├── supabase.ts         # Supabase client initialization
│       └── utils.ts            # cn() helper for className merging
├── .env.local                   # Supabase credentials (URL + publishable key)
├── next.config.ts              # Next.js configuration
├── tsconfig.json               # TypeScript config with @ alias
├── eslint.config.mjs           # ESLint configuration
└── components.json             # shadcn/ui configuration
```

## Key Files Explained

### Page Components

**`src/app/layout.tsx`** — Root layout that wraps all pages. Imports the Geist font from Google Fonts, includes the Navbar component, and exports site metadata (title: "Crumb & Co. Bakery", description: "Fresh baked goods, made with love").

**`src/app/page.tsx`** — Homepage composing all sections in order: Hero → Menu → About → EnquirySection → Footer. Each section is a separate component for modularity.

**`src/components/Navbar.tsx`** — Fixed navigation bar with backdrop blur effect. Features responsive design: desktop links hidden on mobile, hamburger menu for mobile using `useState` for toggle state. Contains links to Menu, About, and Contact sections.

**`src/components/Hero.tsx`** — Full-screen hero section with bakery messaging. Displays "Fresh baked daily" tagline, main headline with amber accent color, description text, and two call-to-action buttons linking to menu and about sections.

**`src/components/Menu.tsx`** — Displays 6 bakery items in a responsive grid. Each item uses Card component with emoji icon, badge (Bestseller/Daily Fresh/Chef's Pick), name, description, and price in Indian Rupees. Items include Sourdough Loaf, Butter Croissant, Dark Chocolate Tart, Cinnamon Roll, Custom Celebration Cake, and Multigrain Sandwich Loaf.

**`src/components/About.tsx`** — Storytelling section with bakery history since 1987. Features 3 core values in cards: Local Ingredients, Baked Fresh Daily, Family Recipes. Uses emoji icons for visual appeal.

**`src/components/EnquirySection.tsx`** — Two-column layout with contact information (address, phone, email, hours) on the left and the EnquiryForm component on the right.

**`src/components/EnquiryForm.tsx`** — Client-side form with name, email, phone, and message fields. Submits data to Supabase `enquiries` table. Includes validation (required fields, email format), loading state, error handling, and success confirmation message.

**`src/components/Footer.tsx`** — Dark footer with three columns: brand info, quick links, and contact details. Includes copyright notice.

### UI Components (`src/components/ui/`)

**`button.tsx`** — cva-powered button with multiple variants (default, outline, secondary, ghost, destructive, link) and sizes (xs, sm, default, lg, icon). Uses radix-ui Slot for `asChild` prop support.

**`card.tsx`** — Complete card system including Card, CardHeader, CardTitle, CardDescription, CardAction, CardContent, CardFooter. Supports size variants and responsive styling.

**`badge.tsx`** — Styled badge component with variants (default, secondary, destructive, outline, ghost, link). Uses rounded-4xl styling for pill appearance.

**`input.tsx`** — Styled form input with focus ring, aria-invalid states, and disabled styling.

**`textarea.tsx`** — Styled textarea with field-sizing-content for auto-resize capability.

### Library Files

**`src/lib/supabase.ts`** — Creates and exports Supabase client using `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` environment variables.

**`src/lib/utils.ts`** — Provides `cn()` helper function that merges class names using clsx and tailwind-merge for conditional styling.

## Environment Variables

Create `.env.local` with:
```
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your-publishable-key
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Available Scripts

- `npm run dev` — Start development server
- `npm run build` — Build production bundle
- `npm run start` — Start production server
- `npm run lint` — Run ESLint

## Dependencies

- **Next.js 16.2.6** — React framework with App Router
- **React 19.2.4** — UI library
- **Tailwind CSS 4** — Utility-first CSS framework
- **@supabase/supabase-js** — Database client for enquiries
- **shadcn/ui** — Component library (button, card, badge, input, textarea)
- **lucide-react** — Icon library
- **class-variance-authority** — Component variant management
- **clsx** / **tailwind-merge** — Class name utilities