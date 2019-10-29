import { storiesOf } from "@storybook/vue";

import TcFormField from "./form-field.vue";

storiesOf("Forms|Field", module).add("Default", () => ({
  components: {
    TcFormField
  },
  template: `
            <tc-form-field
                title="Test title"
                subtext="Just to test"
             />
        `
}));
