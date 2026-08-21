import { useState } from "react";


function SlideThree({onNext }) {
    const foodOptions = [{
        label: 'Pizza', emoji: ''},
        {label: 'Burger', emoji: ''},
        {label: 'BBQ', emoji:''},
        {label: 'Mexican', emoji:''},
        {label: 'Indian', emoji:''}]

    const dessertOptions = [
        {label: 'Ice Cream', emoji: ''},
        {label: 'Cake', emoji: ''},
        {label: 'Waffles', emoji: ''}
    ]
    const [food, setFood] = useState('')
    const [dessert, setDessert] = useState('')
    const [error, setError] = useState('')

    const handleNext = () => {
        if (!food || !dessert) {
            setError("Please pick both food and dessert")
            return
        }

        onNext(food, dessert)

    }

    return (
        <>
            <div className="bg-white rounded-3xl shadow-xl p-8 max-w-md w-full text-center">
                <img src="https://media.giphy.com/media/du3J3cXyzhj75IOgvA/giphy.gif" className="w-48 h-48 object-cover rounded-2xl mx-auto mb-6" />

                <h2 className="text-2xl font-bold text-pink-500 mb-2">
                    What are we eating? 
                </h2>

                <p className="text-gray-400 mb-4">Pick your favourite!</p>

                <div className="grid grid-cols-2 gap-3 mb-6">
                {foodOptions.map(option => (
                    <div className={`border-2 rounded-2xl p-4 cursor-pointer transition-all
                        ${food === option.label
                            ? 'border-pink-500 bg-pink-50 scale-105'
                            : 'border-gray-200 hover:border-pink-300'
                        }`} key={option.label} onClick={() => setFood(option.label)}>
                            <p className="text-3xl mb-1">{option.emoji}</p>
                            <p className="text-sm font-medium text-gray-700">{option.label}</p>

                    </div>
                ))}
                </div>

                <h2 className="text-2xl font-bold text-pink-500 mb-2">
                    And for dessert? 
                </h2>

                <div className="grid grid-cols-2 gap-3 mb-6">
                    {dessertOptions.map(option => (
                        <div key={option.label} onClick={() => setDessert(option.label)} className={`border-2 rounded-2xl p-4 cursor-pointer transition-all ${dessert === option.label ? 'border-pink-500 bg-pink-50 scale-105':'border-gray-200 hover:border-pink-300'}`}>
                            <p className="text-3xl mb-1">{option.emoji}</p>
                            <p className="text-sm font-medium text-gray-700">{option.label}</p>
                        </div>
                    ))

                    }
                </div>
                {error && <p className="text-red-400 text-sm mb-4">{error}</p>}

                <button
                    onClick={handleNext}
                    disabled={!food || !dessert}
                    className={`w-full py-3 rounded-full font-bold text-lg transition-colors
                    ${!food || !dessert
                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        : 'bg-pink-500 hover:bg-pink-600 text-white'
                    }`}
                >
                    Next
                </button>

            </div>
        </>
    )
}

export default SlideThree