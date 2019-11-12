import * as tslib_1 from "tslib";
import { shallowMount } from '@vue/test-utils';
import TcTabs from './tab.vue';
var factory = function (values) {
    if (values === void 0) { values = {}; }
    return shallowMount(TcTabs, {
        slots: {
            default: "\n                <p class=\"slot\">test #1</p>\n                <p class=\"slot\">test #2</p>\n                <p class=\"slot\">test #3</p>\n            ",
        },
        propsData: tslib_1.__assign({}, values),
    });
};
describe('Tabs', function () {
    var wrapper = factory();
    it('Renders a Tabs component', function () {
        expect(wrapper.contains('.tabs')).toBe(true);
    });
    it('Renders a list of tab items', function () {
        var list = wrapper.findAll('.slot');
        expect(list.length).toBe(3);
    });
});
//# sourceMappingURL=tab.test.js.map