<template>
  <div class="wrapper">
    hello world
    <div>
      {{msg}}
    </div>
    <div class="title">
      {{ name }}
    </div>
  </div>
</template>
<script>
import dataC from './data.csv'
export default {
  data() {
    return {
      msg: 'shenxin',
      name: ''
    }
  },
  methods: {
    print() {
      this.name = "vue success"
    }
  },
  mounted() {
    this.print()
    console.log("data: ", dataC)
  }
}
</script>
// <style lang="scss">
// .wrapper {
//   font-size: 40px;
//   .title {
//     color: red;
//   }
// }
// </style>
