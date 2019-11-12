import * as tslib_1 from "tslib";
import { shallowMount } from "@vue/test-utils";
import TcLockAvatar from "./lock-avatar.vue";
var factory = function (props) {
    if (props === void 0) { props = {}; }
    return shallowMount(TcLockAvatar, {
        propsData: tslib_1.__assign({}, props)
    });
};
describe("lock avatar", function () {
    var props = {
        name: "Baltus"
    };
    it("renders a component", function () {
        var wrapper = factory(props);
        expect(wrapper.find(".lock-avatar").exists()).toBe(true);
    });
});
//# sourceMappingURL=lock-avatar.test.js.map