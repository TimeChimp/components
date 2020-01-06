import * as tslib_1 from "tslib";
import { shallowMount } from "@vue/test-utils";
import TcPopover from "./popover.vue";
var factory = function(props) {
  if (props === void 0) {
    props = {};
  }
  return shallowMount(TcPopover, {
    propsData: tslib_1.__assign({}, props)
  });
};
describe("Popover", function() {
  it("renders a component", function() {
    var wrapper = factory();
    expect(wrapper.find(".popover").exists()).toBe(true);
  });
});
//# sourceMappingURL=popover.test.js.map
