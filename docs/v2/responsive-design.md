# Ancestral Landing V2 --- Responsive Experience Specification

## 1. Purpose and scope

This document defines the approved responsive user experience for
**Ancestral Landing V2**.

Its purpose is to define the layout, responsive, interaction, and
component-behavior contract implemented by the production V2 experience.

This specification defines how the V2 experience must behave across:

- Mobile devices.
- Tablet devices.
- Desktop viewports.
- Large-screen desktop viewports.
- Touch and pointer-based interaction contexts.

The document covers:

- Mobile-first page composition.
- Responsive section structure and stacking.
- Header and navigation behavior.
- Hero composition and responsive adaptation.
- Institutional content presentation.
- Service-category presentation.
- Service-detail interaction and layout.
- Environmental Compensation / impact presentation.
- Experience and differentiator content.
- CTA placement and responsive behavior.
- Contact-section composition.
- Footer composition.
- Image cropping and scaling.
- Component reflow.
- Interactive states.
- Touch-target considerations.
- Basic responsive accessibility behavior.

The goal is not to create a separate experience for every possible
screen size.

V2 should use a **single coherent responsive system** in which content,
hierarchy, and visual identity remain consistent while layout adapts
progressively to available space.

### 1.1 What this document does not redefine

This specification does not redefine:

- Approved site content.
- Information architecture.
- Brand identity.
- Color palette.
- Typography system.
- Base spacing scale.
- Button visual language.
- Card visual language.
- Iconography.
- Logo variants.
- Photography style.
- Core accessibility principles already established by the Design
  System.

Those decisions belong to the source documents defined in Section 2.

This document may specify how those existing decisions behave
responsively, but it must not silently replace them.

### 1.2 Implementation boundary

This is a **design and behavior specification**, not an implementation
document.

It may describe expected component behavior and responsive relationships
in implementation-oriented terms when doing so removes ambiguity, but it
does not prescribe unnecessary React, TypeScript, or SCSS implementation
details.

Implementation changes must continue to follow this specification so
developers and automation do not invent undocumented layout or UX
decisions.

### 1.3 Responsive design objective

The responsive experience must preserve the same essential content
hierarchy and brand narrative across all supported viewport classes.

Responsive adaptation should prioritize:

1.  Content comprehension.
2.  Navigation clarity.
3.  Legibility.
4.  Comfortable interaction.
5.  Preservation of visual hierarchy.
6.  Appropriate image framing.
7.  Efficient use of available space.
8.  Consistency with the approved V2 identity.

Desktop should not be treated as the complete experience and mobile as a
reduced copy of it.

The responsive system should be designed **mobile first**, then
progressively enhanced as additional horizontal space becomes available.

### 1.4 Expected outcome

When this specification is complete:

- Every approved V2 section has a defined responsive composition.
- Mobile behavior is explicitly defined.
- Tablet behavior is explicitly defined.
- Desktop behavior is explicitly defined.
- Large-screen behavior is explicitly defined.
- Navigation behavior across viewport classes is resolved.
- Component stacking and reflow are predictable.
- Image behavior is defined.
- Relevant interactive states are defined.
- Touch and basic accessibility considerations are documented.
- Implementation can begin without unresolved responsive-layout or UX
  decisions.

---

## 2. Source documents and authority

The responsive experience is based on previously approved V2
documentation and visual direction.

This document must be interpreted together with the following sources.

### 2.1 Information architecture and content

Canonical source:

`docs/v2/content-architecture.md`

This document defines:

- V2 page structure.
- Approved section order.
- Content hierarchy.
- Navigation destinations.
- Section purpose.
- Content responsibilities.
- Service architecture.
- CTA intent.
- Contact and Footer information structure.

`responsive-design.md` determines **how that structure behaves across
viewport sizes**.

It must not silently add, remove, rename, or reorder approved content
responsibilities.

If a responsive decision appears to require an information-architecture
change, the conflict must be resolved explicitly rather than hidden
inside implementation.

### 2.2 Visual design system

Canonical source:

`docs/v2/design-system.md`

This document defines the approved V2 visual language, including:

- Color system.
- Semantic color usage.
- Typography.
- Spacing principles.
- Container principles.
- Buttons.
- Cards.
- Iconography.
- Border-radius conventions.
- Shadows and elevation.
- Photography treatment.
- Section backgrounds.
- Header visual behavior.
- Footer visual behavior.
- Interaction states.
- Accessibility and contrast requirements.
- Production brand assets.
- SCSS and component-architecture guidance.

`responsive-design.md` determines **how those visual rules adapt and
compose responsively**.

Responsive decisions must use the Design System rather than creating an
independent visual language.

### 2.3 Approved preliminary visual direction

The approved preliminary V2 design remains a visual reference for
composition, hierarchy, proportion, and brand character.

It establishes the intended direction for elements such as:

- Header composition.
- Hero hierarchy.
- Statistics / trust strip.
- Institutional presentation.
- Service-card presentation.
- Environmental territory content.
- Trusted-entity presentation.
- Footer composition.
- Overall balance between navy, green, white, imagery, and whitespace.

The preliminary design should not be interpreted as a fixed desktop
screenshot that must simply be scaled down.

This specification is responsible for translating its approved visual
direction into a responsive system.

Where the preliminary design and the canonical V2 documentation differ,
the approved documentation takes precedence.

### 2.4 Production assets

Approved production assets documented by the Design System must be
reused when applicable.

This includes:

- V2 logo variants.
- V2 symbol variants.
- Custom service-category iconography.
- Browser/public identity assets.

Responsive layouts must not replace approved assets merely to simplify
adaptation at smaller viewport sizes.

Where appropriate, an approved symbol-only variant may be used instead
of a complete brand lockup if the Design System explicitly permits that
behavior.

### 2.5 Authority order

When resolving implementation ambiguity, use the following order of
authority:

1.  Approved V2 content and information architecture.
2.  Approved V2 Design System.
3.  This Responsive Experience Specification.
4.  Approved preliminary visual direction as visual reference.
5.  Existing V1 implementation only when it remains compatible with the
    approved V2 decisions.

The existing V1 implementation is **not** a source of truth for V2
responsive behavior.

Legacy layout decisions, breakpoints, component structures, imagery, or
interaction patterns should not be preserved automatically merely
because they already exist in the codebase.

### 2.6 Conflict handling

If implementation reveals a conflict between approved documents:

- Do not silently choose one interpretation.
- Do not allow Codex to invent a new UX decision.
- Identify the conflict.
- Determine which source owns the decision.
- Update the appropriate specification when necessary.
- Keep the documentation and implementation synchronized.

The objective is to maintain a clear chain from:

**content intent → visual system → responsive behavior →
implementation**

rather than allowing implementation details to become undocumented
design decisions.

---

## 3. Responsive design principles

Ancestral Landing V2 must behave as a fluid, content-driven responsive
experience rather than as a collection of fixed layouts for specific
devices.

Responsive decisions should preserve the approved hierarchy and visual
identity while adapting composition to the available space.

### 3.1 Mobile-first approach

V2 must be designed and implemented mobile first.

The smallest supported layout establishes:

- Essential content order.
- Semantic document flow.
- Minimum viable component composition.
- Touch-friendly interaction.
- Image behavior.
- Spacing relationships.
- Content priority.

Larger viewport modes progressively enhance this base layout.

Desktop-specific composition must not create a dependency that makes the
mobile experience feel like a collapsed desktop page.

### 3.2 Content priority over viewport preservation

Responsive adaptation should preserve **content priority**, not the
exact geometry of the preliminary desktop design.

When horizontal space becomes constrained:

1.  Preserve headings and essential explanatory content.
2.  Preserve primary actions.
3.  Preserve semantic content order.
4.  Reflow multi-column compositions.
5.  Adapt imagery without obscuring essential content.
6.  Remove purely decorative elements only when necessary.
7.  Avoid hiding meaningful content merely to reduce page length.

A smaller viewport may change composition substantially while
maintaining the same information architecture.

### 3.3 Fluid behavior before breakpoint behavior

Components should adapt fluidly whenever practical.

Use:

- Flexible widths.
- Responsive containers.
- Fluid gaps where appropriate.
- Flexible image regions.
- Content-driven heights.
- Natural text wrapping.

Breakpoints should be introduced when the existing composition no longer
remains usable or visually balanced, not simply because a conventional
device width has been reached.

### 3.4 Progressive enhancement

Additional viewport space may introduce:

- Side-by-side compositions.
- Wider content measures.
- Increased whitespace.
- More expressive image presentation.
- Horizontal card arrangements.
- Expanded navigation.
- More visible supporting content.

Progressive enhancement must not change the essential meaning or
available information.

### 3.5 Semantic order and visual order

The DOM/content order should remain meaningful without relying on
desktop positioning.

As a general rule:

- Heading precedes supporting content.
- Supporting content precedes or accompanies its related CTA.
- Section context precedes detailed content.
- Service title precedes service description.
- Contact context precedes or accompanies the contact action/form.
- Footer information remains logically grouped.

CSS visual reordering should be used sparingly.

A desktop image-left/text-right composition may stack vertically on
mobile, but the resulting order must be intentional and preserve
comprehension.

### 3.6 Vertical rhythm

Mobile layouts naturally become taller as columns stack.

This is acceptable.

Do not reduce spacing aggressively merely to make the page shorter.

Instead:

- Preserve clear section boundaries.
- Maintain readable internal spacing.
- Keep related elements visually grouped.
- Increase separation between unrelated content groups.
- Avoid excessive empty space that disconnects related information.

Desktop and large-screen modes may use more generous whitespace where it
strengthens hierarchy.

### 3.7 Horizontal overflow

The primary page experience must not require horizontal scrolling.

Components must not depend on fixed widths that exceed their responsive
container.

Intentional horizontal interaction may be considered only for components
where it provides a clear UX benefit and where an alternative stacked
presentation would be materially worse.

Such behavior must be explicitly documented for the component rather
than introduced implicitly during implementation.

### 3.8 Responsive typography

Typography follows the scale and hierarchy established by
`design-system.md`.

Responsive typography should:

- Preserve hierarchy across viewport classes.
- Avoid oversized headings that dominate small screens.
- Avoid excessively small body text.
- Allow natural wrapping.
- Avoid forced line breaks whose only purpose is reproducing the
  desktop mockup.
- Keep readable line lengths on wide screens.

Fluid sizing may be used where appropriate, provided minimum and maximum
values remain consistent with the Design System.

### 3.9 Responsive spacing

Spacing must use the approved spacing system rather than arbitrary
breakpoint-specific values.

Responsive changes should primarily adjust:

- Section padding.
- Container gutters.
- Grid/flex gaps.
- Component spacing.
- Relationship between imagery and content.

Smaller screens should retain comfortable edge gutters.

Larger screens should not simply stretch content to fill all available
width.

### 3.10 Responsive containers

The page should use bounded content containers as defined by the Design
System.

Containers should:

- Provide safe horizontal gutters on mobile.
- Expand progressively through tablet and desktop.
- Respect an intentional maximum content width.
- Remain centered when the viewport exceeds that maximum.
- Allow selected visual sections or backgrounds to span the viewport
  while their primary content remains container-aligned.

Full-width imagery or background treatments do not imply full-width
text.

### 3.11 Component reflow

Responsive behavior should be defined at the component level.

Components may transition between:

- Vertical stack.
- Wrapped row.
- Multi-column grid.
- Split content/media composition.
- Full-width and constrained-width presentation.

Reflow should be driven by content usability rather than by preserving
an arbitrary number of columns.

### 3.12 Images and responsive composition

Images are content-bearing elements and should adapt intentionally.

Responsive layouts should:

- Preserve meaningful subjects.
- Use controlled cropping when necessary.
- Avoid distortion.
- Avoid fixed-height assumptions across every viewport.
- Preserve appropriate focal points.
- Allow image position to change between layout modes when required.

Detailed image behavior is defined later in this specification.

### 3.13 Interaction model

Responsive behavior must account for both pointer and touch interaction.

Do not assume:

- Hover is always available.
- A mobile viewport always means touch.
- A desktop viewport always means mouse input.

Essential information and actions must never depend exclusively on
hover.

### 3.14 Accessibility as part of responsive behavior

Accessibility should be preserved during every responsive
transformation.

Reflow must not:

- Create illogical reading order.
- Hide keyboard focus.
- Reduce touch targets below approved minimums.
- Produce insufficient text contrast.
- Make controls overlap.
- Require precision interaction on small screens.
- Remove meaningful labels in favor of icon-only controls without
  accessible naming.

### 3.15 No device-specific duplication

Avoid maintaining separate mobile and desktop versions of the same
semantic content solely for layout purposes.

The preferred model is:

**one semantic content structure → multiple responsive compositions**

Duplication may be considered only when a documented accessibility or
interaction requirement makes it necessary.

---

## 4. Mobile-first page structure

Mobile defines the foundational page flow for Ancestral Landing V2.

The mobile experience should present the approved content architecture
as a clear vertical narrative with minimal structural ambiguity.

### 4.1 Primary mobile page flow

The mobile page should follow the approved V2 information architecture
in this conceptual sequence:

1.  Header and navigation access.
2.  Hero.
3.  Statistics / trust indicators.
4.  Institutional / About content.
5.  Services introduction.
6.  Five-service presentation.
7.  Service-detail content or interaction where applicable.
8.  Environmental Compensation / impact content.
9.  Experience / differentiator content.
10. Trusted entities / credibility content where defined.
11. Supporting CTA content.
12. Contact.
13. Footer.

The exact section naming and content responsibilities remain governed by
`content-architecture.md`.

Responsive implementation must not reorder major sections merely to
reproduce a desktop composition.

### 4.2 Mobile content model

The default mobile layout is a **single primary content column**.

This does not require every internal element to occupy the full
available width.

Components may contain:

- Compact horizontal metadata rows.
- Icon/text pairs.
- Two-item arrangements when adequate width remains.
- Inline controls.
- Wrapped action groups.

However, major section composition should default to vertical flow.

### 4.3 Mobile Header footprint

The Header should remain compact enough to preserve viewport space while
keeping brand identity and navigation access immediately available.

At mobile widths:

- The full desktop navigation must not be compressed into an unusable
  row.
- The brand remains visible.
- A clear navigation trigger is available.
- The Header should avoid unnecessary secondary information.
- Sticky behavior must not consume an excessive percentage of viewport
  height.

Detailed Header behavior is defined in Section 6.

### 4.4 Mobile Hero composition

The Hero must preserve, in order of importance:

1.  Primary value proposition.
2.  Supporting message.
3.  Primary CTA.
4.  Secondary CTA where applicable.
5.  Environmental/territorial visual context.

The desktop Hero composition must not simply shrink proportionally.

Text must remain readable and should not compete with a visually complex
image.

Where text overlays photography, mobile framing and overlay treatment
must preserve contrast.

Where necessary, the mobile composition may alter the relationship
between image and text while preserving the approved Hero identity.

### 4.5 Statistics / trust strip

The statistics/trust content immediately associated with the Hero should
remain highly scannable.

On mobile:

- It must not force a desktop-width horizontal row.
- Items should wrap or stack into an appropriate compact arrangement.
- Each statistic remains independently understandable.
- Icon, value, and label relationships must remain clear.
- The component should visually remain associated with the Hero
  without obscuring Hero content.

The exact mobile grid/reflow mode will be defined with the section-level
responsive behavior.

### 4.6 Institutional content

Image/text institutional compositions should stack intentionally on
mobile.

The preferred structure is:

1.  Section heading/context.
2.  Primary visual when it materially supports understanding.
3.  Supporting copy.
4.  Supporting trust/differentiator statement where applicable.
5.  Relevant CTA where defined.

Image placement may change when preserving narrative clarity requires
it.

Large desktop decorative compositions should not create unnecessary
mobile complexity.

### 4.7 Five-service presentation

All five service categories must remain clearly discoverable on mobile.

The mobile experience should:

- Preserve all five categories.
- Preserve the approved custom category iconography.
- Keep category titles visible.
- Maintain adequate touch targets.
- Avoid excessively dense multi-column layouts.
- Allow natural vertical progression.
- Make any service-detail interaction obvious.

No service category should become visually secondary merely because it
appears later in the mobile stack.

### 4.8 Service-detail content

Service-detail content must be usable without hover.

If the final interaction uses expandable, selectable, navigable, or
progressive content:

- The active/expanded state must be visually clear.
- Controls must be touch accessible.
- Content must remain readable without precision interaction.
- Opening one service must not create confusing page jumps.
- The user must understand how to return to or select another service.

The exact interaction pattern will be defined in the service-detail
section of this specification.

### 4.9 Environmental Compensation / impact content

Environmental Compensation content should preserve its strategic
importance on mobile.

The layout should prioritize:

1.  Section purpose.
2.  Core explanation.
3.  Relevant impact/territory information.
4.  Supporting visual evidence.
5.  CTA where applicable.

Desktop visual compositions may stack, but the section must retain a
stronger identity than a generic text block.

### 4.10 Experience and differentiator content

Experience, trust, operational capability, and differentiator content
should be presented in scannable groups.

On mobile:

- Avoid overly dense metric rows.
- Keep labels close to their values/icons.
- Use cards or grouped content only where they improve comprehension.
- Avoid excessive card nesting.
- Preserve narrative context around isolated statistics.

### 4.11 CTA behavior

Primary CTAs should remain easy to identify and activate.

On narrow screens:

- CTA groups may stack vertically.
- Primary and secondary actions must retain visual hierarchy.
- Full-width buttons may be used when appropriate, but are not
  mandatory for every CTA.
- Buttons must not become excessively wide when their content is short
  unless the composition benefits from it.
- Adequate separation between adjacent touch targets is required.

### 4.12 Contact section

The Contact section should become a clear vertical task flow on mobile.

The user should understand:

1.  Why to contact Ancestral.
2.  What contact information or channels are available.
3.  What information the form requests.
4.  How to submit the request.
5.  What supporting location or business information is relevant.

Multi-column desktop arrangements should stack without producing an
arbitrary or confusing order.

Form controls should use the available mobile width appropriately and
preserve comfortable touch interaction.

### 4.13 Footer

The Footer should preserve all required information without reproducing
a compressed desktop grid.

On mobile:

- Brand content appears clearly.
- Contact information remains easy to scan.
- Navigation links remain usable.
- Business hours remain associated with their heading.
- Social/contact icons maintain accessible touch targets.
- Groups stack in a deliberate order.
- Legal/copyright content closes the page clearly.

The Footer may be substantially taller on mobile than on desktop.

This is preferable to reducing text or controls to uncomfortable sizes.

### 4.14 Mobile image behavior

Images should generally occupy the available content width when stacked
unless a smaller presentation is intentional.

Mobile images must:

- Preserve aspect ratio unless controlled cropping is explicitly
  required.
- Avoid distortion.
- Maintain useful focal points.
- Avoid excessive vertical height.
- Use responsive sources/optimization where implementation supports
  them.

Decorative imagery may be simplified when it does not carry information
and would otherwise interfere with content.

### 4.15 Mobile horizontal gutters

All primary mobile content must preserve consistent horizontal breathing
room from the viewport edges.

Sections with full-bleed backgrounds may reach the viewport edge, but
their text and interactive content should remain aligned to the mobile
content gutter unless the component explicitly requires otherwise.

### 4.16 Mobile section spacing

Sections should remain clearly distinguishable through:

- Background treatment.
- Vertical spacing.
- Typography.
- Content grouping.
- Visual transitions defined by the Design System.

Do not rely on thin divider lines as the only mechanism for
distinguishing major sections.

### 4.17 Mobile interaction density

Mobile should favor clarity over maximum information density.

Avoid:

- Several unrelated controls on the same row.
- Tiny icon-only actions.
- Dense navigation clusters.
- Multiple simultaneous expansion mechanisms.
- Hover-derived interactions.
- Excessive nested cards.

Every interactive element should have a clear purpose and sufficient
surrounding space.

### 4.18 Mobile baseline

The mobile specification represents the baseline behavior from which
tablet, desktop, and large-screen compositions progressively evolve.

Later viewport definitions may change:

- Number of columns.
- Alignment.
- Image placement.
- Navigation presentation.
- Card arrangement.
- Whitespace.
- Content width.

They should not change:

- Essential content.
- Semantic hierarchy.
- Available primary actions.
- Accessibility requirements.
- Approved visual identity.

---

## 5. Breakpoint strategy and layout modes

Ancestral Landing V2 uses a mobile-first responsive strategy based on
**layout needs rather than specific device models**.

Breakpoints represent points at which the existing composition no longer
uses the available space effectively or requires a structural change.

They should not be interpreted as exact definitions of phones, tablets,
laptops, or monitors.

### 5.1 Responsive layout modes

V2 defines four primary responsive layout modes:

---

Layout Reference Primary purpose
mode range

---

Mobile `< 768px` Single-column baseline, touch-friendly navigation
and stacked composition

Tablet `≥ 768px` Transitional layouts, selective multi-column
composition and increased spacing

Desktop `≥ 1024px` Full navigation, multi-column sections and expanded
visual composition

Large `≥ 1440px` Bounded content with increased whitespace and
screen controlled visual expansion

---

These values are implementation reference points, not rigid device
classifications.

A component may require an intermediate adjustment if its content
becomes unusable before or after one of these reference widths.

Such exceptions should be intentional and documented.

### 5.2 Mobile mode

Below `768px`, the experience uses the mobile-first baseline defined in
Section 4.

Expected characteristics include:

- Single primary content column.
- Collapsed primary navigation.
- Touch-oriented controls.
- Stacked Hero actions where necessary.
- Stacked or compact statistics.
- Stacked institutional compositions.
- Service presentation optimized for vertical discovery.
- Stacked contact composition.
- Vertically grouped Footer content.
- Mobile-appropriate image crops.
- Reduced decorative complexity where necessary.

Mobile must remain fully functional at narrow widths and must not depend
on a specific common phone resolution.

### 5.3 Tablet mode

At approximately `768px` and above, V2 may progressively introduce
additional horizontal composition.

Tablet should not simply become a smaller desktop layout.

Expected enhancements include:

- Wider content gutters.
- Selective two-column arrangements.
- More horizontal CTA composition.
- More flexible statistics layouts.
- Increased image presence.
- Improved service-card distribution.
- More generous section spacing.
- Transitional Footer layouts.

The Header may remain in its compact navigation mode when the full
navigation cannot fit comfortably.

Navigation expansion is therefore governed by available space and
content fit, not solely by the tablet threshold.

### 5.4 Desktop mode

At approximately `1024px` and above, the page may adopt the full desktop
composition where space permits.

Expected characteristics include:

- Expanded primary navigation.
- Side-by-side Hero composition where defined.
- Horizontal statistics/trust presentation.
- Split image/content institutional sections.
- Multi-column service presentation.
- Richer Environmental Compensation layouts.
- Multi-column contact composition.
- Structured Footer grid.
- Increased whitespace and stronger alignment relationships.

Desktop composition must remain bounded by the approved container
system.

### 5.5 Large-screen mode

At approximately `1440px` and above, V2 should increase **breathing room
rather than uncontrolled content width**.

Large-screen behavior should prioritize:

- Centered bounded containers.
- Comfortable outer whitespace.
- Controlled maximum text measures.
- Intentional image expansion where appropriate.
- Stable section proportions.
- Preservation of visual relationships established at desktop.

Text columns must not become excessively wide merely because viewport
space is available.

Cards should not stretch until their internal composition becomes
visually weak.

### 5.6 Maximum content width

Primary page content should respect the maximum container width
established by the Design System.

When the viewport exceeds that width:

- The main content container remains centered.
- Full-width section backgrounds may continue to span the viewport.
- Selected photography may extend beyond the primary content grid when
  intentionally designed.
- Text remains constrained to readable measures.
- Component geometry should not scale indefinitely.

Large screens should feel more spacious, not simply enlarged.

### 5.7 Breakpoint ownership

Global layout modes provide shared responsive expectations, but
individual components own their specific reflow behavior.

For example:

- Navigation may require compact mode at a width where other sections
  already use desktop composition.
- Service cards may change column count independently.
- Contact content may reflow based on form width requirements.
- Statistics may wrap before the primary desktop threshold.

Do not introduce arbitrary component breakpoints when fluid layout can
solve the problem naturally.

### 5.8 Breakpoint implementation principle

Implementation should begin with the smallest layout and use progressive
enhancement through `min-width` media queries where practical.

Conceptually:

```scss
.component {
	// Mobile baseline.
}

@media (min-width: 48rem) {
	// Tablet enhancement.
}

@media (min-width: 64rem) {
	// Desktop enhancement.
}

@media (min-width: 90rem) {
	// Large-screen enhancement.
}
```

These values correspond approximately to:

- `48rem` → `768px`
- `64rem` → `1024px`
- `90rem` → `1440px`

Assuming the standard browser root size of `16px`.

The final SCSS implementation should use the project's responsive
abstraction defined by the Design System rather than scattering raw
media-query values throughout component files.

### 5.9 Intermediate widths

The experience must remain stable between the primary reference
breakpoints.

Testing should include widths near transition boundaries, not only exact
breakpoint values.

Particular attention should be paid to:

- Long navigation labels.
- CTA groups.
- Five-service arrangements.
- Statistics/trust content.
- Form layouts.
- Footer groups.
- Heading wrapping.
- Image focal points.

No layout should depend on users having one of a small set of predefined
viewport widths.

### 5.10 Orientation changes

Responsive behavior should respond to available dimensions rather than
assuming portrait or landscape from device type.

Landscape mobile and tablet contexts must remain usable.

Avoid layout logic based exclusively on device orientation unless a
specific documented UX problem requires it.

### 5.11 Zoom and text expansion

Responsive composition must tolerate browser zoom and reasonable text
expansion.

Layouts should not:

- Clip text.
- Overlap controls.
- Depend on fixed component heights.
- Hide overflowing labels.
- Break navigation solely because text becomes larger.

When content requires additional space, components should expand or
reflow naturally.

### 5.12 Breakpoint validation

Before responsive design is considered approved, representative
validation should include at least:

- Narrow mobile.
- Standard mobile.
- Wide mobile / small tablet.
- Tablet.
- Small desktop.
- Standard desktop.
- Large desktop.

Validation should focus on behavior and composition rather than matching
a specific device catalog.

---

## 6. Header and navigation behavior

The Header is the primary persistent navigation mechanism for Ancestral
Landing V2.

Its responsive behavior must balance:

- Brand visibility.
- Navigation accessibility.
- CTA discoverability.
- Available viewport space.
- Minimal visual obstruction.

The approved desktop visual direction remains the reference, while
responsive behavior adapts the composition to available space.

### 6.1 Header positioning

The V2 Header should remain **sticky at the top of the viewport** during
normal page navigation.

Conceptually:

```scss
position: sticky;
top: 0;
```

The Header should remain within normal document flow until it reaches
the top edge and then remain visible while the user continues scrolling.

Sticky behavior is preferred over an unnecessarily detached floating
navigation pattern.

### 6.2 Avoiding visual obstruction

Persistent navigation must not become a visual obstacle.

The sticky Header should therefore:

- Use a controlled vertical height.
- Avoid oversized logos.
- Avoid excessive vertical padding.
- Maintain a clean surface.
- Avoid unnecessarily heavy shadows.
- Preserve clear separation from page content.
- Avoid covering anchored section headings.
- Avoid occupying an excessive portion of short mobile viewports.

The Header should feel available rather than dominant.

### 6.3 Header visual surface

The standard Header uses the approved light/white surface defined by the
Design System.

Its visual treatment should preserve:

- Strong logo legibility.
- Navy navigation text.
- Green active/accent treatment.
- Approved CTA styling.
- Subtle separation from page content.

When sticky, a restrained shadow or border may become visible if
necessary to distinguish the Header from content scrolling underneath
it.

This state must remain consistent with the elevation rules defined by
the Design System.

### 6.4 Desktop Header composition

When sufficient horizontal space exists, the Header should use the
expanded composition:

1.  Brand/logo area.
2.  Primary navigation.
3.  Primary contact CTA.

The approved primary navigation destinations remain governed by
`content-architecture.md`.

Navigation should remain visually centered/balanced relative to the
brand and CTA rather than being distributed arbitrarily across the full
viewport width.

### 6.5 Desktop navigation fit

Expanded navigation should be used only while all required elements fit
comfortably.

The layout must preserve:

- Logo clear space.
- Readable navigation labels.
- Adequate spacing between navigation targets.
- Contact CTA integrity.
- Container gutters.

If the expanded navigation becomes compressed, the Header should
transition to compact navigation rather than reducing text or spacing
below usable levels.

### 6.6 Compact Header composition

When expanded navigation no longer fits comfortably, the Header should
use a compact composition.

The compact Header contains:

1.  Approved Ancestral brand presentation.
2.  Navigation trigger.
3.  Only additional controls that remain essential and can fit without
    crowding.

The desktop navigation links are removed from the visible Header row and
exposed through the mobile/compact navigation panel.

### 6.7 Mobile brand presentation

The Header should preserve recognizable Ancestral branding on mobile.

The full approved logo lockup should be preferred while it fits
comfortably.

The approved symbol-only variant may be used only if space constraints
make the complete lockup impractical and the Design System permits that
context.

The logo must not be recreated with HTML text.

### 6.8 Navigation trigger

The compact navigation trigger should:

- Be immediately recognizable as a menu control.
- Use approved functional iconography.
- Provide an accessible name.
- Meet minimum touch-target requirements.
- Have visible focus treatment.
- Communicate its open/closed state programmatically.

The control should not rely on the icon alone for accessibility
semantics.

### 6.9 Mobile navigation presentation

Activating the navigation trigger should reveal a clear navigation panel
rather than compressing links into the Header row.

The preferred V2 behavior is a **controlled navigation panel below the
sticky Header**.

The panel should:

- Align visually with the Header.
- Present primary navigation links vertically.
- Preserve comfortable touch spacing.
- Include the primary contact CTA.
- Avoid unnecessary nested navigation levels.
- Remain visually distinct from page content.
- Be dismissible without requiring navigation.

A full-screen takeover should not be the default unless implementation
testing demonstrates that the content cannot be presented comfortably in
the anchored panel.

### 6.10 Navigation panel layering

When open, compact navigation must appear above page content and below
any browser-native UI.

Its stacking context should be intentionally defined.

The panel must not appear behind:

- Hero imagery.
- Cards.
- Sticky content.
- Decorative layers.

Avoid uncontrolled `z-index` escalation.

Layering should follow the Design System's documented hierarchy.

### 6.11 Open navigation and page scrolling

While compact navigation is open, the interaction model should prevent
accidental conflict between navigation and underlying page content.

For a short anchored panel that does not occupy most of the viewport,
normal page behavior may remain available if testing confirms that
interaction remains clear.

If the navigation panel becomes viewport-dominant or internally
scrollable, background page scrolling should be controlled to prevent
confusing simultaneous movement.

The implementation should choose the least restrictive behavior that
remains predictable and accessible.

### 6.12 Closing compact navigation

The navigation panel should close when:

- The user activates the menu trigger again.
- The user selects a valid navigation destination.
- The user presses `Escape` where keyboard interaction applies.
- A deliberate outside-dismiss interaction is supported and does not
  create accessibility ambiguity.

Closing must restore focus appropriately when the user dismisses the
menu without navigating.

### 6.13 Navigation destination behavior

Because V2 is a landing-page experience, primary navigation destinations
generally move the user to approved page sections.

Navigation should use stable section targets.

When navigating to a section:

- The sticky Header must not cover the section heading.
- Scroll positioning should preserve enough context around the
  destination.
- The interaction should not create unexpected horizontal movement.
- The compact navigation should close after selection.

### 6.14 Anchor offset

Section destinations should account for sticky Header height.

Implementation should prefer a maintainable CSS mechanism such as
`scroll-margin-top` on destination sections rather than hard-coded
JavaScript scroll offsets where possible.

The offset should include sufficient breathing room so that the
destination heading does not touch the Header immediately after
navigation.

### 6.15 Smooth scrolling

Smooth scrolling may be used for in-page navigation when it improves
spatial understanding.

It must respect the user's reduced-motion preference.

When reduced motion is requested, navigation should avoid unnecessary
animated scrolling.

### 6.16 Active navigation state

The active navigation state should communicate which major section
currently represents the user's position.

Desktop treatment may use the approved green accent/underline behavior
from the visual direction.

Active state must not depend on color alone.

Possible supporting cues include:

- Underline.
- Weight change.
- Shape/background treatment where appropriate.

The active state should remain subtle enough that navigation does not
compete with page content.

### 6.17 Active-state determination

Active navigation should correspond to meaningful section visibility
rather than arbitrary scroll coordinates.

If implementation uses an observer-based mechanism, the behavior should
avoid rapid state flickering near section boundaries.

Only one primary destination should normally appear active at a time.

### 6.18 Contact CTA

The Header contact action remains visually differentiated from standard
navigation.

On desktop:

- It appears as the approved primary Header CTA.
- It remains clearly separated from navigation links.

In compact navigation:

- It should remain available inside the navigation panel.
- It should preserve its primary-action hierarchy.
- It should not require the user to close the panel before accessing
  it.

### 6.19 Header behavior while scrolling

The Header remains visible while scrolling.

V2 should **not automatically hide the Header on downward scroll** as
the default behavior.

Although auto-hiding can recover vertical space, it also reduces
predictability and immediate navigation access.

The controlled Header height should solve the obstruction problem
without requiring hide/reveal behavior.

### 6.20 Header size transitions

Avoid dramatic Header resizing while scrolling.

A subtle reduction in padding may be considered only if implementation
testing demonstrates a meaningful benefit and the transition remains
visually stable.

The baseline V2 behavior should favor a consistent Header height.

### 6.21 Header over the Hero

The Header should remain a distinct surface above the Hero rather than
becoming a transparent overlay that depends on the Hero image for
contrast.

This preserves:

- Predictable logo contrast.
- Navigation readability.
- Sticky-state consistency.
- Simpler responsive behavior.
- Accessibility.

The Hero begins below the Header in normal document flow.

### 6.22 Keyboard behavior

All Header controls must be keyboard operable.

Keyboard users must be able to:

- Reach the logo/home link.
- Reach each visible navigation destination.
- Open and close compact navigation.
- Reach the Header CTA.
- Identify focus visually.
- Dismiss the compact menu with `Escape` where applicable.

Focus order should follow the visual and semantic order.

### 6.23 Touch behavior

Header controls on touch-capable devices must provide adequate target
size and separation.

The compact menu trigger should meet the Design System's preferred touch
target of approximately `44–48px`.

Navigation links should provide sufficient vertical padding so users are
not required to tap precisely on text glyphs.

### 6.24 Responsive transition behavior

When viewport width changes across the expanded/compact navigation
threshold:

- Navigation state must remain coherent.
- An open compact menu should not remain as an orphaned overlay after
  expanded navigation becomes active.
- Focus should not become trapped in hidden content.
- Layout should not briefly display both navigation modes.
- Header height changes should remain controlled.

### 6.25 No duplicated navigation semantics

Compact and expanded presentations may require different visual
wrappers, but navigation destinations should originate from a shared
navigation model where practical.

Do not maintain unrelated hard-coded destination lists for mobile and
desktop.

This reduces divergence and supports consistent accessibility labels and
ordering.

### 6.26 Header responsive summary

---

Behavior Mobile Tablet Desktop Large
screen

---

Position Sticky Sticky Sticky Sticky

Brand Full logo when Full logo Full logo Full logo
practical

Primary Compact panel Compact or Expanded when Expanded
navigation expanded based on fit allows  
 fit

Contact CTA Inside compact Panel or Header Header Header
panel depending on fit

Active state Within According to Visible in Visible in
navigation active mode Header Header
panel

Hero overlap No No No No

Auto-hide on No No No No
scroll

Touch-friendly Required Required Preserved Preserved
controls

---

The exact transition between compact and expanded navigation should be
determined by **content fit**, using the global breakpoint strategy as
guidance rather than forcing expansion at a width where the complete
Header becomes crowded.

---

## 7. Hero responsive design

The Hero is the primary introduction to Ancestral Landing V2 and must
establish the value proposition, environmental identity, territorial
character, and primary conversion path immediately.

Its responsive behavior should preserve the approved visual direction
while prioritizing readability and meaningful photographic framing.

### 7.1 Hero responsibilities

Across all viewport sizes, the Hero must communicate:

1.  The primary value proposition.
2.  Supporting context.
3.  The primary CTA.
4.  The secondary CTA where defined.
5.  A strong environmental / territorial visual identity.

The Hero should feel intentional and visually distinctive without
becoming so tall or visually dense that users struggle to reach the rest
of the page.

### 7.2 Content hierarchy

The Hero content order should remain semantically stable:

1.  Optional eyebrow/context label where approved.
2.  Primary heading.
3.  Supporting copy.
4.  CTA group.
5.  Supporting visual content.

Visual positioning may change responsively, but the heading and
supporting message remain the primary content.

### 7.3 Mobile Hero composition

Mobile uses distinct vertical content and photography regions rather
than placing the primary Hero copy directly over the production
photograph.

The intended mobile composition is:

1.  Brand/value-proposition content.
2.  Supporting message.
3.  Primary and secondary CTA actions where defined.
4.  Environmental/territorial photography as a distinct visual region.

The navy and green visual language established by the approved V2 Design
System and preliminary visual direction should remain present so that
separating text from photography does not weaken the Hero's brand
identity.

The production photograph should retain an intentional mobile crop and
meaningful focal point.

The mobile Hero must not depend on text-over-photography treatment for
its primary composition.

This decision prioritizes:

- Reliable text contrast.
- Predictable heading wrapping.
- Flexible content height.
- Robust responsive cropping.
- Accessibility.
- Independence between copy length and photographic focal point.

Tablet may progressively integrate content and imagery as additional
horizontal space becomes available.

Desktop and large-screen modes should recover the richer integrated Hero
composition established by the approved preliminary visual direction,
while remaining governed by the V2 Design System and responsive
constraints.

This responsive transformation must preserve the same Hero hierarchy and
meaning across all viewport modes; it changes composition, not content
priority.

### 7.4 Mobile Hero height

The mobile Hero should not require a rigid full-screen height.

Avoid relying on:

```scss
height: 100vh;
```

as the default Hero model.

Mobile browser chrome, varying viewport heights, text wrapping,
accessibility text scaling, and CTA stacking make fixed viewport-height
Heroes fragile.

Prefer:

- Content-driven minimum height.
- Controlled vertical padding.
- Responsive image behavior.
- Enough visual presence to establish the Hero without trapping
  important content below the fold.

### 7.5 Mobile heading

The Hero heading should preserve the strongest display hierarchy
available on mobile without producing awkward one-word lines.

Rules:

- Allow natural wrapping.
- Do not insert desktop-specific `<br>` elements solely to match the
  mockup.
- Keep the text measure controlled.
- Avoid extremely narrow text columns over wide imagery.
- Preserve adequate separation from supporting copy.

If editorial line breaks are ever introduced, they must remain optional
at smaller widths.

### 7.6 Mobile supporting copy

Supporting copy should:

- Remain visually subordinate to the heading.
- Use the approved readable body treatment.
- Avoid excessive line length.
- Maintain sufficient contrast over its background.
- Avoid being visually merged with CTA labels.

The Hero should not become a large block of introductory prose.

### 7.7 Mobile CTA group

On narrow screens, Hero CTAs may stack vertically when side-by-side
presentation becomes constrained.

Rules:

- Primary CTA appears first.
- Secondary CTA remains clearly secondary.
- Both actions remain touch friendly.
- The gap between actions follows the approved spacing system.
- Buttons may occupy the available width when this improves balance
  and touch interaction.
- Button labels must not wrap awkwardly.

At wider mobile widths, actions may remain inline if both fit
comfortably.

### 7.8 Mobile photography

The mobile Hero crop should preserve the meaningful environmental
subject rather than reproduce the desktop crop.

The image may require a mobile-specific `object-position`.

Avoid crops that:

- Remove the principal environmental/territorial subject.
- Place visually noisy detail directly behind important text.
- Produce misleading visual emphasis.
- Leave large meaningless image areas while cropping relevant content.

Image focal-point behavior must be documented with the final production
image where necessary.

### 7.9 Hero overlay

When Hero text appears over photography, an overlay should provide
reliable contrast.

The overlay may use:

- Navy tinting.
- Directional gradient.
- Controlled darkening.
- A combination appropriate to the selected image.

The overlay should be strong enough to satisfy the Design System's
contrast requirements without unnecessarily obscuring the photography.

Do not assume that text remains readable merely because the original
source image appears dark.

### 7.10 Tablet Hero composition

Tablet provides additional horizontal space but remains a transitional
mode.

Depending on the final image and content proportions, the Hero may:

- Retain an overlay composition with increased content width; or
- Begin transitioning toward a split or desktop-like visual
  relationship.

Tablet should preserve:

- Strong text hierarchy.
- Comfortable CTA placement.
- Appropriate image focal point.
- Clear relationship with the statistics/trust strip.

Avoid introducing a narrow side-by-side composition if both text and
image become cramped.

### 7.11 Desktop Hero composition

Desktop should follow the approved preliminary visual direction more
closely.

The Hero may use a broad photographic composition with the content
positioned within the primary container.

The content region should:

- Occupy a controlled portion of the available width.
- Remain aligned with the page grid.
- Preserve strong contrast.
- Keep the heading measure intentional.
- Maintain clear CTA hierarchy.

Photography should provide environmental context around the content
rather than functioning as a generic background texture.

### 7.12 Desktop Hero depth

The desktop Hero may be visually deeper than the mobile version, but it
should remain proportional to the viewport.

Avoid excessively tall Heroes that require substantial scrolling before
users encounter the next meaningful content.

The Hero should establish the experience and naturally lead into the
statistics/trust content.

### 7.13 Large-screen Hero

On large screens:

- Hero content remains aligned to the bounded content grid.
- Text width remains constrained.
- Photography may occupy additional viewport width.
- The image should not be enlarged beyond useful visual quality.
- Additional space should improve composition rather than increase
  typography indefinitely.

The Hero should remain visually intentional at ultrawide widths rather
than appearing as a narrow text block floating inside an uncontrolled
image.

### 7.14 Hero and Header relationship

The Hero begins below the Header in normal document flow.

The Header does not transparently overlay the Hero.

This creates a predictable relationship across responsive modes and
prevents Hero imagery from determining Header contrast.

### 7.15 Hero and statistics relationship

The statistics/trust strip should feel visually connected to the Hero.

On desktop, the approved preliminary direction may use a partially
overlapping or closely attached statistics surface.

On mobile, this relationship may become simpler to avoid:

- Fragile negative positioning.
- Content clipping.
- Excessive stacking complexity.
- Overlap with Hero CTAs.
- Unpredictable behavior when text wraps.

The conceptual relationship should remain even when the exact geometry
changes.

### 7.16 Hero overflow and layering

Hero decorative layers must remain contained.

Implementation should avoid:

- Uncontrolled horizontal overflow.
- Decorative elements covering text.
- Negative positioning that breaks at intermediate widths.
- Arbitrary high `z-index` values.
- Statistics overlapping interactive Hero controls.

All layers should follow the approved elevation hierarchy.

### 7.17 Hero reduced motion

If the Hero later includes subtle motion or entrance transitions:

- Essential content must remain available without animation.
- Reduced-motion preferences must be respected.
- Motion must not delay CTA availability.
- Background photography must not depend on parallax for
  comprehension.

Autoplaying decorative motion is not required for V2.

### 7.18 Hero responsive summary

---

Element Mobile Tablet Desktop Large screen

---

Content Vertical priority Expanded vertical Approved desktop Desktop composition
hierarchy / transitional composition with bounded
content

Heading Responsive wrap Increased Display Bounded display
scale/measure hierarchy hierarchy

CTA group Stack when needed Inline when fit Inline Inline
allows

Photography Mobile-specific Transitional crop Broad Controlled expanded
crop environmental composition
composition

Overlay Contrast-driven Contrast-driven Image/content Image/content
dependent dependent

Fixed viewport No No Avoid rigid Avoid rigid
height dependency dependency

Header overlap No No No No

Statistics Attached/stacked Closely May May overlap/attach
relationship associated overlap/attach

---

---

## 8. Statistics / trust strip responsive design

The statistics / trust strip provides rapid credibility signals
immediately after the Hero.

It should reinforce Ancestral's experience and operational relevance
without interrupting the narrative flow.

### 8.1 Purpose

The component should allow users to scan important credibility
indicators quickly.

Each statistic should preserve:

1.  Approved icon or visual cue where defined.
2.  Primary value.
3.  Supporting label/context.

The strip should not introduce unsupported claims merely to create
visual symmetry.

All values remain governed by the approved content source.

### 8.2 Relationship with the Hero

The statistics component should remain visually associated with the Hero
across viewport modes.

This relationship may be expressed through:

- Close vertical proximity.
- Shared visual alignment.
- Surface elevation.
- Controlled overlap on larger screens.
- Consistent spacing and color treatment.

The component should feel like a continuation of the Hero rather than an
unrelated card section.

### 8.3 Mobile composition

Mobile should favor a compact grid or stack that preserves legibility.

The preferred baseline is:

- One or two items per row depending on content width.
- Natural wrapping when labels require more space.
- Consistent internal alignment.
- Comfortable separation between statistics.

A four- or five-item desktop row must not simply be compressed into the
mobile viewport.

### 8.4 Mobile column decision

Two columns may be used when:

- Values remain readable.
- Labels do not become excessively narrow.
- Icons remain visually balanced.
- Touch interaction is not required within each statistic.

If content becomes cramped, the component should fall back to a
single-column presentation.

Content fit takes precedence over preserving a specific column count.

### 8.5 Mobile surface treatment

The statistics surface should preserve the approved elevated-card
character without becoming visually heavy.

On mobile:

- Border radius remains consistent with the Design System.
- Shadow/elevation remains restrained.
- Internal padding remains comfortable.
- The component stays within the mobile content gutter.
- No part of the card should extend beyond the viewport.

### 8.6 Mobile relationship to Hero edge

Avoid relying on a large negative top margin as the only way to
associate the statistics card with the Hero.

A modest overlap may be used if it remains stable across content
lengths, but a simple closely attached placement is acceptable and
preferred when it produces more robust responsive behavior.

Hero content and statistics must never collide.

### 8.7 Tablet composition

Tablet may use:

- Two-column grid.
- Three-column grid where content allows.
- Wrapped horizontal layout.

The selected arrangement should produce balanced rows.

Avoid leaving a single final statistic visually isolated if an
alternative grid produces a stronger composition.

### 8.8 Desktop composition

Desktop should move toward the horizontal statistics presentation
established by the preliminary design.

Where content quantity permits:

- Statistics may occupy a single row.
- Items should receive balanced visual space.
- Values should remain prominent.
- Supporting labels should remain concise.
- Internal separators may be used only if they improve scanning.

The card should align with the primary page container.

### 8.9 Desktop Hero overlap

A controlled partial overlap between the statistics surface and the
lower Hero boundary is permitted and aligns with the approved visual
direction.

If used:

- The overlap must be intentional and token-driven.
- The component remains fully readable.
- Hero content remains unobstructed.
- The following section accounts for the component's visual footprint.
- No content should depend on accidental negative-margin behavior.

The overlap should be reduced or removed at narrower widths when it no
longer improves the composition.

### 8.10 Large-screen behavior

The statistics component should respect the same maximum container logic
as other page content.

It should not stretch indefinitely across ultrawide screens.

Additional viewport width should primarily increase outer breathing room
rather than spacing individual statistics excessively far apart.

### 8.11 Statistic hierarchy

Within each statistic, visual hierarchy should generally follow:

1.  Value / primary metric.
2.  Supporting label.
3.  Icon or visual cue as supporting recognition.

Where the approved preliminary design gives the icon stronger visual
presence, that relationship may be retained provided the numeric/content
value remains easy to identify.

### 8.12 Icons

Statistics should use the iconography rules defined by the Design
System.

Do not reuse service-category custom assets for unrelated statistics
merely because their imagery appears environmentally relevant.

Functional or contextual statistics should use the approved general icon
strategy.

Icons should:

- Use approved semantic colors.
- Remain visually consistent in size.
- Avoid dominating the metric.
- Preserve adequate contrast.

### 8.13 Values and labels

Values must not be separated visually from the label that explains them.

Avoid responsive layouts where:

- A value appears at the bottom of one row and its label wraps into
  another visual group.
- Labels become ambiguous.
- Multiple values appear to share one label.

Each statistic must remain a self-contained semantic unit.

### 8.14 Long content

The layout must tolerate reasonable differences in label length.

Do not:

- Force labels onto one line.
- Reduce font size to make every item equal height.
- Truncate meaningful labels with ellipsis.
- Hard-code heights based on the shortest statistic.

Cards/items may grow naturally where needed.

### 8.15 Unsupported interaction

Statistics are primarily informational.

They should not appear clickable unless they genuinely navigate to or
reveal additional approved content.

Avoid hover elevation, pointer cursors, or button-like treatments on
static statistics.

### 8.16 Accessibility

Statistics must remain understandable without relying exclusively on
iconography or color.

Values and labels should exist as readable text.

If an icon is decorative because the text communicates the same meaning,
it should not add redundant screen-reader output.

### 8.17 Responsive reflow

Reflow should preserve semantic grouping.

A recommended conceptual progression is:

```text
Narrow mobile
1 column or compact 2-column grid
        ↓
Wide mobile / tablet
2–3 columns depending on content
        ↓
Desktop
single balanced row where practical
        ↓
Large screen
same bounded row with increased outer whitespace
```

This progression is guidance rather than a requirement to force every
intermediate column count.

### 8.18 Statistics responsive summary

---

Behavior Mobile Tablet Desktop Large screen

---

Layout 1--2 2--3 Balanced Same bounded row
columns columns / horizontal row  
 wrap

Hero overlap None or Optional Controlled Controlled
minimal minimal overlap allowed overlap allowed

Surface Elevated Elevated Elevated card Elevated card
card card

Content truncation Never Never Never Never

Static items No No No No
appear clickable

Container Mobile Standard Standard Max-width
gutter container container centered

---

---

## 9. Institutional / About responsive design

The institutional / About section introduces Ancestral's identity,
experience, approach, and relationship with environmental and
territorial work.

Its responsive composition should balance explanatory content with
meaningful photography without becoming a generic corporate text block.

### 9.1 Section responsibilities

Across all viewport sizes, the institutional section should preserve:

1.  Section context / eyebrow where defined.
2.  Primary institutional heading.
3.  Approved explanatory content.
4.  Relevant environmental or territorial photography.
5.  Supporting differentiator or trust content where defined.
6.  CTA only where approved by the content architecture.

The section must not introduce additional institutional claims merely to
fill responsive space.

### 9.2 Mobile composition

Mobile should use a clear vertical narrative.

The preferred order is:

1.  Section context.
2.  Heading.
3.  Introductory copy.
4.  Primary image.
5.  Remaining supporting content.
6.  Supporting differentiator / CTA where applicable.

This order may be adjusted if the approved content requires the image to
establish context earlier, but text and imagery must remain semantically
connected.

### 9.3 Mobile text measure

Institutional copy should use the available mobile width while
preserving comfortable gutters.

Avoid:

- Very narrow centered paragraphs.
- Full justification.
- Artificial line breaks.
- Excessive centered body copy.
- Long uninterrupted blocks.

Longer content should be separated through natural paragraph structure
rather than decorative containers.

### 9.4 Mobile imagery

Institutional photography should normally appear as a substantial
content image rather than a small decorative thumbnail.

On mobile:

- The image may occupy the full content width.
- Approved border-radius treatment should be preserved.
- Aspect ratio may adapt through controlled cropping.
- Important subjects must remain visible.
- The image should not create excessive vertical height.

If multiple images are eventually approved, their mobile presentation
must avoid producing an unnecessarily long gallery before users reach
the explanatory content.

### 9.5 Tablet composition

Tablet may transition toward a split composition when sufficient width
exists.

Possible behavior includes:

- Image and content in two columns.
- Wider text followed by image.
- Supporting differentiator content arranged beside or below the
  primary narrative.

The split should only activate when both regions retain comfortable
width.

### 9.6 Desktop composition

Desktop should use the stronger image/content relationship established
by the approved preliminary direction.

A split composition may use:

- Image left / content right; or
- Content left / image right,

according to the approved section composition.

The text region should remain constrained to a readable measure.

The image should have enough visual weight to contribute to the section
rather than functioning as an incidental illustration.

### 9.7 Alternating compositions

If subsequent sections use alternating image/content placement,
alternation should support page rhythm rather than become a rigid
pattern.

Do not alternate solely because the previous section used the opposite
orientation.

Semantic hierarchy and image relevance take precedence over visual
alternation.

### 9.8 Large-screen behavior

On large screens:

- Maintain the bounded container.
- Preserve readable text width.
- Allow photography additional presence where useful.
- Increase whitespace rather than text measure.
- Avoid excessive distance between image and its related content.

The two regions must continue to read as one section.

### 9.9 Institutional supporting highlights

If institutional differentiators or short trust statements are presented
within this section:

- They should remain subordinate to the primary narrative.
- Mobile may stack them.
- Tablet/desktop may arrange them horizontally when content fit
  allows.
- They should not become visually indistinguishable from the Hero
  statistics component.

Each component should preserve its own role in the page hierarchy.

### 9.10 Section CTA

Where the content architecture defines a CTA:

- It should follow the explanatory content naturally.
- It should not interrupt the institutional narrative prematurely.
- Mobile placement should keep it close to the content that motivates
  the action.
- Desktop placement should remain aligned with the text region rather
  than floating independently.

### 9.11 Background treatment

The section should use the approved background/surface treatment from
the Design System.

Responsive adaptation must not introduce new background colors solely to
separate stacked content.

Section identity should be preserved through the established combination
of:

- Background.
- Spacing.
- Typography.
- Photography.
- Grid composition.

### 9.12 Accessibility and reading order

The semantic reading order must remain coherent regardless of desktop
image placement.

If desktop visually places an image before text while mobile places text
before image, implementation should avoid unnecessary DOM duplication.

Decorative imagery should be treated appropriately, while meaningful
photography should receive useful alternative text based on its actual
content and purpose.

### 9.13 Institutional responsive summary

---

Behavior Mobile Tablet Desktop Large screen

---

Primary Vertical Vertical or Split composition Bounded split
composition split composition

Text measure Content Controlled Controlled column Controlled
width column

Image Stacked Stacked or Strong paired Expanded but
paired visual bounded

Supporting Stack Wrap Horizontal where Horizontal
highlights appropriate

CTA Within Within Aligned to text Aligned to text
content flow content flow region region

---

---

## 10. Services responsive experience

The Services experience must make Ancestral's five approved service
categories easy to discover, understand, compare, and explore across all
viewport sizes.

The responsive model must preserve the five-category architecture
defined by `content-architecture.md` and the custom service iconography
defined by `design-system.md`.

### 10.1 Service categories

The experience must preserve all five approved categories:

1.  Ambientales.
2.  Forestales.
3.  Agrícolas.
4.  Manejo del Recurso Hídrico.
5.  Seguridad y Salud en el Trabajo.

Their approved custom icon families are:

- `environmental`
- `forestry`
- `agricultural`
- `water-resources`
- `occupational-safety`

Responsive design must not replace these assets with approximate Lucide
icons.

### 10.2 Services introduction

The Services section should begin with sufficient context to explain the
scope of Ancestral's offering before presenting individual categories.

The introduction should include the approved:

- Section context.
- Heading.
- Supporting copy.

It should remain concise enough that users can reach the category
choices without navigating through an oversized introductory block.

### 10.3 Category-card responsibilities

Each service-category card should communicate at minimum:

1.  Custom category icon.
2.  Visible category title.
3.  Concise supporting description where approved.
4.  Clear affordance for accessing additional detail.

The category title must remain visible and must never be replaced by
icon-only communication.

### 10.4 Card interaction model

Service cards must not depend on hover to expose essential information.

The baseline interaction model should support:

- Pointer.
- Keyboard.
- Touch.

Hover may provide a visual enhancement on capable devices, but category
identity, purpose, and access to detail must remain available without
it.

### 10.5 Mobile category layout

Mobile should use a vertically scannable presentation.

The preferred baseline is:

- One category card per row on narrow screens.
- Full use of the available content width.
- Consistent icon placement.
- Visible category title.
- Comfortable internal padding.
- Clear selection/detail affordance.

A two-column mobile layout may be considered only at widths where titles
and descriptions remain comfortably readable.

The five categories must not be compressed merely to reduce page height.

### 10.6 Tablet category layout

Tablet may transition to a two-column grid.

The grid should:

- Preserve balanced card widths.
- Allow natural card height.
- Maintain consistent internal alignment.
- Avoid truncating category titles.
- Handle the fifth item intentionally.

The final fifth card may:

- Occupy a normal grid cell; or
- Receive a balanced layout treatment where appropriate.

It should not be stretched arbitrarily across the full row merely to
eliminate empty grid space unless that treatment improves the design.

### 10.7 Desktop category layout

Desktop should use the multi-card composition established by the
approved visual direction.

The preferred model should make all five categories visible as a
coherent service family without requiring horizontal scrolling.

Possible arrangements should prioritize:

- Balanced card proportions.
- Consistent icon scale.
- Clear titles.
- Strong visual rhythm.
- Sufficient room for concise supporting copy.

The exact grid should be selected based on the approved content lengths
rather than forcing five narrow cards into a single row if readability
suffers.

### 10.8 Large-screen category layout

Large screens should preserve the established desktop card geometry.

Do not continue widening cards indefinitely.

Additional viewport width should increase outer whitespace and
potentially grid gaps within approved limits rather than creating
oversized cards.

### 10.9 Card heights

Cards should not depend on rigid fixed heights merely to appear
identical.

Prefer:

- Natural content height.
- Grid-based equal stretching within the same row where useful.
- Consistent internal alignment.
- Stable placement of the detail affordance.

Longer titles or descriptions must not overflow or be truncated simply
to maintain artificial symmetry.

### 10.10 Icon behavior

Custom service icons should follow the Design System's approved
production variants.

Responsive rules:

- Preserve aspect ratio.
- Maintain consistent perceived scale across categories.
- Do not shrink icons until their internal detail becomes unclear.
- Do not enlarge them until they dominate the title.
- Use approved color/state variants rather than arbitrary CSS
  recoloring where an asset already exists.

The icon remains supportive; the category title is the primary semantic
identifier.

### 10.11 Service-detail objective

Selecting a category should reveal enough detail for the user to
understand:

- What the category covers.
- Which approved services/capabilities belong to it.
- Relevant supporting context.
- Any related CTA or next action defined by the content architecture.

The interaction should allow exploration of multiple categories without
making the user lose their place unnecessarily.

### 10.12 Preferred service-detail model

For the single-page V2 landing experience, the preferred model is a
**category selector with an associated detail region** rather than five
unrelated navigation destinations or hover-only overlays.

Conceptually:

```text
Service categories
[Category A] [Category B] [Category C] ...

              ↓ selection

Selected service detail
Heading
Supporting content
Approved capabilities / content
Supporting visual where defined
Relevant CTA
```

The selector and detail region remain part of the same Services
experience.

### 10.13 Mobile service-detail behavior

On mobile, category exploration should minimize long-distance movement
between the selected card and its detail.

The preferred behavior is an **accordion-like integrated detail
experience**:

```text
[Ambientales]
    expanded detail

[Forestales]

[Agrícolas]

[Recurso Hídrico]

[Seguridad y Salud]
```

When a category is activated:

- Its detail appears in close visual proximity.
- The active category is clearly indicated.
- Other categories remain discoverable.
- Essential detail is not presented in a modal solely to save page
  space.
- Users do not need hover.
- The page should not jump unexpectedly.

Only one category should normally be expanded at a time to control page
length and preserve orientation.

### 10.14 Tablet service-detail behavior

Tablet should transition from the mobile inline-accordion model toward
the shared service-detail region.

At the `≥ 768px` tablet reference width, the preferred behavior is:

- Service categories remain visible as a selectable grid or wrapped
  selector.
- Selecting a category updates a shared detail region associated with
  the category selector.
- Only one service category is active at a time.
- The selected state must remain visually explicit.
- The detail region must remain close enough to the selector that the
  relationship between selection and content is immediately
  understandable.
- Changing the selected category must not cause disruptive page jumps.

The mobile inline-accordion pattern should not remain the default tablet
interaction once sufficient horizontal space exists for the
shared-detail model.

The transition may occur slightly above `768px` when real content does
not fit comfortably at that width. This is a content-fit exception, not
an alternative UX pattern.

Implementation must therefore treat:

- Mobile: inline accordion / category-associated expandable detail.
- Tablet and above, when content fit allows: category selector +
  shared detail region.

Codex must not independently choose between accordion and shared-detail
behavior for tablet. The breakpoint may adapt to content fit; the
intended interaction model may not.

### 10.15 Desktop service-detail behavior

Desktop should use the available horizontal space to reduce repetitive
vertical expansion.

The preferred behavior is:

1.  Present the category cards as the selector.
2.  Clearly indicate the selected category.
3.  Render the selected category's detail in a stable detail region
    associated with the category grid.
4.  Update that region when another category is selected.

This prevents five full service-detail blocks from making the page
unnecessarily repetitive while keeping all categories immediately
discoverable.

### 10.16 Default selected service

Desktop/tablet shared-detail modes may initialize with the first
approved category selected so that the detail region is never visually
empty.

Mobile should avoid automatically expanding a large amount of content if
doing so unnecessarily pushes the remaining categories below the fold.

The exact mobile initial state may therefore remain collapsed unless the
content architecture or usability testing indicates that opening the
first category improves comprehension.

### 10.17 Selected state

The selected/expanded category must be identifiable through more than
color alone.

The state may combine:

- Approved background treatment.
- Border treatment.
- Icon variant.
- Typography emphasis.
- Directional indicator.
- Expanded/collapsed control state.

The visual language should remain consistent with the Design System.

### 10.18 Hover state

On devices that support hover, service cards may use restrained feedback
such as:

- Border emphasis.
- Subtle elevation.
- Approved icon/color transition.
- Small surface change.

Hover must not reveal content unavailable through focus, selection, or
touch.

### 10.19 Keyboard interaction

Interactive service selectors must be keyboard accessible.

Users must be able to:

- Reach each category control.
- Identify focus.
- Activate a category.
- Understand which category is selected/expanded.
- Reach interactive content inside the revealed detail.

Implementation semantics should match the final interaction pattern
rather than simulating buttons with non-interactive elements.

### 10.20 Touch interaction

Each category selector must provide a comfortable touch target.

The complete intended interactive surface should respond to activation
rather than requiring users to tap precisely on a small icon or label.

Adjacent category controls must have adequate separation.

### 10.21 Accordion semantics on mobile

If the mobile implementation uses accordion behavior:

- The category heading/control should expose expanded/collapsed state
  programmatically.
- The associated content relationship should be explicit.
- Keyboard and screen-reader interaction should remain predictable.
- Expansion should not move keyboard focus unexpectedly into the
  panel.
- Collapsing a category should leave focus on its trigger.

### 10.22 Shared detail-region semantics

If tablet/desktop uses a shared detail region:

- Selecting a category must update the visible selected state.
- The content update should be understandable without relying on
  animation.
- Focus should not jump automatically unless a specific accessibility
  requirement justifies it.
- The detail region should remain logically associated with the
  selector.
- Screen-reader users must have a reasonable way to understand that
  the displayed content changed.

Implementation may use an appropriate announcement strategy if necessary
after accessibility testing.

### 10.23 Service-detail imagery

If approved service photography is included in the detail region:

- It must support the selected category.
- It should not use generic environmental imagery merely to fill
  space.
- Cropping should preserve meaningful subjects.
- Mobile may stack the image with content.
- Desktop may use a split content/image layout.
- Image height should adapt naturally.

The current V1 service imagery is not automatically approved for V2.

### 10.24 Service-detail content density

Service detail should provide meaningful specificity without becoming a
complete secondary website inside each category.

Responsive design should support:

- Short paragraphs.
- Structured capability lists.
- Small grouped highlights.
- Supporting image.
- Relevant CTA.

Avoid deeply nested accordions inside the primary service accordion
unless a genuine content requirement emerges.

### 10.25 Service-detail CTA

Where a service-specific CTA is approved, it should remain associated
with the selected service detail.

The CTA should not imply a different action merely because viewport size
changes.

On mobile it may occupy more horizontal width; on desktop it should
remain aligned with the detail content.

### 10.26 Animation

Changing service states may use subtle transitions to reinforce
continuity.

Permitted examples include:

- Controlled expand/collapse.
- Short opacity transition.
- Small icon/state transition.

Avoid:

- Large card flips.
- Long sliding carousels.
- Dramatic content movement.
- Animation that delays access to detail.

Reduced-motion preferences must be respected.

### 10.27 URL and navigation implications

Service-category selection is primarily an in-section interaction.

It does not require separate routes unless the information architecture
is intentionally expanded in the future.

If deep linking to a category becomes a requirement, it should be
introduced deliberately with stable identifiers rather than inferred
from visual state.

### 10.28 Responsive continuity

Users should encounter the same five categories and the same approved
service information regardless of viewport.

Responsive modes may change **how detail is revealed**, but not what
services exist.

Conceptually:

```text
Mobile
category → inline expanded detail

Tablet
category → inline detail OR shared detail region

Desktop
category selector → stable shared detail region
```

This is a responsive presentation change, not a content change.

### 10.29 Services responsive summary

---

Behavior Mobile Tablet Desktop Large screen

---

Category 1 column 2-column grid where Multi-card Same bounded
layout baseline fit allows grid grid

Detail Inline Shared detail when Shared detail Shared detail
model accordion-like content fit allows region region

Hover No No No No
required

Selected Required Required Required Required
state

Custom Required Required Required Required
icons

Detail Stacked Stacked/split Split where Split/bounded
imagery appropriate

Touch Required Required Preserved Preserved
support

Keyboard Required Required Required Required
support

Separate No No No No
routes

---

---

## 11. Environmental Compensation / impact responsive design

The Environmental Compensation / impact section communicates Ancestral's
capacity to connect environmental obligations, territorial intervention,
restoration, and measurable environmental value.

It should remain one of the most visually distinctive sections of V2 and
must not collapse into a generic informational card on smaller screens.

### 11.1 Section responsibilities

Across all viewport sizes, the section should preserve the approved
content hierarchy:

1.  Section context / eyebrow where defined.
2.  Primary heading.
3.  Approved explanatory content.
4.  Environmental / territorial visual evidence.
5.  Relevant impact or process information.
6.  Supporting CTA where defined.

The exact terminology and claims remain governed by
`content-architecture.md`.

Responsive adaptation must not introduce new environmental claims,
figures, or outcomes merely to fill visual components.

### 11.2 Visual identity

The section should have a recognizable identity within the page.

Its composition may use:

- Environmental photography.
- Territory-focused imagery.
- Strong navy/green relationships.
- Controlled cards or highlights.
- Split content/media composition.
- Approved impact indicators.

The section should feel connected to the broader V2 system while being
visually distinguishable from the Services and About sections.

### 11.3 Mobile composition

Mobile should present the section as a clear vertical narrative.

The preferred order is:

1.  Section context.
2.  Heading.
3.  Core explanation.
4.  Primary environmental / territorial visual.
5.  Supporting impact/process content.
6.  CTA where applicable.

Supporting content should remain close to the visual or statement it
explains.

### 11.4 Mobile imagery

Environmental imagery should retain meaningful territorial context.

On mobile:

- Images may occupy the available content width.
- Controlled cropping is permitted.
- Focal subjects must remain visible.
- Excessively panoramic desktop crops should not simply be scaled
  down.
- Image height should remain proportional to its informational value.

If the approved composition eventually uses more than one image, mobile
should stack or selectively prioritize them rather than reproducing a
complex desktop collage.

### 11.5 Mobile impact content

Impact indicators, process highlights, or supporting facts should remain
easy to scan.

Depending on approved content, they may use:

- Compact cards.
- Icon/text groups.
- Short metric blocks.
- Structured lists.

Avoid forcing several narrow columns into a small viewport.

Each item must remain understandable independently.

### 11.6 Tablet composition

Tablet may introduce:

- Two-column content/media relationships.
- Wrapped impact cards.
- More expressive photography.
- Wider supporting content groups.

The section should transition progressively rather than jumping directly
to the full desktop composition.

### 11.7 Desktop composition

Desktop may use the richer composition established by the preliminary
visual direction.

The section may combine:

- Text/content region.
- Environmental photography.
- Impact information.
- Supporting CTA.

These elements should form a coherent composition rather than a
collection of unrelated cards.

Where image and content appear side by side, both should receive
sufficient width to remain meaningful.

### 11.8 Large-screen behavior

Large screens should preserve the desktop structure while increasing
outer whitespace.

Photography may receive additional visual presence, but:

- Text measure remains constrained.
- Impact elements remain grouped.
- The section stays aligned with the primary page grid.
- Images must not be stretched beyond useful quality.
- Related content must not become visually disconnected.

### 11.9 Impact indicators

If the approved content includes metrics or quantitative impact
indicators, they should use the same credibility principles as other
statistics in V2.

Values must:

- Be supported by approved content.
- Remain associated with their labels.
- Avoid unsupported precision.
- Remain readable at every viewport.
- Not depend on iconography alone.

The visual treatment should remain distinct enough from the Hero
statistics strip to avoid making both components appear interchangeable.

### 11.10 Process or capability content

If the section explains an environmental compensation process or
sequence, mobile should preserve its logical order vertically.

Desktop may introduce horizontal or multi-column presentation only if
the sequence remains immediately understandable.

Do not create a horizontal process that requires sideways scrolling on
mobile merely to preserve desktop geometry.

### 11.11 Decorative environmental elements

Decorative botanical, topographic, or territorial graphics may support
the section where approved.

They must:

- Remain subordinate to content.
- Avoid reducing text contrast.
- Avoid uncontrolled overflow.
- Be simplified or hidden when they interfere with small-screen
  usability.
- Not introduce visual information that appears to represent real
  geographic or scientific data unless it actually does.

### 11.12 CTA placement

Where a CTA is defined, it should appear after sufficient explanatory
context.

On mobile:

- Keep it within the natural vertical content flow.
- Avoid floating CTAs over complex imagery.

On desktop:

- Align it with the primary explanatory content.
- Avoid visually detaching it from the message that motivates the
  action.

### 11.13 Accessibility

Environmental impact must not be communicated through imagery alone.

Meaningful concepts should remain represented in text.

If an image contains meaningful information that is not otherwise
expressed, its alternative text should communicate its relevant purpose
rather than provide a generic filename-style description.

### 11.14 Responsive continuity

The section may change significantly in geometry while preserving the
same narrative:

```text
Mobile
context
  ↓
explanation
  ↓
environmental visual
  ↓
impact/process content
  ↓
CTA

Tablet
content + selective paired composition
  ↓
wrapped impact content

Desktop
integrated content / imagery / impact composition
```

Responsive behavior should simplify composition, not meaning.

### 11.15 Environmental Compensation responsive summary

---

Behavior Mobile Tablet Desktop Large screen

---

Composition Vertical Transitional split Integrated Same bounded
narrative multi-region composition

Photography Stacked Stacked/paired Strong visual Expanded but
region controlled

Impact Stack / Wrapped grid Structured Same bounded
content compact grid horizontal/grid structure

Process Vertical Vertical/wrapped Horizontal where Same
content meaningful

Decorative Reduced when Moderate Full approved Full approved
complexity necessary treatment treatment

CTA Content flow Content flow Content-aligned Content-aligned

---

---

## 12. Experience, differentiators and trust content

Experience, differentiators, and trust content should explain **why
Ancestral is a credible and appropriate partner**, rather than merely
repeating what services the company provides.

Responsive design should preserve this distinction.

### 12.1 Content responsibilities

This content may include approved information related to:

- Experience.
- Technical capability.
- Territorial understanding.
- Interdisciplinary work.
- Environmental commitment.
- Operational approach.
- Relevant trust indicators.
- Approved differentiators.
- Trusted entities / organizations where applicable.

Only claims and entities approved by the content architecture should be
presented.

### 12.2 Narrative before decoration

Differentiators should remain understandable as content before being
treated as visual cards or icon groups.

The responsive design must not transform vague marketing statements into
prominent claims merely because they fit a card layout.

Each differentiator should communicate a meaningful reason to trust or
choose Ancestral.

### 12.3 Mobile composition

Mobile should use a highly scannable vertical structure.

Depending on the approved content, differentiators may appear as:

- Icon/text groups.
- Compact cards.
- Short highlighted statements.
- Structured content blocks.

The preferred baseline is one primary item per row when supporting text
is present.

Short items may use a two-column arrangement only when readability
remains strong.

### 12.4 Mobile hierarchy

Each differentiator should preserve:

1.  Icon or supporting visual cue where appropriate.
2.  Short title or key statement.
3.  Supporting explanation where required.

Do not create visually prominent icons with vague or disconnected
labels.

### 12.5 Tablet composition

Tablet may transition to:

- Two-column differentiator grids.
- Wrapped highlight groups.
- Paired trust content.
- More horizontal trusted-entity presentation.

Rows should remain visually balanced without requiring rigid fixed
heights.

### 12.6 Desktop composition

Desktop may use a structured multi-column presentation.

The composition should:

- Make differentiators easy to compare.
- Preserve enough space for supporting explanation.
- Avoid excessive card density.
- Maintain alignment with surrounding sections.
- Preserve visual distinction between differentiators and quantitative
  statistics.

Not every statement requires its own elevated card.

### 12.7 Large-screen behavior

Large screens should preserve the desktop grouping and maximum content
width.

Do not increase the number of columns merely because more space exists
if doing so reduces hierarchy or creates excessive separation.

Additional width should primarily improve whitespace and balance.

### 12.8 Differentiator cards

When cards are appropriate:

- Use the approved card language.
- Keep elevation restrained.
- Preserve natural content height.
- Avoid making static content look clickable.
- Do not introduce hover elevation unless the card genuinely supports
  interaction.

If the content does not benefit from a card boundary, a simpler
icon/text composition should be preferred.

### 12.9 Differentiator iconography

General differentiator icons should follow the Design System's
functional/contextual icon rules.

The custom five-service icons must remain reserved for their approved
service categories.

Do not reuse them as generic environmental decoration.

### 12.10 Experience indicators

Where approved experience values are presented numerically:

- Values remain prominent.
- Labels remain directly associated.
- Context should prevent ambiguous interpretation.
- Responsive layouts must tolerate different value and label lengths.

Do not introduce numbers that have not been approved in the content
source.

### 12.11 Trusted entities / organizations

Where approved organizations, clients, allies, institutions, or other
trusted entities are displayed, their presentation should reinforce
credibility without overwhelming Ancestral's own identity.

The component should use only approved names and brand assets.

No organization should be implied to be a client, partner, certifier, or
endorser unless that relationship is explicitly supported by approved
content.

### 12.12 Mobile trusted-entity presentation

On mobile, trusted entities should use a compact and readable layout.

Preferred behavior:

- Small grid or wrapped arrangement.
- Consistent visual cells.
- Adequate whitespace around logos.
- No forced horizontal scrolling as the default.
- No automatic carousel merely to save vertical space.

A static responsive grid is preferred when the number of approved
entities remains manageable.

### 12.13 Logo normalization

Organization logos may vary substantially in original proportions.

Their presentation should normalize **visual presence**, not distort
geometry.

Rules:

- Preserve original aspect ratio.
- Use a consistent bounding region.
- Use `object-fit: contain` or equivalent behavior.
- Maintain adequate internal whitespace.
- Avoid enlarging low-resolution assets excessively.
- Avoid arbitrary recoloring unless an approved monochrome asset
  exists.

Equal CSS width does not necessarily produce equal perceived visual
weight; implementation should account for this when necessary.

### 12.14 Tablet trusted-entity presentation

Tablet may increase the number of logos per row where their minimum
visual size remains appropriate.

The grid should wrap naturally.

Avoid leaving logos excessively small merely to maintain a desired
column count.

### 12.15 Desktop trusted-entity presentation

Desktop may use a broader horizontal grid.

The component should remain bounded by the main container.

Trusted entities should read as supporting evidence, not as the primary
visual focus of the page.

### 12.16 Carousel usage

A carousel should **not** be the default solution for trusted entities.

Use a carousel only if the final number of approved entities makes a
static responsive grid materially impractical.

If a carousel becomes necessary:

- Manual controls must be available.
- Keyboard interaction must be supported.
- Touch/swipe may supplement controls.
- Autoplay should not be required.
- Users must not lose access to entities because hover is unavailable.

### 12.17 Trust and statistics distinction

Quantitative credibility indicators and organization logos serve
different purposes.

Do not merge them into one ambiguous component solely to reduce section
count.

Conceptually:

```text
Experience / differentiators
        ↓
why Ancestral is capable

Statistics
        ↓
quantitative credibility

Trusted entities
        ↓
external relationship / recognition evidence
```

They may share visual-system rules while preserving distinct semantic
roles.

### 12.18 Responsive section grouping

If experience, differentiators, and trusted entities are grouped within
one larger section, internal spacing and headings should preserve their
individual meaning.

On mobile, stacking should not create the impression that an
organization logo belongs to the differentiator immediately above it.

On desktop, horizontal proximity must not create false associations.

### 12.19 Interaction states

Static differentiator content and organization logos should not receive
button-like hover states.

Where an entity logo genuinely links to an approved destination:

- The interactive state should be subtle.
- Focus must be visible.
- The link should have an accessible purpose.
- The visual treatment should not imply that non-linked logos are
  broken controls.

### 12.20 Accessibility

Differentiators must remain understandable without iconography.

Organization logos that communicate an entity identity require
appropriate accessible naming.

Decorative duplicate text inside logos should not result in
unnecessarily repetitive screen-reader output when the same organization
name is already supplied accessibly.

### 12.21 Responsive continuity

The same trust narrative should remain available across viewport modes.

Conceptually:

```text
Mobile
differentiators stacked
        ↓
experience/trust content
        ↓
trusted entities grid

Tablet
2-column differentiators
        ↓
wrapped trust content
        ↓
expanded entity grid

Desktop
structured differentiator composition
        ↓
experience/trust presentation
        ↓
bounded multi-column entity grid
```

Viewport changes may alter density but must not remove credibility
information.

### 12.22 Experience and trust responsive summary

---

Behavior Mobile Tablet Desktop Large screen

---

Differentiators Stack 2-column where Multi-column Same bounded
appropriate layout

Supporting text Preserved Preserved Preserved Preserved

Experience Stack / Wrapped Structured Same bounded
metrics compact grid row/grid layout

Trusted entities Responsive Expanded grid Multi-column Same bounded
grid grid grid

Logo distortion Never Never Never Never

Carousel by No No No No
default

Hover required No No No No

---

---

## 13. CTA responsive strategy

Calls to action in Ancestral Landing V2 should guide users toward
meaningful next steps without making the page feel repetitive,
aggressive, or visually saturated.

Responsive behavior may change CTA placement and arrangement, but it
must preserve action hierarchy and intent.

### 13.1 CTA responsibilities

CTAs should exist only where the surrounding content provides sufficient
context for the action.

Primary CTA purposes may include:

- Initiating contact with Ancestral.
- Moving the user toward the Contact section.
- Exploring approved service information.
- Continuing through a meaningful part of the landing-page narrative.

CTA wording and destination remain governed by
`content-architecture.md`.

Responsive design must not introduce new actions merely to fill
available layout space.

### 13.2 CTA hierarchy

Where multiple actions appear together:

1.  One action should remain visually primary.
2.  Supporting actions should remain visually secondary.
3.  Actions with equivalent importance should not be styled artificially
    as primary/secondary merely for visual variety.

The hierarchy established by the Design System must remain consistent
across viewport modes.

### 13.3 CTA repetition

A long landing page may repeat the primary contact action at
strategically useful points.

Repetition is appropriate when:

- The user has just received enough information to make contact
  meaningful.
- A major narrative section has concluded.
- The CTA prevents unnecessary scrolling to locate the next action.

Avoid placing the same primary CTA after every section.

Repeated CTAs should feel contextual rather than mechanical.

### 13.4 Mobile CTA composition

On mobile:

- CTA groups should stack when horizontal space becomes constrained.
- Primary action appears first.
- Secondary action follows with sufficient separation.
- Controls remain easy to activate by touch.
- Labels should remain readable without awkward wrapping.

A CTA may use the available content width when this strengthens
composition and touch usability.

Full-width treatment is not mandatory for every button.

### 13.5 Tablet CTA composition

Tablet may transition CTA groups to horizontal presentation when:

- Both actions fit comfortably.
- Labels remain on appropriate lines.
- Adequate separation remains.
- The group stays visually associated with its supporting content.

Do not force horizontal CTA presentation simply because the tablet
breakpoint has been reached.

### 13.6 Desktop CTA composition

Desktop CTAs should remain aligned with the content that motivates them.

Avoid:

- Floating actions detached from explanatory copy.
- Excessively wide buttons.
- Large empty regions created solely to center a CTA.
- Repeated primary buttons within the same visible composition.

CTA groups may remain inline where appropriate.

### 13.7 Large-screen behavior

Large-screen mode should not enlarge buttons indefinitely.

CTA dimensions remain governed by the Design System.

Additional viewport space should improve surrounding whitespace and
alignment rather than control size.

### 13.8 Section-level CTA placement

A section CTA should normally appear after its primary explanatory
content.

For split desktop compositions, it should remain within the text/content
region.

When the same section stacks on mobile, the CTA should follow the
content that establishes its purpose.

### 13.9 Services CTA

Service-specific actions should remain associated with the currently
selected or expanded service detail.

Changing viewport size must not detach a service CTA from the service it
refers to.

The CTA should not require users to infer which category is currently
active.

### 13.10 Environmental Compensation CTA

Where Environmental Compensation includes a CTA, it should follow the
section's explanatory and impact context.

The action should remain visually important without competing with the
page's principal contact conversion path.

### 13.11 Intermediate conversion CTA

A supporting CTA may appear between major informational sections when
the content architecture defines a meaningful conversion opportunity.

This component should:

- Use concise supporting copy.
- Present one clear primary action.
- Avoid reproducing an entire Contact section.
- Maintain strong responsive spacing.
- Remain visually distinct from surrounding informational content.

### 13.12 Header CTA

The Header contact CTA follows the behavior defined in Section 6.

It remains available:

- Directly in expanded navigation.
- Within the compact navigation panel.

This persistent availability reduces the need to add excessive contact
buttons throughout the page.

### 13.13 Contact-section CTA

The Contact section represents the principal conversion destination.

Once users reach the form, avoid presenting competing primary actions
immediately around the submit action.

The form submit control should have an unambiguous role.

### 13.14 CTA destination behavior

When a CTA navigates to another section of the landing page:

- Use the approved stable section target.
- Account for sticky Header offset.
- Respect reduced-motion preferences.
- Keep destination positioning understandable.

If an action opens an external communication channel, its behavior and
label should make that purpose clear.

### 13.15 CTA state behavior

All CTA states follow the Design System.

Responsive layouts must preserve:

- Default state.
- Hover where supported.
- Focus-visible.
- Active/pressed.
- Disabled where semantically applicable.

Essential feedback must not depend exclusively on hover.

### 13.16 Touch targets

CTA controls must maintain the Design System's preferred touch-target
dimensions.

Avoid shrinking buttons on mobile to preserve a side-by-side layout.

When available width is insufficient, reflow the group instead.

### 13.17 CTA text wrapping

Button labels should preferably remain on one line.

If a label requires excessive width:

1.  Verify that the approved copy is concise.
2.  Allow the layout to stack/reflow.
3.  Avoid reducing text below the approved typography.
4.  Avoid arbitrary abbreviations that change the message.

### 13.18 Sticky mobile CTA

A persistent bottom-screen CTA is **not part of the baseline V2
design**.

The sticky Header already provides persistent navigation access, and an
additional fixed CTA could unnecessarily reduce mobile viewport space.

A persistent bottom CTA should only be introduced later if validated
conversion requirements justify the additional obstruction.

### 13.19 CTA responsive summary

---

Behavior Mobile Tablet Desktop Large
screen

---

CTA groups Stack when Inline when fit Inline where Same as
needed allows appropriate desktop

Primary hierarchy Preserved Preserved Preserved Preserved

Touch targets Required Required Preserved Preserved

Full-width No No No No
required

Repeated after No No No No
every section

Persistent bottom No No No No
CTA

Header contact Compact Compact/expanded Header Header
access navigation

---

---

## 14. Contact responsive design

The Contact section is the principal conversion destination of Ancestral
Landing V2.

It should provide a clear, trustworthy, low-friction path for users who
want to initiate a conversation with Ancestral.

The responsive design must preserve both the approved contact
information and the approved form responsibilities defined by
`content-architecture.md`.

### 14.1 Contact section responsibilities

The section should communicate:

1.  Why the user may want to contact Ancestral.
2.  Approved direct contact information.
3.  Relevant business/location information.
4.  The approved contact form.
5.  A clear submit action.
6.  Appropriate validation and submission feedback.

The section should not request information that is not justified by the
approved contact flow.

### 14.2 Mobile composition

Mobile should use a clear vertical task flow.

The preferred order is:

1.  Section context / heading.
2.  Concise supporting message.
3.  Approved contact information.
4.  Contact form.
5.  Supporting business/location information where not already included.
6.  Any secondary contact channel defined by the content architecture.

The exact grouping may adapt to the approved content, but the form must
not appear without enough context for users to understand its purpose.

### 14.3 Mobile form width

Form controls should generally use the available content width.

Inputs should:

- Align consistently.
- Preserve comfortable horizontal padding.
- Avoid unnecessarily narrow fields.
- Allow labels and messages to wrap naturally.
- Remain usable with browser zoom and text enlargement.

### 14.4 Mobile form layout

The mobile form baseline is a single column.

Each field group should contain:

1.  Visible label.
2.  Input/control.
3.  Supporting hint where required.
4.  Validation message when applicable.

Avoid placing unrelated fields side by side on narrow screens.

### 14.5 Tablet composition

Tablet preserves the mobile-first Contact task flow while progressively
using additional horizontal space.

Form fields should remain primarily single-column.

Selective two-column field arrangements may be introduced only when
fields have a natural relationship, are sufficiently short, and retain
comfortable readable and interactive widths.

Long-content fields such as message/description remain full width.

The overall Contact section should remain vertically structured until
sufficient horizontal space exists for both the contact-information
region and the form region to remain comfortable side by side.

The information/form split established by the approved desktop visual
direction uses `≥ 1024px` as its reference transition.

An earlier transition within the tablet range is permitted only when
actual content fit demonstrates that both regions preserve:

- Comfortable text measure.
- Usable form-control widths.
- Clear visual hierarchy.
- Adequate spacing.
- Accessible interaction.

If those conditions are not satisfied, the vertical composition remains
in effect until the desktop layout mode.

The responsive implementation must therefore use content fit to
determine the precise transition point rather than arbitrarily selecting
between vertical and split Contact compositions.

### 14.6 Desktop composition

Desktop should use the richer contact composition established by the
approved visual direction.

The preferred structure is a split layout:

```text
Contact context / information     Contact form
             │                         │
             └──── one section ────────┘
```

The informational region may contain:

- Section heading/context.
- Approved contact details.
- Location/business information.
- Supporting trust/context content where defined.

The form remains the principal interactive region.

### 14.7 Desktop column balance

The information and form columns do not need equal width.

The form should receive enough width for comfortable completion.

The informational column should remain sufficiently substantial to avoid
appearing as filler.

Column proportions should be content driven.

### 14.8 Large-screen behavior

On large screens:

- Keep the Contact composition inside the maximum content container.
- Preserve comfortable form width.
- Avoid stretching text inputs across excessive horizontal distances.
- Increase outer whitespace rather than form dimensions indefinitely.

The information and form regions should remain visually connected.

### 14.9 Form labels

Inputs must use persistent visible labels.

Placeholder text must not replace the primary label.

Placeholders may provide optional examples or formatting hints where
useful, but they should not be the only indication of the field's
purpose.

### 14.10 Required fields

Required-field communication must be consistent and understandable.

Do not rely on color alone.

If an asterisk or other visual indicator is used, its meaning should be
clear and applied consistently.

The form should request only information approved by the content
architecture.

### 14.11 Input sizing

Form controls should maintain comfortable interaction dimensions across
viewport modes.

On mobile in particular:

- Avoid undersized inputs.
- Preserve adequate vertical control height.
- Maintain readable input text.
- Ensure controls are comfortable for touch.

The form should not reduce control size merely to make the section
shorter.

### 14.12 Input types and mobile keyboards

Implementation should use appropriate semantic input types where
applicable.

This may allow mobile devices to provide more suitable keyboards for:

- Email.
- Telephone.
- Other structured fields.

Input semantics should reflect the actual data being requested.

### 14.13 Autofill

Where appropriate, form fields should support standard browser autofill
semantics.

Users should not be forced to re-enter common contact information
unnecessarily.

Autofill behavior must not compromise label visibility or field-state
clarity.

### 14.14 Textarea behavior

The message/detail field should provide enough initial height to
communicate that longer input is expected.

It may grow or be manually resized where appropriate.

Avoid:

- Extremely short textarea regions.
- Fixed heights that clip text.
- Excessive default height that dominates mobile screens.

### 14.15 Validation timing

Validation should help users correct errors without becoming disruptive.

Prefer:

- Clear field-level validation.
- Validation after meaningful interaction or submission.
- Specific messages.
- Preservation of entered data.

Avoid aggressive error states before users have had a reasonable
opportunity to complete a field.

### 14.16 Validation presentation

Validation messages should:

- Appear close to the relevant control.
- Be readable at all viewport widths.
- Avoid causing overlapping content.
- Use text/icon/state treatment in addition to color where
  appropriate.
- Preserve layout stability as much as practical.

Error styling must meet the Design System's accessibility requirements.

### 14.17 Submission state

Submitting the form should produce an explicit in-progress state.

During submission:

- Prevent accidental duplicate submissions where appropriate.
- Preserve entered information.
- Communicate that the request is being processed.
- Avoid layout shifts that make the submit action difficult to track.

The loading state should not depend on animation alone.

### 14.18 Successful submission

A successful submission should produce a clear confirmation within the
Contact experience.

The confirmation should:

- State that the request was received.
- Avoid unsupported promises about response time unless approved
  content defines one.
- Remain visible long enough to understand.
- Be accessible to assistive technology.
- Avoid automatically navigating users away from the page without
  need.

The final wording remains a content decision.

### 14.19 Submission error

If submission fails:

- Preserve the user's entered data whenever possible.
- Clearly communicate that the request was not completed.
- Provide an appropriate retry path.
- Keep direct approved contact information available as an alternative
  where useful.

Do not display raw technical errors.

### 14.20 Focus after validation

When submission reveals validation errors, keyboard focus should be
managed predictably.

The user should be able to identify and reach the first relevant error
without losing the rest of their entered information.

Focus behavior should follow the final implementation semantics and
accessibility testing.

### 14.21 Focus after successful submission

Successful submission should communicate the new state to keyboard and
screen-reader users.

Avoid moving focus arbitrarily to the top of the page.

If the form is replaced by a confirmation region, focus or announcement
behavior should make the change understandable.

### 14.22 Contact information links

Where appropriate:

- Email addresses should use meaningful email links.
- Telephone numbers should support direct calling on capable devices.
- External destinations should clearly represent their purpose.

Visible text should remain understandable without exposing
implementation details.

### 14.23 Contact icons

Contact icons follow the Design System's general functional iconography
rules.

Icons must not replace visible contact information.

If an icon is redundant with adjacent text, it may be treated as
decorative for assistive technology.

### 14.24 Contact imagery

If the final Contact composition uses photography or supporting imagery:

- It must not compete with form usability.
- Mobile may reduce or reposition it.
- The image must not push the form excessively far down the page.
- Text contrast must remain reliable if content overlays imagery.
- Decorative imagery may be simplified when necessary.

The current V1 Contact image is not automatically approved for V2.

### 14.25 Form and decorative layering

Interactive controls must remain above decorative layers.

No decorative graphic should:

- Block pointer interaction.
- Cover labels.
- Reduce focus visibility.
- Interfere with validation messages.
- Create horizontal overflow.

### 14.26 Contact CTA hierarchy

The form submit action is the primary CTA within the form.

Avoid adding another visually equivalent primary action immediately
beside it.

Alternative contact channels should remain available but visually
secondary.

### 14.27 Privacy and consent

Any privacy, consent, or data-processing language included with the form
must be based on approved project/legal requirements.

Responsive design should provide enough space for such content without
reducing it to unreadably small text.

This specification does not invent legal copy.

### 14.28 Spam-prevention UI

If spam-prevention mechanisms are required during implementation, they
should minimize user friction.

Do not add visible challenge mechanisms unless technically necessary.

Any third-party mechanism must remain responsive and keyboard
accessible.

### 14.29 Form state persistence during responsive changes

Changing viewport width or device orientation must not clear entered
form values.

Responsive reflow should change layout only.

User input state must remain intact.

### 14.30 Contact responsive summary

---

Behavior Mobile Tablet Desktop Large screen

---

Section Vertical Vertical / Split information + Same bounded
composition transitional form split
split

Form layout 1 column 1--2 columns Structured Same bounded
selectively multi-column where form
appropriate

Long fields Full width Full width Full width where Same
appropriate

Visible labels Required Required Required Required

Touch-friendly Required Required Preserved Preserved
controls

Validation Inline / Same Same Same
accessible

Submission Required Required Required Required
feedback

User data Required Required Required Required
preserved on  
 reflow

Contact image Optional / Optional Supporting only Supporting
reduced only

---

---

## 15. Footer responsive design

The Footer closes the Ancestral Landing V2 experience and provides
persistent access to essential brand, navigation, contact, business,
social, and legal information.

Its responsive behavior should preserve all approved information while
adapting from a structured desktop grid to a clear mobile hierarchy.

### 15.1 Footer responsibilities

Across all viewport sizes, the Footer should preserve the approved
content responsibilities defined by `content-architecture.md`, including
where applicable:

1.  Ancestral brand identity.
2.  Supporting brand statement.
3.  Primary navigation links.
4.  Contact information.
5.  Business hours.
6.  Social/contact channels.
7.  Legal/copyright information.

Responsive adaptation must not remove useful Footer information merely
to reduce its mobile height.

### 15.2 Footer visual identity

The Footer uses the approved dark/navy surface defined by the Design
System.

Its responsive treatment should preserve:

- Approved inverse/white Ancestral logo.
- High-contrast text.
- Green accent usage where appropriate.
- Clear grouping.
- Generous but controlled spacing.
- Strong distinction from the preceding page section.

The Footer should feel like a deliberate conclusion to the experience
rather than an oversized generic container.

### 15.3 Mobile composition

Mobile should use a deliberate vertical hierarchy.

The preferred conceptual order is:

1.  Brand area.
2.  Supporting brand statement where defined.
3.  Navigation.
4.  Contact information.
5.  Business hours.
6.  Social/contact channels.
7.  Legal/copyright information.

The exact grouping remains governed by the approved content
architecture.

### 15.4 Mobile brand area

The approved inverse full logo should be preferred when it fits
comfortably.

Use:

`src/assets/images/logo/full/ancestral-logo-white.svg`

The approved symbol-only variant may be used only where the complete
lockup is intentionally inappropriate.

Do not reconstruct the logo using HTML text.

### 15.5 Mobile navigation

Footer navigation links should stack or use a compact wrapped
arrangement depending on label lengths.

They must:

- Remain easy to scan.
- Preserve adequate touch spacing.
- Avoid tiny multi-column layouts.
- Use meaningful labels.
- Remain visually distinct from non-interactive text.

Navigation should not require accordion interaction merely to make the
Footer shorter.

### 15.6 Mobile contact information

Contact information should remain grouped and readable.

Where appropriate:

- Telephone numbers may support direct calling.
- Email addresses may support email actions.
- Addresses or location information may link to an approved map
  destination if defined.

Icons may support recognition but must not replace meaningful visible
text.

### 15.7 Mobile business hours

Business hours should remain associated with a clear heading.

Avoid layouts where day/time information becomes visually associated
with the wrong label after wrapping.

The content may stack vertically if that improves comprehension.

### 15.8 Mobile social/contact controls

Social or communication icons should:

- Use approved functional iconography or official brand assets where
  required.
- Provide accessible names.
- Preserve adequate touch targets.
- Maintain sufficient spacing.
- Avoid becoming the dominant Footer content.

### 15.9 Mobile legal content

Legal/copyright content should close the Footer clearly.

It may use a smaller approved text style, but it must remain readable
and meet contrast requirements.

Legal information should not be compressed into an excessively small
type size merely to reduce Footer height.

### 15.10 Tablet composition

Tablet may transition to a multi-group layout.

Possible arrangements include:

- Brand region spanning the width followed by two or three information
  columns.
- Brand/contact pairing plus navigation/business groups.
- Wrapped Footer grid.

The composition should be based on content fit rather than forcing the
complete desktop grid prematurely.

### 15.11 Desktop composition

Desktop should use the structured Footer composition established by the
approved visual direction.

The primary Footer region may organize content into multiple columns
such as:

```text
Brand
Navigation
Contact
Business hours / supporting information
```

Column proportions should reflect content requirements rather than
equal-width symmetry.

### 15.12 Desktop alignment

Footer groups should align to the same bounded page grid used throughout
V2.

Avoid arbitrary alignment that makes the Footer appear disconnected from
the rest of the page.

Headings, links, and supporting text should maintain consistent internal
alignment.

### 15.13 Large-screen behavior

Large screens should preserve the desktop Footer structure.

The Footer background may span the viewport, while its content remains
bounded.

Additional viewport width should increase outer whitespace rather than
spacing Footer groups excessively far apart.

### 15.14 Footer section separation

Where the Footer includes a lower legal row, it should be visually
separated from the primary Footer content through approved spacing,
border treatment, or subtle surface distinction.

The separation should remain visible without creating a second competing
Footer.

### 15.15 Footer navigation behavior

Footer links that target landing-page sections should follow the same
destination principles as Header navigation:

- Stable section identifiers.
- Sticky Header offset accounted for.
- Reduced-motion preference respected where smooth scrolling is used.

The Footer does not need to reproduce active-navigation state.

### 15.16 Footer interaction states

Interactive Footer elements should preserve:

- Default.
- Hover where supported.
- Focus-visible.
- Active/pressed where applicable.

Hover must not be the only indicator that text is interactive.

### 15.17 Footer accessibility

Footer grouping should use appropriate semantic structure.

Users should be able to understand:

- Which content represents navigation.
- Which content represents contact information.
- Which controls are external links.
- Which text is informational.

Visual columns must not create an illogical reading order.

### 15.18 Footer responsive summary

---

Behavior Mobile Tablet Desktop Large screen

---

Composition Vertical groups Wrapped/multi-group Structured Same bounded
grid grid

Brand Full inverse logo Full inverse logo Full inverse Full inverse
preferred logo logo

Navigation Stack/wrap Grouped Column Column

Contact Stacked Grouped Column Column

Business Stacked/grouped Grouped Column/group Column/group
hours

Touch targets Required Required Preserved Preserved

Background Navy full-width Navy full-width Navy Navy
full-width full-width

Content width Mobile gutter Container Container Max-width
centered

---

---

## 16. Image cropping, scaling and media behavior

Photography is a major part of the Ancestral V2 visual identity.

Responsive implementation must preserve image meaning, quality, focal
points, and relationship to surrounding content rather than treating
images as generic containers that can be arbitrarily cropped.

### 16.1 Source-of-truth principle

The production imagery ultimately approved for V2 is governed by the
content and visual requirements defined in the V2 documentation.

Existing V1 imagery may remain temporarily in the repository during the
transition to V2.

Its presence in the codebase does **not** automatically make it an
approved V2 production asset.

V1 images should be:

- Reused only when they satisfy the approved V2 requirements.
- Replaced when a more appropriate approved asset is available.
- Removed when they are no longer referenced by V2 or otherwise
  required by the repository.

Do not preserve an image solely because the V1 implementation used it.

### 16.2 Image responsibilities

Every production image should have a clear purpose.

An image may provide:

- Environmental context.
- Territorial context.
- Evidence of field activity.
- Service-specific context.
- Institutional identity.
- Supporting atmosphere where appropriate.

Avoid adding imagery solely to occupy empty responsive space.

### 16.3 Authenticity

V2 should prioritize authentic, credible photography aligned with
Ancestral's real environmental and territorial work.

Generic stock imagery should not be introduced merely because it is
visually convenient for a responsive layout.

Image selection should remain consistent with the Design System's
photography principles.

### 16.4 Intrinsic proportions

Images must never be distorted to satisfy layout dimensions.

Implementation should preserve intrinsic proportions through appropriate
responsive behavior.

Conceptually:

```scss
img {
	display: block;
	max-width: 100%;
	height: auto;
}
```

Controlled cropping is a separate intentional behavior and should use an
appropriate media container rather than stretching the image.

### 16.5 Controlled cropping

Where a component requires a stable visual region, controlled cropping
may use behavior equivalent to:

```scss
.media {
	overflow: hidden;
}

.media img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}
```

`object-fit: cover` must not be applied indiscriminately to every image.

It is appropriate only where cropping is an intentional part of the
component design.

### 16.6 Focal points

Important image subjects should remain visible across responsive modes.

Where necessary, components may define responsive focal positioning
using `object-position` or equivalent behavior.

Conceptually:

```scss
.hero__image {
	object-fit: cover;
	object-position: 60% center;
}

@media (min-width: 64rem) {
	.hero__image {
		object-position: center;
	}
}
```

The actual values must be determined from the final approved image.

Do not invent generic focal-point values before the production asset is
known.

### 16.7 Mobile crops

Mobile often requires substantially different crops from desktop.

Mobile cropping should prioritize:

1.  Meaningful subject.
2.  Context required to understand the image.
3.  Safe visual region around overlaid text where applicable.
4.  Appropriate vertical footprint.

A panoramic desktop image may become a tighter portrait-oriented crop on
mobile.

This is acceptable when meaning is preserved.

### 16.8 Tablet crops

Tablet should use a transitional crop based on the component
composition.

Do not assume that either the mobile or desktop focal point will
automatically work at intermediate widths.

Particular attention should be given to split layouts where the media
region changes aspect ratio.

### 16.9 Desktop crops

Desktop may expose more of the original composition.

Cropping should still remain controlled where component geometry
requires it.

Large viewport width does not justify displaying irrelevant empty areas
of an image merely to avoid cropping.

### 16.10 Large-screen scaling

Images should not scale indefinitely on large screens.

When the content container reaches its maximum width:

- Content imagery should generally remain bounded.
- Full-width Hero/background imagery may continue to span the viewport
  where designed.
- Source resolution must remain sufficient.
- Upscaling that visibly reduces quality should be avoided.

### 16.11 Hero imagery

Hero photography requires the most deliberate responsive treatment.

The final Hero asset should be validated at:

- Narrow mobile.
- Standard mobile.
- Tablet.
- Desktop.
- Large desktop.

Validation must verify:

- Subject visibility.
- Text-safe region.
- Overlay effectiveness.
- Image quality.
- Crop stability.
- Relationship with Hero height.

A single fixed `object-position` should not be assumed sufficient for
every viewport.

### 16.12 Institutional imagery

About/institutional images should preserve meaningful environmental or
team/field context.

When stacked on mobile:

- Use an intentional aspect ratio.
- Avoid excessively tall images.
- Preserve important subjects.

When paired with text on desktop:

- The media region may use a different aspect ratio.
- The crop should remain visually balanced with the text column.

### 16.13 Service imagery

Service-detail photography must correspond to the selected service
category.

Responsive behavior may use:

```text
Mobile
content
↓
image

Desktop
content | image
```

or the reverse desktop relationship where approved.

Changing layout must not change which service the image represents.

### 16.14 Environmental Compensation imagery

Environmental Compensation imagery may receive stronger visual presence
because territorial/environmental evidence is central to the section.

Mobile may simplify complex image compositions.

Desktop may use:

- Larger visual regions.
- Paired imagery.
- Controlled layered composition.

Complexity should only be introduced when the approved production
imagery supports it.

### 16.15 Contact imagery

Contact imagery is supporting content.

It must not:

- Compete with the form.
- Push the form excessively far down on mobile.
- Reduce input usability.
- Introduce distracting visual complexity.

Mobile may reduce, reposition, or omit purely decorative Contact imagery
when necessary.

Meaningful content imagery should not be removed without preserving its
informational role elsewhere.

### 16.16 Trusted-entity logos

Organization logos require `contain`-style behavior rather than
photographic cropping.

Conceptually:

```scss
.trusted-entity__logo {
	width: 100%;
	height: 100%;
	object-fit: contain;
}
```

Logos must:

- Preserve aspect ratio.
- Maintain clear space.
- Avoid clipping.
- Avoid distortion.
- Avoid excessive upscaling.

### 16.17 Service-category icons

Custom service-category icons are graphic assets, not photography.

They must preserve their complete geometry.

Do not apply `object-fit: cover` or crop them.

Use the approved asset variants documented in the Design System.

### 16.18 Logo assets

Ancestral logo and symbol assets must preserve complete geometry and
clear space.

They should never be cropped to fit a container.

Responsive adaptation should change their rendered dimensions or
approved variant, not remove parts of the mark.

### 16.19 Responsive image sources

Where multiple optimized source sizes are available, implementation
should allow the browser to avoid downloading unnecessarily large assets
for small viewports.

Appropriate techniques may include:

- `srcset`.
- `sizes`.
- `<picture>`.
- Format-specific sources.

The exact implementation depends on the production asset pipeline.

### 16.20 Art direction

`<picture>` or equivalent art-direction techniques may be used when the
mobile composition genuinely requires a different crop or source asset.

This is especially relevant when:

- The Hero focal point cannot be preserved through `object-position`
  alone.
- A desktop panoramic composition becomes ineffective on mobile.
- A dedicated mobile crop significantly improves meaning or
  readability.

Art direction should solve a real visual problem rather than duplicate
assets unnecessarily.

### 16.21 Image formats

Production imagery should use modern web-appropriate formats where
supported by the project pipeline.

Format choice should balance:

- Visual quality.
- Transparency requirements.
- File size.
- Browser support.
- Asset type.

Photography and graphic identity assets do not necessarily require the
same format.

### 16.22 Resolution

Source assets should provide enough resolution for their maximum
intended rendered size and expected pixel density.

Avoid:

- Shipping extremely oversized source files without optimization.
- Enlarging low-resolution imagery until artifacts become visible.
- Selecting dimensions based only on the preliminary screenshot.

### 16.23 Lazy loading

Below-the-fold content imagery should generally be eligible for lazy
loading.

The primary Hero image should not be lazily loaded if doing so delays
the page's principal visual content.

Implementation should consider loading priority based on actual page
position and performance requirements.

### 16.24 Layout stability

Images should reserve appropriate layout space before loading.

Implementation should use known dimensions, aspect-ratio containers, or
equivalent techniques to reduce cumulative layout shift.

Responsive behavior should not cause surrounding content to jump
significantly when images arrive.

### 16.25 Alternative text

Alternative text depends on image purpose.

Meaningful imagery should receive concise alternative text that
communicates the relevant content or purpose.

Purely decorative imagery should not create unnecessary screen-reader
noise.

Do not generate alternative text from filenames.

### 16.26 Text inside images

Important headings, service names, CTA labels, statistics, or
explanatory information should not be embedded into raster images.

Content should remain real HTML text whenever practical.

This preserves:

- Responsiveness.
- Accessibility.
- Localization potential.
- Searchability.
- Text scaling.
- Contrast control.

### 16.27 Background images

CSS background images should primarily be used for decorative or
atmospheric imagery.

Meaningful content imagery should normally use semantic image markup.

If a Hero uses background-style visual behavior while the photography
remains meaningful, implementation should ensure that accessibility and
responsive art direction remain appropriately handled.

### 16.28 Overlay contrast

Where text overlays imagery, contrast must be evaluated against the
**rendered composition**, not merely against a nominal overlay color.

Because photographs contain variable luminance, overlays should provide
a sufficiently controlled text-safe region.

WCAG AA remains the minimum text-contrast target established by the
Design System.

### 16.29 Decorative media

Decorative media may be:

- Repositioned.
- Simplified.
- Reduced.
- Hidden at smaller widths.

This is permitted only when it carries no essential information.

Removing decoration should not leave unexplained spacing or broken
composition.

### 16.30 No horizontal media overflow

Media must not accidentally expand the document width.

Pay particular attention to:

- Absolutely positioned decorative images.
- Oversized Hero layers.
- Negative offsets.
- Galleries.
- Wide SVGs.
- Layered environmental compositions.

Intentional full-bleed treatment must remain contained within the
viewport.

### 16.31 Media validation matrix

Before final responsive approval, important production imagery should be
reviewed using a matrix such as:

---

Asset role Mobile Tablet Desktop Large screen

---

Hero Required Required Required Required

Institutional Required Required Required Required

Services Required Required Required Required

Environmental Compensation Required Required Required Required

Contact If used If used If used If used

Trusted-entity logos Required Required Required Required

---

Validation should consider both visual quality and content meaning.

### 16.32 Image replacement workflow

When a V1 image is replaced during V2 implementation:

1.  Identify every existing reference.
2.  Introduce the approved V2 asset.
3.  Update the relevant component/content reference.
4.  Validate responsive crops.
5.  Validate accessibility treatment.
6.  Verify that no V2 reference still requires the old asset.
7.  Remove the legacy asset when it is no longer needed.

This prevents premature deletion from creating broken references while
still allowing V2 to retire legacy media systematically.

### 16.33 Media responsive summary

---

Principle Requirement

---

Distortion Never

Controlled crop Allowed when intentional

Responsive focal point Required where crop changes
meaning

Mobile-specific crop Allowed

V1 asset automatically approved for V2 No

Legacy asset removed before references are No
migrated

Service icons cropped Never

Logos cropped Never

Trusted logos `contain` behavior

Meaningful text embedded in raster imagery Avoid

Hero lazy loading No by default

Below-fold image lazy loading Preferred

Layout space reserved Required

WCAG AA over imagery Required

Final production crop validation Required

---

---

## 17. Interactive states, touch and responsive accessibility

Responsive behavior in Ancestral Landing V2 includes not only layout
adaptation but also the way users interact with controls across pointer,
keyboard, touch, and assistive-technology contexts.

Interactive behavior must remain understandable and operable regardless
of viewport size or input method.

### 17.1 Input-method independence

V2 must not infer interaction capability solely from viewport width.

A small viewport may use:

- Touch.
- Keyboard.
- Pointer.
- Assistive technology.

A desktop viewport may also use touch.

Responsive behavior should therefore distinguish between:

- Available layout space.
- Input capabilities.
- Interaction state.

Essential functionality must not depend on a specific input method.

### 17.2 Required interactive states

Interactive components should expose the states relevant to their
semantics.

Depending on the component, these may include:

- Default.
- Hover.
- Focus-visible.
- Active / pressed.
- Selected.
- Expanded / collapsed.
- Disabled.
- Loading.
- Success.
- Error.

Not every component requires every state.

States should be introduced because they communicate meaningful
interaction, not merely to create visual variation.

### 17.3 Hover behavior

Hover is an enhancement, not a requirement for comprehension or
operation.

Hover may provide feedback such as:

- Subtle surface change.
- Border emphasis.
- Approved color transition.
- Controlled elevation.
- Icon transition.

Hover must never be the only way to:

- Discover a service description.
- Identify an action.
- Access navigation.
- Reveal essential content.
- Understand the selected state.
- Determine whether a control is interactive.

### 17.4 Hover-capability detection

Where hover-specific effects materially affect behavior, implementation
should consider input capability rather than applying assumptions based
only on screen width.

Conceptually:

```scss
@media (hover: hover) and (pointer: fine) {
	.interactive-element:hover {
		// Pointer-specific enhancement.
	}
}
```

This prevents hover-oriented effects from becoming part of the required
touch interaction model.

### 17.5 Focus-visible

Keyboard focus must remain clearly visible on all interactive elements.

This includes:

- Header navigation.
- Menu trigger.
- CTA buttons.
- Service selectors.
- Contact links.
- Form controls.
- Form submit action.
- Footer links.
- Social/contact controls.
- Any trusted-entity links.

Focus treatment must follow the Design System and meet contrast
requirements.

Do not remove browser focus indication without replacing it with an
accessible approved treatment.

### 17.6 Focus and responsive reflow

Responsive layout changes must not make focused elements:

- Invisible.
- Covered by the sticky Header.
- Positioned outside the viewport.
- Hidden inside a collapsed component without appropriate state
  management.

When a component changes presentation because viewport width changes,
focus should remain predictable.

### 17.7 Active / pressed feedback

Buttons and other pressable controls should provide immediate active
feedback.

The feedback should be subtle and should not cause significant layout
movement.

Avoid interactions that shift surrounding content because a border, font
weight, or size changes only while pressed.

### 17.8 Selected state

Components with persistent selection, such as desktop service-category
selectors, must distinguish selected state from transient hover or
focus.

Selected state should remain visible after pointer movement ends.

It must not rely on color alone.

### 17.9 Expanded / collapsed state

Expandable mobile service content and compact navigation must expose
their state both visually and programmatically.

The trigger should communicate whether the associated content is
currently expanded.

State indicators may include:

- Directional icon change.
- Surface treatment.
- Border treatment.
- Typography emphasis.

Animation is optional and must not be required to understand the state.

### 17.10 Disabled state

Controls should only use a disabled state when interaction is genuinely
unavailable.

Disabled controls must remain distinguishable without becoming
unreadable.

Avoid disabling actions without giving users enough context to
understand what is required.

### 17.11 Loading state

Operations that require noticeable processing time should communicate
that processing is occurring.

For the Contact form, loading behavior should:

- Prevent accidental duplicate submissions where appropriate.
- Preserve form content.
- Keep the submit action identifiable.
- Communicate progress through text and/or an accessible state.

A spinner alone should not be the only communication mechanism when the
state would otherwise be ambiguous.

### 17.12 Success and error states

Success and error feedback must use more than color.

Appropriate combinations may include:

- Text.
- Icon.
- Border/state treatment.
- Semantic status communication.

Messages must remain readable and associated with the relevant
component.

### 17.13 Touch-target baseline

Primary interactive targets should provide an effective touch area of
approximately `44–48px` in each relevant dimension where practical,
consistent with the Design System.

This applies especially to:

- Compact navigation trigger.
- Navigation links.
- Buttons.
- Service-category selectors.
- Accordion controls.
- Social/contact controls.
- Form controls where relevant.

Visible icon size may be smaller than the interactive target.

### 17.14 Touch-target spacing

Adjacent controls require enough separation to reduce accidental
activation.

Avoid:

- Small icon clusters.
- Navigation links with minimal vertical padding.
- Service selectors touching without clear boundaries.
- Multiple form actions crowded into a narrow row.

When space becomes constrained, reflow controls rather than shrinking
their interactive area.

### 17.15 Touch gestures

Essential functionality must not depend exclusively on complex gestures.

Do not require:

- Swipe.
- Drag.
- Pinch.
- Long press.

These gestures may supplement explicit controls where appropriate, but
an understandable direct interaction must remain available.

### 17.16 Pointer target clarity

Interactive regions should visually communicate their role.

Avoid making large static cards appear clickable through hover/elevation
if they do not perform an action.

Conversely, when a complete service card acts as the category selector,
the interactive surface should be sufficiently clear.

### 17.17 Keyboard navigation order

Keyboard focus order should follow the semantic content order.

Responsive CSS must not create a visual order radically different from
keyboard order.

The expected progression should generally follow:

```text
Header
↓
Hero actions
↓
Page content and section interactions
↓
Contact form
↓
Footer
```

Within components, focus follows their logical internal sequence.

### 17.18 Skip navigation

V2 should provide an accessible mechanism for keyboard users to bypass
repeated primary navigation and move to the main content.

A skip link may remain visually hidden until focused.

Its destination must not be obscured by the sticky Header.

### 17.19 Semantic landmarks

The page should preserve meaningful structural landmarks such as:

- Header.
- Navigation.
- Main content.
- Sections where appropriate.
- Footer.

Responsive wrappers should not replace semantic structure with
unnecessary generic containers.

### 17.20 Heading hierarchy

Responsive typography may change visual size but must not change
semantic heading hierarchy merely for styling.

Heading levels should reflect content structure.

Do not choose heading elements based on desired font size.

### 17.21 Zoom

The page must remain usable under browser zoom.

Responsive layouts should tolerate substantial enlargement without:

- Horizontal scrolling caused by primary content.
- Text clipping.
- Overlapping controls.
- Hidden actions.
- Broken navigation.

Exact accessibility validation should follow the project's agreed
testing requirements.

### 17.22 Text enlargement

Text containers must allow content to grow vertically.

Avoid fixed heights around:

- Headings.
- Navigation labels.
- Buttons where text may expand.
- Service cards.
- Form messages.
- Footer groups.

Text enlargement should cause reflow rather than clipping.

### 17.23 Color contrast

All responsive states must preserve the WCAG AA minimum contrast
requirements established by the Design System.

This includes:

- Default text.
- Text over imagery.
- Navigation states.
- Button labels.
- Form labels.
- Validation messages.
- Footer content.
- Focus indicators.

A color pairing approved in one state must not be replaced at a
breakpoint with an unvalidated combination.

### 17.24 Color-independent meaning

Responsive state changes must not communicate meaning through color
alone.

Examples:

- Selected service category requires an additional cue.
- Form errors require text/state communication.
- Active navigation requires more than green text alone where
  necessary.
- Success feedback requires meaningful content.

### 17.25 Reduced motion

V2 must respect the user's reduced-motion preference.

Conceptually:

```scss
@media (prefers-reduced-motion: reduce) {
	// Remove or substantially reduce non-essential motion.
}
```

This applies to:

- Smooth scrolling.
- Service transitions.
- Accordion animations.
- Hover/entrance motion.
- Any future decorative animation.

Content must remain fully usable without motion.

### 17.26 Motion restraint

Even when reduced motion is not requested, transitions should remain
short and functional.

Avoid:

- Long entrance sequences.
- Scroll-jacking.
- Parallax required for comprehension.
- Large-scale card movement.
- Animations that delay interaction.

The landing page should feel responsive to input rather than
choreographed around it.

### 17.27 Sticky Header accessibility

The sticky Header must not:

- Permanently obscure focused content.
- Cover anchor destinations.
- Occupy excessive mobile viewport height.
- Prevent users from seeing validation or interaction feedback near
  the top of a section.

Anchor offsets and focus positioning should account for its height.

### 17.28 Orientation and reflow

Changing device orientation should not:

- Reset interaction state unnecessarily.
- Clear form data.
- Create inaccessible hidden controls.
- Leave compact navigation in an invalid visual state.
- Break selected service content.

Responsive components should reconcile their state when their
presentation mode changes.

### 17.29 Content visibility

Essential content must not be hidden at specific breakpoints merely
because the desktop composition does not fit.

Responsive simplification may remove decorative content, but substantive
content and primary actions remain available.

### 17.30 Accessible names

Icon-only controls require accessible names.

Examples include:

- Compact navigation trigger.
- Social icons.
- Close/dismiss controls if introduced.
- Any icon-only carousel control if such a component is eventually
  approved.

Decorative icons should not create redundant announcements.

### 17.31 Link purpose

Link purpose should remain understandable from visible text or
accessible context.

Avoid generic repeated labels such as `Learn more` when multiple
destinations would become ambiguous without additional accessible
naming.

CTA wording remains governed by the approved content architecture.

### 17.32 Responsive accessibility summary

---

Requirement Mobile Tablet Desktop Large screen

---

Keyboard operability Required Required Required Required

Visible focus Required Required Required Required

Touch targets Required Required Preserved Preserved

Hover-independent functionality Required Required Required Required

Reduced motion Required Required Required Required

WCAG AA contrast Required Required Required Required

Logical reading order Required Required Required Required

Zoom/reflow resilience Required Required Required Required

Color-independent states Required Required Required Required

Accessible icon controls Required Required Required Required

---

---

## 18. Responsive validation and approval

Responsive design is considered complete only when the full V2
experience has been reviewed as a coherent system across representative
viewport modes and interaction contexts.

Approval must validate the **whole page**, not isolated screenshots of
individual sections.

### 18.1 Validation objective

The final responsive review should confirm that:

- The approved content architecture is preserved.
- The approved Design System is preserved.
- Mobile provides a complete baseline experience.
- Tablet transitions remain intentional.
- Desktop uses available space effectively.
- Large screens remain bounded and balanced.
- Images retain meaningful crops.
- Interactive states remain understandable.
- Touch interaction remains comfortable.
- Keyboard interaction remains usable.
- WCAG AA contrast requirements remain satisfied.
- No section requires implementation to invent unresolved UX
  decisions.

### 18.2 Representative viewport matrix

Validation should include representative widths around the primary
responsive modes.

A recommended baseline is:

Validation context Reference width

---

Narrow mobile `320px`
Standard mobile `375–390px`
Wide mobile `430px`
Small tablet `768px`
Large tablet / intermediate `834–900px`
Small desktop `1024px`
Standard desktop `1280–1366px`
Large desktop `1440px`
Wide desktop `1920px`

These values are validation references, not a device-support whitelist.

The page must remain stable between them.

### 18.3 Breakpoint-boundary testing

Testing should include widths immediately before and after important
layout transitions.

Examples include:

- Compact → expanded Header navigation.
- One-column → two-column service grid.
- Accordion → shared service-detail presentation.
- Vertical → split institutional composition.
- Vertical → split Contact composition.
- Wrapped → horizontal statistics layout.

This helps identify transition-specific failures that may not appear at
common device widths.

### 18.4 Full-page mobile review

Mobile approval should validate the complete page from Header through
Footer.

Review:

- Navigation.
- Hero.
- Statistics/trust strip.
- Institutional content.
- Services.
- Service detail.
- Environmental Compensation.
- Experience/differentiators.
- Trusted entities.
- CTAs.
- Contact.
- Footer.

The review must confirm that the complete page reads as one coherent
vertical narrative.

### 18.5 Tablet review

Tablet validation should specifically examine transitional behavior.

Tablet must not appear as:

- An unnecessarily stretched mobile layout; or
- A compressed desktop layout.

Review whether each component genuinely benefits from the additional
horizontal space.

### 18.6 Desktop review

Desktop validation should confirm:

- Expanded navigation fit.
- Strong Hero composition.
- Appropriate use of multi-column layouts.
- Balanced service-category presentation.
- Stable service-detail region.
- Integrated Environmental Compensation composition.
- Effective Contact split.
- Structured Footer grid.
- Consistent container alignment.

Desktop should reflect the approved preliminary visual direction while
remaining governed by the canonical V2 documentation.

### 18.7 Large-screen review

Large-screen validation should focus on controlling expansion.

Review:

- Maximum content width.
- Text line length.
- Image quality.
- Card width.
- Grid spacing.
- Outer whitespace.
- Hero composition.
- Footer grouping.

The page should feel spacious rather than stretched.

### 18.8 Content integrity validation

At every viewport, verify that:

- No approved major content disappears.
- Section order remains correct.
- Service categories remain complete.
- CTA meaning remains unchanged.
- Contact information remains available.
- Footer information remains available.
- Responsive adaptation does not introduce contradictory wording.

### 18.9 Navigation validation

Validate:

- Sticky Header behavior.
- Compact menu opening/closing.
- Expanded navigation fit.
- Keyboard navigation.
- Focus-visible.
- `Escape` behavior where applicable.
- Anchor destinations.
- Sticky Header offset.
- Active-section state.
- Viewport transition between compact and expanded modes.

No navigation state should remain orphaned after responsive reflow.

### 18.10 Hero validation

Validate:

- Heading wrapping.
- Supporting-copy readability.
- CTA placement.
- Hero height.
- Image focal point.
- Overlay contrast.
- Statistics relationship.
- Header relationship.

The Hero must remain effective at both narrow and very wide viewport
sizes.

### 18.11 Services validation

Validate all five categories.

For each responsive mode, verify:

- Category discoverability.
- Icon integrity.
- Title readability.
- Selected/expanded state.
- Keyboard operation.
- Touch interaction.
- Detail-content relationship.
- Service-specific imagery where used.
- CTA association.

Mobile accordion and desktop shared-detail modes must expose equivalent
approved content.

### 18.12 Environmental Compensation validation

Verify:

- Section hierarchy.
- Image meaning.
- Impact/process content.
- CTA relationship.
- Responsive simplification.
- Decorative-element containment.

The section must retain its distinctive strategic role at mobile widths.

### 18.13 Experience and trust validation

Verify:

- Differentiator readability.
- Experience metric context.
- Trusted-entity logo quality.
- Logo aspect ratios.
- Grid reflow.
- Absence of misleading interactive states.
- Absence of implied relationships not supported by approved content.

### 18.14 CTA validation

Verify that:

- Primary/secondary hierarchy remains consistent.
- CTA groups reflow before becoming cramped.
- Touch targets remain adequate.
- Repeated CTAs remain contextually justified.
- Header contact access remains available.
- No unnecessary persistent bottom CTA has been introduced.

### 18.15 Contact validation

Validate the complete Contact flow:

1.  Read section context.
2.  Identify contact information.
3.  Reach form fields.
4.  Complete the form.
5.  Trigger validation where applicable.
6.  Correct errors.
7.  Submit.
8.  Observe loading state.
9.  Observe success or error state.

Also verify:

- Mobile keyboard behavior.
- Visible labels.
- Autofill where appropriate.
- Form data preservation.
- Orientation/reflow behavior.
- Keyboard focus management.

### 18.16 Footer validation

Verify:

- Brand visibility.
- Navigation.
- Contact information.
- Business hours.
- Social/contact controls.
- Legal content.
- Touch spacing.
- Keyboard focus.
- Responsive grouping.

No approved Footer information should be lost on mobile.

### 18.17 Image validation

Every final production image should be reviewed at its relevant viewport
modes.

Verify:

- Aspect ratio.
- Crop.
- Focal point.
- Resolution.
- Loading behavior.
- Layout stability.
- Alternative-text treatment.
- Overlay contrast where applicable.

V1 assets should not be approved implicitly merely because they render
correctly.

### 18.18 Horizontal overflow validation

At all representative widths, verify that the document does not produce
unintended horizontal scrolling.

Inspect especially:

- Hero layers.
- Statistics card.
- Service grids.
- Environmental decorative elements.
- Form controls.
- Footer.
- Large SVGs.
- Absolutely positioned media.

### 18.19 Long-content resilience

Responsive layouts should be reviewed with realistic long content where
relevant.

Verify that:

- Navigation labels fit.
- Headings wrap safely.
- Service titles remain readable.
- Buttons do not break.
- Form validation messages expand naturally.
- Footer information does not overlap.
- Cards tolerate different content lengths.

Do not validate only with artificially short placeholder text.

### 18.20 Interaction-state validation

For each interactive component, review the relevant states:

```text
default
hover
focus-visible
active
selected / expanded
disabled
loading
success
error
```

Only states semantically relevant to the component need to exist.

The purpose is to ensure that no required state is left for
implementation to invent.

### 18.21 Touch validation

On touch-capable contexts, verify:

- Menu trigger.
- Navigation links.
- CTA buttons.
- Service selectors.
- Accordion triggers.
- Contact controls.
- Social/contact controls.

Targets should remain comfortable and sufficiently separated.

### 18.22 Keyboard validation

Keyboard-only review should verify that users can:

- Skip repeated navigation.
- Navigate the Header.
- Open/close compact navigation.
- Activate CTAs.
- Explore services.
- Complete the Contact form.
- Reach Footer links.

Focus order and focus visibility must remain predictable throughout the
page.

### 18.23 Reduced-motion validation

With reduced motion enabled, verify that:

- In-page navigation remains usable.
- Service interactions remain understandable.
- Accordions remain functional.
- No content depends on entrance animation.
- No essential state change becomes ambiguous.

### 18.24 Contrast validation

Final rendered combinations should be checked against the WCAG AA
requirements defined by the Design System.

Particular attention is required for:

- Hero text over photography.
- Text over dark section backgrounds.
- Secondary text.
- Interactive states.
- Validation messages.
- Footer links.
- Focus indicators.

Contrast validation should use the actual rendered colors and imagery.

### 18.25 Browser zoom and reflow validation

Review the page under browser zoom/text enlargement according to the
project's accessibility validation target.

The experience should continue to provide:

- Readable content.
- Available navigation.
- Reachable controls.
- No meaningful clipping.
- No destructive overlap.
- Predictable reflow.

### 18.26 Responsive implementation handoff

The responsive specification is ready for implementation when developers
and Codex can determine from the approved V2 documentation:

- What content exists.
- How it should look.
- How it should reflow.
- How navigation behaves.
- How services behave.
- How images behave.
- How controls behave.
- Which states are required.
- Which accessibility constraints apply.

Implementation should not need to invent fundamental responsive UX
decisions.

### 18.27 Specification acceptance mapping

The responsive specification must provide sufficient coverage for the
approved V2 responsive acceptance criteria.

Before closing the issue, validate the following areas against the
actual GitHub checklist:

Acceptance area Primary specification coverage

---

Mobile-first page structure Sections 3--4
Breakpoint/layout strategy Section 5
Header and navigation Section 6
Hero Section 7
Statistics / trust strip Section 8
Institutional / About Section 9
Five service categories Section 10
Service-detail behavior Section 10
Environmental Compensation Section 11
Experience / differentiators Section 12
Trusted entities Section 12
CTA placement and behavior Section 13
Contact Section 14
Footer Section 15
Image cropping and scaling Section 16
Interactive states Section 17
Touch and responsive accessibility Section 17
Full responsive approval Section 18

This table is a traceability aid.

The approved V2 documentation and current repository quality
requirements are the continuing acceptance sources of truth.

### 18.28 Final approval criteria

The responsive experience may be approved when:

- All approved responsive acceptance criteria are demonstrably
  addressed.
- No unresolved major responsive UX decision remains.
- Mobile, tablet, desktop, and large-screen behavior are documented.
- The responsive design remains consistent with
  `content-architecture.md`.
- The responsive design remains consistent with `design-system.md`.
- Image behavior is sufficiently defined for implementation.
- Interactive states are sufficiently defined.
- Touch and keyboard behavior are sufficiently defined.
- WCAG AA requirements remain preserved.
- The approved preliminary design has been translated into a coherent
  responsive system rather than merely scaled between viewport sizes.

Once approved, this document becomes the canonical responsive-experience
reference for Ancestral Landing V2 implementation.
