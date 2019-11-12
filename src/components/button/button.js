import * as tslib_1 from "tslib";
import { Vue, Component, Prop } from "vue-property-decorator";
import { TcIcon } from "../icons";
var TcButton = /** @class */ (function (_super) {
    tslib_1.__extends(TcButton, _super);
    function TcButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        Prop()
    ], TcButton.prototype, "badge", void 0);
    tslib_1.__decorate([
        Prop()
    ], TcButton.prototype, "eye", void 0);
    tslib_1.__decorate([
        Prop()
    ], TcButton.prototype, "loading", void 0);
    tslib_1.__decorate([
        Prop()
    ], TcButton.prototype, "buttonClass", void 0);
    TcButton = tslib_1.__decorate([
        Component({
            components: {
                TcIcon: TcIcon
            }
        })
    ], TcButton);
    return TcButton;
}(Vue));
export default TcButton;
//# sourceMappingURL=button.js.map