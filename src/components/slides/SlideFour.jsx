import { useState } from 'react'

function SlideFour({ onNext }) {
  const [selectedActivity, setSelectedActivity] = useState('')
  const [error, setError] = useState('')

  const activities = [
    { label: 'Cinema',  emoji: '' },
    { label: 'Beach',   emoji: '' },
    { label: 'Park',    emoji: '' },
    { label: 'Bowling', emoji: '' },
  ]

  const handleNext = () => {
    if (!selectedActivity) {
      setError('Please pick an activity!')
      return
    }
    onNext(selectedActivity)
  }

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 max-w-md w-full text-center">

      {/* GIF */}
      <img
        src="https://media.giphy.com/media/t3sZxY5zS5B0z5zMIz/giphy.gif"
        className="w-48 h-48 object-cover rounded-2xl mx-auto mb-6"
      />

      {/* Title */}
      <h2 className="text-2xl font-bold text-pink-500 mb-2">
        What shall we do? 🎉
      </h2>
      <p className="text-gray-400 mb-6">Pick an activity!</p>

      {/* Activity grid */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        {activities.map(option => (
          <div
            key={option.label}
            onClick={() => setSelectedActivity(option.label)}
            className={`border-2 rounded-2xl p-4 cursor-pointer transition-all
              ${selectedActivity === option.label
                ? 'border-pink-500 bg-pink-50 scale-105'
                : 'border-gray-200 hover:border-pink-300'
              }`}
          >
            <p className="text-3xl mb-1">{option.emoji}</p>
            <p className="text-sm font-medium text-gray-700">{option.label}</p>
          </div>
        ))}
      </div>

      {/* Error */}
      {error && <p className="text-red-400 text-sm mb-4">{error}</p>}

      {/* Next button */}
      <button
        onClick={handleNext}
        disabled={!selectedActivity}
        className={`w-full py-3 rounded-full font-bold text-lg transition-colors
          ${!selectedActivity
            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
            : 'bg-pink-500 hover:bg-pink-600 text-white'
          }`}
      >
        Next 
      </button>

    </div>
  )
}

export default SlideFour