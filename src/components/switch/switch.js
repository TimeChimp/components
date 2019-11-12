import * as tslib_1 from "tslib";
import { Vue, Component, Prop } from 'vue-property-decorator';
var TcSwitch = /** @class */ (function (_super) {
    tslib_1.__extends(TcSwitch, _super);
    function TcSwitch() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isMouseDown = false;
        return _this;
    }
    Object.defineProperty(TcSwitch.prototype, "internalValue", {
        get: function () {
            return this.value;
        },
        set: function (value) {
            this.$emit('input', value);
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        Prop()
    ], TcSwitch.prototype, "value", void 0);
    tslib_1.__decorate([
        Prop()
    ], TcSwitch.prototype, "disabled", void 0);
    tslib_1.__decorate([
        Prop({ default: true })
    ], TcSwitch.prototype, "trueValue", void 0);
    tslib_1.__decorate([
        Prop({ default: false })
    ], TcSwitch.prototype, "falseValue", void 0);
    TcSwitch = tslib_1.__decorate([
        Component({})
    ], TcSwitch);
    return TcSwitch;
}(Vue));
export default TcSwitch;
//# sourceMappingURL=switch.js.map