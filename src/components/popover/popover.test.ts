import { shallowMount } from "@vue/test-utils";
import TcPopover from "./popover.vue";

const factory = (props = {}) => {
  return shallowMount(TcPopover, {
    propsData: {
      ...props
    }
  });
};

describe("Popover", () => {
  it("renders a component", () => {
    const wrapper = factory();
    expect(wrapper.find(".popover").exists()).toBe(true);
  });
});
