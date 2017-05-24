<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab border-bottom-1px">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <keep-alive>
      <router-view :goods="goods" :ratings="ratings" :seller="seller"></router-view>
    </keep-alive>
  </div>
</template>

<script>
  import header from '@/components/header/header'

  export default {
    name: 'app',
    data () {
      return {
        goods: [],
        ratings: [],
        seller: []
      }
    },
    components: {
      'v-header': header
    },
    mounted () {
      this.$http.get('data.json').then(function (response) {
        response = response.body
        this.ratings = Object.assign({}, this.ratings, response.ratings)
        this.seller = Object.assign({}, this.seller, response.seller)
        this.goods = Object.assign({}, this.goods, response.goods)
      })
    }
  }
</script>

<style>
  ::-webkit-scrollbar{
    width:0;
    height: 0;
  }
  ::-webkit-scrollbar-thumb {
    color:#f3f5f7 ;
  }
  .tab{
    position: fixed;
    width: 100%;
    max-width: 750px;
    top:2.68rem;
    z-index: 80;
    background: #fff;
  }
  html,body{
    height: 100%
  }
  body{
    width: 100%;
    font-size: .24rem;
    color: #121820;
    margin: 0 auto;
    font-family: "Microsoft YaHei";
    width: 100%;
    overflow-x: hidden;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
  max-width: 750px;
  margin: 0 auto;
  position: relative;
  padding-bottom: 1rem;
}
 .tab{
   display: flex;
   flex-direction: row;
   border-bottom:1px solid #e5e5e5
 }
  .tab-item{
    flex-grow:1;
    line-height: .78rem;
    font-size: .28rem;
    color: #50565d;
  }
</style>
