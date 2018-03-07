<template>
  <div class="jumbotron address">
    <h2>Query Bitcoin address</h2>
    <div class="form-group">
        <input
            type="text"
            class="form-control"
            placeholder="Enter Address"
            :value="current.input"
            @input="handleAddressChange"
        />
    </div>

    <Select :options="added" :selected="current.selected" />

    <button
        type="submit"
        class="btn btn-primary mt-2 mb-2"
        @click="getAddressTransactions">Query Address
    </button>

    <AddressTable v-if="dataSet.length" />

    <Messages v-if="messages.length" />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import AddressTable from '../components/table/Address'
import Select from '../components/Select'
import Messages from '../components/Messages'

export default {
    name: 'Address',
    components: {
        Select,
        AddressTable,
        Messages
    },
    computed: {
        ...mapState({
            added: state => state.address.added,
            current: state => state.address.current,
            dataSet: state => state.address.transactions,
            messages: state => state.address.messages
        })
    },
    methods: {
        ...mapActions([
            'getAddressTransactions'
        ]),
        handleAddressChange(e) {
            this.$store.commit('setCurrentAddress', e.target.value)
        }
    }
}
</script>
