import { api } from '../../api/transactions'

const state = {
    connected: false,
    api: api,
    history: [],
    messages: []
}

const getters = {
    connected: state => state.connected,
    api: state => state.api,
    socket: state => state.socket,
    history: state => state.history,
    messages: state => state.messages
}

const actions = {
    toggleConnection: ({ commit, state }) => {
        state.connected ? commit('SOCKET_CLOSE') : commit('SOCKET_OPEN')
    }
}

const mutations = {
    SOCKET_ONOPEN(state, event) {
        console.log('websocket', event.target)
        state.socket = event.target
        state.messages = []
        state.connected = true
        state.socket.sendObj(JSON.parse(state.api.message))
    },
    SOCKET_ONCLOSE(state, event) {
        state.connected = false
    },
    SOCKET_ONERROR(state, event) {
        state.history = []
        state.messages.push({ type: 'danger', text: 'Error with transactions WS feed' })
    },
    SOCKET_ONMESSAGE(state, message) {
        const transaction = [message.x].map(state.api.mapping)

        state.history.push(transaction[0])

        if (state.history.length > 20) {
            state.history = state.history.slice(1, 20 + 1)
        }
    },
    // custom mutations
    SOCKET_CLOSE(state) {
        state.socket.close()
    },
    SOCKET_OPEN(state) {
        state.socket.connect()
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
