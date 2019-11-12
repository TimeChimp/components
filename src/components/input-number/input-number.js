import * as tslib_1 from "tslib";
import { Vue, Component, Prop } from "vue-property-decorator";
import { guid, tryParseFloat } from "@timechimp-bv/helper-functions";
var TcInputTime = /** @class */ (function (_super) {
    tslib_1.__extends(TcInputTime, _super);
    function TcInputTime() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.internalName = _this.name || guid();
        return _this;
    }
    TcInputTime.prototype.formatNumber = function (e) {
        var value = e.target.value ? e.target.value.replace(",", ".") : "0";
        var float = tryParseFloat(value, 0);
        e.target.value = float;
        this.$emit("input", float);
        this.$emit("blur", float);
    };
    tslib_1.__decorate([
        Prop()
    ], TcInputTime.prototype, "name", void 0);
    tslib_1.__decorate([
        Prop()
    ], TcInputTime.prototype, "value", void 0);
    tslib_1.__decorate([
        Prop({ default: "" })
    ], TcInputTime.prototype, "placeholder", void 0);
    tslib_1.__decorate([
        Prop()
    ], TcInputTime.prototype, "validate", void 0);
    tslib_1.__decorate([
        Prop()
    ], TcInputTime.prototype, "disabled", void 0);
    tslib_1.__decorate([
        Prop()
    ], TcInputTime.prototype, "autofocus", void 0);
    tslib_1.__decorate([
        Prop()
    ], TcInputTime.prototype, "maxlength", void 0);
    tslib_1.__decorate([
        Prop()
    ], TcInputTime.prototype, "tabindex", void 0);
    tslib_1.__decorate([
        Prop({ default: false })
    ], TcInputTime.prototype, "readonly", void 0);
    TcInputTime = tslib_1.__decorate([
        Component({})
    ], TcInputTime);
    return TcInputTime;
}(Vue));
export default TcInputTime;
//# sourceMappingURL=input-number.js.map