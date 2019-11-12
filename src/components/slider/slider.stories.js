import { storiesOf } from "@storybook/vue";
import TcSlider from "./slider.vue";
storiesOf("Slider", module).add("Default", function () { return ({
    components: {
        TcSlider: TcSlider
    },
    template: "\n        <tc-slider type=\"time\" />\n    "
}); });
//# sourceMappingURL=slider.stories.js.map