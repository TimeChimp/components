import { shallowMount } from "@vue/test-utils";
import ButtonRound from "./button-round.vue";

const factory = (values = {}) => {
  return shallowMount(ButtonRound, {
    propsData: {
      ...values
    }
  });
};

describe("Button round", () => {
  it("Shows a loading spinner", () => {
    const wrapper = factory({
      loading: true
    });
    expect(wrapper.contains(".button__loader")).toBe(true);
  });

  it("Renders a button", () => {
    const wrapper = factory({
      loading: false
    });
    expect(wrapper.contains(".button")).toBe(true);
  });
});
