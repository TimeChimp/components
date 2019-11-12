import * as tslib_1 from "tslib";
import { Vue, Component, Prop } from "vue-property-decorator";
import { statusTypes } from "../../common/models/types/status-label";
// @ts-ignore
import VTooltip from "v-tooltip";
Vue.use(VTooltip);
var TcStatusLabel = /** @class */ (function (_super) {
    tslib_1.__extends(TcStatusLabel, _super);
    function TcStatusLabel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        Prop({ default: "Registered" })
    ], TcStatusLabel.prototype, "hintTitle", void 0);
    tslib_1.__decorate([
        Prop({
            default: "registered",
            validator: function (value) {
                return statusTypes.indexOf(value) > -1;
            }
        })
    ], TcStatusLabel.prototype, "status", void 0);
    TcStatusLabel = tslib_1.__decorate([
        Component({})
    ], TcStatusLabel);
    return TcStatusLabel;
}(Vue));
export default TcStatusLabel;
//# sourceMappingURL=status-label.js.map