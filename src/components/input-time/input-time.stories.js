import { storiesOf } from "@storybook/vue";
import TcInputTime from "./input-time.vue";
storiesOf("Inputs|Time", module).add("Default", function () { return ({
    components: {
        TcInputTime: TcInputTime
    },
    template: "\n  <div style=\"width: 20%;\">\n            <tc-input-time name=\"test-time-input\" :value=\"25\"/>\n            </div>\n        "
}); });
//# sourceMappingURL=input-time.stories.js.map