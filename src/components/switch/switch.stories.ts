import { storiesOf } from '@storybook/vue';

import TcSwitch from './switch.vue';

storiesOf('Switch', module).add('Default', () => ({
    components: {
        TcSwitch,
    },
    template: `
            <tc-switch />
        `,
}));
