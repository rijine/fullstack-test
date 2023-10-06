## To Run

> Install dependencies `npm i`

> Run in dev `npm run dev`

> Run test `npm test`

> Access UI `http://localhost:5173`

## Assumptions and Implementations

1. Login is jwt token, stored to localstorage. This is to simplify implementation. The best approach is to share this token via httpOnly, secure cookies.
2. Used typescript to ensure type safety.
3. Used reducers instead of internal state, this brings more boilerplats in typescript.
4. Component Testing (partially done) - Using vitest + react testing library, its a wrapper around jest(same syntax)
5. Sytling (in progres) - [using bootstrap.css] - Also Its recommended to use libraries like styled-components or emotion
6. Adding font awesome would have been better
7. Used only basic table from bootstrap,( using a good library will get more flexibilty)
8. More transitions can be added incase of actions.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
