'use strict';

const babel = require('babel-core');
const Cena = require('../lib');
const markup = require('../lib/markup');

const expectedOutput = `document.body.innerHTML = "${markup.replace(/"/g, '\\\"')}";`;

QUnit.module('cena', function() {
  function transform(code) {
    const options = {
      plugins: [
        [Cena]
      ]
    };

    return babel.transform(code, options).code.trim();
  }

  QUnit.test('correctly transforms simple re-export', function(assert) {
    const result1 = transform('export { default } from "foo";');
    require('fs').writeFileSync('cena.js', result1, 'utf-8');
    assert.equal(result1, expectedOutput);

    const result2 = transform('foo();');
    assert.equal(result2, expectedOutput);

    const result3 = transform('import bar from "bar";export default bar();');
    assert.equal(result3, expectedOutput);
  });
});
