import * as tslib_1 from "tslib";
import { Vue, Component, Prop } from "vue-property-decorator";
var TcSpinner = /** @class */ (function (_super) {
    tslib_1.__extends(TcSpinner, _super);
    function TcSpinner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        Prop({ default: false })
    ], TcSpinner.prototype, "show", void 0);
    TcSpinner = tslib_1.__decorate([
        Component({})
    ], TcSpinner);
    return TcSpinner;
}(Vue));
export default TcSpinner;
//# sourceMappingURL=spinner.js.map