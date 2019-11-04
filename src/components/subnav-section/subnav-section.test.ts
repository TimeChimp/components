import { shallowMount } from "@vue/test-utils";
import TcSubnavSection from "./subnav-section.vue";

const factory = (values = {}) => {
  return shallowMount(TcSubnavSection, {
    propsData: {
      ...values
    }
  });
};

describe("Subnav section", () => {
  const props = {
    title: "Test title"
  };

  it("Renders a component", () => {
    const wrapper = factory(props);
    expect(wrapper.contains(".subnav-section")).toBe(true);
  });

  it("Renders a title", () => {
    const wrapper = factory(props);
    expect(wrapper.find(".subnav-section__title").text()).toEqual(props.title);
  });
});
