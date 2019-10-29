/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";

import TcFlag from "./flag.vue";

storiesOf("Flag", module)
  .add("Netherlands", () => ({
    components: {
      TcFlag
    },
    template: `
            <tc-flag iso="nl"  />
        `
  }))
  .add("United states", () => ({
    components: {
      TcFlag
    },
    template: `
            <tc-flag iso="us"  />
        `
  }))
  .add("Jamaica", () => ({
    components: {
      TcFlag
    },
    template: `
            <tc-flag iso="jm"  />
        `
  }));
