import { Vue, Component, Prop } from "vue-property-decorator";

// @ts-ignore
import VirtualList from "vue-virtual-scroll-list";

@Component({
  components: {
    VirtualList
  }
})
export default class VirtualListComponent extends Vue {
  @Prop({ default: false }) private show!: boolean;
}
