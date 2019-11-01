import { storiesOf } from "@storybook/vue";

import TcPopover from "./popover.vue";
import TcPopoverItem from "../popover-item/popover-item.vue";

storiesOf("Popover", module).add("Default", () => ({
  components: {
    TcPopover,
    TcPopoverItem
  },
  template: `
            <div>
                <tc-popover>
                  <tc-popover-item title="Test title" />
                </tc-popover>
            </div>
        `
}));
