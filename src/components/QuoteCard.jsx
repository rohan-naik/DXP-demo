function QuoteCard({ quote }) {
  return (
    <div className="card p-8 mb-8">
      <div className="flex items-start gap-3">
        <svg 
          className="w-8 h-8 text-primary-300 flex-shrink-0 mt-1" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <div className="flex-1">
          <p className="text-xl text-neutral-700 leading-relaxed mb-4 font-light italic">
            {quote.text}
          </p>
          <p className="text-sm text-neutral-500 font-medium">
            — {quote.author}
          </p>
        </div>
      </div>
    </div>
  )
}

export default QuoteCard
