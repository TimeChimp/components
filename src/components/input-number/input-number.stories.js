import { storiesOf } from "@storybook/vue";
import TcInputNumber from "./input-number.vue";
storiesOf("Inputs|Number", module).add("Default", function() {
  return {
    components: {
      TcInputNumber: TcInputNumber
    },
    template:
      '\n  <div style="width: 20%;">\n            <tc-input-number name="test-number-input" :value="25"/>\n            </div>\n        '
  };
});
//# sourceMappingURL=input-number.stories.js.map
