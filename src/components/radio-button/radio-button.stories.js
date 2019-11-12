import { storiesOf } from "@storybook/vue";
import TcRadioButton from "./radio-button.vue";
storiesOf("Toggles|Radio", module).add("Default", function () { return ({
    components: {
        TcRadioButton: TcRadioButton
    },
    template: "\n        <div>\n            <tc-radio-button\n                name=\"radio-check\"\n                :native-value=\"0\"\n        />\n            <tc-radio-button\n                name=\"radio-check\"\n            :native-value=\"1\"\n        />\n            <tc-radio-button\n                name=\"radio-check\"\n            :native-value=\"2\"\n        />\n        </div>\n    "
}); });
//# sourceMappingURL=radio-button.stories.js.map