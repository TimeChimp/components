import * as tslib_1 from "tslib";
import { Vue, Component, Prop } from "vue-property-decorator";
var TcMobileButtonPlus = /** @class */ (function(_super) {
  tslib_1.__extends(TcMobileButtonPlus, _super);
  function TcMobileButtonPlus() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  tslib_1.__decorate(
    [
      Prop({
        default: "time",
        validator: function(value) {
          return ["time", "expense", "mileage"].indexOf(value) > -1;
        }
      })
    ],
    TcMobileButtonPlus.prototype,
    "type",
    void 0
  );
  TcMobileButtonPlus = tslib_1.__decorate([Component({})], TcMobileButtonPlus);
  return TcMobileButtonPlus;
})(Vue);
export default TcMobileButtonPlus;
//# sourceMappingURL=mobile-button-plus.js.map
