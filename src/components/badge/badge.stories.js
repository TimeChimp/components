import { storiesOf } from "@storybook/vue";
import TcBadge from "./badge.vue";
storiesOf("Badge", module).add("Default", function() {
  return {
    components: {
      TcBadge: TcBadge
    },
    template: '\n            <tc-badge value="9"/>\n        '
  };
});
//# sourceMappingURL=badge.stories.js.map
