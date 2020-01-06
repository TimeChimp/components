import * as tslib_1 from "tslib";
import { shallowMount } from "@vue/test-utils";
import TcInputCurrency from "./input-currency.vue";
var factory = function(values) {
  if (values === void 0) {
    values = {};
  }
  return shallowMount(TcInputCurrency, {
    propsData: tslib_1.__assign({}, values)
  });
};
describe("Input currency", function() {
  it("Renders a component", function() {
    var wrapper = factory({
      name: "test-currency-input",
      value: 100
    });
    expect(wrapper.find('[data-tid="input-currency"]').exists()).toBe(true);
  });
});
//# sourceMappingURL=input-currency.test.js.map
