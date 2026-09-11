# Ancestral Landing V2 --- Content Architecture

## 1. Purpose and scope

This document defines the approved information architecture, content
hierarchy, navigation model, editorial direction, and Spanish website
copy for **Ancestral Landing V2**.

It remains the content source of truth for the implemented V2 experience
and should be used together with the visual design system and technical
architecture documentation.

The website must communicate Ancestral Servicios Ambientales as an
experienced environmental services company capable of formulating,
advising, and executing projects for public and private organizations.

The content architecture is based primarily on:

- The Ancestral Servicios Ambientales 2026 corporate brochure.
- The approved V2 visual concept.
- The existing Ancestral Landing implementation.
- The content and UX decisions approved during the V2 planning
  process.

The website must prioritize:

- Clear communication of the company's services.
- Institutional credibility.
- Environmental experience and territorial knowledge.
- Environmental compensation as a transversal proof of experience.
- Easy access to detailed service information.
- Clear conversion paths toward contact.
- A professional but approachable communication style.
- A structure capable of evolving as new projects, services, and
  institutional content become available.

---

## 2. Content principles

### 2.1 Tone of voice

Website copy must be:

- Professional.
- Clear.
- Concise.
- Trustworthy.
- Conversational.
- Commercial without becoming overly promotional.
- Technically credible without unnecessarily complex language.

The website should speak primarily from the perspective of what
Ancestral can help clients accomplish.

Avoid simply reproducing brochure text verbatim.

Brochure information should instead be transformed into web-oriented
content that is easier to scan, understand, and act upon.

### 2.2 Content hierarchy

Every major section should answer one of the following questions:

1.  Who is Ancestral?
2.  What does Ancestral do?
3.  Why should a potential client trust Ancestral?
4.  What experience does Ancestral have?
5.  How can Ancestral help with a specific need?
6.  How can the visitor start a conversation with Ancestral?

### 2.3 Content density

The home page should provide enough information to establish credibility
and explain the company's capabilities without becoming an exhaustive
corporate brochure.

Detailed technical service information belongs primarily in the service
detail experience.

### 2.4 Environmental compensation

Environmental compensation must not be presented as a sixth service
category.

Instead, it should work as a transversal proof point demonstrating
Ancestral's environmental experience, execution capability, territorial
presence, and measurable impact.

Its narrative should appear naturally throughout the website where
relevant.

---

# 3. Information architecture

Ancestral Landing V2 consists of two primary content experiences:

1.  **Home page**
2.  **Service detail pages**

The initial V2 does not include a dedicated Projects section.

A Projects module may be incorporated in a future iteration once the
client provides sufficient structured information about representative
projects.

Environmental Compensation does not have its own primary navigation
section in the initial V2.

---

# 4. Navigation architecture

## 4.1 Main navigation

The primary navigation should contain:

- Inicio
- Nosotros
- Servicios
- Contacto

The navigation must remain simple and focused on the primary user
journey.

### Inicio

Returns the visitor to the beginning of the home page.

### Nosotros

Navigates to the institutional section of the home page.

### Servicios

Navigates to the service overview section.

From there, each service card provides access to its corresponding
detail page.

### Contacto

Navigates directly to the main contact section.

## 4.2 WhatsApp access

WhatsApp must remain visually differentiated from the standard
navigation.

It should not be labeled simply as **Contacto** or **Contáctanos**,
because this could be confused with the website's Contacto navigation
item.

The WhatsApp interaction should make the communication channel explicit
through its icon and supporting copy.

Possible presentation:

> **Hablemos por WhatsApp**

The final UI treatment may use the WhatsApp icon as the dominant visual
element while maintaining an accessible text label.

## 4.3 Service navigation

Each service card on the home page links to a dedicated service detail
route.

Recommended route model:

```text
/servicios/ambientales
/servicios/forestales
/servicios/agricolas
/servicios/recurso-hidrico
/servicios/seguridad-salud-trabajo
```

All service pages should use the same reusable structural template.

---

# 5. Home page

## 5.1 Header

The header follows the approved V2 visual concept.

It contains:

- Ancestral logo.
- Primary navigation.
- WhatsApp access.
- Responsive/mobile navigation behavior.

The desktop version should remain visually lightweight.

The mobile version should prioritize usability and clear touch targets
without changing the information hierarchy.

---

## 5.2 Hero

### Heading

> **Transformamos entornos, generamos vida.**

The words or phrase emphasized in green should follow the approved V2
visual design.

### Supporting copy

> Formulamos, asesoramos y ejecutamos proyectos ambientales en el sector
> privado y público, con acciones que protegen los recursos naturales y
> contribuyen a un futuro sostenible.

### Primary CTA

> **Nuestros servicios**

Navigates to the service overview.

### Secondary CTA

> **Conócenos**

Navigates to the institutional section.

### Visual direction

The hero should use strong environmental photography representing the
territory where Ancestral operates.

The approved V2 concept uses natural landscapes as the primary visual
language.

Environmental compensation and territorial impact can begin to be
communicated from this first section without creating a separate
compensation module.

---

## 5.3 Trust and experience indicators

Immediately after the hero, the website presents a compact set of
institutional proof points.

### Indicator 1

**+10**

> Años de experiencia

### Indicator 2

**+1M**

> Árboles sembrados

### Indicator 3

**Sector**

> Privado y público

### Indicator 4

**Oriente**

> Colombiano

These indicators should be easy to scan and act as an immediate
credibility layer before introducing the company in greater detail.

---

## 5.4 ¿Quiénes somos?

### Heading

> **¿Quiénes somos?**

### Body copy

> Somos una empresa con más de 10 años de experiencia en servicios
> ambientales, con amplia presencia y ejecución en el oriente
> colombiano.
>
> Contamos con viveros propios para la producción de material vegetal en
> diferentes zonas del departamento de Santander.
>
> Desde nuestra sede administrativa en Bucaramanga formulamos,
> asesoramos y ejecutamos proyectos para organizaciones del sector
> público y privado.

### Supporting statement

> **Comprometidos con el territorio y con el futuro.**

The section should communicate experience and operational capability
while remaining concise.

The visual treatment follows the approved preliminary design, combining
environmental imagery with the dark blue institutional background.

---

# 6. Nuestros servicios

## 6.1 Section heading

> **Nuestros servicios**

The home page presents the five official service categories.

Service cards should intentionally remain concise.

Each card should prioritize:

- Icon.
- Service title.
- Clear interactive state.

Detailed service descriptions do not need to be displayed directly on
the home page.

The visitor can select a card to access the complete service detail
experience.

## 6.2 Official service categories

The five approved service categories are:

1.  **Servicios Ambientales**
2.  **Servicios Forestales**
3.  **Servicios Agrícolas**
4.  **Manejo del Recurso Hídrico**
5.  **Seguridad y Salud en el Trabajo**

These categories replace the previous service taxonomy where necessary
and should be used consistently throughout the application.

## 6.3 Section CTA

> **Conoce todos nuestros servicios**

The service cards themselves remain the primary entry points to
individual service details.

---

# 7. Service detail architecture

Every service detail page should use the same reusable information
architecture.

The page is a dedicated module rather than a modal or popup.

This decision allows each service experience to:

- Have its own URL.
- Be directly shareable.
- Be indexed independently by search engines.
- Support future SEO strategies.
- Grow independently as new information becomes available.
- Support additional media and project references in future versions.

## 7.1 Shared service page structure

Each service page contains:

1.  Service hero.
2.  Introductory value proposition.
3.  Main service capabilities.
4.  Relevant environmental or territorial context.
5.  Image gallery/carousel.
6.  Contact form.
7.  WhatsApp alternative.
8.  Navigation back to Services/Home.

The gallery should use real photographs supplied by the client whenever
possible.

---

# 8. Servicios Ambientales

## 8.1 Heading

> **Servicios Ambientales**

## 8.2 Introductory copy

> Convertimos las necesidades ambientales de cada proyecto en soluciones
> técnicas, viables y responsables.
>
> Acompañamos a organizaciones públicas y privadas desde la formulación
> y planificación hasta la ejecución y seguimiento de sus proyectos
> ambientales, integrando conocimiento técnico, experiencia en campo y
> comprensión del territorio.

## 8.3 Service capabilities

### Planeación y gestión ambiental

Formulamos proyectos y planes de manejo ambiental orientados al
cumplimiento de los requerimientos técnicos y normativos de cada
iniciativa.

### Restauración y conservación

Desarrollamos acciones de restauración, limpieza, mantenimiento y
conservación de fuentes hídricas y ecosistemas, buscando recuperar y
proteger áreas de importancia ambiental.

### Gestión de permisos y licencias

Acompañamos procesos relacionados con licencias ambientales y permisos
ante las autoridades competentes, incluyendo concesiones de aguas,
permisos de vertimientos, ocupación de cauce y otros trámites
contemplados por la normativa ambiental aplicable.

### Material vegetal y proyectos sostenibles

Contamos con capacidad para el suministro de material vegetal y
acompañamos iniciativas de establecimiento vegetal y proyectos
silvopastoriles adaptados a las necesidades del territorio.

### Asesoría técnica y jurídica

Brindamos acompañamiento técnico y representación jurídica en procesos
sancionatorios ambientales, integrando el componente normativo con el
conocimiento técnico del proyecto.

### Estudios y actividades ambientales

Realizamos toma de muestras de suelos y apoyamos la organización de
actividades y eventos relacionados con gestión y educación ambiental.

### Compensaciones ambientales

Nuestra experiencia en campo nos permite participar en procesos de
compensación ambiental orientados a generar resultados medibles y
sostenibles en el territorio.

## 8.4 Contact transition

> **¿Tienes un proyecto ambiental en marcha o estás por comenzar uno?**
>
> Cuéntanos qué necesitas. Nuestro equipo puede ayudarte a identificar
> el acompañamiento adecuado para tu proyecto.

The contact form on this page must automatically preselect:

> **Servicios Ambientales**

---

# 9. Servicios Forestales

## 9.1 Heading

> **Servicios Forestales**

## 9.2 Introductory copy

> Protegemos y gestionamos los recursos forestales combinando
> conocimiento técnico, experiencia en campo y acciones orientadas a la
> conservación.
>
> Acompañamos proyectos que requieren conocer, intervenir, recuperar o
> manejar coberturas vegetales y ecosistemas forestales de manera
> responsable.

## 9.3 Service capabilities

### Inventarios forestales

Realizamos inventarios que permiten identificar y caracterizar los
recursos forestales presentes en las áreas de intervención de cada
proyecto.

### Manejo de fauna y regeneración vegetal

Desarrollamos actividades de ahuyentamiento de fauna y traslado de
brinzales como parte de los procesos de manejo y protección asociados a
las intervenciones ambientales.

### Reforestación

Ejecutamos procesos de reforestación orientados a recuperar coberturas
vegetales y fortalecer la conservación y restauración de ecosistemas.

### Manejo de epífitas

Realizamos actividades de traslado de epífitas cuando las condiciones
ambientales y los requerimientos del proyecto así lo requieren.

### Mantenimiento de plantaciones

Acompañamos las etapas posteriores al establecimiento mediante labores
de mantenimiento que favorecen el desarrollo y permanencia de las
plantaciones.

### Levantamiento de veda

Apoyamos técnicamente los procesos asociados al levantamiento de veda de
especies cuando resultan aplicables dentro del proyecto.

### Aprovechamientos forestales

Desarrollamos actividades relacionadas con aprovechamientos forestales
bajo criterios técnicos y de cumplimiento ambiental.

## 9.4 Environmental compensation connection

La experiencia forestal de Ancestral es una parte fundamental de nuestra
capacidad para ejecutar procesos de restauración y compensación
ambiental con impacto real en el territorio.

## 9.5 Contact transition

> **¿Tu proyecto requiere manejo, intervención o recuperación de
> recursos forestales?**
>
> Cuéntanos sus características y conversemos sobre la mejor forma de
> acompañarlo.

The contact form must automatically preselect:

> **Servicios Forestales**

---

# 10. Servicios Agrícolas

## 10.1 Heading

> **Servicios Agrícolas**

## 10.2 Introductory copy

> Acompañamos el desarrollo de proyectos agrícolas con soluciones
> orientadas al uso eficiente del suelo, el agua y la infraestructura
> productiva.
>
> Integramos asesoría técnica, conocimiento del territorio y apoyo
> operativo para fortalecer proyectos agrícolas desde su planificación
> hasta su ejecución.

## 10.3 Service capabilities

### Obras agrícolas y preparación de tierras

Brindamos asesoría para obras agrícolas, manejo de aguas y preparación
de terrenos de acuerdo con las condiciones y necesidades de cada
proyecto.

### Infraestructura agrícola

Apoyamos el diseño y construcción de infraestructura necesaria para
mejorar la operación y productividad de proyectos agrícolas.

### Caracterización de suelos

Realizamos procesos de caracterización que permiten comprender las
condiciones del suelo y tomar decisiones técnicas mejor fundamentadas.

### Información y fotografía aérea

Apoyamos procesos de caracterización territorial mediante herramientas
de información y fotografía aérea aplicadas a las necesidades del
proyecto.

### Suministro de insumos

Facilitamos el suministro de insumos agrícolas requeridos para la
ejecución y mantenimiento de las actividades productivas.

### Encerramientos perimetrales

Desarrollamos soluciones de cerramiento adaptadas a las características
y necesidades de las áreas de intervención.

## 10.4 Sustainability connection

El desarrollo productivo puede avanzar de la mano de una gestión
responsable del territorio. Nuestro enfoque busca aportar soluciones que
permitan aprovechar los recursos de manera eficiente y sostenible.

## 10.5 Contact transition

> **¿Estás desarrollando o fortaleciendo un proyecto agrícola?**
>
> Cuéntanos qué necesitas y evaluemos juntos las soluciones más
> adecuadas para tu proyecto.

The contact form must automatically preselect:

> **Servicios Agrícolas**

---

# 11. Manejo del Recurso Hídrico

## 11.1 Heading

> **Manejo del Recurso Hídrico**

## 11.2 Introductory copy

> El agua es uno de los recursos esenciales de cualquier territorio y su
> gestión requiere conocimiento técnico, planificación y seguimiento.
>
> Acompañamos proyectos relacionados con la protección, ordenamiento y
> manejo sostenible del recurso hídrico, desde la planificación hasta
> las acciones de intervención y conservación.

## 11.3 Service capabilities

### Planes de manejo ambiental de sistemas acuíferos

Brindamos asesoría técnica y acompañamiento en la elaboración y
ejecución de planes orientados a la protección y manejo ambiental de
sistemas acuíferos.

### Saneamiento y manejo de vertimientos

Apoyamos la formulación y ejecución de planes de saneamiento y manejo de
vertimientos de acuerdo con las necesidades de cada proyecto.

### Ordenamiento de cuencas

Participamos en procesos asociados a Planes de Ordenamiento y Manejo de
Cuencas Hidrográficas (POMCA) y Planes de Ordenamiento del Recurso
Hídrico (PORH).

### Manejo de cauces y vertimientos

Brindamos asesoría y apoyo técnico en actividades relacionadas con
aforos de caudales y caracterización de vertimientos.

## 11.4 Environmental connection

La protección del recurso hídrico está directamente relacionada con la
conservación de los ecosistemas que lo sostienen.

Nuestra experiencia ambiental y territorial permite abordar estos
procesos desde una visión integral que conecta agua, suelo, vegetación y
comunidades.

## 11.5 Contact transition

> **¿Tu proyecto requiere planificación, protección o manejo del recurso
> hídrico?**
>
> Cuéntanos el contexto y nuestro equipo podrá orientarte sobre el
> acompañamiento que necesitas.

The contact form must automatically preselect:

> **Manejo del Recurso Hídrico**

---

# 12. Seguridad y Salud en el Trabajo

## 12.1 Heading

> **Seguridad y Salud en el Trabajo**

## 12.2 Introductory copy

> Entornos de trabajo seguros requieren prevención, planificación y
> sistemas de gestión que funcionen en la práctica.
>
> Acompañamos a organizaciones públicas y privadas en el diseño,
> implementación, evaluación y fortalecimiento de sus procesos de
> Seguridad y Salud en el Trabajo.

## 12.3 Service capabilities

### Sistemas de Gestión de Seguridad y Salud en el Trabajo

Diseñamos e implementamos Sistemas de Gestión de Seguridad y Salud en el
Trabajo (SG-SST) adaptados a las características y necesidades de cada
organización.

### Sistemas de gestión

Apoyamos el diseño e implementación de sistemas de gestión que permitan
fortalecer procesos internos y promover mejores prácticas
organizacionales.

### Auditorías

Realizamos auditorías a Sistemas de Gestión de Calidad como herramienta
para evaluar su funcionamiento e identificar oportunidades de mejora.

### Gestión del riesgo de desastres

Acompañamos la formulación y desarrollo de Planes de Gestión del Riesgo
de Desastres para entidades públicas y privadas (PGRDEPP).

## 12.4 Value proposition

Nuestro objetivo es ayudar a las organizaciones a convertir los
requerimientos de seguridad y gestión en procesos claros, aplicables y
sostenibles dentro de su operación.

## 12.5 Contact transition

> **¿Necesitas implementar, revisar o fortalecer tus sistemas de
> gestión?**
>
> Cuéntanos qué necesita tu organización y conversemos sobre cómo
> podemos acompañarte.

The contact form must automatically preselect:

> **Seguridad y Salud en el Trabajo**

---

# 13. Comprometidos con nuestro territorio

This section connects Ancestral's institutional message with its
environmental impact.

### Heading

> **Comprometidos con nuestro territorio**

### Body copy

> Nuestra experiencia se construye en el territorio.
>
> Hemos participado en proyectos de gestión, conservación, restauración
> y compensación ambiental, llevando el conocimiento técnico al campo y
> convirtiéndolo en acciones que contribuyen a proteger los recursos
> naturales y generar entornos más sostenibles.
>
> Nuestra participación en procesos de siembra en el Páramo de Santurbán
> refleja ese compromiso con la conservación y protección de ecosistemas
> estratégicos para Colombia.

### Supporting statement

> **Más que proyectos, acciones que dejan huella.**

The section should use strong territorial photography, preferably
associated with the Páramo de Santurbán or representative areas where
Ancestral has worked.

The **more than one million trees planted** metric can be reinforced
visually in this context without unnecessarily repeating the entire
trust-indicator block.

---

# 14. Entidades que han confiado en nosotros

## Heading

> **Entidades que han confiado en nosotros**

This section provides institutional social proof.

Organizations displayed in the approved preliminary design and brochure
include:

- CDMB
- CAS
- Ruta del Cacao
- Institutional/public entity represented in the approved brochure
  artwork
- Marval

Only organizations explicitly approved by the client may appear publicly
on the website.

Logos must be displayed respectfully and consistently without implying
certifications, endorsements, partnerships, or contractual relationships
beyond what can be supported.

---

# 15. Contact experience

The contact section is the primary conversion point of the website.

It should remain visually approachable and should not feel like a long
administrative form.

## 15.1 Heading

> **Hablemos de tu proyecto**

## 15.2 Introductory copy

> Cada proyecto tiene necesidades diferentes.
>
> Cuéntanos brevemente qué necesitas y nuestro equipo podrá ponerse en
> contacto contigo para conocer mejor tu proyecto y orientarte sobre el
> servicio más adecuado.

## 15.3 Form

The form contains:

### Nombre

Required.

### Correo electrónico

At least one contact method --- email or phone --- must be provided.

### Teléfono

At least one contact method --- email or phone --- must be provided.

### Servicio

Optional on the general contact form.

Options:

- Servicios Ambientales
- Servicios Forestales
- Servicios Agrícolas
- Manejo del Recurso Hídrico
- Seguridad y Salud en el Trabajo

When the form is displayed from a service detail page, the corresponding
service must be preselected automatically.

### Mensaje

Required.

The visitor should be encouraged to briefly explain their requirement.

### Date

No date field is required in the V2 contact form unless a future
business requirement explicitly reintroduces it.

## 15.4 Submit CTA

> **Enviar solicitud**

The form will eventually communicate with the Ancestral API to process
the contact request and send the corresponding email notifications.

The API integration itself belongs to the dedicated frontend/API
integration issue.

---

# 16. CAPTCHA

The public contact form must include CAPTCHA protection.

CAPTCHA validation must not rely exclusively on frontend validation.

The frontend will obtain the CAPTCHA token and send it together with the
contact request.

The Ancestral API must validate the token server-side before processing
the request.

This requirement implies a small follow-up version of the API, currently
planned as **Ancestral API v1.0.1**.

The API update should also be used to review and finalize the email
templates associated with contact requests.

Implementation details belong to the corresponding API/frontend
integration work and are outside the scope of this content architecture
document.

---

# 17. WhatsApp contact channel

WhatsApp provides an alternative direct communication path.

### Heading

> **¿Prefieres hablar directamente con nosotros?**

### Supporting copy

> También puedes escribirnos por WhatsApp y conversar con nuestro
> equipo.

### CTA

> **Hablemos por WhatsApp**

The final implementation may emphasize the WhatsApp icon while
preserving an accessible textual label.

WhatsApp should remain separate from the main contact form so the
visitor clearly understands that these are two different communication
channels.

---

# 18. Location and Google Maps

The contact experience should include Ancestral's physical location.

### Address

> Calle 54 \# 22 - 12\
> Bucaramanga, Santander

A Google Maps integration should visually display the location.

The map complements the contact information and reinforces the company's
physical presence in Bucaramanga.

The implementation should consider performance, privacy, responsive
behavior, and accessibility when deciding how the map is loaded.

---

# 19. Contact information

Based on the 2026 brochure:

### Phone

> +57 316 411 4933

### Address

> Calle 54 \# 22 - 12\
> Bucaramanga, Santander

Contact information must remain consistent between:

- Contact section.
- WhatsApp CTA.
- Footer.
- Structured SEO metadata where applicable.

---

# 20. Footer

The footer follows the approved V2 preliminary design.

It is organized into compact information groups rather than becoming
another large content section.

## 20.1 Institutional block

Ancestral logo.

Supporting copy:

> Formulamos, asesoramos y ejecutamos proyectos ambientales para un
> futuro sostenible.

## 20.2 Contact block

### Heading

> **Contacto**

Information:

- Calle 54 \# 22 - 12, Bucaramanga, Santander
- +57 316 411 4933

Approved social media channels may also be displayed through their
corresponding icons.

## 20.3 Quick links

### Heading

> **Enlaces rápidos**

Links:

- Inicio
- Nosotros
- Servicios
- Contacto

The footer must use the same navigation model as the main website.

Do not include Projects or Environmental Compensation as primary links
in V2.

## 20.4 Business hours

### Heading

> **Horario de atención**

According to the preliminary V2 design:

**Lunes a Viernes**

> 8:00 a.m. - 5:00 p.m.

**Sábados**

> 8:00 a.m. - 12:00 m.

These hours require client confirmation before final publication.

## 20.5 Copyright

> © 2026 Ancestral Servicios Ambientales. Todos los derechos reservados.

---

# 21. Environmental Compensation strategy

Environmental compensation is a strategic narrative rather than an
isolated website module.

It must communicate three things:

### Experience

Ancestral has practical experience participating in environmental
management, conservation, restoration, planting, and compensation
activities.

### Scale

The company reports more than one million trees planted.

### Territory

The company's experience includes work associated with the Páramo de
Santurbán and other areas in the Colombian eastern region.

These proof points should be distributed naturally throughout the
website.

Recommended placements include:

- Hero narrative and imagery.
- Experience indicators.
- ¿Quiénes somos?
- Servicios Ambientales.
- Servicios Forestales.
- Manejo del Recurso Hídrico.
- Comprometidos con nuestro territorio.
- Relevant service imagery.

Environmental compensation must not be presented as an additional
service unless the business explicitly decides to change the service
taxonomy in the future.

---

# 22. Calls to action

The website uses different CTAs according to visitor intent.

## 22.1 Discovery CTAs

Used when the visitor is still learning about Ancestral.

Examples:

> **Nuestros servicios**

> **Conócenos**

> **Conoce todos nuestros servicios**

## 22.2 Service CTAs

Service cards provide direct navigation to service detail pages.

The interface should make it clear that each card is interactive.

## 22.3 Conversion CTA

The primary conversion action is:

> **Enviar solicitud**

This action belongs to the contact form.

## 22.4 Direct conversation CTA

WhatsApp is presented as a separate direct-contact channel:

> **Hablemos por WhatsApp**

The distinction between form submission and WhatsApp communication must
remain clear throughout the experience.

---

# 23. Image strategy

Photography should reinforce credibility and real-world execution.

Priority should be given to images supplied directly by Ancestral
showing:

- Environmental work.
- Forest activities.
- Agricultural activities.
- Water-resource projects.
- Safety and field activities.
- Plant nurseries.
- Planting processes.
- Restoration.
- Environmental compensation.
- Relevant landscapes and territories.

Service detail pages should support an image carousel/gallery.

Images must be selected according to the service being presented rather
than used only for decorative purposes.

The architecture must allow galleries to grow over time without
requiring structural redesign.

---

# 24. Content requiring client confirmation

Before final production publication, the following information should be
explicitly confirmed with the client where necessary:

### Institutional metrics

- More than 10 years of experience.
- More than one million trees planted.

### Organizations and logos

Confirm authorization and appropriate use of every organization logo
displayed on the website.

The website must not imply unsupported partnerships, endorsements,
certifications, or current contractual relationships.

### Páramo de Santurbán

Confirm the preferred wording used to describe Ancestral's participation
and experience in planting, restoration, conservation, or environmental
compensation processes associated with the Páramo de Santurbán.

### Contact information

Confirm:

- Calle 54 \# 22 - 12.
- Bucaramanga, Santander.
- +57 316 411 4933.
- WhatsApp number.

### Business hours

Confirm:

- Monday-Friday: 8:00 a.m. - 5:00 p.m.
- Saturday: 8:00 a.m. - 12:00 m.

### Social networks

Confirm which official social media profiles should be publicly linked.

### Images

Confirm that client-provided photographs may be used publicly on the
website.

---

# 25. Content intentionally excluded from V2

The following items are intentionally excluded from the initial V2
architecture.

## 25.1 Projects section

A dedicated Projects section is not included because representative
project information has not yet been formally collected and approved.

The architecture should allow this section to be added in a future
iteration.

Potential future content may include:

- Project name.
- Client or organization.
- Location.
- Service category.
- Challenge.
- Work performed.
- Environmental impact.
- Images.
- Measurable results.

## 25.2 Environmental Compensation navigation item

Environmental Compensation must not appear as a standalone main
navigation item.

Its importance is communicated throughout the site instead.

---

# 26. Responsive content behavior

The information hierarchy must remain consistent across desktop, tablet,
and mobile devices.

Responsive layouts may reorganize visual elements, but must not remove
essential information.

On smaller screens:

- Navigation becomes compact.
- Content stacks vertically.
- Service cards remain easy to select.
- Trust indicators may stack or reorganize.
- Images preserve useful focal points.
- Contact fields use the available width.
- WhatsApp remains easily accessible.
- Google Maps adapts to the available viewport.
- Footer columns stack logically.

The detailed responsive implementation belongs to the dedicated V2
responsive UX issue.

---

# 27. Accessibility considerations

Content architecture must support accessible implementation.

Requirements include:

- Logical heading hierarchy.
- Descriptive links and buttons.
- Accessible form labels.
- Clear validation messages.
- Meaningful image alternative text.
- Keyboard-accessible navigation.
- Accessible carousel controls.
- Sufficient text contrast.
- Clear focus states.
- CAPTCHA implementation with an accessible verification path.

Accessibility implementation and validation are addressed in the
corresponding frontend quality issue.

---

# 28. SEO implications

The architecture intentionally gives each service its own route.

This enables dedicated metadata and search intent for:

- Servicios ambientales.
- Servicios forestales.
- Servicios agrícolas.
- Manejo del recurso hídrico.
- Seguridad y Salud en el Trabajo.

Content should remain natural and useful to visitors rather than
repeating keywords artificially.

The dedicated SEO issue will define:

- Page titles.
- Meta descriptions.
- Canonical URLs.
- Open Graph metadata.
- Structured data.
- Sitemap.
- Robots directives.
- Search engine indexing.
- Local SEO.
- Performance-related SEO.
- Search Console integration where applicable.

Paid search advertising is not part of the initial V2 SEO strategy.

The first objective is organic discoverability.

---

# 29. Content consistency rules

The following terminology should remain consistent throughout the V2
application.

Use:

> **Ancestral Servicios Ambientales**

Official service categories:

> **Servicios Ambientales**\
> **Servicios Forestales**\
> **Servicios Agrícolas**\
> **Manejo del Recurso Hídrico**\
> **Seguridad y Salud en el Trabajo**

Environmental compensation must always be treated as an experience and
impact narrative rather than an additional service category.

Avoid unnecessary duplication between the home page and service pages.

The home page introduces.

Service pages explain.

The contact experience converts.

---

# 30. Future evolution

The V2 architecture is intentionally designed to evolve.

Possible future additions include:

- Projects portfolio.
- Individual project case studies.
- Additional environmental impact metrics.
- Certifications.
- Client testimonials.
- Expanded institutional information.
- New service categories.
- Project galleries.
- News or environmental content.
- Additional locations or contact channels.

These additions should be implemented as future iterations rather than
incorporated into V2 without validated business content.

---

# 31. Approved V2 content architecture

The approved initial architecture is:

```text
Ancestral Landing V2
│
├── Home
│   ├── Header / Navigation
│   ├── Hero
│   ├── Experience indicators
│   ├── ¿Quiénes somos?
│   ├── Nuestros servicios
│   │   ├── Servicios Ambientales
│   │   ├── Servicios Forestales
│   │   ├── Servicios Agrícolas
│   │   ├── Manejo del Recurso Hídrico
│   │   └── Seguridad y Salud en el Trabajo
│   ├── Comprometidos con nuestro territorio
│   ├── Entidades que han confiado en nosotros
│   ├── Contacto
│   │   ├── Formulario
│   │   ├── CAPTCHA
│   │   ├── WhatsApp
│   │   └── Google Maps
│   └── Footer
│
└── Service Detail
    ├── Service hero
    ├── Value proposition
    ├── Service capabilities
    ├── Environmental / territorial context
    ├── Image gallery
    ├── Preselected contact form
    └── WhatsApp
```

---

# 32. Final content decision

This document represents the approved content architecture for the
initial implementation of **Ancestral Landing V2**.

Implementation issues may define presentation, responsive behavior,
components, styling, accessibility, performance, SEO, deployment, and
API integration, but they should not independently redefine the content
hierarchy established here.

Any substantial change to:

- Service taxonomy.
- Navigation.
- Institutional claims.
- Environmental compensation positioning.
- Contact model.
- Service-page structure.

should be reflected in this document before being treated as part of the
approved V2 architecture.
