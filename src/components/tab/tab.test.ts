import { shallowMount } from '@vue/test-utils';

import TcTabs from './tab.vue';

const factory = (values = {}) => {
    return shallowMount(TcTabs, {
        slots: {
            default: `
                <p class="slot">test #1</p>
                <p class="slot">test #2</p>
                <p class="slot">test #3</p>
            `,
        },
        propsData: {
            ...values,
        },
    });
};

describe('Tabs', () => {
    const wrapper = factory();

    it('Renders a Tabs component', () => {
        expect(wrapper.contains('.tabs')).toBe(true);
    });

    it('Renders a list of tab items', () => {
        const list = wrapper.findAll('.slot');
        expect(list.length).toBe(3);
    });
});
