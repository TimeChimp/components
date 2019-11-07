import { shallowMount } from "@vue/test-utils";

import TcInputCurrency from "./input-currency.vue";

const factory = (values = {}) => {
  return shallowMount(TcInputCurrency, {
    propsData: {
      ...values
    }
  });
};

describe("Input currency", () => {
  it("Renders a component", () => {
    const wrapper = factory({
      name: "test-currency-input",
      value: 100
    });

    expect(wrapper.find('[data-tid="currency-input"]').exists()).toBe(true);
  });
});
