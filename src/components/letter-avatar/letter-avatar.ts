import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class TcLetterAvatar extends Vue {
  @Prop({ default: 50 }) private size!: number;
  @Prop({ required: true }) private name!: string;

  private get avatarLetter(): string {
    return this.name ? this.name[0].toUpperCase() : "?";
  }

  private get svgStyle() {
    const letterIndex = this.avatarLetter.charCodeAt(0) - 64;
    const hue = (360 / 26) * letterIndex;
    const backgroundColor = `hsl(${hue}, 68%, 48%)`;

    return {
      width: `${this.size}px`,
      height: `${this.size}px`,
      borderRadius: "100%",
      background: backgroundColor
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
