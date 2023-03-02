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
      <button @click="test">test</button>
    </div>
  </div>
</template>

<script>
import Stomp from 'webstomp-client'
import SockJS from 'sockjs-client'
import axios from "axios";
export default {
  data() {
    return {
      sessionId : sessionStorage.getItem("userId"),
      anotherUserId : '',
      chatData : [],
      message : '',
      testList : [],
      roomId : 1
    }
  },
  methods : {
    connect() {
      let sockJs = new SockJS("http://localhost:8081/api/chat");
      this.stompClient = Stomp.over(sockJs);

      this.stompClient.connect({},
          ()=> {
          this.connected = true;
          console.log("연결 성공.")

          // 구독한 메세지 받는 경우
          this.stompClient.subscribe("/sub/room/" + this.roomId, res => {
            this.testList.push(JSON.parse(res.body));
            alert(JSON.parse(res.body));
          })
        },
          () => {
            this.connected = false;
            console.log("연결 실패.")
          }
      )
    },
    send(){
      let msg = {
        userName : this.sessionId,
        messageContent : this.message,
        ChatRoomId : 1
      }
      this.stompClient.send("/pub/chat/message", JSON.stringify(msg),{});
    },
    test(){
      axios.get('http://localhost:8081/chat/room')
        .then((response)=>{
          console.log(response);
        })
        .catch((error)=>{
          console.log(error);
        })
    }
  }
}
</script>

<style>

</style>