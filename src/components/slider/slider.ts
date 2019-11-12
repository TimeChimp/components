import { Vue, Component, Prop } from "vue-property-decorator";
// import VueSlider from "vue-slider-component";
import { formatTime } from "@timechimp-bv/helper-functions";

@Component({
  components: {
    //  VueSlider
  }
})
export default class TcSlider extends Vue {
  @Prop() private value: number;
  @Prop({
    validator(value) {
      return !value || ["time"].indexOf(value) > -1;
    }
  })
  private type!: string;

  private formatTime(value: number) {
    return `${formatTime(value * 3600, "HH:mm")}u`;
  }
}
