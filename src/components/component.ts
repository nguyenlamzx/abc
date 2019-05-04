interface Props {
  name?: string;
}

export class BaseComponent {
  el: HTMLElement;
  props: Props;

  static namespace: 'base-component';

  constructor(el, props: Props = {}) {
    this.el = el;
    this.props = props;

    this.el.innerHTML = this.render();
  }

  render(): string {
    return /* es6 */ `
      <div>
        hi ${this.props.name} from tsx!
      </div>
    `;
  }
}
