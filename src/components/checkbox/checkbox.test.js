import * as tslib_1 from "tslib";
import { shallowMount } from "@vue/test-utils";
import Checkbox from "./checkbox.vue";
var factory = function (values) {
    if (values === void 0) { values = {}; }
    return shallowMount(Checkbox, {
        propsData: tslib_1.__assign({}, values)
    });
};
describe("Checkbox", function () {
    it("Renders a checkbox component", function () {
        var wrapper = factory();
        expect(wrapper.contains(".tc-checkbox")).toBe(true);
    });
});
//# sourceMappingURL=checkbox.test.js.map