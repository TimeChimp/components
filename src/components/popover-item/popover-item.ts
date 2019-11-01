import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class TcPopoverItem extends Vue {
  @Prop({ required: true }) private title!: string;
  @Prop() private route!: string;
  @Prop() private link!: string;
  @Prop() private warning!: boolean;
}
