import { mount } from "@vue/test-utils";

import TcInputTime from "./input-time.vue";

const factory = (values = {}) => {
  return mount(TcInputTime, {
    propsData: {
      ...values
    }
  });
};

describe("Input time", () => {
  it("Renders a component", () => {
    const wrapper = factory({
      name: "test-time-input",
      value: 100
    });

    expect(wrapper.find(".input-time").exists()).toBe(true);
  });
});
