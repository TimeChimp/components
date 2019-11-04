import { shallowMount } from "@vue/test-utils";
import TcSectionTabsButton from "./section-tabs-button.vue";

const factory = (props = {}) => {
  return shallowMount(TcSectionTabsButton, {
    propsData: {
      ...props
    }
  });
};

describe("Section tabs button", () => {
  const props = {
    title: "Test section"
  };

  it("renders a component", () => {
    const wrapper = factory(props);
    expect(wrapper.find(".section-tabs-button").exists()).toBe(true);
  });

  it("renders a title", () => {
    const wrapper = factory(props);
    expect(wrapper.find(".section-tabs-button__inner").text()).toBe(
      props.title
    );
  });
});
