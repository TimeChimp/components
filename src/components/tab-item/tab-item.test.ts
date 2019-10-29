import { shallowMount } from '@vue/test-utils';

import TcTabItem from './tab-item.vue';

const factory = (values = {}) => {
    return shallowMount(TcTabItem, {
        propsData: {
            ...values,
        },
    });
};

describe('Tab Item', () => {
    const wrapper = factory();

    it('Renders a tab item', () => {
        expect(wrapper.contains('.tab-item')).toBe(true);
    });
});
