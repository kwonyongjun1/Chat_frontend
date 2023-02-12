<template>
  <ChatHeader></ChatHeader>
  <div>
    <div id="container" class="container">
      <h1>채팅</h1>
      <div id="chating" class="chating">
      </div>

      <div id="yourName">
        <table class="inputTable">
          <tr>
            <th>사용자명</th>
            <th><input type="text" name="userName" id="userName"></th>
            <th><button v-on:click="connect">이름 등록</button></th>
          </tr>
        </table>
      </div>
      <div id="yourMsg">
        <table class="inputTable">
          <tr>
            <th>메시지</th>
            <th><input></th>
            <th><button v-on:click="send" id="sendBtn">보내기</button></th>
          </tr>
        </table>


      </div>
    </div>
  </div>
</template>

<script>
import ChatHeader from "@/components/ChatHeader";
export default {
  name: 'ChatMain',
  components: {ChatHeader},
  data()  {

  },
  methods : {
    connect() {
      // this.websocket = new WebSocket('ws://'+ location.host +'/chat');
      this.websocket = new WebSocket('ws://localhost:8081/api/chat');

      this.websocket.onopen = function (data){
        console.log('open!!');
        console.log(data);
      }

      this.websocket.onerror = function (error) {
        console.log(error);
      }
      this.websocket.onmessage = function (event){
        console.log(event.data);
      }

    },
    send() {
      let option ={
        event : "open",
        type: "message",
        sessionId : 'sessionId',
        userName : 'userName',
        msg : 'gd?'
      }
      this.websocket.send(JSON.stringify(option));
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
