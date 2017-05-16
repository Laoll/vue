<template>
   <div class="cartContrl">
     <em class="icon-sub" v-show="num>0" @click="sub"></em>
     <span v-show="num>0">{{num}}</span>
     <em class="icon-add" @click="add"></em>
   </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'cartContrl',
    data () {
      return {
        num: 0
      }
    },
    methods: {
      add () {
        this.num++
      },
      sub () {
        this.num--
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
