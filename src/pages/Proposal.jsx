import { useState } from "react";
import { useSearchParams } from 'react-router-dom'
import  SlideOne  from "../components/slides/SlideOne";
import  SlideTwo  from "../components/slides/SlideTwo";
import  SlideThree  from "../components/slides/SlideThree";
import  SlideFour  from "../components/slides/SlideFour";
import  SlideFive  from "../components/slides/SlideFive";

function Proposal () {

    const [searchParams] = useSearchParams();
    const [slide, setSlide] = useState(1);

    const userName = searchParams.get('name') || 'Athish';
    const email = searchParams.get('email') || 'athishdnm@gmail.com'

    const [selections, setSelections] = useState({
        date: '',
        time: '',
        food: '',
        desert: '',
        activity: '',
    })

    const updateSelection = (key, value) => {
        setSelections((prev) => ({...prev, [key]: value}))
    }

    return(
        <>

            <div className="min-h-screen bg-pink-50 flex items-center justify-center p-4">
                {slide === 1 && (
                    <SlideOne name={userName} onYes={() => setSlide(2)} />
                )}   
                {
                    slide === 2 && (
                        <SlideTwo name={userName} onNext={(date, time) => {updateSelection('date', date); updateSelection('time', time); setSlide(3)}} />
                    )
                }
                {slide === 3 && (
                    <SlideThree
                        onNext={(food, dessert) => {
                            updateSelection('food', food)
                            updateSelection('dessert', dessert)
                            setSlide(4)
                        }}
                        />
                )

                }
                {slide === 4 && (
        <SlideFour
          onNext={(activity) => {
            updateSelection('activity', activity)
            setSlide(5)
          }}
        />
      )}
      {slide === 5 && (
        <SlideFive
          name={name}
          email={email}
          selections={selections}
        />
      )}
            </div>

        </>
    );
}

export default Proposal