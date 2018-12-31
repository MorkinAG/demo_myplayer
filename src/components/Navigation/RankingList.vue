<template>
    <div id="RankingList">
      <el-container>
        <el-header>
          <span>热曲</span>
        </el-header>
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
          <div class="block">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page.sync="currentPage1"
              :page-size="pagesize"
              layout="prev, pager, next, jumper"
              :total="500">
            </el-pagination>
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
            pagenum:'',
            pagesize:30,//每页显示数量
            isoffset:'' ,//偏移量，int类型，值为 5 时就不会显示前面 5 条数据
            Rankings:[],//存储数据
            currentPage1: 1
          }
      },

      methods: {
        handleSizeChange(val) {
          console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) { //检测到页码变化时翻页查询数据
          this.pagenum = `${val}`; //获取页码
          var url = this.HOST + "/v1/restserver/ting?method=baidu.ting.billboard.billList&type=2&size="+this.pagesize+"&offset="+this.isoffset;//在size后面输入要渲染的歌曲数量
          this.$axios.get(url).then(res =>{                                                                       //<el-main>标签会根据渲染的占用自增长高度
            this.Rankings = res.data.song_list;//获取数据中的歌曲列表数据装入数组备用                               之后会做翻页
            console.log(this.Rankings);//输出到控制台
          });
          this.isoffset = this.pagesize * this.pagenum;//第一页显示了20条数据，翻页到第二页时值为20( 每页显示数量 乘 页数 )
          console.log("当前页码"+this.pagenum);
          console.log("当前每页显示数量(查询量)"+this.pagesize);
          console.log("当前偏移量"+this.isoffset);
        },
      },
      mounted(){
        var url = this.HOST + "/v1/restserver/ting?method=baidu.ting.billboard.billList&type=2&size="+this.pagesize+"&offset=60";
        this.$axios.get(url).then(res =>{
          this.Rankings = res.data.song_list;//获取数据中的歌曲列表数据装入数组备用
          console.log(this.Rankings);//输出到控制台
        });
      },

    }
</script>

<style lang="stylus" scoped>

  .el-header{
    background-color: #333;
    color: #fff;
    font-size: 30px;
    line-height: 60px;
    position: fixed;
    padding: 0 150px;
    z-index:999;
  }
    .el-header>span{
      float left
    }

.el-header, .el-main{
  margin 0 auto;
  width 100%;
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
    margin 70px auto 0;
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
      z-index 100
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
  .block{
    position:fixed;
    bottom 0
    z-index 110
    background #fff
    border-radius 5px
    margin 0 auto
    width 100%
  }
</style>
