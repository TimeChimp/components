import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class TcHelper extends Vue {
  @Prop() private text!: string;
}
