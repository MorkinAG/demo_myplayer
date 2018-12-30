<template>
    <div id="RankingList">
      <el-container>
        <el-header>热曲</el-header>
        <el-main>
          <div class="MainBox"> <!--包裹排行列表-->
            <div class="tofor"  v-for="(item,index) in Rankings" :key="index"> <!--根据数据循环渲染此块-->
              <div class="links"> <!--装入音乐链接，点击时传出歌曲ID到播放器，或者跳转到歌曲介绍页面带传入播放器，并根据歌曲ID获取歌曲相关数据-->
                <img :src="item.pic_small">                <!-- 歌曲封面图片 -->
                <p class="songtitle" :title="item.title"><{{ item.title }}></p>         <!-- 歌曲名-->
                <p class="songhot">人气：{{ item.hot }}</p>     <!--热度-->
                <el-dropdown>
                  <span class="el-dropdown-link">
                    <i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>添加到播放列表</el-dropdown-item>
                    <el-dropdown-item>收藏到歌单</el-dropdown-item>
                    <!--<el-dropdown-item disabled>禁用项目</el-dropdown-item>-->
                    <!--<el-dropdown-item divided>分层点，此块上会有分割线</el-dropdown-item>-->
                  </el-dropdown-menu>
                </el-dropdown>
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
        var url = this.HOST + "/v1/restserver/ting?method=baidu.ting.billboard.billList&type=2&size=75&offset=0";//在size后面输入要渲染的歌曲数量
        this.$axios.get(url).then(res =>{                                                                       //<el-main>标签会根据渲染的占用自增长高度
            this.Rankings = res.data.song_list;//获取数据中的歌曲列表数据装入数组备用                               之后会做翻页
            console.log(this.Rankings);//输出到控制台
          })
      },

    }
</script>

<style lang="stylus" scoped>

  .el-header, .el-footer {
    background-color: #333;
    color: #fff;
    padding: 0 150px;
    font-size: 30px;
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
    background:  url('../../assets/backimg.jpg') no-repeat fixed center;
    background-size: cover;
    color: #333;
    text-align: center;
    line-height: 20px;
    padding 0;
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
      background #eee
      border 2px solid #BBBBBB
      border-radius 4px
      box-shadow darkgrey 0px 3px 5px
      width 200px
      height 90px
      position absolute
      z-index 999
      transition: all 0.5s ease 0s
    }

  .links:hover{
    transform: scale(1.1)
  }
.links>img{
  float left
}
  .links>.songtitle{
    height 40px
    line-height 20px
    overflow hidden
  }
  .links>.songhot {
    overflow:hidden
    height: 30px
  }
  .el-dropdown{
    position relative
    bottom 0px
    right -40px
  }
</style>
