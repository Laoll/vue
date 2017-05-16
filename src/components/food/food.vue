<template>
  <div class="food">
    <div>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur culpa cumque cupiditate esse ex excepturi harum illo, inventore maiores nam numquam odit, porro quae qui recusandae sapiente soluta tempora ullam!
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'food',
    props: {
      seller: {
        type: Object
      },
      index: {
        type: Object
      }
    },
    data () {
      return {
      }
    },
    mounted () {
      this.seller = this.seller[this.index]
    }
  }
</script>

<style lang="stylus">
  .foodDetail
    background #fff
    display flex
    bottom 0
    left 0
    right 0
    top 0
</style>
