import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Generator from '../pages/Generator'
import Proposal from '../pages/Proposal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen bg-pink-50">
        <Routes>
          <Route path='/'         element={<Generator />} />
          <Route path='/proposal' element={<Proposal />} />
        </Routes>
      </div>
    </>
  )
}

export default App
