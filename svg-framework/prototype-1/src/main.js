import icons from './icons'
import { make } from './builder'
import { classParser } from './dom'

import './styles.scss'

document.addEventListener('DOMContentLoaded', function (_event) {
  [...document.querySelectorAll('.fa, .fad')].forEach(function (node) {
    const iconClasses = classParser(node)
    const { icon, duotone } = iconClasses;

    if (icon && icons[icon]) {
      const [width, height, ...layers] = icons[icon];
      const val = make({
        width,
        height,
        layers,
        duotone,
        extraClasses: iconClasses.rest
      })

      node.outerHTML = val
    }
  })
});

