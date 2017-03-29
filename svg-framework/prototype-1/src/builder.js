export function make(width, height, pathD, extraClasses) {
  return `<svg class="${extraClasses}" xmlns="http://www.w3.org/2000/svg" style="fill: currentColor; vertical-align: -12.5%; height: 1em" viewBox="0 0 ${width} ${height}" ><path d="${pathD}" /></svg>`
}
