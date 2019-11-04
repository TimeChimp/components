import { Vue, Component, Prop } from "vue-property-decorator";

import VirtualList from "vue-virtual-scroll-list";

@Component({
  components: {
    VirtualList
  }
})
export default class VirtualListComponent extends Vue {
  @Prop({ default: false }) private show!: boolean;
}
