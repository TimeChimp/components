import * as tslib_1 from "tslib";
import { shallowMount } from "@vue/test-utils";
import InputTimeDate from "./input-time-date.vue";
var factory = function(values) {
  if (values === void 0) {
    values = {};
  }
  return shallowMount(InputTimeDate, {
    propsData: tslib_1.__assign({}, values)
  });
};
describe("InputTimeDate", function() {
  it("Renders without crashing", function() {
    var wrapper = factory();
    expect(wrapper.contains(".input-time-date")).toBe(true);
  });
});
//# sourceMappingURL=input-time-date.test.js.map
