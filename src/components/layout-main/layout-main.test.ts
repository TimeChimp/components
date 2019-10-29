import { shallowMount } from "@vue/test-utils";
import TcLayoutMain from "./layout-main.vue";

const factory = (values = {}) => {
  return shallowMount(TcLayoutMain, {
    propsData: {
      ...values
    }
  });
};

describe("Layout main", () => {
  it("renders a component", () => {
    const wrapper = factory();
    expect(wrapper.find(".layout-main").exists()).toBe(true);
  });
});
