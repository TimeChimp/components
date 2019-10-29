import { shallowMount } from "@vue/test-utils";
import TcLabelStatus from "./label-status.vue";

const factory = (values = {}) => {
  return shallowMount(TcLabelStatus, {
    propsData: {
      ...values
    }
  });
};

describe("Label status", () => {
  it("renders a component", () => {
    const wrapper = factory({
      status: 0
    });
    expect(wrapper.find(".label-status").exists()).toBe(true);
  });

  it("renders an approved label", () => {
    const wrapper = factory({
      status: 2
    });
    expect(wrapper.find(".label-status__approved").exists()).toBe(true);
  });
});
