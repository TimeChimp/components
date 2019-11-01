import { Vue, Component, Prop, Watch } from 'vue-property-decorator';

@Component({})
export default class TcSwitch extends Vue {
    @Prop() public value!: string | number | boolean;
    @Prop() public disabled!: boolean;
    @Prop({ default: true }) public trueValue!: string | number | boolean;
    @Prop({ default: false }) public falseValue!: string | number | boolean;

    private isMouseDown: boolean = false;

    private get internalValue() {
        return this.value;
    }

    private set internalValue(value) {
        this.$emit('input', value);
    }
}
