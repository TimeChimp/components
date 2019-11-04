import { storiesOf } from "@storybook/vue";
// @ts-ignore
import StoryRouter from "storybook-vue-router";

import TcSubnav from "./subnav.vue";
import TcSubnavSection from "../subnav-section/subnav-section.vue";
import TcSubnavSectionItem from "../subnav-section-item/subnav-section-item.vue";

storiesOf("Navigation|Subnav", module)
  .addDecorator(StoryRouter())
  .add("Default", () => ({
    components: {
      TcSubnav,
      TcSubnavSection,
      TcSubnavSectionItem
    },
    template: `
            <tc-subnav>
                <tc-subnav-section title="Sectie 1">
                    <tc-subnav-section-item title="Item 1" route="item1" />
                    <tc-subnav-section-item title="Item 2" route="item2" />
                    <tc-subnav-section-item title="Item 3" route="item3" />
                </tc-subnav-section>
                <tc-subnav-section title="Sectie 2">
                    <tc-subnav-section-item title="Item 1" route="item1" />
                    <tc-subnav-section-item title="Item 2" route="item2" />
                    <tc-subnav-section-item title="Item 3" route="item3" />
                </tc-subnav-section>
            </tc-subnav>
        `
  }));
