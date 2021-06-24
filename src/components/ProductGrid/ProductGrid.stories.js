import ProductGrid from './ProductGrid'

export default {
  title: 'Library/ProductGrid',
  component: ProductGrid,
}

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { ProductGrid },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args }
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<ProductGrid v-bind="args" />',
})

export const Default = Template.bind({})

Default.args = {
  products: [
    {
      id: 1,
      name: 'Iron Man',
      shortDescription: 'Lorem Ipsum dolor',
      price: '€ 1.200,00',
      imageUrl:
        'https://images.unsplash.com/photo-1594463750939-ebb28c3f7f75?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
      id: 2,
      name: 'Hulk',
      shortDescription: 'Lorem Ipsum dolor',
      price: '€ 1.200,00',
      imageUrl:
        'https://images.unsplash.com/photo-1542623024-a797a755b8d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
      id: 3,
      name: 'Thor',
      shortDescription: 'Lorem Ipsum dolor',
      price: '€ 1.200,00',
      imageUrl:
        'https://images.unsplash.com/photo-1612739840009-38a1f9516866?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
      id: 4,
      name: 'Spider Man',
      shortDescription: 'Lorem Ipsum dolor',
      price: '€ 1.200,00',
      imageUrl:
        'https://images.unsplash.com/photo-1557985594-29f3ad9f5134?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
      id: 5,
      name: 'Captain America',
      shortDescription: 'Lorem Ipsum dolor',
      price: '€ 1.200,00',
      imageUrl:
        'https://images.unsplash.com/photo-1624213111452-35e8d3d5cc18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
      id: 6,
      name: 'Groot',
      shortDescription: 'Lorem Ipsum dolor',
      price: '€ 1.200,00',
      imageUrl:
        'https://images.unsplash.com/photo-1592513002316-e4fa19175023?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
  ]
}
