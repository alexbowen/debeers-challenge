<template>
    <div>
        <div class="row header">
            <div v-bind:class="'col-' + column.width" v-for="(column, index) in columns" v-bind:key="index">{{column.title}}</div>
        </div>

        <div class="row" v-for="(data, index) in dataSet" v-bind:key="index">
            <div v-bind:class="'col-' + column.width" v-for="(column, index) in columns" v-bind:key="index">{{data[column.title]}}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Table',
    props: ['columns', 'data-set']
}
</script>
