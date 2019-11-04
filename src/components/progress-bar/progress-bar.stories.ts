import { storiesOf } from "@storybook/vue";

import TcProgressBar from "./progress-bar.vue";

storiesOf("Progress Bar", module)
  .add("Small", () => ({
    components: {
      TcProgressBar
    },
    template: `
            <tc-progress-bar
                :value="20"
                size="small" />
    `
  }))
  .add("Medium", () => ({
    components: {
      TcProgressBar
    },
    template: `
            <tc-progress-bar
                :value="20"
                size="medium" />
    `
  }))
  .add("Large", () => ({
    components: {
      TcProgressBar
    },
    template: `
            <tc-progress-bar
                :value="20"
                size="large" />
    `
  }));
