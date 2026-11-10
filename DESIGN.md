---
name: RouteCool
description: Field service software stamped on like the nameplate on your own condenser.
colors:
  anodized-blue: "#0ea5e9"
  anodized-blue-hover: "#38bdf8"
  anodized-blue-edge: "#0284c7"
  anodized-blue-ink: "#075985"
  caution-orange: "#f26a1b"
  plate-aluminum: "#c9ccd1"
  plate-aluminum-hi: "#dde0e4"
  plate-aluminum-lo: "#aeb2b9"
  plate-edge: "#8d929a"
  shop-ground: "#e7e9ec"
  cabinet-gray: "#d5d8dc"
  etch-ink: "#111214"
  etch-ink-2: "#3a3d43"
  etch-ink-3: "#555960"
  label-white: "#f7f8f9"
  night-text: "#c4c8ce"
  night-caption: "#a9aeb5"
typography:
  display:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "clamp(2.5rem, 4.3vw, 4.25rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.005em"
    fontVariation: "\"wdth\" 62"
  headline:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "clamp(2.125rem, 4.6vw, 4rem)"
    fontWeight: 800
    lineHeight: 0.96
    letterSpacing: "-0.005em"
    fontVariation: "\"wdth\" 72"
  title:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "clamp(1.5rem, 2.6vw, 2.25rem)"
    fontWeight: 800
    lineHeight: 0.96
    fontVariation: "\"wdth\" 72"
  subtitle:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "1.3125rem"
    fontWeight: 750
    fontVariation: "\"wdth\" 92"
  body:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
    fontVariation: "\"wdth\" 100"
  plate-header:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 900
    letterSpacing: "0.16em"
    fontVariation: "\"wdth\" 110"
  label:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    letterSpacing: "0.1em"
  value:
    fontFamily: "Martian Mono, ui-monospace, monospace"
    fontSize: "0.875rem"
    fontWeight: 500
    fontFeature: "\"tnum\""
    fontVariation: "\"wdth\" 90"
  mono-label:
    fontFamily: "Martian Mono, ui-monospace, monospace"
    fontSize: "0.6875rem"
    fontWeight: 600
    letterSpacing: "0.06em"
  rate-numeral:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "clamp(6rem, 15vw, 11rem)"
    fontWeight: 900
    lineHeight: 0.82
    letterSpacing: "-0.03em"
    fontVariation: "\"wdth\" 68"
rounded:
  rule: "2px"
  strip: "3px"
  plate: "4px"
  bezel: "8px"
  rivet: "50%"
spacing:
  gutter: "clamp(16px, 4vw, 48px)"
  section: "clamp(64px, 9vw, 128px)"
  container: "1240px"
  rivet-inset: "16px"
  rule-inset: "7px"
components:
  button-primary:
    backgroundColor: "{colors.anodized-blue}"
    textColor: "{colors.etch-ink}"
    typography: "{typography.body}"
    rounded: "{rounded.plate}"
    padding: "15px 22px"
  button-primary-hover:
    backgroundColor: "{colors.anodized-blue-hover}"
    textColor: "{colors.etch-ink}"
  button-primary-sm:
    backgroundColor: "{colors.anodized-blue}"
    textColor: "{colors.etch-ink}"
    rounded: "{rounded.plate}"
    padding: "9px 14px"
  button-primary-lg:
    backgroundColor: "{colors.anodized-blue}"
    textColor: "{colors.etch-ink}"
    rounded: "{rounded.plate}"
    padding: "18px 28px"
  plate:
    backgroundColor: "{colors.plate-aluminum}"
    textColor: "{colors.etch-ink}"
    rounded: "{rounded.plate}"
  caution-head:
    backgroundColor: "{colors.caution-orange}"
    textColor: "{colors.etch-ink}"
    typography: "{typography.plate-header}"
    padding: "8px 16px"
  caution-message:
    backgroundColor: "{colors.label-white}"
    textColor: "{colors.etch-ink}"
    padding: "12px 18px"
  serial-strip:
    backgroundColor: "{colors.plate-aluminum-lo}"
    textColor: "{colors.etch-ink}"
    rounded: "{rounded.strip}"
    padding: "10px 12px"
  stamp-input:
    textColor: "{colors.etch-ink}"
    rounded: "{rounded.strip}"
    padding: "9px 12px"
  terminal:
    backgroundColor: "{colors.label-white}"
    textColor: "{colors.etch-ink}"
    rounded: "{rounded.plate}"
    padding: "12px 14px"
  tagplate:
    backgroundColor: "{colors.etch-ink}"
    textColor: "{colors.label-white}"
    rounded: "{rounded.bezel}"
    padding: "34px 40px 30px"
  header-strip:
    backgroundColor: "{colors.plate-aluminum}"
    textColor: "{colors.etch-ink-2}"
    padding: "10px clamp(16px, 4vw, 48px)"
---

# Design System: RouteCool

## Overview

**Creative North Star: "The Equipment Data Plate"**

RouteCool presents itself the way a condenser presents its identity: on a flat printed-aluminum plate riveted to a louvered cabinet, with black condensed caps for the name, a hairline spec table of MODEL / SERIAL / RATED, and stamped monospace values. Each company gets one unit with one serial, and the visual system holds that idea at every scale: plates carry the facts, the visitor's own domain is the serial, and one anodized-blue plate is the action.

The plates are printed, not machined. They are flat aluminum gray with a 4px corner, an inset printed border rule, and flat two-tone rivets. They have no brushing, emboss, bevel or texture. The only patterned surface is the cabinet ground behind the hero and rate plates: thin horizontal louvers. Depth comes from a soft drop shadow that lifts a plate off the cabinet. Nothing glows and nothing is glass.

Hard truths go on caution labels: an orange signal header with a warning glyph over a white message panel, both outlined in ink. Motion follows one grammar. Letters punch into the serial as they're typed, the primary plate presses down 2px when clicked, and everything else stays still.

**Key Characteristics:**
- Flat printed-aluminum plates (4px corners) with an inset ink rule 7px in and riveted corners.
- One action color: anodized sky blue with ink lettering, matching the favicon.
- Safety-orange is reserved for caution-label headers.
- Printed Archivo caps for labels and names; stamped Martian Mono for values.
- Extra-condensed etched display caps (Archivo width 62-72).
- Motion is a stamp: short press-in, letter by letter; nothing else animates.

## Colors

A cool aluminum-and-ink neutral field with exactly two signal colors: anodized blue for the action and safety-orange for caution.

### Primary
- **Anodized Blue** (anodized-blue): The fill of every primary action plate, the selection highlight, the wiring-diagram data runs, and the installed serial on the dark tag plate. It is the favicon's blue, so the mark and the action read as one.
- **Anodized Blue Bright** (anodized-blue-hover): Hover fill on the action plate only.
- **Anodized Blue Edge** (anodized-blue-edge): The 1.5px border on action plates, the 3px border on the domain terminal, the text-link underline, and the form accent and caret color.
- **Anodized Blue Ink** (anodized-blue-ink): Blue used as text on light grounds (text links, domain values) and the focus ring on light grounds.

### Secondary
- **Caution Orange** (caution-orange): Only the header panel of caution labels. Ink text sits on it, never white.

### Neutral
- **Plate Aluminum** (plate-aluminum): The plate surface, the header strip, the bezels around app screenshots, and the theme color.
- **Plate Aluminum Hi** (plate-aluminum-hi): The rivet head.
- **Plate Aluminum Lo** (plate-aluminum-lo): Recessed strips such as the serial and the closing domain strip.
- **Plate Edge** (plate-edge): The 1.5px plate border, rivet rings, header strip underline, section seams, and scrollbar thumb.
- **Shop Ground** (shop-ground): The page background.
- **Cabinet Gray** (cabinet-gray): The louvered ground behind the hero and rate plates.
- **Etch Ink** (etch-ink): All primary text, spec rules, caution outlines, the dark "own" section and footer ground, and the tag plate.
- **Etch Ink 2** (etch-ink-2): Secondary text on light grounds (ledes, spec labels, notes), and the rule color on dark grounds.
- **Etch Ink 3** (etch-ink-3): The resting border of the stamp input.
- **Label White** (label-white): Caution message panels, wiring terminals, callout labels, the spec-sheet section ground, and text on ink.
- **Night Text** (night-text): Body and lede text on the ink ground.
- **Night Caption** (night-caption): Captions and small caps labels on the ink ground.

### Named Rules
**The One Blue Rule.** Anodized blue is the only action color, and every action plate is filled with it and lettered in ink. A second action color, a blue gradient, or white-on-blue lettering breaks the plate.

**The Orange Means Caution Rule.** Safety-orange appears only as the header panel of a caution label. It is never a button, highlight, or decoration.

## Typography

**Display Font:** Archivo, a variable-width face (with Arial Narrow, sans-serif)
**Body Font:** Archivo (width 100)
**Label/Mono Font:** Martian Mono (with ui-monospace, monospace)

**Character:** Archivo's width axis does the work of a whole family: it's extra-condensed for etched display caps, normal for body text, and expanded for spaced plate headers. Martian Mono is the stamping die for model numbers, serials, rates and terminal values.

### Hierarchy
- **Display** (800, clamp(2.5rem, 4.3vw, 4.25rem), line-height 1, width 62, uppercase): The hero nameplate headline. Each line is a separate phrase that holds without wrapping on desktop.
- **Headline** (800, clamp(2.125rem, 4.6vw, 4rem), line-height 0.96, width 72, uppercase): Section headlines. The closing plate scales the same etch up to clamp(2.75rem, 7.5vw, 6rem).
- **Title** (800, clamp(1.5rem, 2.6vw, 2.25rem), width 72, uppercase): Sub-headings within a section.
- **Subtitle** (750, 1.3125rem, width 92, sentence case): The heads of reason rows and other list items.
- **Body** (400, 1.0625rem, line-height 1.55): Running text. Ledes run up to 34-40em at clamp(1.0625rem, 1.35vw, 1.25rem), with paragraphs capped near 38em. Drops to 1rem below 560px.
- **Plate Header** (900, 0.875rem, 0.16em tracking, width 110, uppercase): The heads of caution labels, spec-sheet groups and the wiring-diagram title. The plate band mark (ROUTECOOL / RATING) is a heavier version at 0.22em tracking and width 112.
- **Label** (700, 0.75rem, 0.1em tracking, uppercase): Printed spec-table field names (MODEL NO., RATED, HOSTING).
- **Value** (Martian Mono 500, 0.875rem, tabular numerals, width 90): Stamped spec values. Key figures inside them are set at 700 and 1.25-1.6em.
- **Mono Label** (Martian Mono 600, 0.6875rem, 0.06em tracking, uppercase): Figure numbers (Fig. 1) and the small band text on plates.
- **Rate Numeral** (900, clamp(6rem, 15vw, 11rem), line-height 0.82, width 68): The price on the rating plate only.

### Named Rules
**The Printed Label, Stamped Value Rule.** A field name is printed in Archivo caps. Its value is stamped in Martian Mono. Never set both in the same face.

**The Width Axis Rule.** Hierarchy comes from Archivo's width and weight. Display text is condensed (62-72), body is normal (100), and spaced plate headers are expanded (108-112). Don't add a third family.

## Layout

Content sits in a 1240px container with a fluid gutter (clamp(16px, 4vw, 48px)). Sections breathe at clamp(64px, 9vw, 128px) of vertical padding, and the ground changes from section to section to mark each new plate. Shop ground is the default, cabinet gray sits behind the hero and rate plates, label white carries the spec sheet, and ink carries the ownership story and the footer.

The hero is a single large plate on the louvered cabinet. It holds a two-column grid (1.12fr : 1fr): etched headline, lede and caution label on the left, spec table and action plate on the right. Other sections use asymmetric two-column grids (0.8-1.1fr pairs) with gaps of clamp(28px, ~5vw, 72-96px). The wiring diagram stays sticky beside the reasons on desktop.

Responsive: below 1080px, the dispatch-board callouts leave the screenshot and become a numbered two-column legend (one column under 560px). At 960px and below, every two-column grid stacks, the header nav hides (the small action plate stays), and the wiring diagram stops being sticky. At 560px and below, rivets move 10px in and spec rows stack label above value.

## Elevation & Depth

Plates are flat printed surfaces lifted off the cabinet by a soft ambient drop shadow. There is no bevel, inner shadow, gradient lighting, or glow. Ink outlines and inset rules carry the structure. Shadows only say "this plate is mounted on something."

### Shadow Vocabulary
- **Mounted plate** (`box-shadow: 0 18px 40px -22px rgb(17 18 20 / 0.5), 0 2px 4px rgb(17 18 20 / 0.1)`): Nameplate, rating plate, and closing plate.
- **Bezel** (`box-shadow: 0 18px 40px -24px rgb(17 18 20 / 0.6)`): The aluminum frame around the dispatch-board screenshot.
- **Header strip** (`box-shadow: 0 6px 14px -10px rgb(17 18 20 / 0.45)`): The sticky strip over scrolling content.
- **Action plate** (`box-shadow: 0 3px 8px -3px rgb(17 18 20 / 0.45)`, pressed `0 1px 2px rgb(17 18 20 / 0.35)`): Rest and pressed states of the blue plate.
- **Caution label** (`box-shadow: 0 4px 10px -6px rgb(17 18 20 / 0.5)`): A label stuck onto a plate.
- **Tag plate** (`box-shadow: 0 0 0 1.5px #000, 0 0 0 4px #8d929a, 0 20px 40px -22px rgb(17 18 20 / 0.7)`): A dark plate with an aluminum ring edge.

### Named Rules
**The Printed, Not Machined Rule.** A plate's surface is one flat color. Its detail comes from printed rules and rivets. Brushing, emboss, bevel and metallic gradients are not part of this world.

## Shapes

Corners are tight and industrial. Plates, action plates, caution labels and terminals use 4px. Recessed strips, inputs and callout labels use 3px. The inset printed rule inside a plate uses 2px. Larger frames that hold something (screenshot bezels, the wiring plate, the dark tag plate) use 8px. Rivets are circles: a 14px aluminum-hi head inside a 3px plate-edge ring, set 16px in from each corner (10px rings beside the centered tag plate). Borders use a 1.5px line almost everywhere. Caution labels use a heavier 2px ink outline, and the spec sheet opens with a 3px ink top rule. Terminal codes sit in 44px ink-outlined circles. The phone screenshot is the only soft shape: a 34px radius inside a 10px ink bezel.

## Components

### Buttons
Every action is an anodized-blue plate. It's firm and tactile, and it physically presses.
- **Shape:** Small plate corner (4px) with a 1.5px anodized-blue-edge border.
- **Primary:** Anodized blue fill with ink lettering at 700 weight, 1.0625rem, padding 15px 22px. A leading 1.15em stroke icon sits 10px before the label, and bold emphasis inside the label goes to 800.
- **Sizes:** Small (9px 14px, 0.9375rem) in the header strip. Large (18px 28px, 1.1875rem) on the closing plate. Full width under the hero spec table.
- **Hover / Focus / Active:** Hover lightens the fill to anodized-blue-hover over 160ms ease-out. Active presses the plate 2px down over 90ms and flattens its shadow. Focus is a 3px anodized-blue-ink outline at 3px offset, switching to anodized blue on ink grounds.
- **Text link:** Anodized-blue-ink text at 700 with an anodized-blue-edge underline and a trailing arrow. On hover the gap widens from 8px to 12px.

### Cards / Containers (Plates)
- **Corner Style:** 4px. Bezels and the tag plate use 8px.
- **Background:** Plate aluminum. The tag plate is etch ink.
- **Shadow Strategy:** Mounted plate (see Elevation & Depth).
- **Border:** 1.5px plate-edge outline, plus a printed inset rule 7px inside (1.5px, etch ink at 50%, 2px corners).
- **Internal Padding:** Fluid, clamp(30-60px) vertical by clamp(24px, 5vw, 72px) horizontal.
- **Band:** A plate opens with a band: a heavy spaced mark (ROUTECOOL, RATING) on the left, mono band text on the right, and a 1.5px ink rule beneath.

### Spec Table
Hairline field rows. Labels are printed and values are stamped. The table opens with a 1.5px ink top rule. Each row is a grid (8.5em label column, 16px gap, 8px vertical padding) closed by a 1px rule of etch ink at 55%. Labels use the Label role in etch-ink-2, and values use the Value role. The spec sheet is a larger version on a white ground: two columns, a 3px ink top rule, plate-header group titles, a 9.5em label column, and 22%-ink row rules.

### Inputs / Fields
- **Style:** Stamp input. It has a translucent label-white fill (70%), a 1.5px etch-ink-3 border, 3px corners, padding 9px 12px, and Archivo 500 at 0.9375rem.
- **Hover:** The border darkens to etch ink.
- **Focus:** A 2px anodized-blue-ink outline at 1px offset, an anodized-blue-ink border, and a solid white fill.

### Navigation
The header strip is a sticky aluminum band with a 1.5px plate-edge underline and the header-strip shadow. On the left is the mark (favicon plus "RouteCool" at 800, width 88). The links sit on the right (Archivo 600, 0.9375rem, etch-ink-2, gap 22px), and on hover they turn ink with a 2px ink underline. The small action plate ends the row. Below 960px the links hide and only the mark and the action plate remain.

### Caution Label (signature)
A two-panel safety label. The top panel is a caution-orange header with a 22px stroke warning triangle and the plate-header type. It's closed by a 2px ink rule. The bottom panel is a label-white message at 650 weight, and a 2px ink outline wraps both. In the hero it sits under the lede (max 400px, centered text). As a service bulletin it widens to 760px, with the header left-aligned and a message containing a list.

### Serial Strip (signature)
A recessed plate-aluminum-lo strip (3px corners, 1.5px plate-edge border) holding the visitor's domain in Martian Mono 700. Typed letters punch in one by one (260ms, cubic-bezier(0.16, 1, 0.3, 1), staggered 28ms). The same domain propagates to every domain value on the page and to the demo email subject. Reduced motion removes the punch.

### Wiring Terminals (signature)
White terminal blocks (4px, 1.5px ink outline, padding 12px 14px). Each has a 44px circled mono code (L1, L2, DB, ST, K), an Archivo name at 750, and a mono value. The terminals are joined by 3px anodized-blue runs. The domain terminal carries a 3px anodized-blue-edge border.

### Callouts
Numbered ink pins (28px circles, label-white numerals, 3px white ring) and label-white tags with a 1.5px ink border, placed over a screenshot by coordinate. Below 1080px they become a plain numbered legend under the image.

## Do's and Don'ts

### Do:
- **Do** fill every primary action with anodized blue and ink lettering, and press it 2px on active.
- **Do** mount content plates on a 1.5px plate-edge border with the printed inset rule 7px in, and rivet the corners.
- **Do** set field names in printed Archivo caps and field values in stamped Martian Mono.
- **Do** put hard truths (what isn't shipped, what isn't shared) on a two-panel caution label: orange header, white message, 2px ink outline.
- **Do** set etched headlines in condensed Archivo caps (width 62-72, weight 800) with tight leading (0.96-1).
- **Do** keep motion to the stamp: the serial punch and the 2px plate press, with 160ms ease-out color changes. Honor reduced motion.
- **Do** show real app screens inside an aluminum bezel (8px, 10px padding).

### Don't:
- **Don't** add brushing, emboss, bevel, metallic gradients, glow or glass to plates. Plates are flat printed aluminum.
- **Don't** introduce a second action color, white-on-blue action lettering, or a blue gradient hero.
- **Don't** use safety-orange for anything except a caution label's header panel.
- **Don't** use icon-tile feature grids. Capabilities go in spec rows and spec sheets.
- **Don't** use emoji or glyph icons. Icons are inline stroke SVGs (1.75 stroke, round caps) sized to the text.
- **Don't** round plates beyond 4px or frames beyond 8px.
