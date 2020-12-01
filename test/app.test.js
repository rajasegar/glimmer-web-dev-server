import { expect } from '@esm-bundle/chai';
import HelloWorld from '../src/HelloWorld';
import { fixture } from './test-helpers';

let element;
let restoreFixture;

beforeEach(() => {
  ({ element, restoreFixture } = fixture(HelloWorld));
});

afterEach(() => {
  restoreFixture();
});

it('renders a hello world message', () => {
  expect(element.textContent).to.include('Hello, World!');
});
