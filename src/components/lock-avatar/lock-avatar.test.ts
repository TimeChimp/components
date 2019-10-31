import { shallowMount } from "@vue/test-utils";
import TcLockAvatar from "./lock-avatar.vue";

const factory = (props = {}) => {
  return shallowMount(TcLockAvatar, {
    propsData: {
      ...props
    }
  });
};

describe("lock avatar", () => {
  const props = {
    name: "Baltus"
  };
  it("renders a component", () => {
    const wrapper = factory(props);
    expect(wrapper.find(".lock-avatar").exists()).toBe(true);
  });
});
