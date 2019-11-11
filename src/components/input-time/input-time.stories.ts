import { storiesOf } from "@storybook/vue";

import TcInputTime from "./input-time.vue";

storiesOf("Inputs|Time", module).add("Default", () => ({
  components: {
    TcInputTime
  },
  template: `
  <div style="width: 20%;">
            <tc-input-time name="test-time-input" :value="25"/>
            </div>
        `
}));
