import { storiesOf } from "@storybook/vue";
import TcLayoutHeader from "./layout-header.vue";
import TcBackButton from "../back-button/back-button.vue";
storiesOf("Navigation|Layout header", module)
  .add("Default", function() {
    return {
      components: {
        TcLayoutHeader: TcLayoutHeader
      },
      template:
        '\n            <tc-layout-header title="Test header" />\n        '
    };
  })
  .add("With back button", function() {
    return {
      components: {
        TcLayoutHeader: TcLayoutHeader,
        TcBackButton: TcBackButton
      },
      template:
        '\n            <tc-layout-header title="Test header" >\n            <template slot="back">\n              <tc-back-button class="mr-2" />\n              </template>\n            </tc-layout-header>\n        '
    };
  });
//# sourceMappingURL=layout-header.stories.js.map
