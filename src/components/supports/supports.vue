<template>
  <ul  class="supports" :class="supportType">
    <li class="support-item" v-for="(item,index) in seller.supports">
      <span class="icon" :class="iconType[seller.supports[index].type]"></span>
      <span class="text">{{seller.supports[index].description}}</span>
    </li>
  </ul>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'supports',
    props: {
      seller: {
        type: Object
      },
      sellerType: {
        type: Number
      }
    },
    data () {
      return {
        iconType: ['decrease', 'discount', 'discount', 'special', 'special']
      }
    },
    computed: {
      supportType () {
        return 'supports-' + this.sellerType
      }
    }
  }
</script>

<style lang="stylus">
  .supports
    text-align left
    font-size .24rem
    li
      display flex
      flex-direction row
      align-items center
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
  .supports-2
    .icon
      display: inline-block
      margin-right .13rem
      width: .33rem
      height:.33rem
      background-size: .33rem .33rem
      background-repeat: no-repeat
      &.decrease
       background-image url("decrease_4@3x.png")
      &.discount
       background-image url("discount_4@3x.png")
      &.guarantee
       background-image url("guarantee_4@3x.png")
      &.invoice
       background-image url("invoice_4@3x.png")
      &.special
       background-image url("special_4@3x.png")
</style>
