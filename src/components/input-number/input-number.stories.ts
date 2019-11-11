import { storiesOf } from "@storybook/vue";

import TcInputNumber from "./input-number.vue";

storiesOf("Inputs|Number", module).add("Default", () => ({
  components: {
    TcInputNumber
  },
  template: `
  <div style="width: 20%;">
            <tc-input-number name="test-number-input" :value="25"/>
            </div>
        `
}));
