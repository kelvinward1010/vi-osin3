# [Polaris Tokens](https://polaris.shopify.com/tokens/getting-started-with-tokens)

[Design tokens](https://medium.com/eightshapes-llc/tokens-in-design-systems-25dd82d58421) for [Polaris](https://polaris.shopify.com), Shopify’s design system.

Design tokens originated at Salesforce, and the best way to describe them is to simply quote their documentation:

> Design tokens are the visual design atoms of the design system — specifically, they are named entities that store visual design attributes. We use them in place of hard-coded values (such as hex values for color or pixel values for spacing) in order to maintain a scalable and consistent visual system for UI development – [Salesforce UX](https://www.lightningdesignsystem.com/design-tokens/)

## Installation

```bash
npm install @aiacademy/web-tokens
```

## Usage

#### Javascript

Accessing all of the available token groups

```js
// Token values only
import { tokens } from "@aiacademy/web-tokens";

console.log(tokens.colors.background); // 'rgba(246, 246, 247, 1)'

// Tokens with metadata
import { metadata } from "@aiacademy/web-tokens";

console.log(metadata.colors.background.value); // 'rgba(246, 246, 247, 1)'
console.log(metadata.colors.background.description); // 'For use as a background color, in components such as Page and Frame backgrounds.'
```

#### CSS

Importing all of the css variables. CSS variables are prefixed with `--p` to signal that these variables are Polaris variables.

```js
import '@aiacademy/web-tokens/css/styles.css';

div {
  background: var(--p-background);
}
```

#### JSON

Accessing a specific token group file via the dist folder

```js
const spacing = require("@aiacademy/web-tokens/json/spacing.json");
```
