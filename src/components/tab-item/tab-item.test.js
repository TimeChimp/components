import * as tslib_1 from "tslib";
import { shallowMount } from "@vue/test-utils";
import TcTabItem from "./tab-item.vue";
var factory = function(props) {
  if (props === void 0) {
    props = {};
  }
  return shallowMount(TcTabItem, {
    propsData: tslib_1.__assign({}, props)
  });
};
describe("Tab Item", function() {
  var props = {
    title: "Test title"
  };
  var wrapper = factory(props);
  it("Renders a tab item", function() {
    expect(wrapper.contains(".tab-item")).toBe(true);
  });
  it("Renders a title", function() {
    expect(wrapper.find(".tab-item__title").text()).toEqual(props.title);
  });
});
//# sourceMappingURL=tab-item.test.js.map
