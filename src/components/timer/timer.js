import * as tslib_1 from "tslib";
import { Vue, Component, Prop } from "vue-property-decorator";
import {
  formatTime,
  TcDate,
  cloneObject
} from "@timechimp-bv/helper-functions";
var TcTimer = /** @class */ (function(_super) {
  tslib_1.__extends(TcTimer, _super);
  function TcTimer() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.seconds = 0;
    _this.start = _this.timerStart || new TcDate().date;
    return _this;
  }
  TcTimer.prototype.setTimer = function() {
    var start = new TcDate(this.start).date;
    var duration = cloneObject(this.duration);
    this.seconds = duration + new TcDate().diff(start, "seconds");
    // TODO: Move document.title = `TimeChimp | ${formatTime(this.timer, 'HH:mm:ss')}`;
  };
  Object.defineProperty(TcTimer.prototype, "timer", {
    get: function() {
      return formatTime(this.seconds, "HH:mm:ss");
    },
    enumerable: true,
    configurable: true
  });
  TcTimer.prototype.created = function() {
    var _this = this;
    this.setTimer();
    this.interval = setInterval(function() {
      _this.setTimer();
    }, 1000);
  };
  TcTimer.prototype.beforeDestroy = function() {
    clearInterval(this.interval);
    // document.title = 'TimeChimp';
  };
  tslib_1.__decorate([Prop()], TcTimer.prototype, "timerStart", void 0);
  tslib_1.__decorate(
    [Prop({ default: 0 })],
    TcTimer.prototype,
    "duration",
    void 0
  );
  TcTimer = tslib_1.__decorate([Component({})], TcTimer);
  return TcTimer;
})(Vue);
export default TcTimer;
//# sourceMappingURL=timer.js.map
