import { storiesOf } from "@storybook/vue";

import TcColorPicker from "./color-picker.vue";

storiesOf("Color picker", module).add("Default", () => ({
  components: {
    TcColorPicker
  },
  template: `
        <tc-color-picker value="#33d5b4" />
    `
}));
