import { storiesOf } from "@storybook/vue";
import TcPopover from "./popover.vue";
import TcPopoverItem from "../popover-item/popover-item.vue";
storiesOf("Popover", module).add("Default", function () { return ({
    components: {
        TcPopover: TcPopover,
        TcPopoverItem: TcPopoverItem
    },
    template: "\n            <div>\n                <tc-popover>\n                  <tc-popover-item title=\"Test title\" />\n                </tc-popover>\n            </div>\n        "
}); });
//# sourceMappingURL=popover.stories.js.map