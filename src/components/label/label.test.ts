import { shallowMount } from "@vue/test-utils";
import TcLabel from "./label.vue";

const factory = (values = {}) => {
  return shallowMount(TcLabel, {
    propsData: {
      ...values
    }
  });
};

describe("Label", () => {
  it("renders a component", () => {
    const wrapper = factory();
    expect(wrapper.find(".label").exists()).toBe(true);
  });

  it("renders a title", () => {
    const wrapper = factory({
      title: "Test title"
    });
    expect(wrapper.find(".label__text").text()).toEqual("Test title");
  });
});
