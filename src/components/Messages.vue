<template>
    <div>
        <div v-bind:class="`user-message alert alert-${message.type}`" v-for="(message, index) in messages" v-bind:key="index">{{message.text}}</div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'Messages',
    computed: {
        ...mapState({
            messages: state => state.address.messages
        })
    }
}
</script>
