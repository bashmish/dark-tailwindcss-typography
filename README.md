# dark-tailwindcss-typography

This is a precompiled distribution of `@tailwindcss/typography` with dark mode support via `dark` class.

## Usage

Either install via NPM or directly import from any public CDN, e.g.:

```css
@import 'https://cdn.jsdelivr.net/npm/dark-tailwindcss-typography@0.5.0-dark.0/typography.min.css';
/* or */
@import 'https://cdn.jsdelivr.net/npm/dark-tailwindcss-typography@0.5.0-dark.0/typography.css';
```

Then control the light/dark mode via the class on the `prose` container:

```html
<!-- light mode -->
<div class="">
  <div class="prose dark:prose-invert"><!-- content --></div>
</div>
<!-- dark mode -->
<div class="dark">
  <div class="prose dark:prose-invert"><!-- content --></div>
</div>
```
