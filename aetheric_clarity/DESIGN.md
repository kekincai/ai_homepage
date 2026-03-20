```markdown
# Design System Documentation: The Digital Architect (Light Mode)

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Digital Architect."** 

Unlike standard enterprise dashboards that rely on rigid grids and heavy borders, this system treats the UI as a high-clarity, three-dimensional workspace. It captures the precision of architectural blueprints while maintaining the airy, premium feel of a modern glass-and-steel atrium. 

To move beyond the "template" look, we utilize **Intentional Asymmetry** and **Tonal Depth**. We prioritize the "Digital Architect" vibe by using expansive white space (the "Atrium") punctuated by surgical strikes of high-energy neon blue (`#00E5FF`). The goal is to make the user feel like they are not just looking at data, but navigating a curated spatial environment.

---

## 2. Colors & Surface Hierarchy
Our palette moves away from flat "web white" toward a sophisticated range of cool grays and technical cyans.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders for sectioning or containment. Boundaries must be defined solely through:
1.  **Background Color Shifts:** Placing a `surface-container-low` component on a `surface` background.
2.  **Subtle Tonal Transitions:** Using the hierarchy of surface tiers to imply edges.

### Surface Hierarchy & Nesting
Treat the UI as a series of layered technical sheets. Use the following tokens to create "nested" depth:
*   **Base Layer:** `surface` (#f8f9fb) – The primary canvas.
*   **Secondary Sections:** `surface-container-low` (#f2f4f6) – For sidebar backgrounds or secondary content areas.
*   **Actionable Containers:** `surface-container-lowest` (#ffffff) – Use this for cards or main work areas to make them "pop" against the base.
*   **Elevated Elements:** `surface-container-high` (#e6e8ea) – For headers or persistent navigation elements.

### The "Glass & Gradient" Rule
To inject "soul" into the corporate environment:
*   **Main CTAs / Hero Areas:** Apply a subtle linear gradient from `primary` (#006875) to `primary-container` (#00e5ff) at a 135-degree angle.
*   **Floating Elements:** Use Glassmorphism for overlays. Set the background to `surface-container-lowest` at 70% opacity with a `20px` backdrop-blur. This ensures the "Digital Architect" aesthetic remains fluid and integrated.

---

## 3. Typography
We use **Manrope** exclusively. Its geometric yet approachable terminals provide the "High-Clarity Enterprise" feel required.

*   **Display Scale (`display-lg` to `display-sm`):** Reserved for high-impact data points or hero headlines. Use `font-weight: 800` to create a bold, authoritative anchor.
*   **The Editorial Lead:** Pair a `headline-lg` (2rem) title with a `body-lg` (1rem) subtext. Use an exaggerated line-height (1.6) for `body-lg` to maintain the airy, premium feel.
*   **The "Technical" Label:** Use `label-md` and `label-sm` in `all-caps` with a `0.05rem` letter-spacing for metadata, category tags, or small technical readouts. This mimics the labeling on architectural drafts.

---

## 4. Elevation & Depth
Depth in this system is achieved through **Tonal Layering** rather than traditional drop shadows.

*   **The Layering Principle:** Instead of a shadow, place a `surface-container-lowest` (#ffffff) card on a `surface-container` (#eceef0) background. The 1% shift in brightness is enough for the human eye to perceive elevation without visual clutter.
*   **Ambient Shadows:** For floating modals or dropdowns, use a "Cloud Shadow": 
    *   `box-shadow: 0px 24px 48px rgba(0, 104, 117, 0.06);` 
    *   Note the use of a primary-tinted shadow (using the `primary` hue) instead of neutral gray to keep the "tech-forward" energy alive.
*   **The Ghost Border Fallback:** If a border is required for high-density data accessibility, use the `outline-variant` token at **20% opacity**. Never use 100% opaque borders.

---

## 5. Components

### Buttons
*   **Primary:** A gradient fill (Primary to Primary-Container) with `on-primary` text. Use `rounded-md` (0.375rem).
*   **Secondary:** `surface-container-lowest` background with a `ghost border` (outline-variant at 20%).
*   **Tertiary:** No background. Use `primary` text. Transitions to `surface-container-low` on hover.

### Cards & Lists
*   **The Divider Prohibition:** Do not use line dividers between list items. Use `spacing-4` (1.4rem) of vertical white space or alternate background colors between `surface` and `surface-container-low`.
*   **Card Styling:** Use `rounded-xl` (0.75rem). Cards should have no borders; they rely on `surface-container-lowest` to distinguish themselves from the `surface` background.

### Input Fields
*   **Styling:** Use `surface-container-low` as the fill. 
*   **Focus State:** Do not use a heavy border. Transition the background to `surface-container-lowest` and add a `2px` glow of `primary-container` (#00e5ff).

### Signature Component: The "Architectural Breadcrumb"
Instead of standard `Home > Category`, use large, thin typography (headline-sm) with vertical pipes `|` and `label-sm` descriptors above them to orient the user within complex enterprise hierarchies.

---

## 6. Do's and Don'ts

### Do:
*   **Embrace the White:** Allow components to "breathe" using the `spacing-12` (4rem) and `spacing-16` (5.5rem) tokens.
*   **Use Neon Surgically:** Use `#00E5FF` only for critical interaction points (CTAs, active states, or data spikes). Overuse will break the professional "Architect" vibe.
*   **Align Asymmetrically:** Offset large display text to the left while keeping functional controls to the right to create an editorial, non-template layout.

### Don't:
*   **Don't use 1px black or dark gray lines.** This is the fastest way to make the design look "cheap" and "standard."
*   **Don't use standard Material Design shadows.** They are too heavy for this light, airy environment.
*   **Don't crowd the margins.** The "Digital Architect" requires wide corridors. If in doubt, increase the padding.