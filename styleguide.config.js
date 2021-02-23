module.exports = {
  // set your styleguidist configuration here
  title: 'Default Style Guide',
  // components: 'src/components/**/[A-Z]*.vue',
  // defaultExample: true,
  // sections: [
  //   {
  //     name: 'First Section',
  //     components: 'src/components/**/[A-Z]*.vue'
  //   }
  // ],
  sections: [
    {
      name: 'Form component',
      components: 'src/components/form/*.vue'
    },
    {
      name: 'Other',
      components: 'src/components/*.vue'
    }
  ],
  // webpackConfig: {
  //   // custom config goes here
  // },
  exampleMode: 'expand'
}
