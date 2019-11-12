import * as tslib_1 from "tslib";
import { shallowMount } from "@vue/test-utils";
import VirtualList from "./virtual-list";
var factory = function (values) {
    if (values === void 0) { values = {}; }
    return shallowMount(VirtualList, {
        propsData: tslib_1.__assign({}, values)
    });
};
describe("Virtual List", function () {
    var wrapper = factory();
    it("Renders a virtual list", function () {
        expect(wrapper.contains(".virtual-list")).toBe(true);
    });
});
//# sourceMappingURL=virtual-list.test.js.map