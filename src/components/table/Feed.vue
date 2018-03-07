<template>
    <div class='transactions__feed mt-2'>
        <Table :columns='columns' :dataSet='dataSet' />
    </div>
</template>

<script>
import { mapState } from 'vuex'
import Table from '../table'

export default {
    name: 'FeedTable',
    components: {
        Table
    },
    data: function() {
        return {
            columns: [
                {
                    title: 'time',
                    width: '4'
                },
                {
                    title: 'address',
                    width: '6'
                },
                {
                    title: 'value',
                    width: '2'
                }
            ]
        }
    },
    computed: {
        ...mapState({
            dataSet: state => state.feed.history
        })
    }
}
</script>
