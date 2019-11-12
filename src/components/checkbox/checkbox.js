import * as tslib_1 from "tslib";
import { Vue, Component, Prop } from "vue-property-decorator";
import { TcIcon } from "../icons";
var TcCheckbox = /** @class */ (function (_super) {
    tslib_1.__extends(TcCheckbox, _super);
    function TcCheckbox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(TcCheckbox.prototype, "newValue", {
        get: function () {
            return this.value;
        },
        set: function (value) {
            this.$emit("input", !this.value);
        },
        enumerable: true,
        configurable: true
    });
    TcCheckbox.prototype.click = function (event) {
        if (event.shiftKey) {
            event.preventDefault();
        }
        this.$emit("click", event);
    };
    tslib_1.__decorate([
        Prop()
    ], TcCheckbox.prototype, "name", void 0);
    tslib_1.__decorate([
        Prop()
    ], TcCheckbox.prototype, "disabled", void 0);
    tslib_1.__decorate([
        Prop()
    ], TcCheckbox.prototype, "value", void 0);
    tslib_1.__decorate([
        Prop()
    ], TcCheckbox.prototype, "type", void 0);
    TcCheckbox = tslib_1.__decorate([
        Component({
            components: {
                TcIcon: TcIcon
            }
        })
    ], TcCheckbox);
    return TcCheckbox;
}(Vue));
export default TcCheckbox;
//# sourceMappingURL=checkbox.js.map