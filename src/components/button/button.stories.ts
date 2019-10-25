import { storiesOf } from "@storybook/vue";

import TcButton from "./button.vue";

storiesOf("Button", module).add("Default", () => ({
  components: {
    TcButton
  },
  template: `
            <tc-button :button-class="['button__primary']">
                Button
            />
        `
}));

// const Helper = () => ({
//   components: { TcHelper },
//   template: `<tc-helper text="Something cool" />`
// });

// export default Helper;
