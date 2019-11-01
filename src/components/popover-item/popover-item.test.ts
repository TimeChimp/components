import { shallowMount } from "@vue/test-utils";
import TcPopoverItem from "./popover-item.vue";

const factory = (props = {}) => {
  return shallowMount(TcPopoverItem, {
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
