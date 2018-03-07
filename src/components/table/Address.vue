<template>
    <div class="transactions__feed mt-2">
        <Table :columns="columns" :dataSet="dataSet" />
    </div>
</template>

<script>
import { mapState } from 'vuex'
import Table from '../table'

export default {
    name: 'AddressTable',
    components: {
        Table
    },
    data: function() {
        return {
            columns: [
                {
                    title: 'time',
                    width: '6'
                },
                {
                    title: 'value',
                    width: '3'
                },
                {
                    title: 'details',
                    width: '3'
                }
            ]
        }
    },
    computed: {
        ...mapState({
            dataSet: state => state.address.transactions
        })
    }
}
</script>
