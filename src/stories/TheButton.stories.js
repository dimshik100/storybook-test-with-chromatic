import TheButton from "../components/TheButton.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Example/TheButton",
  component: TheButton,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
    onClick: {},
    theme: {
      control: { type: "select" },
      options: ["light", "dark"],
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { TheButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<TheButton v-bind="args" />',
});

export const Light = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Light.args = {
  title: "Confirm Payment",
  theme: "light",
};

export const Dark = Template.bind({});
Dark.args = {
  title: "Confirm Payment",
  theme: "dark",
};
