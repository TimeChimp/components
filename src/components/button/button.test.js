import * as tslib_1 from "tslib";
import { shallowMount } from "@vue/test-utils";
import Button from "./button.vue";
var factory = function (values) {
    if (values === void 0) { values = {}; }
    return shallowMount(Button, {
        slots: {
            addon: "<span>Test</span>"
        },
        propsData: tslib_1.__assign({}, values)
    });
};
describe("Button", function () {
    var props = {
        loading: false
    };
    it("Renders a button", function () {
        var wrapper = factory(props);
        expect(wrapper.contains(".button")).toBe(true);
    });
    it("Shows a loading spinner", function () {
        var wrapper = factory({
            loading: true
        });
        expect(wrapper.contains(".button__loader")).toBe(true);
    });
    it("Renders a slot", function () {
        var wrapper = factory(props);
        var slot = wrapper.find("span");
        expect(slot.text()).toBe("Test");
    });
});
//# sourceMappingURL=button.test.js.map