import { Vue, Component, Prop } from "vue-property-decorator";
// @ts-ignore
import Verte from "verte";

@Component({
  components: {
    Verte
  }
})
export default class TcColorPicker extends Vue {
  @Prop() private value: string;
  @Prop({ default: "rgb" }) private model: string;

  private get color() {
    return this.value;
  }

  private set color(value: string) {
    this.$emit("input", value);
  }
}
