import * as tslib_1 from "tslib";
import { shallowMount } from "@vue/test-utils";
import TcProgressBar from "./progress-bar.vue";
var factory = function (props) {
    if (props === void 0) { props = {}; }
    return shallowMount(TcProgressBar, {
        propsData: tslib_1.__assign({}, props)
    });
};
describe("Progress bar", function () {
    var props = {
        size: "medium",
        value: 30
    };
    it("renders a component", function () {
        var wrapper = factory(props);
        expect(wrapper.find(".progress-bar").exists()).toBe(true);
    });
    it("renders a size", function () {
        var wrapper = factory(props);
        expect(wrapper.find(".progress-bar__medium").exists()).toBe(true);
    });
});
//# sourceMappingURL=progress-bar.test.js.map