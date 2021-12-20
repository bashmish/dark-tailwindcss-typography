# dark-tailwindcss-typography

This is a precompiled distribution of `@tailwindcss/typography` with dark mode support via `dark` class.

## Usage

Either install via NPM or directly import from any public CDN, e.g.:

```css
@import 'https://www.unpkg.com/dark-tailwindcss-typography@0.4.1-dark.1/typography.min.css';
/* or */
@import 'https://www.unpkg.com/dark-tailwindcss-typography@0.4.1-dark.1/typography.css';
```

Then control the light/dark mode via the class on the `prose` container:

```html
<!-- light mode -->
<div class="">
  <div class="prose dark:prose-dark"><!-- content --></div>
</div>
<!-- dark mode -->
<div class="dark">
  <div class="prose dark:prose-dark"><!-- content --></div>
</div>
```
