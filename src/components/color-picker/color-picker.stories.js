import { storiesOf } from "@storybook/vue";
import TcColorPicker from "./color-picker.vue";
storiesOf("Color picker", module).add("Default", function() {
  return {
    components: {
      TcColorPicker: TcColorPicker
    },
    template: '\n        <tc-color-picker value="#33d5b4" />\n    '
  };
});
//# sourceMappingURL=color-picker.stories.js.map
