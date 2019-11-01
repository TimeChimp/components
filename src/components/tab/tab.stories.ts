import { storiesOf } from '@storybook/vue';

import TcTab from './tab.vue';
import TcTabItem from '../tab-item/tab-item.vue';

storiesOf('Tabs', module).add('Default', () => ({
    components: {
        TcTab,
        TcTabItem,
    },
    template: `
            <tc-tab>
                <tc-tab-item title="Tab #1" active="true" />
                <tc-tab-item title="Tab #2" />
                <tc-tab-item title="Tab #3" />
            </tc-tab>
        `,
}));
