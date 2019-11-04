import { Vue, Component, Prop } from "vue-property-decorator";

import {
  formatTime,
  TcDate,
  cloneObject
} from "@timechimp-bv/helper-functions";

@Component({})
export default class TcTimer extends Vue {
  @Prop() private timerStart: Date;
  @Prop({ default: 0 }) private duration: number;

  private seconds: number = 0;
  private interval: any;
  private start: Date = this.timerStart || new TcDate().toDate();

  private setTimer() {
    const start = new TcDate(this.start).date;
    const duration = cloneObject(this.duration);
    this.seconds = duration + new TcDate().diff(start, "seconds");
    // TODO: Move document.title = `TimeChimp | ${formatTime(this.timer, 'HH:mm:ss')}`;
  }

  private get timer(): string {
    return formatTime(this.seconds, "HH:mm:ss");
  }

  private created() {
    this.setTimer();

    this.interval = setInterval(() => {
      this.setTimer();
    }, 1000);
  }

  private beforeDestroy() {
    clearInterval(this.interval);
    // document.title = 'TimeChimp';
  }
}
