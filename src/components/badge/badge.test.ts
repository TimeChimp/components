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
  it("renders number of notifications", () => {
    const wrapper = factory({
      value: 9
    });
    expect(wrapper.find(".badge").text()).toEqual("9");
  });
});
