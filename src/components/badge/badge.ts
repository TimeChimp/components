import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class TcBadge extends Vue {
  @Prop() private value!: any;
  @Prop({
    default: "medium",
    validator(value) {
      return ["small", "medium", "large"].indexOf(value) > -1;
    }
  })
  private size!: string;
  @Prop({
    default: "top-right",
    validator(value) {
      return ["top-right", "right"].indexOf(value) > -1;
    }
  })
  private position!: string;
}
