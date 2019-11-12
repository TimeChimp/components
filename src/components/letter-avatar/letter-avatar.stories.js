import { storiesOf } from "@storybook/vue";
import TcLetterAvatar from "./letter-avatar.vue";
storiesOf("Letter Avatar", module).add("Default", function () { return ({
    components: {
        TcLetterAvatar: TcLetterAvatar
    },
    template: "\n            <tc-letter-avatar name=\"Baltus\" />\n        "
}); });
//# sourceMappingURL=letter-avatar.stories.js.map