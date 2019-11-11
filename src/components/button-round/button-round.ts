import { Component, Prop } from "vue-property-decorator";

import { TcButton } from "../button";

@Component({})
export default class TcButtonRound extends TcButton {
  @Prop() private disabled!: boolean;
}
