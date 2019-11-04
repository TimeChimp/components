import { shallowMount, createLocalVue } from "@vue/test-utils";
import TcSubnavSectionItem from "./subnav-section-item.vue";
import VueRouter from "vue-router";

const localVue = createLocalVue();
localVue.use(VueRouter);
const router = new VueRouter();

const factory = (values = {}) => {
  return shallowMount(TcSubnavSectionItem, {
    propsData: {
      ...values
    },
    localVue,
    router
  });
};

describe("Subnav section item", () => {
  const props = {
    title: "Test title"
  };

  it("Renders a component", () => {
    const wrapper = factory(props);
    expect(wrapper.contains(".subnav-section-item")).toBe(true);
  });

  it("Renders a title", () => {
    const wrapper = factory(props);
    expect(wrapper.find(".subnav-section-item").text()).toEqual(props.title);
  });
});
