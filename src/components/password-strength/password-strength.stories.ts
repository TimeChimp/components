import { storiesOf } from "@storybook/vue";

import TcPasswordStrength from "./password-strength.vue";

storiesOf("Password Strength", module)
  .add("Empty", () => ({
    components: {
      TcPasswordStrength
    },
    template: `
            <div>
                <tc-password-strength :score="-1"  />
            </div>
        `
  }))
  .add("Weak", () => ({
    components: {
      TcPasswordStrength
    },
    template: `
            <div>
                <tc-password-strength :score="1"  />
            </div>
        `
  }))
  .add("Medium", () => ({
    components: {
      TcPasswordStrength
    },
    template: `
            <div>
                <tc-password-strength :score="2"  />
            </div>
        `
  }))
  .add("Strong", () => ({
    components: {
      TcPasswordStrength
    },
    template: `
            <div>
                <tc-password-strength :score="4"  />
            </div>
        `
  }));
