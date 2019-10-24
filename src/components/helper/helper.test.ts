import { shallowMount } from "@vue/test-utils";
import TcHelper from "./helper.vue";

const factory = (values = {}) => {
  return shallowMount(TcHelper, {
    propsData: {
      ...values
    }
  });
};

describe("Helper", () => {
  it("renders a component", () => {
    const wrapper = factory({
      text: "Something cool"
    });
    expect(wrapper.find(".helper").exists()).toBe(true);
  });

  // it('renders a helper text', () => {
  //   const wrapper = factory({
  //     text: 'Something cool',
  //   });
  //   expect(wrapper.find('.spinner').exists()).toBe(true);
  // });
});
