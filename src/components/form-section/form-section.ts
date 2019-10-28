import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class TcFormSection extends Vue {
  @Prop({ required: true }) private title!: string;
  @Prop({ default: true }) private line!: boolean;
  @Prop({
    default: "m",
    validator(value) {
      return ["s", "m", "l", "xl"].indexOf(value) > -1;
    }
  })
  private size!: string;

  private get contentCol() {
    switch (this.size) {
      case "s":
        return 5;
      case "m":
        return 6;
      case "l":
        return 9;
      case "xl":
        return 9;
      default:
        return 6;
    }
  }
}
