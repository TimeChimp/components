/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";

import TcButtonGroup from "./button-group.vue";
import TcButton from "../button/button.vue";

storiesOf("Buttons|Button group", module).add("Default", () => ({
  components: {
    TcButtonGroup,
    TcButton
  },
  template: `
        <div>
            <tc-button-group>
            <tc-button :button-class="['button__small']">
            Cancel
        </tc-button>
        <tc-button :button-class="['button__primary', 'button__small']">
        Next
    </tc-button>
            </tc-button-group>
        </div>
    `
}));
