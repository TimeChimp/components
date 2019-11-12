/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import TcBackButton from "./back-button.vue";
storiesOf("Buttons|Back button", module).add("Default", function () { return ({
    components: {
        TcBackButton: TcBackButton
    },
    template: "\n            <tc-back-button />\n        "
}); });
//# sourceMappingURL=back-button.stories.js.map