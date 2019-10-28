import { shallowMount } from "@vue/test-utils";
import TcFormSection from "./form-section.vue";

const factory = (values = {}) => {
  return shallowMount(TcFormSection, {
    propsData: {
      ...values
    }
  });
};

describe("Form section", () => {
  it("renders a component", () => {
    const wrapper = factory({
      title: "Test title"
    });
    expect(wrapper.find(".form-section").exists()).toBe(true);
  });

  it("renders a title", () => {
    const wrapper = factory({
      title: "Test title"
    });
    expect(wrapper.find(".form-section__title").text()).toEqual("Test title");
  });

  it("renders a small size", () => {
    const wrapper = factory({
      title: "Test title",
      size: "s"
    });
    expect(wrapper.find(".col-5").exists()).toBe(true);
  });
});
