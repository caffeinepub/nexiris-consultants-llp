# Specification

## Summary
**Goal:** Rebrand the entire site from "Nexiris Consultants LLP" / "Nexiris Consultants" to "Nexiris Global Pvt Ltd" and replace the Hero section's static background image with a looping video of a ship sailing.

**Planned changes:**
- Replace all occurrences of "Nexiris Consultants LLP", "Nexiris Consultants", and any related variations with "Nexiris Global Pvt Ltd" across all components, HTML meta tags (title, og:title, og:description, og:site_name, Twitter Card), and JSON-LD structured data
- Update Navigation wordmark/logo alt text, Footer company name and disclaimer text to reflect the new company name
- In HeroSection.tsx, replace the static background image with an autoplaying, muted, looping, playsInline HTML5 `<video>` element using the Pexels video URL (https://www.pexels.com/download/video/28647987/), positioned absolutely to fill the section with object-fit cover
- Retain the existing dark overlay (~55% opacity) above the video for text readability
- Remove any reference to the static hero-trade-bg.jpg background from HeroSection.tsx and remove the parallax scroll effect on the background

**User-visible outcome:** The site consistently displays "Nexiris Global Pvt Ltd" everywhere, and the Hero section shows a looping ship-sailing video background with all existing content (headline, subheading, CTA buttons, stats row) clearly visible above the overlay.
