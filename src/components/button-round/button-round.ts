import { Component, Prop } from "vue-property-decorator";

import { TcButton } from "../button";

@Component({})
export default class TcButtonRound extends TcButton {
  @Prop() private buttonClass!: string;
  @Prop() private loading!: boolean;
  @Prop() private disabled!: boolean;
}
