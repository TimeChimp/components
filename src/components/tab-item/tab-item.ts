import { Vue, Component, Prop, Watch } from 'vue-property-decorator';

import { TcBadge } from '../badge';

@Component({
    components: {
        TcBadge,
    },
})
export default class TcTabItem extends Vue {
    @Prop({ required: true }) private title!: string;
    @Prop({ default: false }) private active!: boolean;
    @Prop() private route!: string;
    @Prop() private badge!: string;
    @Prop({
        default: 'medium',
        validator(value) {
            return ['small', 'medium', 'large'].indexOf(value) > -1;
        },
    })
    private size!: string;

    private currentRoute = '';
}
