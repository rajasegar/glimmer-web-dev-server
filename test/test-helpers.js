import { renderComponent } from '@glimmerx/core';

export function fixture(component) {
  const wrapper = document.createElement('div');
  renderComponent(component, wrapper);
  return {
    element: wrapper.firstElementChild,
    restoreFixture: () => wrapper.remove(),
  };
}
