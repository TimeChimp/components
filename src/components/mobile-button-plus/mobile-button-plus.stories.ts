import { storiesOf } from "@storybook/vue";

import TcMobileButtonPlus from "./mobile-button-plus.vue";

storiesOf("Buttons|Mobile button plus", module)
  .add("Time", () => ({
    components: {
      TcMobileButtonPlus
    },
    template: `
        <tc-mobile-button-plus type="time" />
    `
  }))
  .add("Expense", () => ({
    components: {
      TcMobileButtonPlus
    },
    template: `
        <tc-mobile-button-plus type="expense" />
    `
  }))
  .add("Mileage", () => ({
    components: {
      TcMobileButtonPlus
    },
    template: `
        <tc-mobile-button-plus type="mileage" />
    `
  }));
