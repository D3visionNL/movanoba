<p align="center">
      <img src="https://raw.githubusercontent.com/demjhonsilver/movanoba/main/img/logo.png" alt="Logo" width="70" height="70"/>
</p>

<div align="center">

Movanoba
--------
[![npm version](https://img.shields.io/npm/v/movanoba.svg?logo=npm&style=flat-square&label=Latest&color=blue)](https://www.npmjs.com/package/movanoba)
![Package Size](https://img.shields.io/bundlephobia/minzip/movanoba?style=flat-square&color=darkgreen)
![Downloads](https://img.shields.io/npm/dt/movanoba.svg?&style=flat-square&label=Downloads&color=orange)
[![License](https://img.shields.io/npm/l/movanoba.svg?style=flat-square&label=License&color=green)](https://github.com/demjhonsilver/movanoba/blob/main/LICENSE.md)
</div>

---------------------

## Table of Contents

- [Description](#description)
- [Release Notes](#release-notes)
- [Installation](#installation)
- [Features](#features)
- [Demo](#demo)
- [React](#react)
- [Vue](#vue)
- [Angular](#angular)
- [Svelte](#svelte)



## Description

Movanoba is a lightweight JavaScript library for animating elements while scrolling the webpage for React, Vue, Angular, and Svelte.



Frameworks / Libraries | Tested versions
------ | -------- | 
 ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) | 18 & above
![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D)  | 3 & above
![Angular](https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white)  | 16 & above
![Svelte](https://img.shields.io/badge/svelte-%23f1413d.svg?style=for-the-badge&logo=svelte&logoColor=white) | 3 & above



-----



## Release-notes
Version 1.0.0

-------

Major Changes:

- Can set any time duration or delay for animations
- You can apply to images, headers , paragraphs, text, tables, buttons, and etc.

Minor Changes:

Patch changes:

 v1.0.1
 - The index.js will restore default location

## Installation

To install the movanoba, you can use the following npm command:

```bash
npm install movanoba
```

## Features

- Compatible for React, Vue, Angular and Svelte
- Supports TypeScript


You can set any number for `Time Duration`

time syntax | value | speed |
------ | -------- | ---------------
0.1s | 0.1 seconds | superfast
0.5s | 0.5 seconds | fast
1s | 1 seconds | moderate
1.1s | 1.1 seconds | default
2s | 2 seconds | delay
2.5s | 2.5 seconds | slow
-----------


---------
```html
closeUP, closeDOWN, closeLEFT, closeRIGHT
frameLEFT, frameRIGHT, wakeupLEFT, wakeupRIGHT
twistUP, twistDOWN, twistLEFT, twistRIGHT,
edgeTOPLEFT, edgeTOPRIGHT, edgeDOWNLEFT, edgeDOWNRIGHT
show, enlarge,  cycleLEFT, cycleRIGHT 
```

------------------
## Demo 

[Demo Animations - Movanoba](https://demo-movanoba.vercel.app)

## React
-------------

Direct method: 

-------------

`applicable for custom CSS, Bootstrap, Tailwind and Bulma`

-----------

- Bootstrap

```js
import { useEffect } from 'react';
import { movement } from 'movanoba'; 

export const ExampleComponent = () => {
  useEffect(() => {
    movement();
  });

  return (
    <div>
      <div className="btn btn-primary" data-movement="frameRIGHT 0.4s">
        frameRIGHT 
      </div>
    </div>
  );
};
```

or

```js

import { useEffect } from 'react';
import { movement } from 'movanoba'; 

const ExampleComponent = () => {
  useEffect(() => {
    movement();
  });

  return (
    <div>
      <div className="btn btn-primary" data-movement="frameRIGHT 0.5s">
        frameRIGHT
      </div>
    </div>
  );
};

export default ExampleComponent
```

- Tailwind

```js
import { useEffect } from 'react';
import { movement } from 'movanoba'; 

export const ExampleComponent = () => {
  useEffect(() => {
   movement();
  });

  return (
    <div>
      <div className="bg-blue-500 text-white px-4 py-2" data-movement="frameRIGHT 4s">
        frameRIGHT 
      </div>
    </div>
  );
};
```

- Bulma

```js
import { useEffect } from 'react';
import { movement } from 'movanoba'; 

export const ExampleComponent = () => {
  useEffect(() => {
    movement();
  });

  return (
    <div>
      <div className="box has-background-primary has-text-white p-4" data-movement="frameRIGHT">
        frameRIGHT
      </div>
    </div>
  );
};
```

## Vue

```js
<template>
  <div>
    <div class="btn btn-primary" data-movement="frameRIGHT 1.4s">
      frameRIGHT
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue';
import { movement } from 'movanoba';

export default {
  setup() {
    onMounted(() => {
      movement();
    });
  },
};
</script>
```

## Angular

```ts
import { Component, OnInit } from '@angular/core';
import { movement } from 'movanoba';

@Component({
  selector: 'app-example',
  template: `
    <div>
      <div class="btn btn-primary" data-movement="frameRIGHT 1.4s">
        frameRIGHT
      </div>
    </div>
  `,
})
export class ExampleComponent implements OnInit {
  ngOnInit() {
    movement();
  }
}
```

## Svelte

```js
<script>
  import { onMount } from "svelte";
  import { movement } from "movanoba";

  onMount(() => {
    movement();
  });
</script>

<div>
  <div class="btn btn-primary" data-movement="frameRIGHT 1.4s">
    frameRIGHT
  </div>
</div>
```

## License

[MIT](http://www.opensource.org/licenses/MIT)

- This library package is FREE for both commercial and personal use. ❤️

----------------------------------------------------
## Author

Demjhon Silver
