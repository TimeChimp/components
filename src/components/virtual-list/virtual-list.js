import * as tslib_1 from "tslib";
import { Vue, Component, Prop } from "vue-property-decorator";
// @ts-ignore
import VirtualList from "vue-virtual-scroll-list";
var VirtualListComponent = /** @class */ (function(_super) {
  tslib_1.__extends(VirtualListComponent, _super);
  function VirtualListComponent() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  tslib_1.__decorate(
    [Prop({ default: false })],
    VirtualListComponent.prototype,
    "show",
    void 0
  );
  VirtualListComponent = tslib_1.__decorate(
    [
      Component({
        components: {
          VirtualList: VirtualList
        }
      })
    ],
    VirtualListComponent
  );
  return VirtualListComponent;
})(Vue);
export default VirtualListComponent;
//# sourceMappingURL=virtual-list.js.map
