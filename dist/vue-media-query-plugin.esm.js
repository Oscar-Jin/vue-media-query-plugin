var i={tailwindcss:{mixin:{computed:{isMinWidthSm(){return this.$_mqp.resize&&matchMedia("(min-width: 640px)").matches},isMinWidthMd(){return this.$_mqp.resize&&matchMedia("(min-width: 768px)").matches},isMinWidthLg(){return this.$_mqp.resize&&matchMedia("(min-width: 1024px)").matches},isMinWidthXl(){return this.$_mqp.resize&&matchMedia("(min-width: 1280px)").matches},isMinWidth2xl(){return this.$_mqp.resize&&matchMedia("(min-width: 1536px)").matches}}},addEventListeners(i){matchMedia("(min-width: 640px)").addEventListener("change",(()=>{i.resize+=1})),matchMedia("(min-width: 768px)").addEventListener("change",(()=>{i.resize+=1})),matchMedia("(min-width: 1024px)").addEventListener("change",(()=>{i.resize+=1})),matchMedia("(min-width: 1280px)").addEventListener("change",(()=>{i.resize+=1})),matchMedia("(min-width: 1536px)").addEventListener("change",(()=>{i.resize+=1}))}}};const e={install(e,n="tailwindcss"){if(!Object.keys(i).includes(n))throw Error("unsupported UI brand");e.mixin({created(){this.$_mqp=t,e.util.defineReactive(this.$_mqp,"resize",this.$_mqp.resize)},...i[n].mixin}),i[n].addEventListeners(t)}},t={resize:1};export default e;