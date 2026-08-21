import { BsHearts } from "react-icons/bs";
import { useState } from "react";

function SlideOne({name, onYes}) {
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [hasAppeared, setHasAppeared] = useState(false)
    const [hasRunAway, setHasRunAway] = useState(false)
     const [noClicked, setNoClicked] = useState(false)

    const runAway = () => {
    setHasRunAway(true) 
    setPosition({
        x: Math.random() * (window.innerWidth - 150),
        y: Math.random() * (window.innerHeight - 80),
    })
}
    if (noClicked) {
        return (
            <div className="bg-white rounded-3xl shadow-xl p-8 max-w-md w-full text-center">

                <img
                src="https://media.giphy.com/media/avOACDD5vOg71fncY3/giphy.gif"
                className="w-48 h-48 object-cover rounded-2xl mx-auto mb-6"
                alt="sad"
                />

                <h2 className="text-2xl font-bold text-gray-500 mb-2">
                Oh no... 
                </h2>
                <p className="text-gray-400 mb-6">
                That really broke my heart...
                Are you sure? 
                </p>

                {/* Give another chance button */}
                <div className="flex flex-col gap-3">
                <button
                    onClick={() => setNoClicked(false)}
                    className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 rounded-full transition-colors"
                >
                    Actually... Yes! 
                </button>
                <button
                    onClick={() => setNoClicked(false)}
                    className="w-full bg-gray-100 hover:bg-gray-200 text-gray-500 font-bold py-3 rounded-full transition-colors"
                >
                    Let me think again 
                </button>
                </div>

            </div>
        )
    }
    return (
        <>
            <div className="flex flex-col bg-white rounded-3xl shadow-xl p-8 max-w-md w-full text-center">
                <div className="img-sec">
                    <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTBwdjQwZGE3bWZtb3A5ZnVjc3B1em41Z2hwd3FveWlkOGltZXBheSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Vbtc9VG51NtzT1Qnv1/giphy.gif" alt="" srcset="" className="w-48 h-48 object-cover rounded-2xl mx-auto mb-6" />
                </div>
                <div className="title-sec flex flex-row item-center justify-center">
                    <h1 className="text-3xl font-bold text-pink-500 mb-2">Hey there!  </h1>
                    <BsHearts className="text-2xl text-pink-500" />
                </div>
                <div className="">
                    <h2 className="text-2xl text-pink-500 mb-2">Will you go on a date with {name}?</h2>
                </div>
                <div className="button-sec flex justify-center gap-6">
                    <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-8 rounded-full transition-colors " onClick={onYes}>Yes</button>
                    <button
                        onMouseEnter={runAway}
                        onClick={() => setNoClicked(true)}
                        style={hasRunAway ? {   
                            position: 'fixed',
                            left: position.x,
                            top: position.y,
                            transition: 'all 0.3s ease'
                        } : {}}                  
                        className="bg-gray-200 text-gray-600 font-bold py-3 px-8 rounded-full text-lg"
                        >
                        No 
                    </button>
                </div>
            </div>
        </>
    )
}

export default SlideOne