<img alt="Vue Media Query Plugin" width="200" src="https://github.com/Oscar-Jin/vue-media-query-plugin/blob/main/asset/vue-media-query-plugin-icon.png?raw=true">

# vue-media-query-plugin

Vue.js v 2+ plugin for using MediaQueryList based queries.

Special thanks to [Fletch F Fletch](https://github.com/flatanimals) for his inspirational works which resulted the
creation of this package.

## Before You Jump the Gun

Remember, this package is intended for test use only. It is not suited for production. Please use at your own risk.

## Basic Usage

### Install Plugin

```javascript
import Vue from 'vue';
import MediaQueryPlugin from 'vue-media-query-plugin';

Vue.use(MediaQueryPlugin, 'tailwindcss'); // currently only supports Tailwind CSS
```

### Vue Component

```javascript
<template>
  <div>
    <div v-if="isMinSm">Your screen size is greater than 640px !</div>
  </div>
</template>
```

## API Reference

### Tailwind CSS

<a href="https://tailwindcss.com/" target="_blank">
    <img alt="Tailwind CSS" width="100" src="https://refactoringui.nyc3.cdn.digitaloceanspaces.com/tailwind-logo.svg">
</a>

#### isMinSm

type: `boolean`

queryString: `min-width: 640px`

#### isMinMd

type: `boolean`

queryString: `min-width: 768px`

#### isMinLg

type: `boolean`

queryString: `min-width: 1024px`

#### isMinXl

type: `boolean`

queryString: `min-width: 1280px`

#### isMin2Xl

type: `boolean`

queryString: `min-width: 1536px`

