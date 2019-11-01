import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class TcPasswordStrength extends Vue {
  @Prop() private score!: number;
}
