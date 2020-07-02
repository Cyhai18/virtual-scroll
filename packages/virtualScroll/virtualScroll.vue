<template>
  <div
    class="vs-box"
    ref="vsBox"
    @scroll="handleScroll">
      <div class="vs-bar" ref="vsBar"></div>
      <div
      class="vs-list"
      :style="{transform: `translate3d(0, ${offset}px, 0)`}">
        <div v-for="(item, i) in visibleData" :key="i">
          <slot :item="item"></slot>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'virtualScroll',
  props: {
    itemHeight: {
      type: Number,
      default: 40
    },
    remain: {
      type: Number,
      default: 10
    },
    timeout: {
      type: Number,
      default: 10
    },
    datas: {
      type: Array,
      required: true,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      offset: 0,
      sIndex: 0,
      eIndex: this.remain,
      lastTime: 0
    }
  },
  computed: {
    visibleData () {
      return this.datas.slice(this.sIndex, this.eIndex)
    }
  },
  mounted () {
    this.$refs.vsBox.style.height = this.itemHeight * this.remain + 'px'
    this.$refs.vsBar.style.height = this.datas.length * this.itemHeight + 'px'
  },
  methods: {
    handleScroll () {
      const currentTime = +new Date()
      if (currentTime - this.lastTime > this.timeout) {
        const scrollTop = this.$refs.vsBox.scrollTop
        this.sIndex = Math.floor(scrollTop / this.itemHeight)
        this.eIndex = this.sIndex + this.remain
        this.offset = this.sIndex * this.itemHeight
        this.lastTime = currentTime
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .vs-box {
    position: relative;
    width: 100%;
    overflow: auto;
  }
  .vs-list {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%
  }
</style>
