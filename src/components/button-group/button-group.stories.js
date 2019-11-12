/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import TcButtonGroup from "./button-group.vue";
import TcButton from "../button/button.vue";
storiesOf("Buttons|Button group", module).add("Default", function() {
  return {
    components: {
      TcButtonGroup: TcButtonGroup,
      TcButton: TcButton
    },
    template:
      "\n        <div>\n            <tc-button-group>\n            <tc-button :button-class=\"['button__small']\">\n            Cancel\n        </tc-button>\n        <tc-button :button-class=\"['button__primary', 'button__small']\">\n        Next\n    </tc-button>\n            </tc-button-group>\n        </div>\n    "
  };
});
//# sourceMappingURL=button-group.stories.js.map
