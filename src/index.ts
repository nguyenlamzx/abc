import './styles/base.scss';

import { App } from './components/App';

const root: HTMLElement = document.body.appendChild(document.createElement('div'));

// tslint:disable-next-line: no-unused-expression
new App(root, { })
