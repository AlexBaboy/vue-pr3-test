<template>
  <div class="container">
    <div class="flex">
      <div class="img-wrapper">
        <img v-show="isCatVisible"
              :class="imgFilters"
             :style="imgStyles"
             src="../assets/logo.png">
      </div>
      <div class="controls">
        <h1>photo redactor</h1>
        <h2>Фильтры</h2>
        <div class="btn-group flex">
          <button type="button"
                  :class="imgFilters.sepia ? 'active' : ''"
                  @click="imgFilters.sepia = !imgFilters.sepia">Сепия</button>
          <button type="button"
                  :class="imgFilters.border ? 'active' : ''"
                  @click="imgFilters.border = !imgFilters.border">Рамка</button>
          <button type="button"
                  :class="imgFilters.small ? 'active' : ''"
                  @click="imgFilters.small = !imgFilters.small">Уменьшить</button>
        </div>
        <button @click="isCatVisible = !isCatVisible">показать/спрятать</button>
        <h2>Размеры</h2>
        <div class="btn-group">
          <label>
            Ширина: {{imgSizes.currentWidth}}
            <input type="range"
                   :value="imgSizes.currentWidth"
                   @input="imgSizes.currentWidth = $event.target.value"
                   :min="imgSizes.minWidth"
                   :max="imgSizes.maxWidth">
          </label>
          <label>
            Высота: {{imgSizes.currentHeight}}
            <input type="range"
                   :value="imgSizes.currentHeight"
                   @input="imgSizes.currentHeight = $event.target.value"
                   :min="imgSizes.minHeight"
                   :max="imgSizes.maxHeight">
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PhotoRedactor",
  data() {
    return {
      isCatVisible: true,
      imgFilters: {
        sepia: false,
        border: false,
        small: false
      },
      imgSizes: {
        maxWidth: 640,
        maxHeight: 480,
        currentWidth: 640,
        currentHeight: 480
      }
    }
  },
  computed: {
    imgStyles() {
      return {
        width: `${this.imgSizes.currentWidth}px`,
        height: `${this.imgSizes.currentHeight}px`
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .container {
    margin-top: 40px;
  }
  .controls {
    margin-left: 20px;
  }
  .img-wrapper {
    width: 640px;
    height: 480px;
    background-color: #cecece;
  }
  img {
    transition: 0.2s ease;
    &.sepia {
      filter: sepia(100%);
    }
    &.border {
      border: 5px dashed #464646;
    }
    &.small {
      width: 400px;
    }
  }
  button {
    margin-right: 10px;
    &.active {
      background-color: #dbdbdb;
    }
  }
  h2 {
    margin-bottom: 10px;
  }
  .btn-group {
    margin-bottom: 20px;
  }
</style>