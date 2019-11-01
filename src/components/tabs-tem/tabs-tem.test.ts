import { shallowMount } from '@vue/test-utils';

import TcTabsTem from './tabs-tem.vue';

const factory = (values = {}) => {
    return shallowMount(TcTabsTem, {
        propsData: {
            ...values,
        },
    });
};

describe('Tabs TEM', () => {
    const wrapper = factory();

    it('Renders a Tabs TEM', () => {
        expect(wrapper.contains('.tabs-tem')).toBe(true);
    });

    it('Renders three icons', () => {
        const icons = wrapper.findAll('svg');
        expect(icons.length).toBe(3);
    });
});
