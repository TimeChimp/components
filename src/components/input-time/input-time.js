import * as tslib_1 from "tslib";
import { Vue, Component, Prop } from "vue-property-decorator";
import { guid, formatTime, formatFloat } from "@timechimp-bv/helper-functions";
var TcInputTime = /** @class */ (function(_super) {
  tslib_1.__extends(TcInputTime, _super);
  function TcInputTime() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.internalName = _this.name || guid();
    _this.emptyValue = false;
    return _this;
  }
  Object.defineProperty(TcInputTime.prototype, "hasBottomSlot", {
    get: function() {
      return !!this.$slots["bottom-addon"];
    },
    enumerable: true,
    configurable: true
  });
  TcInputTime.prototype.isEmpty = function(value) {
    return value === null || value === "";
  };
  Object.defineProperty(TcInputTime.prototype, "formattedValue", {
    get: function() {
      return !this.isEmpty(this.value)
        ? formatTime(this.value, this.timeFormat)
        : "";
    },
    enumerable: true,
    configurable: true
  });
  TcInputTime.prototype.formatValue = function(e) {
    var value = e.target.value;
    var timeValue = formatFloat(value, false) * 3600;
    this.emptyValue = this.isEmpty(timeValue);
    this.$emit("input", timeValue);
    this.$emit("blur", timeValue);
  };
  tslib_1.__decorate([Prop()], TcInputTime.prototype, "name", void 0);
  tslib_1.__decorate([Prop()], TcInputTime.prototype, "value", void 0);
  tslib_1.__decorate(
    [Prop({ default: "" })],
    TcInputTime.prototype,
    "placeholder",
    void 0
  );
  tslib_1.__decorate([Prop()], TcInputTime.prototype, "validate", void 0);
  tslib_1.__decorate([Prop()], TcInputTime.prototype, "disabled", void 0);
  tslib_1.__decorate([Prop()], TcInputTime.prototype, "autofocus", void 0);
  tslib_1.__decorate([Prop()], TcInputTime.prototype, "maxlength", void 0);
  tslib_1.__decorate([Prop()], TcInputTime.prototype, "tabindex", void 0);
  tslib_1.__decorate([Prop()], TcInputTime.prototype, "timeFormat", void 0);
  TcInputTime = tslib_1.__decorate([Component({})], TcInputTime);
  return TcInputTime;
})(Vue);
export default TcInputTime;
//# sourceMappingURL=input-time.js.map
