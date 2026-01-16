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
        const quoteData = await getActiveQuote()
        if (quoteData) {
          setQuote(quoteData[0])
        }
        const stepsData = await getActiveSteps()     
        if (stepsData) {
          setSteps(stepsData[0].steps)
        }
      } catch (error) {
        console.error('Error fetching content from Contentstack:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchContent()
  }, [])

  const toggleStep = (order) => {
    setSteps(steps.map(step =>
      step.order === order ? { ...step, completed: !step.completed } : step
    ))
  }

  const addStep = (title, description) => {
    const newStep = {
      order: steps.length + 1,
      step_title: title,
      description: description,
      completed: false
    }
    setSteps([...steps, newStep])
  }

  const deleteStep = (order) => {
    setSteps(steps.filter(step => step.order !== order))
  }

  return (
    <div className="min-h-screen pb-16">
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <QuoteCard quote={quote} />
        <StepForwardList 
          steps={steps} 
          onToggle={toggleStep} 
          onAdd={addStep}
          onDelete={deleteStep}
        />
      </main>
    </div>
  )
}

export default App
