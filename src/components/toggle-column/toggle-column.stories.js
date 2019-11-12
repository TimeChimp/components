import { storiesOf } from "@storybook/vue";
import TcToggleColumn from "./toggle-column.vue";
storiesOf("Toggles|Toggle Column", module).add("Default", function () { return ({
    components: {
        TcToggleColumn: TcToggleColumn
    },
    template: "\n        <div>\n            <h3>Active</h3>\n            <tc-toggle-column title=\"Test title\" :active=\"true\" />\n\n            <h3>Inactive</h3>\n            <tc-toggle-column title=\"Test title\" :active=\"false\" />\n        </div>\n        "
}); });
//# sourceMappingURL=toggle-column.stories.js.map