import * as tslib_1 from "tslib";
import { shallowMount } from "@vue/test-utils";
import TcInputNumber from "./input-number.vue";
var factory = function(values) {
  if (values === void 0) {
    values = {};
  }
  return shallowMount(TcInputNumber, {
    propsData: tslib_1.__assign({}, values)
  });
};
describe("Input number", function() {
  it("Renders a component", function() {
    var wrapper = factory({
      name: "test-number-input",
      value: 100
    });
    expect(wrapper.find(".input-number").exists()).toBe(true);
  });
});
//# sourceMappingURL=input-number.test.js.map
