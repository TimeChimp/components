import * as tslib_1 from "tslib";
import { shallowMount } from "@vue/test-utils";
import TcPagination from "./pagination.vue";
var factory = function(props) {
  if (props === void 0) {
    props = {};
  }
  return shallowMount(TcPagination, {
    propsData: tslib_1.__assign({}, props)
  });
};
describe("Pagination", function() {
  it("renders a component", function() {
    var wrapper = factory();
    expect(wrapper.find(".pagination").exists()).toBe(true);
  });
});
//# sourceMappingURL=pagination.test.js.map
