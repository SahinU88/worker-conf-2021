import Frontpage from './Frontpage.vue'
import * as ProductGridStories from './../components/ProductGrid/ProductGrid.stories.js'

export default {
  component: Frontpage,
  title: 'Frontpage',
}

const Template = (args) => ({
  components: { Frontpage },
  setup() {
    return { args }
  },
  template: '<Frontpage v-bind="args"/>',
})

export const Simple = Template.bind({})

Simple.args = {
  ...ProductGridStories.Default.args,
}
