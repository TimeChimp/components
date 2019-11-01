import { storiesOf } from "@storybook/vue";

import TcToggleColumn from "./toggle-column.vue";

storiesOf("Toggles|Toggle Column", module).add("Default", () => ({
  components: {
    TcToggleColumn
  },
  template: `
        <div>
            <h3>Active</h3>
            <tc-toggle-column title="Test title" :active="true" />

            <h3>Inactive</h3>
            <tc-toggle-column title="Test title" :active="false" />
        </div>
        `
}));
