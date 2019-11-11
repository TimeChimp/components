import { shallowMount } from "@vue/test-utils";
import InputTimeDate from "./input-time-date.vue";

const factory = (values = {}) => {
  return shallowMount(InputTimeDate, {
    propsData: {
      ...values
    }
  });
};

describe("InputTimeDate", () => {
  it("Renders without crashing", () => {
    const wrapper = factory();
    expect(wrapper.contains(".input-time-date")).toBe(true);
  });
});
