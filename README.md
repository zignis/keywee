# 🥝 KeyWee

[![Package version](https://badgen.net/npm/v/keywee)](https://npmjs.com/package/keywee)
[![Continuous Integrations](https://github.com/HexM7/keywee/actions/workflows/continuous-integrations.yaml/badge.svg?branch=main)](https://github.com/HexM7/keywee/actions/workflows/continuous-integrations.yaml)
[![License](https://badgen.net/npm/license/keywee)](./LICENSE)
[![Package tree-shaking](https://badgen.net/bundlephobia/tree-shaking/keywee)](https://bundlephobia.com/package/keywee@latest)
![Package types](https://badgen.net/npm/types/keywee)
![Package downloads](https://badgen.net/npm/dm/keywee)
[![Package minified & gzipped size](https://badgen.net/bundlephobia/minzip/keywee)](https://bundlephobia.com/package/keywee@latest)
[![Package dependency count](https://badgen.net/bundlephobia/dependency-count/keywee)](https://bundlephobia.com/package/keywee@latest)

A performant utility library.

## Installation

```sh
# NPM
npm install keywee --save

# Yarn
yarn add keywee
```

## Usage
```js
import * as kw from 'keywee'; // Import eveything
import { objPick } from 'keywee'; // Supports tree-shaking
```

### Installation from CDN

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

## License

Package released under [MIT License](./LICENSE).
