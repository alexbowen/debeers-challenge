<template>
  <div id="app">
      <div class="container">
        <h1>Debeers technical challenge</h1>
        <div class="row">
          <div class="col-lg-5">
            <Address />
          </div>
          <div class="col-lg-7">
            <Feed />
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import Address from './containers/Address'
import Feed from './containers/Feed'

export default {
    name: 'App',
    components: {
        Address,
        Feed
    }
}
</script>

<style>
</style>
