export default {
    methods: {
        onScrollEnd() {
            console.warn('Have to override method!')
        },
        onScroll(event) {
            const modalBody = event.target
            if (modalBody.clientHeight + modalBody.scrollTop >= modalBody.scrollHeight) {
                this.onScrollEnd()
                this.isRulesReaded = true
            }
        }
    }
}