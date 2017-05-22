<template>
  <div class="food">
    <!--关闭按钮-->
    <div class="close" @click="hideFood($event)">返回</div>
    <div class="food-header">
       <img src="http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/750/h/750" alt="">
       <div class="text">
           <h1 class="title">皮蛋瘦肉粥</h1>
           <p><span>月售1132份</span><span>好评率100%</span></p>
           <div class="shop-box">
             <p><span class="price">¥24</span><span>¥28</span></p>
              <div class="toCart">加入购物车</div>
           </div>
       </div>
    </div>
    <split></split>
    <div class="section">
      <div class="text">
          <h2 class="title">商品介绍</h2>
          <div class="food-intro">
            一碗皮蛋瘦肉粥，总是我到粥店时的不二之选。香浓软滑，饱腹暖心，皮蛋的Q弹与瘦肉的滑嫩伴着粥香溢于满口，让人喝这样的一碗粥也觉得心满意足。
          </div>
      </div>
    </div>
    <split></split>
    <div class="food-rating">
      <div class="text">
         <h2 class="title">商品评价</h2>
          <ul class="rating-type">
            <li>全部 <span>57</span></li>
            <li>推荐 <span>47</span></li>
            <li>吐槽 <span>10</span></li>
          </ul>
          <div class="change-rating">
            <i :class="checkType" @click="filterCheck"></i> 只看有内容的评价
          </div>
      </div>
      <div class="rating-detail">
        <ul >
          <li>
            <div class="rating-header">
              <p class="time">2016-07-07  12:34</p>
              <div class="user-info">
                <span>3*******2</span>
                <img src="http://static.galileo.xiaojukeji.com/static/tms/default_header.png" alt="">
              </div>
            </div>
            <div class="content">
              <i class="icon-good"></i>味道不错，就是有点儿咸，有待进一步优化
            </div>
          </li>
          <li>
            <div class="rating-header">
              <p class="time">2016-07-07  12:34</p>
              <div class="user-info">
                <span>3*******2</span>
                <img src="http://static.galileo.xiaojukeji.com/static/tms/default_header.png" alt="">
              </div>
            </div>
            <div class="content">
              <i class="icon-bad"></i>味道不错，就是有点儿咸，有待进一步优化
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import split from '../split/split'
  export default {
    name: 'food',
    props: {
      show: {
        type: Boolean
      }
    },
    data () {
      return {
        checkType: 'icon-unCheck'
      }
    },
    components: {
      split
    },
    methods: {
      filterCheck () {
        let type = this.checkType
        if (type === 'icon-unCheck') {
          this.checkType = 'icon-checked'
        } else {
          this.checkType = 'icon-unCheck'
        }
      },
      hideFood () {
        this.$emit('hideDetail')
      }
    }
  }
</script>

<style lang="stylus">
  .food
    background #fff
    position fixed
    width  100%
    height 100%
    overflow scroll
    left 0
    right 0
    top 0
    z-index 600
    .food-header
     text-align left
     img
       width 100%
     .title
       margin-bottom  .19rem
       font-weight bold
     p
      font-size .20rem
      color #93989d
      span+span
        margin-left .23rem
  .split
    width 100%
  .shop-box
    display flex
    flex-direction row
    justify-content space-between
    margin-top .40rem
    span.price
      font-size .28rem
      color #ce1b1b
      &+span
        text-decoration line-through
        font-weight bold
    .toCart
       background #599ed9
       line-height .48rem
       padding  0 .23rem
       border-radius 20px
       color #fff
  .text
    padding .36rem
    >.title
      text-align left
      color #121820
      font-size .28rem
    .food-intro
      text-align left
      margin-top .24rem
      font-size .24rem
      line-height .48rem

  .food-rating
    .rating-type
      display flex
      flex-direction row
      margin .41rem 0
      li
        padding .20rem .24rem
        background #599ed9
        color #fff
        font-size .24rem
        span
          font-size .14rem
        &:last-child
          background rgba(147,152,157,0.2)
        &:nth-child(2)
          background rgba(89,158,217,0.2)
      li+li
        margin-left .16rem


    .change-rating
      border-top 1px solid rgba(18,24,32,0.1)
      padding .34rem 0
      text-align left
      i
       display inline-block
       width .40rem
       height .40rem
       background url("icon-unCheck.png")no-repeat center;
       background-size .40rem .40rem;
       vertical-align middle
       margin-right .12rem
       &.icon-checked
        background-image url("icon-checked.png")
    .rating-detail
      border-top 1px solid rgba(18,24,32,.1)
      margin-top -.34rem
      padding 0 .36rem
      text-align left
      li
        padding .28rem 0 .36rem 0
        .rating-header
          display flex
          flex-direction row
          justify-content space-between
          margin-bottom .24rem
          .user-info
            display flex
            flex-direction row
            align-items center
            img
              width .24rem
              height .24rem
              border-radius 50%
              margin-left .11rem


        .content i
          display inline-block
          width .23rem
          height .20rem
          background-size .23rem .20rem
          background-repeat no-repeat
          margin-right .09rem
          &.icon-bad
             background-image url("icon-bad.png")
          &.icon-good
             background-image url("icon-good.png")

  .close
     position absolute
     left .24rem
     top .24rem
     background #000
     color #fff
     padding .1rem .2rem
     border-radius .5rem
</style>
