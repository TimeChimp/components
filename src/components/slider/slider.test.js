import * as tslib_1 from "tslib";
import { shallowMount } from "@vue/test-utils";
import TcSlider from "./slider.vue";
var factory = function (props) {
    if (props === void 0) { props = {}; }
    return shallowMount(TcSlider, {
        propsData: tslib_1.__assign({}, props)
    });
};
describe("Slider", function () {
    it("renders a component", function () {
        var wrapper = factory();
        expect(wrapper.find(".slider").exists()).toBe(true);
    });
});
//# sourceMappingURL=slider.test.js.map