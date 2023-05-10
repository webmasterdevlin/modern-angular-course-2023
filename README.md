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
