<template>

  <div class = "w-50">
    <div>
        <div class="form-floating mb-3 ">
            <input v-model = "userId" type="text" class="form-control" id="floatingInput">
            <label for="floatingInput">id</label>
        </div>
        <!-- <div class="form-floating mb-3">
            <input v-model = "userPassword" type="input" class="form-control" id="floatingPassword" placeholder="Password">
            <label for="floatingPassword">password</label>
        </div> -->
        <div class="form-floating mb-3">
            <!-- <router-link to="/"> -->
                <button type="button" class="btn btn-primary btn-lg" @click="login">Login</button>
            <!-- </router-link> -->
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
      // userPassword : ''
    }
  },
  methods : {
    login() {
      sessionStorage.setItem('userId', this.userId); // sessionStorage id 저장
      location.href = '/'
    }
  }
}
</script>

<style scoped>
.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}
</style>