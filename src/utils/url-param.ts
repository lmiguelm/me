export function formatUrlParam(param: string) {
  return param.trim().replaceAll(' ', '-').toLowerCase()
}

export function parseUrlParam(param: string) {
  return param
    .replaceAll('-', ' ')
    .replace(/\b\w/g, (match) => match.toUpperCase())
}
