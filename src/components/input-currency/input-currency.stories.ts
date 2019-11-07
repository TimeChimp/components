import { storiesOf } from "@storybook/vue";

import TcInputCurrency from "./input-currency.vue";

storiesOf("Inputs|Currency", module).add("Default", () => ({
  components: {
    TcInputCurrency
  },
  template: `
            <tc-input-currency name="test-currency-input" :value="25"/>
        `
}));
