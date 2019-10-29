/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";

import TcCheckbox from "./checkbox.vue";

storiesOf("Toggles|Checkbox", module).add("Default", () => ({
  components: {
    TcCheckbox
  },
  template: `
        <tc-checkbox>
            Check this
        </tc-checkbox>
        `
}));
