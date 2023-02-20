<template>
  <div class = "w-100">
    <div class="modal-header">
      <h5 class="modal-title">dgdg 대화 </h5>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
      <section style="background-color: #eee;">
        <div class="">
          <ul class="list-unstyled">

            <li class="d-flex justify-content-between mb-4">
              <div style = "width : 60px"/>
              <div class="card">
                <div class="card-header d-flex justify-content-between ">
                  <p class="fw-bold mb-0 userId">Brad Pitt</p>
                </div>
                <div class="card-body">
                  <p class="mb-0">
                    gd
                  </p>
                </div>
              </div>
            </li>

            <li class="d-flex justify-content-between mb-4">
              <div class="card">
                <div class="card-header d-flex justify-content-between">
                  <p class="fw-bold mb-0">Lara Croft</p>
                </div>
                <div class="card-body">
                  <p class="mb-0">
                    gd
                  </p>
                </div>
              </div>
              <div style =" width : 60px"/>
            </li>

            <li class="d-flex justify-content-between mb-4">
              <div style = "width : 60px"/>
              <div class="card">
                <div class="card-header d-flex justify-content-between ">
                  <p class="fw-bold mb-0 userId">Brad Pitt</p>
                </div>
                <div class="card-body">
                  <p class="mb-0">
                    gd
                  </p>
                </div>
              </div>
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
    }
  },
  methods : {
    connect() {
      let chatData = this.chatData
      // this.websocket = new WebSocket('ws://'+ location.host +'/chat');
      this.websocket = new WebSocket('ws://localhost:8081/api/chat');

      this.websocket.onopen = function (){
        alert(this.sessionId);
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
            chatData.push(
                {
                  id : jsonData.sessionId,
                  message : jsonData.msg
                }
            )
            // message : {
            //   id : jsonData.sessionId,
            //   message : jsonData.msg
            // }
          }
        }
      }
    },
    send() {
      let option ={
        event : "open",
        type: "message",
        sessionId : this.sessionId, //TODO sessionId 이름 바꾸기
        userName : 'userName',
        msg : this.message
      }
      this.websocket.send(JSON.stringify(option));
      this.message = '';
    }
  }
}
</script>

<style>

</style>