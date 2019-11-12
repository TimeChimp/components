import { storiesOf } from "@storybook/vue";
import TcMobileButtonPlus from "./mobile-button-plus.vue";
storiesOf("Buttons|Mobile button plus", module)
  .add("Time", function() {
    return {
      components: {
        TcMobileButtonPlus: TcMobileButtonPlus
      },
      template: '\n        <tc-mobile-button-plus type="time" />\n    '
    };
  })
  .add("Expense", function() {
    return {
      components: {
        TcMobileButtonPlus: TcMobileButtonPlus
      },
      template: '\n        <tc-mobile-button-plus type="expense" />\n    '
    };
  })
  .add("Mileage", function() {
    return {
      components: {
        TcMobileButtonPlus: TcMobileButtonPlus
      },
      template: '\n        <tc-mobile-button-plus type="mileage" />\n    '
    };
  });
//# sourceMappingURL=mobile-button-plus.stories.js.map
