import * as tslib_1 from "tslib";
import { Vue, Component, Prop } from "vue-property-decorator";
// @ts-ignore
import Verte from "verte";
var TcColorPicker = /** @class */ (function (_super) {
    tslib_1.__extends(TcColorPicker, _super);
    function TcColorPicker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(TcColorPicker.prototype, "color", {
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
        Prop()
    ], TcColorPicker.prototype, "value", void 0);
    tslib_1.__decorate([
        Prop({ default: "rgb" })
    ], TcColorPicker.prototype, "model", void 0);
    TcColorPicker = tslib_1.__decorate([
        Component({
            components: {
                Verte: Verte
            }
        })
    ], TcColorPicker);
    return TcColorPicker;
}(Vue));
export default TcColorPicker;
//# sourceMappingURL=color-picker.js.map