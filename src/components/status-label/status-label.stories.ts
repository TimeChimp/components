import { storiesOf } from "@storybook/vue";

import TcStatusLabel from "./status-label.vue";

storiesOf("Status label", module)
  .add("Registered", () => ({
    components: {
      TcStatusLabel
    },
    template: `
          <tc-status-label
            status="registered"
           />
      `
  }))
  .add("Offered", () => ({
    components: {
      TcStatusLabel
    },
    template: `
          <tc-status-label
            status="offered"
           />
      `
  }))
  .add("Rejected", () => ({
    components: {
      TcStatusLabel
    },
    template: `
          <tc-status-label
            status="rejected"
           />
      `
  }))
  .add("Approved", () => ({
    components: {
      TcStatusLabel
    },
    template: `
          <tc-status-label
            status="approved"
           />
      `
  }));
