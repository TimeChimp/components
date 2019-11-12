import * as tslib_1 from "tslib";
import { Vue, Component, Prop } from "vue-property-decorator";
var TcRadioButton = /** @class */ (function (_super) {
    tslib_1.__extends(TcRadioButton, _super);
    function TcRadioButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(TcRadioButton.prototype, "internalValue", {
        get: function () {
            return this.value;
        },
        set: function (value) {
            this.$emit("input", value);
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        Prop({ required: true })
    ], TcRadioButton.prototype, "value", void 0);
    tslib_1.__decorate([
        Prop({ required: true })
    ], TcRadioButton.prototype, "nativeValue", void 0);
    tslib_1.__decorate([
        Prop({ required: true })
    ], TcRadioButton.prototype, "name", void 0);
    tslib_1.__decorate([
        Prop()
    ], TcRadioButton.prototype, "disabled", void 0);
    TcRadioButton = tslib_1.__decorate([
        Component({})
    ], TcRadioButton);
    return TcRadioButton;
}(Vue));
export default TcRadioButton;
//# sourceMappingURL=radio-button.js.map