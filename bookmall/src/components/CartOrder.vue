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
        <a @click="toUserInfo" v-if="user != null&&user != ''&&user != 'undefined'" style="color:#337ab7;cursor:pointer">{{user.username}}&nbsp;&nbsp;&nbsp;</a>
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
  <el-col :span="24">
    <div class="grid-content">
        <div style="height:1px;background-color:#ffffff;margin-top:10px"></div>
        <div v-if="user != null&&user != ''&&user != 'undefined'" class="row" id="cart_table_div">
            收货人信息&nbsp;&nbsp;&nbsp;
            <div>
            姓名：<span v-if="user != null&&user != ''&&user != 'undefined'">{{user.nickname}}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            地址：<span v-if="user != null&&user != ''&&user != 'undefined'">{{user.detailAddress}}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            联系方式：<span v-if="user != null&&user != ''&&user != 'undefined'">{{user.phone}}</span>
            </div>
        </div>
        <div class="row" id="cart_table_div">
            <table id="cart_table" border="0" cellpadding="0" cellspacing="0">
                <thead>
                <tr id="table_head">
                    <th width="10%"></th>
                    <th width="30%">商品信息</th>
                    <th width="20%">单价（元）</th>
                    <th width="20%">数量</th>
                    <th width="20%">小计（元）</th>
                </tr>
                </thead>
                <tbody>
                    <tr v-for="(value, key) in cartBooks.cartItems" :key="key" class="cart_item" id="cart_item91">
                        <td></td>
                        <td>
                            <a style="cursor:pointer" @click="toBookInfo(value.bookInfo.bookId)"><img :src="value.bookInfo.imageUrl" width="20%"></a>
                            <span style="cursor:pointer" @click="toBookInfo(value.bookInfo.bookId)">{{value.bookInfo.name }}</span>
                        </td>
                        <td>
                            <span class="red">￥{{value.bookInfo.price }}</span>
                        </td>
                        <td>
                            <div class="">
                                {{value.buyNum }}
                            </div>
                        </td>
                        <td>
                            <span class="red">￥</span>
                            <span class="red subTotal">
                                {{value.subTotal }}
							</span>
                        </td>
                    </tr>
                <tr class="tfoot">
                    <td class="tcol1">
                        <span>合计</span>
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td class="shop_total">
                        {{cartBooks.total}}
                    </td>
                </tr>

                </tbody>

            </table>
        </div>
        <div class="account_div" style="align:center;">
            <div id="shopping_total">
                <a @click="toPay()" class="total_btn" style="color:#fff">去支付</a>
            </div>
        </div>
        <div class="account_div" style="align:center;">
            个性化商品推荐
            <br /><br />
            <div style="width:110px;height:150px;float:left;margin-right:150px" >
                <img src="http://img3m7.ddimg.cn/93/10/23473587-1_b_0.jpg">
            </div>
            <div style="width:110px;height:150px;float:left;margin-right:150px" >
                <img src="http://img3m8.ddimg.cn/97/8/23812468-1_b_1.jpg">
            </div>
            <div style="width:110px;height:150px;float:left;margin-right:150px" >
                <img src="http://img3m0.ddimg.cn/77/3/25278440-1_b_7.jpg">
            </div>
        </div>
        
    </div>
  </el-col>
</el-row>
</div>
</template>

<script>
import storage from '@/libs/storage';
import {delCookie} from '@/util';
export default {
  name: 'Login',
  data () {
    return {
      bookIds:this.$route.query.bookIds,
      form: {
        name: '',
        password: ''
      },
      checkData: [],
      cartBooks:'',
      user:storage.get("user")
    }
  },
  created() {
    this.getOrderCart();
    
  },
  methods: {
    toUserInfo(){
      this.$router.push({
            path: 'userInfo'
      })
    },
    toOrderList(){
      this.$router.push({
            path: 'orderList'
      })
    },
    toBookInfo(bookId){
        this.$router.push({
            path: 'bookDetail',
            query: {
              bookId: bookId
            }
        })
    },
    
    
    toShoppingCart(){
        this.$router.push({
            path: 'shoppingCart'
        })
    },
    toAdmin(){
        var newPage = window.open();
         newPage.location.href = 'http://localhost:8088/admin/adminLogin?username='+this.user.username+'&password='+this.user.password;
    },
    logout(){
        this.$axios.get("/user/logoutnew").then(res=>{
            if(res.data == 'logoutnew'){
                 storage.set("user","");
                 delCookie('userId');
                 delCookie('uuid');
                 delCookie('st');
                 this.$router.push({
                    path: '/'
                 })

            }
        });
    },
    getHref(book){
        return "/book/info/"+book.bookId;
    },
    toLogin(){
        this.$router.push({
              path: 'login'
        })
    },
    toRegister() {
        this.$router.push({
            path: 'register'
        })
    },
    getOrderCart(){
        const data = {
            bookIds: this.bookIds.split(",")
        };
        this.$axios.post("/cart/orderCart",data,{withCredentials : true}).then(res=>{
            this.cartBooks = res.data.data;
        });
    },
    toPay(){
        if(this.user == null){
            this.toLogin();
        }
        const data = {
            bookIds: this.bookIds,
            userId: this.user.userId
        };
        this.$axios.post("/order/payOrder",data,{withCredentials : true}).then(res=>{
            if(res.data == 'payment'){
                this.$confirm('支付成功', '提示', {
                    confirmButtonText: '进入订单列表',
                    cancelButtonText: '继续购物',
                    type: 'warning'
                    }).then(() => {
                        this.$router.push({
                            path: 'orderList'
                        })
                    }).catch(() => {
                        this.$router.push({
                            path: 'bookIndex'
                        })   
                    });
            }
        });
        // this.$confirm('支付成功, 是否=进入个人订单列表查看?', '提示', {
        //   confirmButtonText: '确定',
        //   cancelButtonText: '取消',
        //   type: 'warning'
        // }).then(() => {
        //     this.$router.push({
        //         path: 'orderList'
        //     })
        // }).catch(() => {
        //   this.$message({
        //     type: 'info',
        //     message: '已取消删除'
        //   });          
        // });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .el-row {
    margin-bottom: 20px;
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


ul, ol {
    list-style: none;
}

a {
    text-decoration: none;
}
.search_tab{
	width: 100%;
	height: 50px;
	border-bottom: 2px solid #52a0ea;
	margin-top: 40px;
}
.search_tab li{
	width: 120px;
	height: 48px;
	background-color: #FF8800;
	font: 18px/50px "microsoft yahei";
	border-radius: 1px;
	color: #fff;
	text-align: center;
	cursor: pointer;
}
.search_tab li:hover{
	background-color: #FF0000;
}
.crumbs{
	width: 100%;
	height: 50px;
    background-color: #f5f5f5;
    border: solid 1px #00BFFF;
    padding: 13px;
    font-size: 16px;
    margin-bottom: 30px;
}
.crumbs div{
	float:left;
}
.crumbs a{
	color: black;
}
.search_word{
	color: red;
}
.total_search_book_count{
	padding-left: 20px;
}
.shoplist{
	border: 2px solid #E0E0E0;
}
.shoplist li{
	height: 260px;
    position: relative;
    background: #fff;
	border-bottom: 1px dashed #E2E2E2;
	padding: 30px;
}
.shoplist li:hover{
	background-color: #F8F8F8;
}
.shoplist li .name{
	position: absolute;
    left: 260px;
    top: 21px;
    line-height: 20px;
    height: 20px;
    width: 720px;
    overflow: hidden;
    font-size:18px ;
}
.shoplist li .price {
    position: absolute;
    left: 260px;
    top: 48px;
    font-family: "arial";
    line-height: 30px;
    width: 720px;
}
.search_now_price{
	color: #FF2832;
	font-size: 18px;
	font-weight: bold;
	padding-right: 10px;
}

.shoplist li .search_book_author {
	font-size: 16px;
    position: absolute;
    left: 285px;
    top: 70px;
    color: #787878;
    line-height: 30px;
    height: 30px;
    overflow: hidden;
    word-break: break-all;
    word-wrap: break-word;
}
.shoplist li .detail {
    position: absolute;
    left: 280px;
    top: 130px;
    line-height: 20px;
    height: 40px;
    overflow: hidden;
    color: #333;
    width: 720px;
    font-size: 14px;
}

.shoplist li .bottom_p {
    position: absolute;
    left: 280px;
    top: 193px;
}

.search_btn_cart{
	width: 100px;
    height: 28px;
    line-height: 28px;
    background: #ff2832;
    border-radius: 3px;
    display: inline-block;
    *display: inline;
    zoom: 1;
    color: #fff;
    text-align: center;
    font-family: 'Microsoft Yahei';
    font-size: 14px;
    margin-right: 10px;
    cursor: pointer;
}
.search_btn_cart:hover{
	background-color: #FF0000;
	color: #FFFFFF;
}
.search_btn_collect {
    width: 80px;
    height: 28px;
    line-height: 28px;
    background: #FFEDEE;
    color: #ff2832;
    border: 1px solid #ff2832;
    display: inline-block;
    *display: inline;
    zoom: 1;
    border-radius: 3px;
    text-align: center;
    font-family: 'Microsoft Yahei';
    font-size: 14px;
    margin-right: 10px;
}
.search_btn_collect:hover{
	background-color: #ffC8EE;
}


#cart_table_div {
    width: 1050px;
    margin: 50px auto 0px;
    border: 1px solid #CCCCCC;
    background-color: #fafafa;
}
#cart_table {
    border-collapse: collapse;
    width: 100%;
}
#table_head th {
    padding: 20px;
    font-size: 16px;
}
.cart_item {
    border-bottom: 1px solid #ccc;
}
.shop_intro td {
    padding-top: 30px;
    font-size: 16px;
    font-weight: 400;
}
.tcol1 {
    text-align: center;
}
.account_div {
    width: 1000px;
    height: 72px;
    z-index: 10;
    margin: 20px auto;
    padding: 20px 62px;
    background: url(~@/assets/shopping_total.png) 0 center no-repeat;
    position: relative;
}
#batch{
	float: left;
}
#shopping_total{
	float: right;
}
.total_p{
	float: left;
	padding:10px 10px 0px 0px;
}
.buy_num{
	width: 38px!important;
    height: 32px;
    line-height: 32px;
    border: 0;
    background: #fff;
    text-align: center;
}
.total_btn {
    float: right;
    display: block;
    width: 116px;
    height: 38px;
    font: bold 18px/38px "Microsoft Yahei";
    color: #fff;
    background-color: #FF2832;
    border-radius: 2px;
    text-align: center;
    margin-top: 4px;
    margin-right: 20px;
}

.total_btn:hover{
	background-color: #FF0000;
	color: #fff;
}
.num{
    float: left;
    height: 34px;
    border: 1px solid #e9e9e9;
    width: 60px;
    padding-right: 23px;
    overflow: hidden;
    text-align: center;
    position: relative;
}
.num a{
	position: absolute;
    right: 0;
    display: block;
    width: 23px;
	height: 17px;
	background-image: url(~@/assets/product_sprites.png);
	background-repeat: no-repeat;
	background-color: #646464;
	margin-left: 6px;
    _display: inline;
}
.num_add{
	background-position: -37px 0;
	top: 0;
}
.num_sub {
    background-position: -37px -17px;
    top: 17px;
}
</style>
