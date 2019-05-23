<template>
<div style="width:100%;margin:0px">
<el-row style="width:100%">
  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :span="8">
      <div class="grid-content bg-purple">
        欢迎来到云香书屋&nbsp;&nbsp;&nbsp;
        <a  v-if="user == null||user == ''||user == 'undefined'" @click="toLogin" style="color:#337ab7;cursor:pointer">请登录&nbsp;&nbsp;&nbsp;</a>
        <span v-if="user != null&&user != ''&&user != 'undefined'">{{user.username}}&nbsp;&nbsp;&nbsp;</span>
        <a @click="toRegister" style="color:#337ab7;cursor:pointer">免费注册</a>&nbsp;&nbsp;&nbsp;
        <a v-if="user != null&&user != ''&&user != 'undefined'" @click="logout" style="color:#337ab7;cursor:pointer">注销</a>&nbsp;&nbsp;&nbsp;
        <a v-if="user != null&&user != ''&&user != 'undefined'&&user.identity!='ordinary'" @click="toAdmin" style="color:#337ab7;cursor:pointer">进入后台管理页面</a>
      </div>
  </el-col>
</el-row>

<el-row style="width:100%">
  <el-col :span="4"><div class="grid-content"></div></el-col>
  <el-col :span="4">
      <div class="grid-content">
         <router-link :to="{path: 'bookIndex'}" exact>
            <img style="width:130px" src="~@/assets/book1.jpg" title="回到首页" />
         </router-link>
      </div>
  </el-col>
  <el-col :span="8"><div class="grid-content"></div></el-col>
  <el-col :span="8">
      <div class="grid-content" style="line-height:80px">
          <button type="button" @click="toShoppingCart" style="background-color: #ff2832;border-color: #ff2832" class="btn btn-info">
                <span class="glyphicon glyphicon-shopping-cart"></span>
                我的购物车
          </button>
      </div>
  </el-col>
</el-row>

<div style="height: 3px; background-color: #ff2832;"></div>
<el-row style="width:100%">
  <el-col :span="4"><div class="grid-content"></div></el-col>
  <el-col :span="4"></el-col>
  <el-col :span="8">
      <div class="grid-content" style="line-height:80px;text-align:right">
      新用户注册/企业用户注册
      </div>
  </el-col>
  <el-col :span="8">
      <div class="grid-content" style="line-height:80px;text-align:left"></div>
  </el-col>
</el-row>
<el-row style="width:100%">
    <div class="login-container">
          <el-form class="login-form" :rules="rules" :model="form" ref="form" label-width="80px" label-color="#fff">
              <el-form-item prop="username">
                  <span slot="label">用户名称</span>
                  <el-input v-model="form.username"></el-input>
              </el-form-item>
              <el-form-item prop="password">
                  <span slot="label">登陆密码</span>
                  <el-input type="password" v-model="form.password"></el-input>
              </el-form-item>
              <el-form-item prop="checkPassword">
                  <span slot="label">确认密码</span>
                  <el-input type="password" v-model="form.checkPassword"></el-input>
              </el-form-item>
              <el-form-item prop="email">
                  <span slot="label">邮箱地址</span>
                  <el-input v-model="form.email"></el-input>
              </el-form-item>
              <el-form-item prop="identity">
                  <span slot="label"></span>
                  <el-radio v-model="form.identity" label="ordinary">普通用户</el-radio>
                  <el-radio v-model="form.identity" label="business">企业用户</el-radio>
              </el-form-item>

              <el-form-item label="">
                  <el-button type="primary" plain @click.native.prevent="checkPass">注册</el-button>
              </el-form-item>
          </el-form>
    </div>
</el-row>


</div>
</template>

<script>
import storage from '@/libs/storage';
export default {
  name: 'Register',
  data () {
    return {
      form: {
        username: '',
        password: '',
        checkPassword: '',
        identity:'ordinary'
      },
      rules: {
        username: [{ required: true, message: '请输入用户名称', trigger: 'blur' }],
        password: [{ required: true, message: '请输入用户密码', trigger: 'blur' }],
        checkPassword: [{ required: true, message: '请确认用户密码', trigger: 'blur' }]
      },
      user:storage.get("user")
    }
  },
  methods: {
    logout(){
        this.$axios.get("/user/logoutnew").then(res=>{
            if(res.data == 'logoutnew'){
                 storage.set("user","");
                 this.$router.push({
                    path: 'login'
                 })

            }
        });
    },
    toShoppingCart(){
        this.$router.push({
            path: 'shoppingCart'
        })
    },
    toAdmin(){
        var newPage = window.open();
        // window.open('about:blank');
        newPage.location.href = 'http://localhost:8088/admin/adminLogin?username='+this.user.username+'&password='+this.user.password;
    },
    toLogin(){
        this.$router.push({
            path: 'login'
        })
    },

    checkPass(){
        if(this.form.password == this.form.checkPassword){
            this.registerSubmit();
        }else{
            this.$message.error("确认密码不一致");
        }
    },

    registerSubmit(){
        this.$refs.form.validate(valid => {
        if (valid) {
          this.logining = true;
          const data = {
            username: this.form.username,
            password: this.form.password,
            identity: this.form.identity,
            email: this.form.email
          };
          this.$axios.post("/user/register",data).then(res=>{
              if(res.data.status !== '0'){
                    this.$message({
                        message: '注册成功',
                        type: 'success'
                    });
                    this.$router.push({
                        path: 'login'
                    })
                }else{
                    this.$message.error(res.data.msg);
                }
          });
        } else {
          return false;
        }
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #f2f2f2;
  }
  .bg-purple-light {
    background: #f2f2f2;
  }
  .grid-content {
    border-radius: 0px;
    min-height: 36px;
    line-height: 36px;
    font-family:"Arial";
    font-size:14px
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f2f2f2;
  }
  .btn-info {
    color: #fff;
    background-color: #5bc0de;
    border-color: #46b8da;
  }
.login-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
}

.login-form {
  width: 614px;
}
</style>
