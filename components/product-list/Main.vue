<template lang="pug">
.product-list
  .loading(v-if="!isLoaded")
  ul.product-list__list(v-if="products.length")
    li.product-list__item(v-for="product in products" :key="product.id")
      CardMain(:item="product")
  .product-list__placeholder(v-else)
    span.product-list__icon(aria-hidden="true")
    h2.product-list__text Sorry, nothing found
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      isLoaded: false
    }
  },
  computed: {
    ...mapGetters({
      productList: 'product/getProductList',
      filteredProducts: 'product/getFilteredProducts'
    }),
    products() {
      return Object.keys(this.$route.query).length ? this.filteredProducts : this.productList
    }
  },
  mounted() {
    this.isLoaded = true
  }
}
</script>

<style lang="scss">
.product-list {
  width: 100%;

  &__list {
    display: flex;
    flex-wrap: wrap;
    row-gap: 24px;
    list-style: none;
    margin: 0 -12px;
  }

  &__item {
    padding: 0 12px;
    width: calc(100% / 3);

    @include media-max(1279) {
      width: 50%;
    }

    @include media-max(767) {
      width: 100%;
    }
  }

  &__placeholder {
    align-items: center;
    display: flex;
    flex-direction: column;
  }

  &__icon {
    &::before {
      content: "\2639";
      color: $color-1--2;
      font-size: 4rem;
      font-weight: 700;
    }
  }

  &__text {
    font-size: 2.5rem;
    font-weight: 500;
    text-align: center;
  }
}
</style>
