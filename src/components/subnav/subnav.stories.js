import { storiesOf } from "@storybook/vue";
// @ts-ignore
import StoryRouter from "storybook-vue-router";
import TcSubnav from "./subnav.vue";
import TcSubnavSection from "../subnav-section/subnav-section.vue";
import TcSubnavSectionItem from "../subnav-section-item/subnav-section-item.vue";
storiesOf("Navigation|Subnav", module)
    .addDecorator(StoryRouter())
    .add("Default", function () { return ({
    components: {
        TcSubnav: TcSubnav,
        TcSubnavSection: TcSubnavSection,
        TcSubnavSectionItem: TcSubnavSectionItem
    },
    template: "\n            <tc-subnav>\n                <tc-subnav-section title=\"Sectie 1\">\n                    <tc-subnav-section-item title=\"Item 1\" route=\"item1\" />\n                    <tc-subnav-section-item title=\"Item 2\" route=\"item2\" />\n                    <tc-subnav-section-item title=\"Item 3\" route=\"item3\" />\n                </tc-subnav-section>\n                <tc-subnav-section title=\"Sectie 2\">\n                    <tc-subnav-section-item title=\"Item 1\" route=\"item1\" />\n                    <tc-subnav-section-item title=\"Item 2\" route=\"item2\" />\n                    <tc-subnav-section-item title=\"Item 3\" route=\"item3\" />\n                </tc-subnav-section>\n            </tc-subnav>\n        "
}); });
//# sourceMappingURL=subnav.stories.js.map