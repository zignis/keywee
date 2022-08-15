<h1 align="center">🥝 KeyWee</h1>
<p align="center">A performant utility library.</p>

<p align="center">
  <a href="https://npmjs.com/package/keywee" target="_blank">
    <img alt="Package version" src="https://badgen.net/npm/v/keywee" />
  </a>
  <img alt="Package downloads" src="https://badgen.net/npm/dm/keywee" />
  <a href="https://www.jsdelivr.com/package/npm/keywee" target="_blank">
    <img alt="JSDelivr Hits" src="https://data.jsdelivr.com/v1/package/npm/keywee/badge" />
  </a>
  <a href="./LICENSE">
    <img alt="Package license" src="https://badgen.net/npm/license/keywee" />
  </a>
  <a href="https://github.com/HexM7/keywee/actions/workflows/continuous-integrations.yaml">
    <img alt="Continuous Integrations" src="https://github.com/HexM7/keywee/actions/workflows/continuous-integrations.yaml/badge.svg?branch=master" />
  </a>
  <a href="https://bundlephobia.com/package/keywee@latest" target="_blank">
    <img alt="Package tree-shaking" src="https://badgen.net/bundlephobia/tree-shaking/keywee" />
  </a>
  <img alt="Package types" src="https://badgen.net/npm/types/keywee" />
  <a href="https://bundlephobia.com/package/keywee@latest" target="_blank">
    <img alt="Package minified size" src="https://badgen.net/bundlephobia/minzip/keywee" />
  </a>
  <a href="https://bundlephobia.com/package/keywee@latest" target="_blank">
    <img alt="Package dependency count" src="https://badgen.net/bundlephobia/dependency-count/keywee" />
  </a>
</p>

<p align="center">
  <img alt="Banner" src="./assets/banner.svg" />
</p>

## Installation

```sh
# NPM
npm install keywee --save

# Yarn
yarn add keywee
```

## Usage
```ts
import * as kw from 'keywee'; // Import eveything (ES6)
import { objPick } from 'keywee'; // Supports tree-shaking

const kw = require('keywee'); // CommonJS
```

### Installation from a CDN

This module has a UMD bundle available through JSDelivr and Unpkg CDNs.

```html
<!-- For UNPKG use the code below. -->
<script src="https://unpkg.com/keywee"></script>

<!-- For JSDelivr use the code below. -->
<script src="https://cdn.jsdelivr.net/npm/keywee"></script>

<script>
  // UMD module is exposed through the "keywee" global variable.
  console.log(keywee);
</script>
```

## Docs

Available at https://hexm7.github.io/keywee.

## License

Package released under [MIT License](./LICENSE).
