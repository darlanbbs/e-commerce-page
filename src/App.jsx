

import './App.css'

import { NavBarTop } from './components/NavBarTop'
import { CarouselContainer } from './main/CarouselContainer'
import { Container } from './main/Container'


function App() {

  return (
    <div className="App">

     
      <NavBarTop/>
      <CarouselContainer/>
      <Container/>
    </div>
  )
}

export default App


