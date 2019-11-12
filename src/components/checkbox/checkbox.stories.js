/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import TcCheckbox from "./checkbox.vue";
storiesOf("Toggles|Checkbox", module).add("Default", function () { return ({
    components: {
        TcCheckbox: TcCheckbox
    },
    template: "\n        <tc-checkbox>\n            Check this\n        </tc-checkbox>\n        "
}); });
//# sourceMappingURL=checkbox.stories.js.map