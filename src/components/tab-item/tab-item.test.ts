import { shallowMount } from "@vue/test-utils";

import TcTabItem from "./tab-item.vue";

const factory = (props = {}) => {
  return shallowMount(TcTabItem, {
    propsData: {
      ...props
    }
  });
};

describe("Tab Item", () => {
  const props = {
    title: "Test title"
  };
  const wrapper = factory(props);

  it("Renders a tab item", () => {
    expect(wrapper.contains(".tab-item")).toBe(true);
  });

  it("Renders a title", () => {
    expect(wrapper.find(".tab-item__title").text()).toEqual(props.title);
  });
});
