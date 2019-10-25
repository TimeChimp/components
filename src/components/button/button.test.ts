import { shallowMount } from "@vue/test-utils";
import Button from "./button.vue";

const factory = (values = {}) => {
  return shallowMount(Button, {
    slots: {
      default: "<span>Test</span>"
    },
    propsData: {
      ...values
    }
  });
};

describe("Button", () => {
  it("Renders a button", () => {
    const wrapper = factory({
      loading: false
    });

    expect(wrapper.contains(".button")).toBe(true);
  });

  it("Shows a loading spinner", () => {
    const wrapper = factory({
      loading: true
    });

    expect(wrapper.contains(".button__loader")).toBe(true);
  });

  it("Renders a slot", () => {
    const wrapper = factory({
      loading: false
    });

    const slot = wrapper.find("span");
    expect(slot.text()).toBe("Test");
  });
});
