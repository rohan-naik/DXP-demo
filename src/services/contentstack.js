import axios from 'axios'

export const getActiveSteps = async () => {
  try {
    const headers = {
      access_token: import.meta.env.VITE_CONTENTSTACK_DELIVERY_TOKEN,
      api_key: import.meta.env.VITE_CONTENTSTACK_API_KEY,
    }
    const params = {
      locale: 'en-us',
      environment: import.meta.env.VITE_CONTENTSTACK_ENVIRONMENT,
    }
      const responseApi = await axios({
        method: 'GET',
        url: 'https://cdn.contentstack.io/v3/content_types/daily_steps/entries',
        headers: headers,
        params: params,
      })
    return responseApi.data.entries
  } catch (error) {
    console.error('Error fetching steps:', error)
    return null
  }
}

export const getActiveQuote = async () => {
  try {
    const headers = {
      access_token: import.meta.env.VITE_CONTENTSTACK_DELIVERY_TOKEN,
      api_key: import.meta.env.VITE_CONTENTSTACK_API_KEY,
    }
    const params = {
      locale: 'en-us',
      environment: import.meta.env.VITE_CONTENTSTACK_ENVIRONMENT,
    }
      const responseApi = await axios({
        method: 'GET',
        url: 'https://cdn.contentstack.io/v3/content_types/daily_quote/entries',
        headers: headers,
        params: params,
      })
    return responseApi.data.entries
  } catch (error) {
    console.error('Error fetching steps:', error)
    return null
  }
}
