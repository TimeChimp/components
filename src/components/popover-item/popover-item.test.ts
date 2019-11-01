import { shallowMount } from "@vue/test-utils";
import TcPopover from "./popover.vue";

const factory = (props = {}) => {
  return shallowMount(TcPopover, {
    propsData: {
      ...props
    }
  });
};

describe("Popover item", () => {
  const props = {
    title: "Test title"
  };

  it("renders a component", () => {
    const wrapper = factory(props);
    expect(wrapper.find(".popover-item").exists()).toBe(true);
  });

  it("renders a title", () => {
    const wrapper = factory(props);
    expect(wrapper.find(".popover-item__title").text()).toEqual(props.title);
  });
});
