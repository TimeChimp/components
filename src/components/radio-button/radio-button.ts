import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class TcRadioButton extends Vue {
  @Prop({ required: true }) private value!: string;
  @Prop({ required: true }) private nativeValue: any;
  @Prop({ required: true }) private name!: string;
  @Prop() private disabled!: boolean;

  private get internalValue() {
    return this.value;
  }

  private set internalValue(value) {
    this.$emit("input", value);
  }
}
