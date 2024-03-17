// чтобы запустить тесты наберите в консоли npm run test
// попробуйте изменять код функции / тестов, запуская проверки заново

import capitalize from '../src/capitalize.js';
import { strict as assert } from 'node:assert';

// if (capitalize('hello') !== 'Hello') {
//   throw new Error('Функция работает неверно!');
// }

// if (capitalize('') !== '') {
//   throw new Error('Функция работает неверно!');
// }

// assert(capitalize('') === '');
// assert(capitalize('hello') === 'Hello');

assert.deepEqual(capitalize(''), '');
assert.deepEqual(capitalize('hello'),'Hello');

console.log('Все тесты пройдены!');
