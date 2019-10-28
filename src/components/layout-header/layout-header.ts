import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class TcLayoutHeader extends Vue {
  @Prop() private title!: string;
}
