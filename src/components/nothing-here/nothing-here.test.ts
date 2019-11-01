import { shallowMount } from "@vue/test-utils";
import TcNothingHere from "./nothing-here.vue";

const factory = (props = {}) => {
  return shallowMount(TcNothingHere, {
    propsData: {
      ...props
    }
  });
};

describe("Nothing here", () => {
  it("renders a component", () => {
    const wrapper = factory();
    expect(wrapper.find(".nothing-here").exists()).toBe(true);
  });

  it("renders a title", () => {
    const wrapper = factory({
      title: "No results"
    });
    expect(wrapper.find(".nothing-here__title").text()).toEqual("No results");
  });
});
