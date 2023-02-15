<template>
  <header>
    <ChatHeader></ChatHeader>
  </header>
    <body>
      <div class = "position-absolute top-50 start-50 translate-middle">
      <router-view/>
      </div>
   </body>
  <footer>

  </footer>
  
</template>

<script>
import ChatHeader from "@/components/ChatHeader";
export default {
  name: 'ChatMain',
  components: {ChatHeader},
  data()  {
    return {
    }
  },
  methods : {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
