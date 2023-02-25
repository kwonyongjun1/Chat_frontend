<template>
  <div class = "w-100">
    <div class="modal-header">
      <h5 class="modal-title">대화방</h5>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
      <section style="background-color: #eee;">
        <div class="">
          <ul class="list-unstyled">
            <li class="d-flex justify-content-between mb-4" v-for = "(item,i) in chatData" v-bind:key="i">
              {{item.id}} : {{item.message}}
            </li>
          </ul>
          <div class="form-outline">
            <textarea class="form-control" id="textAreaExample2" rows="4" v-model="message">
            </textarea>
            <button type="button" class="btn btn-info btn-rounded float-end" @click = "send">Send</button>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sessionId : sessionStorage.getItem("userId"),
      anotherUserId : '',
      chatData : [],
      message : ''
    }
  },
  methods : {
    connect() {
      let chatData = this.chatData
      this.websocket = new WebSocket('ws://localhost:8081/api/chat');

      /**
       * 연결 시 사용
       */
      this.websocket.onopen = function (){
        console.log("connect");
      }

      this.websocket.onerror = function (error) {
        console.log('error : ' + error);
      }

      this.websocket.onmessage = function (event){
        let msg = event.data;
        if(msg != null){
          let jsonData = JSON.parse(msg);
          if(jsonData.type == "message"){
            chatData.push(
                {
                  id : jsonData.sessionId,
                  message : jsonData.msg
                }
            )
          }
        }

      }
    },
    send() {
      let option ={
        event : "open",
        type: "message",
        sessionId : this.sessionId,
        userName : 'userName',
        msg : this.message,
        roomNumber : 1
      }
      this.websocket.send(JSON.stringify(option));
      this.message = '';
    }
  }
}
</script>

<style>

</style>