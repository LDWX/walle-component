import packages from '../package.json'

import Button from "../packages/button/index.js"
import Input from "../packages/input/index.js"

const components = [
  Button,
  Input
]

const install = function(Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.vue)
}

export default {
  version: packages.version,
  install,
  Button,
  Input
}