import { storiesOf } from "@storybook/vue";
import { TcSpinner } from ".";
storiesOf("Spinner", module).add("Default", function() {
  return {
    components: {
      TcSpinner: TcSpinner
    },
    template:
      '\n            <tc-spinner\n                :show="true"\n             />\n        '
  };
});
//# sourceMappingURL=spinner.stories.js.map
