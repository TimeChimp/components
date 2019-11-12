import { storiesOf } from "@storybook/vue";
import TcIcon from "./icon.vue";
storiesOf("Icons", module)
    .add("Arrow", function () { return ({
    components: {
        TcIcon: TcIcon
    },
    template: "\n            <tc-icon name=\"arrow\" size=\"25\"/>\n        "
}); })
    .add("Close", function () { return ({
    components: {
        TcIcon: TcIcon
    },
    template: "\n            <tc-icon name=\"close\" size=\"25\"/>\n        "
}); });
//# sourceMappingURL=icon.stories.js.map