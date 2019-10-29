import { storiesOf } from "@storybook/vue";

import TcLabel from "./label.vue";

storiesOf("Label", module)
  .add("Default", () => ({
    components: {
      TcLabel
    },
    template: `
            <tc-label title="Test title" />
        `
  }))
  .add("Micro", () => ({
    components: {
      TcLabel
    },
    template: `
            <tc-label title="Test title" size="micro" />
        `
  }));
