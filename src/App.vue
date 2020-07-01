<template>
  <div>
    <virtual-scroll :datas='listData' :itemHeight='50' :remain='10'>
      <template v-slot={item}>
        <span class="list">{{item.value}}</span>
      </template>
    </virtual-scroll>
  </div>
</template>

<script>
export default {
  data () {
    return {
      listData: []
    }
  },
  created () {
    this.listData = this.init()
  },
  methods: {
    init () {
      const arr = []
      for (let i = 0; i < 10000; i++) {
        arr.push({
          id: i,
          value: i
        })
      }
      return arr
    }
  }
}
</script>

<style lang="scss" scoped>
.list {
  display: block;
  height: 50px;
  width: 100%;
  line-height: 50px;
  text-align: center;
  border-bottom: 1px solid darkcyan
}
</style>
