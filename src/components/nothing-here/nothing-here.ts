import { Vue, Component, Prop } from "vue-property-decorator";

import { TcIcon } from "../icons";
import { TcButton } from "../button";

@Component({
  components: {
    TcButton,
    TcIcon
  }
})
export default class TcNothingHere extends Vue {
  @Prop() private title!: string;
  @Prop() private description!: string;
  @Prop() private buttonText!: string;
}
