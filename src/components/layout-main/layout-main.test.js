import * as tslib_1 from "tslib";
import { shallowMount } from "@vue/test-utils";
import TcLayoutMain from "./layout-main.vue";
var factory = function (values) {
    if (values === void 0) { values = {}; }
    return shallowMount(TcLayoutMain, {
        propsData: tslib_1.__assign({}, values)
    });
};
describe("Layout main", function () {
    it("renders a component", function () {
        var wrapper = factory();
        expect(wrapper.find(".layout-main").exists()).toBe(true);
    });
});
//# sourceMappingURL=layout-main.test.js.map