<template>
  <div class="carousel" @click="$nuxt.$emit('click')">
    <template v-for="(item, index) in items">
      <Transition :key="item">
        <div
          v-if="currentSlide === index"
          class="carousel-item relative w-full"
        >
          <img
            :src="item"
            class="object-contain"
          >
        </div>
      </Transition>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Slider',
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      currentSlide: 0,
      interval: null
    }
  },
  created () {
    this.interval = setInterval(() => {
      this.nextSlide()
    }, 10000)
  },
  destroyed () {
    clearInterval(this.interval)
  },
  methods: {
    prevSlide () {
      if (this.currentSlide <= 0) {
        this.currentSlide = this.items.length - 1
        return
      }
      this.currentSlide -= 1
    },
    nextSlide () {
      if (this.currentSlide >= this.items.length - 1) {
        this.currentSlide = 0
        return
      }
      this.currentSlide += 1
    }
  }
}
</script>

<style lang="scss" scoped>
.carousel {
  &-item {
    --carousel-gap: 0.5rem;
    gap: var(--carousel-gap);
    & > img {
      width: 100%;
      overflow: hidden;
      height: 6rem;
      @media (min-width: 1024px) {
        --carousel-gap: 1.25rem;
        height: 100%;
      }
    }
  }
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transition: opacity 0.5s ease;
}

.v-enter-leave,
.v-leave-form {
  opacity: 0;
  transition: opacity 0.5s ease;
}
</style>
