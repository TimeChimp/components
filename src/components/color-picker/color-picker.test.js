import * as tslib_1 from "tslib";
import { shallowMount } from "@vue/test-utils";
import ColorPicker from "./color-picker.vue";
var factory = function (values) {
    if (values === void 0) { values = {}; }
    return shallowMount(ColorPicker, {
        propsData: tslib_1.__assign({}, values)
    });
};
describe("Color picker", function () {
    it("Renders a component", function () {
        var wrapper = factory();
        expect(wrapper.contains('[data-tid="color-picker"]')).toBe(true);
    });
});
//# sourceMappingURL=color-picker.test.js.map