import { storiesOf } from "@storybook/vue";
import TcTabItem from "./tab-item.vue";
storiesOf("Navigation|Tab Item", module).add("Default", function () { return ({
    components: {
        TcTabItem: TcTabItem
    },
    template: "\n            <div>\n                <h2>Inactive</h2>\n                <tc-tab-item title=\"Tab #1\" />\n\n                <h2>Active</h2>\n                <tc-tab-item title=\"Tab #1\" active=\"true\" />\n            </div>\n        "
}); });
//# sourceMappingURL=tab-item.stories.js.map