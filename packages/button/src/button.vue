<template>
  <div>
    {{ msg }}
    <button>click</button>
  </div>
</template>
<script>
export default {
  name: 'WaButton',
  data() {
    return {
      msg: 'button'
    }
  }
}
</script>