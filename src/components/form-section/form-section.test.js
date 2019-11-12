import * as tslib_1 from "tslib";
import { shallowMount } from "@vue/test-utils";
import TcFormSection from "./form-section.vue";
var factory = function(values) {
  if (values === void 0) {
    values = {};
  }
  return shallowMount(TcFormSection, {
    propsData: tslib_1.__assign({}, values)
  });
};
describe("Form section", function() {
  it("renders a component", function() {
    var wrapper = factory({
      title: "Test title"
    });
    expect(wrapper.find(".form-section").exists()).toBe(true);
  });
  it("renders a title", function() {
    var wrapper = factory({
      title: "Test title"
    });
    expect(wrapper.find(".form-section__title").text()).toEqual("Test title");
  });
  it("renders a small size", function() {
    var wrapper = factory({
      title: "Test title",
      size: "s"
    });
    expect(wrapper.find(".col-5").exists()).toBe(true);
  });
});
//# sourceMappingURL=form-section.test.js.map
