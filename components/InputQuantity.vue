<template>
  <div class="inline-flex">
    <div
      class="w-10 py-2 text-center input-tab cursor-pointer"
      @click="decQty"
    >
      -
    </div>
    <div class="w-10 py-2 text-center input-number">
      {{ qty }}
    </div>
    <div
      class="w-10 py-2 text-center input-tab cursor-pointer"
      @click="incQty"
    >
      +
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputQuantity',
  data () {
    return {
      qty: 1
    }
  },
  methods: {
    decQty () {
      if (this.qty <= 1) {
        return
      }

      this.qty--
    },
    incQty () {
      this.qty++
    }
  }
}
</script>

<style scoped>
.input-tab {
  border: 1px solid #033a5f;
  border-right: none;
  color: #033a5f;
  transition: .2s ease;
}

.input-tab:hover {
  background: #033a5f;
  color: #ffffff;
}

.input-tab:last-child {
  border-right: 1px solid #033a5f;
}

.input-number {
  border: 1px solid #033a5f;
  border-right: none;
  color: #033a5f;
  transition: .2s ease;
}
</style>
