import { shallowMount } from "@vue/test-utils";
import ButtonGroup from "./button-group.vue";

const factory = (values = {}) => {
  return shallowMount(ButtonGroup, {
    propsData: {
      ...values
    }
  });
};

describe("Button group", () => {
  it("Renders a button group", () => {
    const wrapper = factory();
    expect(wrapper.contains(".button-group")).toBe(true);
  });
});
