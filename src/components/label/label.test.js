import * as tslib_1 from "tslib";
import { shallowMount } from "@vue/test-utils";
import TcLabel from "./label.vue";
var factory = function(values) {
  if (values === void 0) {
    values = {};
  }
  return shallowMount(TcLabel, {
    propsData: tslib_1.__assign({}, values)
  });
};
describe("Label", function() {
  it("renders a component", function() {
    var wrapper = factory();
    expect(wrapper.find(".label").exists()).toBe(true);
  });
  it("renders a title", function() {
    var wrapper = factory({
      title: "Test title"
    });
    expect(wrapper.find(".label__text").text()).toEqual("Test title");
  });
});
//# sourceMappingURL=label.test.js.map
