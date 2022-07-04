<template>
  <div class="grid grid-cols-layout grow">
    <template v-for="(products, indexData) in items">
      <template v-for="(product, indexProducts) in products">
        <FeatureProductCard
          :key="`${indexData}${indexProducts}`"
          :index-data="indexData"
          :index-products="indexProducts"
          :item="product"
          @click:product="goDetail"
        />
      </template>
      <FeatureProductHighlightCard
        v-if="indexData < (items.length - 1)"
        :key="`highlight${indexData}`"
        :item="highlight"
        class="highlight-layout relative"
        @click:highlight="goDetail"
      />
    </template>
  </div>
</template>

<script>
import chunk from '~/utils/chunk'

export default {
  name: 'IndexPage',
  layout: 'default',
  async asyncData ({ store }) {
    await store.dispatch('getProducts')
    await store.dispatch('getHighlight')
  },
  data () {
    return {
      item: undefined
    }
  },
  computed: {
    items () {
      return chunk(this.$store.state.products, 4)
    },
    highlight () {
      return this.$store.state.highlight
    }
  },
  methods: {
    goDetail (value) {
      this.$router.push({
        path: '/detail',
        query: { ...value }
      })
    }
  }
}
</script>

<style scoped>
.grid-cols-layout {
  grid-template-columns: repeat(1, minmax(0, 1fr));
}

.highlight-layout {
  grid-column: span 1 / span 1;
  height: 400px;
}

@media only screen and (min-width: 800px) {
  .grid-cols-layout {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .highlight-layout {
    grid-column: span 2 / span 2;
    height: auto;
  }
}
</style>
