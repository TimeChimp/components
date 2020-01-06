import * as tslib_1 from "tslib";
import { Vue, Component, Prop } from "vue-property-decorator";
import { formatTime } from "@timechimp-bv/helper-functions";
// import VueSlider from "vue-slider-component";
var TcSlider = /** @class */ (function(_super) {
  tslib_1.__extends(TcSlider, _super);
  function TcSlider() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  TcSlider.prototype.formatTime = function(value) {
    return "" + formatTime(value, "HH:mm");
  };
  tslib_1.__decorate(
    [Prop({ required: true })],
    TcSlider.prototype,
    "value",
    void 0
  );
  tslib_1.__decorate([Prop()], TcSlider.prototype, "max", void 0);
  TcSlider = tslib_1.__decorate(
    [
      Component({
        components: {
          // VueSlider
        }
      })
    ],
    TcSlider
  );
  return TcSlider;
})(Vue);
export default TcSlider;
//# sourceMappingURL=split-slider.js.map
