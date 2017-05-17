# babel-plugin-cena

[![Build Status](https://travis-ci.org/trentmwillis/babel-plugin-cena.svg?branch=master)](https://travis-ci.org/trentmwillis/babel-plugin-cena)
[![Coverage Status](https://coveralls.io/repos/github/trentmwillis/babel-plugin-cena/badge.svg?branch=master)](https://coveralls.io/github/trentmwillis/babel-plugin-cena?branch=master)

Tired of boring applications, that make you say "so what"?

![Boring!](https://media.giphy.com/media/TUZDNOhYyovXq/giphy.gif)

Then `babel-plugin-cena` is for you! It will instantly infuse your application with the legendary awesomeness of [John Cena](http://knowyourmeme.com/memes/people/john-cena) and deliver a truly electrifying experience to your users!

![JOHN CENA!](https://media.giphy.com/media/xTiTnoHt2NwerFMsCI/giphy.gif)

(Also, makes for a good prank on your fellow developers)

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
