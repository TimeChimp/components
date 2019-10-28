import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class TcLabel extends Vue {
  @Prop() private title!: string;
  @Prop({
    default: "medium",
    validator(value) {
      return ["micro", "small", "medium", "large"].indexOf(value) > -1;
    }
  })
  private size!: string;
}
