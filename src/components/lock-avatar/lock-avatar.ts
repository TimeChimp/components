import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class TcLockAvatar extends Vue {
  @Prop({ default: 25 }) private size!: number;

  private get svgStyle() {
    return {
      width: `${this.size}px`,
      height: `${this.size}px`,
      borderRadius: "100%"
    };
  }

  private get textStyle() {
    return {
      fill: "rgba(255, 255, 255, .7)",
      fontFamily: "Source Sans Pro",
      fontSize: `${this.size * 0.65}px`
    };
  }
}
