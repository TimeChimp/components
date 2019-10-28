import { storiesOf } from "@storybook/vue";

import TcButton from "./button.vue";
import TcIcon from "../icons/icon.vue";

storiesOf("Buttons|Button", module)
  .add("Primary", () => ({
    components: {
      TcButton
    },
    template: `
            <div>
                <h4>Small</h4>
                <tc-button :button-class="['button__primary', 'button__small']">
                    Button
                </tc-button>

                <h4>Medium</h4>
                <tc-button :button-class="['button__primary']">
                    Button
                </tc-button>

                <h4>Large</h4>
                <tc-button :button-class="['button__primary', 'button__large']">
                    Button
                </tc-button>
            </div>
        `
  }))
  .add("Secondary", () => ({
    components: {
      TcButton
    },
    template: `
        <div>
            <h4>Small</h4>
            <tc-button :button-class="['button__secondary', 'button__small']">
                Button
            </tc-button>

            <h4>Medium</h4>
            <tc-button :button-class="['button__secondary']">
                Button
            </tc-button>

            <h4>Large</h4>
            <tc-button :button-class="['button__secondary', 'button__large']">
                Button
            </tc-button>
        </div>
        `
  }))
  .add("Danger", () => ({
    components: {
      TcButton
    },
    template: `
        <div>
            <h4>Small</h4>
            <tc-button :button-class="['button__delete', 'button__small']">
                Button
            </tc-button>

            <h4>Medium</h4>
            <tc-button :button-class="['button__delete']">
                Button
            </tc-button>

            <h4>Large</h4>
            <tc-button :button-class="['button__delete', 'button__large']">
                Button
            </tc-button>
        </div>
        `
  }))
  .add("Link", () => ({
    components: {
      TcButton
    },
    template: `
            <tc-button :button-class="['button__link']">
                Button
            </tc-button>
        `
  }))
  .add("With badge", () => ({
    components: {
      TcButton
    },
    template: `
            <div>
                <h4>Primary</h4>
                <tc-button :button-class="['button__primary']" :badge="1">
                    Button
                </tc-button>

                <h4>Secondary</h4>
                <tc-button :button-class="['button__secondary']" :badge="1">
                    Button
                </tc-button>
            </div>
        `
  }))
  .add("With icon", () => ({
    components: {
      TcButton,
      TcIcon
    },
    template: `
            <div>
                <h4>Primary</h4>
                <tc-button :button-class="['button__primary']">
                    Button

                    <tc-icon name="arrow" size="10" />
                </tc-button>

                <h4>Secondary</h4>
                <tc-button :button-class="['button__secondary']">
                    Button

                    <tc-icon name="arrow" size="10" />
                </tc-button>
            </div>
        `
  }))
  .add("Disabled", () => ({
    components: {
      TcButton
    },
    template: `
            <div>
                <h4>Primary</h4>
                <tc-button :button-class="['button__primary']" disabled=""true>
                    Button
                </tc-button>

                <h4>Secondary</h4>
                <tc-button :button-class="['button__secondary']" disabled="true">
                    Button
                </tc-button>
            </div>
        `
  }));
