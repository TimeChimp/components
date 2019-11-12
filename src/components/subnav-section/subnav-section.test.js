import * as tslib_1 from "tslib";
import { shallowMount } from "@vue/test-utils";
import TcSubnavSection from "./subnav-section.vue";
var factory = function (values) {
    if (values === void 0) { values = {}; }
    return shallowMount(TcSubnavSection, {
        propsData: tslib_1.__assign({}, values)
    });
};
describe("Subnav section", function () {
    var props = {
        title: "Test title"
    };
    it("Renders a component", function () {
        var wrapper = factory(props);
        expect(wrapper.contains(".subnav-section")).toBe(true);
    });
    it("Renders a title", function () {
        var wrapper = factory(props);
        expect(wrapper.find(".subnav-section__title").text()).toEqual(props.title);
    });
});
//# sourceMappingURL=subnav-section.test.js.map