import Vue from 'vue'
import Vuex from 'vuex'
import feed from './modules/feed'
import address from './modules/address'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules: {
        feed,
        address
    },
    strict: debug,
    plugins: process.env.NODE_ENV !== 'production'
        ? [createLogger()]
        : []
})
