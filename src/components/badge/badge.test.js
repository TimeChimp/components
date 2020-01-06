import * as tslib_1 from "tslib";
import { shallowMount } from "@vue/test-utils";
import Badge from "./badge.vue";
var factory = function(values) {
  if (values === void 0) {
    values = {};
  }
  return shallowMount(Badge, {
    propsData: tslib_1.__assign({}, values)
  });
};
describe("Badge", function() {
  var wrapper = factory({
    value: 9
  });
  it("Renders a badge", function() {
    expect(wrapper.contains(".badge")).toBe(true);
  });
  it("Renders number of notifications", function() {
    expect(wrapper.find(".badge").text()).toEqual("9");
  });
});
//# sourceMappingURL=badge.test.js.map
