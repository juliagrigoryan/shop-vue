<template lang="pug">
div
  .banner
    picture.banner__picture
      img(src="https://t3.ftcdn.net/jpg/02/34/44/16/360_F_234441670_C9KlCIyfp2l8tLKHrr4CNjctGz252bg5.jpg")
    .banner__content
      h1.banner__title Best Seller
  Nuxt
</template>

<style lang="scss">
.banner {
  margin-bottom: 50px;
  position: relative;

  &__picture {
    img {
      @include size(100%, 360px);
      object-fit: cover;

      @include media-max(1279) {
        height: 240px;
      }

      @include media-max(767) {
        height: 160px;
      }
    }
  }

  &__content {
    @include absolute(50%, null, null, 50%);
    transform: translate(-50%, -50%);
    width: 100%;
  }

  &__title {
    color: $color-white;
    font-size: 7rem;
    font-weight: 700;
    text-align: center;

    @include media-max(767) {
      font-size: 4rem;
    }
  }
}
</style>
