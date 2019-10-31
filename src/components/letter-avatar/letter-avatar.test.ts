import { shallowMount } from "@vue/test-utils";
import TcLetterAvatar from "./letter-avatar.vue";

const factory = (props = {}) => {
  return shallowMount(TcLetterAvatar, {
    propsData: {
      ...props
    }
  });
};

describe("Letter avatar", () => {
  const props = {
    name: "Baltus"
  };
  it("renders a component", () => {
    const wrapper = factory(props);
    expect(wrapper.find(".letter-avatar").exists()).toBe(true);
  });

  it("renders the first letter", () => {
    const wrapper = factory(props);
    expect(wrapper.find(".letter-avatar").text()).toBe("B");
  });
});
