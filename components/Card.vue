<template>
  <div
    class="card"
    :style="{ backgroundColor: backgroundColor }"
    @click="$emit('click:card')"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    backgroundColor: {
      type: String,
      default: '#ffffff'
    }
  }
}
</script>
