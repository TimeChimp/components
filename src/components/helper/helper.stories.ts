/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";

import TcHelper from "./helper.vue";

storiesOf("Helper", module).add("Default", () => ({
  components: {
    TcHelper
  },
  template: `
            <tc-helper
                text="Something cool"
             />
        `
}));

// const Helper = () => ({
//   components: { TcHelper },
//   template: `<tc-helper text="Something cool" />`
// });

// export default Helper;
