import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class TcSpinner extends Vue {
  @Prop({ default: false }) private show!: boolean;
}
