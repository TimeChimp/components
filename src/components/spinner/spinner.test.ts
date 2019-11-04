import { shallowMount } from "@vue/test-utils";
import TcSpinner from "./spinner.vue";

const factory = (props = {}) => {
  return shallowMount(TcSpinner, {
    propsData: {
      ...props
    }
  });
};

describe("Spinner", () => {
  it("renders a component", () => {
    const wrapper = factory({
      show: true
    });
    expect(wrapper.find(".spinner").exists()).toBe(true);
  });

  it("Hides a component", () => {
    const wrapper = factory({
      show: false
    });
    expect(wrapper.find(".spinner").exists()).toBe(false);
  });
});
