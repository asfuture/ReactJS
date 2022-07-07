const path = require('path')

// eslint-disable-next-line no-undef
modules.exports = {
    entry:'.scr/app.js',
    output:{
        path:path.resolve(__dirname, 'dist'),
        filename:'bundler.js'
    }
}
