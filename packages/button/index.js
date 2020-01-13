import WaButton from './src/button.vue'

WaButton.install = function(Vue) {
  Vue.component(WaButton.name, WaButton)
}

export default WaButton