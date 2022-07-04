<template>
  <div class="inline-flex">
    <div
      v-for="item in items"
      :key="item"
      class="w-36 py-2 text-center select-tab cursor-pointer"
      :class="{ 'select-tab-active': selected === item }"
      @click="selected = item"
    >
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'SelectTab',
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      selected: ''
    }
  }
}
</script>

<style scoped>
.select-tab {
  border: 1px solid #033a5f;
  border-right: none;
  color: #033a5f;
  transition: .2s ease;
}

.select-tab:hover {
  background: #033a5f;
  color: #ffffff;
}

.select-tab:last-child {
  border-right: 1px solid #033a5f;
}

.select-tab-active {
  background: #033a5f;
  color: #ffffff;
}
</style>
