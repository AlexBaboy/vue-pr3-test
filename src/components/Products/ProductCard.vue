<template>
  <div class="product-card">
    <img :src="imgUrl"
        width="300px"
    >
    <div class="product-card__info">
      <h2>{{ title }}</h2>
      <p class="price">{{ price }}</p>
      <p class="count">Доступно для доставки {{ count }}шт</p>
      <button type="button" @click="addToBasket">Добавить в корзину</button>
    </div>

  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    title: {
      type: String,
      validator(value) {
        return value.length < 10
      }
    },
    price: {
      type: Number,
      required: true
    },
    imgUrl: {
      type: String,
      default: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Rokoko_bord_av_valn%C3%B6tstr%C3%A4%2C_1700-talets_sista_h%C3%A4lft_-_Hallwylska_museet_-_108491.tif/lossy-page1-1200px-Rokoko_bord_av_valn%C3%B6tstr%C3%A4%2C_1700-talets_sista_h%C3%A4lft_-_Hallwylska_museet_-_108491.tif.jpg'
    },
    count: {
      type: Number,
      default: 0
    }
  },
  methods: {
    addToBasket() {
      this.$emit('addToBasket', {})
    }
  }

}
</script>

<style lang="scss" scoped>

</style>