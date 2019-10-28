import { shallowMount } from "@vue/test-utils";

import TcIcon from "./icon.vue";

const factory = (values = {}) => {
  return shallowMount(TcIcon, {
    propsData: {
      ...values
    }
  });
};

describe("Icon", () => {
  it("Renders a icon", () => {
    const wrapper = factory({
      name: "arrow"
    });

    expect(wrapper.contains("svg")).toBe(true);
  });
});
