import { shallowMount } from "@vue/test-utils";
import TcFlag from "./flag.vue";

const factory = (values = {}) => {
  return shallowMount(TcFlag, {
    propsData: {
      ...values
    }
  });
};

describe("Flag", () => {
  it("renders a dutch flag", () => {
    const wrapper = factory({
      iso: "nl"
    });
    expect(wrapper.find(".flag-icon-nl").exists()).toBe(true);
  });

  it("renders an American flag", () => {
    const wrapper = factory({
      iso: "us"
    });
    expect(wrapper.find(".flag-icon-us").exists()).toBe(true);
  });
});
