import * as tslib_1 from "tslib";
import { Vue, Component, Prop } from "vue-property-decorator";
var TcLockAvatar = /** @class */ (function (_super) {
    tslib_1.__extends(TcLockAvatar, _super);
    function TcLockAvatar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(TcLockAvatar.prototype, "svgStyle", {
        get: function () {
            return {
                width: this.size + "px",
                height: this.size + "px",
                borderRadius: "100%"
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TcLockAvatar.prototype, "textStyle", {
        get: function () {
            return {
                fill: "rgba(255, 255, 255, .7)",
                fontFamily: "Source Sans Pro",
                fontSize: this.size * 0.65 + "px"
            };
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        Prop({ default: 25 })
    ], TcLockAvatar.prototype, "size", void 0);
    TcLockAvatar = tslib_1.__decorate([
        Component({})
    ], TcLockAvatar);
    return TcLockAvatar;
}(Vue));
export default TcLockAvatar;
//# sourceMappingURL=lock-avatar.js.map