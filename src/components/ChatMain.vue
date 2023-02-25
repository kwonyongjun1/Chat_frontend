<template>
  <div  class = "w-75 mx-auto ">
    <div class = "mx-auto">
      <div class = "w-100" style = "float : left">
        <seciton  style="background-color: whitesmoke;">
          <ChatRoomList ></ChatRoomList>
        </seciton>
      </div>
    </div>
  </div>

</template>

<script>
import ChatRoomList from './chat/ChatRoomList.vue';

export default{
  components :{
    ChatRoomList,
  },
  data() {
    return{
      userId : sessionStorage.getItem('userId'), //
      message : ''
    }
  }
}
</script>
