import { Vue, Component, Prop } from "vue-property-decorator";

import { TcBadge } from "../badge";
import { TcIcon } from "../icons";

@Component({
  components: {
    TcBadge,
    TcIcon
  }
})
export default class TcButton extends Vue {
  @Prop() private badge!: string;
  @Prop() private eye!: string;
  @Prop() private loading!: boolean;
  @Prop() private buttonClass!: string;
}
