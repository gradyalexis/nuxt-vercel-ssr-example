<template>
  <Card
    class="cursor-pointer card-product"
    @click:card="goDetailProduct"
  >
    <div class="absolute highlight-background" />
    <div class="absolute highlight-info space-y-2">
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
    <Slider :items="item.images" class="w-96 absolute highlight-image" />
  </Card>
</template>

<script>
export default {
  name: 'FeatureProductHighlightCard',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    goDetailProduct () {
      this.$emit('click:highlight', this.item)
    }
  }
}
</script>

<style scoped>
.text-name {
  color: #adaeae;
}

.highlight-info {
  left: 80%;
  top: 30%;
  transform: translate(-50%, -50%);
}

.highlight-image {
  left: 40%;
  top: 60%;
  transform: translate(-50%, -50%);
}

.highlight-background {
  width: 100%;
  height: 100%;
  opacity: .1;
  background-image: url('/background-highlight.jpg');
  background-repeat: no-repeat;
  background-size: auto;
  background-position: center;
}

.card-product {
  transition: all .2s;
}

.card-product .highlight-image {
  transition: all .5s;
}

.card-product:hover .highlight-image {
  transform: scale(1.1, 1.1) translate(-50%, -50%);
}
</style>
