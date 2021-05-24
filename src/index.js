import framework from "./framework.js"

const MediaQueryPlugin = {
  install(Vue, brand = 'tailwindcss') {
    if (Object.keys(framework).includes(brand)) {
      Vue.mixin({
        created() {
          this.$_mqp = private_scope
          Vue.util.defineReactive(this.$_mqp, 'resize', this.$_mqp.resize)
        },
        computed: framework[brand].mixin.computed
      })
      framework[brand].addEventListeners(private_scope)
    } else {
      throw Error("unsupported UI brand")
    }
  }
}

const private_scope = {
  resize: 1
}

export default MediaQueryPlugin

