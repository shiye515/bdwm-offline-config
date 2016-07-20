'use strict'
class OfflineConfig {

    constructor(id, compilation) {
        this.id = id;
        this.assets = Object.keys(compilation.assets);
    }

    size() {
        return Buffer.byteLength(this.source(), 'utf8');
    }

    source() {
        var config = {
            id: this.id,
            pages: this.assets
                .filter(v => /\.html$/.test(v))
                .map(v => {
                    return {
                        name: v.slice(0, -5).replace('/', '-'),
                        file: '/' + v
                    }
                })
        };
        return JSON.stringify(config, null, '    ')
    }
}

class OfflineConfigWebpackPlugin {

    constructor({ output = 'config.js', id = 'default' } = {}) {
        this.id = id;
        this.output = output;
    }

    apply(compiler) {
        compiler.plugin('emit', (compilation, callback) => {
            const config = new OfflineConfig(this.id, compilation);
            compilation.assets[this.output] = config;
            callback();
        });
    }
}
module.exports = OfflineConfigWebpackPlugin
