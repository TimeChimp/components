import { Vue, Component, Prop } from "vue-property-decorator";
import { Status, statusTypes } from "@/common/models/types/status-label";
// @ts-ignore
import VTooltip from "v-tooltip";

Vue.use(VTooltip);

@Component({})
export default class TcStatusLabel extends Vue {
  @Prop({ default: "Registered" }) private hintTitle!: string;
  @Prop({
    default: "registered",
    validator(value) {
      return statusTypes.indexOf(value) > -1;
    }
  })
  private status: Status;
}
