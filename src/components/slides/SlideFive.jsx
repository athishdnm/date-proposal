import emailjs from '@emailjs/browser'
import { useState } from 'react'
import { FaGrinHearts } from "react-icons/fa";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { TbBowlSpoonFilled } from "react-icons/tb";
import { IoTimeSharp } from "react-icons/io5";
import { LuDessert } from "react-icons/lu";
import { LuClapperboard } from "react-icons/lu";
import { GiGlassCelebration } from "react-icons/gi";
import { BsHearts } from "react-icons/bs";

function SlideFive({ name, email, selections }) {
  const [sending,   setSending]   = useState(false)
  const [sent,      setSent]      = useState(false)
  const [error,     setError]     = useState('')

  const handleSubmit = async () => {
    try {
      setSending(true)

      await emailjs.send(
        'YOUR_SERVICE_ID',    // ← replace with yours
        'YOUR_TEMPLATE_ID',   // ← replace with yours
        {
          to_email:  email,
          from_name: name,
          date:      selections.date,
          time:      selections.time,
          food:      selections.food,
          dessert:   selections.dessert,
          activity:  selections.activity,
        },
        'YOUR_PUBLIC_KEY'     // ← replace with yours
      )

      setSent(true)

    } catch (err) {
      setError('Oops! Something went wrong. Try again!')
    } finally {
      setSending(false)
    }
  }

  // After email sent
  if (sent) {
    return (
      <div className="bg-white rounded-3xl shadow-xl p-8 max-w-md w-full text-center">
        <img
          src="https://media.giphy.com/media/g9582DNuQppxC/giphy.gif"
          className="w-48 h-48 object-cover rounded-2xl mx-auto mb-6"
        />
        <h2 className="text-3xl font-bold text-pink-500 mb-2">
          Yay! It's confirmed! <GiGlassCelebration />
        </h2> 
        <p className="text-gray-400 mb-4 flex flex-row justify-center">
          See you soon! Can't wait! < BsHearts className="text-gray-400 mt-1" />
        </p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 max-w-md w-full text-center">

      {/* GIF */}
      <img
        src="https://media.giphy.com/media/g9582DNuQppxC/giphy.gif"
        className="w-48 h-48 object-cover rounded-2xl mx-auto mb-6"
      />

      {/* Title */}
      <h2 className="text-3xl font-bold text-pink-500 mb-2 flex flex-row justify-center">
        Yay! It's a date! <GiGlassCelebration />
      </h2>
      <p className="text-gray-400 mb-6 flex flex-row justify-center">
        Here's what we planned! < BsHearts className="text-gray-400 mt-1" />
      </p>

      {/* Summary card */}
      <div className="bg-pink-50 rounded-2xl p-6 mb-6 text-left flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <span className="text-2xl">< BsFillCalendarDateFill /></span>
          <div>
            <p className="text-xs text-gray-400">Date</p>
            <p className="font-semibold text-gray-700">{selections.date}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-2xl">< IoTimeSharp /></span>
          <div>
            <p className="text-xs text-gray-400">Time</p>
            <p className="font-semibold text-gray-700">{selections.time}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-2xl">< TbBowlSpoonFilled /></span>
          <div>
            <p className="text-xs text-gray-400">Food</p>
            <p className="font-semibold text-gray-700">{selections.food}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-2xl">< LuDessert /></span>
          <div>
            <p className="text-xs text-gray-400">Dessert</p>
            <p className="font-semibold text-gray-700">{selections.dessert}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-2xl">< LuClapperboard /></span>
          <div>
            <p className="text-xs text-gray-400">Activity</p>
            <p className="font-semibold text-gray-700">{selections.activity}</p>
          </div>
        </div>
      </div>

      {/* Error */}
      {error && <p className="text-red-400 text-sm mb-4">{error}</p>}

      {/* Submit button */}
      <button
        onClick={handleSubmit}
        disabled={sending}
        className={`w-full py-3 rounded-full font-bold text-lg transition-colors flex flex-row item-center justify-center
          ${sending
            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
            : 'bg-pink-500 hover:bg-pink-600 text-white'
          }`}
      >
        {sending ? 'Sending...' : 'Send! '}<FaGrinHearts className="mt-1.5" />
      </button>
      

    </div>
  )
}

export default SlideFive