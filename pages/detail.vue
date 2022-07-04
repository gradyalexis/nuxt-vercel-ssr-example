<template>
  <div v-if="show" class="grid detail-grid-layout grow">
    <div
      class="flex relative"
      :style="{ backgroundColor: item.colors[0] }"
    >
      <div
        v-if="parseInt(item.isHighlight)"
        class="absolute bg-detail w-full h-full"
      />
      <img
        v-tilt
        :src="item.image"
        class="w-96 h-96 m-auto object-contain item-img"
        :alt="item.name"
      >
    </div>
    <div class="py-12 px-14 space-y-7">
      <NuxtLink to="/" class="flex space-x-2 back-link" style="text-decoration: none">
        <img src="/back.svg" class="w-8" alt="back-button">
        <div class="my-auto font-semibold">
          Back to Home
        </div>
      </NuxtLink>
      <div class="space-y-2">
        <div class="text-xs uppercase font-medium text-name">
          {{ item.name }}
        </div>
        <div class="text-2xl font-bold">
          {{ item.type }}
        </div>
        <div class="flex space-x-2">
          <StarRating :rating="roundedRates(item.rating)" :show-rating="false" :star-size="23" />
          <div class="font-semibold">
            {{ item.rating }}&nbsp;&nbsp;{{ `(${item.reviews} reviews)` }}
          </div>
        </div>
      </div>
      <div class="space-y-2">
        <div class="font-bold">
          Select Quality
        </div>
        <div>
          <SelectTab :items="['Basic', 'Premium']" />
        </div>
      </div>
      <div class="space-y-2">
        <div class="font-bold">
          Quantity
        </div>
        <div>
          <InputQuantity />
        </div>
      </div>
      <div class="space-y-2">
        <div class="font-bold">
          Color
        </div>
        <div class="flex space-x-6">
          <div
            v-for="color in item.colors"
            :key="color"
            class="w-6 h-6"
            style="border-radius: 100%; border: 1px solid #cdcccf"
            :style="{ backgroundColor: color }"
          />
        </div>
      </div>
      <div class="space-y-2">
        <div class="font-bold">
          Description
        </div>
        <div class="text-name" style="block-size: fit-content">
          {{ item.description }}
        </div>
      </div>
      <Button>
        BUY NOW
      </Button>
    </div>
  </div>
</template>

<script>
import { isEmpty } from '~/utils/is-empty'

export default {
  name: 'DetailPage',
  data () {
    return {
      show: false
    }
  },
  computed: {
    item () {
      return this.$route.query
    }
  },
  mounted () {
    if (isEmpty(this.item)) {
      this.$router.push('/')
    } else {
      this.show = true
    }
  },
  methods: {
    roundedRates (rate) {
      return Math.round(rate)
    }
  }
}
</script>

<style scoped>
.back-link {
  color: #03001a;
}

.text-name {
  color: #adaeae;
}

.item-img {
  z-index: 1;
}

.bg-detail {
  background-image: url('/background-highlight.jpg');
  background-repeat: no-repeat;
  background-size: auto 100vh;
  background-position: center;
  opacity: 0.1;
}

.detail-grid-layout {
  grid-template-columns: repeat(1, minmax(0, 1fr));
}

@media only screen and (min-width: 800px) {
  .detail-grid-layout {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
