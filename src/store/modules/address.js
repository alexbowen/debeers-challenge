import { api } from '../../api/address'
import { fetchData } from '../helpers/data'

const state = {
    added: [],
    current: {
        selected: '',
        input: '',
        submit: ''
    },
    transactions: [],
    messages: []
}

const getters = {
    added: state => state.added,
    current: state => state.current,
    transactions: state => state.transactions,
    messages: state => state.messages
}

export const actions = {
    getAddressTransactions: async({ commit, state }) => {
        commit('ADDRESS_ONREQUEST')

        try {
            const addressData = await fetchData('xhr', {url: `${api.endpoint}${state.current.submit}`})
            commit('ADDRESS_ONRESPONSE', addressData)
        } catch (error) {
            commit('ADDRESS_ONERROR', { type: 'danger', text: 'Error with address API request' })
        }
    }
}

export const mutations = {
    ADDRESS_ONREQUEST: () => {},
    ADDRESS_ONRESPONSE: (state, addressData) => {
        state.transactions = addressData.txs.map(api.mapping)
        state.messages = []
        state.current.selected = addressData.address
        state.current.input = ''

        if (state.added.indexOf(addressData.address) === -1) {
            state.added.push(addressData.address)
        }
    },
    ADDRESS_ONERROR: (state, error) => {
        state.transactions = []
        state.messages.push(error)
    },
    setCurrentAddress: (state, address) => {
        state.current.submit = address
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
