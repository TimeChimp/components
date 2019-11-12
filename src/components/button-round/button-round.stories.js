/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import TcButtonRound from "./button-round.vue";
import TcIcon from "../icons/icon.vue";
storiesOf("Buttons|Button round", module)
  .add("Default", function() {
    return {
      components: {
        TcButtonRound: TcButtonRound,
        TcIcon: TcIcon
      },
      template: "\n                    <tc-button-round />\n            "
    };
  })
  .add("Close", function() {
    return {
      components: {
        TcButtonRound: TcButtonRound,
        TcIcon: TcIcon
      },
      template:
        '\n                    <tc-button-round>\n                        <tc-icon name="close" />\n                    </tc-button-round>\n            '
    };
  })
  .add("Next", function() {
    return {
      components: {
        TcButtonRound: TcButtonRound,
        TcIcon: TcIcon
      },
      template:
        '\n                    <tc-button-round>\n                        <tc-icon \n                            name="arrow"\n                            style="transform:rotate(-90deg)"\n                        />\n                    </tc-button-round>\n            '
    };
  })
  .add("Previous", function() {
    return {
      components: {
        TcButtonRound: TcButtonRound,
        TcIcon: TcIcon
      },
      template:
        '\n                    <tc-button-round>\n                        <tc-icon \n                            name="arrow" \n                            style="transform:rotate(90deg)"\n                        />\n                    </tc-button-round>\n            '
    };
  });
//# sourceMappingURL=button-round.stories.js.map
