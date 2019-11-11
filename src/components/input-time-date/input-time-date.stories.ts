import { storiesOf } from "@storybook/vue";

import TcInputTimeDate from "./input-time-date.vue";

storiesOf("Inputs|Time Date", module).add("Default", () => ({
  components: {
    TcInputTimeDate
  },
  template: `
        <div style="width: 20%;">
            <tc-input-time-date
                :value="100"
            />
            </div>
        `
}));
