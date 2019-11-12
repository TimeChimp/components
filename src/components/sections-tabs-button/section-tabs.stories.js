import { storiesOf } from "@storybook/vue";
import TcSectionTabsButton from "./section-tabs-button.vue";
storiesOf("Buttons|Section tabs", module)
  .add("Line", function() {
    return {
      components: {
        TcSectionTabsButton: TcSectionTabsButton
      },
      template:
        '\n            <div style="margin:3rem;">\n                <tc-section-tabs-button title="Test section" :line="true" />\n                </div>\n            '
    };
  })
  .add("No line", function() {
    return {
      components: {
        TcSectionTabsButton: TcSectionTabsButton
      },
      template:
        '\n        <div style="margin:3rem;">\n                <tc-section-tabs-button title="Test section" :line="false" />\n                </div>\n            '
    };
  });
//# sourceMappingURL=section-tabs.stories.js.map
