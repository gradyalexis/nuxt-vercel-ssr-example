export const state = () => ({
  products: [],
  highlight: undefined
})

export const mutations = {
  SET_PRODUCTS (state, response) {
    state.products = response
  },
  SET_HIGHLIGHT (state, response) {
    state.highlight = response
  }
}

export const actions = {
  async getProducts ({ commit }) {
    const response = await this.$axios.$get('https://untitled-idva779u4g7j.runkit.sh/products')
    commit('SET_PRODUCTS', response)
  },
  async getHighlight ({ commit }) {
    const response = await this.$axios.$get('https://untitled-idva779u4g7j.runkit.sh/highlight')
    commit('SET_HIGHLIGHT', response)
  }
}
