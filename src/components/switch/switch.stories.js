import { storiesOf } from "@storybook/vue";
import TcSwitch from "./switch.vue";
storiesOf("Switch", module).add("Default", function() {
  return {
    components: {
      TcSwitch: TcSwitch
    },
    template: "\n            <tc-switch />\n        "
  };
});
//# sourceMappingURL=switch.stories.js.map
