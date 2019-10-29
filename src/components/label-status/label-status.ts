import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class TcLabelStatus extends Vue {
  @Prop({ required: true }) private status!: string;
}
