import { shallowMount } from "@vue/test-utils";
import Badge from "./badge.vue";

const factory = (values = {}) => {
  return shallowMount(Badge, {
    propsData: {
      ...values
    }
  });
};

describe("Badge", () => {
  const wrapper = factory({
    value: 9
  });

  it("Renders a badge", () => {
    expect(wrapper.contains(".badge")).toBe(true);
  });

  it("Renders number of notifications", () => {
    expect(wrapper.find(".badge").text()).toEqual("9");
  });
});
