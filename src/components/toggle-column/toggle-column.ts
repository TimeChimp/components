import { Vue, Component, Prop } from "vue-property-decorator";
import { formatUppercase } from "@timechimp-bv/helper-functions";

import { TcIcon } from "../icons";

@Component({
  components: {
    TcIcon
  }
})
export default class TcToggleColumn extends Vue {
  @Prop({ required: true }) private title!: string;
  @Prop({ default: false }) private draggable!: boolean;
  @Prop({ required: true }) private active!: boolean;

  private get uppercaseTitle(): string {
    return formatUppercase(this.title);
  }
}
