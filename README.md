# ModernAngular

```bash
npm i -g nx
npm i -g @nrwl/cli
pnpx create-nx-workspace@latest
```

- choose standalone angular app
- application name, app
- standalone components, yes
- routing, yes
- stylesheet format, css
- caching, no

### Cypress additional set up

```bash
pnpm add -D @testing-library/cypress
```

- update -> "types": ["cypress", "node", "@testing-library/cypress"], to tsconfig.json
- add -> import '@testing-library/cypress/add-commands'; to cypress/support/commands.ts

### Tailwind CSS Setup

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

- Add the paths to all of your template files in your tailwind.config.js file.

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

- Add the @tailwind directives for each of Tailwind’s layers to your ./src/styles.css file.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
