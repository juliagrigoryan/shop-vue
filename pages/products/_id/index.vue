<template lang="pug">
.article
  .preloader(v-if="!isLoaded")
  .article__container.container
    .article__content
      picture.article__picture
        img(:src="item.thumbnail")
      .article__block
        h1.article__title
          span.article__category {{ item.category }}
          span.sr-only :
          span.article__title-text {{ item.title }}
        p.article__brand {{ item.brand }}
        p.article__description {{ item.description }}
        .article__bottom
          p.article__price ${{ item.price }}
          p.article__rating.rating
            span.sr-only Rating :
            span {{ item.rating }} / 5
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
      item: 'product/getProductItem'
    })
  },
  async created() {
    await this.$store.dispatch('product/fetchProductItem', this.$route.params.id)
    this.isLoaded = true
  }
}
</script>

<style lang="scss">
.article {
  padding-bottom: 50px;
  position: relative;

  &__content {
    align-items: flex-start;
    background-color: $color-white;
    border-radius: 20px;
    box-shadow: 0 1px 4px rgba($color-black, 0.16);
    display: flex;
    padding: 30px;

    @include media-max(767) {
      display: block;
    }
  }

  &__picture {
    border-radius: 20px;
    display: block;
    flex-shrink: 0;
    overflow: hidden;
    width: 400px;

    @include media-max(1279) {
      width: 300px;
    }

    @include media-max(767) {
      margin-bottom: 20px;
      width: 100%;
    }

    img {
      width: 100%;
    }
  }

  &__block {
    padding-left: 30px;

    @include media-max(767) {
      padding: 0;
    }
  }

  &__category {
    background-color: $color-1--2;
    color: $color-white;
    display: inline-block;
    font-size: 1.5rem;
    font-weight: 500;
    padding: 5px 10px;
  }

  &__title {
    margin-bottom: 5px;
  }

  &__title-text {
    font-size: 5rem;
    font-weight: 700;

    @include media-max(1279) {
      font-size: 4rem;
    }
  }

  &__brand {
    font-size: 1.4rem;
    margin-bottom: 15px;
  }

  &__description {
    font-size: 1.7rem;
  }

  &__bottom {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }

  &__price {
    font-size: 4rem;
  }
}
</style>
