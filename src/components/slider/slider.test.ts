import { shallowMount } from "@vue/test-utils";
import TcSlider from "./slider.vue";

const factory = (props = {}) => {
  return shallowMount(TcSlider, {
    propsData: {
      ...props
    }
  });
};

describe("Slider", () => {
  it("renders a component", () => {
    const wrapper = factory();
    expect(wrapper.find(".slider").exists()).toBe(true);
  });
});
