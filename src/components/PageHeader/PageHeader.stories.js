import PageHeader from './PageHeader'

export default {
  title: 'Library/PageHeader',
  component: PageHeader,
}

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { PageHeader },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args }
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<PageHeader v-bind="args" />',
})

export const Default = Template.bind({})

Default.args = {
}
