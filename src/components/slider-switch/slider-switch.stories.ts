import { storiesOf } from "@storybook/vue";

import TcSliderSwitch from "./slider-switch.vue";

storiesOf("Toggles|Slider switch", module).add("Default", () => ({
  components: {
    TcSliderSwitch
  },
  template: `
            <div>
                <tc-slider-switch :groups="['Vue', 'React']" />
            </div>
        `
}));
