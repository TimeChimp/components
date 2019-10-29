import { shallowMount } from "@vue/test-utils";
import BackButton from "./back-button.vue";

const factory = (values = {}) => {
  return shallowMount(BackButton, {
    data() {
      return {
        ...values
      };
    }
  });
};

describe("Back button", () => {
  it("renders a div", () => {
    const wrapper = factory();
    expect(wrapper.contains("div")).toBe(true);
  });
});
