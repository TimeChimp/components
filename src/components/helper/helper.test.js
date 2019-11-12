import * as tslib_1 from "tslib";
import { shallowMount } from "@vue/test-utils";
import TcHelper from "./helper.vue";
var factory = function (values) {
    if (values === void 0) { values = {}; }
    return shallowMount(TcHelper, {
        propsData: tslib_1.__assign({}, values)
    });
};
describe("Helper", function () {
    it("renders a component", function () {
        var wrapper = factory({
            text: "Something cool"
        });
        expect(wrapper.find(".helper").exists()).toBe(true);
    });
    // it('renders a helper text', () => {
    //   const wrapper = factory({
    //     text: 'Something cool',
    //   });
    //   expect(wrapper.find('.spinner').exists()).toBe(true);
    // });
});
//# sourceMappingURL=helper.test.js.map