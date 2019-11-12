import * as tslib_1 from "tslib";
import { mount } from "@vue/test-utils";
import TcInputTime from "./input-time.vue";
var factory = function(values) {
  if (values === void 0) {
    values = {};
  }
  return mount(TcInputTime, {
    propsData: tslib_1.__assign({}, values)
  });
};
describe("Input time", function() {
  it("Renders a component", function() {
    var wrapper = factory({
      name: "test-time-input",
      value: 100
    });
    expect(wrapper.find(".input-time").exists()).toBe(true);
  });
});
//# sourceMappingURL=input-time.test.js.map
