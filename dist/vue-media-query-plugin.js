!function(e,i){"object"==typeof exports&&"undefined"!=typeof module?i(exports):"function"==typeof define&&define.amd?define(["exports"],i):i((e="undefined"!=typeof globalThis?globalThis:e||self).vueMediaQueries={})}(this,(function(e){"use strict";var i={tailwindcss:{mixin:{computed:{isMinSm(){return this.$_mqp.resize&&matchMedia("(min-width: 640px)").matches},isMinMd(){return this.$_mqp.resize&&matchMedia("(min-width: 768px)").matches},isMinLg(){return this.$_mqp.resize&&matchMedia("(min-width: 1024px)").matches},isMinXl(){return this.$_mqp.resize&&matchMedia("(min-width: 1280px)").matches},isMin2xl(){return this.$_mqp.resize&&matchMedia("(min-width: 1536px)").matches}}},addEventListeners(e){matchMedia("(min-width: 640px)").addEventListener("change",(()=>{e.resize+=1})),matchMedia("(min-width: 768px)").addEventListener("change",(()=>{e.resize+=1})),matchMedia("(min-width: 1024px)").addEventListener("change",(()=>{e.resize+=1})),matchMedia("(min-width: 1280px)").addEventListener("change",(()=>{e.resize+=1})),matchMedia("(min-width: 1536px)").addEventListener("change",(()=>{e.resize+=1}))}}};const t={install(e,t="tailwindcss"){if(!Object.keys(i).includes(t))throw Error("unsupported UI brand");e.mixin({created(){this.$_mqp=n,e.util.defineReactive(this.$_mqp,"resize",this.$_mqp.resize)},computed:i[t].mixin.computed}),i[t].addEventListeners(n)}},n={resize:1};e.default=t,Object.defineProperty(e,"__esModule",{value:!0})}));
