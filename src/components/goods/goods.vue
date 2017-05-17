<template>
  <div class="goods">
       <div class="sidebar" ref="menuWrapper">
          <ul>
            <li v-for="(item,index) in goods" class="menu-item" @click="selectMenu(index,$event)">
              <!--<a href="">{{item.name}}</a>-->
              {{item.name}}
            </li>
          </ul>
       </div>
       <div class="goods-content" ref="foodsWrapper">
           <ul>
              <li v-for="(good,index) in goods" class="food-item">
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
                                   <cartContrl :price="food.price" v-on:increment="incrementTotal(food.price)" v-on:subPrice="decrease(food.price)"></cartContrl>
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
                 <i class="icon-shopcart" :class="iconCart"></i>
                 <span>¥ {{totalPrice}}</span>
              </div>
              <p>另需配送费￥4元</p>
            </li>
            <li class="balance" :class="payClass">
                 <div v-show="totalPrice<20">
                   ¥20起送
                 </div>
                 <div class="toPay"  v-show="totalPrice>=20">
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
  import BScroll from 'better-scroll'
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
        foodShow: false,
        price: 0,
        totalPrice: 0
      }
    },
    components: {
      cartContrl
    },
    methods: {
      showDetail () {
        this.foodShow = true
      },
      incrementTotal (price) {
//          根据点击添加菜单总价格
        this.totalPrice += price
      },
      decrease (price) {
        this.totalPrice -= price
      },
      _initScroll () {
//        设置菜单栏滚动
        this.menuScroll = new BScroll(this.$refs.menuWrapper, {
          click: true
        })
//        设置菜品列表滚动
        this.foodsScroll = new BScroll(this.$refs.foodsWrapper, {
          probeType: 3,
          click: true
        })
//        当菜单滚动的时候监听滚动的y轴位置
        this.foodsScroll.on('scroll', (pos) => {
          this.scrollY = Math.abs(Math.round(pos.y))
        })
      },
      selectMenu (index, event) {
//        点击菜单列表，执行该事件
        if (!event._constructed) {
          return
        }
//        根据点击菜单的列表索引index获取当前菜品列表，并菜单显示滚动到该位置
        let foodList = this.$refs.foodsWrapper.getElementsByClassName('food-item')
        let el = foodList[index]
//          定义滚动事件，设置滚动时间
        this.foodsScroll.scrollToElement(el, 300)
      }
    },
    computed: {
      payClass () {
        if (this.totalPrice < 20) {
          return 'nullPay'
        } else {
          return 'toPay'
        }
      },
      iconCart () {
        if (this.totalPrice === 0) {
          return 'icon-shopcart-null'
        } else {
          return 'icon-shopcart-pull'
        }
      }
    },
    created () {
      this.$nextTick(() => {
        this._initScroll()
      })
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
    height:90%;
    overflow: hidden;
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
      justify-content center
  .icon-shopcart
      display inline-block
      background #121820 no-repeat center
      width .88rem
      height .88rem
      background-size .88rem .88rem
      vertical-align middle
      border:.12rem solid #121820
      border-radius 50%
      margin-top -.16rem
  .icon-shopcart-pull
      background-image url("icon-shopcart-pull.png")
  .icon-shopcart-null
      background-image url("icon-shopcart.png")
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
  .shop-cart .toPay{
    background #65b248
  }
  .shop-cart .nullPay
    background #31363d
</style>

