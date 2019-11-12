import * as tslib_1 from "tslib";
import { Vue, Component, Prop } from "vue-property-decorator";
import { formatCurrency, guid, unformatCurrency } from "@timechimp-bv/helper-functions";
var TcInputCurrency = /** @class */ (function (_super) {
    tslib_1.__extends(TcInputCurrency, _super);
    function TcInputCurrency() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.internalName = _this.name || guid();
        return _this;
    }
    Object.defineProperty(TcInputCurrency.prototype, "formattedValue", {
        get: function () {
            return this.value
                ? formatCurrency(this.value, this.currencyObject, this.numberFormat)
                : "";
        },
        enumerable: true,
        configurable: true
    });
    TcInputCurrency.prototype.formatCurrency = function () {
        var el = this.$refs && this.$refs.currencyInput;
        if (el) {
            var value = unformatCurrency(el.value);
            el.value = formatCurrency(value, this.currencyObject, this.numberFormat);
            this.$emit("input", value);
        }
        this.$emit("blur");
    };
    tslib_1.__decorate([
        Prop()
    ], TcInputCurrency.prototype, "name", void 0);
    tslib_1.__decorate([
        Prop()
    ], TcInputCurrency.prototype, "value", void 0);
    tslib_1.__decorate([
        Prop({ default: "" })
    ], TcInputCurrency.prototype, "placeholder", void 0);
    tslib_1.__decorate([
        Prop()
    ], TcInputCurrency.prototype, "validate", void 0);
    tslib_1.__decorate([
        Prop()
    ], TcInputCurrency.prototype, "disabled", void 0);
    tslib_1.__decorate([
        Prop()
    ], TcInputCurrency.prototype, "autofocus", void 0);
    tslib_1.__decorate([
        Prop()
    ], TcInputCurrency.prototype, "maxlength", void 0);
    tslib_1.__decorate([
        Prop()
    ], TcInputCurrency.prototype, "tabindex", void 0);
    tslib_1.__decorate([
        Prop()
    ], TcInputCurrency.prototype, "currencyObject", void 0);
    tslib_1.__decorate([
        Prop()
    ], TcInputCurrency.prototype, "numberFormat", void 0);
    TcInputCurrency = tslib_1.__decorate([
        Component({})
    ], TcInputCurrency);
    return TcInputCurrency;
}(Vue));
export default TcInputCurrency;
//# sourceMappingURL=input-currency.js.map