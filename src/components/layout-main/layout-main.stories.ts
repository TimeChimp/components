import { storiesOf } from "@storybook/vue";

import TcLayoutMain from "./layout-main.vue";

storiesOf("Navigation|Layout main", module).add("Default", () => ({
  components: {
    TcLayoutMain
  },
  template: `
            <tc-layout-main />
        `
}));
