import icons from './icons'
import { make } from './builder'
import { classParser } from './dom'

document.addEventListener('DOMContentLoaded', function (_event) {
  [...document.querySelectorAll('.fa')].forEach(function (icon) {
    const iconClasses = classParser(icon)
    const { icon } = iconClasses;

    if (icon && icons[icon]) {
      icon.outerHTML = make.apply(undefined, icons[icon].concat(iconClasses.rest))
    }
  })
});

