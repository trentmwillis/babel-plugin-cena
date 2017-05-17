# babel-plugin-cena

[![Build Status](https://travis-ci.org/trentmwillis/babel-plugin-cena.svg?branch=master)](https://travis-ci.org/trentmwillis/babel-plugin-cena)
[![Coverage Status](https://coveralls.io/repos/github/trentmwillis/babel-plugin-cena/badge.svg?branch=master)](https://coveralls.io/github/trentmwillis/babel-plugin-cena?branch=master)

A Babel plugin to make your application instantly awesome.

## Installation

```sh
npm install --save-dev babel-plugin-cena
# or
yarn add --dev babel-plugin-cena
```

## Usage

### Via `.babelrc` (Recommended)

```json
{
  "plugins": ["cena"]
}
```

### Via CLI

```sh
babel --plugins cena script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["cena"]
});
```
