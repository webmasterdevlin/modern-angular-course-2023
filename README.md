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

- update -> "types": ["cypress", "node", "@testing-library/cypress"], in tsconfig.json
- add -> import '@testing-library/cypress/add-commands'; in cypress/support/commands.ts

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
- generate a module name shared.module.ts
- create a directory name pages
- generate a standalone home component -> path is src/app/pages
- generate a standalone posts component -> path is src/app/pages
- generate a standalone todos component -> path is src/app/pages
- create app/app.routes.ts
- update main.ts
- add router-outlet to app.component.ts
- run the application and check all pages
- create configs/axios.config.ts
- generate a services/http.service.ts -> path is src/app/services
- create models.ts
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
- update home.component.ts
- run the application
- create store/getters.ts
- implement computed for todos and posts in store/getters.ts
- update store/index.ts
- generate components/footer.component.ts -> path is src/app/shared/components
- generate components/menu.component.ts -> path is src/app/shared/components
- generate components/nav-bar.component.ts -> path is src/app/shared/components
- add footer and nav-bar to app.component.html
- update the menu, nav-bar, and footer
- run the application and check state gets lost
- generate utilities/local-storage.service.ts
- update store/actions.ts
- update store/state.ts
- update the main.ts with localstorage service
- run application and check localstorage in devtool
- write tests helpers/compute
- run jest tests
- write e2e tests
- update package.json with cypress
- run e2e tests
