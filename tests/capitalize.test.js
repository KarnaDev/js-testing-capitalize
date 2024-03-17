// чтобы запустить тесты наберите в консоли npm run test
// попробуйте изменять код функции / тестов, запуская проверки заново

import capitalize from '../src/capitalize.js';
// import { strict as assert } from 'node:assert';
import assert from 'power-assert';

// if (capitalize('hello') !== 'Hello') {
//   throw new Error('Функция работает неверно!');
// }

// if (capitalize('') !== '') {
//   throw new Error('Функция работает неверно!');
// }

// assert(capitalize('') === '');
// assert(capitalize('hello') === 'Hello');

// assert.deepEqual(capitalize(''), '');
// assert.deepEqual(capitalize('hello'),'Hello');

// assert(capitalize('') === '');
// assert(capitalize('hello') === 'hello');

// console.log('Все тесты пройдены!');

const array = [1, 2, 3];
const zero = 0;
const two = 2;

assert(array.indexOf(zero) === two);