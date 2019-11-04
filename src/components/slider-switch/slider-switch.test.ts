import { shallowMount } from "@vue/test-utils";
import TcSliderSwitch from "./slider-switch.vue";

const factory = (props = {}) => {
  return shallowMount(TcSliderSwitch, {
    propsData: {
      ...props
    }
  });
};

describe("Slider switch", () => {
  it("renders a component", () => {
    const wrapper = factory({
      groups: ["Vue", "React"]
    });
    expect(wrapper.find(".slider-switch").exists()).toBe(true);
  });
});
