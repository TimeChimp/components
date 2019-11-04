import { storiesOf } from "@storybook/vue";

import TcSplitSlider from "./split-slider.vue";

storiesOf("Split slider", module).add("Default", () => ({
  components: {
    TcSplitSlider
  },
  template: `
        <tc-split-slider
            :value="36000"
            :max="72000"
         />
    `
}));
