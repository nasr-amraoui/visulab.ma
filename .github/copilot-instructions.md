# VisuLab Coming Soon - AI Coding Agent Instructions

## Project Overview
This is a single-page "coming soon" landing page for **VisuLab** ("Where Ideas Turn Visual"). The project consists of three core files:
- `index.html` - Semantic HTML structure with typing effect container
- `style.css` - Styling with gradient backgrounds and animations
- `app.js` - Vanilla JavaScript implementing the typing animation effect

**Key Characteristic:** This is a lightweight, dependency-free frontend project with no build tools, frameworks, or backend services.

## Architecture & Core Features

### Typing Effect Implementation (`app.js`)
The app implements a **bidirectional typing effect** that continuously cycles through typing and deleting the text "Coming Soon":

- **Typing Phase:** Characters are appended at `typingSpeed` (100ms per char)
- **Deleting Phase:** Characters are removed at `deletingSpeed` (50ms per char, faster than typing)
- **Cycle Delay:** 2-second pause between completing a cycle and starting the next
- **DOM Target:** Updates `#typing-text` element directly using `textContent`

### Styling Architecture (`style.css`)
- **Gradient Background:** Purple/violet linear gradient (667eea → 764ba2) fills viewport
- **Layout:** Flexbox centering on full-height viewport
- **Cursor Animation:** Blinking white vertical bar with CSS `@keyframes blink` (0.7s cycle)
- **Responsive:** Media query for tablets/mobile scales font to 2.5rem

### HTML Structure (`index.html`)
Minimal semantic structure:
```html
<div class="container">
    <h1 id="typing-text"></h1>
    <div class="cursor"></div>
</div>
```
The `#typing-text` element starts empty and is populated by JavaScript.

## Developer Workflows

### No Build Process
- Direct file edits → refresh browser in devtools (F5 or Ctrl+Shift+R for hard refresh)
- No npm/build commands needed
- Serve locally using any HTTP server (e.g., Python's `http.server` or VS Code Live Server extension)

### Testing Changes
1. Modify timing constants in `app.js` (line 3-5) to adjust animation speed
2. Change text in `const text = "Coming Soon";` to test different messages
3. Adjust colors in `style.css` gradient or animation duration
4. Test responsive behavior by resizing browser window

## Project Conventions

### Naming & Code Style
- **HTML IDs:** Kebab-case (`typing-text`, `typing-element`)
- **CSS Classes:** Kebab-case (`.cursor`, `.container`)
- **JS Variables:** camelCase (`typingSpeed`, `isDeleting`, `typingElement`)

### Magic Numbers
All timing values are defined as configurable constants at the top of `app.js`:
- `typingSpeed`: 100ms (how fast text appears)
- `deletingSpeed`: 50ms (how fast text disappears—intentionally faster)
- `delayBetweenCycles`: 2000ms (pause after completing type+delete cycle)

To adjust the effect, modify these three constants only.

### CSS Animation Pattern
Uses standard CSS `@keyframes` for the cursor blink (not JavaScript). This keeps animation smooth and GPU-accelerated. State transitions (typing ↔ deleting) are managed in JavaScript.

## Key Integration Points

### DOM Manipulation
- `textContent` is used (not `innerHTML`) for security—only plain text is displayed
- No external libraries (jQuery, etc.)
- Single event listener: script runs on page load, no click/input handlers

### Browser Compatibility
- Uses ES6 features (`const`, arrow functions, `setTimeout`)
- CSS gradients and flexbox (modern browsers only)
- No polyfills needed for this use case

## Common Modifications

### Change the Message
Edit line 1 of `app.js`:
```js
const text = "Your Custom Message";
```

### Adjust Animation Speed
Modify constants in lines 3-5:
```js
const typingSpeed = 100;      // Increase for slower typing
const deletingSpeed = 50;      // Increase for slower deletion
const delayBetweenCycles = 2000; // Increase for longer pauses
```

### Customize Colors
Edit the gradient in `style.css` line 9:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```
Or change text/cursor color (default: white, defined on `body` and `.cursor`).

## No External Dependencies
This project intentionally avoids npm, frameworks, or build tools. Maintain this approach for fast loading and minimal complexity.
