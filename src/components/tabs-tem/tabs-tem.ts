import { Vue, Component, Prop } from 'vue-property-decorator';

type View = 'time' | 'expense' | 'mileage';

const TimeIcon = () => import('./icons/time.vue');
const ExpenseIcon = () => import('./icons/expense.vue');
const MileageIcon = () => import('./icons/mileage.vue');

@Component({
    components: {
        TimeIcon,
        ExpenseIcon,
        MileageIcon,
    },
})
export default class TcTabsTem extends Vue {
    @Prop({ default: 'time' }) private value!: View;

    private get tab(): View {
        return this.value;
    }

    private set tab(value: View) {
        this.$emit('input', value);
    }
}
