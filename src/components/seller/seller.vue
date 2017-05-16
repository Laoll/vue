<template>
  <div class="seller">
      <!--第一版-->
      <div class="information">
         <div class="seller-header">
              <div class="seller-name">
                 <p class="title">{{seller.name}}</p>
                 <div class="seller-info">
                   <start  :score="seller.score" :size="24"></start>
                   <span>({{seller.sellCount}})</span>
                   <span class="sell-count">月售{{seller.sellCount}}单</span>
                 </div>
              </div>
              <div class="collect">
                   <i :class="collectType" @click="changeCollect"></i>
                   <p>{{text}}</p>
              </div>
         </div>
         <div class="content">
           <ul>
             <li>
                 <p>起送价</p>
                 <div>
                   <strong>{{seller.minPrice}}</strong>
                   <span>元</span>
                 </div>
             </li>
             <li>
               <p>商家配送</p>
               <div>
                 <strong>{{seller.deliveryPrice}}</strong>
                 <span>元</span>
               </div>
            </li>
             <li>
               <p>平均配送时间</p>
               <div>
                 <strong>{{seller.deliveryTime}}</strong>
                 <span>元</span>
               </div>
             </li>
           </ul>
         </div>
      </div>
      <split></split>
      <!--第二版-->
      <div class="bulletin">
         <div>
           <p class="title">公告与活动</p>
         </div>
         <div class="bulletin-txt">
           {{seller.bulletin}}
         </div>
         <supports :seller="seller" :sellerType="2"></supports>
      </div>
      <split></split>
      <!--第三版-->
       <div class="seller-banner">
           <div>
             <p class="title">商家实景</p>
           </div>
           <ul>
             <li v-for="pic in seller.pics">
               <img :src="pic" alt="">
             </li>
           </ul>
       </div>
       <split></split>
      <!--第四版-->
       <div class="infos">
         <div>
           <p class="title">商家信息</p>
         </div>
           <ul>
             <li v-for="info in seller.infos">
               {{info}}
             </li>
           </ul>
       </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import start from '../start/start'
  import split from '../split/split'
  import supports from '../supports/supports'
  export default {
    name: 'seller',
    props: {
      seller: {
        type: Object
      }
    },
    data () {
      return {
        collectType: 'icon-uncollect',
        text: '收藏'
      }
    },
    components: {
      start,
      split,
      supports
    },
    mounted () {
      this.seller = this.seller[this.index]
    },
    methods: {
      changeCollect () {
        let type = this.collectType
        if (type === 'icon-uncollect') {
          this.collectType = 'icon-collect'
          this.text = '已收藏'
        } else {
          this.collectType = 'icon-uncollect'
          this.text = '收藏'
        }
      }

    }
  }
</script>

<style lang="stylus">
   .seller
     display flex
     flex-direction column
     min-height  100px
     align-items stretch
     position absolute
     bottom:0
     left 0
     top 0
     right 0
     padding 3.47rem 0 .97rem 0
     overflow-y: auto;
     overflow-x: hidden;
     >div
       padding .35rem .35rem 0 .35rem
     .title
        font-size .28rem
        color #121820
        text-align left
        margin-bottom .35rem
     .seller-header
        display flex
        flex-direction row
        justify-content space-between
        padding-bottom .34rem
        .title
         margin-bottom .10rem
        .seller-info
           display flex
           flex-direction row
           .start
             width 1.5rem
             margin-right .10rem
           .sell-count
             margin-left .3rem
        .collect
           display flex
           flex-direction column
           justify-content center
           width 1.08rem
           text-align center
           i
             display inline-block
             width .41rem
             height .37rem
             margin 0 auto .13rem
             background url("icon-collect.png")no-repeat center
             background-size .41rem .37rem
             &.icon-collect
               background-image url("icon-collect.png")
             &.icon-uncollect
               background-image url("icon-uncollect.png")
           .icon-uncollect+p
                color #93989d
                font-size .20rem
           p
            font-size .20rem
     .content
        border-top 1px solid rgba(18,24,32,0.1)
        padding .3rem 0
        ul
          display flex
          flex-direction row
          justify-content space-between
          li
            display flex
            flex 1
            flex-direction column
            justify-content center
            p
             color #93989d
             font-size .20rem
             margin-bottom .10rem
            div
              display flex
              justify-content center
              align-items baseline
              strong
                 font-size .48rem
                 color #121820


     .bulletin-txt
         color #ce1b1b
         font-size .24rem
         text-align left
         line-height .48rem
     .supports
        margin-top .43rem
        .support-item
          padding .32rem .32rem
          border-top:1px solid rgba(18,24,32,.1)
     .seller-banner
        padding-bottom .30rem
        ul
          display flex
          flex-direction row
          align-items center
          width 100%
          overflow scroll
          li
            margin-right .16rem
     .infos ul li
         padding .32rem .32rem
         border-top:1px solid rgba(18,24,32,.1)
         text-align left
         font-size .24rem
         color #121820
         line-height .36rem

</style>
