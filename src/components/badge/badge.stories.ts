/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";

import TcButton from "../button.vue";
import TcBadge from "../badge.vue";

// storiesOf('Form Elements|Badge', module)
//     .addDecorator(withKnobs as any)
//     .add('Normal', () => ({
//         components: {
//             TcBadge,
//             TcButton,
//         },
//         data() {
//             return {
//                 value: text('value', '8'),
//                 size: select('size', { small: 'small', medium: 'medium', large: 'large'}, 'medium'),
//                 position: select('position', { 'top-right': 'top-right', 'right' : 'right' }, 'top-right'),
//             };
//         },
//         template: `
//         <tc-button style="position: relative">
//             Badge
//             <tc-badge
//                 :value="value"
//                 :size="size"
//                 :position="position"
//             />
//         </tc-button>
//     `,
//     }));

// storiesOf('Badge', module).add('Default', () => ({
//     components: {
//         TcButton,
//     },
//     template: `
//             <tc-button :button-class="['button__primary']">
//                 Button
//             />
//         `,
// }));
