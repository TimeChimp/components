import * as tslib_1 from "tslib";
import { shallowMount } from "@vue/test-utils";
import TcStatusLabel from "./status-label.vue";
var factory = function(values) {
  if (values === void 0) {
    values = {};
  }
  return shallowMount(TcStatusLabel, {
    propsData: tslib_1.__assign({}, values)
  });
};
describe("Status label", function() {
  it("Renders a status label component", function() {
    var wrapper = factory();
    expect(wrapper.contains(".status-label")).toBe(true);
  });
  it("Renders the correct color", function() {
    var wrapper = factory({
      status: "approved"
    });
    expect(wrapper.contains(".status-label--green")).toBe(true);
  });
});
//# sourceMappingURL=status-label.test.js.map
