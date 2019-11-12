import { storiesOf } from "@storybook/vue";
import TcLabelStatus from "./label-status.vue";
storiesOf("Label Status", module)
  .add("Registered", function() {
    return {
      components: {
        TcLabelStatus: TcLabelStatus
      },
      template: '\n            <tc-label-status :status="0" />\n        '
    };
  })
  .add("Approved", function() {
    return {
      components: {
        TcLabelStatus: TcLabelStatus
      },
      template: '\n            <tc-label-status :status="2" />\n        '
    };
  })
  .add("Rejected", function() {
    return {
      components: {
        TcLabelStatus: TcLabelStatus
      },
      template: '\n            <tc-label-status :status="3" />\n        '
    };
  });
//# sourceMappingURL=label-status.stories.js.map
