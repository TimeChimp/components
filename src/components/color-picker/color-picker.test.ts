import { shallowMount } from "@vue/test-utils";
import ColorPicker from "./color-picker.vue";

const factory = (values = {}) => {
  return shallowMount(ColorPicker, {
    propsData: {
      ...values
    }
  });
};

describe("Color picker", () => {
  it("Renders a component", () => {
    const wrapper = factory();
    expect(wrapper.contains('[data-tid="color-picker"]')).toBe(true);
  });
});
