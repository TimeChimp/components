import { storiesOf } from "@storybook/vue";

import TcNothingHere from "./nothing-here.vue";

storiesOf("Nothing Here", module).add("Default", () => ({
  components: {
    TcNothingHere
  },
  template: `
            <div style="margin-top:10rem;">
                <tc-nothing-here title="No results" />
            </div>
        `
}));
