import { storiesOf } from "@storybook/vue";
import TcSplitSlider from "./split-slider.vue";
storiesOf("Split slider", module).add("Default", function() {
  return {
    components: {
      TcSplitSlider: TcSplitSlider
    },
    template:
      '\n        <tc-split-slider\n            :value="36000"\n            :max="72000"\n         />\n    '
  };
});
//# sourceMappingURL=split-slider.stories.js.map
