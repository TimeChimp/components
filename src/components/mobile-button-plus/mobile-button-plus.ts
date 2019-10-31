import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class TcMobileButtonPlus extends Vue {
  @Prop({
    default: "time",
    validator(value) {
      return ["time", "expense", "mileage"].indexOf(value) > -1;
    }
  })
  private type!: string;
}
