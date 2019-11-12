import * as tslib_1 from "tslib";
import { Component, Prop } from "vue-property-decorator";
import { TcButton } from "../button";
var TcButtonRound = /** @class */ (function (_super) {
    tslib_1.__extends(TcButtonRound, _super);
    function TcButtonRound() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        Prop()
    ], TcButtonRound.prototype, "disabled", void 0);
    TcButtonRound = tslib_1.__decorate([
        Component({})
    ], TcButtonRound);
    return TcButtonRound;
}(TcButton));
export default TcButtonRound;
//# sourceMappingURL=button-round.js.map