import * as tslib_1 from "tslib";
import { Vue, Component, Prop } from "vue-property-decorator";
var TcPasswordStrength = /** @class */ (function (_super) {
    tslib_1.__extends(TcPasswordStrength, _super);
    function TcPasswordStrength() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        Prop()
    ], TcPasswordStrength.prototype, "score", void 0);
    TcPasswordStrength = tslib_1.__decorate([
        Component({})
    ], TcPasswordStrength);
    return TcPasswordStrength;
}(Vue));
export default TcPasswordStrength;
//# sourceMappingURL=password-strength.js.map