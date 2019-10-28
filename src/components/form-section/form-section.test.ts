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
    const wrapper = factory();
    expect(wrapper.find(".form-section").exists()).toBe(true);
  });
});
