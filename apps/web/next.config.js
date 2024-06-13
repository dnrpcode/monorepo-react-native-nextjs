const { withTamagui } = require('@tamagui/next-plugin')
module.exports = function (name, { defaultConfig }) {

  let config = {

    ...defaultConfig,

    // ...your configuration

  }
  const tamaguiPlugin = withTamagui({

    config: './tamagui.config.ts',

    components: ['tamagui'],

    appDir: true,

  })
  return {

    ...config,

    ...tamaguiPlugin(config),

  }

}
