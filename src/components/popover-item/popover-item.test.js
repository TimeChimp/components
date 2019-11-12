import * as tslib_1 from "tslib";
import { shallowMount } from "@vue/test-utils";
import TcPopoverItem from "./popover-item.vue";
var factory = function(props) {
  if (props === void 0) {
    props = {};
  }
  return shallowMount(TcPopoverItem, {
    propsData: tslib_1.__assign({}, props)
  });
};
describe("Popover item", function() {
  var props = {
    title: "Test title"
  };
  it("renders a component", function() {
    var wrapper = factory(props);
    expect(wrapper.find(".popover-item").exists()).toBe(true);
  });
  it("renders a title", function() {
    var wrapper = factory(props);
    expect(wrapper.find(".popover-item__title").text()).toEqual(props.title);
  });
});
//# sourceMappingURL=popover-item.test.js.map
