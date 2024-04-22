import { Suspense, lazy } from 'react'

import { BrowserRouter, Route, Routes } from "react-router-dom"
import AppLayout from "./Components/AppLayout/AppLayout"
import NavBar from "./Components/NavBar/NavBar"
import { AnimalsProvider } from "./Context/AnimalsContext"
import RegnList from "./Components/RegnList/RegnList"
import Regn from './Components/RegnList/Regn/Regn'
import Animals from './Components/Animals/Animals'
import Habitats from './Components/Habitats/Habitats'
import Habitat from './Components/Habitats/Habitat/Habitat'
import SelectedAnimal from "./Components/Animals/SelectedAnimal/SelectedAnimal"
import SpinnerFullPage from './Handy/SpinnerFullPage'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <>
      <AnimalsProvider>
        <BrowserRouter>
          <NavBar></NavBar>
          <Suspense fallback={<SpinnerFullPage />}>
            <Routes>
              <Route path='/' element={<AppLayout />}></Route>
              <Route path='SpinnerFullPage' element={<SpinnerFullPage />}></Route>
              <Route path="/animals" element={<Animals />}></Route>
              <Route path="/animals/:id" element={<SelectedAnimal />}></Route>
              <Route path="/habitats" element={<Habitats />}></Route>
              <Route path="/habitats/:id" element={<Habitat />}></Route>
              <Route path="/regnList" element={<RegnList />}></Route>
              <Route path="/regn/:id" element={<Regn />}></Route>
            </Routes>
          </Suspense>
          <Footer/>
        </BrowserRouter>
      </AnimalsProvider>
    </>
  )
}

export default App
