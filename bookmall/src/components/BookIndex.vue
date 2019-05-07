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
        <a @click="toRegister" style="color:#337ab7;cursor:pointer">免费注册</a>
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
  <el-col :span="3"><div class="grid-content"></div></el-col>
  <el-col :span="3">
      <div class="grid-content" >

         <div class="sidenav" style="width:100%">
            <a href="#about">特色书单</a>
            <a href="#services">科技</a>
            <a href="#clients">文学经典</a>
            <a href="#clients">人文社科</a>
            <a href="#clients">生活</a>
            <a href="#clients">儿童读物</a>
            <a href="#clients">小说</a>
            <a href="#clients">...</a>
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
                    
                  <li class="product_li">
                      <a href="book/info/37" class="img" target="_blank">
                          <img src="http://img3m9.ddimg.cn/11/5/23880989-1_b_2.jpg">
                      </a>
                      <p class="name">
                          <a href="book/info/37">论语（中华经典藏书・升级版）</a>
                      </p>
                      <p class="author">陈晓芬 译注</p>
                      <p class="price">
                          <span class="rob">￥12.00</span>
                          <span class="oprice">￥18.00</span>
                      </p>
                  </li>
              
                  <li class="product_li">
                      <a href="book/info/38" class="img" target="_blank">
                          <img src="http://img3m0.ddimg.cn/13/7/23855350-1_b_2.jpg">
                      </a>
                      <p class="name">
                          <a href="book/info/38">大学・中庸（中华经典藏书・升级版）</a>
                      </p>
                      <p class="author">王国轩 译注</p>
                      <p class="price">
                          <span class="rob">￥8.00</span>
                          <span class="oprice">￥12.00</span>
                      </p>
                  </li>
              
                  <li class="product_li">
                      <a href="book/info/39" class="img" target="_blank">
                          <img src="http://img3m2.ddimg.cn/25/23/22845562-1_b_4.jpg">
                      </a>
                      <p class="name">
                          <a href="book/info/39">诗经译注</a>
                      </p>
                      <p class="author">程俊英 撰</p>
                      <p class="price">
                          <span class="rob">￥28.60</span>
                          <span class="oprice">￥32.00</span>
                      </p>
                  </li>
              
                  <li class="product_li">
                      <a href="book/info/40" class="img" target="_blank">
                          <img src="http://img3m1.ddimg.cn/94/15/23786131-1_b_4.jpg">
                      </a>
                      <p class="name">
                          <a href="book/info/40">诗经―中华经典藏书</a>
                      </p>
                      <p class="author">（春秋）孔子 编订 ; 黎波 译注</p>
                      <p class="price">
                          <span class="rob">￥28.70</span>
                          <span class="oprice">￥39.80</span>
                      </p>
                  </li>
              
                  <li class="product_li">
                      <a href="book/info/41" class="img" target="_blank">
                          <img src="http://img3m9.ddimg.cn/92/10/23371319-1_b_2.jpg">
                      </a>
                      <p class="name">
                          <a href="book/info/41">论语译注――中国古典名著译注丛书</a>
                      </p>
                      <p class="author">杨伯峻 译注</p>
                      <p class="price">
                          <span class="rob">￥18.80</span>
                          <span class="oprice">￥26.00</span>
                      </p>
                  </li>
              
                  <li class="product_li">
                      <a href="book/info/42" class="img" target="_blank">
                          <img src="http://img3m4.ddimg.cn/82/33/25168654-1_b_1.jpg">
                      </a>
                      <p class="name">
                          <a href="book/info/42">诗经注析（中华国学文库）</a>
                      </p>
                      <p class="author">程俊英，蒋见元</p>
                      <p class="price">
                          <span class="rob">￥41.90</span>
                          <span class="oprice">￥58.00</span>
                      </p>
                  </li>
              
                  <li class="product_li">
                      <a href="book/info/43" class="img" target="_blank">
                          <img src="http://img3m1.ddimg.cn/92/19/20747621-1_b_0.jpg">
                      </a>
                      <p class="name">
                          <a href="book/info/43">十三经注疏（清嘉庆刊本）全五册</a>
                      </p>
                      <p class="author">（清）阮元 校刻</p>
                      <p class="price">
                          <span class="rob">￥774.20</span>
                          <span class="oprice">￥980.00</span>
                      </p>
                  </li>
              
                  <li class="product_li">
                      <a href="book/info/44" class="img" target="_blank">
                          <img src="http://img3m9.ddimg.cn/44/1/22631939-1_b_5.jpg">
                      </a>
                      <p class="name">
                          <a href="book/info/44">王阳明全集（全五册）</a>
                      </p>
                      <p class="author">(明)王阳明</p>
                      <p class="price">
                          <span class="rob">￥126.80</span>
                          <span class="oprice">￥198.00</span>
                      </p>
                  </li>
              
                  <li class="product_li">
                      <a href="book/info/45" class="img" target="_blank">
                          <img src="http://img3m4.ddimg.cn/6/24/20899104-1_b_2.jpg">
                      </a>
                      <p class="name">
                          <a href="book/info/45">四书五经译注（套装全九册）</a>
                      </p>
                      <p class="author">程俊英 等撰</p>
                      <p class="price">
                          <span class="rob">￥241.30</span>
                          <span class="oprice">￥298.00</span>
                      </p>
                  </li>
              
                  <li class="product_li">
                      <a href="book/info/46" class="img" target="_blank">
                          <img src="http://img3m0.ddimg.cn/87/30/25199250-1_b_3.jpg">
                      </a>
                      <p class="name">
                          <a href="book/info/46">礼记（全2册・中华经典名著全本全注全译）</a>
                      </p>
                      <p class="author">胡平生，张萌 译注</p>
                      <p class="price">
                          <span class="rob">￥63.60</span>
                          <span class="oprice">￥88.00</span>
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
    },
    toRegister() {
      this.$router.push({
            path: 'register'
        })
    },
    
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
