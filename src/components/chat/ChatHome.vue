<template>
  <div  class = "w-75 mx-auto ">
    <div class = "mx-auto">
      <div class = "w-100" style = "float : left">
        <seciton  style="background-color: #eee;">
          <ChatList ></ChatList>
        </seciton>
      </div>
<!--      <div class = "py-5">-->
<!--          <ChatRoom></ChatRoom>-->
<!--      </div>-->

    </div>
  </div>



<!--    <div>-->
<!--      <div id="container" class="container">-->
<!--        <h1>{{userId}}님 안녕하세요</h1>-->
<!--        <h1>채팅</h1>-->
<!--        <div id="chating" class="chating">-->
<!--        </div>-->
<!--          <th><button v-on:click="connect">연결</button></th>-->
<!--        <div id="yourMsg">-->
<!--          <table class="inputTable">-->
<!--            <tr>-->
<!--              <th>메시지</th>-->
<!--              <th><input v-model = "message"></th>-->
<!--              <th><button v-on:click="send" id="sendBtn">보내기</button></th>-->
<!--            </tr>-->
<!--          </table>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
</template>

<script>
import ChatList from './ChatList.vue'
// import ChatRoom from './ChatRoom.vue'
export default{
    name : 'ChatHome',
    components :{
      ChatList,
      // ChatRoom
    },
    data() {
      return{
        userId : sessionStorage.getItem('userId'),
        message : ''
      }
    },
    methods : {
      connect() {
      // this.websocket = new WebSocket('ws://'+ location.host +'/chat');
      this.websocket = new WebSocket('ws://localhost:8081/api/chat');

      this.websocket.onopen = function (data){
        console.log(data);
        alert(sessionStorage.getItem("id"));
      }

      this.websocket.onerror = function (error) {
        alert("연결에 실패했습니다.")
        console.log(error);
      }
      this.websocket.onmessage = function (event){
        let msg = event.data;
        if(msg != null){
          let jsonData = JSON.parse(msg);
          if(jsonData.type == "getId"){
            console.log(jsonData.sessionId);
          }else if(jsonData.type == "message"){
            alert(jsonData.msg);
          }
        }
      }

    },
    send() {
      let option ={
        event : "open",
        type: "message",
        sessionId : this.userId, //TODO sessionId 이름 바꾸기
        userName : 'userName',
        msg : this.message
      }
      this.websocket.send(JSON.stringify(option));
    }
    }
}
</script>

<style>
</style>