import { storiesOf } from "@storybook/vue";
import TcLabel from "./label.vue";
storiesOf("Label", module)
    .add("Default", function () { return ({
    components: {
        TcLabel: TcLabel
    },
    template: "\n            <tc-label title=\"Test title\" />\n        "
}); })
    .add("Micro", function () { return ({
    components: {
        TcLabel: TcLabel
    },
    template: "\n            <tc-label title=\"Test title\" size=\"micro\" />\n        "
}); });
//# sourceMappingURL=label.stories.js.map