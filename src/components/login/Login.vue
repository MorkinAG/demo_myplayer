<template>
    <div id="Login">
      <h1>网易云音乐</h1>
      <div class="Login_Sign">
        <el-input
          type="text"
          placeholder="请输入用户名"
          v-model="soName"
          clearable
        >
        </el-input>
      </div>
      <div class="Login_Sign">
        <el-input
          type="password"
          placeholder="请输入密码"
          v-model="soPassword"
          @change="loginValue"
          clearable
        >
        </el-input>
      </div>
      <div class="Login_Sign">
        <el-button type="primary" @click="login" v-if="isOK">登录</el-button>
      </div>
    </div>
</template>

<script>
  export default {
    name: "Login",
    data () {
      return {
        isOK: true,
        name: 'admin',
        password: '123',
        soName: 'admin',
        soPassword: '123',
        input: '',
      }
    },
    methods: {
      loginValue () {
        if (this.soName === "") {
          this.$message.error("用户名不能为空");
          return false
        }
        if (this.soPassword === "") {
          this.$message.error("密码不能为空");
          return false
        }
        return true
      },
      login () {
        if (this.loginValue()) {
          this.name == this.soName && this.password == this.soPassword ?
            this.$router.push({path:"/Homepage"}):
            this.$message.warning("用户名或密码错误!");
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  #Login {
    width 400px
    height 400px
    background #FFF
    box-shadow 0 1px 1px 1px rgba(0,0,0,0.5)
    margin 100px auto
    h1 {
      height 70px
      line-height 70px
      text-align center
    }
    .Login_Sign {
      width 360px
      margin 50px auto
      .el-button {
        width 360px
      }
    }
  }
</style>
