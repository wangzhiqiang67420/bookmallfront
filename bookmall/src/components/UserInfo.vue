<template>
<div style="width:100%;margin:0px">
<el-row style="width:100%">
  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="2"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :span="12">
      <div class="grid-content bg-purple">
        欢迎来到云香书屋&nbsp;&nbsp;&nbsp;
        <a  v-if="user == null||user == ''||user == 'undefined'" @click="toLogin" style="color:#337ab7;cursor:pointer">请登录&nbsp;&nbsp;&nbsp;</a>
        <span v-if="user != null&&user != ''&&user != 'undefined'">{{user.username}}&nbsp;&nbsp;&nbsp;</span>
        <a @click="toRegister" style="color:#337ab7;cursor:pointer">免费注册</a>&nbsp;&nbsp;&nbsp;
        <a v-if="user != null&&user != ''&&user != 'undefined'" @click="logout" style="color:#337ab7;cursor:pointer">注销</a>&nbsp;&nbsp;&nbsp;
        <a v-if="user != null&&user != ''&&user != 'undefined'&&user.identity!='ordinary'" @click="toOrderList" style="color:#337ab7;cursor:pointer">我的订单</a>&nbsp;&nbsp;&nbsp;
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
          用户信息
      </div>
  </el-col>
  <el-col :span="8">
      <div class="grid-content" style="line-height:80px;text-align:left"></div>
  </el-col>
</el-row>
<el-row style="width:100%">
    <div class="login-container">
          <el-form class="login-form" :model="form" ref="form" label-width="80px" label-color="#fff">
              <el-form-item prop="username">
                  <span slot="label">账户名称</span>
                  <el-input v-model="user.username" :disabled="true"></el-input>
              </el-form-item>
              <el-form-item prop="nickname">
                  <span slot="label">用户昵称</span>
                  <el-input v-model="user.nickname"></el-input>
              </el-form-item>
              <el-form-item prop="phone">
                  <span slot="label">电话号码</span>
                  <el-input v-model="user.phone"></el-input>
              </el-form-item>
              <el-form-item prop="gender">
                  <span slot="label">性别</span>
                  <input type="radio" v-model="user.gender" name="gender" :checked="checkGender('1')" :value="1"> 男
                  <input type="radio" v-model="user.gender" name="gender" :checked="checkGender('0')" :value="0"> 女
              </el-form-item>
              <el-form-item prop="email">
                  <span slot="label">邮箱地址</span>
                  <el-input v-model="user.email"></el-input>
              </el-form-item>
              <el-form-item prop="detailAddress">
                  <span slot="label">详细地址</span>
                  <el-input v-model="user.detailAddress"></el-input>
              </el-form-item>

              <el-form-item label="">
                  <el-button type="primary" plain @click.native.prevent="saveUserInfo()">保存</el-button>
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
        identity:'ordinary',
        resource:''
      },
      user:storage.get("user")
    }
  },
  methods: {
    checkGender(gender){
      if(gender == this.user.gender){
        return 'active';
      }else{
        return '';
      }
    },
    toRegister() {
        this.$router.push({
            path: 'register'
        })
    },
    toOrderList(){
      this.$router.push({
            path: 'orderList'
      })
    },
    logout(){
        this.$axios.get("/user/logoutnew").then(res=>{
            if(res.data == 'logoutnew'){
                 storage.set("user","");
                 this.$router.push({
                    path: '/'
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

    saveUserInfo(){
          console.log(this.user);
          const data = {
            nickname: this.user.nickname,
            phone: this.user.phone,
            detailAddress: this.user.detailAddress,
            gender: this.user.gender,
            email: this.user.email,
            userId: this.user.userId
          };
          this.$axios.post("/user/update",data).then(res=>{
              if(res.data.code == '200'){
                  storage.set("user",this.user);
                  this.$alert('保存成功', '个人信息', {
                    confirmButtonText: '确定',
                    callback: action => {
                      location.reload();
                    }
                  });
                
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
