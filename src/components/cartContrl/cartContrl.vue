<template>
   <div class="cartContrl">
     <em class="icon-sub" v-show="num>0" @click="sub($event)"></em>
     <span v-show="num>0">{{num}}</span>
     <em class="icon-add" @click="add($event)"></em>
   </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'cartContrl',
    props: {
      price: {
        type: Number
      }
    },
    data () {
      return {
        num: 0
      }
    },
    methods: {
      add (event) {
        if (!event._constructed) {
          return
        }
        this.num++
        this.$emit('increment')
      },
      sub (event) {
        if (!event._constructed) {
          return
        }
        this.num--
        this.$emit('subPrice')
      }
    }
  }
</script>

<style lang="stylus">
  .cartContrl
    display flex
    flex-direction row
    align-items center
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
</style>
