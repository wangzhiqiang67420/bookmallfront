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
  <el-col :span="15">
    <div class="grid-content">
        <div style="height:1px;background-color:#ffffff;margin-top:10px"></div>
        <div class="row" id="breadcrumb" style="margin-bottom:40px">
            <a>
                <b>图书</b>
            </a>
            <span>&gt;</span>
            <a style="cursor:pointer" @click="tobookList(book.bookInfo.bookCategoryId)">{{book.bookInfo.categoryName}}</a>
            <span>&gt;</span>
            <b>{{book.bookInfo.name}}</b>
        </div>
    </div>
  </el-col>
</el-row>
<el-row style="width:100%">
  <el-col :span="3"><div class="grid-content"></div></el-col>
  <el-col :span="5">
        <div>
            <a>
                <img :src="book.bookInfo.imageUrl" width="290px" height="290px">
            </a>
        </div>
  </el-col>
  <el-col :span="10">
            <div class="name_info">
                <h1 style="font-weight: bold;">{{book.bookInfo.name}}</h1>
                <h2>
                    <span>{{book.bookInfo.outline}}</span>
                </h2>
            </div>
            <div class="book_info_base">
						<span class="book_info_span">
								作者<a >{{book.bookInfo.author}}</a>著，
								<a >{{book.bookInfo.press}}</a>&nbsp;出品
							</span>
                <span class="book_info_span">
								出版社：<a href="" target="_blank">{{book.bookInfo.press}}</a>
							</span>
                            <!--<span class="book_info_span">
								出版日期：2017-06-01
							</span>-->
            </div>
            <div class="book_price">
                <p class="what_price">特价</p>
                <p class="price_info">
                    <span class="rob" style="font-size: 30px;">￥{{book.bookInfo.price}}</span>
                    <span style="color: red;">({{book.bookInfo.discount}}折扣)</span>
                    <span>定价:</span>
                    <span class="oprice">￥{{book.bookInfo.marketPrice}}</span>
                </p>
            </div>

            <div class="buy_box">
                <!--<div class="num buy_div">
                    <input type="text" class="text" id="buy_num" disabled="disabled" value="1" width="30px" height="30px">
                    <a href="javascript:void(0);" class="num_add" id="num_add"></a>
                    <a href="javascript:void(0);" class="num_sub" id="num_sub"></a>
                </div>-->
                <div class="buy_div">
                    <div class="cart">
                        <a href="javascript:void(0);"  @click="addCart(book.bookInfo.bookId)" class="add_cart">
                            <i class="cart_icon"></i> 加入购物车
                        </a>
                    </div>
                </div>
                <!--<div class="buy_div buy_now_div">
                    <a href="javascript:void(0);" onclick="buyNow(108)" class="buy_now">立即购买</a>
                </div>-->
                <div class="clear"></div>
                <div class="buy_tip">每账户最多可购买<b>10</b>件</div>
            </div>
  </el-col>
</el-row>
<el-row style="width:100%">
  <el-col :span="3"><div class="grid-content"></div></el-col>
  <el-col :span="4"><div class="grid-content">

  <div class="product_left">
                <h3 style="">热门推荐</h3>
                <ul class="product_left_ul">
                    <li class="product_li">
                            <a class="img">
                                <img src="http://img3m6.ddimg.cn/86/32/24035306-1_b_6.jpg">
                            </a>
                    </li>  
                </ul>
            </div>
  </div></el-col>
  <el-col :span="1"><div class="grid-content"></div></el-col>
  <el-col :span="10">
            <div class="content">
                <div id="book_detail_content" class="nav_content" style="display: block;">
                    <ul id="key">
                        <li>开 本：{{book.bookInfo.size}}</li>
                        <li>纸 张：胶版纸</li>
                        <li>包 装：{{book.bookInfo.packStyle}}</li>
                        <li>是否套装：否</li>
                        <li>国际标准书号ISBN：{{book.bookInfo.isbn}}</li>
                    </ul>
                    <div id="detail" class="section">


                        <div id="bookDetail" class="section">
                            <div class="title">
                                <span class="title_span">书籍详情</span>
                            </div>
                            <p>
                                {{book.bookInfo.detail}}
                            </p>
                        </div>


                        <div id="feature" class="section">
                            <div class="title">
                                <span class="title_span">产品特色</span>
                            </div>
                            <p>
                                <img src="~@/assets/book3_1.jpg">
                            </p>
                        </div>
                        <div class="abstract">
                            <div class="title">
                                <span class="title_span">作者简介</span>
                            </div>
                            <blockquote>
                                <pre>{{book.bookInfo.author}}</pre>
                            </blockquote>
                        </div>
                        <div class="content">
                            <div class="title">
                                <span class="title_span"></span>
                            </div>
                            <blockquote>
                                <pre>{{book.bookInfo.catalog}}</pre>
                            </blockquote>
                        </div>
                        
                    </div>
                </div>
                <div id="book_comment_content" style="display: none;" class="nav_content">
                    商品评论
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
      bookId:this.$route.query.bookId ,
      form: {
        name: '',
        password: ''
      },
      book:'',
      user:storage.get("user")
    }
  },
  created() {
        this.getBookInfo();
  },
  methods: {
    addCart(bookId){
        this.$axios.get("/cart/addition",{params: {bookId: bookId,buyNum: 1},withCredentials:true}).then(res=>{
            this.$router.push({
                path: 'shoppingCart'
            })
        });
    },
    tobookList(cateId){
        this.$router.push({
            path: 'bookList',
            query: {
              cateId: cateId
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
    getBookInfo(){
        this.$axios.get("/book/getInfo/"+this.bookId).then(res=>{
            this.book = res.data;
            console.log(this.book);
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
.container {
    width: 1170px;
}
.row {
    margin-right: -15px;
    margin-left: -15px;
}
.name_info {
    font-family: "Verdana","Microsoft Yahei";
    font-weight: normal;
    border-bottom: 1px solid #f5f5f5;
    padding: 0 6px 12px 0;
}
.name_info h1 {
    line-height: 24px;
    max-height: 48px;
    _height: expression(this.scrollHeight>48 ? "48px":"auto");
    overflow: hidden;
    color: #323232;
    font-size: 18px;
    margin: 0 auto;
}
.name_info h2 {
    padding-top: 6px;
    max-height: 96px;
    _height: expression(this.scrollHeight>96 ? "96px":"auto");
    overflow: hidden;
    font-size: 16px;
    line-height: 24px;
}

.book_info_span{
	font-family: "microsoft yahei";
	font-size: 14px;
	margin-right: 40px;
}
.book_price{
	width: 100%;
	height: 100px;
	font-size: 16px;
	margin-top: 10px;
	padding: 25px 0px 10px 25px;
	background-color: #ebebeb;
}
.number_line_through{
	text-decoration: line-through;
}
.what_price{
	color: #8f8f8f;
	font-size: 18px;
}
.price_info{
	height: 50px;
	line-height: 50px;
}
.buy_box .buy_div{
	float: left;
	margin-top:50px ;
	margin-right: 20px;
}
.buy_box a:hover{
	color: #CCCCCC;
}
#buy_num{
	width: 38px!important;
    height: 32px;
    line-height: 32px;
    border: 0;
    background: #fff;
    text-align: center;
}
.cart{
	width: 130px;
	height: 35px;
	background-color: #ff2832;
    border-radius:2px ;
}
.cart_icon {
    float: left;
    width: 20px;
    height: 19px;
    
    margin: 9px 4px 0 0;
}
.add_cart{
	height: 36px;
    font: 16px/36px "Microsoft Yahei";
    overflow: hidden;
    margin: 0 0 3px 10px;
    float: left;
    border-radius: 3px;
    text-decoration: none;
    color: #fff;
}
.buy_now_div{
	width: 96px;
	height: 35px;
	background-color: #FF5C00;
    border-radius:2px ;
}
.buy_now{
	height: 36px;
    font: 16px/36px "Microsoft Yahei";
    overflow: hidden;
    margin: 0 0 3px 10px;
    float: left;
    padding: 0 6px;
    border-radius:3px;
    text-decoration: none;
    color: #fff;
}
.clear{
	clear: both;
}
.buy_tip{
	color: #969696;
    line-height: 20px;
    width: 630px;
    overflow: hidden;
    *padding-top: 3px;
}
.buy_tip b{
	font-weight: normal;
    color: #ff2832;
    padding: 0 5px;
}
.product_left{
	border: 1px solid #ccc;
    min-height:800px;
}
.product_left h3{
	height: 30px;
    color: #646464;
    font: 17px/30px "Microsoft Yahei";
    overflow: hidden;
    padding: 5px 0 0 25px;
    margin-bottom: -1px;
    background-color: #fff;
    position: relative;
    z-index: 333;
}
#key{
	height: 60px;
    padding: 0 22px 0 0;
    margin-top: 10px;
    margin-bottom: 20px;
}
#key li{
	padding-left: 20px;
    width: 260px;
    overflow: hidden;
    float: left;
    line-height: 22px;
    height: 22px;
    color: #323232;
}
.title{
	height: 25px;
	font-family: "新宋体";
	border-left: 2px solid #00BFFF;
	margin-bottom:10px ;
}
.title span{
	display: inline-block;
	height: 25px;
	min-width: 80px;
	padding-right:10px ;
	line-height: 32px;
	font-size: 16px;
	color: #fff;
	background-color: #FF8800;
}
.pre{
    white-space:pre-wrap;
    word-wrap:break-word;
    background-color:white;
    margin-bottom: 20px;
 }
.product_left {
    border: 1px solid #ccc;
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
