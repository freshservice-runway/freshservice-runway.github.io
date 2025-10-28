# DEW Icon System

## Overview
The **DEW** icon system is the next-generation SVG icon framework for ITILDesk with improved theming and accessibility.

## Current Status
- **Launch Phase**: DEW icons are used **only in TCPR modules** (Tickets, Changes, Problems, Releases)
- **Post-Launch**: DEW icons will be **iteratively added to other pages**

## File Naming
- **Current**: All DEW icons use `dew-` prefix (e.g., `dew-ticket.svg`)
- **Future**: When DEW is forced, old icons will be removed and `dew-` prefix will be dropped

## Technical Requirements

### Icon Structure
All DEW icons must include `data-icon-name` attribute for debugging:
```svg
<svg data-icon-name="dew-ticket" width="16" height="16" viewBox="0 0 16 16">
  <!-- SVG content with CSS variables: fill="var(--color-icon-primary)" -->
</svg>
```

### Usage
```handlebars
{{inline-svg "dew-ticket" class="icon-class"}}
```

## Key Points
- `data-icon-name` attribute identifies DEW icons in DOM for debugging
- DEW icons currently used only by TCPR modules in launch
- Post-launch: iterative expansion to other pages
- When DEW is forced: remove old icons and `dew-` prefix