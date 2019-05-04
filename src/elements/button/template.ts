/**
 * Reference: https://getbootstrap.com/docs/4.3/components/buttons/
 */

import { ButtonTag, DEFAULT_BUTTON, ButtonProps } from './index';

/**
 *
 * <button type="button" class="btn btn-primary">Primary</button>
 * <button type="button" class="btn btn-secondary">Secondary</button>
 * <button type="button" class="btn btn-success">Success</button>
 * <button type="button" class="btn btn-danger">Danger</button>
 * <button type="button" class="btn btn-warning">Warning</button>
 * <button type="button" class="btn btn-info">Info</button>
 * <button type="button" class="btn btn-light">Light</button>
 * <button type="button" class="btn btn-dark">Dark</button>
 * <button type="button" class="btn btn-link">Link</button>
 *
 */

function renderButton ({ style, label }: ButtonProps) {
  return /* jsx */ `
    <button type="button" class="btn btn-${style}">${label}</button>
  `;
}

function renderAnchor ({ style, label }: ButtonProps) {
  return /* jsx */ `
    <a type="button" class="btn btn-${style}">${label}</a>
  `;
}

export function render (props: ButtonProps): string {
  props = Object.assign({}, DEFAULT_BUTTON, props);

  switch (props.tag) {
    case ButtonTag.ANCHOR:
      return renderAnchor(props);

    default:
      break;
  }

  return renderButton(props);
}
