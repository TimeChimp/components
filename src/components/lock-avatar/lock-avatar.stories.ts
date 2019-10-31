import { storiesOf } from "@storybook/vue";

import TcLockAvatar from "./lock-avatar.vue";

storiesOf("Lock Avatar", module).add("Default", () => ({
  components: {
    TcLockAvatar
  },
  template: `
            <tc-lock-avatar name="Baltus" />
        `
}));
