import { shallowMount } from "@vue/test-utils";
import TcProgressBar from "./progress-bar.vue";

const factory = (props = {}) => {
  return shallowMount(TcProgressBar, {
    propsData: {
      ...props
    }
  });
};

describe("Progress bar", () => {
  const props = {
    size: "medium",
    value: 30
  };

  it("renders a component", () => {
    const wrapper = factory(props);
    expect(wrapper.find(".progress-bar").exists()).toBe(true);
  });

  it("renders a size", () => {
    const wrapper = factory(props);
    expect(wrapper.find(".progress-bar__medium").exists()).toBe(true);
  });
});
