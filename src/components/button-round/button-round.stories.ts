/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";

import TcButtonRound from "./button-round.vue";
import TcIcon from "../icons/icon.vue";

storiesOf("Buttons|Button round", module)
  .add("Default", () => ({
    components: {
      TcButtonRound,
      TcIcon
    },
    template: `
                    <tc-button-round />
            `
  }))
  .add("Close", () => ({
    components: {
      TcButtonRound,
      TcIcon
    },
    template: `
                    <tc-button-round>
                        <tc-icon name="close" />
                    </tc-button-round>
            `
  }))
  .add("Next", () => ({
    components: {
      TcButtonRound,
      TcIcon
    },
    template: `
                    <tc-button-round>
                        <tc-icon 
                            name="arrow"
                            style="transform:rotate(-90deg)"
                        />
                    </tc-button-round>
            `
  }))
  .add("Previous", () => ({
    components: {
      TcButtonRound,
      TcIcon
    },
    template: `
                    <tc-button-round>
                        <tc-icon 
                            name="arrow" 
                            style="transform:rotate(90deg)"
                        />
                    </tc-button-round>
            `
  }));
