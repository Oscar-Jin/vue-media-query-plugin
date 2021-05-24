export default {
  tailwindcss: {
    mixin: {
      computed: {
        isMinSm() {
          return this.$_mqp.resize && matchMedia('(min-width: 640px)').matches
        },
        isMinMd() {
          return this.$_mqp.resize && matchMedia('(min-width: 768px)').matches
        },
        isMinLg() {
          return this.$_mqp.resize && matchMedia('(min-width: 1024px)').matches
        },
        isMinXl() {
          return this.$_mqp.resize && matchMedia('(min-width: 1280px)').matches
        },
        isMin2xl() {
          return this.$_mqp.resize && matchMedia('(min-width: 1536px)').matches
        }
      }
    },
    addEventListeners(privateScope) {
      matchMedia('(min-width: 640px)').addEventListener('change', () => {
        privateScope.resize += 1
      })
      matchMedia('(min-width: 768px)').addEventListener('change', () => {
        privateScope.resize += 1
      })
      matchMedia('(min-width: 1024px)').addEventListener('change', () => {
        privateScope.resize += 1
      })
      matchMedia('(min-width: 1280px)').addEventListener('change', () => {
        privateScope.resize += 1
      })
      matchMedia('(min-width: 1536px)').addEventListener('change', () => {
        privateScope.resize += 1
      })
    }
  }
}
