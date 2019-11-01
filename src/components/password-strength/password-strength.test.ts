import { shallowMount } from "@vue/test-utils";
import TcPasswordStrength from "./password-strength.vue";

const factory = (props = {}) => {
  return shallowMount(TcPasswordStrength, {
    propsData: {
      ...props
    }
  });
};

describe("Password strength", () => {
  it("renders a component", () => {
    const wrapper = factory();
    expect(wrapper.find(".password-strength").exists()).toBe(true);
  });

  it("renders score color", () => {
    const wrapper = factory({
      score: 4
    });
    expect(wrapper.find(".password-strength--green").exists()).toBe(true);
  });
});
