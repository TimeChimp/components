import * as tslib_1 from "tslib";
import { shallowMount } from "@vue/test-utils";
import TcSwitch from "./switch.vue";
var factory = function(values) {
  if (values === void 0) {
    values = {};
  }
  return shallowMount(TcSwitch, {
    propsData: tslib_1.__assign({}, values)
  });
};
describe("Switch", function() {
  var wrapper = factory();
  it("Renders a switch", function() {
    expect(wrapper.contains(".switch")).toBe(true);
  });
});
//# sourceMappingURL=switch.test.js.map
