import { Vue, Component, Prop } from "vue-property-decorator";
import {
  formatCurrency,
  guid,
  unformatCurrency
} from "@timechimp-bv/helper-functions";

@Component({})
export default class TcInputCurrency extends Vue {
  @Prop() private name!: string;
  @Prop() private value!: number;
  @Prop() private placeholder!: string;
  @Prop() private validate!: string;
  @Prop() private disabled!: boolean;
  @Prop() private autofocus!: boolean;
  @Prop() private maxlength!: number;
  @Prop() private tabindex!: string;
  @Prop() private currencyObject?: any;
  @Prop() private numberFormat?: any;

  private internalName: string = this.name || guid();

  private get formattedValue() {
    return this.value
      ? formatCurrency(this.value, this.currencyObject, this.numberFormat)
      : "";
  }

  private formatCurrency() {
    const el = this.$refs && (this.$refs.currencyInput as HTMLInputElement);

    if (el) {
      const value = unformatCurrency(el.value);
      el.value = formatCurrency(value, this.currencyObject, this.numberFormat);
      this.$emit("input", value);
    }

    this.$emit("blur");
  }
}
