import { storiesOf } from "@storybook/vue";

import { TcSpinner } from ".";

storiesOf("Spinner", module).add("Default", () => ({
  components: {
    TcSpinner
  },
  template: `
            <tc-spinner
                :show="true"
             />
        `
}));
