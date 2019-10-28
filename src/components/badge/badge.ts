import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class TcBadge extends Vue {
  @Prop() private value!: any;
  @Prop({ default: "medium" }) private size!: string;
}
