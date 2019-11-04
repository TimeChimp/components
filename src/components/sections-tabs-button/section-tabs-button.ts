import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class TcSectionTabsButton extends Vue {
  @Prop({ required: true }) private title!: string;
  @Prop({ default: true }) private line!: boolean;
  @Prop({ default: false }) private active!: boolean;
}
