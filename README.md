# E-commerce mini-store
## Description.
This project implements an e-commerce mini-store using Vite, TypeScript, Bootstrap, i18n.ts for localization and React. The application contains several pages, including a page with a list of products for purchase and a cart page. Users can add products to the cart, manage the number of products, and view the total cost in the cart.

## Features.
- Multiple pages (e.g., home page, product listing page, about).
- The "Shop" page with a list of products for purchase.
- The "Add to cart" button on each product, which changes to "Remove from cart" after adding it.
- A group of buttons for increasing/decreasing the number of products in the cart.
- Display of products in the cart, including price, quantity, and total cost.
- Localization with i18n.ts.
  
## Technologies used
- Vite
- TypeScript
- React
- React DOM
- Bootstrap
- i18n.ts

[![DEMO](https://img.shields.io/badge/live%20demo-0073cf?style=for-the-badge&logoColor=white)](https://juliakarpenko.github.io/shop-vite-react-typescript/)

![Demo](https://github.com/JuliaKarpenko/shop-vite-react-typescript/blob/main/demo.gif)

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
	// other rules...
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
		project: ["./tsconfig.json", "./tsconfig.node.json"],
		tsconfigRootDir: __dirname,
	},
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
