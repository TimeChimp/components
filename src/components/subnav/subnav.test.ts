import { shallowMount } from "@vue/test-utils";
import TcSubnav from "./subnav.vue";

const factory = (values = {}) => {
  return shallowMount(TcSubnav, {
    propsData: {
      ...values
    }
  });
};

describe("Subnav", () => {
  it("Renders a component", () => {
    const wrapper = factory();
    expect(wrapper.contains(".subnav")).toBe(true);
  });
});
