import { storiesOf } from "@storybook/vue";

import TcSectionTabsButton from "./section-tabs-button.vue";

storiesOf("Buttons|Section tabs", module)
  .add("Line", () => ({
    components: {
      TcSectionTabsButton
    },
    template: `
            <div style="margin:3rem;">
                <tc-section-tabs-button title="Test section" :line="true" />
                </div>
            `
  }))
  .add("No line", () => ({
    components: {
      TcSectionTabsButton
    },
    template: `
        <div style="margin:3rem;">
                <tc-section-tabs-button title="Test section" :line="false" />
                </div>
            `
  }));
