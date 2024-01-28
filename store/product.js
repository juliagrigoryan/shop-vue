import api from '~/services/productService'

export const state = () => ({
  productList: [],
  productItem: {},
  filteredProducts: []
})

export const mutations = {
  setProductList(state, data) {
    state.productList = data.products
  },
  setProductItem(state, data) {
    state.productItem = data
  },
  setFilteredProducts(state, data) {
    state.filteredProducts = data
  }
}

export const actions = {
  async fetchProductList(context) {
    const products = await api.getProductList()
    context.commit('setProductList', products)
  },

  async fetchProductItem(context, payload) {
    const item = await api.getProductItem(payload)
    context.commit('setProductItem', item)
  },

  filterProducts(context, payload) {
    const products = context.state.productList
    const checkInclusion = (el, key, value) => value.includes(el[key])
    const checkRating = (el, key, value) => el[key] >= Number([...value])
    const checkPrice = (el, key, value) => {
      const price = value.split('-')
      return el[key] >= Number(price[0]) && el[key] <= Number(price[1])
    }

    const filters = {
      category: checkInclusion,
      brand: checkInclusion,
      rating: checkRating,
      price: checkPrice
    }

    const filteredProducts = products.filter((el) => {
      return Object.entries(payload).every(([key, value]) => {
        return filters[key](el, key, value)
      })
    })

    context.commit('setFilteredProducts', filteredProducts)
  }
}

export const getters = {
  getProductList(state) {
    return state.productList
  },
  getProductItem(state) {
    return state.productItem
  },
  getFilteredProducts(state) {
    return state.filteredProducts
  }
}
