import * as tslib_1 from "tslib";
import { Vue, Component, Prop } from "vue-property-decorator";
var TcLetterAvatar = /** @class */ (function (_super) {
    tslib_1.__extends(TcLetterAvatar, _super);
    function TcLetterAvatar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(TcLetterAvatar.prototype, "avatarLetter", {
        get: function () {
            return this.name ? this.name[0].toUpperCase() : "?";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TcLetterAvatar.prototype, "svgStyle", {
        get: function () {
            var letterIndex = this.avatarLetter.charCodeAt(0) - 64;
            var hue = (360 / 26) * letterIndex;
            var backgroundColor = "hsl(" + hue + ", 68%, 48%)";
            return {
                width: this.size + "px",
                height: this.size + "px",
                borderRadius: "100%",
                background: backgroundColor
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TcLetterAvatar.prototype, "textStyle", {
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
        Prop({ default: 50 })
    ], TcLetterAvatar.prototype, "size", void 0);
    tslib_1.__decorate([
        Prop({ required: true })
    ], TcLetterAvatar.prototype, "name", void 0);
    TcLetterAvatar = tslib_1.__decorate([
        Component({})
    ], TcLetterAvatar);
    return TcLetterAvatar;
}(Vue));
export default TcLetterAvatar;
//# sourceMappingURL=letter-avatar.js.map