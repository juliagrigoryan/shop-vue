<template lang="pug">
article.card
  picture.card__picture
    img(:src="item.thumbnail")
  h2.card__title
    span.card__category {{ item.category }}
    span.sr-only :
    NuxtLink.card__link(:to="`/products/${item.id}`") {{ item.title }}
  p.card__brand {{ item.brand }}
  .card__bottom
    p.card__price ${{ item.price }}
    p.card__rating.rating
      span.sr-only Rating :
      span {{ item.rating }} / 5
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
.card {
  background-color: $color-white;
  border-radius: 20px;
  box-shadow: 0 1px 4px rgba($color-black, 0.16);
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 20px;
  position: relative;

  &__title {
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 10px;
  }

  &__link {
    @include trs;
    color: $color-1--1;
    display: inline-block;
    text-decoration: none;

    @include on-event {
      color: $color-black;
      text-decoration: underline;
    }

    &::after {
      @include absolute(0, 0, 0, 0);
      content: "";
    }
  }

  &__picture {
    border-radius: 20px;
    display: block;
    overflow: hidden;

    img {
      @include size(100%, 230px);
      object-fit: cover;
    }
  }

  &__category {
    background-color: $color-1--2;
    color: $color-white;
    display: inline-block;
    font-size: 1.3rem;
    padding: 7px 10px;
    transform: translateY(-50%);
  }

  &__brand {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }

  &__bottom {
    align-items: center;
    border-top: 1px solid $color-1--2;
    display: flex;
    justify-content: space-between;
    margin: auto -20px 0;
    padding: 10px 20px 0;
  }

  &__price {
    font-size: 2rem;
  }
}
</style>
