import * as tslib_1 from "tslib";
import { shallowMount } from "@vue/test-utils";
import TcSliderSwitch from "./slider-switch.vue";
var factory = function(props) {
  if (props === void 0) {
    props = {};
  }
  return shallowMount(TcSliderSwitch, {
    propsData: tslib_1.__assign({}, props)
  });
};
describe("Slider switch", function() {
  it("renders a component", function() {
    var wrapper = factory({
      groups: ["Vue", "React"]
    });
    expect(wrapper.find(".slider-switch").exists()).toBe(true);
  });
});
//# sourceMappingURL=slider-switch.test.js.map
