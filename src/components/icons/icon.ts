import { Vue, Component, Prop } from "vue-property-decorator";

const IconCollapse = () => import("./icon/icon-collapse.vue");
const IconFinance = () => import("./icon/icon-finance.vue");
const IconInsights = () => import("./icon/icon-insights.vue");
const IconManage = () => import("./icon/icon-manage.vue");
const IconNotifications = () => import("./icon/icon-notifications.vue");
const IconProfile = () => import("./icon/icon-profile.vue");
const IconRegistration = () => import("./icon/icon-registration.vue");
const IconReports = () => import("./icon/icon-reports.vue");
const IconTeams = () => import("./icon/icon-teams.vue");
const IconProjects = () => import("./icon/icon-projects.vue");
const IconSchedule = () => import("./icon/icon-schedule.vue");
const IconWorkspaces = () => import("./icon/icon-workspaces.vue");
const IconNothingHere = () => import("./icon/icon-nothing-here.vue");
const IconEmployment = () => import("./icon/icon-employment.vue");
const IconAuthWoman = () => import("./icon/icon-auth-woman.vue");
const IconRepeat = () => import("./icon/icon-repeat.vue");
const IconError = () => import("./icon/icon-error.vue");
const IconSupportHint = () => import("./icon/icon-support-hint.vue");
const IconTime = () => import("./icon/icon-time.vue");
const IconArrow = () => import("./icon/icon-arrow.vue");
const IconTrash = () => import("./icon/icon-trash.vue");
const IconEdit = () => import("./icon/icon-edit.vue");
const IconClose = () => import("./icon/icon-close.vue");
const IconSettings = () => import("./icon/icon-settings.vue");
const IconPlay = () => import("./icon/icon-play.vue");
const IconPause = () => import("./icon/icon-pause.vue");
const IconStop = () => import("./icon/icon-stop.vue");
const IconEye = () => import("./icon/icon-eye.vue");
const IconRequired = () => import("./icon/icon-required.vue");
const IconRelations = () => import("./icon/icon-relations.vue");
const IconCheckmark = () => import("./icon/icon-checkmark.vue");
const IconTimerActive = () => import("./icon/icon-timer-active.vue");
const IconCheck = () => import("./icon/icon-check.vue");
const IconOffline = () => import("./icon/icon-offline.vue");
const IconHandlebars = () => import("./icon/icon-handlebars.vue");
const IconUser = () => import("./icon/icon-user.vue");
const IconCheckbox = () => import("./icon/icon-checkbox.vue");
const IconCheckboxInactive = () => import("./icon/icon-checkbox-inactive.vue");
const IconUnderline = () => import("./icon/icon-underline.vue");

@Component({
  components: {
    IconCollapse,
    IconFinance,
    IconInsights,
    IconManage,
    IconNotifications,
    IconProfile,
    IconRegistration,
    IconReports,
    IconTeams,
    IconProjects,
    IconSchedule,
    IconWorkspaces,
    IconNothingHere,
    IconEmployment,
    IconAuthWoman,
    IconRepeat,
    IconError,
    IconSupportHint,
    IconTime,
    IconArrow,
    IconTrash,
    IconEdit,
    IconClose,
    IconSettings,
    IconPlay,
    IconPause,
    IconStop,
    IconEye,
    IconRequired,
    IconRelations,
    IconCheckmark,
    IconTimerActive,
    IconCheck,
    IconOffline,
    IconHandlebars,
    IconUser,
    IconUnderline,
    IconCheckbox,
    IconCheckboxInactive
  }
})
export default class TcIcon extends Vue {
  @Prop({ required: true }) private name!: string;
  @Prop({ default: 18 }) private size!: string | number;
  @Prop() private width?: string | number;
  @Prop() private height?: string | number;
  @Prop({ default: "currentColor" }) private color!: string;

  private get iconName(): string {
    return `icon-${this.name}`;
  }

  private get viewBox(): string {
    switch (this.name) {
      case "arrow":
      case "close":
        return "0 0 18 18";
      case "time":
        return "0 0 500 575";
      case "error":
        return "0 0 1366 768";
      case "support-hint":
        return "0 0 146 86";
      case "trash":
        return "0 0 15 17";
      case "edit":
        return "0 0 16 16";
      case "nothing-here":
        return "0 0 500 410";
      case "play":
      case "pause":
      case "stop":
        return "0 0 23 22";
      case "eye":
        return "0 0 17 11";
      case "required":
        return "0 0 10 10";
      case "relations":
        return "0 0 22 25";
      case "checkmark":
        return "0 0 20 20";
      case "check":
        return "0 0 13 10";
      case "offline":
        return "0 0 16 14";
      case "handlebars":
        return "0 0 10 7";
      case "user":
        return "0 0 18 22";
      case "underline":
        return "0 0 35 3";
      case "checkbox":
        return "0 0 18 18";
      case "checkbox-inactive":
        return "0 0 16 16";
      default:
        return "0 0 200 200";
    }
  }
}
