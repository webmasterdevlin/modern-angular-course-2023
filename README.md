# ModernAngular

```bash
npm i -g nx
npm i -g @nrwl/cli
pnpx create-nx-workspace@latest
```

- choose standalone angular app
- application name, app
- standalone components, yes
- routing, no
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

## Development Steps

- run the application by running npm run start
- create a directory name shared
- generate shared.module.ts inside the shared directory
- create a directory name pages
- generate home.component.ts inside pages
- generate posts.component.ts inside pages
- generate todos.component.ts inside pages
- create app.routes.ts
- update main.ts
- run the application
- create configs/axios.config.ts
- create services/http/service.ts
- create store/state.ts
- implement todos in store/state.ts
- create store/actions.ts
- implement todos in store/actions.ts
- create store/index.ts for barrel imports
- update todos.component
- run the application
- implement posts in store/state.ts
- implement posts in store/actions.ts
- update posts.component.ts
- run the application
- create store/getters.ts
- implement computed for todos and posts in store/getters.ts
- update store/index.ts
- generate components/footer.component.ts
- generate components/menu.component.ts
- generate components/nav-bar.component.ts
- run the application and check state gets lost
- generate utilities/local-storage.service.ts
- update store/actions.ts
- update store/state.ts
- run application and check localstorage in devtool
