/**
 * References:
 *  https://getbootstrap.com/docs/4.3/components/alerts/
 */

export function renderAlert({ type = 'secondary', children = '' } = {}) {
  return /* jsx */ `
    <div class="alert alert-${type}" role="alert">
      ${children}
    </div>
  `;
}
