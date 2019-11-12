import * as tslib_1 from "tslib";
import { shallowMount } from '@vue/test-utils';
import TcTabsTem from './tabs-tem.vue';
var factory = function (values) {
    if (values === void 0) { values = {}; }
    return shallowMount(TcTabsTem, {
        propsData: tslib_1.__assign({}, values),
    });
};
describe('Tabs TEM', function () {
    var wrapper = factory();
    it('Renders a Tabs TEM', function () {
        expect(wrapper.contains('.tabs-tem')).toBe(true);
    });
    it('Renders three icons', function () {
        var icons = wrapper.findAll('svg');
        expect(icons.length).toBe(3);
    });
});
//# sourceMappingURL=tabs-tem.test.js.map