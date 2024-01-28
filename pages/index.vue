<template lang="pug">
main.products
  .products__container.container
    .products__content
      .preloader(v-if="!isLoaded")
      .products__filter
        FilterMain(@loaded="changeStatus")
      .products__list
        ProductListMain
</template>

<script>
export default {
  data() {
    return {
      isLoaded: false
    }
  },
  methods: {
    changeStatus(status) {
      this.isLoaded = status
    }
  }
}
</script>

<style lang="scss">
.products {
  padding-bottom: 100px;
  position: relative;

  &__content {
    display: flex;

    @include media-max(767) {
      display: block;
    }
  }

  &__list {
    flex-grow: 1;
  }

  &__filter {
    background-color: $color-white;
    border-radius: 20px;
    box-shadow: 0 1px 4px rgba($color-black, 0.16);
    flex-shrink: 0;
    margin-right: 30px;
    padding: 20px;
    width: 270px;

    @include media-max(1279) {
      width: 210px;
    }

    @include media-max(767) {
      margin: 0 0 30px;
      width: 100%;
    }
  }
}
</style>
