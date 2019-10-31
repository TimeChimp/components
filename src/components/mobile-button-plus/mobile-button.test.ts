import { shallowMount } from "@vue/test-utils";
import TcMobilePlusButton from "./mobile-button-plus.vue";

const factory = (props = {}) => {
  return shallowMount(TcMobilePlusButton, {
    propsData: {
      ...props
    }
  });
};

describe("Mobile plus button", () => {
  it("renders a component", () => {
    const wrapper = factory();
    expect(wrapper.find(".mobile-button-plus").exists()).toBe(true);
  });
});
