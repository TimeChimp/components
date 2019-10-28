import { storiesOf } from "@storybook/vue";

import TcIcon from "./icon.vue";

storiesOf("Icons", module)
  .add("Arrow", () => ({
    components: {
      TcIcon
    },
    template: `
            <tc-icon name="arrow" size="25"/>
        `
  }))
  .add("Close", () => ({
    components: {
      TcIcon
    },
    template: `
            <tc-icon name="close" size="25"/>
        `
  }));
