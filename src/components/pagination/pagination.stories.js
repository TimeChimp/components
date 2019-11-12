import { storiesOf } from "@storybook/vue";
import TcPagination from "./pagination.vue";
storiesOf("Navigation|Pagination", module)
  .add("Default", function() {
    return {
      components: {
        TcPagination: TcPagination
      },
      methods: {},
      template: "\n            <tc-pagination />\n    "
    };
  })
  .add("Multi", function() {
    return {
      components: {
        TcPagination: TcPagination
      },
      methods: {},
      template:
        '\n            <tc-pagination\n                :total="99"\n                :per-page="10"\n                :current="1"\n             />\n    '
    };
  });
//# sourceMappingURL=pagination.stories.js.map
