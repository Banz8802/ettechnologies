# Elocker Technologies Asset Directory

Place your website images and static media assets here:

## Recommended Organization

- `public/images/branding/` -> Company logos, favicons, brand marks (e.g. `logo.svg`, `logo.png`, `favicon.ico`)
- `public/images/products/` -> Screenshots, UI mockups, and product covers:
  - `review-center.png`
  - `dtr-payroll.png`
  - `student-info-system.png`
  - `digital-laundry.png`
  - `time-tracker.png`
  - `hardware-terminals.png`
- `public/images/services/` -> Service graphics, process diagrams, architecture mockups
- `public/images/clients/` -> Client logos (e.g. Cebu Gems, Iligan Capitol College)
- `public/images/blog/` -> Featured blog article headers

## How to use in Next.js code

Files in `public/` are served from the root URL `/`:

```tsx
import Image from "next/image";

// Example referencing public/images/branding/logo.png:
<Image 
  src="/images/branding/logo.png" 
  alt="Elocker Technologies Logo" 
  width={180} 
  height={40} 
/>
```
