<template>
  <div class="header">
      <!--内容-->
      <div class="content-wrapper">
          <!--左侧商家图片-->
          <div class="avatar">
            <img :src="seller.avatar" alt="" width="64" height="64">
          </div>
          <!--右侧-->
          <div class="content">
          <div class="title">
            <span class="brand"></span>
            <span class="name">{{ seller.name }}</span>
          </div>
          <div class="description">
            {{seller.description}}/{{seller.deliveryTime}}分钟送达
				</div>
          <div class="support" >
            <span class="icon" ></span>
            <span class="text">{{seller.supports[0].description}}</span>
          </div>
        </div>
      </div>
      <!--背景-->
      <div class="background">
        <img src="static/img/seller_avatar_256px.jpg" alt="">
      </div>
      <!--公告-->
       <div class="seller-msg">
          <p><i></i>{{seller.bulletin}}</p>
       </div>
          <!--支持-->
        <div class="bulletin-wrapper" @click="showDetails" >
          <span class="bulletin-text">5个</span>
          <i class="icon-keyboard_arrow_right"></i>
        </div>
        <!--商家优惠信息-->
         <div class="detail" v-show="detailShow">
              <h1>{{seller.name}}</h1>
              <start  :score="seller.score" :size="36"></start>
               <div class="title">
                 <div class="line"></div>
                 <div class="text">优惠信息</div>
                 <div class="line"></div>
               </div>
             <ul  class="supports">
               <li class="support-item" v-for="(item,index) in seller.supports">
                 <span class="icon" :class="iconType[seller.supports[index].type]"></span>
                 <span class="text">{{seller.supports[index].description}}</span>
               </li>
             </ul>
           <div class="title">
             <div class="line"></div>
             <div class="text">商家公告</div>
             <div class="line"></div>
           </div>
           <div class="bulletin">
             <p class="content">{{seller.bulletin}}</p>
           </div>
           <div class="detail-close">
             <i class="icon-close" @click="hideDetails"></i>
           </div>
         </div>



  </div>
</template>

<script type="text/ecmascript-6">
  import start from '../start/start'
  export default {
    name: 'header',
    props: {
      seller: {
        type: Object
      }
    },
    data () {
      return {
        detailShow: false,
        iconType: ['decrease', 'discount', 'discount', 'special', 'special']
      }
    },
    components: {
      start
    },
    methods: {
      showDetails () {
        this.detailShow = true
      },
      hideDetails () {
        this.detailShow = false
      }
    }
  }
</script>

<style lang="stylus">
  .header{
    background: rgba(0,0,0,1);
    height: 2.69rem;
    color: #fff;
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 100%;
    max-width:750px
    z-index: 100;
  }
  .background{
    position:absolute
    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index:-100;
    opacity  0.5
  }
  .background img{
    width:100%;
    height:100%
  }
  .seller-msg{
    line-height .56rem;
    color #fff;
    font-size:.20rem;
    padding:0 .2rem;
    width:100%;
    height .56rem
    box-sizing:border-box;
    position:absolute;
    left:0;
    bottom:0;
    background rgba(18,24,32,0.2)
  }
  .seller-msg p{
     width:100%;
    overflow: hidden;
    text-overflow:ellipsis;
    line-height .56rem
    white-space:nowrap;
  }
  .seller-msg p i{
    display:inline-block;
    width:.44rem;
    height:.24rem;
    background-size:.44rem .24rem;
    vertical-align middle
    margin .10rem
  }
  .content-wrapper
    margin-top .48rem
    display flex
    width 80%
    padding 0 1.15rem .56rem .48rem
    align-items center
    flex 1
  .content-wrapper .content{
    text-align left
    padding-left .35rem
  }
  .content-wrapper .content div+div{
    margin-top .15rem
  }
  .content-wrapper .content .title .name{
    font-size .32rem
    font-weight bold
  }
  .content-wrapper .content .description{
    font-size .24rem
  }
  .content-wrapper .content .support .text{
    font-size .20rem
  }
  .content-wrapper  .avatar img{
    border-radius 0.05rem
  }
  .brand
    display inline-block
    width .6rem
    height .36rem
    background url("brand@2x.png")no-repeat center;
    background-size .6rem .36rem
    vertical-align middle

  .icon
    display inline-block
    width .24rem
    height .24rem
    background url("decrease_1@2x.png")no-repeat center
    background-size .24rem .24rem
    vertical-align middle
  .bulletin-text
    font-size .20rem
    position absolute
    right .22rem
    bottom:.88rem
    width .85rem
    height .48rem
    background rgba(0,0,0,.2)
    line-height .48rem
    border-radius 36%
  .detail
     position fixed
     top 0
     left 0
     bottom 0
     right 0
     background rgba(0,0,0,.8)
     z-index 200
     padding 1.26rem .74rem
     align-items center
     text-align center
     .start
       width 60%
       margin 0 auto
       height 1.11rem
     h1
      font-size .32rem
      text-align center
     .title
       display: flex
       margin: 28px auto 24px auto
       .line
          flex: 1
          position: relative
          top: -6px
          border-bottom: 1px solid rgba(255,255,255,.2)
       .text
          padding: 0 12px
          font-size: 14px
          font-weight: 700
     .supports
       text-align left
       padding 0 .23rem
       font-size .24rem
       li+li
         margin-top .28rem
       .icon
         display: inline-block
         width: 16px
         height: 16px
         vertical-align: top
         margin-right: 6px
         background-size: 100% 100%
         background-repeat: no-repeat
         &.decrease
           background-image url("decrease_2@3x.png")
         &.discount
           background-image url("discount_2@3x.png")
         &.guarantee
           background-image url("guarantee_2@3x.png")
         &.invoice
           background-image url("invoice_2@3x.png")
         &.special
           background-image url("special_2@3x.png")
     .bulletin .content
        font-size .24rem
        line-height .48rem
        text-align left
     .icon-close
        display inline-block
        width .38rem
        height .38rem
        background url("icon-close.png")no-repeat center
        background-size .38rem .38rem
        position absolute
        bottom 1rem
</style>
