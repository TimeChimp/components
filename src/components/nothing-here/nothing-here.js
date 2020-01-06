import * as tslib_1 from "tslib";
import { Vue, Component, Prop } from "vue-property-decorator";
import { TcIcon } from "../icons";
import { TcButton } from "../button";
var TcNothingHere = /** @class */ (function(_super) {
  tslib_1.__extends(TcNothingHere, _super);
  function TcNothingHere() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  tslib_1.__decorate([Prop()], TcNothingHere.prototype, "title", void 0);
  tslib_1.__decorate([Prop()], TcNothingHere.prototype, "description", void 0);
  tslib_1.__decorate([Prop()], TcNothingHere.prototype, "buttonText", void 0);
  TcNothingHere = tslib_1.__decorate(
    [
      Component({
        components: {
          TcButton: TcButton,
          TcIcon: TcIcon
        }
      })
    ],
    TcNothingHere
  );
  return TcNothingHere;
})(Vue);
export default TcNothingHere;
//# sourceMappingURL=nothing-here.js.map
