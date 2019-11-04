import { Vue, Component, Prop } from "vue-property-decorator";
import { formatUppercase } from "@timechimp-bv/helper-functions";

@Component({})
export default class TcSliderSwitch extends Vue {
  @Prop() public groups!: string[];
  @Prop() public disabled!: boolean;
  @Prop({ default: 0 }) public value!: number;
  @Prop({ default: true }) public trueValue!: string | number | boolean;
  @Prop({ default: false }) public falseValue!: string | number | boolean;

  private isMouseDown: boolean = false;
  private internalValue: number = this.value || 0;

  private get selected() {
    return this.internalValue;
  }

  private uppercase(value: string): string {
    return formatUppercase(value);
  }

  private set selected(value) {
    this.internalValue = value;
    this.$emit("input", value);
  }
}
