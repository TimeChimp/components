import { shallowMount } from "@vue/test-utils";

import VirtualList from "./virtual-list.vue";

const factory = (values = {}) => {
  return shallowMount(VirtualList, {
    propsData: {
      ...values
    }
  });
};

describe("Virtual List", () => {
  const wrapper = factory();

  it("Renders a virtual list", () => {
    expect(wrapper.contains(".virtual-list")).toBe(true);
  });
});
