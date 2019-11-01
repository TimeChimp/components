import { storiesOf } from '@storybook/vue';

import TcTabItem from './tab-item.vue';

storiesOf('Tab Item', module).add('Default', () => ({
    components: {
        TcTabItem,
    },
    template: `
            <div>
                <h2>Inactive</h2>
                <tc-tab-item title="Tab #1" />

                <h2>Active</h2>
                <tc-tab-item title="Tab #1" active="true" />
            </div>
        `,
}));
