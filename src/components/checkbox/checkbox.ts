import { Vue, Component, Prop, Watch } from "vue-property-decorator";

import { TcIcon } from "../icons";

@Component({
  components: {
    TcIcon
  }
})
export default class TcCheckbox extends Vue {
  @Prop() private name!: string;
  @Prop() private disabled!: boolean;
  @Prop() private value!: boolean;
  @Prop() private type!: string;

  private get newValue() {
    return this.value;
  }

  private set newValue(value) {
    this.$emit("input", !this.value);
  }

  private click(event: any): void {
    if (event.shiftKey) {
      event.preventDefault();
    }
    this.$emit("click", event);
  }
}
