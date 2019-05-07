<template>
<div class="login-container">
<div>
<a @click="toBookIndex"><img src="~@/assets/logo.png" title="回到首页"></a>
</div>
<div>
  <el-form class="login-form" :model="form" ref="form" label-width="80px" label-color="#fff">
      <el-form-item >
          <span style="color:#fff" slot="label">用户名称</span>
          <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item >
          <span style="color:#fff" slot="label">用户密码</span>
          <el-input type="password" v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item label="">
          <el-button type="primary" plain @click.native.prevent="login">登陆</el-button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <el-button type="primary" plain @click.native.prevent="register">注册</el-button>
      </el-form-item>
  </el-form>
</div>
</div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      form: {
        username: 'zdd',
        password: '123'
      },
    }
  },
  methods: {
    login() {
      console.log("触发登陆方法");
      console.log(this.form.username);
      console.log(this.form.password);
      let username = this.form.username;
      let password = this.form.password;    
      this.$axios.get("/user/login",{params: {username: username,password: password}}).then(res=>{
        if(res.data.status !== '0'){
            this.$router.push({
              path: res.data.msg
            })
        }else{
            this.$message.error(res.data.msg);
        }
      });
    },
    register() {
      this.$router.push({
            path: 'register'
        })
    },
    toBookIndex(){
        this.$router.push({
            path: 'bookIndex'
        })
    }
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
.login-form {
  width: 614px;
}
.login-container {
  background: url(~@/assets/bg2.jpg) no-repeat center center;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
}
.el-form-item__label{
  color:'#fff'
}
</style>
