import * as tslib_1 from "tslib";
import { Vue, Component, Prop } from "vue-property-decorator";
var IconCollapse = function () { return import("./icon/icon-collapse.vue"); };
var IconFinance = function () { return import("./icon/icon-finance.vue"); };
var IconInsights = function () { return import("./icon/icon-insights.vue"); };
var IconManage = function () { return import("./icon/icon-manage.vue"); };
var IconNotifications = function () { return import("./icon/icon-notifications.vue"); };
var IconProfile = function () { return import("./icon/icon-profile.vue"); };
var IconRegistration = function () { return import("./icon/icon-registration.vue"); };
var IconReports = function () { return import("./icon/icon-reports.vue"); };
var IconTeams = function () { return import("./icon/icon-teams.vue"); };
var IconProjects = function () { return import("./icon/icon-projects.vue"); };
var IconSchedule = function () { return import("./icon/icon-schedule.vue"); };
var IconWorkspaces = function () { return import("./icon/icon-workspaces.vue"); };
var IconNothingHere = function () { return import("./icon/icon-nothing-here.vue"); };
var IconEmployment = function () { return import("./icon/icon-employment.vue"); };
var IconAuthWoman = function () { return import("./icon/icon-auth-woman.vue"); };
var IconRepeat = function () { return import("./icon/icon-repeat.vue"); };
var IconError = function () { return import("./icon/icon-error.vue"); };
var IconSupportHint = function () { return import("./icon/icon-support-hint.vue"); };
var IconTime = function () { return import("./icon/icon-time.vue"); };
var IconArrow = function () { return import("./icon/icon-arrow.vue"); };
var IconTrash = function () { return import("./icon/icon-trash.vue"); };
var IconEdit = function () { return import("./icon/icon-edit.vue"); };
var IconClose = function () { return import("./icon/icon-close.vue"); };
var IconSettings = function () { return import("./icon/icon-settings.vue"); };
var IconPlay = function () { return import("./icon/icon-play.vue"); };
var IconPause = function () { return import("./icon/icon-pause.vue"); };
var IconStop = function () { return import("./icon/icon-stop.vue"); };
var IconEye = function () { return import("./icon/icon-eye.vue"); };
var IconRequired = function () { return import("./icon/icon-required.vue"); };
var IconRelations = function () { return import("./icon/icon-relations.vue"); };
var IconCheckmark = function () { return import("./icon/icon-checkmark.vue"); };
var IconTimerActive = function () { return import("./icon/icon-timer-active.vue"); };
var IconCheck = function () { return import("./icon/icon-check.vue"); };
var IconOffline = function () { return import("./icon/icon-offline.vue"); };
var IconHandlebars = function () { return import("./icon/icon-handlebars.vue"); };
var IconUser = function () { return import("./icon/icon-user.vue"); };
var IconCheckbox = function () { return import("./icon/icon-checkbox.vue"); };
var IconCheckboxInactive = function () { return import("./icon/icon-checkbox-inactive.vue"); };
var IconUnderline = function () { return import("./icon/icon-underline.vue"); };
var TcIcon = /** @class */ (function (_super) {
    tslib_1.__extends(TcIcon, _super);
    function TcIcon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(TcIcon.prototype, "iconName", {
        get: function () {
            return "icon-" + this.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TcIcon.prototype, "viewBox", {
        get: function () {
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
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        Prop({ required: true })
    ], TcIcon.prototype, "name", void 0);
    tslib_1.__decorate([
        Prop({ default: 18 })
    ], TcIcon.prototype, "size", void 0);
    tslib_1.__decorate([
        Prop()
    ], TcIcon.prototype, "width", void 0);
    tslib_1.__decorate([
        Prop()
    ], TcIcon.prototype, "height", void 0);
    tslib_1.__decorate([
        Prop({ default: "currentColor" })
    ], TcIcon.prototype, "color", void 0);
    TcIcon = tslib_1.__decorate([
        Component({
            components: {
                IconCollapse: IconCollapse,
                IconFinance: IconFinance,
                IconInsights: IconInsights,
                IconManage: IconManage,
                IconNotifications: IconNotifications,
                IconProfile: IconProfile,
                IconRegistration: IconRegistration,
                IconReports: IconReports,
                IconTeams: IconTeams,
                IconProjects: IconProjects,
                IconSchedule: IconSchedule,
                IconWorkspaces: IconWorkspaces,
                IconNothingHere: IconNothingHere,
                IconEmployment: IconEmployment,
                IconAuthWoman: IconAuthWoman,
                IconRepeat: IconRepeat,
                IconError: IconError,
                IconSupportHint: IconSupportHint,
                IconTime: IconTime,
                IconArrow: IconArrow,
                IconTrash: IconTrash,
                IconEdit: IconEdit,
                IconClose: IconClose,
                IconSettings: IconSettings,
                IconPlay: IconPlay,
                IconPause: IconPause,
                IconStop: IconStop,
                IconEye: IconEye,
                IconRequired: IconRequired,
                IconRelations: IconRelations,
                IconCheckmark: IconCheckmark,
                IconTimerActive: IconTimerActive,
                IconCheck: IconCheck,
                IconOffline: IconOffline,
                IconHandlebars: IconHandlebars,
                IconUser: IconUser,
                IconUnderline: IconUnderline,
                IconCheckbox: IconCheckbox,
                IconCheckboxInactive: IconCheckboxInactive
            }
        })
    ], TcIcon);
    return TcIcon;
}(Vue));
export default TcIcon;
//# sourceMappingURL=icon.js.map