import { storiesOf } from "@storybook/vue";
import TcNothingHere from "./nothing-here.vue";
storiesOf("Nothing Here", module).add("Default", function() {
  return {
    components: {
      TcNothingHere: TcNothingHere
    },
    template:
      '\n            <div style="margin-top:10rem;">\n                <tc-nothing-here title="No results" />\n            </div>\n        '
  };
});
//# sourceMappingURL=nothing-here.stories.js.map
