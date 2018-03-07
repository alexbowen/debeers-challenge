<template>
<div>
    <section class="jumbotron">
        <h2>Real time Bitcoin transactions</h2>
        <Connection />
        <FeedTable v-if="dataSet.length" />
    </section>
</div>
</template>

<script>
import { mapState } from 'vuex'
import Connection from './Connection'
import FeedTable from '../components/table/Feed'

export default {
    name: 'Transactions',
    components: {
        Connection,
        FeedTable
    },
    computed: {
        ...mapState({
            dataSet: state => state.feed.history
        })
    }
}
</script>
