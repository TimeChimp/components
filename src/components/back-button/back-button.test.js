import * as tslib_1 from "tslib";
import { shallowMount } from "@vue/test-utils";
import BackButton from "./back-button.vue";
var factory = function(values) {
  if (values === void 0) {
    values = {};
  }
  return shallowMount(BackButton, {
    data: function() {
      return tslib_1.__assign({}, values);
    }
  });
};
describe("Back button", function() {
  it("renders a div", function() {
    var wrapper = factory();
    expect(wrapper.contains("div")).toBe(true);
  });
});
//# sourceMappingURL=back-button.test.js.map
