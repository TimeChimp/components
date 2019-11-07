import { storiesOf } from "@storybook/vue";

import TcInputTime from "./input-time.vue";

storiesOf("Inputs|Time", module).add("Default", () => ({
  components: {
    TcInputTime
  },
  template: `
            <tc-input-time name="test-time-input" :value="25"/>
        `
}));
