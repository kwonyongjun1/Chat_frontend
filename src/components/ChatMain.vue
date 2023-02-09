<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <b-button>Button</b-button>
    <b-button variant="danger">Button</b-button>
    <b-button variant="success">Button</b-button>
    <b-button variant="outline-primary">Button</b-button>
    <router-link to="/login">login</router-link>
  </div>
</template>

<script>
export default {
  name: 'ChatMain',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
