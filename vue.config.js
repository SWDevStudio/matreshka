module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'stylus',
      patterns: ['src/assets/system/*.styl']
    },
    electronBuilder: {
      nodeIntegration: true,
      mainProcessWatch: ['src/scripts/server/*.ts']
    }
  }

}
