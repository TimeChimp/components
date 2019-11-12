import * as tslib_1 from "tslib";
import { shallowMount } from "@vue/test-utils";
import TcSpinner from "./spinner.vue";
var factory = function(props) {
  if (props === void 0) {
    props = {};
  }
  return shallowMount(TcSpinner, {
    propsData: tslib_1.__assign({}, props)
  });
};
describe("Spinner", function() {
  it("renders a component", function() {
    var wrapper = factory({
      show: true
    });
    expect(wrapper.find(".spinner").exists()).toBe(true);
  });
  it("Hides a component", function() {
    var wrapper = factory({
      show: false
    });
    expect(wrapper.find(".spinner").exists()).toBe(false);
  });
});
//# sourceMappingURL=spinner.test.js.map
