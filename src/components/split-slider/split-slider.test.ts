import { mount } from "@vue/test-utils";
import TcSplitSlider from "./split-slider.vue";

const factory = (props = {}) => {
  return mount(TcSplitSlider, {
    propsData: {
      ...props
    }
  });
};

describe("Split slider", () => {
  const props = {
    value: 36000,
    duration: 72000
  };
  it("renders a component", () => {
    const wrapper = factory(props);
    expect(wrapper.find(".split-slider").exists()).toBe(true);
  });

  it("renders the correct value", () => {
    const wrapper = factory(props);
    expect(wrapper.find('[data-tid="time"]').text()).toEqual("10:00");
  });
});
