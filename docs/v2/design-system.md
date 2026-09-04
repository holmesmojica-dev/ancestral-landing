# Ancestral Landing V2 --- Design System

## 1. Purpose and scope

This document defines the approved visual language and design
foundations for **Ancestral Landing V2**.

It translates the approved preliminary V2 design into a reusable and
implementation-ready design system.

This document must be used together with:

- `docs/v2/content-architecture.md`
- The approved Ancestral Landing V2 preliminary design.
- The Ancestral Servicios Ambientales 2026 corporate brochure.
- The existing frontend technical architecture.

The purpose of this design system is to ensure that all V2 screens,
sections, components, responsive states, and future extensions remain
visually consistent with the approved Ancestral identity.

Implementation issues may translate these rules into React, Bootstrap,
SCSS, and reusable components, but they should not redefine the visual
identity established here without first updating this document.

---

## 2. Design principles

Ancestral Landing V2 should communicate four primary visual qualities:

### 2.1 Natural

The interface should remain closely connected to the company's
environmental identity. Nature photography, organic shapes, green
accents, and territorial imagery should create a strong relationship
between the digital experience and the environments where Ancestral
operates.

### 2.2 Professional

The site must communicate technical competence and institutional
credibility. Visual hierarchy, typography, spacing, iconography,
alignment, and component consistency should feel deliberate and
trustworthy.

### 2.3 Clear

Content must remain easy to scan and understand. The visual system
should prioritize strong heading hierarchy, short readable paragraphs,
clear calls to action, consistent spacing, simple visual grouping, high
text contrast, and predictable interaction patterns.

### 2.4 Human

Although Ancestral operates in technical and environmental fields, the
website should not feel cold or bureaucratic. The visual language should
support the conversational content direction defined for V2 through real
photography, rounded components, friendly iconography, generous
whitespace, and clear human-centered calls to action.

---

## 3. Visual source of truth

The approved preliminary V2 design is the primary visual reference for
this design system.

The following visual decisions are considered approved unless explicitly
refined in this document:

- Main color palette.
- Poppins typography.
- Linear environmental iconography.
- Rounded primary and secondary buttons.
- White header treatment.
- Hero composition.
- Organic blue and green decorative shapes.
- Floating statistics card beneath the Hero.
- Dark blue institutional section treatment.
- Service card visual language.
- Territory-impact composition.
- Trusted-entities presentation.
- Dark blue footer design.

The preliminary design is a visual reference, not a functional source of
truth. Navigation structure, website sections, service taxonomy, and
final Spanish copy must follow `docs/v2/content-architecture.md`.

---

## 4. Color system

### 4.1 Core brand palette

---

Token Hex Primary use

---

`brand-navy` `#0D1B3D` Primary institutional
color, dark surfaces,
headings, footer

`brand-green` `#4CAF37` Environmental accent,
primary actions,
highlights, icons

`surface-off-white` `#F7F9F7` Main page background
and soft neutral
surfaces

`neutral-light` `#E6E9EC` Borders, separators,
subtle backgrounds

`neutral-dark` `#4B5563` Secondary text and
supporting UI

---

These colors form the canonical V2 palette. Additional colors should
only be introduced when required for semantic states such as error,
warning, or success.

### 4.2 Semantic color tokens

```scss
$color-brand-primary: #0d1b3d;
$color-brand-accent: #4caf37;

$color-background-page: #f7f9f7;
$color-background-surface: #ffffff;
$color-background-dark: #0d1b3d;

$color-text-primary: #0d1b3d;
$color-text-secondary: #4b5563;
$color-text-inverse: #ffffff;

$color-border-default: #e6e9ec;
$color-border-strong: #0d1b3d;

$color-action-primary: #4caf37;
$color-action-primary-text: #0d1b3d;

$color-action-secondary: #ffffff;
$color-action-secondary-text: #0d1b3d;
```

### 4.3 Brand navy --- `#0D1B3D`

Primary institutional color for headings, dark section backgrounds,
footer, decorative organic forms, secondary button borders/text,
navigation, icon details, and strong informational surfaces.

### 4.4 Brand green --- `#4CAF37`

Environmental accent for primary CTAs, keyword emphasis, active
navigation indicators, environmental icons, decorative accents, section
highlights, and supporting metrics. Green should remain an accent rather
than a dominant full-page surface.

### 4.5 Off-white --- `#F7F9F7`

Preferred light page background. Pure white remains appropriate for
cards, statistics surfaces, forms, elevated components, and
trusted-entities containers.

### 4.6 Light neutral --- `#E6E9EC`

Used for borders, dividers, form-field borders, inactive states, card
outlines, and subtle section separation.

### 4.7 Dark neutral --- `#4B5563`

Used primarily for secondary body text, metadata, captions, supporting
labels, and secondary information.

---

## 5. Color usage rules

### 5.1 Heading emphasis

The approved design selectively combines navy headings with meaningful
green keywords, as in "Transformamos entornos, generamos vida." Green
emphasis must be intentional rather than decorative.

### 5.2 Dark surfaces

Use white primary text, white/light-neutral secondary text, green
accents, and high-contrast icons.

### 5.3 Light surfaces

Use navy headings, dark-neutral body text, green accents, and
light-neutral borders.

### 5.4 Contrast

V2 targets **WCAG AA** as the minimum accessibility conformance level for text/background color contrast.

For normal text, the minimum contrast ratio is `4.5:1`. For large text, the minimum contrast ratio is `3:1`.

The following core V2 color combinations have been verified:

| Foreground             | Background              | Contrast ratio | WCAG AA       |
| ---------------------- | ----------------------- | -------------: | ------------- |
| White `#FFFFFF`        | Navy `#0D1B3D`          |      `16.92:1` | Pass          |
| Off-white `#F7F9F7`    | Navy `#0D1B3D`          |      `15.99:1` | Pass          |
| Neutral-dark `#4B5563` | White `#FFFFFF`         |       `7.56:1` | Pass          |
| Neutral-dark `#4B5563` | Off-white `#F7F9F7`     |       `7.14:1` | Pass          |
| Navy `#0D1B3D`         | Green `#4CAF37`         |       `6.04:1` | Pass          |
| White `#FFFFFF`        | Green `#4CAF37`         |       `2.80:1` | Fail for text |
| White `#FFFFFF`        | Light-neutral `#E6E9EC` |   Insufficient | Fail for text |

Rules:

- Navy must be used as the foreground text color on `brand-green` interactive surfaces.
- White text must not be used on `brand-green` for normal-size text.
- `brand-green` should primarily function as an accent, interactive background, icon color, or decorative brand color rather than as body-text color on light surfaces.
- `light-neutral` is intended primarily for borders, dividers, and subtle surfaces, not for text.
- White or off-white text may be used on navy surfaces.
- All new text/background combinations introduced during implementation must meet WCAG AA contrast requirements.
- Color alone must never communicate selected, error, success, active-navigation, or validation states.

---

## 6. Typography

### 6.1 Primary typeface

The official V2 typeface is **Poppins**. Poppins must be used
consistently across the application unless a technical or accessibility
requirement justifies an exception.

### 6.2 Recommended font weights

Weight Recommended use

---

`400` Body copy
`500` Supporting emphasis, navigation, labels
`600` Buttons, cards, subheadings
`700` Major headings and strong metrics

### 6.3 Type scale

```scss
$type-display: 3.5rem;
$type-h1: 3rem;
$type-h2: 2.25rem;
$type-h3: 1.5rem;
$type-h4: 1.25rem;
$type-body-lg: 1.125rem;
$type-body: 1rem;
$type-body-sm: 0.875rem;
$type-caption: 0.75rem;
```

Responsive `clamp()` expressions may be used to preserve this hierarchy
fluidly.

### 6.4 Responsive typography

```scss
font-size: clamp(2.25rem, 5vw, 3.5rem);
```

Exact values should be tuned per heading role during implementation.

### 6.5 Line height

Content Line height

---

Display / Hero `1.05 – 1.15`
Section headings `1.15 – 1.25`
Card headings `1.2 – 1.3`
Body copy `1.5 – 1.7`
Captions `1.4 – 1.5`

### 6.6 Text width

Recommended body-copy reading width is approximately
`55–75 characters per line`.

---

## 7. Spacing system

Use a base increment of `4px`.

Token Value

---

`space-1` 4px
`space-2` 8px
`space-3` 12px
`space-4` 16px
`space-5` 24px
`space-6` 32px
`space-7` 48px
`space-8` 64px
`space-9` 96px
`space-10` 128px

Desktop section spacing should generally range from `64px–96px`, with
major narrative sections reaching `128px`. Mobile spacing should
generally range from `40px–64px`.

---

## 8. Layout system

### 8.1 Bootstrap-first layout

Bootstrap remains the primary structural layout system for containers,
grid, rows/columns, gutters, responsive alignment, flex utilities,
display utilities, and responsive spacing. Custom SCSS should extend
Bootstrap rather than replace it.

### 8.2 Container behavior

Main content should be centered within responsive Bootstrap containers.
Full-width visual sections may use `container-fluid`, while their
readable content should return to a controlled inner container.

### 8.3 Grid behavior

Common patterns include a 12-column Bootstrap grid, two-column
image/content sections, four-column statistics on large screens, five
service cards on wide desktop, and responsive stacking at smaller
widths.

---

## 9. Border radius

```scss
$radius-sm: 8px;
$radius-md: 16px;
$radius-lg: 24px;
$radius-pill: 999px;
```

Component Radius

---

Form fields `8px`
Small cards `16px`
Large image/content panels `16–24px`
Statistics container `16–24px`
Buttons `999px`
Decorative image compositions Context-dependent

---

## 10. Elevation and shadows

```scss
$shadow-sm: 0 4px 12px rgb(13 27 61 / 0.08);
$shadow-md: 0 10px 30px rgb(13 27 61 / 0.12);
$shadow-lg: 0 18px 48px rgb(13 27 61 / 0.16);
```

Component Shadow

---

Service cards `shadow-sm`
Statistics card `shadow-md`
Floating navigation/mobile panels `shadow-md`
Modal-like overlays if introduced later `shadow-lg`

Dark sections generally should not require heavy shadows.

---

## 11. Visual language

The V2 identity combines geometric UI structure with organic
environmental forms.

Approved decorative elements include:

- Curved navy surfaces.
- Green leaf-like shapes.
- Small dotted patterns.
- Botanical line illustrations.
- Rounded image masks.
- Asymmetric section accents.

These elements should support composition rather than compete with
content and must not reduce readability on mobile devices.

---

## 12. Design system implementation rule

The V2 implementation should favor reusable visual tokens over
component-specific hardcoded values.

Preferred:

```scss
color: $color-brand-primary;
border-radius: $radius-md;
box-shadow: $shadow-sm;
```

Avoid:

```scss
color: #0d1b3d;
border-radius: 17px;
box-shadow: 0 6px 19px rgba(...);
```

unless a documented component-specific exception is required.

The objective is to make the V2 interface visually consistent,
maintainable, and easy to evolve.

---

## 13. Buttons and calls to action

Buttons in Ancestral Landing V2 must preserve the rounded, clean,
high-contrast visual language established by the approved preliminary
design.

The interface uses two primary button variants:

1.  **Primary CTA** --- green filled button.
2.  **Secondary CTA** --- light/white button with navy border and navy
    text.

Buttons should communicate clear action hierarchy without introducing
unnecessary visual variants.

### 13.1 Primary CTA

The primary CTA represents the preferred action within a section.

Visual treatment:

- Background: `brand-green` (`#4CAF37`).
- Text: `brand-navy` (`#0D1B3D`) to maintain WCAG AA contrast.
- Shape: pill.
- Border: transparent.
- Font: Poppins.
- Font weight: `600`.
- Content vertically and horizontally centered.
- Optional icon when it improves comprehension.
- High contrast against both light and dark surrounding surfaces.

Typical uses include:

- `Conoce nuestros servicios`
- `Enviar solicitud`
- Other section-specific primary conversion actions.

Only one action within the same visual group should normally receive
primary emphasis.

Recommended implementation tokens:

```scss
$button-primary-bg: $color-action-primary;
$button-primary-color: $color-action-primary-text;
$button-primary-border: transparent;
$button-radius: $radius-pill;
```

### 13.2 Secondary CTA

The secondary CTA represents an alternative action without competing
visually with the primary action.

Visual treatment:

- Background: white or the appropriate light surface.
- Text: `brand-navy`.
- Border: `brand-navy`.
- Shape: pill.
- Font: Poppins.
- Font weight: `600`.
- Optional icon when semantically useful.

Typical uses include:

- `Contáctanos`
- Secondary navigation actions.
- Alternative actions placed beside a primary CTA.

Recommended implementation tokens:

```scss
$button-secondary-bg: #ffffff;
$button-secondary-color: $color-brand-primary;
$button-secondary-border: $color-brand-primary;
$button-radius: $radius-pill;
```

### 13.3 WhatsApp action

WhatsApp is a direct communication channel and should remain visually
distinguishable from the website's primary Contact navigation.

The approved V2 direction is to avoid labeling the WhatsApp action
simply as `Contacto` or `Contáctanos` when that wording could be
confused with the Contact section.

Depending on available space and context, the action may use:

- The recognizable WhatsApp icon by itself when its purpose is
  unambiguous.
- The WhatsApp icon accompanied by explicit channel-oriented copy.
- A short action such as `Escríbenos por WhatsApp` where additional
  clarification is useful.

The WhatsApp action should remain visually compatible with the Ancestral
design system and must not introduce an unrelated button style solely
because it links to an external platform.

### 13.4 Button sizing

Buttons should provide comfortable touch targets and preserve the
proportions shown in the preliminary design.

Recommended sizes:

---

Size Minimum height Horizontal padding Typical use

---

Small `40px` `16–20px` Compact
secondary
actions

Default `48px` `24–28px` Standard CTA

Large `52–56px` `28–32px` Hero and
high-priority
conversion
actions

---

The default and large variants should be preferred for customer-facing
CTAs.

Interactive controls must provide a minimum practical touch target of
approximately `44 × 44px`, even when their visible content is smaller.

### 13.5 Button typography

Recommended button typography:

```scss
font-family: "Poppins", sans-serif;
font-size: 1rem;
font-weight: 600;
line-height: 1;
```

Small buttons may use `0.875rem`.

Button labels should normally remain short, action-oriented, and written
in sentence case.

Avoid:

- Long sentences inside buttons.
- All-uppercase labels.
- Multiple competing primary CTAs in the same visual group.
- Using buttons for actions that semantically behave as ordinary
  navigation links when a link treatment is more appropriate.

### 13.6 Icon placement

Icons are optional and should reinforce the action rather than decorate
it.

Rules:

- Use one icon per button at most.
- Maintain consistent spacing between icon and label.
- Recommended gap: `8px`.
- Directional icons such as arrows normally appear after the label.
- Communication/service icons may appear before the label.
- Icon size should normally remain within `18–20px` for default
  buttons.
- Icons must inherit or intentionally match the button foreground
  color.

Icon-only controls must provide an accessible name through an
appropriate `aria-label` or equivalent accessible mechanism.

### 13.7 Interactive states

A static mockup cannot define interaction states, so V2 must provide
consistent behavior for all buttons.

#### Default

Use the approved base visual treatment for the corresponding variant.

#### Hover

Hover should provide visible but restrained feedback.

Primary CTA:

- Slightly darken the green background while preserving WCAG AA contrast.
- Preserve `brand-navy` (`#0D1B3D`) text.
- Do not dramatically change size or geometry.

Secondary CTA:

- Introduce a subtle navy-tinted or neutral background.
- Preserve navy text and border.

Hover transitions should feel smooth and professional.

Recommended duration:

```scss
transition-duration: 150ms;
```

Typical transitioned properties:

```text
background-color
border-color
color
box-shadow
transform
```

Large movement or exaggerated animation should be avoided.

#### Active

The active/pressed state should provide immediate physical feedback.

A subtle visual compression may be used, for example:

```scss
transform: translateY(1px);
```

The control must remain fully readable and recognizable.

#### Focus visible

Keyboard focus must always be clearly visible.

Recommended direction:

- High-contrast focus ring.
- Visible outside the button boundary.
- Must not rely only on a subtle color change.
- Must remain visible against both light and dark backgrounds.

Example implementation direction:

```scss
outline: 3px solid rgb(76 175 55 / 0.35);
outline-offset: 3px;
```

The exact implementation may be refined during accessibility
implementation as long as the focus indicator remains clearly
perceptible.

#### Disabled

Disabled buttons must:

- Remain identifiable as controls.
- Have reduced visual emphasis.
- Avoid appearing interactive.
- Not depend exclusively on color to communicate the state.
- Use the appropriate native `disabled` semantics whenever possible.

Disabled controls should not receive hover or active effects.

### 13.8 Loading and submission state

Actions that trigger asynchronous operations, particularly the Contact
form submission, must prevent accidental repeated submissions.

During loading:

- Preserve the button's approximate width to avoid layout shift.
- Show a concise loading indication.
- Disable repeated activation while the request is in progress.
- Preserve accessible status communication.

The final implementation may use a small spinner or equivalent
lightweight indicator consistent with the design system.

### 13.9 CTA grouping

When a primary and secondary CTA appear together, as in the Hero:

- Primary action appears first in reading order.
- Both actions should share compatible height and typography.
- Maintain a clear gap between buttons.
- Recommended gap: `12–16px`.
- The group may wrap or stack at smaller viewports.
- Responsive behavior must preserve action hierarchy.

Section 24 defines the responsive principles that govern CTA wrapping and stacking across viewport ranges.

### 13.10 Full-width mobile actions

Buttons should not automatically become full-width simply because the
viewport is mobile.

Use full-width buttons when:

- It improves form completion.
- Available horizontal space is constrained.
- Stacked CTAs are easier to scan and activate.
- The responsive composition clearly benefits from it.

The visual hierarchy between primary and secondary actions must remain
intact.

### 13.11 Accessibility requirements

All button and CTA implementations must:

- Be keyboard accessible.
- Have a visible `focus-visible` state.
- Provide meaningful accessible names.
- Maintain sufficient color contrast.
- Use semantic `<button>` elements for actions.
- Use semantic links for navigation.
- Avoid communicating meaning only through color.
- Respect reduced-motion preferences when animation is present.
- Maintain adequate touch-target dimensions.

### 13.12 Design consistency rules

Do:

- Use the green filled treatment for the most important action.
- Use the outlined/light treatment for secondary actions.
- Preserve pill geometry.
- Keep labels concise.
- Reuse shared button tokens and components.
- Keep interaction feedback subtle.

Do not:

- Introduce arbitrary button colors.
- Mix unrelated corner radii.
- Use heavy gradients.
- Add large decorative shadows.
- Create a unique button style for every section.
- Use excessive animation.
- Allow icon-only actions without accessible labels.

The button system should remain intentionally small. New variants
require a clear functional reason and must remain consistent with the
approved V2 visual identity.

---

## 14. Iconography

Iconography in Ancestral Landing V2 must reinforce the environmental,
technical, and institutional character established by the approved
preliminary design.

The approved visual direction uses **simple linear icons with rounded
geometry and consistent stroke weight**, primarily in the Ancestral navy
and green palette.

Icons should clarify meaning and support scanning. They must not become
decorative noise or introduce competing illustration styles.

### 14.1 Primary icon library

**Lucide React** is the preferred icon library for standard functional and interface iconography.

The project already uses `lucide-react`, and V2 should continue using it whenever an appropriate icon exists for navigation, contact, controls, status indicators, gallery actions, and other general UI purposes.

Benefits include:

- Consistent line-based visual language.
- Predictable stroke treatment.
- Good React integration.
- SVG-based rendering.
- Easy sizing and color inheritance.
- Broad coverage of common functional interface concepts.

The five approved service-category icons are an explicit exception to the Lucide-first rule.

Those icons are custom Ancestral V2 assets derived from the approved preliminary design and must be reused from:

`src/assets/icons/services/`

A second general-purpose icon library should not be introduced merely to obtain a slightly different version of an icon.

Custom artwork is acceptable when the approved Ancestral visual identity requires a symbol that Lucide cannot represent adequately.

### 14.2 Visual style

Standard interface icons should follow these principles:

- Outline/linear rather than filled.
- Rounded, clean geometry.
- Consistent stroke weight.
- Minimal internal detail.
- No gradients inside standard UI icons.
- No 3D or photorealistic icon treatments.
- No unrelated emoji as interface iconography.
- Consistent optical size within the same component family.

The objective is to preserve the clean icon language visible in the
preliminary design.

### 14.3 Icon colors

Preferred icon colors are:

- `brand-navy` (`#0D1B3D`)
- `brand-green` (`#4CAF37`)
- White when displayed on navy/dark surfaces
- `neutral-dark` (`#4B5563`) for low-emphasis supporting icons

Green should be used to reinforce environmental meaning, active states,
important metrics, or selected visual accents.

Navy should be used for institutional, navigational, and structural
iconography.

Icons should normally use semantic color tokens rather than hardcoded
hexadecimal values.

Example:

```scss
.icon {
	color: $color-brand-primary;
}

.icon--accent {
	color: $color-brand-accent;
}
```

### 14.4 Standard sizes

Recommended icon size tokens:

Role Size Typical use

---

`icon-xs` `16px` Inline metadata, compact controls
`icon-sm` `20px` Buttons, navigation, form support
`icon-md` `24px` Standard UI icons
`icon-lg` `32px` Statistics and emphasized features
`icon-xl` `40–48px` Service cards and prominent visual concepts

Icons within the same component family should use the same nominal size.

Arbitrary per-icon sizing should be avoided.

### 14.5 Stroke weight

Where supported by the icon library, use a consistent stroke width.

Recommended default:

```tsx
strokeWidth={2}
```

Slight adjustments may be used for unusually large decorative icons when
optical balance requires them, but inconsistent stroke weights inside
the same component group should be avoided.

### 14.6 Service iconography

The five primary service categories use the custom iconography approved in the V2 preliminary design.

These icons are production assets and must not be replaced with approximate Lucide equivalents unless the Design System is explicitly updated.

Approved asset locations:

```text
src/assets/icons/services/
├── environmental/
│   ├── environmental.png
│   ├── environmental-green.png
│   ├── environmental-navy.png
│   └── environmental-white.png
│
├── forestry/
│   ├── forestry.png
│   ├── forestry-green.png
│   ├── forestry-navy.png
│   └── forestry-white.png
│
├── agricultural/
│   ├── agricultural.png
│   ├── agricultural-green.png
│   ├── agricultural-navy.png
│   └── agricultural-white.png
│
├── water-resources/
│   ├── water-resources.png
│   ├── water-resources-green.png
│   ├── water-resources-navy.png
│   └── water-resources-white.png
│
└── occupational-safety/
    ├── occupational-safety.png
    ├── occupational-safety-green.png
    ├── occupational-safety-navy.png
    └── occupational-safety-white.png
```

Category mapping:

| Service category                | Asset family          |
| ------------------------------- | --------------------- |
| Ambientales                     | `environmental`       |
| Forestales                      | `forestry`            |
| Agrícolas                       | `agricultural`        |
| Manejo del Recurso Hídrico      | `water-resources`     |
| Seguridad y Salud en el Trabajo | `occupational-safety` |

The default asset preserves the approved preliminary-design appearance.

The `green`, `navy`, and `white` variants may be used only when required by the component state or surrounding surface.

Service icons should:

- Render at approximately `40–48px` within service cards unless responsive behavior requires adjustment.
- Preserve their original aspect ratio.
- Preserve sufficient whitespace around the symbol.
- Remain visually consistent across all five service cards.
- Never replace the visible service title.
- Avoid CSS recoloring when an approved state-specific asset already exists.

The icon supports recognition; the visible service name remains the primary semantic label.

### 14.7 Statistics and trust indicators

The floating statistics/trust card beneath the Hero uses iconography as
a supporting recognition mechanism.

Statistics icons should:

- Use a consistent size.
- Share the same visual style.
- Use green as the preferred accent where it matches the preliminary
  design.
- Remain secondary to the numeric value.
- Avoid unnecessary animation.

The visual hierarchy should remain:

1.  Metric/value.
2.  Metric label.
3.  Supporting iconography.

Icons must not overpower the statistic itself.

### 14.8 Contact iconography

Contact information may use recognizable icons for:

- Phone.
- Email.
- Location.
- Schedule/hours.
- WhatsApp.
- Social networks.

These icons should improve scanning and should not replace visible
contact information.

For example, an email icon may accompany the email address, but the
address itself must remain visible and selectable.

### 14.9 Social media icons

Official social-network marks are an exception to the general
Lucide-first rule when brand recognition requires the platform's
recognizable symbol.

Social icons must:

- Be visually aligned with the rest of the interface.
- Use consistent dimensions and spacing.
- Provide an accessible name.
- Have a visible focus state.
- Open external destinations using appropriate security attributes
  when a new browsing context is used.

Brand colors are not required by default. The surrounding Ancestral
visual system may use white, navy, or another approved semantic
foreground color when appropriate.

### 14.10 Icons inside buttons

Button icon rules defined in Section 13 remain authoritative.

In summary:

- Maximum one icon per button.
- Default size: `18–20px`.
- Recommended gap: `8px`.
- Directional icons generally follow the label.
- Communication/service icons may precede the label.
- Icon color should inherit the button foreground.
- Icon-only controls require an accessible name.

### 14.11 Icon containers

Some compositions in the approved design visually separate icons using
subtle circular or rounded containers.

When an icon container is required:

- Use a simple circle or rounded surface.
- Preserve generous internal whitespace.
- Use palette-derived backgrounds only.
- Avoid heavy shadows.
- Keep container dimensions consistent within a component group.

Recommended starting sizes:

Icon size Container

---

`20px` `36–40px`
`24px` `44–48px`
`32px` `56–64px`

These values may be optically adjusted during implementation while
preserving consistency.

### 14.12 Functional states

Interactive icons must expose the same state clarity expected from other
controls.

#### Default

Use the semantic foreground color appropriate to the component.

#### Hover

A clickable icon may receive:

- A subtle foreground-color change.
- A subtle background surface.
- A restrained transition.

The hit area should remain stable; hover must not cause layout shift.

#### Focus visible

Keyboard-operable icon controls require a clearly visible focus
indicator.

#### Active

Active navigation or selected icon states may use green together with
another visual cue where necessary.

#### Disabled

Disabled icon controls must have reduced emphasis and must not respond
to hover or active interactions.

### 14.13 Accessibility

Icons fall into two semantic categories.

#### Decorative icons

If an icon adds no information beyond adjacent visible text, it should
be hidden from assistive technologies.

Typical implementation:

```tsx
<Icon aria-hidden="true" focusable="false" />
```

#### Meaningful icons

If an icon communicates information not otherwise available as visible
text, it requires an accessible equivalent.

Icon-only controls must have a meaningful accessible name, for example:

```tsx
<button type="button" aria-label="Abrir menú">
	<Menu aria-hidden="true" />
</button>
```

Do not use the icon component name itself as the accessible label.

### 14.14 Custom SVG and decorative illustrations

The preliminary design includes botanical and organic graphic elements
that are not standard UI icons.

These elements should be treated as **decorative illustrations**, not as
functional iconography.

Custom SVG is appropriate for:

- Botanical line art.
- Leaf-like brand shapes.
- Organic decorative forms.
- Brand-specific graphic motifs.

Decorative SVG elements should generally be hidden from assistive
technologies and should not become focusable.

They should use the approved color palette and remain subordinate to
content.

### 14.15 Responsive behavior

Icons should not scale proportionally with the entire viewport.

Instead:

- Use defined size tokens.
- Reduce oversized service/decorative icons when necessary on compact
  layouts.
- Preserve touch-target dimensions for interactive icons.
- Never shrink functional icons to the point that recognition suffers.
- Avoid removing meaningful icons solely because the viewport is
  small.

Detailed responsive composition must follow the principles and breakpoint strategy defined in Section 24.

### 14.16 Consistency rules

Do:

- Prefer Lucide for standard functional and interface icons.
- Reuse the approved custom Ancestral assets for the five service-category icons.
- Reuse semantic size and color tokens.
- Keep stroke style consistent.
- Pair service icons with visible labels.
- Use custom SVG only when the visual identity genuinely requires it.
- Distinguish decorative from meaningful icons semantically.

Do not:

- Mix filled, outlined, 3D, and illustration-style icons in the same
  UI family.
- Introduce another icon library without a documented need.
- Use emoji as production interface icons.
- Assign random sizes or stroke widths.
- Use icons as the only indication of important service information.
- Add decorative animation that distracts from content.
- Depend exclusively on color to communicate interactive state.

The icon system should feel like a single visual family across
navigation, services, statistics, contact information, and future V2
extensions.

---

## 15. Header and navigation

The Ancestral Landing V2 header must preserve the clean, lightweight
composition established in the approved preliminary design while
providing persistent access to the site's primary navigation.

The header is a functional orientation element, not a dominant visual
section. It should remain available while scrolling without competing
with page content.

### 15.1 Approved visual composition

The desktop header follows the approved preliminary design:

1.  **Ancestral logo** aligned to the left.
2.  **Primary navigation** presented horizontally.
3.  **Active navigation indicator** using the green brand accent.
4.  **WhatsApp access** positioned as a distinct communication action on
    the right.
5.  White background with generous but controlled spacing.

The final navigation labels and destinations must follow
`docs/v2/content-architecture.md`, not placeholder navigation that may
appear in the preliminary mockup.

In particular, items such as `Proyectos` or `Compensaciones` must not be
introduced merely because they appeared in an early visual concept if
they are not part of the approved V2 information architecture.

### 15.2 Persistent behavior

The V2 header should remain available during page scrolling using sticky
positioning.

Recommended implementation direction:

```scss
.site-header {
	position: sticky;
	top: 0;
	z-index: var(--z-header);
}
```

The exact z-index token should be established during implementation as
part of the application's layering system.

The sticky header must:

- Remain attached to the top of the viewport.
- Preserve access to primary navigation.
- Avoid covering anchored section content.
- Remain visually lightweight.
- Avoid excessive vertical height.
- Work consistently on desktop, tablet, and mobile layouts.

### 15.3 Initial state

At the top of the page, the header should closely match the approved
mockup:

- White background.
- Clean visual separation.
- No visually heavy shadow.
- Navy navigation text.
- Green active-state accent.
- Clearly visible Ancestral logo.
- Distinct but restrained WhatsApp access.

The header should feel integrated with the Hero rather than visually
detached from it.

### 15.4 Scrolled state

After the page begins scrolling, the header may gain subtle separation
from the content underneath.

Recommended treatment:

- Preserve the white background.
- Keep approximately the same dimensions.
- Add a very subtle bottom border or low-elevation shadow.
- Avoid dramatic resizing.
- Avoid large logo transformations.
- Avoid changing the overall navigation composition.

Recommended elevation direction:

```scss
box-shadow: $shadow-sm;
```

A lighter custom border/elevation may be used if `$shadow-sm` appears
too strong during implementation.

The transition between initial and scrolled states should be subtle and
should not produce layout shift.

### 15.5 Header height

The header must provide sufficient space for the logo and navigation
while remaining compact enough for persistent use.

Recommended starting ranges:

Viewport Header height

---

Desktop `72–80px`
Tablet `64–72px`
Mobile `56–64px`

These are implementation targets rather than reasons to distort the
approved logo proportions.

The exact values may be refined during implementation according to the responsive principles defined in Section 24 and the behavior of real content at intermediate widths.

### 15.6 Logo

The Ancestral logo is the primary brand identifier in the header.

The approved production asset for the light/white V2 header is:

`src/assets/images/logo/full/ancestral-logo.svg`

The inverse logo asset is reserved for dark surfaces:

`src/assets/images/logo/full/ancestral-logo-white.svg`

Symbol-only assets are available at:

```text
src/assets/images/logo/symbol/
├── ancestral-symbol.svg
└── ancestral-symbol-white.svg
```

Rules:

- Use `ancestral-logo.svg` in the standard white Header.
- Preserve the original aspect ratio.
- Do not stretch or distort the asset.
- Maintain adequate whitespace around it.
- Do not rebuild the complete logo with separate HTML text.
- Do not apply unnecessary shadows, outlines, filters, or decorative effects.
- Ensure the logo remains legible at mobile sizes.
- Use symbol-only variants only when the complete lockup is not appropriate for the available space or context.

The logo should function as navigation to the main/home experience.

When the user is already on the homepage, activating the logo should return to the beginning of the page without introducing confusing behavior.

### 15.7 Primary navigation

Desktop navigation should remain horizontally aligned and visually
simple.

Navigation labels should:

- Use Poppins.
- Use a medium or semibold weight appropriate to the mockup.
- Use `brand-navy` as the default foreground.
- Maintain consistent horizontal spacing.
- Remain concise.
- Follow the approved content architecture.

Recommended starting typography:

```scss
font-family: "Poppins", sans-serif;
font-size: 0.9375rem;
font-weight: 500;
```

The navigation should not use oversized typography or heavy button-like
containers for ordinary section links.

### 15.8 Navigation destinations

Navigation behavior depends on the destination type.

#### Homepage sections

Primary homepage navigation may use section anchors where appropriate.

Examples include approved homepage destinations such as:

- Inicio.
- Quiénes somos.
- Servicios.
- Contacto.

Exact labels and section identifiers must remain aligned with
`content-architecture.md`.

#### Service detail experiences

Service cards and service-specific navigation lead to the reusable
service detail experience defined in the V2 information architecture.

The persistent header should remain visually and functionally consistent
within service detail routes.

Users must be able to return naturally to the homepage and its primary
sections.

### 15.9 Active state

The preliminary design uses the green brand accent to identify the
active navigation item.

The active state should use:

- Navy or appropriately emphasized text.
- A green indicator, underline, dot, or equivalent restrained visual
  cue consistent with the mockup.
- Semantic state information in addition to color when required for
  accessibility.

The active indicator should be visually clear without turning the
navigation item into a large button.

For in-page navigation, the active state may reflect the currently
relevant section when reliable scroll-position behavior is implemented.

For routed pages, it should reflect the current route or navigation
context.

### 15.10 Hover state

Desktop navigation links should provide restrained hover feedback.

Recommended behavior:

- Transition toward `brand-green`, or
- Introduce/strengthen the approved green indicator.

Avoid:

- Large movement.
- Scaling navigation labels.
- Heavy backgrounds.
- Layout-changing underline animations.

Recommended transition duration:

```scss
transition-duration: 150ms;
```

### 15.11 Focus-visible state

Keyboard navigation must expose a clear focus state.

Focus treatment must:

- Be clearly visible on the white header.
- Not rely solely on a small text-color change.
- Preserve the active-state distinction.
- Avoid being clipped by the header container.

The implementation should use `:focus-visible` so pointer interactions
do not produce unnecessary persistent focus decoration.

### 15.12 WhatsApp access

WhatsApp remains visually separate from the standard navigation because
it represents a direct communication channel.

The header must avoid naming this action in a way that could be confused
with the site's `Contacto` navigation item.

Preferred approaches include:

- Recognizable WhatsApp icon with an accessible name.
- Icon plus concise channel-specific wording where desktop space
  permits.
- A compact icon-based treatment at smaller widths.

The action should remain consistent with the V2 visual system rather
than introducing a visually unrelated third-party button style.

The icon and interaction rules from Sections 13 and 14 apply.

### 15.13 Mobile navigation

On compact viewports, the full desktop navigation should collapse into a
dedicated menu control.

The mobile header should prioritize:

1.  Ancestral logo.
2.  Menu trigger.
3.  Essential navigation access.

The header must not attempt to compress all desktop links into an
unreadable horizontal row.

The menu trigger should:

- Use a recognizable menu icon.
- Provide an accessible name such as `Abrir menú`.
- Meet minimum touch-target requirements.
- Expose a clear focus state.
- Communicate expanded/collapsed state using appropriate ARIA
  semantics.

Example semantic direction:

```tsx
<button
	type="button"
	aria-label="Abrir menú"
	aria-expanded={isOpen}
	aria-controls="mobile-navigation"
>
	<Menu aria-hidden="true" />
</button>
```

### 15.14 Mobile menu presentation

The exact responsive implementation may use an offcanvas panel or
another Bootstrap-compatible navigation pattern, provided it preserves
the approved visual identity.

Preferred characteristics:

- White or approved light surface.
- Navy navigation text.
- Green active indicator.
- Generous touch spacing.
- Clear close action.
- No unnecessary visual complexity.
- No full-screen takeover unless usability testing demonstrates a
  clear benefit.

Bootstrap's responsive/offcanvas primitives should be preferred over
building an unrelated custom navigation system when they can satisfy the
design.

### 15.15 Mobile menu interaction

When the mobile navigation is open:

- Focus behavior must remain accessible.
- The menu must be keyboard operable.
- The close control must be obvious.
- Selecting an in-page destination should close the menu.
- Route navigation should leave the user in the expected destination
  state.
- Background interaction should follow the semantics of the chosen
  menu pattern.
- Scrolling behavior must not become confusing.

Detailed responsive behavior must follow the principles and breakpoint strategy defined in Section 24.

### 15.16 Anchor navigation and sticky offset

Because the header is sticky, in-page anchor navigation must account for
its height.

Anchored headings or sections must not appear hidden underneath the
header.

Preferred implementation direction:

```scss
section[id] {
	scroll-margin-top: var(--header-offset);
}
```

The offset should correspond to the effective sticky-header height plus
appropriate visual breathing room.

### 15.17 Scroll behavior

Smooth scrolling may be used for homepage anchor navigation when it
improves orientation.

If implemented:

- Keep the motion short and restrained.
- Respect `prefers-reduced-motion`.
- Do not interfere with browser history or expected keyboard behavior.
- Do not use long cinematic scrolling animations.

### 15.18 Layering

The sticky header must appear above standard page content and decorative
elements.

However, the layering system must leave room for UI elements that
legitimately need greater priority, such as:

- Mobile offcanvas navigation.
- Dialogs/modals.
- Critical overlays.

Avoid arbitrary extremely high z-index values.

A documented layering scale should be used during implementation.

### 15.19 Accessibility requirements

The header and navigation must:

- Use semantic `<header>` and `<nav>` structures.
- Provide an accessible navigation label where appropriate.
- Support complete keyboard navigation.
- Expose visible focus states.
- Maintain sufficient contrast.
- Preserve logical tab order.
- Provide meaningful accessible names for icon-only controls.
- Communicate mobile-menu expanded state.
- Avoid duplicate or ambiguous navigation labels.
- Ensure sticky positioning does not hide focused content.
- Respect reduced-motion preferences.

The current page or route should be communicated semantically when
applicable, for example through `aria-current`.

### 15.20 Responsive principles

The header should become **simpler**, not merely smaller, as viewport
width decreases.

Desktop:

- Logo.
- Horizontal navigation.
- WhatsApp access.
- Persistent sticky behavior.

Tablet:

- Preserve horizontal navigation while space remains comfortable.
- Collapse before labels become crowded or touch targets become
  compromised.

Mobile:

- Compact logo.
- Menu trigger.
- Collapsed navigation.
- Persistent but visually restrained sticky header.

Breakpoint decisions should be driven by content fit and Bootstrap's
responsive system rather than by arbitrary device names.

### 15.21 Performance and stability

The header is visible throughout much of the user journey and should
remain lightweight.

Avoid:

- Large JavaScript dependencies solely for header effects.
- Continuous expensive scroll calculations.
- Layout shifts when the sticky state changes.
- Large raster assets for simple navigation graphics.
- Complex animations tied continuously to scroll position.

If a scrolled-state detector is required, implementation should remain
minimal and efficient.

### 15.22 Design consistency rules

Do:

- Preserve the white, lightweight header from the approved mockup.
- Keep navigation available while scrolling.
- Use navy and green for navigation hierarchy.
- Keep the logo clearly visible.
- Distinguish WhatsApp from the Contact section.
- Collapse navigation cleanly on smaller screens.
- Account for sticky-header offset in anchor navigation.
- Keep interactions subtle and accessible.

Do not:

- Turn the sticky header into a large persistent banner.
- Introduce heavy shadows.
- Dramatically shrink or animate the header while scrolling.
- Add navigation items that are not part of the approved information
  architecture.
- Treat WhatsApp and Contact as the same navigation concept.
- Compress desktop navigation until labels become crowded.
- Hide focused or anchored content beneath the sticky header.
- Use intrusive scroll animations.

The header should feel continuously available but visually quiet: a
stable navigation layer that supports the user without competing with
Ancestral's content and imagery.

---

## 16. Hero

The Hero is the primary visual and narrative entry point of Ancestral
Landing V2.

Its design must remain faithful to the approved preliminary V2
composition: a strong environmental photograph, an organic navy visual
field, a green environmental accent, a high-impact headline, concise
supporting copy, and two clearly differentiated calls to action.

The Hero should immediately communicate Ancestral's environmental
identity and professional character without becoming visually
overloaded.

### 16.1 Approved composition

The approved desktop composition combines:

1.  A prominent environmental photograph.
2.  A large organic navy shape that visually anchors the section.
3.  A green organic accent that reinforces the environmental identity.
4.  A high-impact headline using the approved Poppins typography.
5.  Selective green emphasis within the headline.
6.  Short supporting copy.
7.  A primary green CTA.
8.  A secondary light/outlined CTA.
9.  Subtle botanical and dotted decorative details consistent with the
    V2 visual language.
10. A visual transition toward the statistics/trust component beneath
    the Hero.

The Hero must preserve this relationship between photography,
typography, organic geometry, and conversion actions.

### 16.2 Content authority

The final Hero copy must follow `docs/v2/content-architecture.md`.

The preliminary mockup is authoritative for visual treatment and
hierarchy, but it must not override final content decisions already
approved in the V2 content architecture.

The Hero should remain concise. It is an introduction and conversion
point, not a place for long institutional explanations.

### 16.3 Visual hierarchy

The intended hierarchy is:

1.  Hero headline.
2.  Green semantic emphasis within the headline.
3.  Supporting paragraph.
4.  Primary CTA.
5.  Secondary CTA.
6.  Environmental imagery and decorative composition.

The photograph is visually prominent but must not overpower the
headline.

Decorative elements must remain subordinate to both the message and the
actions.

### 16.4 Hero headline

The headline should preserve the bold, editorial treatment shown in the
preliminary design.

Recommended characteristics:

- Poppins.
- Bold weight (`700`).
- Tight but readable line height.
- Navy as the primary text color when placed on a light surface.
- Green used selectively for meaningful emphasis.
- Controlled maximum width to preserve intentional line breaks and
  hierarchy.

Recommended implementation direction:

```scss
.hero__title {
	font-family: "Poppins", sans-serif;
	font-size: clamp(2.25rem, 5vw, 3.5rem);
	font-weight: 700;
	line-height: 1.08;
	color: $color-text-primary;
}
```

The exact line breaks should adapt naturally across viewports rather
than being forced through excessive `<br>` elements.

Manual line breaks may be used only when they are necessary to preserve
the approved editorial composition and remain responsive.

### 16.5 Green text emphasis

Green emphasis is an approved part of the Hero's visual identity.

Use:

```scss
color: $color-brand-accent;
```

for the meaningful highlighted word or phrase defined by the approved
Hero copy.

The emphasis must:

- Reinforce meaning.
- Remain readable.
- Not fragment the headline into too many colors.
- Avoid becoming a decorative effect applied to arbitrary words.

### 16.6 Supporting copy

The Hero paragraph should be concise and conversational.

Recommended characteristics:

- Poppins `400`.
- `1rem–1.125rem` responsive size.
- `1.5–1.7` line height.
- Dark-neutral text on light surfaces.
- Controlled reading width.
- Clear visual separation from the headline and CTA group.

Recommended maximum text width:

```text
approximately 55–65 characters per line
```

The Hero should not contain large blocks of body copy.

### 16.7 CTA group

The Hero uses the approved dual-action pattern:

- **Primary:** green filled pill button.
- **Secondary:** light/white pill button with navy border and navy
  text.

Section 13 remains authoritative for button styling and interaction
states.

Hero-specific rules:

- The primary CTA appears first in reading order.
- Both buttons should share compatible height.
- Recommended gap: `12–16px`.
- The CTA group should remain close enough to the supporting copy to
  read as part of the same conversion flow.
- Buttons may wrap or stack when horizontal space becomes
  insufficient.
- The primary action must remain visually dominant after stacking.

### 16.8 Environmental photography

Photography is one of the Hero's strongest identity elements.

The selected image should:

- Represent real environmental or territorial context relevant to
  Ancestral.
- Feel authentic rather than generic.
- Provide sufficient visual quality for large-screen rendering.
- Contain a useful focal area that survives responsive cropping.
- Avoid excessive visual clutter behind important foreground elements.
- Remain consistent with the photographic language used throughout V2.

Client-provided photography should be preferred when it meets quality
and relevance requirements.

Generic stock photography should not replace authentic Ancestral imagery
when suitable client material exists.

### 16.9 Image treatment

The preliminary design integrates the Hero photograph into an organic
composition rather than presenting it as a conventional rectangular
banner.

Implementation should preserve:

- Organic or curved visual boundaries.
- Controlled image cropping.
- Clear subject focus.
- Strong relationship with the navy background shape.
- Adequate separation from headline content.

The image may use CSS masking, border-radius composition, clipping,
layered pseudo-elements, or another maintainable technique capable of
reproducing the approved visual language.

Implementation must avoid unnecessary complexity solely to achieve
decorative precision.

### 16.10 Image cropping and focal point

Use:

```scss
object-fit: cover;
```

for responsive image containers where appropriate.

The image focal point should be controlled with `object-position` when
necessary.

The subject should not be unintentionally cropped at common viewport
widths.

Image selection should consider responsive behavior before
implementation rather than attempting to repair an unsuitable photograph
entirely through CSS.

### 16.11 Navy organic field

The large navy form is a core part of the approved Hero identity.

It should:

- Use `brand-navy`.
- Visually anchor the photographic composition.
- Create contrast against the light page surface.
- Maintain an organic rather than rigid rectangular silhouette.
- Integrate naturally with the green accent shape.
- Avoid interfering with text readability.

The form is decorative and must not create additional semantic content.

It should normally be hidden from assistive technologies if implemented
as SVG.

### 16.12 Green organic accent

The green shape reinforces Ancestral's environmental identity and
creates visual continuity with the primary CTA and other green accents.

It should:

- Use `brand-green`.
- Remain subordinate to the photograph and headline.
- Avoid occupying excessive surface area.
- Preserve the organic visual language from the preliminary design.
- Adapt or simplify at compact viewport sizes where necessary.

### 16.13 Botanical and dotted details

Small botanical line art and dotted patterns may be used around the Hero
composition where they support the approved design.

These elements should:

- Use palette-derived colors.
- Remain low-emphasis.
- Never overlap important text.
- Never reduce CTA clarity.
- Be removable or simplified on compact screens without affecting
  meaning.
- Be treated as decorative for accessibility.

The Hero should not accumulate additional decorative motifs beyond the
established V2 visual language.

### 16.14 Hero height

The Hero should feel substantial without forcing all useful content
below the fold.

The composition should be content-driven rather than locked to `100vh`.

Avoid:

```scss
min-height: 100vh;
```

as a default requirement.

The sticky header, Hero message, primary actions, and the beginning or
visual presence of the statistics/trust component should coexist
naturally on common desktop screens where practical.

Recommended desktop direction:

```text
Hero content area: approximately 600–720px depending on final assets and viewport
```

This is a composition target, not a fixed height.

### 16.15 Relationship with the sticky header

The Hero begins directly beneath the persistent header.

The composition must account for the effective header height so that:

- No Hero content is hidden.
- The visual balance from the preliminary design is preserved.
- The sticky header does not feel like an unrelated overlay.
- The initial white header and Hero light areas transition naturally.

The Hero should not add unnecessary top spacing simply because the
header is sticky.

### 16.16 Relationship with the statistics card

The statistics/trust component immediately following the Hero is
visually connected to the Hero in the preliminary design.

The Hero layout should reserve enough compositional space for this
relationship.

The statistics card may visually overlap or bridge the lower Hero
boundary when implemented, provided that:

- Content remains readable.
- Layout remains stable.
- The overlap does not create fragile negative margins across
  breakpoints.
- Mobile layouts can simplify the relationship cleanly.

The detailed statistics component is defined in the following
design-system section.

### 16.17 Desktop layout

On large viewports, preserve the approved asymmetric composition:

- Narrative content occupies one primary visual region.
- Environmental photography and organic shapes occupy the
  complementary region.
- Neither side should feel mechanically split into equal halves if the
  mockup calls for a more organic balance.
- CTA alignment should follow the text block.
- Decorative elements may extend beyond the internal content grid when
  safely contained by the Hero.

Bootstrap should provide the structural grid, while custom SCSS handles
the approved organic composition.

### 16.18 Tablet behavior

At intermediate widths:

- Preserve headline prominence.
- Reduce decorative complexity before reducing readability.
- Allow image and text proportions to rebalance.
- Collapse navigation separately according to Section 15.
- Prevent the CTA group from becoming cramped.
- Maintain a clear relationship between photograph and message.

The layout may remain two-column while content fits comfortably.

It should stack before either region becomes visually compressed.

### 16.19 Mobile behavior

Mobile must preserve the Hero's identity without attempting to reproduce
every desktop overlap literally.

Priority order:

1.  Headline.
2.  Supporting copy.
3.  CTA group.
4.  Environmental photograph.
5.  Essential organic brand shapes.
6.  Optional decorative details.

On compact screens:

- Use a single-column composition when required.
- Preserve readable headline sizing.
- Allow CTA buttons to stack when useful.
- Maintain generous touch targets.
- Simplify or remove nonessential dotted/botanical decoration.
- Recompose organic shapes rather than shrinking the entire desktop
  composition.
- Keep the environmental image visually meaningful.
- Avoid horizontal overflow.

Mobile should feel intentionally designed, not like a scaled-down
desktop screenshot.

### 16.20 Accessibility

The Hero must:

- Use a semantic primary heading (`<h1>`) for the page's main message.
- Maintain one clear H1 hierarchy.
- Preserve sufficient text contrast.
- Keep CTA focus indicators visible.
- Use semantic links/buttons according to action behavior.
- Treat decorative shapes and illustrations as non-semantic.
- Provide meaningful alternative text only when the Hero photograph
  communicates relevant content that is not already represented by
  nearby text.
- Avoid embedding important copy inside raster images.
- Respect reduced-motion preferences.

If the photograph is purely atmospheric and adds no unique information,
it may be treated as decorative according to the final markup strategy.

### 16.21 Motion

The approved preliminary design does not require elaborate Hero
animation.

If subtle entrance or decorative motion is introduced during
implementation:

- It must remain optional and restrained.
- It must not delay access to content.
- It must not move the primary CTA continuously.
- It must not create layout shift.
- It must respect `prefers-reduced-motion`.
- It must not become necessary to understand the page.

The default implementation should favor stability over animation.

### 16.22 Performance and LCP

The Hero is likely to contain the page's Largest Contentful Paint
candidate and must be implemented with performance in mind.

Hero image rules:

- Use an appropriately sized optimized asset.
- Prefer modern web formats already compatible with the project image
  pipeline.
- Avoid downloading desktop-sized imagery unnecessarily on small
  screens when responsive sources can be provided.
- Do not lazy-load the primary above-the-fold Hero image when doing so
  would delay LCP.
- Provide intrinsic dimensions or an aspect-ratio strategy to prevent
  layout shift.
- Avoid large decorative raster assets when CSS or SVG can express the
  same shape efficiently.

The final implementation should validate Hero performance using
Lighthouse and the project's established quality process.

### 16.23 Responsive image delivery

Where technically appropriate, use responsive image techniques such as:

- `srcset`.
- `sizes`.
- `<picture>`.
- Multiple optimized source dimensions.

The objective is to preserve image quality while avoiding unnecessary
transfer size.

Art-direction variants may be considered if the approved desktop
photograph cannot maintain a useful focal composition on mobile through
cropping alone.

### 16.24 SEO considerations

The Hero's visible H1 and supporting copy are important semantic
content.

Rules:

- Use real HTML text.
- Do not render the main headline as an image.
- Keep the H1 aligned with the page's primary purpose.
- Avoid keyword stuffing.
- Preserve the conversational content approved for V2.
- Ensure CTA labels remain descriptive.

Detailed organic SEO requirements belong to the dedicated V2 SEO issue.

### 16.25 Design consistency rules

Do:

- Preserve the approved asymmetric Hero composition.
- Keep environmental photography central to the visual identity.
- Use navy as the structural anchor and green as the environmental
  accent.
- Maintain one strong H1.
- Keep supporting copy concise.
- Preserve clear primary/secondary CTA hierarchy.
- Simplify decoration responsively.
- Optimize the Hero image for LCP.
- Use real HTML for important content.

Do not:

- Replace the Hero with a generic full-width banner.
- Use a rigid rectangular image treatment that loses the approved
  organic composition.
- Add large amounts of copy.
- Introduce additional competing CTA styles.
- Cover text with decorative shapes.
- Force the Hero to `100vh` without a demonstrated layout reason.
- Reproduce desktop overlaps literally when they damage mobile
  usability.
- Lazy-load critical above-the-fold imagery when it harms LCP.
- Add heavy animation simply for visual effect.
- Treat decorative graphics as meaningful accessible content.

The Hero should immediately feel recognizably Ancestral: environmental,
professional, organic, confident, and easy to act on.

---

## 17. Statistics and trust card

The statistics component immediately beneath the Hero is a compact
trust-building element that summarizes Ancestral's experience and impact
through clear quantitative indicators.

Its visual treatment must preserve the approved preliminary design: a
white elevated surface, rounded corners, four horizontally distributed
metrics on large screens, green line-based iconography, strong navy
values, and concise supporting labels.

The component should feel connected to the Hero while remaining clearly
readable as an independent information block.

### 17.1 Purpose

The statistics card has three primary objectives:

1.  Reinforce credibility immediately after the Hero message.
2.  Translate Ancestral's experience and impact into quickly scannable
    evidence.
3.  Create a visual transition between the Hero and the following
    institutional content.

It should not become a dense dashboard or an animated counter showcase.

The user should be able to understand the complete component in a few
seconds.

### 17.2 Content authority

The exact metrics, quantities, labels, and claims displayed in this
component must come from approved Ancestral content and the V2 content
architecture.

The preliminary design defines the visual structure, but placeholder or
illustrative numbers from a mockup must not automatically be treated as
verified business claims.

Quantitative claims must not be invented, extrapolated, or rounded for
visual convenience.

If a value changes in the future, the component should allow the content
to be updated without redesigning its structure.

### 17.3 Approved desktop composition

On large viewports, the card should preserve the four-metric horizontal
composition visible in the preliminary design.

Each metric consists of:

1.  Supporting icon.
2.  Prominent numeric or quantitative value.
3.  Short descriptive label.

The four metrics should share:

- Equal visual importance unless content requires otherwise.
- Consistent alignment.
- Consistent icon sizing.
- Consistent typography.
- Comparable internal spacing.
- Clear separation without heavy visual dividers.

The card should read as one unified trust component rather than four
unrelated cards.

### 17.4 Container

The main statistics surface should use:

- White background.
- `radius-lg` or an equivalent approved large radius.
- `shadow-md` as the starting elevation.
- Generous horizontal and vertical padding.
- Controlled maximum width aligned with the main Bootstrap content
  container.

Recommended direction:

```scss
.statistics-card {
	background: $color-background-surface;
	border-radius: $radius-lg;
	box-shadow: $shadow-md;
}
```

A subtle border using `neutral-light` may be introduced if necessary to
maintain definition on very light backgrounds, but the design should
avoid combining a strong border with a strong shadow.

### 17.5 Relationship with the Hero

The statistics card is visually associated with the Hero.

On desktop, it may bridge or slightly overlap the lower Hero boundary,
reflecting the approved preliminary design.

The overlap should feel intentional and stable.

Implementation must avoid fragile layout techniques such as large
arbitrary negative margins that break across viewports.

Preferred approaches include:

- Controlled positioning within the Hero-to-content transition.
- A documented spacing/offset token.
- Grid or wrapper composition that reserves the required space.

The following section must account for the card's visual footprint so
that content does not collide with it.

### 17.6 Metric value

The quantitative value is the strongest element inside each metric.

Recommended visual treatment:

- Poppins.
- Weight `700`.
- `brand-navy`.
- Strong but not oversized scale.
- Compact line height.

Recommended starting range:

```scss
font-size: clamp(1.5rem, 2.5vw, 2rem);
font-weight: 700;
line-height: 1.15;
```

Values should remain visually balanced even when their character lengths
differ.

Examples of value formats may include numbers, percentages, years, or
concise quantities, but the exact content must come from approved source
material.

### 17.7 Metric label

The label explains the value and must remain immediately understandable.

Recommended treatment:

- Poppins `400` or `500`.
- Dark-neutral text.
- Smaller than the metric value.
- Short enough to scan quickly.
- Controlled line height.

Recommended starting size:

```scss
font-size: 0.875rem;
line-height: 1.4;
```

Labels should not become paragraphs.

If a metric requires a long explanation to be understood, it likely does
not belong in this component.

### 17.8 Metric icon

The statistics icons follow Section 14.

Recommended treatment:

- Lucide or approved equivalent.
- Green accent.
- Consistent `icon-lg` sizing.
- Consistent stroke width.
- Adequate whitespace around each icon.
- Decorative/supporting semantics when the adjacent text already
  communicates the full meaning.

Recommended starting size:

```text
32px
```

The icon should support recognition but remain visually secondary to the
metric value.

### 17.9 Internal alignment

The exact alignment may follow the approved mockup composition, but all
metrics must share the same structural rhythm.

Preferred desktop behavior:

- Consistent vertical alignment.
- Icon and text grouped clearly.
- Equal or near-equal column distribution.
- No metric visually compressed because another label is longer.

Bootstrap grid or flex utilities should provide the structural
distribution.

Custom SCSS should be limited to the visual details that Bootstrap does
not express cleanly.

### 17.10 Separators

The approved design should remain visually light.

If separators are required between metrics:

- Use `neutral-light`.
- Keep them thin.
- Avoid dark vertical rules.
- Do not create a boxed dashboard appearance.

Whitespace is preferred over strong borders whenever it provides
sufficient grouping.

On smaller layouts, separators may change orientation or disappear
entirely.

### 17.11 Responsive layout

The component must reorganize rather than simply shrink.

Recommended progression:

#### Large desktop

- Four metrics in one horizontal row.

#### Tablet

Depending on available width and final label lengths:

- Four compact columns if they remain comfortable, or
- A `2 × 2` arrangement.

The layout should switch before text or touch spacing becomes cramped.

#### Mobile

Preferred composition:

- `2 × 2` grid when content fits clearly.
- Single-column stacking when metric labels or accessibility
  requirements make the grid too compressed.

The mobile design should preserve:

- Strong value hierarchy.
- Consistent icon treatment.
- Comfortable spacing.
- No horizontal scrolling.

Exact breakpoint behavior should follow the responsive strategy defined in Section 24 and may be adjusted when content fit requires a component-specific breakpoint.

### 17.12 Mobile relationship with the Hero

The desktop overlap should not be reproduced mechanically on mobile.

On compact screens:

- Reduce or remove the overlap when necessary.
- Preserve clear spacing between Hero CTAs, imagery, statistics, and
  the next section.
- Avoid placing the card so high that it obscures Hero content.
- Keep the card fully inside the viewport width with safe horizontal
  margins.

The component should feel intentionally integrated rather than
positioned through desktop-derived offsets.

### 17.13 Animation

The statistics card does not require animated counters.

Static values are the default and preferred behavior because they:

- Appear immediately.
- Avoid unnecessary JavaScript.
- Reduce distraction.
- Improve accessibility.
- Avoid implying precision through decorative animation.

If number animation is considered later, it must have a clear product
reason, respect reduced-motion preferences, and never delay access to
the actual value.

### 17.14 Accessibility

The statistics component must remain understandable without relying on
its icons or visual arrangement.

Requirements:

- Values and labels must be real HTML text.
- Maintain sufficient contrast.
- Preserve logical reading order.
- Decorative icons should be hidden from assistive technologies.
- Do not encode meaning only through color.
- Avoid splitting a value and its label in a way that produces
  confusing screen-reader order.

A semantic list may be appropriate when the metrics form a collection of
related facts.

Example structural direction:

```tsx
<ul className="statistics-card">
	<li className="statistics-card__item">
		<Icon aria-hidden="true" />
		<strong>...</strong>
		<span>...</span>
	</li>
</ul>
```

The final markup should prioritize semantics over reproducing a
particular DOM structure from the mockup.

### 17.15 Data integrity

Because this component presents factual business claims, implementation
must keep content separate from decorative presentation where practical.

Do:

- Store each metric as a clear value/label pair.
- Keep verified content easy to update.
- Preserve the exact approved meaning.
- Review metrics when brochure or corporate information changes.

Do not:

- Hardcode different versions of the same metric in desktop and mobile
  markup.
- Invent values to fill an empty column.
- Add a fifth metric merely to balance a layout.
- Alter quantities for aesthetic symmetry.

### 17.16 Performance and stability

The statistics card should be lightweight.

Avoid:

- Heavy chart libraries.
- Counter-animation dependencies.
- Large raster icons.
- Layout shifts caused by delayed font/icon loading.
- JavaScript-based positioning that CSS can handle reliably.

The component should render as part of the initial page structure and
maintain stable dimensions.

### 17.17 Design consistency rules

Do:

- Preserve the unified white elevated card from the approved mockup.
- Keep four metrics on large screens when the approved content
  supports them.
- Use green line icons.
- Use strong navy values.
- Keep labels concise.
- Maintain generous whitespace.
- Recompose responsively rather than shrinking everything.
- Use only verified quantitative claims.

Do not:

- Turn each metric into an unrelated standalone card.
- Use heavy borders or dashboard-style chrome.
- Add decorative charts.
- Animate numbers by default.
- Use oversized icons that compete with values.
- Invent or alter business statistics for layout purposes.
- Force the desktop Hero overlap onto mobile.
- Allow long labels to destroy the component's rhythm.

The statistics card should provide an immediate, credible snapshot of
Ancestral's experience and impact while preserving the clean and organic
character of the V2 Hero composition.

---

## 18. Section headings and content sections

Ancestral Landing V2 must use a consistent section-heading and
content-composition language across the homepage and reusable service
experiences.

The approved preliminary design already establishes the principal
pattern: strong Poppins headings, selective green emphasis, generous
whitespace, alternating light and navy surfaces, authentic environmental
photography, and organic decorative accents.

The objective is not to make every section identical. It is to make
every section feel unmistakably part of the same product.

### 18.1 Section heading hierarchy

Each major homepage section should normally contain:

1.  Optional short eyebrow or contextual label when it adds meaning.
2.  A clear section heading.
3.  Selective green emphasis when semantically useful.
4.  Concise supporting copy.
5.  Section content or action.

Headings must follow the semantic hierarchy defined by the page
structure.

The homepage must contain one H1 in the Hero. Major sections should
normally use H2 headings, with H3/H4 reserved for internal content.

### 18.2 Heading treatment

Recommended major-section treatment:

```scss
.section-title {
	font-family: "Poppins", sans-serif;
	font-size: clamp(2rem, 4vw, 2.75rem);
	font-weight: 700;
	line-height: 1.15;
	color: $color-text-primary;
}
```

On dark surfaces:

```scss
.section-title--inverse {
	color: $color-text-inverse;
}
```

Green emphasis may be used within a heading according to Section 5, but
it should remain selective.

### 18.3 Supporting copy

Introductory copy should remain conversational and concise.

Recommended characteristics:

- Poppins `400`.
- `1rem–1.125rem`.
- Body line height between `1.5–1.7`.
- Controlled reading width.
- Dark-neutral text on light surfaces.
- White/light-neutral text on navy surfaces.

The page should avoid large uninterrupted paragraphs.

### 18.4 Section spacing

Major sections should preserve generous vertical rhythm.

Desktop:

```text
64–96px typical
96–128px for major narrative compositions
```

Mobile:

```text
40–64px typical
```

Spacing should derive from the token system in Section 7 rather than
arbitrary per-section values.

### 18.5 Light section pattern

Light sections should generally use:

- `surface-off-white` or white.
- Navy headings.
- Dark-neutral supporting text.
- Green accents.
- White elevated cards where needed.
- Organic decorative elements used sparingly.

This pattern is appropriate for service overviews, trust content,
contact content, and other informational areas.

### 18.6 Dark institutional section pattern

The approved design uses navy surfaces to create strong institutional
moments, notably in the `¿Quiénes somos?` composition.

Dark sections should use:

- `brand-navy` background.
- White primary text.
- Light supporting text.
- Green highlights.
- Authentic photography.
- Controlled decorative line art or organic accents.

Dark surfaces should be used intentionally rather than alternating
mechanically after every light section.

### 18.7 Image + content composition

Several V2 sections use an image/content relationship.

Desktop may use a two-column Bootstrap structure with an asymmetric
visual balance.

Rules:

- Photography should remain relevant to the section.
- Image and text should feel compositionally connected.
- Avoid arbitrary 50/50 splits when the approved mockup calls for a
  more editorial balance.
- Preserve readable text width.
- Use rounded or organic image treatment where consistent with the
  mockup.
- Alternate image placement only when it improves page rhythm; do not
  alternate mechanically.

### 18.8 ¿Quiénes somos?

The `¿Quiénes somos?` section should preserve the approved preliminary
direction:

- Strong navy institutional surface.
- Environmental/field photography.
- White heading and body text.
- Green accent elements.
- Clear, concise institutional narrative.
- Organic composition rather than a generic rectangular corporate
  block.

The final copy must follow `content-architecture.md`.

### 18.9 Comprometidos con nuestro territorio

This section is a key expression of the environmental-compensation
narrative that runs throughout V2.

It should preserve the approved image + navy content composition and
communicate territorial commitment without becoming a standalone
`Compensaciones ambientales` navigation module.

The section should:

- Use authentic environmental imagery.
- Reinforce measurable and practical environmental commitment.
- Connect visually with the broader green/navy identity.
- Keep copy concise and persuasive.
- Support the transversal compensation narrative established in the
  content architecture.

### 18.10 Environmental compensation as a transversal theme

Environmental compensation is not represented as an isolated primary
navigation destination.

Instead, its relevance should appear naturally across:

- Hero messaging where appropriate.
- Institutional narrative.
- Service-related content.
- Territory-impact content.
- Service detail experiences.
- Relevant calls to action.

Visual emphasis may use green accents, environmental photography,
territory imagery, and supporting iconography.

The interface must not repeat the same compensation message verbatim in
every section.

### 18.11 Content width and alignment

Section content should align with the main Bootstrap container system.

Body-copy blocks should normally use a controlled maximum width.

Centered section headings are appropriate where the mockup uses them,
such as service or trust presentations.

Narrative sections may use left-aligned headings when paired with
imagery.

Alignment should follow the approved composition rather than applying a
universal center alignment.

### 18.12 Decorative continuity

Organic shapes, botanical line art, dots, and palette-derived accents
may create visual continuity between sections.

They should:

- Support transitions.
- Remain subordinate to content.
- Avoid repetitive placement.
- Simplify on mobile.
- Never introduce horizontal overflow.
- Remain decorative semantically.

### 18.13 Responsive composition

Sections should recompose according to available space.

Desktop: - Preserve approved editorial layouts and generous whitespace.

Tablet: - Rebalance image/content proportions. - Stack before text or
imagery becomes compressed.

Mobile: - Prefer clear single-column reading order. - Preserve semantic
content order. - Reduce decorative complexity. - Keep imagery meaningful
and appropriately cropped. - Avoid reproducing desktop overlaps
literally.

Section 24 remains authoritative for responsive behavior and breakpoint strategy.

### 18.14 Accessibility

Content sections must:

- Preserve logical heading hierarchy.
- Maintain sufficient contrast.
- Keep meaningful text as HTML.
- Use useful alt text for informative images.
- Treat decorative graphics as decorative.
- Preserve logical reading order independent of visual CSS ordering.
- Avoid using background images for content that requires alternative
  text.

### 18.15 Design consistency rules

Do:

- Reuse typography, spacing, colors, radii, and image treatments.
- Preserve the light/dark visual language from the approved mockup.
- Keep copy readable and conversational.
- Use green emphasis intentionally.
- Use authentic environmental imagery.
- Let environmental compensation appear naturally throughout the
  experience.

Do not:

- Give every section a unique visual language.
- Alternate layouts mechanically.
- Overuse navy or green surfaces.
- Add decorative elements without compositional purpose.
- Create a standalone compensation section merely to repeat
  information.
- Sacrifice semantic heading order for visual styling.

Major content sections should create visual rhythm while remaining part
of one coherent Ancestral narrative.

---

## 19. Service cards and service discovery

The service-card system is the primary discovery mechanism for
Ancestral's approved service categories.

The homepage cards must remain faithful to the approved preliminary
design: clean light surfaces, rounded geometry, subtle elevation,
prominent line-based iconography, concise service titles, and restrained
interaction feedback.

Their purpose is discovery, not to reproduce the full service
description on the homepage.

### 19.1 Content model

Each homepage service card should contain only the information necessary
to identify and select the service.

Primary content:

1.  Service icon.
2.  Service title.
3.  Clear interactive affordance.

The card should not contain the complete list of service capabilities
defined in the brochure.

Detailed information belongs to the reusable service-detail experience
established in `content-architecture.md`.

### 19.2 Approved service taxonomy

The exact service categories and naming must follow
`docs/v2/content-architecture.md`.

The implementation must not derive the final taxonomy from outdated V1
configuration or placeholder mockup content.

All service cards must be generated from a shared data/configuration
model where practical so homepage discovery and service-detail routing
remain synchronized.

### 19.3 Visual treatment

Recommended card treatment:

- White surface.
- `radius-md` or approved equivalent.
- `shadow-sm`.
- Optional subtle `neutral-light` border.
- Generous internal padding.
- Navy title.
- Green/navy line icon.
- Clean, uncluttered composition.

Recommended starting direction:

```scss
.service-card {
	background: $color-background-surface;
	border-radius: $radius-md;
	box-shadow: $shadow-sm;
	padding: $space-6;
}
```

Avoid combining a strong border and strong shadow.

### 19.4 Icon

Service iconography follows Section 14.

Recommended:

- `40–48px`.
- Consistent stroke width.
- Green or navy according to the approved composition.
- Adequate whitespace.
- Same optical scale across all service cards.

The icon supports recognition but does not replace the visible service
title.

### 19.5 Service title

Recommended treatment:

```scss
.service-card__title {
	font-family: "Poppins", sans-serif;
	font-size: 1.125rem;
	font-weight: 600;
	line-height: 1.3;
	color: $color-text-primary;
}
```

Titles should preserve the approved Spanish service naming.

Avoid abbreviating service names merely to make card dimensions
identical unless the abbreviation is itself an approved business term.

### 19.6 Card grid

The preliminary design presents the service cards as a compact visual
family.

On wide desktop, the layout should support the approved set of service
cards in a balanced row/grid.

Bootstrap grid/flex behavior should be used as the structural basis.

The layout must account for the actual number of approved services
rather than forcing empty columns.

Cards in the same row should feel visually balanced, but identical fixed
heights should not be achieved through brittle hardcoded values.

### 19.7 Entire-card interaction

Where technically and semantically appropriate, the service card should
behave as one clear interactive destination.

Users should not have to identify a tiny text link inside a large
apparently clickable card.

The implementation should provide:

- Clear pointer affordance.
- Keyboard accessibility.
- Visible focus state.
- Correct link semantics when navigation occurs.
- No nested conflicting interactive controls.

The service title and card destination must remain understandable to
assistive technologies.

### 19.8 Hover state

Desktop hover should communicate that the card can be explored without
introducing excessive motion.

Recommended effects may include:

- Slight elevation increase.
- Subtle border/accent change.
- Small controlled upward translation.
- Green emphasis on a directional cue.

Recommended maximum movement:

```scss
transform: translateY(-2px);
```

Avoid large scaling, rotation, or animated icon effects.

### 19.9 Focus-visible state

Keyboard focus must be as clear as mouse hover.

The card/link should expose a high-contrast focus ring that is not
clipped by its rounded container.

Focus must not rely solely on shadow changes.

### 19.10 Active state

The pressed state may reduce the hover translation or provide subtle
tactile feedback.

It should not cause reflow or change the card's dimensions.

### 19.11 Service-detail destination

Selecting a service should navigate to the reusable service-detail
module/page defined in the V2 content architecture.

The destination should load the selected service's:

- Title.
- Narrative introduction.
- Relevant service capabilities.
- Image carousel/gallery.
- Environmental-compensation context where relevant.
- Service-specific contact form with the service preselected.
- WhatsApp communication option.

The homepage card itself should remain intentionally concise.

### 19.12 Route and data consistency

Service routing should be driven by stable service identifiers or slugs.

The visual title should not be the only internal identifier.

A service configuration model should provide a single source of truth
for:

- ID/slug.
- Display title.
- Icon.
- Detail content reference.
- Imagery.
- Contact-form preselection value.

The exact technical model belongs to implementation, but the design
assumes this consistency.

### 19.13 Image use on cards

The approved homepage card language prioritizes iconography rather than
large photographs.

Do not add service-card thumbnails simply because service-detail pages
contain image galleries.

Keeping homepage cards visually concise:

- Improves scanning.
- Preserves the approved mockup.
- Avoids visual competition between five photographs.
- Creates a clearer distinction between discovery and detailed
  exploration.

### 19.14 Responsive layout

Recommended progression:

#### Wide desktop

- Preserve the approved multi-card horizontal/grid presentation.

#### Standard desktop/tablet

- Allow cards to wrap into balanced rows.
- Preserve comfortable minimum card width.

#### Mobile

- Use a single column or compact two-column layout only when titles
  and touch targets remain comfortable.
- Avoid horizontal scrolling carousels for primary service discovery
  unless later usability evidence justifies one.
- Maintain adequate spacing between interactive cards.

Final breakpoint behavior must follow Section 24, with content fit determining when the service-card composition needs to adapt.

### 19.15 Mobile interaction

Mobile cards must not depend on hover.

The interactive nature of each card should be evident through:

- Clear card styling.
- Visible title.
- Optional directional cue.
- Appropriate touch target.
- Predictable tap behavior.

Avoid hiding essential information until interaction.

### 19.16 Accessibility

Service cards must:

- Be keyboard accessible.
- Use semantic link behavior for navigation.
- Expose visible focus states.
- Maintain sufficient contrast.
- Preserve meaningful service titles as text.
- Hide decorative icons from assistive technologies when the title
  provides the same meaning.
- Avoid duplicate nested links to the same destination.
- Preserve logical reading order across responsive layouts.

If a directional arrow is purely decorative, it should not create
redundant screen-reader output.

### 19.17 Performance

The homepage service grid should remain lightweight.

Prefer:

- Existing Lucide SVG icons.
- CSS/Bootstrap layout.
- Shared reusable card component.
- Data-driven rendering.

Avoid:

- Large image downloads for cards.
- Independent animation libraries.
- Duplicated service markup for different breakpoints.
- JavaScript layout calculations that CSS can handle.

### 19.18 Design consistency rules

Do:

- Preserve the approved clean card family.
- Keep homepage content concise.
- Use consistent service icons.
- Make the interaction target obvious.
- Navigate to the reusable service-detail experience.
- Keep routing and displayed service data synchronized.
- Provide subtle hover and strong focus feedback.

Do not:

- Copy the entire brochure service list into each homepage card.
- Add large thumbnails that alter the approved card language.
- Invent unique colors for individual services.
- Create five visually unrelated card variants.
- Depend on hover for essential information.
- Use tiny `Ver más` links as the only practical click target.
- Duplicate service data independently across components.
- Force horizontal mobile carousels without a demonstrated UX reason.

The service cards should make Ancestral's offer immediately
understandable and invite exploration while keeping the homepage clean,
confident, and easy to scan.

---

## 20. Trusted entities and institutional credibility

The trusted-entities section reinforces Ancestral's credibility by
showing organizations and institutions that have trusted, supported,
collaborated with, or worked with the company, according to the exact
relationship approved in the V2 content architecture.

The approved preliminary design already provides an effective visual
direction for this section and should be preserved: a clean, spacious
presentation where institutional logos are the primary visual content
and the section remains lighter than the surrounding narrative blocks.

### 20.1 Purpose

This section should:

1.  Build trust through recognizable institutional relationships.
2.  Provide social proof without interrupting the page narrative.
3.  Reinforce Ancestral's professional and technical credibility.
4.  Create a visual pause between denser content sections.

The section must not become a client directory or a collection of
promotional claims.

### 20.2 Approved section heading

The approved narrative direction is:

> **Entidades que han confiado en nosotros**

This wording should remain aligned with the actual nature of the
organizations shown.

If the relationship with a particular entity cannot accurately be
described as trust/client work, the content must be reviewed before that
logo is included.

Visual design must never imply a stronger institutional relationship
than the underlying information supports.

### 20.3 Visual composition

The section should preserve the clean presentation from the preliminary
design:

- Light or off-white surrounding surface.
- Clear centered heading.
- Controlled supporting copy only if required.
- White or visually neutral logo area.
- Generous whitespace.
- Logos distributed with consistent optical weight.
- Minimal decorative interference.

The logos themselves should remain the main visual evidence.

### 20.4 Logo treatment

Institutional logos must be presented respectfully and consistently.

Rules:

- Preserve original aspect ratios.
- Never stretch logos.
- Do not redraw or modify brand marks without authorization.
- Avoid applying arbitrary brand colors.
- Do not crop identifying portions of a logo.
- Preserve adequate clear space.
- Use high-quality vector assets when available.
- Use transparent raster assets only when vector versions are
  unavailable or unsuitable.

Logo dimensions should be normalized by **optical weight**, not by
forcing every logo to identical width and height.

### 20.5 Color treatment

The preliminary design may use a visually controlled logo presentation.

Where appropriate and legally acceptable, logos may appear in their
official colors or in a restrained monochromatic treatment consistent
with the approved mockup.

However:

- Do not recolor third-party logos in a way that violates their
  identity.
- Do not reduce contrast until logos become difficult to recognize.
- Do not use green/navy filters merely to force all external brands
  into the Ancestral palette.

When uncertain, use the official supplied logo asset.

### 20.6 Logo container

The logo group should feel like one trust surface rather than a
collection of unrelated cards.

Preferred characteristics:

- White or neutral surface.
- Large rounded container where consistent with the mockup.
- Subtle or no elevation.
- Consistent internal spacing.
- Responsive grid/flex distribution.

Avoid placing each logo inside a heavily elevated individual card unless
the approved design explicitly requires it.

### 20.7 Grid and alignment

On desktop:

- Distribute logos across a balanced horizontal grid.
- Maintain consistent vertical alignment.
- Allow different aspect ratios without distortion.
- Keep sufficient whitespace between marks.

On smaller screens:

- Wrap logos into multiple rows.
- Preserve recognition.
- Avoid shrinking logos excessively to keep a single row.
- Avoid horizontal scrolling as the default behavior.

The number of columns should respond to the actual number and
proportions of approved logos.

### 20.8 Interaction

Logos are primarily credibility content, not navigation controls.

They should not automatically become links.

If a legitimate product requirement later calls for linking to an
entity's official website:

- The interactive behavior must be visually understandable.
- Keyboard focus must be visible.
- External-link behavior must be accessible.
- Appropriate security attributes must be used when opening a new
  browsing context.

No hover animation is required for non-interactive logos.

### 20.9 Accessibility

Each meaningful institutional logo should have useful alternative text
identifying the entity.

Example:

```tsx
<img src={logoSrc} alt="Nombre de la entidad" />
```

Avoid alternative text such as:

```text
logo
imagen
logo cliente
```

If the visible section already includes the entity name immediately
adjacent to the mark and the image becomes redundant, the final semantic
implementation may treat the image as decorative.

### 20.10 Responsive behavior

Desktop: - Preserve the spacious multi-logo composition from the
approved design.

Tablet: - Allow natural wrapping into balanced rows.

Mobile: - Use a compact grid with comfortable spacing. - Maintain
recognizable logo sizes. - Preserve the centered trust-section
hierarchy. - Avoid creating an auto-playing logo carousel.

A carousel should only be introduced later if the number of entities
grows enough to create a genuine usability problem.

### 20.11 Motion

The trusted-entities section should remain visually calm.

Avoid by default:

- Infinite logo marquees.
- Auto-scrolling carousels.
- Repeated logo animation.
- Hover scaling on non-interactive logos.
- Decorative motion that competes with recognition.

Static social proof is preferable.

### 20.12 Data integrity

Only approved entities should appear.

Do:

- Verify that each logo corresponds to an approved relationship.
- Keep source assets organized and replaceable.
- Use the correct current brand mark where supplied.
- Update the section when the business relationship list changes.

Do not:

- Add recognizable institutions solely to make the section look
  stronger.
- Infer clients from unrelated brochure imagery.
- Present partners, authorities, suppliers, or supporters as clients
  unless that relationship is accurate.
- Use placeholder logos in production.

### 20.13 Performance

Logo assets should be lightweight.

Prefer:

- SVG where appropriate.
- Optimized transparent images.
- Explicit dimensions/aspect ratios.
- Lazy loading for below-the-fold raster assets when beneficial.

Avoid unnecessarily large source images for small rendered logos.

### 20.14 Design consistency rules

Do:

- Preserve the clean trust presentation from the preliminary design.
- Keep logos visually balanced.
- Maintain generous whitespace.
- Use accurate institutional claims.
- Preserve original logo proportions and identity.
- Let the section provide a calm visual pause.

Do not:

- Turn the section into a dense client directory.
- Force every logo into identical dimensions.
- Add automatic carousel movement.
- Use heavy card shadows.
- Recolor third-party marks arbitrarily.
- Link every logo without a functional reason.
- Include unverified institutional relationships.

The section should communicate credibility through restraint:
recognizable entities, accurate relationships, and a clean professional
presentation.

---

## 21. Contact, consultation form, WhatsApp, location and CAPTCHA

The V2 contact experience is the primary conversion area for users who
want to request information about Ancestral's services.

It must combine several complementary contact mechanisms without making
them compete:

1.  Structured consultation form.
2.  Direct WhatsApp channel.
3.  Contact information.
4.  Physical location supported by Google Maps.
5.  CAPTCHA protection for form submissions.

The approved content direction is conversational and action-oriented.
The contact area should make it easy for a potential client to
understand what to do next.

### 21.1 Contact experience goals

The contact section should:

- Reduce friction when requesting information.
- Make the service context explicit.
- Provide a direct alternative through WhatsApp.
- Reinforce that Ancestral is a real, reachable organization.
- Protect the public form from automated abuse.
- Preserve a professional but approachable tone.

The section should not overwhelm users with unnecessary fields or
technical explanations.

### 21.2 Homepage contact form

The homepage contains the general consultation form.

The form should allow the user to provide the information required for
Ancestral to respond and to select the service related to the
consultation.

The exact field model and API contract must remain aligned with the
existing frontend/API integration and any subsequent API V1.0.1
adjustments.

Visual design should not invent additional mandatory fields merely to
fill the layout.

### 21.3 Service-detail contact form

Each reusable service-detail experience should include the same contact
capability near the end of the service journey.

In this context:

- The current service must already be selected.
- The user should not need to re-identify the service they were just
  exploring.
- The selected service should remain visible and understandable.
- The form should reuse the shared contact component and validation
  behavior wherever practical.

The service-detail form is contextual conversion, not a separate contact
system.

### 21.4 Form visual composition

The form should use the approved V2 language:

- White or light surface.
- Poppins typography.
- Navy labels/headings.
- Dark-neutral supporting text.
- `neutral-light` field borders.
- `radius-sm` form controls.
- Green primary submit CTA.
- Generous spacing between groups.
- Clear validation messages.

Recommended field direction:

```scss
.form-control-v2 {
	min-height: 48px;
	border: 1px solid $color-border-default;
	border-radius: $radius-sm;
	background: $color-background-surface;
	color: $color-text-primary;
}
```

Text areas should provide enough vertical space for a useful
consultation without becoming excessively tall by default.

### 21.5 Labels

Visible labels are preferred.

Do not use placeholder text as the only field label.

Labels should:

- Be concise.
- Use Poppins `500–600`.
- Remain visible after the user enters data.
- Clearly identify required information.

Placeholder text may provide an example or formatting hint but must not
duplicate unnecessary instructions.

### 21.6 Required and optional fields

Required fields must be communicated clearly and consistently.

Do not rely only on an asterisk without context if the overall form does
not explain what the symbol means.

Optional fields should be identifiable where useful.

The form should ask only for information that Ancestral genuinely needs
to process the consultation.

### 21.7 Service selector

On the homepage, the service selector must use the same approved service
taxonomy as the service cards and service-detail routes.

The selector must not maintain an independent outdated list.

The selected value should map reliably to the API/contact model.

On a service-detail route, the relevant service is preselected
automatically.

If the user is allowed to change it there, that behavior should be
intentional and must not create ambiguity about the consultation
context.

### 21.8 Form focus states

Form controls require strong visible focus treatment.

Recommended direction:

```scss
.form-control-v2:focus-visible {
	border-color: $color-brand-accent;
	outline: 3px solid rgb(76 175 55 / 0.18);
	outline-offset: 1px;
}
```

The final implementation may integrate Bootstrap focus variables,
provided the resulting state remains consistent with the V2 system.

### 21.9 Validation states

Validation must be communicated using:

- Clear text.
- Appropriate semantic markup.
- Visual state.
- Color as a supporting cue, not the only cue.

Error messages should:

- Appear close to the relevant field.
- Explain what the user needs to correct.
- Avoid technical API language.
- Remain concise.

Example style of message:

```text
Ingresa un correo electrónico válido.
```

Avoid exposing raw backend validation messages.

### 21.10 Submission CTA

The form's primary action uses the green primary CTA defined in Section 13.

The label should communicate the action clearly, for example according
to the approved content:

```text
Enviar solicitud
```

During submission:

- Prevent duplicate requests.
- Preserve button width.
- Show a lightweight loading state.
- Communicate status accessibly.

### 21.11 Successful submission

After a successful request:

- Clearly confirm that the consultation was sent.
- Use conversational, reassuring copy.
- Do not remove all context abruptly.
- Avoid relying on a transient toast as the only confirmation.
- Provide an obvious next state.

The success message should not promise a response time unless that
response commitment has been approved by Ancestral.

### 21.12 Submission failure

If the API request fails:

- Preserve the user's entered information where safe and practical.
- Explain that the request could not be completed.
- Offer a reasonable retry.
- Keep WhatsApp visible as an alternative channel.
- Avoid exposing stack traces, HTTP codes, or internal API details.

### 21.13 CAPTCHA

The public contact form must include CAPTCHA protection.

The frontend is responsible for obtaining the CAPTCHA token according to
the selected provider's integration model.

The API must validate the token server-side before accepting the contact
request.

This design-system document does not define the provider or API
implementation details, but the user experience must follow these rules:

- CAPTCHA should create as little friction as practical.
- It must not visually dominate the form.
- Failure must be communicated clearly.
- Accessibility requirements of the selected provider must be
  reviewed.
- The form must not treat frontend-only CAPTCHA completion as
  sufficient security.

The API V1.0.1 follow-up should complete server-side token validation
and related contact-processing requirements.

### 21.14 CAPTCHA loading and failure

If CAPTCHA cannot initialize:

- Do not silently submit an unprotected request if server validation
  requires a token.
- Communicate the issue in user-friendly language.
- Allow retry where practical.
- Keep the alternative WhatsApp channel available.

The interface should not expose provider-specific technical errors to
the user.

### 21.15 WhatsApp channel

WhatsApp has its own visible space in the contact experience.

It should be presented as an alternative for users who prefer direct
conversation rather than the structured form.

The wording should make the channel explicit.

Preferred direction:

> **¿Prefieres hablar directamente?**\
> Escríbenos por WhatsApp.

The exact final Spanish copy should remain aligned with
`content-architecture.md`.

The WhatsApp action must follow the button/icon rules established in
Sections 13 and 14.

### 21.16 WhatsApp distinction from Contact

`Contacto` refers to the broader contact experience.

`WhatsApp` refers to one specific communication channel.

The interface must preserve this distinction in:

- Header navigation.
- Contact section.
- Service-detail CTA area.
- Accessible labels.

Do not label the WhatsApp action simply as `Contacto` when the page
already contains a Contact destination.

### 21.17 Contact information

Where approved information is available, the contact area may display:

- Telephone.
- Email.
- Physical address.
- Business/contact hours.
- Relevant social channels.

Icons may support scanning according to Section 14.

The actual text must remain visible and selectable.

Contact details must come from approved Ancestral information and should
not be inferred from mockup placeholders.

### 21.18 Physical address and Google Maps

The contact experience should contemplate an embedded Google Maps view
corresponding to the approved physical address shown in Ancestral's
corporate information/brochure.

The map should:

- Reinforce physical presence.
- Be clearly associated with the visible address.
- Use a restrained container consistent with V2 radii.
- Avoid dominating the form.
- Recompose cleanly on mobile.

The visible textual address remains authoritative for users; the map
does not replace it.

### 21.19 Map interaction and accessibility

An embedded map is an interactive third-party surface and should be
integrated carefully.

Requirements:

- Provide a meaningful title/accessible label for the embed.
- Preserve the address as HTML text outside the map.
- Avoid trapping keyboard users unnecessarily.
- Ensure the map does not create horizontal overflow.
- Consider a direct map-opening action if it improves usability.

If privacy, performance, or third-party-loading concerns justify it, the
implementation may use a lightweight map preview or consent-based
loading pattern while preserving the approved contact experience.

### 21.20 Map performance

Third-party maps can add substantial page weight.

The map is below the fold and should not compete with initial Hero
performance.

Preferred direction:

- Lazy-load the map/embed when technically appropriate.
- Reserve its dimensions to avoid layout shift.
- Avoid loading unnecessary map scripts during initial render.
- Evaluate Lighthouse impact.

The exact integration strategy belongs to implementation.

### 21.21 Contact layout

Desktop may use a two-column composition, for example:

- Form as the primary conversion surface.
- Contact information, WhatsApp, and/or map as the complementary
  surface.

The approved visual hierarchy should make the form easy to locate
immediately.

Tablet/mobile should stack content in a logical reading order.

Recommended mobile priority:

1.  Contact introduction.
2.  Form.
3.  WhatsApp alternative.
4.  Contact details.
5.  Location/map.

The final order may be refined during implementation according to the responsive principles in Section 24 while preserving usability and logical reading order.

### 21.22 Form spacing

Use the spacing tokens from Section 7.

Recommended rhythm:

- `8px` between label and field.
- `16–24px` between field groups.
- `24–32px` before submission actions.
- `32px+` between the form and separate WhatsApp/location blocks where
  stacked.

Avoid dense forms with insufficient vertical breathing room.

### 21.23 Autocomplete and input semantics

Use appropriate HTML input types and autocomplete attributes where
applicable.

Examples:

- `type="email"` for email.
- `type="tel"` for phone.
- Appropriate `autocomplete` values for name, email, telephone, and
  address-related fields where relevant.

This improves mobile keyboards, accessibility, and form completion.

### 21.24 Privacy and user expectations

The form should collect only the information required for the
consultation workflow.

If legal/privacy copy or consent becomes necessary:

- Present it clearly near the relevant submission context.
- Avoid hiding important consent inside ambiguous text.
- Do not preselect optional marketing consent.
- Keep legal language readable.

Detailed legal requirements should be reviewed separately if introduced.

### 21.25 Accessibility

The complete contact experience must:

- Use visible labels.
- Associate labels and fields programmatically.
- Communicate errors accessibly.
- Preserve logical tab order.
- Provide visible focus states.
- Maintain sufficient contrast.
- Expose submission status to assistive technologies.
- Use semantic buttons and links.
- Keep WhatsApp purpose explicit.
- Preserve the physical address outside the map.
- Review the selected CAPTCHA provider's accessibility behavior.

### 21.26 Responsive behavior

Desktop: - Use the approved spacious multi-column composition where
appropriate. - Keep form width comfortable rather than excessively wide.

Tablet: - Rebalance columns or stack when the form becomes constrained.

Mobile: - Use a single-column form. - Allow the submit action to become
full-width when beneficial. - Keep WhatsApp easy to activate. - Make map
width responsive. - Preserve comfortable touch targets. - Avoid
horizontal overflow from third-party embeds.

### 21.27 Performance and resilience

The contact experience should remain usable even when optional
third-party content is delayed.

The form and contact information should not depend on Google Maps being
available.

Likewise, WhatsApp presentation should not depend on the map.

CAPTCHA is part of form security and therefore requires explicit failure
handling rather than silent bypass.

### 21.28 Design consistency rules

Do:

- Keep the form conversational and concise.
- Reuse the approved service taxonomy.
- Preselect the service in service-detail contexts.
- Use the green primary CTA for submission.
- Give WhatsApp its own clear channel identity.
- Show the physical address as text.
- Integrate Google Maps without letting it dominate.
- Include CAPTCHA with server-side validation.
- Preserve user-friendly success and error states.
- Reuse one shared contact experience wherever practical.

Do not:

- Create unrelated forms for each service.
- Ask users to reselect the service unnecessarily.
- Use placeholders as the only labels.
- Expose backend errors.
- Treat WhatsApp and Contact as synonymous.
- Rely on the map as the only representation of the address.
- Load a heavy map above the fold.
- Validate CAPTCHA only in the browser.
- Add unnecessary required fields.
- Promise response times that Ancestral has not approved.

The V2 contact experience should make the next step obvious: send a
structured consultation, speak directly through WhatsApp, or identify
Ancestral's physical location, all within one coherent and trustworthy
conversion area.

---

## 22. Service detail experience and image gallery

The service-detail experience is the reusable destination users reach
after selecting one of Ancestral's service cards.

It must provide substantially more information than the homepage card
while preserving the same V2 visual language and avoiding the need to
create five unrelated page designs.

The experience should feel like a focused extension of the main website:
familiar header, consistent typography and colors, authentic
project/field imagery, structured service content,
environmental-compensation context where relevant, and a contextual
contact conversion area.

### 22.1 Purpose

The service-detail experience should:

1.  Explain the selected service clearly.
2.  Present the most relevant capabilities and benefits defined in the
    approved content architecture.
3.  Use client-provided imagery to demonstrate real work and
    environmental context.
4.  Preserve the transversal environmental-compensation narrative where
    applicable.
5.  Provide a clear path back to the broader service offering.
6.  End with a contextual contact opportunity.
7.  Reuse one scalable visual and technical structure across all
    approved services.

It should not behave like a modal containing a large amount of content.

### 22.2 Dedicated route/module

The approved direction is a dedicated reusable service module/page
rather than a temporary popup.

This provides:

- Better space for content.
- Better navigation and accessibility.
- Direct linking to individual services.
- Room for future service-specific evolution.
- Better SEO potential.
- A stable place for galleries, detailed copy, and contextual
  conversion.

The exact route structure belongs to implementation, but each service
should have a stable destination derived from its approved
identifier/slug.

### 22.3 Shared template

All approved services should use the same structural system.

A typical service-detail composition may include:

1.  Persistent V2 header.
2.  Service introduction/hero.
3.  Main service explanation.
4.  Key capabilities or scope.
5.  Image gallery/carousel.
6.  Environmental/territorial context where relevant.
7.  Contextual contact form.
8.  WhatsApp alternative.
9.  Standard V2 footer.

Not every service must contain the exact same amount of content, but the
visual framework should remain consistent.

### 22.4 Service introduction

The service-detail introduction should clearly identify the selected
service.

Recommended content hierarchy:

- Contextual service label where useful.
- Service title as the page H1.
- Concise conversational introduction.
- Optional supporting environmental image.
- Clear route back to the services overview when useful.

The title and copy must come from `docs/v2/content-architecture.md`.

### 22.5 Service content

Detailed service content should be derived from the approved V2 copy
rather than copied literally from the brochure.

The writing direction remains:

- Conversational.
- Professional.
- Persuasive without exaggeration.
- Technically credible.
- Complete enough to preserve relevant brochure information.
- Focused on what Ancestral can do for the client.

Long brochure lists should be reorganized into readable web structures
such as short paragraphs, capability groups, or concise bullet
collections.

### 22.6 Environmental-compensation context

Environmental compensation remains a transversal narrative rather than a
separate primary module.

Within a service detail, compensation-related information should appear
only where it is genuinely relevant to that service.

It may be expressed through:

- Supporting copy.
- Territory/environment imagery.
- A highlighted content block.
- Relevant capabilities.
- Contextual CTA language.

Do not insert the same generic compensation paragraph into every service
page.

### 22.7 Image gallery purpose

The gallery should use the collection of client-provided images to
demonstrate Ancestral's real work, environments, projects, field
activity, and service context.

The gallery is supporting evidence, not decoration.

Images should be selected for:

- Relevance to the service.
- Technical/visual quality.
- Authenticity.
- Variety.
- Useful composition across responsive viewports.

### 22.8 Carousel direction

A carousel is appropriate when a service has several relevant images.

The carousel should:

- Show one primary image clearly.
- Provide obvious previous/next controls.
- Provide position/context indicators where useful.
- Support touch gestures when practical.
- Remain keyboard operable.
- Never auto-advance by default.
- Avoid distracting transitions.

The implementation may use a lightweight existing solution or a
carefully scoped component. A heavy dependency should not be introduced
merely for decorative transitions.

### 22.9 Carousel controls

Previous/next controls should:

- Be visually recognizable.
- Use approved iconography.
- Meet touch-target requirements.
- Expose accessible names.
- Have visible focus states.
- Remain legible over the image.

Example accessible labels:

```text
Imagen anterior
Imagen siguiente
```

Controls should not obscure important image content.

### 22.10 Indicators and thumbnails

If the number of images is small, simple position indicators may be
sufficient.

If the service contains a larger curated gallery, thumbnails may be
considered.

Do not add both complex thumbnail navigation and excessive pagination
controls unless the gallery genuinely requires them.

The gallery should remain simple to understand.

### 22.11 Image captions

Captions should be used when they add useful context, such as:

- Type of field activity.
- Environmental intervention.
- Relevant service process.
- General project context approved for publication.

Do not invent project names, locations, clients, dates, or outcomes from
the appearance of an image.

Captions should remain concise and readable.

### 22.12 Image aspect ratio and cropping

Gallery images should use a consistent presentation frame where
practical.

Recommended direction:

- Controlled aspect ratio.
- `object-fit: cover` for standard gallery presentation.
- Focal-point adjustment when required.
- Rounded corners consistent with V2.

When cropping would remove technically important information, the image
should instead use a contained presentation or an appropriate
alternative crop.

### 22.13 Image expansion

A lightbox/full-image view may be introduced if users benefit from
inspecting field imagery in greater detail.

If implemented:

- It must be keyboard accessible.
- It must provide a clear close action.
- Focus must be managed correctly.
- Background interaction must be controlled.
- It must not become mandatory for understanding the service.

This capability is optional unless required by the implementation issue.

### 22.14 Navigation and return behavior

Users should never feel trapped inside a service detail.

The persistent header remains available.

The experience may additionally provide a contextual return action such
as returning to the services overview when useful.

Browser back navigation must behave normally.

Do not implement custom navigation that breaks expected browser history
behavior.

### 22.15 Contextual contact conversion

The end of each service detail should transition naturally into the
shared contact experience defined in Section 21.

The service must already be selected in the form.

The user journey should read naturally as:

```text
Discover service → understand capabilities → view real imagery → request information
```

WhatsApp remains available as a direct alternative.

### 22.16 Responsive behavior

Desktop: - Use editorial image/content compositions. - Allow generous
gallery dimensions. - Preserve comfortable reading width.

Tablet: - Rebalance columns. - Keep gallery controls easily reachable. -
Stack before content becomes compressed.

Mobile: - Prefer single-column reading flow. - Keep the service title
prominent. - Use a full-width responsive gallery within safe page
margins. - Preserve swipe/touch usability when implemented. - Keep
carousel controls large enough to activate. - Stack the contextual
contact area cleanly.

### 22.17 Accessibility

The service-detail experience must:

- Use one clear H1 for the selected service.
- Preserve logical heading order.
- Provide meaningful alternative text for informative images.
- Treat purely decorative imagery appropriately.
- Make carousel controls keyboard accessible.
- Announce control purpose clearly.
- Avoid auto-advancing content.
- Preserve logical focus order.
- Maintain sufficient contrast.
- Keep all important service information available as HTML text.

### 22.18 Performance

Service pages may contain many client images and require disciplined
asset delivery.

Do:

- Optimize images.
- Lazy-load below-the-fold gallery assets.
- Provide intrinsic dimensions/aspect ratios.
- Use responsive image sources.
- Avoid loading the complete full-resolution gallery immediately.
- Keep the first meaningful service image appropriately prioritized.

Do not:

- Ship original oversized client photographs directly to the browser.
- Preload every gallery image.
- Introduce a large carousel library without clear value.
- Duplicate images for desktop and mobile markup.

### 22.19 Future extensibility

The service-detail module is intentionally designed to evolve.

Future additions may include:

- More project imagery.
- Case studies.
- Downloadable technical material.
- Service-specific FAQs.
- Related projects.
- Certifications.
- Additional conversion actions.

Future functionality should extend the shared template rather than
fragmenting the service experience into unrelated page designs.

### 22.20 Design consistency rules

Do:

- Use one reusable service-detail system.
- Preserve the V2 visual language.
- Use approved conversational service copy.
- Prioritize authentic client imagery.
- Keep environmental-compensation messaging contextual.
- Use a simple accessible gallery.
- End with the service-aware contact experience.
- Preserve normal browser navigation.

Do not:

- Open full service content inside a small popup.
- Create five unrelated page designs.
- Copy brochure text without web-oriented rewriting.
- Auto-play the image carousel.
- Invent captions or project facts.
- Load every full-resolution image immediately.
- Ask users to select the same service again at the final contact
  step.

The service-detail experience should give each Ancestral service enough
room to communicate value while remaining part of one coherent, scalable
V2 product.

---

## 23. Footer

The V2 footer should preserve the approved preliminary design: a dark
navy institutional surface that closes the page cleanly, reinforces the
Ancestral brand, and provides useful navigation and contact information
without becoming visually dense.

The footer is a stable site-wide component and should appear
consistently on the homepage and service-detail experiences.

### 23.1 Purpose

The footer should:

1.  Provide a clear visual conclusion to the page.
2.  Reinforce the Ancestral brand.
3.  Offer secondary access to important navigation.
4.  Surface useful contact information.
5.  Provide approved social-network access.
6.  Contain required legal/copyright information.
7.  Remain compact enough that it does not feel like another major
    content section.

### 23.2 Approved visual direction

The footer should preserve:

- `brand-navy` background.
- White primary text.
- Light-neutral supporting text.
- Green accent details.
- Ancestral logo/brand identification.
- Clear grouped information.
- Comfortable spacing.
- Clean column structure on desktop.
- Responsive stacking on smaller screens.

It should remain visually consistent with the navy institutional
sections used elsewhere in V2.

### 23.3 Footer structure

The exact content must follow approved business information, but the
footer may organize information into groups such as:

1.  Brand/Ancestral summary.
2.  Primary navigation.
3.  Services or useful links where appropriate.
4.  Contact information.
5.  Social channels.
6.  Legal/copyright row.

The footer should not duplicate every piece of homepage content.

### 23.4 Brand area

The Footer uses the approved inverse Ancestral logo for dark/navy surfaces.

Production asset:

`src/assets/images/logo/full/ancestral-logo-white.svg`

The standard light-background logo must not be used on the navy Footer when it reduces contrast or visual consistency.

Rules:

- Preserve logo proportions.
- Use the approved white/inverse variant.
- Maintain clear space around the lockup.
- Avoid unnecessary visual effects.
- Do not reconstruct the brand name or descriptor separately with HTML.
- Keep supporting brand copy short.
- Use the symbol-only white variant only when the complete lockup is intentionally not required.

If a concise brand statement is included, it should align with the approved V2 narrative rather than introducing new marketing claims.

### 23.5 Footer navigation

Footer navigation provides a secondary route to important destinations.

Links should align with the approved information architecture.

Do not reintroduce outdated or unapproved items such as standalone
navigation destinations simply because they existed in an early mockup.

Footer links may include:

- Homepage sections.
- Approved service access.
- Contact destination.
- Other approved informational/legal destinations.

### 23.6 Link treatment

Default:

- White or light-neutral foreground.
- Clear readable typography.
- No heavy button container for ordinary links.

Hover:

- Green accent or another approved high-contrast treatment.
- Subtle transition.

Focus visible:

- Clearly visible keyboard focus indicator.
- Must remain perceptible on navy.

Links must not rely only on underline removal/color changes that make
interactive content difficult to identify.

### 23.7 Contact information

The footer may repeat essential contact details to improve accessibility
from any page.

Potential approved information includes:

- Email.
- Telephone.
- Physical address.
- WhatsApp.
- Relevant business hours.

The information must use the same approved source as the main contact
section.

Do not maintain inconsistent contact values in separate components.

### 23.8 Contact icons

Contact icons follow Section 14.

On the dark footer:

- White/light icons are appropriate.
- Green may be used selectively for emphasis.
- Icons should remain secondary to visible text.
- Icon-only contact links require accessible names.

### 23.9 Social networks

Approved social channels may be presented as compact icon links.

Requirements:

- Consistent icon dimensions.
- Adequate touch/click area.
- Accessible names.
- Visible hover and focus states.
- Appropriate external-link security behavior.

Do not include social networks that Ancestral has not approved or does
not actively use.

### 23.10 WhatsApp in the footer

WhatsApp may appear as a contact channel in the footer, but it should
remain explicitly identifiable as WhatsApp.

Do not label it generically as `Contacto`.

The footer treatment may be more compact than the dedicated WhatsApp CTA
in the Contact section.

### 23.11 Physical address

If the physical address appears in the footer:

- Use the same approved address as the Contact section.
- Keep it readable as text.
- Avoid embedding another Google Map in the footer.
- A map/directions link may be used if approved.

The full interactive map belongs to the main Contact experience.

### 23.12 Typography

Recommended footer typography:

- Poppins throughout.
- Section/group headings: `600`.
- Links/body information: `400–500`.
- Legal/copyright text: smaller supporting size.

Example direction:

```scss
.footer__heading {
	font-size: 1rem;
	font-weight: 600;
	color: $color-text-inverse;
}

.footer__text,
.footer__link {
	font-size: 0.875rem;
	line-height: 1.6;
}
```

### 23.13 Spacing

The footer should feel generous but controlled.

Recommended desktop direction:

```text
Top/bottom main footer padding: 56–72px
```

The legal/copyright row may use a smaller secondary spacing block.

Use the spacing system from Section 7 rather than arbitrary values.

### 23.14 Column layout

Desktop may use a multi-column Bootstrap grid.

Columns should be sized according to content rather than forced into
identical widths.

Tablet: - Reduce column count where necessary. - Preserve clear
grouping.

Mobile: - Stack groups vertically. - Maintain clear spacing between
groups. - Keep the brand area visually first. - Avoid extremely long
unbroken link lists.

### 23.15 Divider and legal row

A subtle divider may separate primary footer content from the
legal/copyright row.

Recommended treatment:

- Thin line.
- Low-contrast light/transparent color.
- Adequate spacing above and below.

The legal row may include:

- Copyright notice.
- Current year.
- Ancestral business name.
- Approved legal/privacy links if they exist.

Do not invent privacy-policy or terms destinations before those
resources exist.

### 23.16 Copyright year

The copyright year should not require manual annual code edits if it can
be rendered safely from the current date.

Example implementation direction:

```tsx
const currentYear = new Date().getFullYear();
```

The visible business/legal name must remain the approved one.

### 23.17 Footer relationship with contact

On the homepage, the footer follows the main Contact experience.

The transition should feel deliberate:

- Contact remains the conversion section.
- Footer becomes the closing institutional/navigation layer.

Do not duplicate the full contact form or map inside the footer.

On service-detail pages, the contextual contact area should likewise
precede the standard footer.

### 23.18 Accessibility

The footer must:

- Use semantic `<footer>` markup.
- Preserve logical heading structure.
- Maintain sufficient contrast.
- Provide visible keyboard focus.
- Use meaningful link text.
- Provide accessible names for social/icon-only links.
- Keep contact details available as text.
- Preserve logical reading order on responsive layouts.

### 23.19 Performance

The footer should remain lightweight.

Prefer:

- Existing icon libraries.
- Optimized logo assets.
- CSS/Bootstrap layout.
- Shared data for contact/navigation values.

Avoid:

- Large decorative background images.
- Additional map embeds.
- Heavy animation.
- Duplicate content payloads.

### 23.20 Design consistency rules

Do:

- Preserve the navy footer from the approved preliminary design.
- Use the correct light logo variant.
- Keep navigation and contact information concise.
- Reuse approved contact data.
- Use green accents selectively.
- Stack cleanly on mobile.
- Keep social links accessible.
- Maintain a subtle legal/copyright area.

Do not:

- Turn the footer into another full homepage section.
- Add unapproved navigation items.
- Duplicate the contact form or Google Map.
- Use inconsistent contact information.
- Add inactive social channels.
- Overload the footer with large decorative graphics.
- Introduce unrelated button styles.
- Invent legal destinations that do not exist.

The footer should close every V2 journey with the same impression
established throughout the site: professional, environmental, clear,
approachable, and visually consistent.

---

## 24. Responsive design system

Ancestral Landing V2 must provide a deliberate responsive experience
rather than a desktop composition that is merely scaled down.

The approved preliminary design establishes the desktop visual
direction. Responsive implementation must preserve its hierarchy,
identity, and conversion priorities while recomposing layouts according
to available space.

Bootstrap remains the primary responsive layout foundation.

### 24.1 Responsive principles

V2 responsive behavior should follow these principles:

1.  Preserve content hierarchy before preserving desktop geometry.
2.  Recompose layouts before elements become cramped.
3.  Simplify decorative complexity on smaller screens.
4.  Maintain comfortable reading widths and touch targets.
5.  Preserve authentic imagery and useful focal points.
6.  Avoid horizontal overflow.
7.  Keep primary actions easy to identify and activate.
8.  Use Bootstrap breakpoints and utilities as the structural baseline.
9.  Prefer fluid sizing where it improves continuity.
10. Test real content rather than designing only around ideal
    placeholder lengths.

Responsive behavior should be content-driven, not device-model-driven.

### 24.2 Bootstrap breakpoint foundation

The implementation should align primarily with Bootstrap's breakpoint
system.

Conceptually:

```text
xs   < 576px
sm   ≥ 576px
md   ≥ 768px
lg   ≥ 992px
xl   ≥ 1200px
xxl  ≥ 1400px
```

These breakpoints are structural tools, not mandatory visual change
points for every component.

A component should change layout when its content requires it.

Custom breakpoints should be introduced only when an approved
composition cannot be expressed reliably through the existing system.

### 24.3 Mobile-first implementation

Responsive SCSS should generally follow a mobile-first approach.

Base styles should support compact layouts, with larger compositions
progressively introduced through `min-width` breakpoints.

This improves:

- CSS clarity.
- Progressive enhancement.
- Maintainability.
- Alignment with Bootstrap.
- Reduced override complexity.

Desktop-first exceptions should require a clear implementation reason.

### 24.4 Fluid typography

Major typography should scale fluidly where appropriate.

Use `clamp()` for display and section headings when it preserves the
approved hierarchy.

Example:

```scss
font-size: clamp(2.25rem, 5vw, 3.5rem);
```

Do not scale every text size continuously.

Body text should remain stable enough to preserve readability.

### 24.5 Responsive spacing

Spacing should use the token system defined in Section 7.

Typical progression:

Mobile:

```text
40–64px section spacing
```

Desktop:

```text
64–96px section spacing
```

Major narrative sections may reach approximately:

```text
96–128px
```

Spacing should grow intentionally rather than proportionally with
viewport width.

### 24.6 Container behavior

Use Bootstrap containers to maintain readable alignment.

Full-width visual surfaces may extend to viewport edges while their
textual content returns to the main content grid.

Mobile layouts must preserve safe horizontal page padding.

Content should never touch viewport edges unless the approved visual
element is intentionally full-bleed.

### 24.7 Header

Section 15 remains authoritative.

Responsive summary:

Desktop: - Logo. - Horizontal navigation. - WhatsApp access.

Tablet: - Preserve horizontal navigation only while spacing remains
comfortable.

Mobile: - Compact logo. - Menu trigger. - Collapsed navigation. -
Persistent sticky behavior without excessive height.

The header should collapse before navigation becomes crowded.

### 24.8 Hero

Section 16 remains authoritative.

Desktop: - Preserve the asymmetric image/content composition.

Tablet: - Rebalance image and content regions. - Reduce decorative
complexity.

Mobile: - Use a deliberate single-column composition when necessary. -
Preserve headline → copy → CTA hierarchy. - Recompose photography and
organic shapes. - Simplify nonessential decoration.

Do not shrink the complete desktop Hero as one visual object.

### 24.9 Statistics card

Section 17 remains authoritative.

Preferred progression:

- Four metrics in one row on large screens.
- `2 × 2` when horizontal space becomes constrained.
- `2 × 2` or single-column on compact mobile depending on actual
  content.

Desktop overlap with the Hero may be reduced or removed on mobile.

### 24.10 Narrative content sections

Image/content sections should preserve semantic reading order.

Desktop may use two columns.

Mobile should normally stack into one column.

CSS visual reordering must not create a confusing keyboard or
screen-reader order.

The preferred mobile order should be decided from the narrative, not
from alternating desktop decoration.

### 24.11 Service cards

Section 19 remains authoritative.

Cards should wrap naturally as available width decreases.

Avoid:

- Excessively narrow cards.
- Tiny text.
- Forced five-column layouts.
- Horizontal scrolling as the default primary-service discovery
  pattern.

A single-column mobile layout is acceptable and often preferable when it
improves scanning.

### 24.12 Trusted entities

Logos should wrap into balanced rows.

Do not shrink every logo simply to preserve a desktop row.

Maintain optical balance and sufficient whitespace.

Auto-playing marquees are not part of the default responsive solution.

### 24.13 Contact

Desktop may use a multi-column composition.

Mobile should stack into a clear conversion flow.

Forms must use the available width without becoming edge-to-edge against
the viewport.

Third-party map embeds must remain responsive and must not introduce
horizontal overflow.

### 24.14 Service detail and gallery

Service-detail pages should preserve editorial layouts on wide screens
and transition to a single-column reading flow on compact screens.

Gallery controls must remain touch-friendly.

Images should use responsive sources and appropriate crops rather than
downloading oversized desktop assets to all devices.

### 24.15 Footer

Desktop may use multiple content columns.

Mobile should stack groups vertically with clear spacing.

The footer should not preserve empty desktop columns or overly
compressed link groups.

### 24.16 Touch targets

Interactive controls should provide a practical minimum target of
approximately:

```text
44 × 44px
```

This applies particularly to:

- Menu controls.
- Carousel arrows.
- Social icons.
- Icon-only links.
- Form controls.
- Buttons.

Visible icon size may be smaller while the interactive hit area remains
adequate.

### 24.17 Orientation and unusual widths

The design must remain usable at intermediate and unusual viewport
widths, not only a small set of screenshot sizes.

Test:

- Narrow mobile.
- Standard mobile.
- Landscape mobile.
- Tablet portrait.
- Tablet landscape.
- Standard laptop.
- Wide desktop.

The layout should not depend on exact device names.

### 24.18 Content resilience

Responsive layouts must tolerate realistic content variation.

Test with:

- Longer service titles.
- Longer institutional names.
- Validation messages.
- Large metric values.
- Contact details.
- Different image aspect ratios.

Avoid fixed heights that clip legitimate content.

### 24.19 Horizontal overflow

Production pages must not create unintended horizontal scrolling.

Common risk areas include:

- Organic Hero shapes.
- Decorative SVGs.
- Carousels.
- Map embeds.
- Long URLs/contact values.
- Negative positioning.
- Wide fixed-size elements.

Overflow should be corrected at the component source rather than hidden
globally without understanding the cause.

### 24.20 Responsive imagery

Use responsive image delivery where appropriate.

Preferred techniques:

- `srcset`.
- `sizes`.
- `<picture>`.
- Optimized image dimensions.
- `object-fit`.
- Controlled `object-position`.

Art direction may use alternate crops when a desktop composition cannot
survive mobile cropping.

### 24.21 Reduced decoration

On compact screens, decorative elements may be:

- Repositioned.
- Reduced.
- Simplified.
- Hidden.

Only nonessential decoration should be removed.

Brand identity must still remain recognizable through typography,
palette, imagery, and essential organic forms.

### 24.22 Testing strategy

Responsive validation should occur during implementation for every major
component.

At minimum verify:

- No overflow.
- Correct reading order.
- Readable typography.
- Stable image crops.
- Usable controls.
- Sticky-header behavior.
- Form usability.
- Gallery interaction.
- Footer stacking.

Browser developer-tool presets are useful, but final validation should
include free resizing rather than only fixed presets.

### 24.23 Responsive consistency rules

Do:

- Use Bootstrap as the structural baseline.
- Recompose instead of merely shrinking.
- Preserve semantic reading order.
- Use fluid typography selectively.
- Maintain touch targets.
- Optimize responsive imagery.
- Simplify decoration before compromising content.
- Test intermediate widths.

Do not:

- Reproduce desktop overlaps mechanically on mobile.
- Create a separate duplicated DOM tree for every breakpoint.
- Force fixed heights around variable content.
- Hide meaningful content only to make layouts fit.
- Introduce horizontal scrolling for primary page content.
- Add arbitrary breakpoints without a demonstrated need.

Responsive V2 should feel intentionally designed at every width while
preserving the same Ancestral identity and content priorities.

---

## 25. Accessibility and interaction standards

Accessibility is a core quality requirement of Ancestral Landing V2 and
must be considered during design and implementation rather than added
after visual completion.

The goal is to provide an experience that is perceivable, operable,
understandable, and robust while preserving the approved visual
identity.

V2 should target **WCAG 2.2 Level AA** as the general accessibility
benchmark.

### 25.1 Semantic structure

Use semantic HTML whenever the element's purpose is known.

Examples include:

- `<header>`.
- `<nav>`.
- `<main>`.
- `<section>`.
- `<footer>`.
- `<button>`.
- `<form>`.
- `<label>`.
- Appropriate heading elements.
- Semantic links for navigation.

Generic `<div>` elements should not replace native interactive
semantics.

### 25.2 Heading hierarchy

The homepage should contain one primary H1 in the Hero.

Major sections should normally use H2.

Internal subsections should follow a logical H3/H4 hierarchy.

Service-detail pages should use the service title as their H1.

Heading levels must reflect document structure rather than visual size.

CSS controls appearance; semantic levels communicate structure.

### 25.3 Keyboard accessibility

All interactive functionality must be operable using a keyboard.

This includes:

- Header navigation.
- Mobile menu.
- Buttons.
- Links.
- Service cards.
- Form controls.
- Carousel/gallery controls.
- Social links.
- WhatsApp actions.
- Any future dialogs or expandable controls.

Keyboard users must not encounter traps except where an accessible modal
pattern intentionally manages focus and provides a clear exit.

### 25.4 Focus visibility

Interactive elements must expose a clear `:focus-visible` state.

The indicator should:

- Have sufficient contrast.
- Remain visible on light and dark surfaces.
- Not be clipped.
- Remain distinct from hover and active states.
- Avoid relying only on a subtle color shift.

Do not globally remove outlines without providing an equivalent or
stronger focus treatment.

### 25.5 Logical focus order

Tab order should follow the logical visual/content journey.

Avoid positive `tabindex` values used to manually reorder the page.

Responsive CSS reordering must not create a mismatch between visual
order and keyboard order.

### 25.6 Color contrast

Text and meaningful interface elements must meet applicable WCAG AA
contrast requirements.

Special attention is required for:

- Green text on light surfaces.
- Light-neutral text on navy.
- Disabled controls.
- Form borders.
- Focus rings.
- Small footer text.
- Text placed near photography.

If the approved palette does not provide sufficient contrast in a
specific combination, adjust the semantic usage rather than preserving
an inaccessible combination.

### 25.7 Color independence

Do not communicate meaning using color alone.

Examples:

- Form errors need text/state cues.
- Active navigation requires more than a subtle color shift where
  necessary.
- Selected states should have structural or semantic indication.
- Success/failure feedback must contain text.

### 25.8 Text resizing and zoom

The interface should remain usable when users enlarge text or browser
zoom.

Avoid:

- Fixed-height text containers.
- Clipped labels.
- Controls that cannot expand.
- Layouts that overlap at increased text size.

Content should reflow naturally.

### 25.9 Links and buttons

Use links for navigation and buttons for actions.

Do not style a non-semantic element as an interactive control without
proper semantics.

Link/button labels should describe their purpose.

Avoid vague labels such as:

```text
Haz clic aquí
Más
Ir
```

when a more descriptive action is available.

### 25.10 Images

Informative images require meaningful alternative text.

Decorative images should not create unnecessary screen-reader output.

Do not:

- Repeat adjacent visible text unnecessarily in `alt`.
- Use filenames as alternative text.
- Describe purely decorative organic shapes.
- Embed important copy only inside images.

Client photography should be reviewed in context to determine whether it
is informative or atmospheric.

### 25.11 Icons

Section 14 remains authoritative.

Decorative icons should be hidden from assistive technologies.

Icon-only controls require meaningful accessible names.

Do not use icon component names as user-facing accessibility labels.

### 25.12 Forms

Section 21 remains authoritative.

Forms must provide:

- Visible labels.
- Programmatic label/control association.
- Clear required-state communication.
- Accessible validation.
- Useful error messages.
- Logical tab order.
- Appropriate autocomplete/input types.
- Accessible submission status.

Errors should be discoverable without forcing users to hunt through the
page.

### 25.13 Error handling

When submission or validation fails:

- Explain the problem in understandable language.
- Preserve user-entered information where practical.
- Associate field errors with their controls.
- Move or announce focus/status appropriately when necessary.
- Avoid exposing technical implementation details.

### 25.14 Status messages

Asynchronous states such as form success, failure, or loading should be
communicated to assistive technologies using appropriate semantic
patterns.

Do not rely exclusively on:

- Color.
- Spinner animation.
- Toasts that disappear before they can be perceived.

### 25.15 CAPTCHA

The selected CAPTCHA integration must be evaluated for accessibility.

The contact workflow must provide understandable feedback if CAPTCHA:

- Fails.
- Expires.
- Cannot initialize.
- Requires user action.

Security requirements must not silently create an unusable form for
keyboard or assistive-technology users.

### 25.16 Carousel accessibility

The service gallery must not auto-advance by default.

Controls require:

- Accessible names.
- Keyboard operability.
- Visible focus.
- Predictable behavior.

If slide position is communicated, it should be understandable without
relying only on visual dots.

Avoid automatically moving focus when slides change unless required by
the interaction pattern.

### 25.17 Mobile navigation accessibility

The menu trigger must expose:

- Accessible name.
- `aria-expanded`.
- `aria-controls` where appropriate.

The menu must be keyboard operable and provide an obvious close
mechanism.

If an offcanvas/dialog-like pattern is used, focus management must
follow the semantics of that pattern.

### 25.18 Sticky header and anchors

Sticky navigation must not hide:

- Anchored headings.
- Focused controls.
- Validation messages.
- Skip-link destinations.

Use appropriate `scroll-margin`/offset behavior.

### 25.19 Skip navigation

The implementation should include a keyboard-accessible skip link that
allows users to bypass repeated navigation and reach the main content.

Example destination:

```text
Saltar al contenido principal
```

The link may remain visually hidden until focused.

### 25.20 Motion and reduced motion

Motion should remain restrained throughout V2.

Respect:

```css
@media (prefers-reduced-motion: reduce);
```

Users who request reduced motion should not be forced through:

- Smooth scrolling.
- Decorative entrance animations.
- Large transforms.
- Animated counters.
- Nonessential carousel transitions.

Core functionality must remain available without animation.

### 25.21 Touch and pointer interaction

Interactive elements must not depend on hover.

Touch users must have direct access to all meaningful functionality.

Maintain adequate target size and spacing to reduce accidental
activation.

### 25.22 Third-party embeds

Google Maps, CAPTCHA, and any future third-party content must be
reviewed for:

- Keyboard usability.
- Accessible labeling.
- Focus behavior.
- Contrast where configurable.
- Loading/failure behavior.

The surrounding Ancestral interface should preserve essential
information even when an optional third-party embed is unavailable.

### 25.23 Language

The document/page language should be declared correctly.

For the Spanish V2 experience:

```html
<html lang="es"></html>
```

If isolated content uses another language, mark it appropriately where
necessary.

### 25.24 Accessible names

Accessible names should use natural Spanish and describe purpose.

Examples:

```text
Abrir menú
Cerrar menú
Imagen anterior
Imagen siguiente
Escríbenos por WhatsApp
```

Avoid internal developer terminology in accessibility labels.

### 25.25 ARIA usage

Prefer native HTML semantics before adding ARIA.

ARIA should enhance semantics where native HTML cannot fully express the
interaction.

Do not:

- Add redundant roles.
- Use ARIA to make non-interactive elements behave like controls when
  native controls are available.
- Add attributes without implementing the associated behavior.

### 25.26 Screen-reader-only content

Visually hidden text may be used when additional context is necessary
for assistive technologies.

Use a shared utility pattern rather than ad hoc clipping techniques.

Bootstrap accessibility utilities may be reused where appropriate.

### 25.27 Content clarity

Accessibility also includes understandable content.

V2 copy should remain:

- Concise.
- Conversational.
- Structured.
- Free from unnecessary technical jargon.
- Clear about actions and outcomes.

Technical environmental terminology may be used where it is necessary to
describe the service accurately.

### 25.28 Accessibility testing

Automated tools are useful but insufficient.

Implementation should include:

- ESLint accessibility checks where configured.
- Automated quality/analysis tools.
- Keyboard-only navigation review.
- Browser accessibility-tree inspection where needed.
- Contrast verification.
- Responsive zoom/text review.
- Manual form validation testing.
- Manual carousel/navigation testing.

Automated passing scores do not guarantee an accessible experience.

### 25.29 Accessibility consistency rules

Do:

- Target WCAG 2.2 AA.
- Use semantic HTML.
- Preserve logical heading and focus order.
- Make every interaction keyboard accessible.
- Provide strong visible focus.
- Maintain sufficient contrast.
- Write meaningful accessible names.
- Respect reduced-motion preferences.
- Test manually as well as automatically.
- Keep important information available without third-party embeds.

Do not:

- Remove focus outlines without replacement.
- Depend on hover or color alone.
- Use inaccessible custom controls when native elements exist.
- Auto-advance important content.
- Hide meaningful content from assistive technologies.
- Treat accessibility as a final cleanup task.
- Assume an automated scanner proves compliance.

Accessibility should be a natural consequence of the V2 component
system: clear semantics, predictable interaction, strong visual states,
readable content, and inclusive behavior across devices and input
methods.

---

## 26. Photography and media guidelines

Photography is central to Ancestral Landing V2 because it provides visual evidence of territory, environmental work, field activity, and the real contexts in which Ancestral operates. The preferred direction is authentic, environmental, territorial, and professional. Client-provided material should be prioritized whenever relevant and technically suitable.

### 26.1 Core principles

Photography should prioritize authentic Ancestral material; represent territory, ecosystems, environmental processes, field work and service contexts truthfully; reinforce environmental-compensation messaging where relevant; support the section in which it appears; preserve a natural visual character; and remain optimized for web delivery.

### 26.2 Source priority

Preferred order: approved Ancestral photographs; approved project/field material; brand-specific assets; and appropriately licensed external imagery only when required. Stock photography should not replace suitable authentic material merely because it appears more polished.

### 26.3 Selection and factual accuracy

Select images for relevance, technical quality, composition, focal point, authenticity, responsive crop potential, and publication suitability. Do not infer project names, clients, locations, dates, species, certifications, environmental results, or scope of work from an image.

### 26.4 Hero photography

The Hero image must provide strong visual quality, environmental/territorial identity, a useful responsive focal area, and compatibility with the navy/green organic composition. Section 16 remains authoritative for Hero composition, responsive behavior, and LCP.

### 26.5 Narrative and service photography

Images in institutional and territorial sections must reinforce their accompanying narrative. Service-detail imagery should be curated for the specific service rather than reused indiscriminately across every gallery. Section 22 remains authoritative for gallery behavior.

### 26.6 Human subjects

Use identifiable-person photography only when suitable for publication. Preserve professional context and do not add names, roles, affiliations, or implied endorsements unless supplied and approved.

### 26.7 Image treatment

Acceptable adjustments include crop, exposure correction, mild contrast adjustment, compression, format conversion, and focal-point adjustment. Avoid heavy grading, artificial green tinting, excessive sharpening, strong filters, or effects that make authentic field photography appear synthetic.

### 26.8 Organic framing

Photography may use rounded containers, organic masks, curved compositions, and layered navy/green forms consistent with the approved design. Do not invent a different complex mask for every image.

### 26.9 Aspect ratio and cropping

Use a small intentional family of proportions for Hero, editorial, gallery, and supporting imagery. Where a fixed frame is required, `object-fit: cover` is preferred, with `object-position` used to protect meaningful focal content. If cropping removes important information, use an alternative presentation.

### 26.10 Responsive art direction

Where necessary use `<picture>`, responsive source variants, art-directed crops, `srcset`, `sizes`, and controlled `object-position`. Mobile should not receive a meaningless miniature of a desktop-wide composition.

### 26.11 Formats, resolution and compression

Prefer efficient modern web formats such as AVIF or WebP where practical, optimized JPEG where needed, and SVG for vector graphics. Do not ship original oversized camera files. Delivery resolution and compression should reflect the rendered role and dimensions.

### 26.12 Loading and layout stability

Critical above-the-fold imagery should be prioritized and should not be lazy-loaded when that harms LCP. Below-the-fold media may use native lazy loading. Always reserve layout space through intrinsic dimensions or `aspect-ratio` to avoid layout shift. Do not preload complete galleries.

### 26.13 Alternative text and captions

Informative images require concise contextual alternative text. Atmospheric/decorative imagery should use the appropriate decorative treatment. Do not use filenames, invent facts, or unnecessarily repeat adjacent text. Captions are appropriate only when they provide useful approved context.

### 26.14 Decorative and future media

Botanical line art, dots, organic shapes, and brand motifs are decorative media and should preferably use lightweight SVG/CSS. V2 does not require video. If introduced later, video must have a clear purpose, accessible controls/captions where required, no autoplay with sound, and an appropriate performance strategy.

### 26.15 Asset organization and naming

Production assets should be organized by purpose and should use descriptive, stable filenames.

Approved V2 brand-asset locations include:

```text
src/assets/images/logo/
├── full/
│   ├── ancestral-logo.svg
│   └── ancestral-logo-white.svg
└── symbol/
    ├── ancestral-symbol.svg
    └── ancestral-symbol-white.svg

src/assets/icons/services/
├── environmental/
├── forestry/
├── agricultural/
├── water-resources/
└── occupational-safety/

public/
├── favicon.svg
├── favicon.ico
└── apple-touch-icon.png
```

These locations are part of the approved V2 asset architecture.

Codex and developers should reuse these production assets rather than recreating equivalent logos, symbols, service icons, or browser identity assets.

Other media should follow the same purpose-oriented organization, such as Hero, service photography, institutional logos, and decorative graphics.

Use descriptive stable filenames such as `hero-territory.webp` or `service-restoration-01.webp`.

Avoid ambiguous camera filenames and do not encode unverified client/project facts into asset names.

### 26.16 Rights and approval

Only media Ancestral has the right to publish should enter production. Receipt of a file does not automatically prove public-web approval. Uncertain assets should be flagged for client confirmation.

### 26.17 Consistency rules

Do prioritize authentic photography, match imagery to real content, preserve natural color, curate galleries, control responsive focal points, optimize delivery, reserve dimensions, and verify publication suitability. Do not fill the site with generic stock imagery, invent facts from photographs, apply heavy filters, ship oversized originals, reuse imagery indiscriminately, or crop away meaningful content.

Photography should make V2 feel grounded in real territory and real environmental work while remaining efficient and coherent.

---

## 27. Motion and transitions

Motion in Ancestral Landing V2 should support clarity, feedback, and continuity. The approved identity does not require a highly animated experience. The default direction is restrained, purposeful, and professional.

### 27.1 Principles

Motion should communicate interaction feedback and state changes, preserve spatial continuity, remain subtle, avoid delaying content, respect user preferences, avoid unnecessary JavaScript, and never be required to understand information.

### 27.2 Motion hierarchy

Priority: functional feedback; navigation/state transitions; spatial continuity; optional decorative enhancement. Decorative motion has the lowest priority.

### 27.3 Duration and easing

Recommended starting tokens:

| Token         |    Duration | Use                                     |
| ------------- | ----------: | --------------------------------------- |
| `motion-fast` | `120–150ms` | Hover, color, compact controls          |
| `motion-base` | `180–220ms` | Buttons, cards, simple UI states        |
| `motion-slow` | `280–350ms` | Panels, offcanvas, restrained entrances |

Prefer a small easing family such as `ease` and `cubic-bezier(0.22, 1, 0.36, 1)`. Transitions longer than roughly `500ms` should require a clear reason.

### 27.4 Properties

Prefer `opacity`, `transform`, `color`, `background-color`, `border-color`, and `box-shadow`. Avoid continuously animating layout-heavy properties when a transform can achieve the same result.

### 27.5 Buttons, cards and navigation

Buttons should use subtle color/border/shadow feedback and must not bounce or pulse. Service cards may use the approved `translateY(-2px)` hover treatment with subtle elevation. Navigation should use short color/indicator transitions without shifting surrounding content.

### 27.6 Sticky header

The top-to-scrolled state should be almost imperceptible: subtle shadow or border only. Avoid dramatic height collapse, logo zoom, repeated hide/show behavior, or strong transparency changes.

### 27.7 Mobile menu

Bootstrap offcanvas motion may be retained when suitable. It should be brief, predictable, accessible, and compatible with reduced-motion preferences.

### 27.8 Hero and decorative elements

The Hero does not require entrance animation. If later introduced, motion must not delay the H1 or CTAs, should remain short, and must respect reduced motion. Botanical lines, dots, and organic shapes should normally remain static.

### 27.9 Statistics and trusted entities

Statistics should remain static by default; animated counters are not required. Institutional logos should not use infinite marquees, automatic scrolling, or repeated attention-seeking motion.

### 27.10 Forms and feedback

Use motion only to clarify focus, validation, loading, success, or failure. Avoid shaking fields as the primary error cue. Loading indicators should preserve control dimensions and communicate status accessibly.

### 27.11 Carousel

Service-gallery transitions should be short and restrained, using a simple slide or fade. No autoplay, elaborate 3D effects, or large zoom transitions. The user controls when the gallery moves.

### 27.12 Smooth scrolling

Smooth scrolling may support in-page navigation when it preserves browser expectations and sticky-header offsets. It must respect `prefers-reduced-motion`.

### 27.13 Scroll-triggered animation

Scroll-triggered entrances are optional rather than baseline. If introduced, use them sparingly, avoid hiding content while waiting for intersection, avoid replaying every time the user scrolls, and do not add a heavy dependency solely for this effect.

### 27.14 Parallax

Parallax is not part of the default V2 direction because it can introduce motion discomfort, rendering cost, mobile complexity, and visual competition. It requires a specific approved reason.

### 27.15 Reduced motion

V2 must respect `prefers-reduced-motion`. A baseline may disable smooth scrolling and reduce nonessential transition/animation durations. Functionality must remain fully available without motion.

### 27.16 Performance

Prefer CSS transitions for simple states. Avoid continuous decorative scroll listeners, large animation libraries without demonstrated value, expensive blurred-layer animation, and repeated layout-triggering effects. Motion must not materially degrade Core Web Vitals.

### 27.17 Interaction consistency

Equivalent interactions should feel equivalent across V2. Hover timing, focus immediacy, card movement, button feedback, and service-card behavior should come from shared rules rather than individual animation personalities.

### 27.18 Consistency rules

Do keep motion restrained, use shared duration/easing tokens, prioritize functional feedback, animate performant properties, keep the sticky header stable, keep galleries user-controlled, respect reduced motion, and ensure the site works perfectly without animation.

Do not animate merely to make the site feel modern, auto-advance important content, use animated counters by default, create infinite logo marquees, add parallax without approval, pulse CTAs, animate every element on scroll, delay important content for entrances, or add heavy dependencies for minor transitions.

Motion in Ancestral V2 should be noticed mainly through the quality of interaction, not through the quantity of animation.

---

## 28. Design tokens and SCSS implementation architecture

Ancestral Landing V2 must evolve the SCSS architecture already established in V1 rather than replace it with a new styling methodology without a demonstrated need.

V1 already separates styling responsibilities into `abstracts`, `base`, `components`, `sections`, and `utilities`, with `bootstrap-extensions.scss` and `index.scss` acting as transversal integration points. V2 should preserve that conceptual model while making the design system more explicit, token-driven, consistent, and scalable.

The objective is not to reproduce every V1 implementation detail. The objective is to retain the architecture that works, correct inconsistencies, and materialize the V2 design decisions through a disciplined SCSS system.

### 28.1 Architectural baseline

The V2 styling architecture should continue to follow this conceptual structure:

```text
src/styles/
├── abstracts/
│   ├── _colors.scss
│   ├── _fonts.scss
│   ├── _functions.scss
│   ├── _responsive.scss
│   └── _variables.scss
│
├── base/
│   └── _base.scss
│
├── components/
│   └── ...
│
├── sections/
│   └── ...
│
├── utilities/
│   └── _utilities.scss
│
├── bootstrap-extensions.scss
└── index.scss
```

New partials may be introduced when a responsibility becomes large or conceptually distinct, but the architecture should not be fragmented merely to create more files.

### 28.2 Responsibility of `abstracts`

`abstracts` contains the foundations used to build the visual system.

Files in this layer should primarily define:

- Design tokens.
- SCSS maps.
- Functions.
- Mixins.
- Responsive helpers.
- Reusable calculations.

They should generally avoid producing component-specific CSS directly.

The V1 pattern of retrieving values through reusable functions should be preserved and extended where useful.

Conceptually:

```scss
color: functions.get-color(primary);
font-family: functions.get-font-family(inter);
font-size: functions.get-font-size(base);
```

V2 should favor semantic access to design-system values instead of repeatedly introducing literal values inside components and sections.

### 28.3 Token ownership

Tokens should live in the file that best represents their responsibility.

Recommended ownership:

```text
_colors.scss / color maps
    Brand and semantic color foundations.

_fonts.scss / typography maps
    Font families, sizes, weights, and line-height foundations.

_responsive.scss
    Breakpoints and responsive mixins.

_variables.scss
    Remaining shared design tokens that do not belong more naturally
    to another focused abstraction.

_functions.scss
    Reusable token-access and calculation functions.
```

The exact internal distribution may evolve during implementation, but `_variables.scss` must not become a catch-all file for every visual value.

### 28.4 Color tokens

The palette approved in this Design System must replace ad hoc color literals in V2 components.

Prefer semantic or design-system tokens for:

- Primary navy.
- Brand greens.
- Accent green.
- Text colors.
- Muted text.
- Background surfaces.
- Borders.
- Feedback states where defined.

Avoid component code such as:

```scss
color: #333;
background: #007bff;
```

when the value belongs to the established design language.

A literal value is acceptable only when it is genuinely local, intentionally unique, and not a reusable design decision.

### 28.5 Typography tokens

Typography should materialize the hierarchy defined earlier in this document.

The V1 font-map/function approach provides the foundation, but V2 should ensure that:

- Every loaded font weight is actually required.
- Repeated font sizes come from the system.
- Heading behavior remains responsive where defined.
- Line-height is treated as part of typography.
- Component-specific typography does not silently create a parallel scale.

Use `clamp()` selectively where Section 24 defines fluid behavior.

### 28.6 Spacing tokens

V2 should establish a coherent spacing scale rather than accumulating unrelated margins and paddings.

Bootstrap spacing utilities remain the first option for common layout spacing.

`bootstrap-extensions.scss` may extend Bootstrap where the approved design requires additional reusable spacing values.

Custom SCSS spacing should be introduced when:

- The value represents a design token.
- The relationship cannot be expressed cleanly with Bootstrap utilities.
- The component requires an internal spacing rule that should not be encoded repeatedly in JSX.

Avoid arbitrary sequences such as:

```scss
margin-top: 37px;
padding-bottom: 53px;
gap: 27px;
```

unless those values are necessary to reproduce an approved composition and cannot reasonably belong to the shared scale.

### 28.7 Radius, shadow, border and elevation tokens

Repeated visual properties should be centralized when they form part of the V2 language.

This includes:

- Card radius.
- Button radius.
- Form-control radius.
- Standard borders.
- Card elevation.
- Sticky-header shadow.
- Overlay treatments.

Do not create multiple nearly identical shadows or radii for components serving equivalent visual roles.

### 28.8 Motion tokens

Section 27 defines the motion language.

Durations and easing values used repeatedly should be materialized as shared tokens rather than duplicated across partials.

Component styles may choose among the approved motion tokens, but should not invent independent timing systems.

### 28.9 Z-index strategy

V2 should use a small intentional z-index scale.

Typical layers may include:

```text
content
decorative layers
sticky header
offcanvas/navigation overlays
dialogs or exceptional overlays
```

Avoid arbitrary escalation such as:

```scss
z-index: 999;
z-index: 9999;
z-index: 99999;
```

A component should use the lowest layer that satisfies its actual stacking responsibility.

### 28.10 Responsive architecture

The centralized V1 responsive abstraction should be preserved.

V2 should continue aligning its breakpoint foundation with Bootstrap and use shared responsive mixins rather than scattering raw media-query values throughout the codebase.

Prefer:

```scss
@include responsive.style-in-tablet {
	// ...
}
```

over repeatedly writing equivalent breakpoints in individual files.

A custom media query is acceptable when the component has a demonstrated content-driven breakpoint that does not map cleanly to the shared system.

Such exceptions should remain rare and intentional.

### 28.11 Mobile-first behavior

Where practical, base component styles should describe the compact/mobile layout and progressively enhance at larger breakpoints.

This is consistent with Bootstrap and Section 24.

Do not mechanically rewrite stable V1 patterns solely to claim mobile-first compliance; apply the principle where it improves clarity and maintainability.

### 28.12 `base`

The `base` layer should contain truly global document behavior.

Appropriate responsibilities include:

- Box sizing.
- Body defaults.
- Global typography baseline.
- Base image behavior.
- Default form foundations where genuinely universal.
- Document-level accessibility behavior.

Global selectors must be treated carefully.

V2 should avoid broad rules that unintentionally alter semantics or accessibility across unrelated elements.

In particular, global focus outlines must not be removed, and text selection should not be disabled across broad content categories.

Section 25 remains authoritative for accessibility.

### 28.13 `components`

The SCSS `components` layer contains styles for reusable visual/interface components.

Examples expected in V2 may include:

```text
buttons
header
navbar
footer
service-card
statistics
contact-form
gallery
section-heading
icon treatments
```

A component partial should describe the component rather than a particular page location whenever the component is intended to be reusable.

### 28.14 `sections`

The `sections` layer contains composition-specific styling for complete homepage or page sections.

Examples may include:

```text
hero
about
territory
services
trusted-entities
contact
```

Section styles may coordinate layout between reusable components, but should not duplicate the internal implementation of those components.

A useful rule is:

> Components own themselves; sections own composition.

### 28.15 `utilities`

Utilities should remain small, generic, and genuinely reusable.

Before creating a custom utility, check whether Bootstrap already provides the required behavior.

Custom utilities are appropriate when:

- The behavior is used across multiple unrelated contexts.
- It has a stable semantic/visual purpose.
- It avoids meaningful repetition.

Do not turn `utilities` into a storage location for one-off fixes.

### 28.16 Bootstrap extensions

Bootstrap remains the structural UI foundation of V2.

`bootstrap-extensions.scss` is the appropriate place for deliberate reusable additions to Bootstrap's utility vocabulary when the design system requires them.

Use Bootstrap first for:

- Containers.
- Grid.
- Flexbox.
- Common spacing.
- Display utilities.
- Responsive layout helpers.

Use Ancestral SCSS for:

- Brand identity.
- Organic compositions.
- Component appearance.
- Design-system tokens.
- Specialized responsive behavior.
- Visual states not adequately represented by Bootstrap.

Do not recreate Bootstrap utilities under different names.

### 28.17 Bootstrap versus custom SCSS

The decision rule should be:

```text
Is it generic layout behavior already supported by Bootstrap?
→ Prefer Bootstrap.

Is it part of Ancestral's visual identity or component contract?
→ Prefer custom SCSS.

Is it repeated and generic but missing from Bootstrap?
→ Consider bootstrap-extensions or a custom utility.

Is it unique to the composition of one section?
→ Keep it in that section's SCSS.
```

This prevents both Bootstrap overuse in JSX and unnecessary custom CSS.

### 28.18 Entry point

`index.scss` should remain the explicit SCSS entry point for Ancestral styles.

Its import/use order should remain understandable and intentional:

```text
framework extensions / foundations
base
utilities
components
sections
```

New partials must be registered deliberately.

Avoid hidden style-loading dependencies in arbitrary React components unless the architecture is intentionally changed in the future.

### 28.19 Selector scope

Selectors should be as local as practical.

Prefer component/section classes over styling generic descendants globally.

Avoid deep nesting such as:

```scss
.section {
  .container {
    .row {
      .column {
        .card {
          .content {
            ...
          }
        }
      }
    }
  }
}
```

Deep selector chains increase coupling to markup structure.

Nesting should improve readability, not reproduce the DOM tree.

### 28.20 Specificity

Keep specificity low and predictable.

Avoid:

- IDs for styling.
- Excessive selector chains.
- `!important` in component styles.
- Specificity escalation to override previous mistakes.

`!important` may remain appropriate in deliberate utility classes or when interoperating with framework behavior that genuinely requires it, but it should not become the normal conflict-resolution mechanism.

### 28.21 Hardcoded values

V2 should reduce hardcoded visual values compared with V1.

Not every number needs to become a token.

A value should generally become shared when it:

- Repeats.
- Represents a design decision.
- Defines a family of components.
- Is likely to change globally.
- Expresses a documented rule.

Local implementation values may remain local when abstraction would add no value.

### 28.22 Asset references

SCSS may reference decorative/background assets when the asset is inherently presentational.

Content-bearing images should normally remain in React/HTML so that:

- Alternative text can be expressed.
- Responsive image behavior can be controlled.
- Loading priority can be managed.
- Content and presentation remain semantically correct.

Section 26 remains authoritative for media.

### 28.23 Generated utility classes

V1 already demonstrates generated color and typography utility classes.

V2 may preserve this technique where the generated API remains useful.

However, do not generate large families of classes simply because SCSS makes generation easy.

Every generated family increases the CSS surface.

Prefer a smaller useful API over unused theoretical flexibility.

### 28.24 Naming

Class names should communicate responsibility and remain understandable without inspecting the full DOM.

Existing conventions may evolve, but naming should remain:

- Consistent.
- Searchable.
- Purpose-driven.
- Independent from temporary content where possible.

Do not encode implementation accidents such as exact positions or arbitrary visual values into reusable component names.

### 28.25 Duplication

Before adding a new rule, determine whether the same design decision already exists.

Prefer:

1. Existing Bootstrap utility.
2. Existing design token.
3. Existing reusable component style.
4. Existing custom utility.
5. New local rule.
6. New shared abstraction only when repetition or design-system meaning justifies it.

This order helps avoid both duplication and premature abstraction.

### 28.26 SCSS quality rules

Do:

- Preserve the proven V1 layer structure.
- Materialize V2 decisions through design tokens.
- Keep token ownership clear.
- Centralize responsive behavior.
- Use Bootstrap for generic layout.
- Use SCSS for Ancestral identity.
- Keep selectors shallow.
- Keep specificity predictable.
- Reuse established values.
- Keep section composition separate from component internals.
- Introduce abstractions only when they have a real responsibility.

Do not:

- Replace the V1 styling architecture without a demonstrated need.
- Scatter palette values through component files.
- Turn `_variables.scss` into a catch-all.
- Reimplement Bootstrap utilities.
- Use global selectors for local behavior.
- Disable focus outlines globally.
- Disable text selection broadly.
- Introduce arbitrary breakpoints repeatedly.
- Solve specificity problems with escalating `!important`.
- Tokenize every one-off number.
- Create utilities for single-use exceptions.

The V2 SCSS architecture should feel like a disciplined evolution of V1: familiar in structure, stronger in consistency, and capable of supporting the complete design system without accumulating visual debt.

---

## 29. Component architecture and reuse rules

Ancestral Landing V2 should evolve the React architecture already established in V1.

V1 already distinguishes pages, sections, reusable components, configuration, shared types, and tests. It also demonstrates useful composition and data-driven patterns through shared configuration such as menu and service data.

V2 should preserve these strengths while applying stricter engineering principles as the application grows.

The architectural priorities are:

- Clean code.
- Clear separation of responsibilities.
- High cohesion.
- Low coupling.
- Composition.
- Reuse where it provides real value.
- Predictable data flow.
- Testability.
- Maintainability.
- Avoidance of premature abstraction.

### 29.1 Core principle

Every module should have a clear reason to exist and a clear responsibility.

A component should be easy to answer in one sentence:

> What does this component own?

If the answer requires several unrelated responsibilities, the component may need to be decomposed.

If the answer is trivial and the component adds no meaningful abstraction, it may not need to exist.

### 29.2 Preserve the architectural layers

The V1 source organization provides a useful baseline:

```text
src/
├── components/
├── config/
├── pages/
├── sections/
├── types/
└── tests/
```

V2 may introduce additional focused folders when real responsibilities emerge, for example hooks or services, but should not create architectural layers speculatively.

Folder structure should follow the application, not an abstract enterprise template.

### 29.3 Pages

A page owns route-level composition.

Its responsibilities may include:

- Selecting the major sections/components required by the route.
- Providing route-level context.
- Coordinating page-specific data when necessary.
- Defining page-level semantic structure.

Pages should not contain the detailed implementation of every child component.

### 29.4 Sections

A section represents a major content/composition region.

Examples include:

```text
Hero
About
Territory
Services
TrustedEntities
Contact
```

Sections may:

- Compose reusable components.
- Consume approved content/configuration.
- Define section-level layout.
- Connect related presentation pieces.

Sections should not become generic dumping grounds for business logic, unrelated utilities, or duplicated component internals.

### 29.5 Components

A reusable component should represent a coherent UI concept.

Potential V2 examples include:

```text
Button
ServiceCard
StatisticItem
SectionHeading
ContactForm
Gallery
SocialLinks
Icon treatment
```

A component is a good abstraction when:

- It appears in multiple contexts.
- It has meaningful behavior.
- It encapsulates a stable visual contract.
- It reduces meaningful duplication.
- It represents a recognizable design-system primitive.

Reuse should be driven by responsibility, not by line count.

### 29.6 Do not microcomponentize

Not every wrapper, heading, icon, or three-line JSX fragment needs its own component.

Avoid abstractions such as:

```text
GreenText
LeftPaddingWrapper
TwentyPixelGap
HeroParagraphContainer
```

when they merely rename styling or markup without creating a stable reusable concept.

A component should reduce cognitive load, not increase navigation through the codebase.

### 29.7 High cohesion

Code that changes for the same reason should generally live together.

A `ServiceCard` should own the presentation and interaction contract of a service card.

It should not own:

- Contact-form submission.
- Global navigation.
- Route configuration unrelated to the card.
- Gallery state belonging to a detail page.

Keeping related responsibilities together makes components easier to understand and test.

### 29.8 Low coupling

Components should depend on the smallest stable contract they require.

Avoid making reusable components aware of:

- Parent implementation details.
- Unrelated global state.
- Exact page structure.
- DOM IDs owned by another feature.
- API implementation details they do not need.

Prefer explicit props and composition over hidden dependencies.

### 29.9 Composition over duplication

When two interfaces share a meaningful visual/behavioral primitive, compose that primitive rather than copy its implementation.

For example:

```tsx
<ServiceCard service={service} />
```

is preferable to reproducing the complete service-card markup in several sections.

However, two blocks that merely look somewhat similar should not automatically be forced into one highly configurable component.

### 29.10 Composition over excessive configuration

Avoid “universal” components with large collections of flags such as:

```tsx
<Card
  isService
  isCompact
  isHero
  hasImage
  hasIcon
  reverse
  dark
  centered
  ...
/>
```

when those flags represent fundamentally different responsibilities.

Prefer smaller coherent components or explicit variants when the visual concepts are genuinely related.

### 29.11 Data-driven content

V1 already uses shared configuration for menu and service data.

V2 should strengthen this approach for repeated structured content.

Service definitions should have a single authoritative data model that may contain approved fields such as:

```text
id / slug
title
summary
description
icon
image/gallery
environmental-compensation relevance
detail content
CTA/context data
```

The exact model should follow the approved content architecture rather than this illustrative list.

Repeated service UI should render from this shared data instead of duplicating service content in multiple components.

### 29.12 Single source of truth

A content fact that appears in multiple interfaces should preferably have one authoritative source.

Examples:

- Service names.
- Service slugs.
- Navigation identifiers.
- Contact information.
- Social URLs.
- Repeated statistics when they represent the same fact.

Do not maintain parallel arrays that must be manually synchronized.

### 29.13 Separate content from presentation

Large content datasets should not be embedded throughout presentational JSX.

Prefer:

```text
configuration/content data
        ↓
section/page composition
        ↓
reusable presentation component
```

This makes copy changes safer and reduces coupling between content and markup.

Small local labels that belong uniquely to one component do not need external configuration merely for architectural purity.

### 29.14 Separate behavior from presentation when justified

Behavior should be extracted when doing so creates a clear reusable or testable responsibility.

Potential examples:

- Contact-form submission logic.
- Gallery navigation behavior.
- Header scroll-state behavior.
- Reusable responsive/intersection behavior if introduced.

A custom hook is appropriate when it encapsulates meaningful React behavior.

Do not create hooks that simply wrap one `useState` or rename trivial component logic.

### 29.15 Props

Props should be:

- Explicit.
- Typed.
- Minimal.
- Semantically meaningful.

Prefer domain-oriented contracts:

```tsx
<ServiceCard service={service} />
```

when the component genuinely operates on a service concept.

Prefer focused primitive props when passing the entire object would unnecessarily couple the component to a large domain model.

Choose the smallest stable contract appropriate to the responsibility.

### 29.16 Prop drilling

Passing props through one or two composition levels is not inherently a problem.

Do not introduce global state or Context merely to avoid ordinary explicit data flow.

Context should be introduced only when data is genuinely shared across a broad subtree and prop passing has become structurally inappropriate.

V2 does not require a state-management library by default.

### 29.17 State ownership

State should live at the lowest level that needs to coordinate it.

Examples:

- A gallery owns its active slide when no external coordination is required.
- A mobile-navigation component may own its open/closed state.
- A form owns field/submission state unless a higher layer has a real reason to control it.

Avoid lifting state globally without necessity.

### 29.18 Side effects

`useEffect` should represent synchronization with an external system or lifecycle concern, not become a default mechanism for deriving state.

Prefer computed values during render when possible.

Event listeners, timers, observers, and similar effects must be cleaned up correctly.

### 29.19 Routing and navigation

Route definitions and navigation configuration should remain centralized enough to avoid duplicated route strings and section identifiers.

Service-detail navigation should derive from stable service identifiers/slugs rather than visible labels.

Components should navigate through routing contracts rather than constructing unrelated route knowledge internally.

### 29.20 Service-detail architecture

The service-detail experience defined in Section 22 should be reusable.

Do not create a completely separate page implementation for each service when the structure is shared.

Prefer a common route/page template driven by the selected service data.

Conceptually:

```text
/service/:slug
      ↓
resolve service
      ↓
ServiceDetailPage
      ↓
shared detail sections + service-specific content
```

This preserves consistency while allowing each service to contain its own approved content and gallery.

### 29.21 Forms

The contact form should be a coherent component/feature rather than submission logic distributed through the Contact section.

Separate where appropriate:

```text
Contact section
    └── ContactForm
            ├── field presentation
            ├── validation
            └── submission integration
```

Infrastructure/API details should not leak into unrelated presentation components.

### 29.22 External integrations

Google Maps, WhatsApp, CAPTCHA, and future external services should be integrated behind focused responsibilities.

Do not scatter provider-specific details across multiple sections.

When an integration becomes nontrivial, isolate its configuration/adapter behavior so that changing the provider does not require rewriting unrelated UI.

### 29.23 Icons

Icon selection should follow Section 14.

Where repeated icon styling exists, preserve reusable abstractions similar in spirit to V1's `RoundedIcon` rather than duplicating identical icon containers.

Do not create a React wrapper merely for every individual Lucide icon.

### 29.24 Bootstrap and React markup

Bootstrap classes may be used directly for generic layout and responsive behavior.

Avoid extremely long class strings that encode the entire visual identity of a component in JSX.

A practical division is:

```text
Bootstrap classes
→ generic layout and utilities

Semantic component classes
→ Ancestral visual identity and component-specific behavior
```

This keeps JSX readable while preserving the value of Bootstrap.

### 29.25 SCSS ownership

React components should not depend on the internal selectors of unrelated components.

A section may position a component as part of composition, but should avoid reaching deeply inside it to restyle its descendants.

If a reusable component needs a legitimate visual variant, expose a deliberate variant contract rather than overriding internal implementation from multiple parent sections.

### 29.26 Variants

Variants are appropriate when multiple presentations remain the same conceptual component.

Examples might include:

```text
Button: primary / secondary / text
SectionHeading: light / dark
```

Variants should be finite and intentional.

If variants require many conditional branches or fundamentally different markup, they may represent separate components.

### 29.27 Constants and configuration

Stable configuration should not be recreated during every render.

Keep reusable constants, content models, menu definitions, and service definitions outside component bodies when they do not depend on runtime state.

Naming should communicate domain meaning rather than implementation convenience.

### 29.28 Types

Shared domain contracts belong in focused TypeScript types/interfaces when they are used across modules.

Local prop types may remain near their component when they are truly local.

Avoid a single global types file containing unrelated interfaces.

Types should clarify boundaries rather than mirror every implementation detail.

### 29.29 Dependency direction

Prefer dependency flow from higher-level composition toward reusable lower-level primitives:

```text
pages
  ↓
sections
  ↓
components
  ↓
shared primitives/types/config as appropriate
```

This is a guideline rather than an artificial restriction.

The important rule is to avoid circular dependencies and lower-level reusable components importing higher-level page/section implementations.

### 29.30 Clean code

Implementation should favor:

- Descriptive names.
- Small coherent functions.
- Early returns when they improve clarity.
- Minimal nesting.
- Explicit domain concepts.
- Removal of dead code.
- No commented-out obsolete implementations.
- No duplicated constants.
- No unexplained magic values.
- No unnecessary cleverness.

Readable code is preferred over compressed code.

### 29.31 Comments

Comments should explain **why**, constraints, or non-obvious decisions.

Avoid comments that merely translate the code into English.

Prefer:

```ts
// Keep this listener passive because it only observes scroll position.
```

over:

```ts
// Set state to true.
setScrolled(true);
```

Architecture decisions that matter beyond one implementation detail belong in documentation rather than large comments inside components.

### 29.32 Functions

Functions should perform one coherent task at an appropriate abstraction level.

Avoid large event handlers that combine:

- Validation.
- Data transformation.
- Network requests.
- Analytics.
- UI state.
- Error formatting.

Extract responsibilities when separation makes the behavior easier to understand, reuse, or test.

### 29.33 Error boundaries and failure states

External or asynchronous behavior should fail predictably.

V2 should provide intentional user-facing failure states for operations such as contact submission.

Technical errors should not leak directly into UI copy.

Introduce React error boundaries only where they provide meaningful resilience; do not add them mechanically around every component.

### 29.34 Accessibility as component responsibility

Accessibility is part of the component contract.

A reusable component should own its appropriate:

- Semantics.
- Keyboard behavior.
- Accessible names.
- Focus behavior.
- ARIA where genuinely required.

Parents should not need to repair accessibility every time the component is used.

Section 25 remains authoritative.

### 29.35 Responsive behavior as component responsibility

Reusable components should own their internal responsive behavior.

Sections/pages own the larger composition.

This mirrors the SCSS principle:

> Components own themselves; sections own composition.

A parent should not need to know every internal breakpoint of a child component.

### 29.36 Testing strategy

The V1 practice of colocating tests with components and sections should be preserved.

Tests should prioritize observable behavior.

Test:

- What the user can see.
- What the user can activate.
- Navigation behavior.
- Accessible roles/names.
- Conditional states.
- Form behavior.
- Gallery behavior.
- Important configuration contracts.

Avoid tests that are tightly coupled to internal implementation details or private state.

### 29.37 Reuse and tests

A reusable component should have its own focused tests.

Parent sections should not retest every internal detail of that child.

Instead, parent tests should verify that the component is integrated correctly in the section.

This keeps tests layered and reduces duplication.

### 29.38 Refactoring rule

Do not abstract solely because two pieces of code currently look similar.

Before extracting a shared abstraction, ask:

1. Do they represent the same concept?
2. Do they change for the same reasons?
3. Is the shared contract stable?
4. Does extraction reduce complexity?
5. Will callers become clearer?

If the answer is mostly no, duplication may temporarily be safer than the wrong abstraction.

### 29.39 Dependency additions

Do not add a new npm dependency when React, Bootstrap, Lucide, the browser platform, or a small local implementation already solves the problem cleanly.

A dependency should provide enough value to justify:

- Bundle cost.
- Maintenance.
- Security surface.
- API coupling.
- Upgrade work.

This is especially important for animation, carousel, form, and utility libraries.

### 29.40 V1 evolution rules

V2 is not required to preserve every V1 component API or implementation detail.

Preserve:

- Useful architectural separation.
- Proven configuration patterns.
- Reusable concepts.
- Testing discipline.
- Bootstrap/SCSS integration that remains appropriate.

Improve or replace:

- Overly coupled implementations.
- Duplicated content.
- Hardcoded visual decisions.
- Accessibility problems.
- Components whose V1 responsibility no longer matches V2.
- Popup-specific service architecture superseded by the V2 service-detail experience.

Backward compatibility inside the frontend source is not more important than a clean V2 architecture unless an explicit requirement says otherwise.

### 29.41 Definition of a reusable component

Before calling a V2 abstraction reusable, it should satisfy most of the following:

- Represents a stable concept.
- Has a clear responsibility.
- Has an understandable public contract.
- Does not depend on one page's private structure.
- Can own its accessibility.
- Can own its internal responsive behavior.
- Can be tested independently.
- Reduces meaningful duplication or centralizes important behavior.

Reuse is a consequence of good boundaries, not a target measured by the number of components.

### 29.42 Architecture consistency rules

Do:

- Preserve the useful V1 layer separation.
- Keep responsibilities explicit.
- Favor high cohesion and low coupling.
- Use composition.
- Keep repeated content data-driven.
- Maintain a single source of truth.
- Keep state close to where it is used.
- Extract behavior when it creates a real boundary.
- Keep props typed and intentional.
- Keep dependencies flowing toward reusable abstractions.
- Test observable behavior.
- Refactor when an abstraction is justified.
- Keep accessibility and responsive behavior inside component contracts.

Do not:

- Create components for every JSX fragment.
- Build universal components with dozens of flags.
- Duplicate service content across sections.
- Introduce global state without a real need.
- Scatter integration/provider details throughout the UI.
- Couple reusable components to page internals.
- Reach deeply into child SCSS from parent sections.
- Create circular dependencies.
- Add dependencies for trivial problems.
- Abstract merely because two code blocks happen to look similar.
- Preserve V1 implementation details that conflict with the approved V2 architecture.

The V2 component architecture should remain easy for a developer—or Codex—to navigate without needing hidden knowledge of the codebase. Clear boundaries, predictable responsibilities, and restrained abstraction should make future changes local, testable, and safe.

---

## 30. Design system governance and Definition of Done

This Design System is the implementation contract for the visual, interaction, responsive, accessibility, media, SCSS, and component architecture of Ancestral Landing V2.

Its purpose is not only to describe the approved design. It must also prevent V2 from gradually diverging from that design as implementation progresses.

Every implementation decision should therefore be evaluated against the approved V2 documentation before introducing a new local solution.

### 30.1 Sources of truth

V2 has several complementary sources of truth, each with a different responsibility.

```text
docs/v2/content-architecture.md
→ What the website communicates and how content is structured.

docs/v2/design-system.md
→ How the experience looks, behaves, responds, and should be implemented visually.

Approved preliminary design/mockup
→ Visual reference and original design direction.

Existing V1 implementation
→ Technical baseline and reusable implementation reference where compatible with V2.
```

These sources should be used together rather than treated as interchangeable.

### 30.2 Decision hierarchy

When implementation reveals an apparent conflict, use the following general priority:

```text
1. Explicit approved V2 decisions documented in the Design System
2. Approved V2 Content Architecture for content/information decisions
3. Approved preliminary design for visual intent
4. Existing V1 implementation
```

The preliminary design remains essential visual evidence, but the Design System may intentionally refine details that were not fully specified in the mockup.

V1 is a technical starting point, not the authority for V2 behavior or appearance.

### 30.3 Content authority

`content-architecture.md` remains authoritative for:

- Approved section content.
- Service descriptions.
- Narrative hierarchy.
- Environmental-compensation framing.
- CTA intent.
- Information that must be preserved from approved source material.

The Design System should determine presentation without silently rewriting the approved content architecture.

If implementation requires a content change rather than a presentation adjustment, that decision should be resolved at the content level.

### 30.4 Visual authority

`design-system.md` remains authoritative for:

- Palette.
- Typography.
- Spacing principles.
- Buttons.
- Cards.
- Header.
- Footer.
- Responsive behavior.
- Photography treatment.
- Iconography.
- Motion.
- Accessibility interaction standards.
- SCSS architecture.
- Component/reuse principles.

Do not introduce a new visual convention simply because it is easier to implement.

### 30.5 Role of the preliminary design

The approved preliminary design should continue to guide:

- Overall visual character.
- Organic environmental forms.
- Image treatment.
- Header/footer character.
- Section rhythm.
- Cards.
- Statistics.
- Color relationships.
- Visual hierarchy.

It should not be interpreted as a pixel-perfect specification for every viewport.

Where the mockup does not define responsive or interaction behavior, the rules in this Design System apply.

### 30.6 Role of V1

V1 should be reused selectively.

Reuse is encouraged when an existing implementation:

- Has a clear responsibility.
- Remains compatible with the V2 design.
- Meets accessibility requirements.
- Fits the V2 architecture.
- Reduces risk or duplication.
- Can be adapted cleanly.

V1 should not be preserved merely because code already exists.

Replace or refactor V1 behavior when it conflicts with:

- Approved V2 content.
- Approved V2 visual direction.
- Accessibility.
- Responsive requirements.
- Service-detail architecture.
- Clean-code/component boundaries.
- Design tokens.
- Performance expectations.

### 30.7 No automatic inheritance

A V1 component, style, selector, breakpoint, interaction, or content structure must not automatically become part of V2.

Before reuse, verify:

```text
Does it still represent the same concept?
Does it meet the V2 design?
Does it meet the V2 accessibility standard?
Does it preserve clean architectural boundaries?
Does reuse actually reduce complexity?
```

If not, V2 should implement the approved behavior cleanly.

### 30.8 New design decisions

Implementation will occasionally expose cases not explicitly covered by this document.

When that happens:

1. Check whether an existing token, component, pattern, or rule already solves the problem.
2. Check Bootstrap capabilities where the need is generic layout behavior.
3. Prefer the closest established V2 pattern.
4. Avoid introducing a new convention for a single isolated case.
5. If the decision affects the system beyond one implementation detail, document it.

Codex or a developer should not silently create a parallel design language.

### 30.9 Exceptions

A deviation from the Design System is acceptable only when there is a clear reason, such as:

- Accessibility.
- Responsive usability.
- Browser/platform limitation.
- Performance.
- Technical feasibility.
- Approved business requirement.
- New client-approved design decision.

The exception should solve the constraint with the smallest possible deviation.

Convenience alone is not sufficient justification.

### 30.10 Updating the Design System

When implementation establishes a new reusable rule, the Design System should be updated.

Examples include:

- A new reusable token.
- A new component variant.
- A new interaction pattern.
- A new responsive rule used across components.
- A deliberate accessibility behavior.
- A change to an approved visual convention.

The codebase and Design System should not knowingly describe different systems.

### 30.11 Avoid documentation drift

Documentation should be reviewed whenever a change modifies an established V2 contract.

Do not leave obsolete guidance in the document after the implementation direction has been intentionally changed and approved.

Likewise, do not update documentation merely to justify an accidental implementation inconsistency.

The intended design decision should be resolved first.

### 30.12 Implementation sequence

For each major V2 section or component, implementation should generally follow this sequence:

```text
1. Review content architecture
2. Review relevant Design System sections
3. Review the approved preliminary design
4. Identify reusable V1/V2 foundations
5. Implement semantic structure
6. Apply responsive composition
7. Apply visual styling
8. Implement interaction/accessibility
9. Add or update tests
10. Validate quality and build
11. Perform visual/responsive review
```

This reduces the likelihood of styling a component before its responsibility and content are understood.

### 30.13 Component Definition of Done

A V2 component is not complete merely because it visually resembles the mockup on one desktop viewport.

Before considering a component complete, verify the applicable criteria below.

#### Structure

- Responsibility is clear.
- Semantic HTML is appropriate.
- Props are typed and intentional.
- No unnecessary coupling exists.
- Reuse is appropriate rather than forced.
- Content is sourced from the correct authority.

#### Visual implementation

- Approved palette is respected.
- Typography follows the Design System.
- Spacing follows established scales/principles.
- Radius, borders, and elevation are consistent.
- Iconography follows the approved system.
- No unexplained visual magic values were introduced.

#### Responsive behavior

- Mobile behavior is intentional.
- Tablet behavior is intentional.
- Desktop behavior matches the approved direction.
- Intermediate widths remain stable.
- No unintended horizontal overflow exists.
- Content is not clipped.
- Touch targets remain usable.

#### Accessibility

- Keyboard operation works.
- Focus is visible.
- Heading/semantic structure is correct.
- Accessible names are meaningful.
- Images use appropriate alternative-text behavior.
- Contrast is sufficient.
- Reduced-motion behavior is respected where applicable.
- Interactive states do not depend only on color or hover.

#### Interaction

- Hover, focus, active, loading, success, and error states are implemented where applicable.
- Motion follows Section 27.
- Browser/navigation expectations are preserved.
- No unnecessary automatic movement exists.

#### Code quality

- Code is readable.
- Responsibilities are separated.
- Duplication is justified or removed.
- No dead/commented-out implementation remains.
- No unnecessary dependency was added.
- SCSS follows Section 28.
- React/component architecture follows Section 29.

#### Testing

- Important observable behavior is covered.
- Accessibility-oriented queries are preferred where appropriate.
- Parent tests do not duplicate all child implementation tests.
- Existing tests remain valid or are intentionally updated.

A criterion that does not apply to a particular component may be omitted; the checklist is not intended to force irrelevant implementation.

### 30.14 Section Definition of Done

A complete page section should additionally verify:

- Approved content is present.
- Content hierarchy matches `content-architecture.md`.
- Section composition matches the V2 design direction.
- Child components are integrated without overriding their internals unnecessarily.
- Images are relevant and optimized.
- Section spacing works in relation to adjacent sections.
- Anchor/sticky-header behavior works where relevant.
- Mobile reading order is correct.
- No duplicated content source has been introduced.

### 30.15 Service-detail Definition of Done

Each service-detail experience must additionally verify:

- Correct service is resolved from a stable identifier/slug.
- Approved service content is displayed.
- Shared template is reused.
- Service-specific content remains possible.
- Gallery imagery is relevant to that service.
- Gallery does not autoplay.
- Gallery is keyboard/touch usable.
- Environmental-compensation content is contextual rather than generic.
- Contact form receives the selected service context automatically.
- Browser back/navigation behavior remains normal.

### 30.16 Contact Definition of Done

The contact experience must additionally verify:

- General and contextual service flows behave correctly.
- Service preselection works when arriving from a service detail.
- Required validation is understandable.
- Submission state is accessible.
- Failure does not destroy user-entered data unnecessarily.
- CAPTCHA behavior is integrated and understandable.
- WhatsApp remains an independent direct option.
- Contact data is consistent across the site.
- Map behavior is responsive and does not block essential information.

### 30.17 Media Definition of Done

Before a production image is accepted:

- Publication suitability is confirmed where required.
- Image is relevant to the content.
- No unverified project facts are implied.
- Crop preserves meaningful content.
- Responsive delivery is appropriate.
- Dimensions are reserved.
- File size is optimized.
- Loading priority is appropriate.
- Alternative-text treatment is correct.

Original oversized client assets should not be considered production-ready merely because they render successfully.

### 30.18 SCSS Definition of Done

Before styling is considered complete:

- Existing tokens were checked before introducing new values.
- Bootstrap was used where appropriate for generic layout.
- New design-system values live in the correct abstraction.
- Component styles own component internals.
- Section styles own composition.
- Selectors remain reasonably shallow.
- Specificity remains predictable.
- No arbitrary breakpoint duplication was introduced.
- `!important` is not being used to hide architecture problems.
- No unnecessary global selector affects unrelated content.

### 30.19 Quality gates

A V2 implementation should not be considered ready for merge while required project quality checks are failing.

At minimum, the repository's established quality pipeline should remain green for applicable changes, including:

```text
lint
tests
coverage generation
build
SonarCloud analysis
```

The exact thresholds and branch-protection requirements remain controlled by repository configuration.

The Design System should not duplicate those configuration values because they may evolve independently.

### 30.20 Manual review remains required

Automated checks cannot validate the complete design.

Every significant V2 implementation should also receive manual review for:

- Visual hierarchy.
- Responsive composition.
- Image cropping.
- Content accuracy.
- Keyboard navigation.
- Focus visibility.
- Interaction quality.
- Sticky-header behavior.
- Touch usability.
- Overall consistency with the preliminary design.

A green CI pipeline does not by itself constitute design approval.

### 30.21 Responsive review matrix

Major sections should be reviewed across representative ranges rather than one fixed device.

At minimum:

```text
narrow mobile
standard mobile
tablet portrait
tablet landscape / compact laptop
desktop
wide desktop
```

Free resizing should also be used to expose intermediate breakpoint problems.

### 30.22 Browser expectations

V2 should rely on modern browser standards supported by the project's actual deployment target.

At minimum, manual validation should include the primary browser used during development plus representative Chromium-based and other supported modern browser behavior when relevant.

Do not introduce browser-specific fixes without confirming that a real compatibility problem exists.

### 30.23 Performance review

Performance decisions should be proportional to actual impact.

Review especially:

- Hero/LCP image.
- Client photography.
- Gallery loading.
- Font loading.
- Third-party embeds.
- CAPTCHA.
- JavaScript dependencies.
- Animation.
- Layout shift.

Do not trade accessibility or maintainability for negligible micro-optimizations.

### 30.24 Codex implementation guidance

When Codex is used to implement V2, it should receive the relevant documentation as part of the task context.

For each issue, Codex should be instructed to:

1. Read the relevant V2 content and Design System sections before modifying code.
2. Inspect the existing implementation before creating new abstractions.
3. Preserve repository conventions where compatible with V2.
4. Avoid unrelated refactors.
5. Reuse existing foundations when appropriate.
6. Keep changes scoped to the issue.
7. Add/update tests for changed behavior.
8. Run the applicable quality checks.
9. Report intentional deviations or unresolved assumptions.
10. Reuse the approved V2 brand assets before creating, replacing, or approximating visual assets:
    - Logos and symbols: `src/assets/images/logo/`
    - Service-category iconography: `src/assets/icons/services/`
    - Browser/public identity assets: `public/favicon.svg`, `public/favicon.ico`, and `public/apple-touch-icon.png`

Approved production assets are part of the V2 implementation contract. Codex should not replace them with approximate Lucide icons, generated artwork, reconstructed logos, or alternative visual assets unless the Design System is intentionally updated first.

Codex should implement documented decisions, not independently redesign the experience.

### 30.25 Unresolved decisions

If Codex encounters a meaningful design/product decision that is not covered by the approved documentation, it should not silently choose a new direction when that choice could materially affect:

- Visual identity.
- Content.
- Navigation.
- Accessibility.
- Service behavior.
- User conversion flow.
- Architecture shared across future components.

The appropriate action is to surface the decision for review.

Minor implementation details that do not alter the approved contract may be resolved using established project conventions.

### 30.26 Issue scope

Each implementation issue should remain focused.

Avoid combining unrelated improvements simply because the same files are open.

If implementation reveals separate technical debt or a new requirement:

- Document it.
- Create/follow the appropriate issue workflow.
- Keep the current change focused unless the additional work is necessary to complete it safely.

This improves reviewability and release traceability.

### 30.27 Pull-request review

A V2 pull request should make it possible to answer:

```text
What approved requirement does this implement?
Which Design System/content rules apply?
What changed?
How was it tested?
Were new reusable patterns introduced?
Were any documented rules intentionally changed or deviated from?
```

Review should evaluate architecture and behavior, not only screenshots.

### 30.28 Completion of V2

V2 should be considered complete only when the experience works as one coherent product.

Completion therefore requires more than finishing every isolated component.

Final review should verify:

- Homepage narrative flows correctly.
- Service discovery flows correctly.
- Service-detail experiences are coherent.
- Contact conversion works.
- Visual language is consistent.
- Responsive behavior is consistent.
- Accessibility expectations are satisfied.
- Client imagery is correctly integrated.
- No obsolete V1 behavior leaks into V2 unintentionally.
- Quality gates pass.
- Production build/deployment behavior is validated.

### 30.29 Governance rules

Do:

- Treat V2 documentation as an implementation contract.
- Use each source of truth for its intended responsibility.
- Prefer documented patterns over local invention.
- Reuse V1 selectively.
- Update the Design System when a new reusable decision is approved.
- Keep implementation and documentation aligned.
- Validate manually as well as automatically.
- Keep issues and pull requests focused.
- Surface meaningful unresolved decisions.
- Require the complete Definition of Done, not just visual similarity.

Do not:

- Treat the preliminary mockup as a rigid desktop screenshot specification.
- Treat V1 as automatically authoritative.
- Let Codex invent product/design decisions silently.
- Add new tokens or variants for convenience without checking existing patterns.
- Change documented behavior only to match accidental implementation.
- Consider a component finished because it works at one viewport.
- Consider CI success equivalent to design approval.
- Merge known accessibility or responsive regressions.
- Allow documentation and implementation to knowingly diverge.

### 30.30 Final principle

The purpose of governance is not to make implementation bureaucratic.

It is to make decisions predictable.

A developer working on Ancestral Landing V2 should be able to determine:

```text
what to build,
where the decision came from,
which existing pattern to use,
how the component should behave,
how it should be implemented,
and how to know when it is finished.
```

When those answers remain clear, the Design System is doing its job.

Ancestral Landing V2 should therefore evolve through deliberate, documented decisions rather than accumulated exceptions, preserving the visual quality of the approved design and the engineering quality expected from the project.
