import { storiesOf } from "@storybook/vue";
import TcLayoutMain from "./layout-main.vue";
storiesOf("Navigation|Layout main", module).add("Default", function() {
  return {
    components: {
      TcLayoutMain: TcLayoutMain
    },
    template: "\n            <tc-layout-main />\n        "
  };
});
//# sourceMappingURL=layout-main.stories.js.map
