import { storiesOf } from '@storybook/vue';

import TcTabsTem from './tabs-tem.vue';

storiesOf('Navigation|Tabs TEM', module).add('Default', () => ({
    components: {
        TcTabsTem,
    },
    template: `
            <tc-tabs-tem />
        `,
}));
