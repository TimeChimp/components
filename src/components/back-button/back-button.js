import * as tslib_1 from "tslib";
import { Vue, Component } from "vue-property-decorator";
import { TcIcon } from "../icons";
var TcBackButton = /** @class */ (function (_super) {
    tslib_1.__extends(TcBackButton, _super);
    function TcBackButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TcBackButton = tslib_1.__decorate([
        Component({
            components: {
                TcIcon: TcIcon
            }
        })
    ], TcBackButton);
    return TcBackButton;
}(Vue));
export default TcBackButton;
//# sourceMappingURL=back-button.js.map