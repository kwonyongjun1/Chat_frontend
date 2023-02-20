<template>
  <header>
    <ChatHeader></ChatHeader>
  </header>
    <body>
      <router-view/>
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
