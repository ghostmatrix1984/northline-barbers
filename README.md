# Northline Barbers

A fictional Folkestone barbershop website built entirely with HTML, CSS and vanilla JavaScript. Open `index.html` in a browser. No installation, compilation, external fonts, libraries or network services are needed.

## Delivered

- Complete homepage: hero, five example services, Northline's approach, three fictional barber profiles, gallery preview, three demo reviews, location and hours, booking notice, and footer.
- Shared cream, charcoal and muted brass design tokens in `style.css`, with editorial serif headings and system sans-serif body text.
- Accessible responsive navigation with current-page markers, visible focus states, Escape dismissal, outside-click dismissal and automatic reset between mobile and desktop.
- Navigation remains available when JavaScript is disabled. Motion respects the visitor's reduced-motion preference.
- `services.html` contains the full eight-service menu, editorial advice and craft sections, and a native keyboard-accessible FAQ. `barbers.html`, `gallery.html` and `contact.html` remain minimal preview shells.
- Booking buttons lead to an explicit demo notice. There is no booking integration, backend, form, payment flow or map embed. Social names are non-interactive placeholders; the demo phone number is intentionally not a dial link.

All people, prices, reviews, contact details and business information are fictional.

## Local photography

The site uses locally hosted photography under `images/`. The team consists of Ash Mercer, Maya Cole and Freya Reed. The two replacement female portraits were created with the built-in image generation tool; their exact prompts and asset notes are in [images/PORTRAITS.md](images/PORTRAITS.md).

Asset reference:

| Suggested file | Subject | Suggested source size |
| --- | --- | --- |
| `hero-barbershop.webp` | Hero: barber chair and shop interior | Existing asset |
| `ash-mercer.webp` | Ash's existing portrait, retained | 1122 × 1402 px |
| `maya-cole.webp` | Maya Cole — dark bob, precision fades and texture | 1122 × 1402 px |
| `freya-reed.webp` | Freya Reed — lighter waves, scissor cuts and beard shaping | 1122 × 1402 px |
| `gallery-cut.webp` | Finished haircut / fade | 1000 × 1300 px |
| `gallery-tools.webp` | Scissors, comb and tools | 1000 × 700 px |
| `gallery-shop.webp` | Wider shop / workstations | 1000 × 700 px |
| `gallery-detail.webp` | Beard or finishing detail | 900 × 1300 px |

The team images keep the existing frame dimensions, `object-fit: cover` crop, explicit width and height, descriptive alt text and lazy loading. Preserve these when replacing any photographs in future.

## Validation

The homepage was tested in headless Firefox on 27 September 2026. The full Services page was tested on 29 September 2026 at the same seven viewport widths using browser layout measurements, screenshots and real keyboard input. No testing dependencies are included in the website.

| Viewport | Result |
| --- | --- |
| 375 × 812 | Passed |
| 414 × 896 | Passed |
| 768 × 1024 | Passed |
| 1024 × 1366 | Passed |
| 1440 × 1000 | Passed |
| 1920 × 1080 | Passed |
| 3440 × 1440 (ultrawide) | Passed |

Checks covered page and text overflow, the intended column arrangements, bounded ultrawide content, menu state and hidden navigation, and screenshots. Additional checks passed for:

- Real Enter, Space, Tab and Escape keyboard input; skip-link focus; visible focus outlines; menu focus exit; resize reset.
- Text contrast against effective solid backgrounds (WCAG AA thresholds); decorative artwork excluded.
- Reduced-motion settings and browser-level JavaScript disablement.
- All local file and anchor links, navigation to all four preview pages, and the booking-notice path.
- One `h1` per page, unique IDs and clean diff whitespace.
- An extra 320 px narrow viewport and a scrollable menu at 768 × 375 landscape.

These are Firefox viewport tests, not physical-device or Safari/Chromium test results. Recheck image crops and loading performance when the real photography is added.

The team portrait refresh also passed the seven viewports above: all three portrait dimensions, grid columns, gaps, card heights and overall team-section height match the previous version. Ash’s profile and the other homepage sections are unchanged.

The Services page uses native `<details>`/`<summary>` controls for its FAQ. No JavaScript was added. Its responsive checks cover price-row separation, no text or horizontal overflow, FAQ toggling on mobile and desktop, Enter/Space keyboard access, focus visibility and the shared navigation.
