import { Vue, Component, Prop } from "vue-property-decorator";

import { TcIcon } from "../icons";

@Component({
  components: {
    TcIcon
  }
})
export default class TcSubnavSectionItem extends Vue {
  @Prop() private route!: string;
  @Prop() private app!: string;
  @Prop() private permission!: string;
  @Prop() private title!: string;
  @Prop() private active!: boolean;
}
