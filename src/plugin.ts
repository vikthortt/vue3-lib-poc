import * as components from './components'
import { App } from 'vue'

const plugin = {
  install (Vue: App) {
    Object.entries(components).forEach(([componentName, component]) => {
      Vue.component(`${componentName}`, component)
    })
  }
}

export default plugin
