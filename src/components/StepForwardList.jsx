import { useState } from 'react'
import StepItem from './StepItem'

function StepForwardList({ steps, onToggle, onAdd, onDelete }) {
  const [showForm, setShowForm] = useState(false)
  const [newTitle, setNewTitle] = useState('')
  const [newDescription, setNewDescription] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (newTitle.trim()) {
      onAdd(newTitle, newDescription)
      setNewTitle('')
      setNewDescription('')
      setShowForm(false)
    }
  }

  return (
    <div className="card p-8">
      <div className="mb-6 flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-semibold text-neutral-800 mb-2">
            Step Forward
          </h2>
          <p className="text-neutral-500 text-sm">
            One small step at a time
          </p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors duration-200 text-sm font-medium"
        >
          {showForm ? 'Cancel' : '+ Add Step'}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="mb-6 p-4 bg-neutral-50 rounded-lg border border-neutral-200">
          <div className="mb-4">
            <label htmlFor="step-title" className="block text-sm font-medium text-neutral-700 mb-2">
              Step Title
            </label>
            <input
              id="step-title"
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              placeholder="e.g., Call a friend"
              className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="step-description" className="block text-sm font-medium text-neutral-700 mb-2">
              Description
            </label>
            <textarea
              id="step-description"
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
              placeholder="Add a brief description..."
              rows="2"
              className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors duration-200 font-medium"
          >
            Add Step
          </button>
        </form>
      )}
      
      <div className="space-y-4">
        {steps.map((step, key) => (
          <div key={key} className="relative group">
            <StepItem
              key={step.order}
              step={step}
              onToggle={() => onToggle(step.order)}
            />
            <button
              onClick={() => onDelete(step.order)}
              className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-red-500 hover:text-red-700 p-2"
              aria-label="Delete step"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default StepForwardList
