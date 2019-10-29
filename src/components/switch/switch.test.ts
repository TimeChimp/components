import { shallowMount } from '@vue/test-utils';

import TcSwitch from './switch.vue';

const factory = (values = {}) => {
    return shallowMount(TcSwitch, {
        propsData: {
            ...values,
        },
    });
};

describe('Switch', () => {
    const wrapper = factory();

    it('Renders a switch', () => {
        expect(wrapper.contains('.switch')).toBe(true);
    });
});
