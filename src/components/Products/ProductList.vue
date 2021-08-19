<template>
  <div class="product-list">
    <h1>Письменные столы</h1>
    <Search v-model="searchText" />
    <button>найти</button>
    <ul class="list-default flex">
      <li
        v-for="(product, index) in products"
        :key="index"
      >
        <product-card
          :title="product.title"
          :price="product.price"
          :img-url="product.imgUrl"
          :count="product.count"
          @addToBasket="addToBasket(index)"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import ProductCard from "@/components/Products/ProductCard";
import Search from "@/components/Products/Search";

export default {
  name: "ProductList",
  components: {
    Search,
    ProductCard
  },
  data() {
    return {
      searchText: '',
      products: [
        {
          title: 'Стол 1',
          price: 1999,
          imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Rokoko_bord_av_valn%C3%B6tstr%C3%A4%2C_1700-talets_sista_h%C3%A4lft_-_Hallwylska_museet_-_108491.tif/lossy-page1-1200px-Rokoko_bord_av_valn%C3%B6tstr%C3%A4%2C_1700-talets_sista_h%C3%A4lft_-_Hallwylska_museet_-_108491.tif.jpg',
          count: 30
        },
        {
          title: 'Стол 2',
          price: 2999,
          imgUrl: 'https://54-mebel.ru/image/data/VSM/Logart/Stoli/bm20/BB203.png',
          count: 40
        },
        {
          title: 'Стол 3',
          price: 3999,
          imgUrl: 'https://mebelwork.com.ua/image/cache/catalog/product/byudzhet/ofisnyye-stoly/byu103/ofisnyy-stol-byu103-yablonya-lokarno-800x600.jpg',
          count: 40
        },
      ]
    }
  },
  methods: {
    addToBasket(index) {
      console.log(index)
    }
  }
}
</script>

<style lang="scss" scoped>
.product-list {
  max-width: 800px;
  margin: 0 auto;
}
.list-default {
  list-style-type: none;
}
.flex {
  display: flex;
}
</style>