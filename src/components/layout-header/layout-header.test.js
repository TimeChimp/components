import * as tslib_1 from "tslib";
import { shallowMount } from "@vue/test-utils";
import TcLayoutHeader from "./layout-header.vue";
var factory = function(values) {
  if (values === void 0) {
    values = {};
  }
  return shallowMount(TcLayoutHeader, {
    propsData: tslib_1.__assign({}, values)
  });
};
describe("Layout header", function() {
  it("renders a component", function() {
    var wrapper = factory({
      title: "Test title"
    });
    expect(wrapper.find(".layout-header").exists()).toBe(true);
  });
});
//# sourceMappingURL=layout-header.test.js.map
