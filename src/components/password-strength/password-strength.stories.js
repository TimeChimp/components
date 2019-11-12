import { storiesOf } from "@storybook/vue";
import TcPasswordStrength from "./password-strength.vue";
storiesOf("Password Strength", module)
    .add("Empty", function () { return ({
    components: {
        TcPasswordStrength: TcPasswordStrength
    },
    template: "\n            <div>\n                <tc-password-strength :score=\"-1\"  />\n            </div>\n        "
}); })
    .add("Weak", function () { return ({
    components: {
        TcPasswordStrength: TcPasswordStrength
    },
    template: "\n            <div>\n                <tc-password-strength :score=\"1\"  />\n            </div>\n        "
}); })
    .add("Medium", function () { return ({
    components: {
        TcPasswordStrength: TcPasswordStrength
    },
    template: "\n            <div>\n                <tc-password-strength :score=\"2\"  />\n            </div>\n        "
}); })
    .add("Strong", function () { return ({
    components: {
        TcPasswordStrength: TcPasswordStrength
    },
    template: "\n            <div>\n                <tc-password-strength :score=\"4\"  />\n            </div>\n        "
}); });
//# sourceMappingURL=password-strength.stories.js.map