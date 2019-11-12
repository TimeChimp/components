import { storiesOf } from "@storybook/vue";
import TcTimer from "./timer.vue";
storiesOf("Timer", module).add("Default", function() {
  return {
    components: {
      TcTimer: TcTimer
    },
    template: "\n            <tc-timer />\n        "
  };
});
//# sourceMappingURL=timer.stories.js.map
