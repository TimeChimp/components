import { storiesOf } from "@storybook/vue";
import TcProgressBar from "./progress-bar.vue";
storiesOf("Progress Bar", module)
    .add("Small", function () { return ({
    components: {
        TcProgressBar: TcProgressBar
    },
    template: "\n            <tc-progress-bar\n                :value=\"20\"\n                size=\"small\" />\n    "
}); })
    .add("Medium", function () { return ({
    components: {
        TcProgressBar: TcProgressBar
    },
    template: "\n            <tc-progress-bar\n                :value=\"20\"\n                size=\"medium\" />\n    "
}); })
    .add("Large", function () { return ({
    components: {
        TcProgressBar: TcProgressBar
    },
    template: "\n            <tc-progress-bar\n                :value=\"20\"\n                size=\"large\" />\n    "
}); });
//# sourceMappingURL=progress-bar.stories.js.map