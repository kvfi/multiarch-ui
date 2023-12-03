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

