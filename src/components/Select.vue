<template>
        <div class="form-group">
            <label>
                Select Address
            </label>
            <select class="form-control" @change="handleAddressChange">
                <option v-for="(option, index) in options" v-bind:key="index" :selected="selected === option">{{option}}</option>
            </select>
        </div>
</template>

<script>
export default {
    name: 'Select',
    props: ['options', 'selected'],
    methods: {
        handleAddressChange(e) {
            this.$store.commit('setCurrentAddress', e.target.value)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
