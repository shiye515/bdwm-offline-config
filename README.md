# bdwm-offline-config
生成百度外卖离线包的config

[![NPM version][npm-image]][npm-url]
[![npm download][download-image]][download-url]

[npm-image]: http://img.shields.io/npm/v/bdwm-offline-config.svg?style=flat-square
[npm-url]: http://npmjs.org/package/bdwm-offline-config
[download-image]: https://img.shields.io/npm/dm/bdwm-offline-config.svg?style=flat-square
[download-url]: https://npmjs.org/package/bdwm-offline-config


## 安装

[![bdwm-offline-config](https://nodei.co/npm/bdwm-offline-config.png)](https://npmjs.org/package/bdwm-offline-config)

`npm install bdwm-offline-config --save-dev`

## 用法

```javascript
var BdwmOfflineConfig = require('bdwm-offline-config')

module.exports = {
    plugins: [
        new OfflineConfigWebpackPlugin({
            id: 'bdwm.plugin.supermarket',
        })
    ]
}
```

### id
离线包id

## 截图

![webpack.conf.js](https://raw.githubusercontent.com/shiye515/bdwm-offline-config/screenshot/webpack.conf.js.png)

![cli](https://raw.githubusercontent.com/shiye515/bdwm-offline-config/screenshot/cli.png)

![config.json](https://raw.githubusercontent.com/shiye515/bdwm-offline-config/screenshot/config.json.png)
