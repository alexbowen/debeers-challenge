<template>
    <div class="connection">
        <div class="row">
            <div class="col-9">
                <div class="row">
                <span class="col-4 text-left font-weight-bold">Endpoint:</span>
                <span class="col-8 text-right">{{api.endpoint}}</span>
                </div>

                <div class="row">
                <span class="col-4 text-left font-weight-bold">Status:</span>
                <span class="col-8 text-right text-uppercase">
                    <span :class="connected ? 'connected' : 'disconnected'">{{connected ? 'connected' : 'disconnected'}}</span>
                </span>
                </div>
            </div>

            <div class="col-3 mt-1">
                <button type="submit" class="btn btn-secondary" @click="toggleConnection()">
                    {{connected ? 'Disconnect' : 'Connect'}}
                </button>
            </div>
        </div>

        <Messages v-if="messages.length" />
    </div>
</template>

<script>
import Vue from 'vue'
import { mapGetters, mapActions, mapState } from 'vuex'
import VueNativeSock from 'vue-native-websocket'
import store from '../store'
import { api } from '../api/transactions'
import Messages from '../components/Messages'

Vue.use(VueNativeSock, api.endpoint, { store: store, format: 'json' })

export default {
    name: 'Connection',
    extends: 'Transactions',
    component: {
        Messages
    },
    computed: {
        ...mapGetters({
            connected: 'connected',
            api: 'api'
        }),
        ...mapState({
            messages: state => state.feed.messages
        })
    },
    methods: {
        ...mapActions([
            'toggleConnection'
        ])
    }
}
</script>

<style scoped>
    .connected {
        color:green
    }

    .disconnected {
        color:red
    }
</style>
