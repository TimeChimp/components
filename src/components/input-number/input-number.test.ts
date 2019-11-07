import { shallowMount } from "@vue/test-utils";

import TcInputNumber from "./input-number.vue";

const factory = (values = {}) => {
  return shallowMount(TcInputNumber, {
    propsData: {
      ...values
    }
  });
};

describe("Input number", () => {
  it("Renders a component", () => {
    const wrapper = factory({
      name: "test-number-input",
      value: 100
    });

    expect(wrapper.find(".input-number").exists()).toBe(true);
  });
});
