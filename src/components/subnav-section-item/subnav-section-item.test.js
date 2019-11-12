import * as tslib_1 from "tslib";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import TcSubnavSectionItem from "./subnav-section-item.vue";
import VueRouter from "vue-router";
var localVue = createLocalVue();
localVue.use(VueRouter);
var router = new VueRouter();
var factory = function (values) {
    if (values === void 0) { values = {}; }
    return shallowMount(TcSubnavSectionItem, {
        propsData: tslib_1.__assign({}, values),
        localVue: localVue,
        router: router
    });
};
describe("Subnav section item", function () {
    var props = {
        title: "Test title"
    };
    it("Renders a component", function () {
        var wrapper = factory(props);
        expect(wrapper.contains(".subnav-section-item")).toBe(true);
    });
    it("Renders a title", function () {
        var wrapper = factory(props);
        expect(wrapper.find(".subnav-section-item").text()).toEqual(props.title);
    });
});
//# sourceMappingURL=subnav-section-item.test.js.map