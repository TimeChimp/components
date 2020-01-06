import { storiesOf } from "@storybook/vue";
import TcInputCurrency from "./input-currency.vue";
storiesOf("Inputs|Currency", module).add("Default", function() {
  return {
    components: {
      TcInputCurrency: TcInputCurrency
    },
    template:
      '\n            <tc-input-currency name="test-currency-input" :value="25"/>\n        '
  };
});
//# sourceMappingURL=input-currency.stories.js.map
