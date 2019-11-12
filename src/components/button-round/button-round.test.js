import * as tslib_1 from "tslib";
import { shallowMount } from "@vue/test-utils";
import ButtonRound from "./button-round.vue";
var factory = function(values) {
  if (values === void 0) {
    values = {};
  }
  return shallowMount(ButtonRound, {
    propsData: tslib_1.__assign({}, values)
  });
};
describe("Button round", function() {
  it("Shows a loading spinner", function() {
    var wrapper = factory({
      loading: true
    });
    expect(wrapper.contains(".button__loader")).toBe(true);
  });
  it("Renders a button", function() {
    var wrapper = factory({
      loading: false
    });
    expect(wrapper.contains(".button")).toBe(true);
  });
});
//# sourceMappingURL=button-round.test.js.map
