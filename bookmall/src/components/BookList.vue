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
        <a v-if="user == null||user == ''||user == 'undefined'" @click="toLogin" style="color:#337ab7;cursor:pointer">请登录&nbsp;&nbsp;&nbsp;</a>
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
  <el-col :span="3"><div class="grid-content"></div></el-col>
  <el-col :span="12">
    <div class="grid-content">
        <div style="height:1px;background-color:#ffffff;margin-top:10px"></div>
            <ul class="shoplist_ul">
                    <li v-for="bookInfo in books">
                        <p style="float:left;margin-bottom:0px"><a @click="toBookInfo(bookInfo.bookId)" :title="bookInfo.outline">
                            <img :src="checkUrl(bookInfo.imageUrl)" :alt="bookInfo.outline" width="200px" height="200px">
                        </a></p>
                        <p class="name">
                            <a @click="toBookInfo(bookInfo.bookId)" target="_blank">
                                    {{bookInfo.outline }}
                            </a>
                        </p>
                        <p style="" class="price">
                            <span class="search_now_price">￥ {{bookInfo.price}}</span>
                            <span style="color: #C0C0C0;">定价：</span>
                            <span class="oprice">￥{{bookInfo.marketPrice}}</span>
                            <span class="search_discount">&nbsp;({{bookInfo.discount}}折) </span>
                        </p>

                        <p class="bottom_p" style="padding-top:15px;">
                            <a style="margin-left:10px" class="search_btn_cart" @click="addCart(bookInfo.bookId)">加入购物车</a>
                            <!-- <a class="search_btn_collect" href="javascript:void(0);">收藏</a> -->
                        </p>
                        <p class="search_book_author">
                            <span><a :title="bookInfo.author">{{bookInfo.author}}</a> 著</span>
                            <!--<span> {{bookInfo.publishDate}}</span>-->
                            <span>  /<a :title="bookInfo.press">{{bookInfo.press}}</a></span>
                        </p>
                        <p v-if="bookInfo.detail!=''" style="min-height:100px" class="detail">
                                {{bookInfo.detail}}
                        </p>
                        <p v-if="bookInfo.detail==''" style="min-height:100px"></p>
                        <div style="height:5px"></div>
                        <hr />
                    </li>
            </ul>

    </div>
  </el-col>
  <el-col :span="6">
      <div class="grid-content">
      <div style="margin-left:20px">
          <div>
          图书推荐
          </div>
          <div style="height:1px;background-color:#000000;margin-top:2px"></div>
          <div>
            追风筝的人
            <br />
            冰与火之歌1
            <br />
            冰与火之歌2
            <br />
            冰与火之歌3
          </div>
          <div>你坏</div>
          <br />
          <div>
          个性化聚类
          </div>
          <div style="height:1px;background-color:#000000;margin-top:2px"></div>
          <div>
            1...
            <br />
            2...
          </div>
      </div>
      </div>
  </el-col>
</el-row>

</div>
</template>

<script>
import storage from '@/libs/storage';
export default {
  name: 'Login',
  data () {
    return {
      cateId:this.$route.query.cateId ,
      form: {
        name: '',
        password: ''
      },
      books:[],
      user:storage.get("user")
    }
  },
  created() {
        this.getCategoryBooks();
  },
  methods: {
    checkUrl(url){
        if(url.indexOf("http") >= 0){
            return url;
        }else if(url.indexOf("upload") >= 0){
            return "http://localhost:8088/"+url;
        }
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
    addCart(bookId){
        this.$axios.get("/cart/addition",{params: {bookId: bookId,buyNum: 1},withCredentials:true}).then(res=>{
            this.$router.push({
                path: 'shoppingCart'
            })
        });
    },
    toAdmin(){
        var newPage = window.open();
        // window.open('about:blank');
        newPage.location.href = 'http://localhost:8088/admin/adminLogin?username=zdd&password=123';
    },
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
    getCategoryBooks(){
        this.$axios.get("/index/category/"+this.cateId).then(res=>{
            this.books = res.data;
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
</style>
