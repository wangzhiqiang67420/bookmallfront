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
         <img style="width:130px" src="~@/assets/book1.jpg" title="回到首页" />
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
  <el-col :span="3">
      <div class="grid-content">
         <div class="sidenav" style="width:100%">
            <a v-for="categorie in bookCategories" style="cursor:pointer" @click="tobookList(categorie.cateId)">
                {{categorie.name}}
            </a>
          </div>
      </div>
  </el-col>
  <el-col :span="12"><div class="grid-content">
  
  <el-carousel style="height:336px" :interval="50000000" arrow="always">
    <el-carousel-item style="height:336px">
        <img style="width:100%" src="~@/assets/lunbo1.jpg" title="" />
    </el-carousel-item>
    <el-carousel-item style="height:336px">
        <img style="width:100%"  src="~@/assets/lunbo3.jpg" title="" />
    </el-carousel-item>
    <el-carousel-item style="height:336px">
        <img style="width:100%"  src="~@/assets/lunbo5.jpg" title="" />
    </el-carousel-item>
  </el-carousel>

  </div></el-col>
  <el-col :span="6">
      <div class="grid-content">
      <div style="margin-left:20px">
          <div>
          个性推荐
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

<el-row style="width:100%">
  <el-col :span="3"><div class="grid-content"></div></el-col>
  
  <el-col :span="15"><div class="grid-content">
    <span>新书上架</span>
    <div style="height:1px;background-color:#000000;margin-top:10px"></div>

          <ul class="product_ul">
                  <li class="product_li" v-for="book in books">
                      <a style="cursor:pointer" @click="toBookInfo(book.bookId)" class="img" target="_blank">
                          <img :src="checkUrl(book.imageUrl)">
                      </a>
                      <p class="name">
                          <a style="cursor:pointer" @click="toBookInfo(book.bookId)">{{book.name}}</a>
                      </p>
                      <p class="author">{{book.author}}</p>
                      <p class="price">
                          <span class="rob">￥{{book.price}}</span>
                          <span class="oprice">￥{{book.marketPrice}}</span>
                      </p>
                  </li>
              </ul>

  </div></el-col>
  <el-col :span="6">
      <div class="grid-content">
      <div style="margin-left:20px">
          <div>
          图书推荐词云
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
          <div>
          <br />
          <br />
          图书热点TOP
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
      form: {
        name: '',
        password: ''
      },
      books:[],
      bookCategories:[],
      user:storage.get("user")
    }
  },
  created() {
      this.getbookCategories();
      this.getNewBooks();
  },
  methods: {
    checkUrl(url){
        if(url.indexOf("http") >= 0){
            return url;
        }else if(url.indexOf("upload") >= 0){
            return "http://localhost:8088/"+url;
        }
    },
    toShoppingCart(){
        this.$router.push({
            path: 'shoppingCart'
        })
    },
    toAdmin(){
        var newPage = window.open();
        newPage.location.href = 'http://localhost:8088/admin/adminLogin?username=admin&password=123';
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
    tobookList(cateId){
        this.$router.push({
            path: 'bookList',
            query: {
              cateId: cateId
            }
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
    getbookCategories(){
        this.$axios.get("/bookCategories").then(res=>{
            console.log(res.data);
            this.bookCategories = res.data;
        });
    },
    getNewBooks(){
        this.$axios.get("/newBooks").then(res=>{
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
.product_li img {
    width: 150px;
    display: block;
    height: 150px;
}
a {
    text-decoration: none;
}
.name {
    padding: 0 20px;
    height: 18px;
    line-height: 18px;
    overflow: hidden;
}
.author {
    padding: 0 20px;
    height: 24px;
    line-height: 24px;
    overflow: hidden;
    color: #aaa;
}
.price {
    padding-left: 20px;
    line-height: 22px;
    overflow: hidden;
    font-family: "Arial";
    font-size: 14px;
    position: relative;
    height: 22px;
}
.oprice {
    color: #aaa;
    text-decoration: line-through;
    overflow: hidden;
}
p {
    margin-block-start: 0em;
    margin-block-start: 0em;
    margin-block-end: 0em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
</style>
