import scrollHandler from "@/mixins/scrollHandler";

export default {
    install(Vue) {
        Vue.mixin(scrollHandler),

        Vue.prototype.$log = function() {
            console.log('plugin works!')
        }
    }
}