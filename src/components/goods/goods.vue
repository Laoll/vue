<template>
  <div class="goods">
       <div class="sidebar" ref="menuWrapper">
          <ul>
            <li v-for="(item,index) in goods">
              <a href="">{{item.name}}</a>
            </li>
          </ul>
       </div>
       <div class="goods-content" ref="foodsWrapper">
           <ul>
              <li v-for="(good,index) in goods">
                  <p class="food-title">{{good.name}}</p>
                  <ul class="toggle">
                      <li v-for="food in good.foods" @click="showDetail">
                          <div class="food-pic">
                            <img :src="food.icon" alt="">
                          </div>
                          <div class="food-content">
                              <h2>{{food.name}}</h2>
                               <p>{{food.description}}</p>
                               <p><span>月售{{food.sellCount}}份</span><span>好评率{{food.rating}}%</span></p>
                               <div class="food-price">
                                   <div><span>¥ {{food.price}}</span><span v-show="food.oldPrice">¥ {{food.oldPrice}}</span></div>
                                   <cartContrl></cartContrl>
                               </div>
                          </div>
                      </li>
                  </ul>
              </li>
           </ul>
       </div>
        <div class="shop-cart">
          <ul>
            <li>
              <div>
                 <i class="icon-shopcart"></i>
                 <span>¥ 0</span>
              </div>
              <p>另需配送费￥4元</p>
            </li>
            <li class="balance">
                 <div>
                   ¥20起送
                 </div>
                <div>
                  去结算
                </div>

            </li>
          </ul>
        </div>
        <food v-show="foodShow"></food>
  </div>
</template>

<script type="text/ecmascript-6">
  import cartContrl from '../cartContrl/cartContrl'
  export default {
    name: 'goods',
    props: {
      goods: {
        type: Object
      }
    },
    data () {
      return {
        scrollY: 0,
        num: 0,
        subShow: 0,
        foodShow: false
      }
    },
    components: {
      cartContrl
    },
    methods: {
      showDetail () {
        this.foodShow = true
      }
    }
  }
</script>

<style lang="stylus">

  .goods
    display flex
    min-height  100px
    align-items stretch
    position absolute
    bottom:0
    left 0
    top 0
    right 0
    padding 3.47rem 0 .97rem 0
    overflow-y auto
  .goods .sidebar
    width 1.61rem
    font-size .24rem
    height 67%
    padding-bottom 1rem
    color #121820
    box-sizing border-box
    background #f3f5f7
    overflow-y auto
    position fixed
  .goods .sidebar li{
    height 1.06rem
    padding 0 .22rem
    display flex
    align-items center
    justify-content center
    line-height .28rem
    background #f3f5f7
  }
  .goods .sidebar li a{
    border-top:1px solid rgba(18,24,32,0.1)
    display flex
    align-items center
    justify-content center
    flex 1
    height 100%

  }
  .goods .sidebar li.cur{
    background #fff
  }
  .goods-content
    flex 1
    padding-left: 1.61rem;
  .food-title
    line-height .54rem
    padding-left .25rem
    background #f3f5f7
    font-size .24rem
    color #93989d
    text-align left
    position relative
  .food-title:before{
    content ''
    display inline-block
    width 0.04rem
    height 100%
    background #d9dce0
    position absolute
    left 0
    top 0
  }
  .toggle
     padding 0 .33rem
  .toggle li
     padding .35rem 0
     display flex
  .toggle .food-pic{
     width 1.14rem
     height 1.14rem
  }
  .toggle .food-pic img
     width 100%
  .toggle .food-content{
    flex 1
    text-align left
    padding-left .25rem
  }
  .toggle li+li
    border-top:1px solid #d9dce0
  .toggle .food-content h2
     font-size .28rem
     color #121820
     margin-bottom .10rem
  .toggle .food-content p
     font-size .20rem
     color #93989d
     margin-bottom .10rem
  .toggle .food-content  span+span
     margin-left  .20rem
  .food-content .food-price div:first-child
     float left
  .food-content .food-price div:first-child span:first-child
     color #ce1b1b
     font-size .28rem
  .food-content .food-price div:first-child span:last-child
     color #93989d
     font-size .20rem
     text-decoration line-through
  .food-content .food-price div:last-child
     float right
  .food-content .food-price div:last-child span
     margin 0 .22rem
     color #93989d
     font-size .20rem
  .icon-add
      display inline-block
      width .42rem
      height .42rem
      background url("icon-add.png")no-repeat center
      background-size .40rem .40rem
      vertical-align middle
  .icon-sub
      display inline-block
      width .42rem
      height .42rem
      background url("icon-sub.png")no-repeat center
      background-size .42rem .42rem
      vertical-align middle
  .shop-cart
    position: fixed;
    display: flex;
    width: 100%;
    max-width: 750px;
    height: 0.96rem;
    background: #121820;
    bottom: 0;
    left: 50%;
    transform: translate(-50%,0)
  .shop-cart ul
      display flex
      flex 1
      flex-direction row
      align-items  stretch
  .shop-cart li
      display flex
      align-items center
      color #ffffff
      font-size .32rem

  .shop-cart li:first-child
      flex 1
  .shop-cart li:last-child
      display flex
      flex-direction row
      width 2.10rem
      text-align center
      background #31363d
      justify-content center
  .icon-shopcart
      display inline-block
      background #121820 url("icon-shopcart.png")no-repeat center
      width .88rem
      height .88rem
      background-size .88rem .88rem
      vertical-align middle
      border:.12rem solid #121820
      border-radius 50%
      margin-top -.16rem
  .shop-cart li:first-child p
      color #ffffff
      font-size .20rem
      vertical-align middle
      line-height .48rem
      border-left 1px solid #ffffff
      margin-left .25rem
      padding-left .25rem
  .shop-cart li:first-child div
      display flex
      align-items center
</style>

