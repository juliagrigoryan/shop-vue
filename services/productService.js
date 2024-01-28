import axios from 'axios'

export default {
  async getProductList() {
    return (await axios.get('https://dummyjson.com/products?limit=10')).data
  },

  async getProductItem(payload) {
    return (await axios.get(`https://dummyjson.com/products/${payload}`)).data
  }
}
