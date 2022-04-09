---
sidebar_position: 1
---

# Getting Started

Official Bio library for interacting with the Bio API

<br/>

<center>

[<img src="https://bioid.id/img/meta.png" alt="Logo" title="Bio" width="100%" />](https://bioid.id)

<br/>

[![](https://nodei.co/npm/bioid.id.png)](https://www.npmjs.com/package/bioid.id) 

[![NPM version](https://img.shields.io/npm/v/bioid.id.svg?maxAge=3600)](https://www.npmjs.com/package/bioid.id) [![NPM downloads](https://img.shields.io/npm/dt/bioid.id.svg?maxAge=3600)](https://www.npmjs.com/package/bioid.id)

[Bio](https://www.npmjs.com/package/bioid.id)
</center>

### Table Of Getting Started Contents

- [About](#about)
- [Installation](#installation)
- [Example Usage](#example-usage)

### About 

- NPM package that gets information from bio id official API
- Useful for websites where users can input any bio id and get user info
- Supports the Promise-API, you will be able to use .then, .catch, etc...
- & more...

### Installation

``
npm i bioid.id
``

### Example Usage 

```js
const bio = require('bioid.id');

async function getUserData(){
	let user = await bio.user('000000000000');
	console.log(user);
}
getUserData(); // calling the function
```