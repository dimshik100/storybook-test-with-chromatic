import ThePaymentForm from "../components/ThePaymentForm.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Example/ThePaymentForm",
  component: ThePaymentForm,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    onSubmit: {},
    // STEP2: Add the `theme` argType
    theme: {
      control: { type: "select" },
      options: ["light", "dark"],
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { ThePaymentForm },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<ThePaymentForm v-bind="args" />',
});

export const Light = Template.bind({});
Light.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/nQ0duij03wUKRhcOwanRnW/%F0%9F%8C%BC-Daisy-(Copy)-(Copy)?node-id=23850%3A50592&t=ON7cb06omsfUHo4E-0",
  },
};
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Light.args = {
  theme: "light",
};

export const LightGerman = Template.bind({});
LightGerman.args = {
  theme: "light",
  texts: {
    fullName: "Vollständiger Name",
    creditCardInfo: "Kreditkarteninformationen",
    expDate: "Haltbarkeitsdatum",
    cvv: "CVV",
    zipCode: "Postleitzahl",
    confirmPayment: "Bestätige Zahlung",
    placeholder: "Platzhalter",
  },
};

// STEP2: Add the `Dark` story
export const Dark = Template.bind({});
Dark.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/nQ0duij03wUKRhcOwanRnW/%F0%9F%8C%BC-Daisy-(Copy)-(Copy)?node-id=23857%3A43200&t=ON7cb06omsfUHo4E-0",
  },
};
Dark.args = {
  theme: "dark",
};
