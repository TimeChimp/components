import { storiesOf } from "@storybook/vue";
import TcStatusLabel from "./status-label.vue";
storiesOf("Status label", module)
  .add("Registered", function() {
    return {
      components: {
        TcStatusLabel: TcStatusLabel
      },
      template:
        '\n          <tc-status-label\n            status="registered"\n           />\n      '
    };
  })
  .add("Offered", function() {
    return {
      components: {
        TcStatusLabel: TcStatusLabel
      },
      template:
        '\n          <tc-status-label\n            status="offered"\n           />\n      '
    };
  })
  .add("Rejected", function() {
    return {
      components: {
        TcStatusLabel: TcStatusLabel
      },
      template:
        '\n          <tc-status-label\n            status="rejected"\n           />\n      '
    };
  })
  .add("Approved", function() {
    return {
      components: {
        TcStatusLabel: TcStatusLabel
      },
      template:
        '\n          <tc-status-label\n            status="approved"\n           />\n      '
    };
  });
//# sourceMappingURL=status-label.stories.js.map
