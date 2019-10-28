import { storiesOf } from "@storybook/vue";

import TcBadge from "./badge.vue";

storiesOf("Badge", module).add("Default", () => ({
  components: {
    TcBadge
  },
  template: `
            <tc-badge value="9"/>
        `
}));
