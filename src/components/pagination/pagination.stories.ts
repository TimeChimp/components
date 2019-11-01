import { storiesOf } from "@storybook/vue";

import TcPagination from "./pagination.vue";

storiesOf("Navigation|Pagination", module)
  .add("Default", () => ({
    components: {
      TcPagination
    },
    methods: {},
    template: `
            <tc-pagination />
    `
  }))
  .add("Multi", () => ({
    components: {
      TcPagination
    },
    methods: {},
    template: `
            <tc-pagination
                :total="99"
                :per-page="10"
                :current="1"
             />
    `
  }));
