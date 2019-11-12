import * as tslib_1 from "tslib";
import { Vue, Component, Prop } from "vue-property-decorator";
import { formatUppercase } from "@timechimp-bv/helper-functions";
var TcSliderSwitch = /** @class */ (function (_super) {
    tslib_1.__extends(TcSliderSwitch, _super);
    function TcSliderSwitch() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isMouseDown = false;
        _this.internalValue = _this.value || 0;
        return _this;
    }
    Object.defineProperty(TcSliderSwitch.prototype, "selected", {
        get: function () {
            return this.internalValue;
        },
        set: function (value) {
            this.internalValue = value;
            this.$emit("input", value);
        },
        enumerable: true,
        configurable: true
    });
    TcSliderSwitch.prototype.uppercase = function (value) {
        return formatUppercase(value);
    };
    tslib_1.__decorate([
        Prop()
    ], TcSliderSwitch.prototype, "groups", void 0);
    tslib_1.__decorate([
        Prop()
    ], TcSliderSwitch.prototype, "disabled", void 0);
    tslib_1.__decorate([
        Prop({ default: 0 })
    ], TcSliderSwitch.prototype, "value", void 0);
    tslib_1.__decorate([
        Prop({ default: true })
    ], TcSliderSwitch.prototype, "trueValue", void 0);
    tslib_1.__decorate([
        Prop({ default: false })
    ], TcSliderSwitch.prototype, "falseValue", void 0);
    TcSliderSwitch = tslib_1.__decorate([
        Component({})
    ], TcSliderSwitch);
    return TcSliderSwitch;
}(Vue));
export default TcSliderSwitch;
//# sourceMappingURL=slider-switch.js.map