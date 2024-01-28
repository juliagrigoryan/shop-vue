<template lang="pug">
.filter
  .filter__block
    p.filter__title Category
    .filter__group(v-for="category in categories" :key="category")
      label.filter__label(:for="category") {{ category }}
      input.filter__input(
        type="checkbox"
        :id="category"
        :value="category"
        v-model="checkedCategory"
        @change="setUrlParams(checkedCategory, 'category')")
  .filter__block
    p.filter__title Brand
    .filter__group(v-for="brand in brands" :key="brand")
      label.filter__label(:for="brand") {{ brand }}
      input.filter__input(
        type="checkbox"
        :id="brand"
        :value="brand"
        v-model="checkedBrand"
        @change="setUrlParams(checkedBrand, 'brand')")
  .filter__block
    p.filter__title Rating
    .filter__group(v-for="rating in ratings" :key="rating")
      label.filter__label(:for="rating") {{ rating }}+
      input.filter__input(
        type="checkbox"
        :id="rating"
        :value="rating"
        v-model="checkedRating"
        @change="setUrlParams(checkedRating, 'rating')")
  .filter__block
    p.filter__title Price
    .filter__group.is-content-between
      .filter__group.is-reversed
        label.filter__label(for="min") From
        input.filter__input.has-width(
          type="number"
          id="min"
          :min="price.min"
          :max="price.max"
          :placeholder="price.min"
          v-model="minPrice"
          @change="setUrlParams(selectedPrice, 'price')")
      .filter__group.is-reversed
        label.filter__label(for="max") To
        input.filter__input.has-width(
          type="number"
          id="media-max"
          :min="price.min"
          :max="price.max"
          :placeholder="price.max"
          v-model="maxPrice"
          @change="setUrlParams(selectedPrice, 'price')")
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      checkedCategory: [],
      checkedBrand: [],
      checkedRating: [],
      minPrice: '',
      maxPrice: '',
      filters: {}
    }
  },
  computed: {
    ...mapGetters({
      products: 'product/getProductList'
    }),
    categories() {
      return [...new Set(this.products.map(el => el.category))] || []
    },
    brands() {
      return [...new Set(this.products.map(el => el.brand))] || []
    },
    ratings() {
      return [...new Set(this.products.map(el => parseInt(el.rating)))] || []
    },
    price() {
      const price = [...new Set(this.products.map(el => el.price))]

      return {
        min: Math.min(...price),
        max: Math.max(...price)
      }
    },
    selectedPrice() {
      const minPrice = this.minPrice || this.price.min
      const maxPrice = this.maxPrice || this.price.max

      return `${minPrice}-${maxPrice}`
    }
  },
  async mounted() {
    await this.$store.dispatch('product/fetchProductList')
    this.$emit('loaded', true)

    if (Object.keys(this.$route.query).length) {
      this.updateFilters(this.$route.query)
    }
  },
  methods: {
    setUrlParams(value, key) {
      if (value.length) {
        this.$set(this.filters, key, value)
      } else {
        this.$delete(this.filters, key)
      }
      const result = '?' + new URLSearchParams(this.filters).toString()
      this.$store.dispatch('product/filterProducts', this.filters)
      this.$router.push(result)
    },
    updateFilters(query) {
      Object.entries(query).forEach(([key, value]) => {
        let filters = value.split(',')

        if (key === 'category') {
          this.checkedCategory = filters
        }

        if (key === 'brand') {
          this.checkedBrand = filters
        }

        if (key === 'rating') {
          this.checkedRating = filters
        }

        if (key === 'price') {
          const price = value.split('-')
          this.minPrice = price[0]
          this.maxPrice = price[1]
          filters = value
        }

        this.$set(this.filters, key, filters)
      })

      this.$store.dispatch('product/filterProducts', this.filters)
    }
  }
}
</script>

<style lang="scss">
.filter {
  margin: 0 -10px;

  &__block {
    margin-bottom: 20px;
    padding: 0 10px;
  }

  &__title {
    font-size: 1.7rem;
    margin-bottom: 10px;
  }

  &__group {
    align-items: center;
    display: flex;
    margin-bottom: 5px;

    @include media-max(767) {
      display: inline-flex;
      margin-right: 15px;
    }

    &.is-reversed {
      gap: 10px;
    }

    &.is-content-between {
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }

  &__label {
    cursor: pointer;
    font-size: 1.4rem;
    order: 1;

    .is-reversed & {
      order: 0;
    }
  }

  &__input {
    &[type="checkbox"] {
      @include size(20px);
      cursor: pointer;
      margin-right: 5px;
    }

    &[type="number"] {
      @include size(100%, 40px);
      padding: 0 10px;
    }

    &[type="range"] {
      width: 100%;
    }

    &.has-width {
      width: 70px;
    }
  }

  &__select {
    @include size(100%, 40px);
    border: 1px solid $color-gray;
    border-radius: 5px;
    color: $color-gray;
  }
}
</style>
