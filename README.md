<h1 align="center">🥝 KeyWee</h1>
<p align="center">Yet another performant utility library</p>

<p align="center">
  <a href="https://npmjs.com/package/keywee" target="_blank">
    <img alt="Package version" src="https://badgen.net/npm/v/keywee" />
  </a>
  <img alt="Package downloads" src="https://badgen.net/npm/dm/keywee" />
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

<h3 align="center">
  <a href="https://zignis.github.io/keywee" target="_blank">Documentation</a>
</h3>
  
<br />

### But who asked for this, when there are already libraries like lodash and underscore?

I like what lodash (or underscore) has to offer, but this library exports some of the weirdest and uncommon utility methods that you might occasionally need somewhere, and it would not have made sense to propose these methods to a generic utility library like lodash. Adding to it, KeyWee is 100% ES6 compliant and supports tree-shaking out of the box.

## Installation

```sh
# NPM
npm install keywee

# Yarn
yarn add keywee
```

### Installation from a CDN

KeyWee has a UMD bundle available through JSDelivr and Unpkg CDNs.

```html
<!-- From UNPKG -->
<script src="https://unpkg.com/keywee"></script>

<!-- From JSDelivr -->
<script src="https://cdn.jsdelivr.net/npm/keywee"></script>

<script>
  // UMD module is exposed through the "keywee" global variable
  console.log(keywee);
</script>
```

## License

KeyWee released under the [MIT License](./LICENSE).
