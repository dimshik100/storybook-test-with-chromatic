import TheInput from "../components/TheInput.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Example/TheInput",
  component: TheInput,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["small", "stretched"],
    },
    // // STEP2: Add the `theme` argType
    // theme: {
    //   control: { type: "select" },
    //   options: ["light", "dark"],
    // },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { TheInput },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<div style="padding:20px;"><TheInput v-bind="args" /></div>',
});

export const Light = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Light.args = {
  title: "Full Name",
  placeholder: "Place holder",
  theme: "light",
};

// // STEP2: Add the `Dark` story
// const DarkTemplate = (args) => ({
//   // Components used in your story `template` are defined in the `components` object
//   components: { TheInput },
//   // The story's `args` need to be mapped into the template through the `setup()` method
//   setup() {
//     return { args };
//   },
//   // And then the `args` are bound to your component with `v-bind="args"`
//   template: `<div style="background-color:#2e364a; padding:20px;height: 100vh;"><TheInput v-bind="args" /></div>`,
// });

// export const Dark = DarkTemplate.bind({});
// Dark.args = {
//   title: "Full Name",
//   placeholder: "Place holder",
//   theme: "dark",
// };
