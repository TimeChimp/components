import * as tslib_1 from "tslib";
import { shallowMount } from "@vue/test-utils";
import TcFormField from "./form-field.vue";
var factory = function(values) {
  if (values === void 0) {
    values = {};
  }
  return shallowMount(TcFormField, {
    propsData: tslib_1.__assign({}, values)
  });
};
describe("Form field", function() {
  it("renders a component", function() {
    var wrapper = factory();
    expect(wrapper.find(".form-field").exists()).toBe(true);
  });
});
//# sourceMappingURL=form-field.test.js.map
