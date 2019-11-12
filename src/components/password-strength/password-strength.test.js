import * as tslib_1 from "tslib";
import { shallowMount } from "@vue/test-utils";
import TcPasswordStrength from "./password-strength.vue";
var factory = function (props) {
    if (props === void 0) { props = {}; }
    return shallowMount(TcPasswordStrength, {
        propsData: tslib_1.__assign({}, props)
    });
};
describe("Password strength", function () {
    it("renders a component", function () {
        var wrapper = factory();
        expect(wrapper.find(".password-strength").exists()).toBe(true);
    });
    it("renders score color", function () {
        var wrapper = factory({
            score: 4
        });
        expect(wrapper.find(".password-strength--green").exists()).toBe(true);
    });
});
//# sourceMappingURL=password-strength.test.js.map