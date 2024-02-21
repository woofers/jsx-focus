if (process.env.NODE_ENV !== 'production') {
  module.exports = require('./jsx-focus.dev.js')
} else {
  module.exports = require('./jsx-focus.js')
}