import PageFooter from './PageFooter'

export default {
  title: 'Library/PageFooter',
  component: PageFooter,
}

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { PageFooter },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args }
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<PageFooter v-bind="args" />',
})

export const Default = Template.bind({})

Default.args = {
  copyright: '& 2020 Workflow, Inc. All rights reserved.',
  companyLogo: 'LOGO_main.svg',
  columnOneMenuItems: [
    { name: 'Marketing', href: '#' },
    { name: 'Analytics', href: '#' },
    { name: 'Commerce', href: '#' },
    { name: 'Insights', href: '#' },
  ],
  columnTwoMenuItems: [
    { name: 'Pricing', href: '#' },
    { name: 'Documentation', href: '#' },
    { name: 'Guides', href: '#' },
    { name: 'API Status', href: '#' },
  ],
  columnThreeMenuItems: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Jobs', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Partners', href: '#' },
  ],
  metaMenuItems: [
    { name: 'Nutzungsbedingungen', href: '#' },
    { name: 'Verkaufsbedingungen', href: '#' },
    { name: 'Impressum', href: '#' },
    { name: 'Datenschutzrichtlinien und Cookie-Erklärung', href: '#' },
    { name: 'Cookie-Einstellungen ändern', href: '#' },
  ],
  socialProfiles: [
    { name: 'Instagram', href: '#' },
    { name: 'Facebook', href: '#' },
    { name: 'Youtube', href: '#' },
  ],
}
