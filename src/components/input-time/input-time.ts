import { Vue, Component, Prop } from "vue-property-decorator";
import { guid, formatTime, formatFloat } from "@timechimp-bv/helper-functions";

@Component({})
export default class TcInputTime extends Vue {
  @Prop() private name!: string;
  @Prop() private value!: number;
  @Prop({ default: "" }) private placeholder!: string;
  @Prop() private validate!: string;
  @Prop() private disabled!: boolean;
  @Prop() private autofocus!: boolean;
  @Prop() private maxlength!: number;
  @Prop() private tabindex!: string;
  @Prop() private timeFormat?: any;

  private internalName: string = this.name || guid();
  private emptyValue: boolean = false;

  private get hasBottomSlot() {
    return !!this.$slots["bottom-addon"];
  }

  private isEmpty(value: any): boolean {
    return value === null || value === "";
  }

  private get formattedValue() {
    return !this.isEmpty(this.value)
      ? formatTime(this.value, this.timeFormat)
      : "";
  }

  private formatValue(e: any) {
    const value = e.target.value;
    const timeValue = formatFloat(value, false) * 3600;

    this.emptyValue = this.isEmpty(timeValue);

    this.$emit("input", timeValue);
    this.$emit("blur", timeValue);
  }
}
