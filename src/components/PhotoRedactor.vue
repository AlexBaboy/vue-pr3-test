<template>
  <div class="container">
    <div class="flex">
      <div class="img-wrapper">
        <img v-show="isCatVisible" src="../assets/logo.png">
      </div>
      <div class="controls">
        <h1>photo redactor</h1>
        <button @click="isCatVisible = !isCatVisible">показать/спрятать</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PhotoRedactor",
  data() {
    return {
      isCatVisible: true
    }
  }
}
</script>

<style scoped>

</style>