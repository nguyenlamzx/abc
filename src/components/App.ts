import { BaseComponent } from './Component';
import { renderAlert } from './alerts/template';

interface Props {
  name?: string;
}

export class App extends BaseComponent {
  el: HTMLElement;
  props: Props;

  constructor(el, props: Props = {}) {
    super(el);
    this.el = el;
    this.props = props;

    this.el.innerHTML = this.render();
  }

  render(): string {
    return /* es6 */ `
      <div>
        hi ${this.props.name} from tsx!
        ${renderAlert()}
      </div>
    `;
  }
}
