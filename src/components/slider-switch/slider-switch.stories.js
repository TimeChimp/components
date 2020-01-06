import { storiesOf } from "@storybook/vue";
import TcSliderSwitch from "./slider-switch.vue";
storiesOf("Toggles|Slider switch", module).add("Default", function() {
  return {
    components: {
      TcSliderSwitch: TcSliderSwitch
    },
    template:
      "\n            <div>\n                <tc-slider-switch :groups=\"['Vue', 'React']\" />\n            </div>\n        "
  };
});
//# sourceMappingURL=slider-switch.stories.js.map
