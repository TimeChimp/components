import { shallowMount } from "@vue/test-utils";
import TcFormField from "./form-field.vue";

const factory = (values = {}) => {
  return shallowMount(TcFormField, {
    propsData: {
      ...values
    }
  });
};

describe("Form field", () => {
  it("renders a component", () => {
    const wrapper = factory();
    expect(wrapper.find(".form-field").exists()).toBe(true);
  });
});
