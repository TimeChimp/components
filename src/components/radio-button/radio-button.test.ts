import { shallowMount } from "@vue/test-utils";
import TcRadioButton from "./radio-button.vue";

const factory = (props = {}) => {
  return shallowMount(TcRadioButton, {
    propsData: {
      ...props
    }
  });
};

describe("Radio button", () => {
  const props = {
    value: 1,
    name: "Radio check",
    nativeValue: 0
  };

  it("renders a component", () => {
    const wrapper = factory(props);
    expect(wrapper.find(".radio-button").exists()).toBe(true);
  });
});
