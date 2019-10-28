import { storiesOf } from "@storybook/vue";

import TcFormSection from "./form-section.vue";

storiesOf("Forms|Section", module)
  .add("Line", () => ({
    components: {
      TcFormSection
    },
    template: `
              <tc-form-section
                  title="Test title"
                  :line="true"
              />
          `
  }))
  .add("No line", () => ({
    components: {
      TcFormSection
    },
    template: `
              <tc-form-section
                  title="Test title"
                  :line="false"
              />
          `
  }));
