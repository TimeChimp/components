import { storiesOf } from "@storybook/vue";
import TcFormField from "./form-field.vue";
storiesOf("Forms|Field", module).add("Default", function() {
  return {
    components: {
      TcFormField: TcFormField
    },
    template:
      '\n            <tc-form-field\n                title="Test title"\n                subtext="Just to test"\n             />\n        '
  };
});
//# sourceMappingURL=form-field.stories.js.map
