import * as tslib_1 from "tslib";
import { shallowMount } from "@vue/test-utils";
import TcNothingHere from "./nothing-here.vue";
var factory = function(props) {
  if (props === void 0) {
    props = {};
  }
  return shallowMount(TcNothingHere, {
    propsData: tslib_1.__assign({}, props)
  });
};
describe("Nothing here", function() {
  it("renders a component", function() {
    var wrapper = factory();
    expect(wrapper.find(".nothing-here").exists()).toBe(true);
  });
  it("renders a title", function() {
    var wrapper = factory({
      title: "No results"
    });
    expect(wrapper.find(".nothing-here__title").text()).toEqual("No results");
  });
});
//# sourceMappingURL=nothing-here.test.js.map
