import { storiesOf } from "@storybook/vue";
import TcLockAvatar from "./lock-avatar.vue";
storiesOf("Lock Avatar", module).add("Default", function () { return ({
    components: {
        TcLockAvatar: TcLockAvatar
    },
    template: "\n            <tc-lock-avatar name=\"Baltus\" />\n        "
}); });
//# sourceMappingURL=lock-avatar.stories.js.map