import { storiesOf } from "@storybook/vue";
import TcTab from "./tab.vue";
import TcTabItem from "../tab-item/tab-item.vue";
storiesOf("Navigation|Tabs", module).add("Default", function() {
  return {
    components: {
      TcTab: TcTab,
      TcTabItem: TcTabItem
    },
    template:
      '\n            <tc-tab>\n                <tc-tab-item title="Tab #1" active="true" />\n                <tc-tab-item title="Tab #2" />\n                <tc-tab-item title="Tab #3" />\n            </tc-tab>\n        '
  };
});
//# sourceMappingURL=tab.stories.js.map
