# China Buyer Prep Design System

This file is the project-level design guide for the Astro content site. Use it before changing templates, components, global CSS, illustrations, article layouts, or future Figma/Stitch drafts.

## Design Goal

China Buyer Prep should feel like a practical travel and sourcing field guide: calm, credible, specific, and quietly premium.

The site is not a generic travel blog and not a heavy booking product. It should combine:

- The visual confidence of a destination guide.
- The clarity and task flow of a buyer preparation tool.
- The restraint of a high-trust editorial resource.

The design should help users answer three questions quickly:

1. Am I in the right place?
2. Which path matches my goal?
3. What should I read or do next?

## Reference Direction

Use references as design inputs, not as layouts to copy.

### Backroads

Borrow:

- Clear top navigation with strong route choices.
- Curated content collections.
- Practical entry points based on user intent.
- High-trust, premium travel tone.

Do not copy:

- Heavy booking/trip-commerce patterns.
- Overly sales-led hero copy.
- Dense promotional modules that do not serve SEO content discovery.

### Travel China

Borrow:

- Destination-guide feeling.
- Large, confident visual moments.
- Inspiration plus planning structure.
- Cultural/travel context as a trust signal.

Do not copy:

- Generic official portal density.
- Carousel dependency for important content.
- Visual scale that hides the next useful action.

Recommended blend: Travel China's destination confidence plus Backroads' information architecture.

## Brand Personality

Use these words as a filter:

- Practical
- Calm
- Prepared
- Editorial
- Trustworthy
- Grounded
- Specific

Avoid:

- Generic AI startup gloss
- Purple/blue gradient tech aesthetics
- Decorative blobs or bokeh
- Vague luxury
- Travel cliches without practical detail
- Stock-photo sameness

## Visual Principles

### 1. Useful First Screen

The first viewport must show:

- Site name or clear brand identity.
- A concrete value proposition.
- Two or three primary user paths.
- A visual cue tied to China travel, Canton Fair, or sourcing preparation.

Do not use the homepage as a pure brand splash. The user should be able to move forward immediately.

### 2. Editorial, Not Decorative

Every visual block should clarify content:

- Route map
- Checklist
- Canton Fair badge
- Supplier comparison table
- Trip planning notes
- Destination or itinerary image
- Preparation timeline

Avoid visuals that only fill space.

### 3. Templates Over One-Off Art

This is a content site. Design decisions must scale across many pages.

Every new layout should belong to a reusable family:

- Homepage section
- Hub page section
- Article header
- Article body block
- Tool card
- Related guide card
- FAQ block
- Checklist block
- Comparison table

## Color System

Use warm neutrals, deep green, terracotta, and soft sand accents.

```css
:root {
  --bg: #f8f3ea;
  --bg-soft: #fbfaf6;
  --surface: #ffffff;
  --surface-tint: #f3eadc;
  --ink: #172622;
  --muted: #617069;
  --soft: #87928d;
  --line: #ded5c6;
  --line-strong: #cbbda8;
  --green: #174f49;
  --green-2: #276d63;
  --red: #b94f3f;
  --gold: #c99a4a;
  --sand: #eadbc2;
  --pale-green: #e9f2ee;
  --pale-red: #f8e9e4;
  --pale-gold: #f7efd9;
}
```

Color roles:

- `--green`: primary navigation, CTAs, route markers, trust moments.
- `--red`: Canton Fair, warnings, priority notes, category accents.
- `--gold`: sourcing, comparison, planning highlights.
- `--sand`: soft section backgrounds, supporting panels.
- `--ink`: headings and important body text.
- `--muted`: normal supporting copy.

Rules:

- Keep the palette warm and China-relevant without becoming red-and-gold tourist branding.
- Do not introduce new accent colors unless they solve a real content problem.
- Never rely on color alone to communicate category or status.

## Typography

Use system fonts for speed and stability.

Current stack:

```css
Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif
```

Rules:

- Body copy should read comfortably at 16-18px.
- Article line length should stay around 65-80 characters.
- Headings should be confident but not oversized on content pages.
- Avoid viewport-width font scaling.
- Letter spacing is 0 except small uppercase labels, where subtle positive tracking is allowed.
- Do not use negative letter spacing.

Recommended type roles:

- `h1`: strong editorial title, compact enough to keep the next action visible.
- `h2`: section decision point.
- `h3`: card title or article subsection.
- Eyebrow: small uppercase category, not a decorative slogan.
- Body: direct, specific, and scannable.

## Layout Rules

### Containers

Use the existing page width pattern:

```css
width: min(1160px, calc(100% - 36px));
margin-inline: auto;
```

On mobile, maintain at least 12px side breathing room.

### Spacing

- Major sections: generous vertical rhythm.
- Cards: enough padding for scanning, usually 20-26px.
- Article body: more vertical spacing between subsections than between normal paragraphs.
- Mobile: compress section spacing, but do not crowd controls.

### Responsive Behavior

Layouts should collapse predictably:

- Desktop: two-column hero or content/sidebar layouts are allowed.
- Tablet: reduce column imbalance and preserve readable copy.
- Mobile: single-column, full-width buttons where useful, no sticky sidebar.

No text, visual panel, table, or card should overflow horizontally on 320px screens.

## Component Rules

### Header

The header should provide orientation, not overwhelm.

Required:

- Brand link to homepage.
- Navigation to main hubs.
- Clear wrapping behavior on small screens.

Avoid:

- Mega menus until the content library is large enough.
- Hidden mobile navigation that requires JavaScript.

### Hero

Homepage hero should include:

- Specific eyebrow.
- Clear H1.
- Short value explanation.
- Two primary actions.
- A relevant visual panel or image.

Hub page hero should include:

- Hub-specific promise.
- What the reader can accomplish.
- Links to best next pages or tools.

### Cards

Cards are for repeated entry points, not for every section.

Use cards for:

- Hub paths
- Article previews
- Tools
- Related resources
- Side notes

Card rules:

- Radius: use existing `--radius` unless a component has a strong reason.
- Border: use `--line`.
- Shadow: subtle only.
- Hover: move at most 2px and keep contrast stable.
- Whole-card links are allowed when the target is obvious.
- Do not nest cards inside cards.

### Buttons

Buttons are for actions, not decoration.

Primary:

- Deep green background.
- White text.
- Strong but simple label.

Secondary:

- Light surface.
- Green text and border.

Labels should be concrete:

- Good: `Open checklist`, `Read buyer guide`, `View all posts`.
- Avoid: `Learn more`, `Explore`, `Discover more` when a specific label is possible.

### Article Body

Article pages should include:

- Category badge.
- H1 and concise description.
- Optional summary box.
- Quick answer callout when the search intent benefits from it.
- Tables for comparisons.
- Checklists for preparation.
- FAQ block when useful for long-tail SEO.
- Related tool or next guide card.

Article body rules:

- Use real headings in order.
- Keep paragraphs short.
- Prefer lists for procedural content.
- Tables must remain readable on mobile.
- Avoid hiding SEO-critical copy in accordions.

### Tool Pages

Tool pages should feel more functional than blog posts.

Include:

- What this tool helps with.
- A short usage note.
- The checklist/table/template itself.
- Copyable text when useful.
- Related guide links.

Avoid:

- Over-styled controls that make the page feel like an app if the tool is mostly static.

## Image And Visual Asset Rules

Current site uses CSS illustration panels. That is acceptable for performance and consistency, but the site will feel more premium if key pages eventually use local, optimized imagery.

Article covers now use a lightweight local visual system:

- Add `coverImage` to blog frontmatter when a local image is available, for example `/images/covers/canton-fair-hotel-area.jpg`.
- Add `coverAlt` for the image description.
- Add `coverMotif` when using a CSS/SVG placeholder instead of an image. Supported motifs: `map`, `checklist`, `badge`, `hotel`, `supplier`.
- If no cover image is provided, blog cards and article headers render an editorial placeholder with warm off-white, deep green, terracotta, and sand accents.

Image rules:

- Do not hotlink external images.
- Use local assets in `public/` or optimized Astro image workflows if added later.
- Images must match the topic exactly.
- Avoid vague atmospheric images.
- Avoid dark, blurry, heavily cropped, or generic stock images.
- Use real/generated bitmap imagery for destination pages where users expect to inspect places.

Preferred image subjects:

- Canton Fair exterior/interior context
- Guangzhou business districts
- China travel planning objects
- Transit and route planning
- Supplier booth notes
- Checklist or document still life

Do not use:

- Random mountains for business sourcing pages.
- Generic passport photos for every travel article.
- Pure gradient or SVG hero art when a concrete visual is needed.

## Accessibility Rules

Required:

- Semantic HTML first.
- Logical heading order.
- Descriptive link text.
- Strong text/background contrast.
- Visible focus states.
- No hover-only essential interactions.
- Buttons and links must have clear accessible names.
- `aria-label` only when visible text is insufficient.

Check before shipping:

- Can the page be scanned by headings?
- Can links be understood out of context?
- Does mobile text remain readable?
- Does the page work without JavaScript?
- Are tables and visual panels usable on narrow screens?

## SEO Rules

Design must preserve the SEO foundation.

Do:

- Keep static Astro pages.
- Preserve canonical URLs.
- Preserve sitemap and robots behavior.
- Keep article content in HTML.
- Use clear internal links between hubs, articles, and tools.
- Use descriptive card titles.
- Support schema where already implemented.

Do not:

- Replace important copy with images.
- Hide core content behind client-side JavaScript.
- Add heavy animation libraries.
- Add large third-party component systems for simple UI.
- Change existing routes without redirects.

## Performance Rules

The site should stay fast.

Allowed:

- CSS-only interactions.
- Small inline SVG icons.
- Local optimized images.
- Minimal framework-native Astro components.

Avoid:

- Heavy client-side hydration.
- External font loading unless there is a strong brand reason.
- Large UI libraries.
- Carousel libraries for core content.
- Remote image dependencies.

## Astro Implementation Rules

Prefer:

- `.astro` components for layout and presentational UI.
- MDX content for article body content.
- Shared CSS classes in `src/styles/global.css` when patterns are reused.
- Small component props for repeated cards.

Before adding a new component, ask:

1. Will this pattern be reused?
2. Does an existing card, section, or callout already cover it?
3. Does this help content discovery or readability?

Recommended component families:

- `Header.astro`
- `Footer.astro`
- `EntryCard.astro`
- `Faq.astro`
- Article callout component
- Related guide card component
- Checklist/tool block component

## Stitch Or Figma Workflow

Use Stitch/Figma for exploration, not as the final authority.

Best workflow:

1. Generate 2-3 visual directions.
2. Select the strongest direction based on content clarity.
3. Translate the direction into tokens and reusable components.
4. Implement in Astro.
5. Verify with local browser screenshots on desktop and mobile.

When reviewing a generated design, reject it if:

- It looks like a generic AI landing page.
- It depends on vague decorative gradients.
- It makes article discovery harder.
- It uses too many one-off components.
- It hides SEO content.
- It breaks mobile density.

## Page Template Guidance

### Homepage

Primary job: route the user.

Recommended order:

1. Hero with brand promise and primary paths.
2. Three path cards: China travel, Canton Fair, China sourcing.
3. Latest or recommended guides.
4. Tool/checklist section.
5. Trust or editorial promise section.

### Hub Pages

Primary job: frame a topic and move readers into articles/tools.

Recommended order:

1. Hub hero.
2. Start-here guide.
3. Core checklist/tool.
4. Article grid.
5. FAQ or next-step block.

### Article Pages

Primary job: answer search intent and move to next useful resource.

Recommended order:

1. Article header.
2. Summary or quick answer.
3. Main body.
4. Checklist/table/callout blocks.
5. FAQ.
6. Related next guide/tool.

### Tool Pages

Primary job: make the resource immediately usable.

Recommended order:

1. Tool title and use case.
2. Instructions in 2-4 bullets.
3. The actual tool/checklist/template.
4. Copy/download action if available.
5. Related guides.

## Design QA Checklist

Run this before considering a visual update done:

- The first viewport shows a clear next action.
- The page is readable at 320px width.
- No component clips or overlaps.
- Cards have consistent radius, border, and hover behavior.
- CTA labels are specific.
- Article text is not too wide.
- Tables do not create horizontal page overflow.
- Visuals are topic-specific.
- The page still works without JavaScript.
- Important SEO copy remains visible in HTML.
- Colors match the defined palette.
- The design feels like a practical China travel/sourcing guide, not a generic SaaS template.
