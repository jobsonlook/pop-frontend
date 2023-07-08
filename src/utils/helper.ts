const defaultLnag = 'en_US'

export function getDefalutLanguage() {
  try {
    const match = window.navigator.userAgent.match(/lang=([^;]*)/) ?? []
    const lang = match[1] ?? defaultLnag
    return lang
  } catch (error) {
    return defaultLnag
  }
}
