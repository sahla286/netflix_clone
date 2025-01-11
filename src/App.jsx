import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import Rowpost from './Components/RowPoster/Rowpost'
import { originals,actions, comedy, horror, romantic } from './urls'

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Rowpost url={originals} title='Netflix Originals' />
      <Rowpost url={actions} title='Action' isSmall />
      <Rowpost url={comedy} title='Action' isSmall />
      <Rowpost url={horror} title='Horror' isSmall />
      <Rowpost url={romantic} title='Romance' isSmall />
    </div>
  )
}

export default App
