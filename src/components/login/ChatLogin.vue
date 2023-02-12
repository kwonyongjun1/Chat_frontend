<template>
<!--  <div>-->
<!--    <h2>로그인폼</h2>-->
<!--    <form action="login.jsp" method="post">-->
<!--      <div class="mb-3">-->
<!--        <label class="form-label" for="id">아이디</label>-->
<!--        <input class="form-control" type="text" name="id" id="id" />-->
<!--      </div>-->
<!--      <div class="mb-3">-->
<!--        <label class="form-label" for="pwd">비밀번호</label>-->
<!--        <input class="form-control" type="password" name="pwd" id="pwd" />-->
<!--      </div>-->
<!--      <router-link to="/">-->
<!--        <button class="btn btn-outline-primary btn-sm">로그인</button>-->
<!--      </router-link>-->
<!--    </form>-->
<!--  </div>-->
  <body>
  <div class="container">
    <h2>로그인폼</h2>
    <form action="login.jsp" method="post">
      <div class="mb-3">
        <label class="form-label" for="id">아이디</label>
        <input class="form-control" type="text" name="id" id="id" />
      </div>
      <div class="mb-3">
        <label class="form-label" for="pwd">비밀번호</label>
        <input class="form-control" type="password" name="pwd" id="pwd" />
      </div>
      <button class="btn btn-outline-primary btn-sm" type="submit">로그인</button>
    </form>
  </div>
  </body>
</template>

<script>
export default {
  name: "ChatLogin"
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