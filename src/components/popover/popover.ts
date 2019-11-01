import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class TcPopover extends Vue {
  @Prop({ default: "app" }) private type!: string;
  @Prop() private width!: string;
  @Prop() private right!: string;
  @Prop() private bottom!: string;
}
