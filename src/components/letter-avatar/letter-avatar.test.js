import * as tslib_1 from "tslib";
import { shallowMount } from "@vue/test-utils";
import TcLetterAvatar from "./letter-avatar.vue";
var factory = function(props) {
  if (props === void 0) {
    props = {};
  }
  return shallowMount(TcLetterAvatar, {
    propsData: tslib_1.__assign({}, props)
  });
};
describe("Letter avatar", function() {
  var props = {
    name: "Baltus"
  };
  it("renders a component", function() {
    var wrapper = factory(props);
    expect(wrapper.find(".letter-avatar").exists()).toBe(true);
  });
  it("renders the first letter", function() {
    var wrapper = factory(props);
    expect(wrapper.find(".letter-avatar").text()).toBe("B");
  });
});
//# sourceMappingURL=letter-avatar.test.js.map
