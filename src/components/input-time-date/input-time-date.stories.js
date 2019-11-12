import { storiesOf } from "@storybook/vue";
import TcInputTimeDate from "./input-time-date.vue";
storiesOf("Inputs|Time Date", module).add("Default", function () { return ({
    components: {
        TcInputTimeDate: TcInputTimeDate
    },
    template: "\n        <div style=\"width: 20%;\">\n            <tc-input-time-date\n                :value=\"100\"\n            />\n            </div>\n        "
}); });
//# sourceMappingURL=input-time-date.stories.js.map