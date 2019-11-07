import { storiesOf } from "@storybook/vue";

import TcInputNumber from "./input-number.vue";

storiesOf("Inputs|Number", module).add("Default", () => ({
  components: {
    TcInputNumber
  },
  template: `
            <tc-input-number name="test-number-input" :value="25"/>
        `
}));
