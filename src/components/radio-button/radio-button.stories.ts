import { storiesOf } from "@storybook/vue";

import TcRadioButton from "./radio-button.vue";

storiesOf("Toggles|Radio", module).add("Default", () => ({
  components: {
    TcRadioButton
  },
  template: `
        <div>
            <tc-radio-button
                name="radio-check"
                :native-value="0"
        />
            <tc-radio-button
                name="radio-check"
            :native-value="1"
        />
            <tc-radio-button
                name="radio-check"
            :native-value="2"
        />
        </div>
    `
}));
