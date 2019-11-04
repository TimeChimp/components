import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class TcSubnavSection extends Vue {
  @Prop() private title!: string;
}
