import * as tslib_1 from "tslib";
import { shallowMount } from "@vue/test-utils";
import TcSubnav from "./subnav.vue";
var factory = function (values) {
    if (values === void 0) { values = {}; }
    return shallowMount(TcSubnav, {
        propsData: tslib_1.__assign({}, values)
    });
};
describe("Subnav", function () {
    it("Renders a component", function () {
        var wrapper = factory();
        expect(wrapper.contains(".subnav")).toBe(true);
    });
});
//# sourceMappingURL=subnav.test.js.map