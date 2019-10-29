import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({})
export default class TcTabsTem extends Vue {
    @Prop() private expenses!: boolean;
    @Prop() private mileages!: boolean;
    @Prop({
        default: 'time',
        validator(value) {
            return ['time', 'expense', 'mileage'].indexOf(value) > -1;
        },
    })
    private value!: string;

    private get tab(): string {
        return this.value;
    }

    private set tab(value: string) {
        this.$emit('input', value);
    }
}
