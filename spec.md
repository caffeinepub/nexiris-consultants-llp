# Specification

## Summary
**Goal:** Force a clean rebuild and redeploy of the Nexiris Global frontend, resolving all TypeScript/build errors and ensuring the Our Legacy page, navigation link, brand name consistency, and logo rendering are fully working.

**Planned changes:**
- Create/fix `frontend/src/pages/OurLegacy.tsx` with a brand heritage intro section, a "View Firm Profile" CTA button (opens PDF in new tab), and a "Visit Nexiris Consultants" link (opens site in new tab), using the Frost White + Minty Blue palette with Montserrat headings and Inter body copy, wrapped in the existing Layout
- Register the `/our-legacy` route in `App.tsx` under the Layout route using TanStack Router
- Add an "Our Legacy" nav link to `Navigation.tsx` alongside Home and Pricing, with matching Minty Blue active/hover styling
- Replace all occurrences of "Nexiris Consultants LLP", "Nexiris Consultants", and "Nexiris Global Pvt Ltd" with "Nexiris Global" across all non-immutable files (Navigation, Footer, index.html meta/OG/Twitter/JSON-LD tags, and all section components)
- Audit and fix all TypeScript compilation errors across the frontend (broken imports, type mismatches, empty/broken components such as HowItWorksSection)
- Fix `backend/main.mo` compilation errors if any exist
- Ensure the Nexiris logo `<img>` src points to `/assets/generated/nexiris-logo.png` in both Navigation and Footer

**User-visible outcome:** The deployed app builds and runs without errors; users can navigate to the Our Legacy page via the navbar, view the firm profile PDF, and see consistent "Nexiris Global" branding and the correct logo throughout the site.
