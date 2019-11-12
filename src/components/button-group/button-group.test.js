import * as tslib_1 from "tslib";
import { shallowMount } from "@vue/test-utils";
import ButtonGroup from "./button-group.vue";
var factory = function(values) {
  if (values === void 0) {
    values = {};
  }
  return shallowMount(ButtonGroup, {
    propsData: tslib_1.__assign({}, values)
  });
};
describe("Button group", function() {
  it("Renders a button group", function() {
    var wrapper = factory();
    expect(wrapper.contains(".button-group")).toBe(true);
  });
});
//# sourceMappingURL=button-group.test.js.map
