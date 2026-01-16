function StepItem({ step, onToggle }) {
  return (
    <div 
      className={`flex items-start gap-4 p-4 rounded-lg transition-all duration-200 hover:bg-neutral-50 ${
        step.completed ? 'step-completed' : ''
      }`}
    >
      <input
        type="checkbox"
        checked={step.completed || false}
        onChange={onToggle}
        className="checkbox-custom mt-1"
        aria-label={`Mark "${step.step_title}" as ${step.completed ? 'incomplete' : 'complete'}`}
      />
      
      <div className="flex-1">
        <h3 className="step-title text-base font-medium text-neutral-800 mb-1">
          {step.step_title}
        </h3>
        <p className="text-sm text-neutral-500">
          {step.description}
        </p>
      </div>
    </div>
  )
}

export default StepItem
