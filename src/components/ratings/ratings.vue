<template>
  <div class="ratings">
      <!--总标题 -->
      <div class="ratings-content">
          <div class="overview">
              <div class="overview-left">
                 <ul>
                   <li><h2>{{seller.score}}</h2></li>
                   <li> <h3 class="title">综合评分</h3></li>
                   <li><span>高于周边商家{{seller.rankRate}}%</span></li>
                 </ul>
              </div>
              <div class="overview-right">
                <ul>
                  <li>
                      <span class="title">服务态度</span>
                      <start :size="24" :score="seller.serviceScore"></start>
                      <span>{{seller.serviceScore}}</span>
                  </li>
                  <li>
                      <span class="title">服务态度</span>
                      <start :size="24" :score="seller.score"></start>
                      <span>{{seller.score}}</span>
                  </li>
                  <li>
                    <span class="title">送达时间</span>
                    <span class="delivery">{{seller.deliveryTime}}分钟</span>
                  </li>
                </ul>
              </div>
          </div>
          <!--评论区-->
          <div class="rating-wrapper">
              <ul>
                 <li v-for="item in ratings">
                     <div class="avatar">
                       <img :src="item.avatar" alt="">
                     </div>
                     <div class="rating-details">
                       <ul>
                         <li>
                           <h2 >
                             <span class="username"> {{item.username}}</span>
                             <!--<span class="rateTime">{{item.rateTime}}</span>-->
                             <span class="rateTime">{{forMare(item.rateTime)}}</span>
                           </h2>
                         </li>
                         <li>
                           <div class="ratings-score">
                             <start :score="item.score" :size="24"></start>
                             <span v-show="item.deliveryTime">{{item.deliveryTime}}分钟送达</span>
                           </div>
                         </li>
                         <li>
                           <div class="text">
                             {{item.text}}
                           </div>
                         </li>
                       </ul>



                     </div>
                 </li>
              </ul>
          </div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import start from '../start/start'
  export default {
    name: 'rating',
    props: {
      ratings: {
        type: Object
      },
      seller: {
        type: Object
      }
    },
    data () {
      return {
      }
    },
    components: {
      start
    },
    methods: {
      forMare (time) {
        let unixTimestamp = new Date(time)
        let commonTime = unixTimestamp.toLocaleString()
        return commonTime
      }
    }
  }
</script>

<style lang="stylus">
  .ratings
    padding:3.47rem 0 0 0
    height 100%
    box-sizing border-box
    overflow auto
    .ratings-content
      display flex
      flex-direction column
      background #f3f5f7
      .overview
         background #fff
         display flex
         flex 1
         flex-direction row
         padding .36rem  0
         border-bottom 1px solid #e5e5e5
         .title
             color #121820
             font-size .24rem
         span
             color #93989d
             font-size .20rem
         .title+span
             margin-left  .20rem
         .overview-left
             padding 0 .46rem
             border-right 1px solid #e7e7e8
             li+li
                margin-top .15rem
             h2
                color #e79823
                font-size .48rem
         .overview-right
             flex 1
             padding 0 .46rem
             li
               display flex
               flex-direction row
               align-items center
               .start
                  margin 0 .20rem
                  width 1.5rem
             li+li
               margin-top .25rem

      .rating-wrapper
        padding 0 .30rem
        margin-top .30rem
        background #fff
        border-top 1px solid #e5e5e5
        li
          padding .38rem 0
          display flex
          flex-direction row
          .avatar
            width .57rem
            height .57rem
            border-radius 50%
            overflow hidden
            margin-right .27rem
            img
              width 100%

          .rating-details
             text-align left
             flex 1
             li
              margin 0
              padding 0
              display flex
              flex 1
             li+li
               margin-top .20rem
             h2
               font-size .20rem
               color #121820
               display flex
               flex 1
               justify-content space-between
               .rateTime
                  color #93989d
             .ratings-score
                 display flex
                 flex-direction row
                 align-items center
                 .start
                   width 1.26rem
                   margin-right .18rem
                 .start+span
                   font-size .20rem
                   color #93989d
             .text
                 line-height .36rem
                 font-size .24rem
</style>
