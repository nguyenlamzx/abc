import centered from '@storybook/addon-centered/react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { setConsoleOptions, withConsole } from '@storybook/addon-console';
import { withA11y } from '@storybook/addon-a11y';

const componentContext = require.context('../src/components/', true, /\.stories\.js$/);
const elementContext = require.context('../src/elements/', true, /\.stories\.js$/);

function loadStories() {
  require('../src/stories');
  console.log('componentContext', componentContext);
  console.log('elementContext', elementContext);
  componentContext.keys().forEach(componentContext);
  elementContext.keys().forEach(elementContext);
}

addDecorator(centered)
addDecorator(withA11y)
addDecorator((storyFn, context) => withConsole()(storyFn)(context));

// addParameters({ viewport: options });
addParameters({
  backgrounds: [
    { name: 'twitter', value: '#00aced', default: true },
    { name: 'facebook', value: '#3b5998' },
  ],
  a11y: {
    // ... axe options
    element: '#root', // optional selector which element to inspect
    config: {}, // axe-core configurationOptions (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#parameters-1)
    options: {} // axe-core optionsParameter (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#options-parameter)
  },
});

setConsoleOptions({
  panelExclude: [],
});

configure(loadStories, module);
