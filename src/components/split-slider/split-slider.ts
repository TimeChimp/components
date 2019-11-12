import { Vue, Component, Prop } from "vue-property-decorator";
import { formatTime } from "@timechimp-bv/helper-functions";
import VueSlider from "vue-slider-component";

@Component({
  components: {
    VueSlider
  }
})
export default class TcSlider extends Vue {
  @Prop({ required: true }) private value: number;
  @Prop() private max: number;

  private formatTime(value: number) {
    return `${formatTime(value, "HH:mm")}`;
  }
}
