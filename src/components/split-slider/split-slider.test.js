import * as tslib_1 from "tslib";
import { mount } from "@vue/test-utils";
import TcSplitSlider from "./split-slider.vue";
var factory = function (props) {
    if (props === void 0) { props = {}; }
    return mount(TcSplitSlider, {
        propsData: tslib_1.__assign({}, props)
    });
};
describe("Split slider", function () {
    var props = {
        value: 36000,
        duration: 72000
    };
    it("renders a component", function () {
        var wrapper = factory(props);
        expect(wrapper.find(".split-slider").exists()).toBe(true);
    });
    it("renders the correct value", function () {
        var wrapper = factory(props);
        expect(wrapper.find('[data-tid="time"]').text()).toEqual("10:00");
    });
});
//# sourceMappingURL=split-slider.test.js.map