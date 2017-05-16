<template>
  <div class="start" :class="starType">
       <span v-for="(item,index) in itemClasses" :class="item">
       </span>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'start',
    props: {
      score: {
        type: Number
      },
      size: {
        type: Number
      }
    },
    data () {
      return {
        classList: []
      }
    },
    computed: {
      starType () {
        return 'star-' + this.size
      },
      itemClasses () {
        let result = []
        let score = this.score
        let hasDecimal = score % 1 !== 0
        let integer = Math.floor(score)
        for (let i = 0; i < integer; i++) {
          result.push('on')
        }
        if (hasDecimal) {
          result.push('half')
        }
        while (result.length < 5) {
          result.push('off')
        }
        return result
      }
    }
  }
</script>

<style lang="stylus">
  .start
      display flex
      flex-direction row
      justify-content space-between
      align-items  center
      span
        display inline-block
        width .45rem
        height .45rem
        background url("star48_on@3x.png")no-repeat center
        background-size .45rem .45rem
        vertical-align middle
      span.off
         background-image url("star48_off@3x.png")
      span.half
         background-image url("star48_half@3x.png")
      &.star-36
        span
          width .36rem
          height .36rem
          background-size .36rem .36rem
      &.star-24
        span
          width .24rem
          height .24rem
          background-size .24rem .24rem
      &.star-48
        span
          width .48rem
          height .48rem
          background-size .48rem .48rem
</style>
