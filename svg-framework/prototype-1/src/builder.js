export function make(options) {
  const { width, height, layers, duotone, extraClasses } = options;

  const pathD = layers

  let paths = []

  for (let i = 0; i < (duotone ? layers.length : 1); i++) {
    paths.push(`<path class="l-${i + 1}" d="${layers[i]}" />`)
  }

  return `<svg class="fa-replaced ${extraClasses}" xmlns="http://www.w3.org/2000/svg" style="vertical-align: -12.5%; height: 1em" viewBox="0 0 ${width} ${height}" >` +
    paths.join('') +
  '</svg>'
}
