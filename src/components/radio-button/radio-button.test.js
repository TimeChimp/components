import * as tslib_1 from "tslib";
import { shallowMount } from "@vue/test-utils";
import TcRadioButton from "./radio-button.vue";
var factory = function (props) {
    if (props === void 0) { props = {}; }
    return shallowMount(TcRadioButton, {
        propsData: tslib_1.__assign({}, props)
    });
};
describe("Radio button", function () {
    var props = {
        value: 1,
        name: "Radio check",
        nativeValue: 0
    };
    it("renders a component", function () {
        var wrapper = factory(props);
        expect(wrapper.find(".radio-button").exists()).toBe(true);
    });
});
//# sourceMappingURL=radio-button.test.js.map