import Contentstack from 'contentstack'

const Stack = Contentstack.Stack({
  api_key: import.meta.env.VITE_CONTENTSTACK_API_KEY || '',
  delivery_token: import.meta.env.VITE_CONTENTSTACK_DELIVERY_TOKEN || '',
  environment: import.meta.env.VITE_CONTENTSTACK_ENVIRONMENT || 'dev2'
})

export const getActiveQuote = async () => {
  try {
    const query = Stack.ContentType('daily_quote').Query()
    query.where('active', true)
    query.limit(1)
    const result = await query.find()
    
    if (result[0] && result[0].length > 0) {
      const entry = result[0][0]
      return {
        text: entry.quote_text,
        author: entry.author
      }
    }
    return null
  } catch (error) {
    console.error('Error fetching quote:', error)
    return null
  }
}

export const getActiveSteps = async () => {
  try {
    const query = Stack.ContentType('daily_steps').Query()
    query.where('active', true)
    query.limit(1)
    const result = await query.find()
    
    if (result[0] && result[0].length > 0) {
      const entry = result[0][0]
      return entry.steps
        .sort((a, b) => (a.order || 0) - (b.order || 0))
        .map((step, index) => ({
          id: index + 1,
          title: step.step_title,
          description: step.description,
          completed: false
        }))
    }
    return null
  } catch (error) {
    console.error('Error fetching steps:', error)
    return null
  }
}
