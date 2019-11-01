import { storiesOf } from "@storybook/vue";

import TcSlider from "./slider.vue";

storiesOf("Slider", module).add("Default", () => ({
  components: {
    TcSlider
  },
  template: `
        <tc-slider type="time" />
    `
}));
