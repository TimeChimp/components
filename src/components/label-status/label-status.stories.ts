import { storiesOf } from "@storybook/vue";

import TcLabelStatus from "./label-status.vue";

storiesOf("Label Status", module)
  .add("Registered", () => ({
    components: {
      TcLabelStatus
    },
    template: `
            <tc-label-status :status="0" />
        `
  }))
  .add("Approved", () => ({
    components: {
      TcLabelStatus
    },
    template: `
            <tc-label-status :status="2" />
        `
  }))
  .add("Rejected", () => ({
    components: {
      TcLabelStatus
    },
    template: `
            <tc-label-status :status="3" />
        `
  }));
