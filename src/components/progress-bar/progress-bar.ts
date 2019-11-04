import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class TcProgressBar extends Vue {
  @Prop({
    validator(value) {
      return value >= 0 && value <= 100;
    }
  })
  public value!: number;
  @Prop({
    default: "medium",
    validator(value) {
      return ["small", "medium", "large"].indexOf(value) > -1;
    }
  })
  private size!: string;
}
