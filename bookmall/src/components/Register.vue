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
        <a @click="toLogin" style="color:#337ab7;cursor:pointer">请登录</a>&nbsp;&nbsp;&nbsp;
        <a @click="toLogin" style="color:#337ab7;cursor:pointer">免费注册</a>
      </div>
  </el-col>
</el-row>

<el-row style="width:100%">
  <el-col :span="4"><div class="grid-content"></div></el-col>
  <el-col :span="4">
      <div class="grid-content">
         <img style="width:130px" src="~@/assets/book1.jpg" title="回到首页" />
      </div>
  </el-col>
  <el-col :span="8"><div class="grid-content"></div></el-col>
  <el-col :span="8">
      <div class="grid-content" style="line-height:80px">
          <button type="button" onclick="window.open('cart/items')" style="background-color: #ff2832;border-color: #ff2832" class="btn btn-info">
                <span class="glyphicon glyphicon-shopping-cart"></span>
                我的购物车
            </button>
      </div>
  </el-col>
</el-row>

<div style="height: 3px; background-color: #ff2832;"></div>
<el-row style="width:100%">
  
</el-row>






</div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      form: {
        name: '',
        password: ''
      },
    }
  },
  methods: {
    toLogin(){
        this.$router.push({
              path: 'login'
        })
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
  .btn {
    display: inline-block;
    padding: 6px 12px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 4px;
  }
.glyphicon {
    position: relative;
    top: 1px;
    display: inline-block;
    font-family: 'Glyphicons Halflings';
    font-style: normal;
    font-weight: 400;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}



.sidenav {
    width: 130px;
    z-index: 1;
    top: 20px;
    left: 10px;
    background: #f2f2f2;
    overflow-x: hidden;
    padding: 8px 0;
}

.sidenav a {
    padding: 6px 8px 6px 16px;
    text-decoration: none;
    font-size: 15px;
    color: #2196F3;
    display: block;
}

.sidenav a:hover {
    color: #064579;
}

ul, ol {
    list-style: none;
}

.product_ul li {
    width: 150px;
    margin-right: 30px;
    margin-bottom: 16px;
    height: 250px;
    position: relative;
    overflow: visible;
    float: left;
}
</style>
