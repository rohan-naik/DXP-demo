import { useState, useEffect } from 'react'
import Header from './components/Header'
import QuoteCard from './components/QuoteCard'
import StepForwardList from './components/StepForwardList'
import { getActiveQuote, getActiveSteps } from './services/contentstack'
import { quote as fallbackQuote } from './data/quote'
import { steps as fallbackSteps } from './data/steps'

function App() {
  const [quote, setQuote] = useState(fallbackQuote)
  const [steps, setSteps] = useState(fallbackSteps)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const [quoteData, stepsData] = await Promise.all([
          getActiveQuote(),
          getActiveSteps()
        ])
        
        if (quoteData) {
          setQuote(quoteData)
        }
        
        if (stepsData) {
          setSteps(stepsData)
        }
      } catch (error) {
        console.error('Error fetching content from Contentstack:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchContent()
  }, [])

  const toggleStep = (id) => {
    setSteps(steps.map(step =>
      step.id === id ? { ...step, completed: !step.completed } : step
    ))
  }

  return (
    <div className="min-h-screen pb-16">
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <QuoteCard quote={quote} />
        <StepForwardList steps={steps} onToggle={toggleStep} />
      </main>
    </div>
  )
}

export default App
