var en = require('./translations.en.json')
var de = require('./translations.de.json')

const i18n = {
  translations: {
    en,
    zh,
  },
  defaultLang: 'en',
  useBrowserDefault: true,
  // optional property will default to "query" if not set
  languageDataStore: 'query' || 'localStorage',
}

module.exports = i18n
