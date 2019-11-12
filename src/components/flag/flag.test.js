import * as tslib_1 from "tslib";
import { shallowMount } from "@vue/test-utils";
import TcFlag from "./flag.vue";
var factory = function (values) {
    if (values === void 0) { values = {}; }
    return shallowMount(TcFlag, {
        propsData: tslib_1.__assign({}, values)
    });
};
describe("Flag", function () {
    it("renders a dutch flag", function () {
        var wrapper = factory({
            iso: "nl"
        });
        expect(wrapper.find(".flag-icon-nl").exists()).toBe(true);
    });
    it("renders an American flag", function () {
        var wrapper = factory({
            iso: "us"
        });
        expect(wrapper.find(".flag-icon-us").exists()).toBe(true);
    });
});
//# sourceMappingURL=flag.test.js.map