<template>
  <div class = "w-50">
    <div class = "position-absolute start-50 translate-middle" style = "top : 25%">
      <h3>ID를 입력해주세요</h3>
      <div class="form-floating mb-3 ">
        <input v-model = "userId" type="text" class="form-control" id="floatingInput">
        <label for="floatingInput">id</label>
      </div>
<!--      <div class="form-floating mb-3">-->
<!--        <input v-model = "userPassword" type="input" class="form-control" id="floatingPassword" placeholder="Password">-->
<!--        <label for="floatingPassword">password</label>-->
<!--      </div>-->
      <div class="form-floating mb-3">
        <router-link to="/">
          <button type="button" class="btn btn-primary btn-lg" @click="login">Login</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatLogin",
  data(){
    return{
      userId : '',
    }
  },
  methods : {
    login() {
      sessionStorage.setItem('userId', this.userId); // sessionStorage id 저장
    }
  }
}
</script>
