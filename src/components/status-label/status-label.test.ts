import { shallowMount } from "@vue/test-utils";
import TcStatusLabel from "./status-label.vue";

const factory = (values = {}) => {
  return shallowMount(TcStatusLabel, {
    propsData: {
      ...values
    }
  });
};

describe("Status label", () => {
  it("Renders a status label component", () => {
    const wrapper = factory();
    expect(wrapper.contains(".status-label")).toBe(true);
  });

  it("Renders the correct color", () => {
    const wrapper = factory({
      status: "approved"
    });
    expect(wrapper.contains(".status-label--green")).toBe(true);
  });
});
