import * as tslib_1 from "tslib";
import { shallowMount } from "@vue/test-utils";
import TcMobilePlusButton from "./mobile-button-plus.vue";
var factory = function (props) {
    if (props === void 0) { props = {}; }
    return shallowMount(TcMobilePlusButton, {
        propsData: tslib_1.__assign({}, props)
    });
};
describe("Mobile plus button", function () {
    it("renders a component", function () {
        var wrapper = factory();
        expect(wrapper.find(".mobile-button-plus").exists()).toBe(true);
    });
});
//# sourceMappingURL=mobile-button.test.js.map