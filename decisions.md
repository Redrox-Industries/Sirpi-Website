# Engineering decisions

## 2026-10-18: Add scroll-led editorial typography

- Extended the existing Intersection Observer reveal system so section headings rise through a clipped text window as their section enters the viewport.
- Added a quieter companion animation for direct section labels: opacity, vertical position, and letter spacing settle together before the heading completes.
- Kept content in the original semantic headings and labels instead of splitting words into generated spans. This preserves screen-reader reading order, copy selection, line wrapping, and page content.
- Scoped every effect behind JavaScript motion readiness and `prefers-reduced-motion: no-preference`; content remains immediately visible when JavaScript is unavailable or reduced motion is requested.
- Added browser coverage that scrolls an About section into view and verifies its heading reaches the fully visible resting state.

## 2026-10-18: Carry the editorial motion system across every route

- Audited Home, About Us, Projects, Services, Contact Us, Privacy, and 404 against the established Sirpi visual direction and the reviewed Saisei Architecture and Casa di Legna references.
- Rebalanced secondary-page intros into an editorial desktop split: title remains dominant on the left while the explanatory copy anchors the right. Mobile keeps the existing single-column reading order.
- Added one restrained baseline to page intros and extended the existing reveal system to previously static content sections. This gives the full site one motion rhythm without adding another animation mechanism.
- Let an unmatched final Projects card span the desktop grid with a wider image crop. This removes an accidental empty column while retaining the original project order and mobile stack.
- Added route-level desktop and mobile browser coverage for visible headings, persistent navigation, and horizontal overflow across all primary secondary pages.

## 2026-10-18: Add a reference-inspired editorial handoff

- Reviewed Saisei Architecture and Casa di Legna as live motion references. Borrowed only their generic principles—pinned visual storytelling, persistent navigation, layered depth, and a composed image-to-content handoff—not their layouts, assets, branding, or copy.
- Added a final editorial framing phase: the room gently scales into an ivory surround near the end of the intro. This gives the cinematic scene breathing room and visually prepares the warm Arrival page instead of cutting directly from full-bleed imagery.
- Kept the framing transform on an inner visual layer so the sticky stage remains stable throughout the final scroll phase.
- Extended the Home browser test to verify that the new framing phase completes on desktop and mobile before the Arrival handoff.

## 2026-10-18: Keep navigation present through the doorway journey

- Changed the Home header handoff so the distraction-free first frame remains intact, then the fixed header enters after the visitor starts scrolling and stays available throughout the doorway sequence.
- Added a translucent burgundy backdrop and restrained shadow while the header overlays the interior. This keeps the supplied Sirpi identity legible without covering the room with an opaque bar.
- Replaced direct linear scroll mapping with separate eased door and camera phases. The shutters now gather momentum, finish opening before the camera push ends, and hand off to Arrival without a mechanical stop.
- Kept the existing dependency-free `requestAnimationFrame` approach. A small smoothstep function provides cinematic easing without adding a motion library, and reduced-motion visitors still receive the static layout.
- Extended the Home browser test to verify that the header becomes visible near the beginning of the intro and remains available at the content handoff.

## 2026-10-15: Reframe Home as an accessible heritage scroll story

- Added an original doorway-entry component before Home content. Scroll progress opens CSS entrance shutters over a direct heritage living-room concept, then naturally hands the visitor to the existing content.
- Refined the client-reviewed opening to show only the full-screen doorway: no visible header, headline, prompt, or controls appear during entry. A visually hidden page heading preserves document structure for assistive technology.
- Extended the doorway sequence from 185 to 340 viewport heights and increased the background zoom. The doors now open over a longer deliberate scroll and the camera moves further into the interior before the first content chapter appears.
- The shared header becomes fixed for the enhanced Home and remains hidden until the doorway sequence is almost complete. No-JavaScript and reduced-motion paths retain the normal visible sticky header.
- Used a `requestAnimationFrame`-throttled CSS custom property instead of a scroll animation library. Astro needs no added runtime dependency, browser work stays small, and the rendering layer owns visual interpolation.
- Kept the component as progressive enhancement. Without JavaScript, the doorway is a normal readable hero; with `prefers-reduced-motion`, it is static and no scroll-pinned motion is enabled.
- Kept Home as a six-chapter narrative—Arrival, Craft, Rooms, Transformation, Process, Invitation—while preserving separate About, Projects, Services, and Contact routes. This satisfies the client’s entering-a-home story without removing existing navigation.
- Replaced the earlier dual type stack with Cormorant Garamond as the only loaded web font. One family gives the requested traditional editorial character and removes a second font request; Georgia remains only as a loading fallback.
- Added three original concept images: doorway entry, courtyard living, and heritage dining. They use teak, brass, lime-plaster, stone, courtyard light, and handmade-tile cues rather than literal temple imagery. They remain fictional and are documented in `docs/imagery-rights.md`.
- Updated the Transformation slider with a matched fictional after-state using carved teak, cane, brass, woven textiles, and warm lime-plaster tones. The existing before-state remains unchanged so the interactive comparison still communicates one room changing, while the new after-state now follows the approved South Indian heritage direction.
- Encoded the new production images as WebP at quality 86–88. WebP preserves the photographic material detail at substantially lower transfer sizes than their generated PNG sources.
- The client-provided `demo video.mp4` stays local and unpublished. It informed the scroll-to-enter interaction only; no frames, text, UI, branding, or imagery from it are shipped.
- Added a Playwright configuration and focused Home browser tests. The previous `test:e2e` command had no Playwright test boundary, so it loaded Vitest unit files and failed before testing the site. The new suite verifies deep doorway scroll, header handoff, updated heritage Transformation imagery, mobile overflow, and reduced-motion fallback in Chromium.
- Replaced the entry background that repeated a photographed doorway with a direct living-room view. The only doors now are the animated CSS entrance shutters; opening them and scrolling moves straight into the room instead of revealing another door. Added a Vitest boundary so unit tests exclude Playwright browser specs.

## 2026-10-15: Align the checkout with the Sirpi repository identity

- Changed the Git origin from `Redrox-Industries/Illam-Website` to the user-supplied `Redrox-Industries/Sirpi-Website` repository after confirming the remote exists.
- Renamed the local project folder from `interiorwebsite` to `sirpiwebsite` so the checkout name matches the product and remote repository.
- Preserved all uncommitted branding changes during the rename so they could be verified and published together as one branding release.

## 2026-10-15: Derive the site identity and palette from the supplied Sirpi logo

- Replaced the temporary Illam wordmark with the supplied Sirpi Interiors logo in the header and footer. The logo image carries the Tamil and English identity without duplicating either name as styled website text.
- Kept the original supplied JPEG unchanged as a source reference while using the later transparent logo supplied for the website.
- Switched the site to the separately supplied transparent `Logo2.png` asset. CSS crops only Logo2's unused vertical space so its combined crest and wordmark remain visible without adding duplicate text.
- Applied the updated transparent `Logo2.png` asset to both header and footer, set the company name to Sirpi Interiors throughout the site, and removed public-facing contact-pending and concept-preview wording at the user's request.
- Replaced the earlier square `Logo2.png` copy with the later wide, high-resolution file supplied under the same name. Removed square-specific vertical cropping so the complete crest, Tamil wordmark, and `INTERIORS` line remain visible in both placements.
- Replaced the shared footer question “Have a space in mind?” with the clearer call to action “Let’s shape your space.” across every route.
- Replaced the placeholder SVG favicon with the supplied Sirpi favicon package. Added ICO and 16px, 32px, Apple touch, and Android icon declarations plus a themed web manifest so browsers and installed shortcuts select the correct asset.
- Added a route-specific Netlify content type for `site.webmanifest`. This prevents the global `nosniff` security header from blocking a manifest served as generic binary data.
- Converted the 1.09 MB, `1774×887` Logo2 PNG into a transparent 91 KB, `720×360` WebP for header and footer delivery. WebP at quality 90 preserves the detailed gold mark while cutting its transfer size by about 92%; the original source remains unchanged locally.
- Replaced the previous terracotta and olive accents with deep burgundy, antique gold, soft gold, and warm ivory tokens sampled from the logo. A darker gold token is used for small text on light backgrounds to preserve readable contrast.
- Changed primary and secondary text from neutral near-black and gray to deep burgundy and muted wine. Dark sections keep warm ivory and gold text, giving every text role a logo-derived color while retaining strong contrast.
- Kept all existing placeholder warnings, `noindex`, disabled enquiry behavior, content structure, and the Redrox Industries relationship unchanged. This limits the change to approved branding and avoids treating missing business information as confirmed.
- Chose shared CSS tokens over page-specific color overrides because the brand palette is a site-wide invariant and one token layer keeps every route consistent.

## 2026-10-14: Keep local Astro development independent from Netlify runtime

- Changed Astro configuration to load the Netlify adapter only for production builds.
- Kept the production `site` URL explicit, and made layout URL generation fall back to the current request URL when `Astro.site` is unavailable.
- Disabled the Astro development toolbar because its audit bundle fails to import `AXObjectRoles` from `axobject-query` in this dependency set and creates a browser error unrelated to the site.
- Chose command-aware configuration instead of replacing the production adapter. This preserves Netlify output while preventing the failing local Edge Functions runtime from breaking `localhost:4321`.
