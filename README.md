# baohiem.online - Next.js Frontend
# Backend WordPress: quanly.baohiem.online

## Tech Stack
- **Frontend**: Next.js 15 (App Router) + TypeScript
- **Styling**: Tailwind CSS v4 + Custom CSS
- **Backend CMS**: WordPress Headless (WPGraphQL)
- **SEO**: Rank Math SEO + WPGraphQL for Rank Math SEO
- **Webhook**: WP Webhooks → Vercel ISR Revalidation
- **Deploy**: Vercel

## Setup

```bash
npm install
cp .env.example .env.local
# fill in your env vars
npm run dev
```

## Env Variables

```
NEXT_PUBLIC_WORDPRESS_URL=https://quanly.baohiem.online/graphql
NEXT_PUBLIC_BASE_URL=https://baohiem.online
WORDPRESS_DOMAIN=quanly.baohiem.online
REVALIDATE_TOKEN=your_secret_here
```

## WordPress Config

- Permalink: `/%postname%/`
- WPGraphQL: enabled
- Rank Math SEO + WPGraphQL for Rank Math: enabled
- WP Webhooks: POST to `https://baohiem.online/api/revalidate?token=YOUR_TOKEN`

## Features

- ✅ Full mega menu (Sức khỏe, Xe cơ giới, Du lịch, Tai nạn, Nhân thọ, BH khác)
- ✅ Mobile-responsive with slide-out drawer menu
- ✅ Headless WordPress with WPGraphQL
- ✅ ISR revalidation via webhook
- ✅ Dynamic SEO from Rank Math
- ✅ sitemap.xml + robots.txt
- ✅ Search functionality
