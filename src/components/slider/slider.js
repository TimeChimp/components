import * as tslib_1 from "tslib";
import { Vue, Component, Prop } from "vue-property-decorator";
// import VueSlider from "vue-slider-component";
import { formatTime } from "@timechimp-bv/helper-functions";
var TcSlider = /** @class */ (function (_super) {
    tslib_1.__extends(TcSlider, _super);
    function TcSlider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TcSlider.prototype.formatTime = function (value) {
        return formatTime(value * 3600, "HH:mm") + "u";
    };
    tslib_1.__decorate([
        Prop()
    ], TcSlider.prototype, "value", void 0);
    tslib_1.__decorate([
        Prop({
            validator: function (value) {
                return !value || ["time"].indexOf(value) > -1;
            }
        })
    ], TcSlider.prototype, "type", void 0);
    TcSlider = tslib_1.__decorate([
        Component({
            components: {
            //  VueSlider
            }
        })
    ], TcSlider);
    return TcSlider;
}(Vue));
export default TcSlider;
//# sourceMappingURL=slider.js.map