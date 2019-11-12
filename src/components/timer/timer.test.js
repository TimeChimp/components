import * as tslib_1 from "tslib";
import { shallowMount } from "@vue/test-utils";
import TcTimer from "./timer.vue";
var factory = function (values) {
    if (values === void 0) { values = {}; }
    return shallowMount(TcTimer, {
        propsData: tslib_1.__assign({}, values)
    });
};
describe("Timer", function () {
    it("Renders a component", function () {
        var wrapper = factory();
        expect(wrapper.contains(".timer")).toBe(true);
    });
});
//# sourceMappingURL=timer.test.js.map