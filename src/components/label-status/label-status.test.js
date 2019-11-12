import * as tslib_1 from "tslib";
import { shallowMount } from "@vue/test-utils";
import TcLabelStatus from "./label-status.vue";
var factory = function(values) {
  if (values === void 0) {
    values = {};
  }
  return shallowMount(TcLabelStatus, {
    propsData: tslib_1.__assign({}, values)
  });
};
describe("Label status", function() {
  it("renders a component", function() {
    var wrapper = factory({
      status: 0
    });
    expect(wrapper.find(".label-status").exists()).toBe(true);
  });
  it("renders an approved label", function() {
    var wrapper = factory({
      status: 2
    });
    expect(wrapper.find(".label-status__approved").exists()).toBe(true);
  });
});
//# sourceMappingURL=label-status.test.js.map
