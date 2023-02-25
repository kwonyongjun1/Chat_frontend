<template>
  <div class="container py-5">
    <div class="row">
      <div class="">
        <div class="card">
          <div class="card-body">
            <!-- start -->
            <ul class="list-unstyled mb-0">
              <li class="p-2 border-bottom" style="background-color: #eee;">
                <div  class="d-flex justify-content-between" style = "cursor : pointer">
                  <div class="d-flex flex-row">
                    <div class="pt-1">
                      <p class="fw-bold mb-0">채팅방1</p>
                    </div>
                  </div>
                  <div class="">
                    <button data-bs-target="#chatModal" data-bs-toggle="modal" @click="showModal">JOIN</button>
                  </div>
                </div>
              </li>
            </ul>
            <!-- end -->
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="modal" id="chatModal">
    <div class="modal-dialog">
      <div class="modal-content">
          <ChatRoom ref="ChatRoom"></ChatRoom>
      </div>
    </div>
  </div>
</template>

<script>
import ChatRoom from './ChatRoom.vue'
export default{
  components : {
    ChatRoom
  },
  data(){
    return{
      view : false,
      chatOn : false
    }
  },
  methods : {
    showModal(){
      this.$refs.ChatRoom.connect();
    }
  }

}
</script>

<style>
</style>