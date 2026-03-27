import { Suspense, useState } from 'react'
import './App.css'
import Hero from './Components/Hero/Hero'
import NavBar from './Components/NavBar/NavBar'
import Players from './Components/Players/Players'
import Footer from './Components/Footer/Footer'


const fetchPlayers = async () => {

  const res = await fetch('/data.json')
  return res.json();

}

function App() {

  const playersPromise = fetchPlayers()
  const [coin, setCoin] = useState(550000)

  return (
    <div className='w-11/12 mx-auto max-w-480'>

      <NavBar coin={coin} setCoin={setCoin} />

      <Hero />

      <Suspense fallback={<span className="loading loading-spinner text-neutral"></span>}>
        <Players playersPromise={playersPromise} coin={coin} setCoin={setCoin} />
      </Suspense>

      <Footer />
    </div>
  )
}

export default App
