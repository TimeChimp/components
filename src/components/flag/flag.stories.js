/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import TcFlag from "./flag.vue";
storiesOf("Flag", module)
  .add("Netherlands", function() {
    return {
      components: {
        TcFlag: TcFlag
      },
      template: '\n            <tc-flag iso="nl"  />\n        '
    };
  })
  .add("United states", function() {
    return {
      components: {
        TcFlag: TcFlag
      },
      template: '\n            <tc-flag iso="us"  />\n        '
    };
  })
  .add("Jamaica", function() {
    return {
      components: {
        TcFlag: TcFlag
      },
      template: '\n            <tc-flag iso="jm"  />\n        '
    };
  });
//# sourceMappingURL=flag.stories.js.map
