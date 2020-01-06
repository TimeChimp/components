import { storiesOf } from "@storybook/vue";
import TcFormSection from "./form-section.vue";
storiesOf("Forms|Section", module)
  .add("Line", function() {
    return {
      components: {
        TcFormSection: TcFormSection
      },
      template:
        '\n              <tc-form-section\n                  title="Test title"\n                  :line="true"\n              />\n          '
    };
  })
  .add("No line", function() {
    return {
      components: {
        TcFormSection: TcFormSection
      },
      template:
        '\n              <tc-form-section\n                  title="Test title"\n                  :line="false"\n              />\n          '
    };
  });
//# sourceMappingURL=form-section.stories.js.map
