import { Vue, Component, Prop } from "vue-property-decorator";
import { guid, tryParseFloat } from "@timechimp-bv/helper-functions";

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
  @Prop({ default: false }) private readonly!: boolean;

  private internalName: string = this.name || guid();

  private formatNumber(e: any) {
    const value = e.target.value ? e.target.value.replace(",", ".") : "0";
    const float = tryParseFloat(value, 0);

    e.target.value = float;

    this.$emit("input", float);
    this.$emit("blur", float);
  }
}
