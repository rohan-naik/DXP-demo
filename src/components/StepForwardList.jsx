import StepItem from './StepItem'

function StepForwardList({ steps, onToggle }) {
  return (
    <div className="card p-8">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-neutral-800 mb-2">
          Step Forward
        </h2>
        <p className="text-neutral-500 text-sm">
          One small step at a time
        </p>
      </div>
      
      <div className="space-y-4">
        {steps.map(step => (
          <StepItem
            key={step.id}
            step={step}
            onToggle={() => onToggle(step.id)}
          />
        ))}
      </div>
    </div>
  )
}

export default StepForwardList
