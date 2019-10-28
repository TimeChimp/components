/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";

import TcBackButton from "./back-button.vue";

storiesOf("Buttons|Back button", module).add("Default", () => ({
  components: {
    TcBackButton
  },
  template: `
            <tc-back-button />
        `
}));
