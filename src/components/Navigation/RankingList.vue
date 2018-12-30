<template>
    <div id="RankingList">
      <el-container>
        <el-header>热度排行榜</el-header>
        <el-main>
          <div class="MainBox"> <!--包裹排行列表-->
            <div class="tofor"  v-for="(item,index) in Rankings" :key="index" @change="hover"> <!--根据数据循环渲染此块-->
              <div class="links"> <!--装入音乐链接进行跳转-->
                <img :src="item.pic_small">                <!-- 歌曲封面图片 -->
                <p class="songtitle">{{ item.title }}</p>         <!-- 歌曲名-->
                <p class="songhot">人气：{{ item.hot }}</p>     <!--热度-->
              </div>
             </div>
          </div>
        </el-main>
      </el-container>
    </div>
</template>

<script>
    export default {
        name: "RankingList",
      data() {
          return{
            Rankings:[]
          }
      },
      mounted(){
        var url = this.HOST + "/v1/restserver/ting?method=baidu.ting.billboard.billList&type=2&size=10&offset=0";//在size后面输入要渲染的歌曲数量
        this.$axios.get(url).then(res =>{
            this.Rankings = res.data.song_list;//获取数据中的歌曲列表数据装入数组备用
            console.log(this.Rankings);//输出到控制台
          })
      },

    }
</script>

<style lang="stylus" scoped>

  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
.el-header, .el-main{
  width 100%;
  margin 0 auto;
}
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 30px;
    padding 0;
    height 1000px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .MainBox {
    width 1100px
    background darkseagreen
    margin 0 auto;

  }
  .tofor{
    width 200px
    height 100px
    margin 7px
    float left
  }
    .links{
      background #eee;
      border 2px solid #BBBBBB;
      border-radius 4px;
      box-shadow darkgrey 0px 3px 5px;
      width 200px;
      height 90px;
      position absolute;
      z-index 999;
      transition: all 0.5s ease 0s;
    }

  .links:hover{
    transform: scale(1.1);
  }
.links>img{
  float left;
}
  .links>songtitle{
    height 60px
    line-height 20px
  }
  .links>.songhot {
    overflow:hidden
    height: 30px;
  }
</style>
