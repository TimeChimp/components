import { shallowMount } from "@vue/test-utils";
import TcLayoutHeader from "./layout-header.vue";

const factory = (values = {}) => {
  return shallowMount(TcLayoutHeader, {
    propsData: {
      ...values
    }
  });
};

describe("Layout header", () => {
  it("renders a component", () => {
    const wrapper = factory({
      title: "Test title"
    });
    expect(wrapper.find(".layout-header").exists()).toBe(true);
  });
});
