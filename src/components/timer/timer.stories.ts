import { storiesOf } from "@storybook/vue";

import TcTimer from "./timer.vue";

storiesOf("Timer", module).add("Default", () => ({
  components: {
    TcTimer
  },
  template: `
            <tc-timer />
        `
}));
