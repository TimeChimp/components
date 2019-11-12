import * as tslib_1 from "tslib";
import { shallowMount } from "@vue/test-utils";
import TcIcon from "./icon.vue";
var factory = function (values) {
    if (values === void 0) { values = {}; }
    return shallowMount(TcIcon, {
        propsData: tslib_1.__assign({}, values)
    });
};
describe("Icon", function () {
    it("Renders a icon", function () {
        var wrapper = factory({
            name: "arrow"
        });
        expect(wrapper.contains("svg")).toBe(true);
    });
});
//# sourceMappingURL=icon.test.js.map