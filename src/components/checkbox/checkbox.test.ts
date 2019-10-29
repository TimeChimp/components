import { shallowMount } from "@vue/test-utils";
import Checkbox from "./checkbox.vue";

const factory = (values = {}) => {
  return shallowMount(Checkbox, {
    propsData: {
      ...values
    }
  });
};

describe("Checkbox", () => {
  it("Renders a checkbox component", () => {
    const wrapper = factory();
    expect(wrapper.contains(".tc-checkbox")).toBe(true);
  });
});
