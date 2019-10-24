import { configure } from '@storybook/vue';

// automatically import all files ending in *.stories.ts
const req = require.context('../src/components', true, /\.stories\.ts$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
