import * as tslib_1 from "tslib";
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import {
  guid,
  TcDate,
  LocaleDate,
  formatTime,
  formatDateInput
} from "@timechimp-bv/helper-functions";
var TcInputTimeDate = /** @class */ (function(_super) {
  tslib_1.__extends(TcInputTimeDate, _super);
  function TcInputTimeDate() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.hasFocus = false;
    _this.internalName = _this.name || guid();
    _this.internalDateObject = _this.dateObject || {
      language: "nl",
      timezone: "Europe/Amsterdam",
      startOfWeek: 0,
      dateFormat: "HH:mm"
    };
    return _this;
  }
  TcInputTimeDate.prototype.watchInput = function(value) {
    if (value) {
      this.hasFocus = true;
    } else {
      this.hasFocus = false;
    }
  };
  Object.defineProperty(TcInputTimeDate.prototype, "formattedValue", {
    get: function() {
      var date = new TcDate(this.value);
      if (this.value && date.isValid()) {
        return new LocaleDate(date.toDate(), this.internalDateObject).toDate();
      } else {
        return this.value
          ? formatTime(this.value * 3600, this.internalDateObject.dateFormat)
          : "";
      }
    },
    enumerable: true,
    configurable: true
  });
  TcInputTimeDate.prototype.setFocus = function() {
    this.hasFocus = true;
    this.$emit("focus");
  };
  TcInputTimeDate.prototype.formatValue = function(e) {
    var date;
    var value = e.target.value;
    if (value) {
      date = formatDateInput(value, this.internalDateObject);
    } else {
      this.hasFocus = false;
    }
    this.$emit("input", date);
    this.$emit("blur");
  };
  tslib_1.__decorate([Prop()], TcInputTimeDate.prototype, "name", void 0);
  tslib_1.__decorate([Prop()], TcInputTimeDate.prototype, "value", void 0);
  tslib_1.__decorate([Prop()], TcInputTimeDate.prototype, "date", void 0);
  tslib_1.__decorate(
    [Prop()],
    TcInputTimeDate.prototype,
    "placeholder",
    void 0
  );
  tslib_1.__decorate([Prop()], TcInputTimeDate.prototype, "disabled", void 0);
  tslib_1.__decorate([Prop()], TcInputTimeDate.prototype, "validate", void 0);
  tslib_1.__decorate([Prop()], TcInputTimeDate.prototype, "autofocus", void 0);
  tslib_1.__decorate([Prop()], TcInputTimeDate.prototype, "maxlength", void 0);
  tslib_1.__decorate([Prop()], TcInputTimeDate.prototype, "tabindex", void 0);
  tslib_1.__decorate([Prop()], TcInputTimeDate.prototype, "dateObject", void 0);
  tslib_1.__decorate(
    [Watch("value")],
    TcInputTimeDate.prototype,
    "watchInput",
    null
  );
  TcInputTimeDate = tslib_1.__decorate([Component({})], TcInputTimeDate);
  return TcInputTimeDate;
})(Vue);
export default TcInputTimeDate;
//# sourceMappingURL=input-time-date.js.map
