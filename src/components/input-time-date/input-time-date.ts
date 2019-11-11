import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import {
  guid,
  TcDate,
  LocaleDate,
  formatTime,
  formatDateInput
} from "@timechimp-bv/helper-functions";

@Component({})
export default class TcInputTimeDate extends Vue {
  @Prop() private name!: string;
  @Prop() private value!: number | Date;
  @Prop() private date!: Date;
  @Prop() private placeholder!: string;
  @Prop() private disabled!: boolean;
  @Prop() private validate!: string;
  @Prop() private autofocus!: boolean;
  @Prop() private maxlength!: number;
  @Prop() private tabindex!: string;
  @Prop() private dateObject?: any;

  private hasFocus: boolean = false;
  private internalName: string = this.name || guid();
  private internalDateObject: any = this.dateObject || {
    language: "nl",
    timezone: "Europe/Amsterdam",
    startOfWeek: 0,
    dateFormat: "HH:mm"
  };

  @Watch("value")
  private watchInput(value: string) {
    if (value) {
      this.hasFocus = true;
    } else {
      this.hasFocus = false;
    }
  }

  private get formattedValue() {
    const date = new TcDate(this.value);
    if (this.value && date.isValid()) {
      return new LocaleDate(date.toDate(), this.internalDateObject).toDate();
    } else {
      return this.value
        ? formatTime(
            (this.value as number) * 3600,
            this.internalDateObject.dateFormat
          )
        : "";
    }
  }

  private setFocus() {
    this.hasFocus = true;
    this.$emit("focus");
  }

  private formatValue(e: any) {
    let date;

    const value = e.target.value;
    if (value) {
      date = formatDateInput(value, this.internalDateObject);
    } else {
      this.hasFocus = false;
    }

    this.$emit("input", date);
    this.$emit("blur");
  }
}
