import { storiesOf } from "@storybook/vue";
import TcButton from "./button.vue";
import TcIcon from "../icons/icon.vue";
storiesOf("Buttons|Button", module)
    .add("Primary", function () { return ({
    components: {
        TcButton: TcButton
    },
    template: "\n            <div>\n                <h4>Small</h4>\n                <tc-button :button-class=\"['button__primary', 'button__small']\">\n                    Button\n                </tc-button>\n\n                <h4>Medium</h4>\n                <tc-button :button-class=\"['button__primary']\">\n                    Button\n                </tc-button>\n\n                <h4>Large</h4>\n                <tc-button :button-class=\"['button__primary', 'button__large']\">\n                    Button\n                </tc-button>\n            </div>\n        "
}); })
    .add("Secondary", function () { return ({
    components: {
        TcButton: TcButton
    },
    template: "\n        <div>\n            <h4>Small</h4>\n            <tc-button :button-class=\"['button__secondary', 'button__small']\">\n                Button\n            </tc-button>\n\n            <h4>Medium</h4>\n            <tc-button :button-class=\"['button__secondary']\">\n                Button\n            </tc-button>\n\n            <h4>Large</h4>\n            <tc-button :button-class=\"['button__secondary', 'button__large']\">\n                Button\n            </tc-button>\n        </div>\n        "
}); })
    .add("Danger", function () { return ({
    components: {
        TcButton: TcButton
    },
    template: "\n        <div>\n            <h4>Small</h4>\n            <tc-button :button-class=\"['button__delete', 'button__small']\">\n                Button\n            </tc-button>\n\n            <h4>Medium</h4>\n            <tc-button :button-class=\"['button__delete']\">\n                Button\n            </tc-button>\n\n            <h4>Large</h4>\n            <tc-button :button-class=\"['button__delete', 'button__large']\">\n                Button\n            </tc-button>\n        </div>\n        "
}); })
    .add("Link", function () { return ({
    components: {
        TcButton: TcButton
    },
    template: "\n            <tc-button :button-class=\"['button__link']\">\n                Button\n            </tc-button>\n        "
}); })
    .add("With badge", function () { return ({
    components: {
        TcButton: TcButton
    },
    template: "\n            <div>\n                <h4>Primary</h4>\n                <tc-button :button-class=\"['button__primary']\" :badge=\"1\">\n                    Button\n                </tc-button>\n\n                <h4>Secondary</h4>\n                <tc-button :button-class=\"['button__secondary']\" :badge=\"1\">\n                    Button\n                </tc-button>\n            </div>\n        "
}); })
    .add("With icon", function () { return ({
    components: {
        TcButton: TcButton,
        TcIcon: TcIcon
    },
    template: "\n            <div>\n                <h4>Primary</h4>\n                <tc-button :button-class=\"['button__primary']\">\n                    Button\n\n                    <tc-icon name=\"arrow\" size=\"15\" />\n                </tc-button>\n\n                <h4>Secondary</h4>\n                <tc-button :button-class=\"['button__secondary']\">\n                    Button\n\n                    <tc-icon name=\"arrow\" size=\"15\" />\n                </tc-button>\n            </div>\n        "
}); })
    .add("Disabled", function () { return ({
    components: {
        TcButton: TcButton
    },
    template: "\n            <div>\n                <h4>Primary</h4>\n                <tc-button :button-class=\"['button__primary']\" disabled=\"\"true>\n                    Button\n                </tc-button>\n\n                <h4>Secondary</h4>\n                <tc-button :button-class=\"['button__secondary']\" disabled=\"true\">\n                    Button\n                </tc-button>\n            </div>\n        "
}); });
//# sourceMappingURL=button.stories.js.map