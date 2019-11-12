/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import TcHelper from "./helper.vue";
storiesOf("Helper", module).add("Default", function () { return ({
    components: {
        TcHelper: TcHelper
    },
    template: "\n            <tc-helper\n                text=\"Something cool\"\n             />\n        "
}); });
// const Helper = () => ({
//   components: { TcHelper },
//   template: `<tc-helper text="Something cool" />`
// });
// export default Helper;
//# sourceMappingURL=helper.stories.js.map