import * as tslib_1 from "tslib";
import { Vue, Component, Prop } from "vue-property-decorator";
var TcFlag = /** @class */ (function(_super) {
  tslib_1.__extends(TcFlag, _super);
  function TcFlag() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  Object.defineProperty(TcFlag.prototype, "flagIconClass", {
    get: function() {
      return "flag-icon-" + this.iso;
    },
    enumerable: true,
    configurable: true
  });
  tslib_1.__decorate([Prop()], TcFlag.prototype, "iso", void 0);
  TcFlag = tslib_1.__decorate([Component({})], TcFlag);
  return TcFlag;
})(Vue);
export default TcFlag;
//# sourceMappingURL=flag.js.map
