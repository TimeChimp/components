import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class TcFormField extends Vue {
  @Prop() private title!: string;
  @Prop() private subtext!: string;
  @Prop() private disabled!: boolean;
  @Prop() private required!: boolean;
}
