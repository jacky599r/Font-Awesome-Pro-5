export function classParser(node) {
  return [...node.classList].reduce((acc, cls) => {
    if (cls === 'fa') { return acc; }

    if (cls.startsWith('fa-')) {
      acc.icon = cls.split('-').slice(1).join('-')
    } else {
      acc.rest.push(cls)
    }

    return acc
  }, {icon: '', rest: []})
}
