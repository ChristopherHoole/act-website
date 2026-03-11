# Chat 85 — SEO Summary

**Date:** 2026-03-11

## What Was Done

Added complete SEO foundations to christopherhoole.online in a single pass.

- **OG image** (`public/og-image.jpg`): 1200×630px crop of the headshot, face centred. Generated with Pillow.
- **Full metadata** (`app/layout.tsx`): Title, description, metadataBase, Open Graph (title, description, URL, siteName, image, type) and Twitter card (summary_large_image).
- **Sitemap** (`app/sitemap.ts`): Next.js 14 native, single homepage entry, resolves at `/sitemap.xml`.
- **Robots** (`app/robots.ts`): Next.js 14 native, allows all crawlers, links to sitemap, resolves at `/robots.txt`.

## Result

`npm run build` passed with zero errors. Both `/sitemap.xml` and `/robots.txt` appear as static prerendered routes.

## Next Steps

1. Push to Vercel and verify the live routes resolve.
2. Paste URL into https://www.opengraph.xyz to confirm preview card shows headshot.
3. Submit `https://www.christopherhoole.online/sitemap.xml` to Google Search Console.
