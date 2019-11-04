import { shallowMount } from "@vue/test-utils";
import TcTimer from "./timer.vue";

const factory = (values = {}) => {
  return shallowMount(TcTimer, {
    propsData: {
      ...values
    }
  });
};

describe("Timer", () => {
  it("Renders a component", () => {
    const wrapper = factory();
    expect(wrapper.contains(".timer")).toBe(true);
  });
});
