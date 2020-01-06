import * as tslib_1 from "tslib";
import { shallowMount } from "@vue/test-utils";
import TcSectionTabsButton from "./section-tabs-button.vue";
var factory = function(props) {
  if (props === void 0) {
    props = {};
  }
  return shallowMount(TcSectionTabsButton, {
    propsData: tslib_1.__assign({}, props)
  });
};
describe("Section tabs button", function() {
  var props = {
    title: "Test section"
  };
  it("renders a component", function() {
    var wrapper = factory(props);
    expect(wrapper.find(".section-tabs-button").exists()).toBe(true);
  });
  it("renders a title", function() {
    var wrapper = factory(props);
    expect(wrapper.find(".section-tabs-button__inner").text()).toBe(
      props.title
    );
  });
});
//# sourceMappingURL=section-tabs.test.js.map
