/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue';

import TcTabsTem from './tabs-tem.vue';

// storiesOf('Tabs TEM', module)
//     .addDecorator(withKnobs as any)
//     .add('Normal', () => ({
//         components: {
//             TcTabsTem,
//         },
//         data() {
//             return {
//                 tab: select('tab', { time: 'time', expense: 'expense', mileage: 'mileage' }, 'time'),
//             };
//         },
//         template: `
//             <tc-tabs-tem
//               v-model="tab"
//             />
//         `,
//         i18n: new VueI18n(),
//     }));

//     import { storiesOf } from "@storybook/vue";

storiesOf('Badge', module).add('Default', () => ({
    components: {
        TcTabsTem,
    },
    template: `
            <tc-tabs-tem/>
        `,
}));
