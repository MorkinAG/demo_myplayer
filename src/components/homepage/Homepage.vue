<template>
  <div id="Homepage">
    <el-menu
      :default-active="activeIndex1"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#333"
      text-color="#FFF"
      router
      style="width: 1100px; height: 60px; margin: auto"
      active-text-color="#FFF">
      <el-menu-item index="Discover">发现音乐</el-menu-item>
      <el-menu-item index="My">我的音乐</el-menu-item>
      <el-menu-item index="RankingList">排行榜</el-menu-item>
      <el-menu-item index="SongSheet">歌单</el-menu-item>
      <el-menu-item index="AnchorStation">主播电台</el-menu-item>
      <el-menu-item index="Singer">歌手</el-menu-item>
      <el-menu-item index="shelves">新碟上架</el-menu-item>
      <el-form style="float: right; line-height: 62px; padding-left: 60px">
        <el-button style="background: #333">登录</el-button>
      </el-form>
      <el-form style="float: right; line-height: 60px">
        <el-input type="text" placeholder="音乐/视频/电台/用户"></el-input>
      </el-form>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: "Homepage",
    data () {
      return {
        activeIndex1: '1',
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style lang="stylus" scoped>
  #Homepage {
    width 100%
    height 60px
    background #333
    h1 {
      font-size 20px
    }
  }
</style>
