import { shallowMount } from '@vue/test-utils';
import ToggleColumn from './toggle-column';

const factory = (values = {}) => {
    return shallowMount(ToggleColumn, {
        propsData: {
            ...values,
        },
    });
};

describe('Toggle column', () => {
    const props = {
        title: 'Test title',
        active: true,
        draggable: false,
    };

    it('renders a title', () => {
        const wrapper = factory(props);

        expect(wrapper.find('.toggle-column__title').text()).toEqual('Test title');
    });

    it('hides handlebars', () => {
        const wrapper = factory(props);

        expect(wrapper.find('.toggle-column__handle').exists()).toBe(false);
    });
});
