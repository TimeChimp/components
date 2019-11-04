import { shallowMount } from "@vue/test-utils";
import TcPagination from "./pagination.vue";

const factory = (props = {}) => {
  return shallowMount(TcPagination, {
    propsData: {
      ...props
    }
  });
};

describe("Pagination", () => {
  it("renders a component", () => {
    const wrapper = factory();
    expect(wrapper.find(".pagination").exists()).toBe(true);
  });
});
