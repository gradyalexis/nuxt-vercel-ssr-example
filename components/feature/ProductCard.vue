<template>
  <Card
    :background-color="colorResult"
    class="w-full flex cursor-pointer relative card-product"
    @click:card="goDetailProduct"
  >
    <div class="py-20 h-full m-auto space-y-8">
      <img
        :src="item.image"
        class="w-44 h-44 mx-auto object-contain"
        :alt="item.name"
      >
      <div class="space-y-2">
        <div class="text-center mx-auto uppercase text-xs font-semibold text-name">
          {{ item.name }}
        </div>
        <div class="text-center mx-auto font-bold uppercase text-sm">
          {{ item.type }}
        </div>
        <div class="text-center mx-auto font-bold">
          $ {{ item.price }}
        </div>
        <div class="text-center mx-auto">
          <Button>
            SEE NOW
          </Button>
        </div>
      </div>
    </div>
  </Card>
</template>

<script>
import { color } from '~/constants/color'

export default {
  name: 'FeatureProductCard',
  props: {
    indexData: {
      type: Number,
      required: true
    },
    indexProducts: {
      type: Number,
      required: true
    },
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    colorResult () {
      if (this.indexData % 2 === 0) {
        if (this.indexProducts % 2 === 0) {
          return color.gray
        }

        return color.white
      }

      if (this.indexProducts % 2 === 0) {
        return color.white
      }

      return color.gray
    }
  },
  methods: {
    goDetailProduct () {
      this.$emit('click:product', this.item)
    }
  }
}
</script>

<style scoped>
.text-name {
  color: #adaeae;
}

.card-product {
  transition: all .2s;
}

.card-product div img {
  transition: all .5s;
}

.card-product:hover div img {
  transform: scale(1.2, 1.2) rotate(-5deg);
}
</style>
