import assert from 'node:assert/strict';
import { test } from 'node:test';
import { add } from './math.js';

test('adds two numbers', () => {
  assert.equal(add(2, 3), 5);
});

test('refuses what is not a finite number', () => {
  assert.throws(() => add(1, Number.NaN), TypeError);
  assert.throws(() => add('1', 2), TypeError);
});
