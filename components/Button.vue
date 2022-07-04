<template>
  <button
    class="uppercase px-10 py-2 text-xs border-0 cursor-pointer font-semibold"
    style="background: #f5dbb6"
    @click="$nuxt.$emit('click:button')"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'Button'
}
</script>
