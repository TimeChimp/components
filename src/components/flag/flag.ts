import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class TcFlag extends Vue {
  @Prop() private iso!: string;

  private get flagIconClass() {
    return `flag-icon-${this.iso}`;
  }
}
