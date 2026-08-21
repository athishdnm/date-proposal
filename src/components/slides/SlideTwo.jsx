import { useState } from 'react'

function SlideTwo({ name, onNext }) {
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [error, setError] = useState('')

  const handleNext = () => {
    if (!date || !time) {
      setError('Please pick a date and time!')
      return
    }
    onNext(date, time)   // sends data up to Proposal
  }

  return (
    <div className="flex flex-col gap-4 bg-white rounded-3xl shadow-xl p-8 max-w-md w-full text-center">
      {/* GIF */}
        <img src="https://media.giphy.com/media/l4pTfx2qLszoacZRS/giphy.gif" className="w-48 h-48 object-cover rounded-2xl mx-auto mb-6" />
      {/* Title */}
        <h1 className="text-3xl text-pink-500 mb-2">When works for you?</h1>
      {/* Date input */}
        <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            min={new Date().toISOString().split('T')[0]}  // ← no past dates!
            className="w-full border-2 border-pink-200 rounded-xl px-4 py-3
                        focus:outline-none focus:border-pink-400 text-gray-700"
        />
      {/* Time input */}
        <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full border-2 border-pink-200 rounded-xl px-4 py-3
                        focus:outline-none focus:border-pink-400 text-gray-700"
            />
      {/* Error message */}
      {error && <p className="text-red-400 text-sm mt-2">{error}</p>}

      {/* Next button */}
      <button
  onClick={handleNext}
  disabled={!date || !time}    // disabled if empty
  className={`w-full py-3 rounded-full font-bold text-lg transition-colors
    ${!date || !time
      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'   // disabled
      : 'bg-pink-500 hover:bg-pink-600 text-white'       // active
    }`}
>
  Next
</button>
    </div>
  )
}

export default SlideTwo