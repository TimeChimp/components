import * as tslib_1 from "tslib";
import { shallowMount } from '@vue/test-utils';
import ToggleColumn from './toggle-column';
var factory = function (values) {
    if (values === void 0) { values = {}; }
    return shallowMount(ToggleColumn, {
        propsData: tslib_1.__assign({}, values),
    });
};
describe('Toggle column', function () {
    var props = {
        title: 'Test title',
        active: true,
        draggable: false,
    };
    it('renders a title', function () {
        var wrapper = factory(props);
        expect(wrapper.find('.toggle-column__title').text()).toEqual('Test title');
    });
    it('hides handlebars', function () {
        var wrapper = factory(props);
        expect(wrapper.find('.toggle-column__handle').exists()).toBe(false);
    });
});
//# sourceMappingURL=toggle-column.test.js.map