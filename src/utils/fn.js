export const getAppFromPath = (path) => {
  const f = path.split('/')
  return f[1]
}

export const getMenuKeyFromAppName = (appName) => {
  return appName
    .replace(/(.)([A-Z][a-z]+)/, '$1_$2')
    .replace(/([a-z0-9])([A-Z])/, '$1_$2')
    .toLowerCase()
}

export const generateRandomString = (length) => {
  let result = ''
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const charactersLength = characters.length
  let counter = 0
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
    counter += 1
  }
  return result
}