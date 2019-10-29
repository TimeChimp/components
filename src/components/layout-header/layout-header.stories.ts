import { storiesOf } from "@storybook/vue";

import TcLayoutHeader from "./layout-header.vue";
import TcBackButton from "../back-button/back-button.vue";

storiesOf("Navigation|Layout header", module)
  .add("Default", () => ({
    components: {
      TcLayoutHeader
    },
    template: `
            <tc-layout-header title="Test header" />
        `
  }))
  .add("With back button", () => ({
    components: {
      TcLayoutHeader,
      TcBackButton
    },
    template: `
            <tc-layout-header title="Test header" >
            <template slot="back">
              <tc-back-button class="mr-2" />
              </template>
            </tc-layout-header>
        `
  }));
