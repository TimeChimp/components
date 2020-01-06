import * as tslib_1 from "tslib";
import { Vue, Component, Prop } from "vue-property-decorator";
var TcProgressBar = /** @class */ (function(_super) {
  tslib_1.__extends(TcProgressBar, _super);
  function TcProgressBar() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  tslib_1.__decorate(
    [
      Prop({
        validator: function(value) {
          return value >= 0 && value <= 100;
        }
      })
    ],
    TcProgressBar.prototype,
    "value",
    void 0
  );
  tslib_1.__decorate(
    [
      Prop({
        default: "medium",
        validator: function(value) {
          return ["small", "medium", "large"].indexOf(value) > -1;
        }
      })
    ],
    TcProgressBar.prototype,
    "size",
    void 0
  );
  TcProgressBar = tslib_1.__decorate([Component({})], TcProgressBar);
  return TcProgressBar;
})(Vue);
export default TcProgressBar;
//# sourceMappingURL=progress-bar.js.map
